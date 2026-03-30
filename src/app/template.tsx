"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1], // premium quintic ease out
          opacity: { duration: 0.5 }
        }}
        className="pt-20"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
