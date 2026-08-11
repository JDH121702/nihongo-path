import { eq } from "drizzle-orm";
import { getAuth, getDb } from "@/lib/auth";
import { userProgress } from "@/db/schema";
import {
  PROGRESS_SCHEMA_VERSION,
  normalizeProgress,
} from "@/lib/progress-shared";
import type { AppProgress } from "@/lib/types";

async function requireUserId(request: Request) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ?? null;
}

export async function GET(request: Request) {
  const userId = await requireUserId(request);
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await getDb();
  const row = await db
    .select()
    .from(userProgress)
    .where(eq(userProgress.userId, userId))
    .get();

  if (!row) {
    return Response.json({ progress: null, updatedAt: null });
  }

  let parsed: AppProgress;
  try {
    parsed = normalizeProgress(JSON.parse(row.progressJson));
  } catch {
    return Response.json({ error: "Corrupt progress" }, { status: 500 });
  }

  return Response.json({
    progress: parsed,
    updatedAt: row.updatedAt,
    schemaVersion: row.schemaVersion,
  });
}

export async function PUT(request: Request) {
  const userId = await requireUserId(request);
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { progress?: unknown; updatedAt?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.progress || typeof body.updatedAt !== "string") {
    return Response.json(
      { error: "progress and updatedAt required" },
      { status: 400 },
    );
  }

  const progress = normalizeProgress(body.progress);
  const clientUpdatedAt = body.updatedAt;
  const db = await getDb();
  const existing = await db
    .select()
    .from(userProgress)
    .where(eq(userProgress.userId, userId))
    .get();

  if (existing && existing.updatedAt > clientUpdatedAt) {
    let serverProgress: AppProgress;
    try {
      serverProgress = normalizeProgress(JSON.parse(existing.progressJson));
    } catch {
      serverProgress = progress;
    }
    return Response.json(
      {
        error: "stale",
        progress: serverProgress,
        updatedAt: existing.updatedAt,
        schemaVersion: existing.schemaVersion,
      },
      { status: 409 },
    );
  }

  const payload = {
    userId,
    progressJson: JSON.stringify(progress),
    updatedAt: clientUpdatedAt,
    schemaVersion: PROGRESS_SCHEMA_VERSION,
  };

  if (existing) {
    await db
      .update(userProgress)
      .set({
        progressJson: payload.progressJson,
        updatedAt: payload.updatedAt,
        schemaVersion: payload.schemaVersion,
      })
      .where(eq(userProgress.userId, userId));
  } else {
    await db.insert(userProgress).values(payload);
  }

  return Response.json({
    ok: true,
    updatedAt: clientUpdatedAt,
    schemaVersion: PROGRESS_SCHEMA_VERSION,
  });
}

export async function DELETE(request: Request) {
  const userId = await requireUserId(request);
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await getDb();
  await db.delete(userProgress).where(eq(userProgress.userId, userId));
  return Response.json({ ok: true });
}
