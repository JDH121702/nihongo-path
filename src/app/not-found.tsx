import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
        道
      </span>
      <h1 className="mt-6 text-2xl font-bold">Path not found</h1>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        That lesson, story, or page doesn’t exist — or the link is outdated.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-speaking px-4 py-2.5 text-sm font-semibold text-white"
        >
          Home
        </Link>
        <Link
          href="/paths/speaking"
          className="rounded-xl border border-card-border px-4 py-2.5 text-sm font-semibold"
        >
          Speaking path
        </Link>
      </div>
    </div>
  );
}
