"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const facilities = [
  { id: 1, name: "Modern Classrooms", desc: "Technology-integrated learning spaces designed for collaboration and focused study.", img: "/images/modern-classroom.jpg" },
  { id: 2, name: "Science Laboratories", desc: "Fully equipped labs for Physics, Chemistry, and Biology, adhering to international safety standards.", img: "/images/science-lab.jpg" },
  { id: 3, name: "The Central Library", desc: "A vast collection of digital and print resources, featuring quiet study zones and media centers.", img: "/images/library.jpg" },
  { id: 4, name: "Sports Complex", desc: "Indoor and outdoor facilities for basketball, football, swimming, and athletics.", img: "/images/sports-complex.jpg" },
  { id: 5, name: "Performing Arts Center", desc: "A dedicated auditorium and studios for music, dance, and theatrical productions.", img: "/images/performing-arts.jpg" },
  { id: 6, name: "Innovation Hub", desc: "A creative space for robotics, coding, and maker activities with 3D printing facilities.", img: "/images/innovation-hub.jpg" }
];

export default function Campus() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-aerial.jpg" alt="Mentriq Campus" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">World-Class Facilities</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Our Campus</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              A safe, inspiring, and environment-friendly campus equipped with state-of-the-art facilities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Explore</p>
            <h2 className="text-4xl font-bold text-brand-navy">Campus Facilities</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {facilities.map((fac, i) => (
            <ScrollReveal key={fac.id} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-xl transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={fac.img} 
                    alt={fac.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-brand-navy uppercase tracking-widest shadow-sm">
                    Facility 0{fac.id}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{fac.name}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Campus Virtual Tour CTA */}
      <section className="relative overflow-hidden py-16 sm:py-32 text-white">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-tour.jpg" className="w-full h-full object-cover" alt="Mentriq Campus Tour" />
          <div className="absolute inset-0 bg-brand-navy/70"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8 px-6">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">360° Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold">Experience Our Atmosphere</h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed text-lg">
              Can&#39;t visit in person? Take a virtual walkthrough of our campus from the comfort of your home.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <button className="bg-brand-teal text-brand-navy px-10 py-4 rounded-xl font-bold hover:bg-white transition-all text-lg inline-flex items-center gap-2">
                Virtual Tour <ArrowRight size={20} />
              </button>
              <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-navy transition-all text-lg">
                Schedule Visit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
