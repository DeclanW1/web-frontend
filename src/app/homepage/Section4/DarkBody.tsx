import type { ReactNode } from "react";
import Image from "next/image";

// Black background with the gemoetric shapes
export default function DarkBody({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <div className="relative h-[600px] w-[600px] sm:h-[800px] sm:w-[800px]">
          <Image
            src="/geometric/geometric2.png"
            alt=""
            fill
            priority
            className="object-contain"/>
        </div>
      </div>

      {/* Content on page */}
      <div className="relative z-10">
        <div className="h-20 sm:h-24" />
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-sans text-center text-2xl sm:text-3xl font-bold text-white">
            The business process problem solvers.
          </h2>

          {/* Paragraphs under the title */}
          <div className="mt-6 mx-auto mb-12 sm:mb-16 grid max-w-4xl grid-cols-1 gap-6 text-sm text-neutral-300 sm:grid-cols-2">
            <p className="font-mono leading-relaxed">
              Recognising your frustrations with your print environment, IT
              services, document management &amp; communications and finding a solution
              to overcome them. Recognising your frustrations with your print environment, IT
              services, document management &amp; communications and finding a solution
              to overcome them.
            </p>
            <p className="font-mono leading-relaxed">
              Recognising your frustrations with your print environment, IT
              services, document management &amp; communications and finding a solution
              to overcome them. Recognising your frustrations with your print environment, IT
              services, document management &amp; communications and finding a solution
              to overcome them.
            </p>
          </div>

          {/* Nested child components */}
          {children}
        </div>
      </div>
    </div>
  );
}
