"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        A page hit an error. Try again — your progress in this browser should
        still be saved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-speaking px-4 py-2.5 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-card-border px-4 py-2.5 text-sm font-semibold"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
