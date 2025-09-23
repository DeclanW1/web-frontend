"use client";
import Image from "next/image";
import { motion } from "framer-motion";


//Reusable card component for each service
function ServicesCard({
  bgClass = "bg-white",
  src,
  alt,
  title,
  text,
  titleClass = "",
  paragraphClass = "text-neutral-600",
  linkClass = "text-neutral-600",
}: {
  bgClass?: string;
  src: string;
  alt: string;
  title: string;
  text: string;
  titleClass?: string;
  paragraphClass?: string;
  linkClass?: string;
}) {
  return (
    <div
      className={`min-h-[340px] w-64 mx-auto rounded-2xl ${bgClass} pt-14 px-6 pb-6 shadow-lg flex flex-col items-center text-center`}>


        {/* Service - Logo + Title + Paragraph + Learn more link */}
      <div className="relative mb-3 h-8 w-20">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <h3 className={`font-sans text-[16px] font-bold ${titleClass}`}>{title}</h3>
      <p className={`font-mono mt-4 text-[11px] font-normal ${paragraphClass}`}>
        {text}
      </p>
      <span
        className={`font-mono mt-auto pt-4 text-[12px] font-normal underline cursor-pointer ${linkClass}`}>
        Learn more
      </span>
    </div>
  );
}


// The shared text for each of the services
const SERVICE_TEXT =
  "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.";

// Configuration for each of the service cards
const CARDS: Array<{
  key: string;
  bgClass: string;
  src: string;
  alt: string;
  title: string;
  titleClass: string;
  paragraphClass: string;
  linkClass: string;
}> = [
  {
    key: "it",
    bgClass: "bg-pink-500 text-white",
    src: "/itservices.png",
    alt: "IT Services logo",
    title: "IT Services",
    titleClass: "text-white",
    paragraphClass: "text-white",
    linkClass: "text-white",
  },
  {
    key: "mps",
    bgClass: "border border-neutral-200 bg-white",
    src: "/printservices.png",
    alt: "Managed Print Services logo",
    title: "Managed Print Services",
    titleClass: "text-[#F4207B]",
    paragraphClass: "text-neutral-600",
    linkClass: "text-[#F4207B]",
  },
  {
    key: "docs",
    bgClass: "border border-neutral-200 bg-white",
    src: "/docservices.png",
    alt: "Document Management logo",
    title: "Document Management",
    titleClass: "text-[#F4207B]",
    paragraphClass: "text-neutral-600",
    linkClass: "text-[#F4207B]",
  },
  {
    key: "comms",
    bgClass: "border border-neutral-200 bg-white",
    src: "/comservices.png",
    alt: "Communications logo",
    title: "Communications",
    titleClass: "text-[#F4207B]",
    paragraphClass: "text-neutral-600",
    linkClass: "text-[#F4207B]",
  },
];


// Main grid displaying animated services cards
export default function ServicesCards() {
  return (
    <div className="-mt-24 sm:-mt-28 lg:-mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c, i) => (
        <motion.div
          key={c.key}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
          className="transform-gpu will-change-transform">
          <ServicesCard
            bgClass={c.bgClass}
            src={c.src}
            alt={c.alt}
            title={c.title}
            text={SERVICE_TEXT}
            titleClass={c.titleClass}
            paragraphClass={c.paragraphClass}
            linkClass={c.linkClass}/>
        </motion.div>
      ))}
    </div>
  );
}
