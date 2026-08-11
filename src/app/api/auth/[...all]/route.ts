import { getAuth } from "@/lib/auth";

async function handle(request: Request) {
  try {
    const auth = await getAuth();
    return auth.handler(request);
  } catch (err) {
    console.error("Auth handler error:", err);
    return Response.json(
      { error: "Auth is not configured correctly" },
      { status: 503 },
    );
  }
}

export async function GET(request: Request) {
  return handle(request);
}

export async function POST(request: Request) {
  return handle(request);
}
