import Image from "next/image";

//Image on the left side of the page
export default function ImageLeft() {
  return (
    <div className="relative w-full min-h-[360px] lg:min-h-[520px]">
      <Image
        src="/history.png"
        alt="Our early days"
        fill
        className="object-cover"
        priority
        sizes="(min-width:1024px) 50vw, 100vw"/>
    </div>
  );
}
