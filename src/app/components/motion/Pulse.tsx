"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PulseProps {
  children: ReactNode;
  repeat?: number;
}

export default function Pulse({ children, repeat = 2 }: PulseProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        repeat,
        repeatType: "loop"
      }}
      viewport={{ once: false, amount: 0.6 }}>
      {children}
    </motion.div>
  );
}
