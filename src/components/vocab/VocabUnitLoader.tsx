"use client";

import dynamic from "next/dynamic";

const VocabUnitClient = dynamic(() => import("./VocabUnitClient"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center text-muted">
      Loading vocab…
    </div>
  ),
});

export function VocabUnitLoader({ unitId }: { unitId: number }) {
  return <VocabUnitClient unitId={unitId} />;
}
