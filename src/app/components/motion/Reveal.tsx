"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{ delay }}
      viewport={{ once: true, amount: 0.1 }}>
      {children}
    </motion.div>
  );
}
