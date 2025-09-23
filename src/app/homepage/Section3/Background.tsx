import type { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#C92C93" }}>
      {children}
    </section>
  );
}
