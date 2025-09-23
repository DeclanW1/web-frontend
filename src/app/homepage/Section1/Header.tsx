"use client";
import Image from "next/image";
import { motion } from "framer-motion";


//Animation for top header
export default function Header() {
  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>

      <div className="flex items-center justify-between px-8 pt-4 pb-4">

        {/* Logo on the left side */}
        <div className="flex items-center gap-6">
          <div className="shrink-0">
            <Image
              src="/dnslogo.png"
              alt="DNS logo"
              width={100}
              height={48}/>
          </div>

          {/* Nav Links in header */}
          <div className="flex flex-col">
            <div className="font-mono flex items-center gap-5 text-[13px] font-medium text-white tracking-wide">
              <span>0845 034 0095</span>
              <span>About us</span>
              <span>Careers</span>
            </div>

            <nav className="mt-4">
              <ul className="font-sans flex items-center gap-8 text-[18px] font-bold text-white">
                <li>Services</li>
                <li>Case Studies</li>
                <li>Insights</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>


        {/* Content on the right side of the */}
        <div className="flex flex-col items-end gap-3 mt-2">
          <span className="font-mono text-[13px] font-medium text-white tracking-wide">
            Request support
          </span>
          <button
            type="button"
            className="font-sans inline-flex items-center justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-black shadow hover:shadow-md hover:opacity-95 transition min-w-[160px]">
            Call Me Back
          </button>
        </div>
      </div>
    </motion.header>
  );
}
