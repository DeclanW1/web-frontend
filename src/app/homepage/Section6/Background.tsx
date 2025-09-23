import type { ReactNode } from "react";
import Image from "next/image";

//Pink background + Geometric shape pattern
export default function Background({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#ff4f86] text-white">
      <div
        className="absolute left-0 bottom-[-16px] z-0 pointer-events-none">
        <div className="relative h-[720px] w-[720px] sm:h-[840px] sm:w-[840px]">
          <Image
            src="/geometric/geometric3.png"
            alt=""
            fill
            priority
            className="object-contain"
            style={{ objectPosition: "left bottom" }}/>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 px-6 pt-8 lg:pt-4 pb-6 lg:pb-4">
        {children}
      </div>
    </section>
  );
}