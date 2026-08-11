export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="mx-auto h-10 w-10 animate-pulse-soft rounded-xl bg-speaking/20" />
      <p className="mt-4 text-sm text-muted">Loading your path…</p>
    </div>
  );
}
