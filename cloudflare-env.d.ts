interface CloudflareEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  IMAGES?: unknown;
  WORKER_SELF_REFERENCE?: Fetcher;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
}
