"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      {/* Mobile */}
      <div className="md:hidden">
        {/* Mobile top bar */}
        <div className="relative z-50 flex h-14 items-center justify-between px-4 bg-[#31297D]">
          <Image src="/dnslogo.png" alt="" width={88} height={42} />
          <button
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center rounded-md bg-white text-black w-10 h-10"
          >
            {!open ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="relative z-50 overflow-hidden">
          <div className="px-4 pb-3 pt-2 bg-[#261F6C] text-white shadow-2xl rounded-b-2xl max-h-[65vh] overflow-y-auto">
            {/* Mobile quick links */}
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-mono tracking-wide pb-2">
              <span>About us</span>
              <span>•</span>
              <span>Careers</span>
              <span>•</span>
              <span>0845 034 0095</span>
              <span>•</span>
              <span>Request support</span>
            </div>

            {/* Mobile main nav */}
            <nav className="pt-1">
              <ul className="grid grid-cols-2 gap-2 text-[16px] font-sans font-semibold">
                <li><span className="block rounded-lg bg-white px-3 py-3 text-black">Services</span></li>
                <li><span className="block rounded-lg bg-white px-3 py-3 text-black">Case Studies</span></li>
                <li><span className="block rounded-lg bg-white px-3 py-3 text-black">Insights</span></li>
                <li><span className="block rounded-lg bg-white px-3 py-3 text-black">Contact</span></li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-8 pt-4 pb-4">
          <div className="flex items-center gap-6 min-w-0">
            <div className="shrink-0">
              <Image src="/dnslogo.png" alt="" width={100} height={48} />
            </div>

            <div className="flex flex-col min-w-0">
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

          <div className="flex flex-col items-end gap-3 mt-2">
            <span className="font-mono text-[13px] font-medium text-white tracking-wide">
              Request support
            </span>
            <button className="font-sans inline-flex items-center justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-black shadow hover:shadow-md transition min-w-[160px]">
              Call Me Back
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
