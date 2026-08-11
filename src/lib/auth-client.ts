"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Prefer current origin in the browser so a bad/missing BETTER_AUTH_URL
  // secret cannot take down every page during SSR.
  baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
});

export const { signIn, signOut, useSession } = authClient;
