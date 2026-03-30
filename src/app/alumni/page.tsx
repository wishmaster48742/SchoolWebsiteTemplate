"use client";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Linkedin, Globe, Quote } from "lucide-react";

const alumniProfiles = [
  { name: "Aditya Sharma", batch: "Class of 2015", role: "Software Engineer at Google", location: "Mountain View, USA", img: "/images/head-academics.jpg", quote: "The foundation I built at Mentriq gave me the confidence to pursue my dreams in Silicon Valley." },
  { name: "Priyanka Reddy", batch: "Class of 2016", role: "Doctor of Medicine (MD)", location: "AIIMS, New Delhi", img: "/images/head-welfare.jpg", quote: "The scientific rigor and discipline instilled at Mentriq shaped my medical career." },
  { name: "Omar Al-Farsi", batch: "Class of 2017", role: "Investment Banker, Goldman Sachs", location: "London, UK", img: "/images/principal.jpg", quote: "Mentriq's focus on critical thinking was the best preparation for the corporate world." },
  { name: "Sophie Martins", batch: "Class of 2018", role: "Environmental Scientist", location: "Geneva, Switzerland", img: "/images/head-welfare.jpg", quote: "I discovered my passion for climate science in Mentriq's labs and eco-club." },
  { name: "Karan Mehta", batch: "Class of 2019", role: "Startup Founder, EdTech", location: "Bangalore, India", img: "/images/head-academics.jpg", quote: "Mentriq taught me to innovate and think big. I carry that entrepreneurial spirit every day." },
  { name: "Emma Chen", batch: "Class of 2020", role: "Architect, Foster + Partners", location: "Dubai, UAE", img: "/images/principal.jpg", quote: "The art classes and campus design at Mentriq ignited my love for architecture." },
];

const stats = [
  { label: "Alumni Worldwide", val: "2,500+" },
  { label: "Countries", val: "45+" },
  { label: "Top Universities", val: "200+" },
  { label: "Alumni Meetups/Year", val: "12" },
];

export default function Alumni() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/alumni-group.jpg" alt="Alumni" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Stay Connected</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Alumni Network</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Our graduates are making their mark across the globe. Join a lifelong community of achievers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="py-4">
                <div className="text-2xl sm:text-4xl font-black text-brand-teal mb-1">{s.val}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Where Are They Now?</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Featured Alumni</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {alumniProfiles.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-brand-teal transition-colors shrink-0">
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{a.name}</h4>
                    <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">{a.batch}</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-slate-500 mb-5">
                  <div className="flex items-center gap-2"><Globe size={12} className="text-brand-teal shrink-0" /> {a.role}</div>
                  <div className="text-slate-400">{a.location}</div>
                </div>
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <Quote size={16} className="text-brand-teal/30 mb-2" />
                  <p className="text-sm text-slate-600 italic leading-relaxed">"{a.quote}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join Alumni Network CTA */}
      <section className="bg-slate-50 py-12 sm:py-20 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Join the Alumni Portal</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Connect with batch-mates, mentor current students, and stay updated on alumni events and reunions.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="btn-primary"><Linkedin size={18} /> Register on Portal</button>
              <Link href="/events" className="btn-secondary">Alumni Events</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
