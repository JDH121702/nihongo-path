import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { nextCookies } from "better-auth/next-js";
import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { D1Database } from "@cloudflare/workers-types";
import * as schema from "@/db/schema";

type AuthEnv = {
  DB: D1Database;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
};

/** Accept host-only secrets and normalize to a valid absolute URL. */
export function normalizeAuthBaseUrl(url: string | undefined): string {
  const raw = (url ?? "").trim().replace(/\/$/, "");
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

export function createAuth(env: AuthEnv) {
  const baseURL = normalizeAuthBaseUrl(env.BETTER_AUTH_URL);
  if (!baseURL) {
    throw new Error("BETTER_AUTH_URL is not set");
  }
  const db = drizzle(env.DB, { schema });
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema,
    }),
    baseURL,
    secret: env.BETTER_AUTH_SECRET,
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    plugins: [nextCookies()],
  });
}

export async function getAuth() {
  const { env } = await getCloudflareContext({ async: true });
  return createAuth(env as AuthEnv);
}

export async function getDb() {
  const { env } = await getCloudflareContext({ async: true });
  return drizzle((env as AuthEnv).DB, { schema });
}

export type Auth = ReturnType<typeof createAuth>;
