"use client";
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingSidebar() {
  return (
    <motion.div 
      className="fixed right-8 bottom-12 z-50 px-4"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <Link href="/contact" className="flex items-center gap-3 p-4 bg-brand-navy text-white rounded-full shadow-2xl shadow-brand-navy/20 hover:bg-brand-teal hover:text-brand-navy transition-all group overflow-hidden relative">
        <MessageCircle size={24} className="relative z-10" />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden font-bold whitespace-nowrap relative z-10">Chat with admissions</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </Link>
    </motion.div>
  );
}
