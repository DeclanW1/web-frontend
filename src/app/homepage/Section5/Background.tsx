import type { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white min-h-[100svh] supports-[min-height:100dvh]:min-h-[100dvh]">
      <div className="mx-auto max-w-6xl px-8 pt-20 pb-28">
        {children}
      </div>
    </section>
  );
}
