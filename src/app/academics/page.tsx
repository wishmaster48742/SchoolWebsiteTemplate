"use client";
import { motion } from "framer-motion";
import { Calendar, FileText, BookOpen, GraduationCap, Download, Layers, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Academics() {
  return (
    <main className="bg-white">
      {/* Hero Header with Image */}
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/library.jpg" alt="Mentriq Library" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">Curriculum & Programs</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Academic Excellence</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Our curriculum challenges students intellectually while providing the tools and support needed to excel globally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">K-12 Programs</p>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Learning Pathways</h2>
            <p className="text-slate-600 font-medium text-lg">Comprehensive educational programs tailored for every stage of development.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            { title: "Primary Years", age: "Ages 5-11", desc: "Focus on inquiry-based learning, foundational literacy, and numeracy in a creative environment.", img: "/images/primary-years.jpg", icon: BookOpen },
            { title: "Middle School", age: "Ages 11-14", desc: "Transitioning to deeper subject expertise and developing critical thinking and collaborative skills.", img: "/images/middle-school.jpg", icon: Layers },
            { title: "High School", age: "Ages 14-18", desc: "Advanced placement programs and international curricula preparing students for university life.", img: "/images/high-school.jpg", icon: GraduationCap }
          ].map((program, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white h-full">
                <div className="h-52 overflow-hidden relative">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-teal"></div>
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 bg-slate-50 text-brand-teal rounded-lg flex items-center justify-center mb-5">
                    <program.icon size={20} />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{program.age}</div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">{program.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">{program.desc}</p>
                  <Link href="#" className="text-brand-navy font-bold text-sm hover:text-brand-teal flex items-center gap-2 transition-colors group/link">
                    Full Curriculum Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Academic Calendar & Fees */}
      <section className="bg-slate-50 py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <ScrollReveal direction="right">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <Calendar className="text-brand-teal" size={32} />
                  <h3 className="text-2xl font-bold text-brand-navy">Key Dates 2026-27</h3>
                </div>
                <div className="space-y-0">
                  {[
                    { date: "Aug 24, 2026", event: "Orientation Week & Session Start" },
                    { date: "Oct 12-16, 2026", event: "Mid-Term Break (Autumn)" },
                    { date: "Dec 21 - Jan 08", event: "Winter Holidays" },
                    { date: "March 22-26, 2027", event: "Spring Break" },
                    { date: "June 15, 2027", event: "Academic Session Ends" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-4 -mx-4 rounded-lg transition-colors">
                      <div className="font-bold text-brand-navy">{item.event}</div>
                      <div className="text-sm text-slate-500 font-semibold shrink-0 ml-4">{item.date}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 btn-primary justify-center">
                  <Download size={20} /> Download Full Calendar (PDF)
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-8">
                <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em]">Tuition & Scholarships</p>
                <h2 className="text-3xl font-bold text-brand-navy">Investment in Potential</h2>
                <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We maintain a transparent fee structure that covers tuition, development, and standard extracurricular activities. For a detailed breakdown, please refer to our official fee schedule.
                </p>
                <div className="p-8 bg-brand-navy text-white rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow">
                  <FileText className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-5 group-hover:rotate-12 transition-transform duration-500" />
                  <h4 className="text-xl font-bold mb-4">Fee Structure PDF</h4>
                  <p className="text-slate-300 text-sm mb-6">Complete breakdown of tuition, lab fees, and transport charges for the current academic year.</p>
                  <button className="bg-brand-teal text-brand-navy px-8 py-3 rounded-lg font-bold hover:bg-white transition-all inline-flex items-center gap-2">
                    <Download size={18} /> Download Fee Schedule
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container px-6 py-12 sm:py-24 text-center">
        <ScrollReveal>
          <div className="bg-white p-16 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">Experience our Excellence</h2>
            <p className="text-slate-600 font-medium mb-10 max-w-2xl mx-auto text-lg">Still have questions about our academic programs? Our counselors are here to help you make the right choice.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Connect with Counselors</Link>
              <Link href="#" className="btn-secondary">Request Call-back</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
