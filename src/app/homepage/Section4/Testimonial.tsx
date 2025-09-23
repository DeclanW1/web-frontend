import Image from "next/image";

//Client testimonial block with image in background and text overlayed
export default function Testimonial() {
  return (
    <div className="relative z-10 mx-auto -mt-30 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Background image */}
        <Image
          src="/placeholder.png"
          alt="Client testimonial"
          width={1600}
          height={600}
          className="block w-full h-auto"
          priority/>

        {/* Overlay text */}
        <div className="absolute inset-x-0 top-10 flex items-start">
          <div className="m-6 sm:m-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <p className="font-sans max-w-2xl sm:text-3xl font-semibold leading-snug">
              “We have been delighted with our DNS partnership. The club now
              has direction &amp; delivery on all document processes with a clear
              road map for the foreseeable future.”
            </p>
            <p className="font-mono mt-3 text-sm opacity-90">Paul Jonhson, Director</p>
            <p className="font-mono mt-1 text-sm opacity-90">Nottingham Forest Football Club</p>
          </div>
        </div>

        {/* The dots used to represent carosel of images */}
        <div className="absolute bottom-4 left-6 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
