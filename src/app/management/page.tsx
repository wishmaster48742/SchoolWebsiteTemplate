"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Users, Mail, Phone } from "lucide-react";

const committeeMembers = [
  { name: "Mr. Rajesh Sharma", role: "Chairman", img: "/images/head-academics.jpg", desc: "A visionary leader with 30+ years of experience in educational administration and policy-making.", email: "chairman@mentriq.edu", phone: "+1 (555) 001-0001" },
  { name: "Mrs. Anita Desai", role: "Vice-Chairperson", img: "/images/head-welfare.jpg", desc: "Brings extensive expertise in curriculum design and international school accreditation.", email: "vicechairperson@mentriq.edu" },
  { name: "Dr. William Hughes", role: "Secretary", img: "/images/principal.jpg", desc: "Former university professor with a passion for digital-first learning environments.", email: "secretary@mentriq.edu" },
  { name: "Mrs. Priya Kapoor", role: "Treasurer", img: "/images/head-welfare.jpg", desc: "Chartered Accountant overseeing financial planning and scholarship fund management.", email: "treasurer@mentriq.edu" },
  { name: "Mr. Ahmed Khan", role: "Member — Infrastructure", img: "/images/head-academics.jpg", desc: "Civil engineer ensuring world-class campus infrastructure and safety standards." },
  { name: "Dr. Lisa Chen", role: "Member — Academics", img: "/images/principal.jpg", desc: "Ed.D. in Curriculum Studies, specializing in STEM education and assessment frameworks." },
  { name: "Mr. David Okoye", role: "Member — Sports & Activities", img: "/images/head-academics.jpg", desc: "Former national-level athlete promoting fitness and sportsmanship on campus." },
  { name: "Mrs. Fatima Al-Rashid", role: "Parent Representative", img: "/images/head-welfare.jpg", desc: "Active parent advocate ensuring the community's voice shapes school decisions." },
];

export default function Management() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-aerial.jpg" alt="Management" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Governance</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Management Committee</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              The dedicated individuals who guide our institution&#39;s vision, policy, and growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Leaders</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy mb-4">Board of Directors</h2>
            <p className="text-slate-600 font-medium">Committed to academic integrity, transparency, and the holistic growth of every student.</p>
          </div>
        </ScrollReveal>

        {/* Chairman Highlight */}
        <ScrollReveal>
          <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square w-48 sm:w-56 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
                <img src={committeeMembers[0].img} alt={committeeMembers[0].name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left space-y-4">
              <p className="text-brand-teal font-bold text-xs uppercase tracking-widest">{committeeMembers[0].role}</p>
              <h3 className="text-2xl sm:text-3xl font-bold">{committeeMembers[0].name}</h3>
              <p className="text-white/60 font-medium leading-relaxed">{committeeMembers[0].desc}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                <span className="inline-flex items-center gap-2 text-sm text-white/60"><Mail size={14} className="text-brand-teal" /> {committeeMembers[0].email}</span>
                <span className="inline-flex items-center gap-2 text-sm text-white/60"><Phone size={14} className="text-brand-teal" /> {committeeMembers[0].phone}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {committeeMembers.slice(1).map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-500 h-full text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-5 border-2 border-slate-100 group-hover:border-brand-teal transition-colors">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest mb-1">{m.role}</p>
                <h4 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">{m.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
