import Image from "next/image";


// Insites + News section with content on left side
export default function Insights() {
  return (
    <section>
      {/* Left side section title */}
      <h3 className="text-white text-2xl font-extrabold">Insights &amp; News</h3>

      {/* Featured articles + Images */}
      <article className="mt-5">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative h-48 sm:h-56">
            <Image
              src="/largelooplogo.png"
              alt="What is Microsoft Loop and how does it work"
              fill
              className="object-cover"
              priority/>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[11px] uppercase tracking-wide text-white">15/06/2024</p>
          <h4 className="mt-1 text-white font-bold">
            What is Microsoft Loop and how does it work
          </h4>
        </div>
      </article>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <article className="rounded-2xl bg-transparent">
          <div className="relative w-full h-40 sm:h-44 md:h-48">
            <Image
              src="/xerox.png"
              alt="Boost productivity within your law firm with Xerox technology"
              fill
              className="object-contain"/>
          </div>
          <div className="pt-3">
            <p className="text-[11px] uppercase tracking-wide text-white">15/06/2024</p>
            <h5 className="mt-1 text-sm text-white font-bold leading-snug line-clamp-2">
              Boost productivity within your law firm with Xerox technology
            </h5>
          </div>
        </article>

        <article className="rounded-2xl bg-transparent">
          <div className="relative w-full h-40 sm:h-44 md:h-48">
            <Image
              src="/smalllooplogo.png"
              alt="What is Microsoft Loop and how does it work"
              fill
              className="object-contain"/>
          </div>
          <div className="pt-3">
            <p className="text-[11px] uppercase tracking-wide text-white">15/06/2024</p>
            <h5 className="mt-1 text-sm text-white font-bold leading-snug line-clamp-2">
              What is Microsoft Loop and how does it work
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
}
