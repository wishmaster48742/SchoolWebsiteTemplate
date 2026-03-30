"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Campus", "Events", "Sports", "Arts", "Academics"];

const photos = [
  { src: "/images/campus-aerial.jpg", cat: "Campus", caption: "Aerial view of Mentriq campus" },
  { src: "/images/modern-classroom.jpg", cat: "Academics", caption: "Technology-integrated classrooms" },
  { src: "/images/science-lab.jpg", cat: "Academics", caption: "State-of-the-art science labs" },
  { src: "/images/library.jpg", cat: "Academics", caption: "The Central Library" },
  { src: "/images/varsity-sports.jpg", cat: "Sports", caption: "Inter-school basketball championship" },
  { src: "/images/sports-complex.jpg", cat: "Sports", caption: "Athletics track & field day" },
  { src: "/images/stage-performance.jpg", cat: "Arts", caption: "Annual Day musical performance" },
  { src: "/images/performing-arts.jpg", cat: "Arts", caption: "Performing Arts Center studio" },
  { src: "/images/holistic-art.jpg", cat: "Arts", caption: "Student art exhibition" },
  { src: "/images/science-fair.jpg", cat: "Events", caption: "Science & Innovation Expo 2026" },
  { src: "/images/exchange-program.jpg", cat: "Events", caption: "Global exchange program farewell" },
  { src: "/images/alumni-group.jpg", cat: "Events", caption: "Alumni homecoming 2025" },
  { src: "/images/innovation-hub.jpg", cat: "Campus", caption: "The Innovation Hub & Maker Space" },
  { src: "/images/campus-tour.jpg", cat: "Campus", caption: "Campus walkway at golden hour" },
  { src: "/images/primary-years.jpg", cat: "Academics", caption: "Primary Years activity time" },
  { src: "/images/debate-society.jpg", cat: "Events", caption: "Model United Nations conference" },
  { src: "/images/robotics-club.jpg", cat: "Events", caption: "Robotics club showcase" },
  { src: "/images/faculty-lecture.jpg", cat: "Academics", caption: "Faculty development workshop" },
  { src: "/images/middle-school.jpg", cat: "Academics", caption: "Middle school science project" },
  { src: "/images/high-school.jpg", cat: "Academics", caption: "High school seminar discussion" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? photos : photos.filter(p => p.cat === active);

  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/performing-arts.jpg" alt="Gallery" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Visual Stories</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Photo Gallery</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              A glimpse into the vibrant life, events, and achievements at Mentriq International School.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  active === cat ? "bg-brand-navy text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filtered.map((photo, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <ScrollReveal delay={i * 0.03}>
                <div
                  className="group rounded-2xl overflow-hidden cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-500"
                  onClick={() => setLightbox(i)}
                >
                  <img src={photo.src} alt={photo.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal block mb-1">{photo.cat}</span>
                      <p className="text-sm font-semibold">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white z-10" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={e => e.stopPropagation()}
            >
              <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.caption} className="max-w-full max-h-[80vh] object-contain rounded-2xl" />
              <p className="text-center text-white/70 mt-4 text-sm font-medium">{filtered[lightbox]?.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
