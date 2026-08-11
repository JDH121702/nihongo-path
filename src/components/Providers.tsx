"use client";

import { ProgressProvider } from "@/lib/progress";
import { CelebrationHost } from "@/components/game/CelebrationHost";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      {children}
      <CelebrationHost />
    </ProgressProvider>
  );
}
