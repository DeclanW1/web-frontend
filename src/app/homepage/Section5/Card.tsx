import Image from "next/image";

//Reusable info card component
export default function Card({
  src,
  alt,
  title,
  text,
  tightLogo = false,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  tightLogo?: boolean;
}) {
  return (
    <div className="grid place-items-center text-center">
      {/* Logo for each card */}
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain ${tightLogo ? "p-0" : "p-2"}`}
          sizes="80px"/>
      </div>

      {/* Title for each card */}
      <h3 className="font-sans mt-4 text-sm font-semibold text-neutral-900 leading-tight min-h-[40px] flex items-center justify-center">
        {title}
      </h3>

      {/* Text for each card */}
      <p className="font-mono mt-2 text-xs text-neutral-600 max-w-[240px] leading-relaxed min-h-[60px]">
        {text}
      </p>
    </div>
  );
}


// List of the info needed to be rendered with each card
const ITEMS: Array<{
  src: string;
  alt: string;
  title: string;
  text: string;
  tightLogo?: boolean;
}> = [
  { src: "/calendar.svg", alt: "Business years", title: "Business years", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus." },
  { src: "/support.svg", alt: "On-site support", title: "On-site support", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus." },
  { src: "/teammembers.svg", alt: "Expert team members", title: "Expert team members", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus." },
  { src: "/contracts.svg", alt: "Live contracts", title: "Live contracts", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.", tightLogo: true },
  { src: "/training.svg", alt: "Guided training", title: "Guided training", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus." },
  { src: "/trophy.svg", alt: "Accreditations & awards", title: "Accreditations & awards", text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus." },
];


//Stat grid that renders all the cards
export function Stats() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center">
      {ITEMS.map((it) => (
        <Card
          key={it.title}
          src={it.src}
          alt={it.alt}
          title={it.title}
          text={it.text}
          tightLogo={it.tightLogo}/>
      ))}
    </div>
  );
}
