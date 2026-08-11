# Deploy Nihongo Path on Cloudflare (Workers + D1 + Google auth)

Guest mode still works with localStorage. Sign in with Google to sync progress across devices.

## Prerequisites

- Cloudflare account (Workers + D1 enabled)
- Google Cloud project with OAuth 2.0 Client (Web application)
- Node 20+

## 1. Create D1 database

```bash
npx wrangler login
npx wrangler d1 create nihongo-path
```

Copy the printed `database_id` into [`wrangler.jsonc`](wrangler.jsonc) replacing `REPLACE_WITH_D1_DATABASE_ID`.

Apply migrations:

```bash
npm run db:migrate:local    # local preview / next dev bindings
npm run db:migrate:remote   # production D1
```

## 2. Google OAuth

1. Google Cloud Console → APIs & Services → Credentials → Create OAuth client → Web application.
2. Authorized redirect URIs:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Preview (wrangler): `http://localhost:8787/api/auth/callback/google` (port may vary)
   - Production: `https://<your-worker>.workers.dev/api/auth/callback/google`
   - Custom domain: `https://<your-domain>/api/auth/callback/google`
3. Copy Client ID and Client Secret.

## 3. Local secrets

```bash
copy .dev.vars.example .dev.vars
```

Edit `.dev.vars`:

```
NEXTJS_ENV=development
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=<long random string, 32+ chars>
GOOGLE_CLIENT_ID=<from Google>
GOOGLE_CLIENT_SECRET=<from Google>
```

Generate a secret (PowerShell):

```powershell
[Convert]::ToBase64String((1..48 | ForEach-Object { Get-Random -Maximum 256 }) -as [byte[]])
```

Also create `.env.local` with the same auth vars if you use `next dev` without Wrangler bindings for client-side URL hints (optional; Better Auth reads server env from `.dev.vars` via OpenNext).

```
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

## 4. Develop

```bash
npm run db:migrate:local
npm run dev
```

- Guest progress: works immediately (localStorage).
- Google sign-in: needs D1 + secrets via `initOpenNextCloudflareForDev` (already wired in `next.config.ts`). If auth/API routes fail, use `npm run preview` for a Workers-accurate runtime.

```bash
npm run preview
```

## 5. Production secrets

Set Worker secrets (not committed):

```bash
npx wrangler secret put BETTER_AUTH_SECRET
npx wrangler secret put BETTER_AUTH_URL
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET
```

`BETTER_AUTH_URL` must be the public origin **including `https://`**, e.g. `https://nihongo-path.upsite-demos.workers.dev` (no trailing slash). A host-only value like `nihongo-path.upsite-demos.workers.dev` will break the site.

## 6. Deploy

```bash
npm run db:migrate:remote
npm run deploy
```

After first deploy, confirm the workers.dev URL (or attach a custom domain in the Cloudflare dashboard) and ensure that exact origin is in Google redirect URIs and `BETTER_AUTH_URL`.

## 7. Smoke test

1. Open the site as a guest → complete a short speaking or kanji action → confirm XP/local progress.
2. Click **Sign in** → Google → allow.
3. Confirm header shows avatar / **Synced**.
4. Open the same account in another browser/profile → progress matches (merged).
5. Rate a Review card → wait ~2s → refresh other browser → card state synced.
6. Sign out → guest local cache remains; cloud unchanged for the account.

## Architecture notes

| Piece | Role |
|---|---|
| `@opennextjs/cloudflare` | Runs Next.js 16 on Workers |
| Better Auth + Google | Accounts / sessions in D1 |
| `GET/PUT/DELETE /api/progress` | Syncs `AppProgress` JSON per user |
| localStorage | Guest mode + offline cache when signed in |

Conflict policy: last-write-wins on `updatedAt`. On 409, client merges and retries.

## Worker size

The curriculum is large. Free Workers allow **3 MiB compressed**; Paid allows **10 MiB**. After `npm run deploy`, check Wrangler’s gzip size. If over free limits, upgrade Workers Paid or split data loading.

## Rollback / reset

- User: Sign in → use in-app reset (clears local + `DELETE /api/progress`).
- Ops: `wrangler d1 execute nihongo-path --remote --command "DELETE FROM user_progress WHERE user_id='...'"`
