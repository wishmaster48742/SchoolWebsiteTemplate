"use client";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Play, Eye, MapPin } from "lucide-react";

const tourStops = [
  { name: "Main Entrance & Reception", desc: "A grand reception area welcoming students, parents, and guests with digital displays and a warm front desk.", img: "/images/campus-aerial.jpg" },
  { name: "Academic Block", desc: "Three-story building housing 60+ smart classrooms with interactive whiteboards and ergonomic furniture.", img: "/images/modern-classroom.jpg" },
  { name: "Science Laboratories", desc: "Dedicated labs for Physics, Chemistry, Biology, and Computer Science with international safety standards.", img: "/images/science-lab.jpg" },
  { name: "Central Library", desc: "A cathedral of knowledge with 25,000+ books, digital reading stations, and quiet study alcoves.", img: "/images/library.jpg" },
  { name: "Innovation Hub", desc: "Maker space with 3D printers, robotics workstations, coding labs, and an AI exploration zone.", img: "/images/innovation-hub.jpg" },
  { name: "Performing Arts Centre", desc: "800-seat auditorium with professional lighting, sound systems, and backstage facilities.", img: "/images/performing-arts.jpg" },
  { name: "Sports Complex", desc: "Indoor basketball court, 25m swimming pool, gymnasium, and outdoor athletics track.", img: "/images/sports-complex.jpg" },
  { name: "Campus Grounds", desc: "Lush green lawns, botanical garden, outdoor amphitheatre, and shaded walkways for relaxation.", img: "/images/campus-tour.jpg" },
];

export default function VirtualTour() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-tour.jpg" alt="Virtual Tour" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">360° Experience</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Virtual Tour</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Explore our world-class campus from the comfort of your home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Video CTA */}
      <section className="section-container px-6 py-12 sm:py-20">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl group cursor-pointer">
            <img src="/images/campus-tour.jpg" alt="Campus Tour Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/20 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} className="text-brand-navy ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-1">Watch Video</p>
              <p className="text-lg sm:text-xl font-bold">Full Campus Walkthrough — 8 minutes</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Tour Stops */}
      <section className="bg-slate-50 py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Explore</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Campus Tour Stops</h2>
              <p className="text-slate-600 font-medium mt-3">Click on any stop to explore that area of our campus.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {tourStops.map((stop, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={stop.img} alt={stop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/30 transition-colors flex items-center justify-center">
                      <Eye size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-brand-navy uppercase tracking-widest flex items-center gap-1">
                      <MapPin size={10} /> Stop {i + 1}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-2">{stop.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{stop.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit CTA */}
      <section className="section-container px-6 py-12 sm:py-20 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy mb-4">Prefer an In-Person Visit?</h2>
          <p className="text-slate-600 font-medium mb-8 max-w-2xl mx-auto">Our admissions team conducts guided campus tours every Saturday. Book your slot today.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">Schedule Visit <ArrowRight size={18} /></Link>
            <Link href="/gallery" className="btn-secondary">Photo Gallery</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
