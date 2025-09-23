import type { ReactNode } from "react";
import Image from "next/image";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-visible min-h-[100svh] supports-[min-height:100dvh]:min-h-[100dvh]">
      <div className="absolute inset-0 -z-20 pointer-events-none">

        {/* Background colour */}
        <div className="absolute inset-0 z-0 bg-[#31297D]" />

        {/* Geometrics fixed to the bottom right corner */}
        <div className="absolute bottom-[-16px] right-0 z-20">
          <div className="relative h-[720px] w-[720px] sm:h-[840px] sm:w-[840px]">
            <Image
              src="/geometric/geometric1.png"
              alt="geometric1"
              fill
              priority
              className="object-contain"
              style={{ objectPosition: "right bottom" }}/>
          </div>
        </div>
      </div>

      {/* Content passed as children */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}
