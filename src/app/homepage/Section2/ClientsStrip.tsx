import Image from "next/image";


//Section with images showing client logos
export default function ClientsStrip() {
  return (
    <div className="mt-20">
      <div className="relative mx-auto h-12 w-full sm:h-16">
        <Image
          src="/clients.png"
          alt="Client logos"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, 80vw"/>
      </div>
    </div>
  );
}
