"use client";

import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "@/lib/auth-client";
import { useProgress } from "@/lib/progress";

export function AuthButton() {
  const { data: session, isPending } = useSession();
  const { cloudSynced } = useProgress();

  if (isPending) {
    return (
      <span className="hidden sm:inline text-[10px] text-muted px-2">…</span>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-1.5">
        {cloudSynced && (
          <span className="hidden lg:inline text-[10px] text-muted">Synced</span>
        )}
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt=""
            className="h-7 w-7 rounded-full border border-card-border"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="hidden sm:inline max-w-[7rem] truncate text-xs text-muted">
            {session.user.name ?? session.user.email}
          </span>
        )}
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-lg p-2 text-muted hover:bg-surface hover:text-foreground"
          aria-label="Sign out"
          title="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        signIn.social({ provider: "google", callbackURL: "/" })
      }
      className="inline-flex items-center gap-1.5 rounded-lg border border-card-border px-2.5 py-1.5 text-xs font-semibold hover:bg-surface transition-colors"
    >
      <LogIn className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Sign in</span>
    </button>
  );
}
