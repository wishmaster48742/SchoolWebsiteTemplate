"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, Award, Play, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section - Cinematic Animated Background */}
      <section className="relative min-h-[100svh] -mt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="w-full h-full"
          >
            <img 
              src="/images/hero-graduates.jpg" 
              alt="Mentriq International School Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/50 to-brand-navy/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <ScrollReveal direction="right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">Est. 2010 — Excellence in Education</p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 sm:mb-8 max-w-4xl">
                Preparing Students<br/>for a <span className="text-brand-teal">Global Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl font-medium leading-relaxed">
                Where academic excellence meets holistic development, nurturing the visionary leaders of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
                <Link href="/about" className="group bg-brand-teal text-brand-navy px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                  Our School Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-brand-navy transition-all duration-300 text-base sm:text-lg text-center">
                  Admission Enquiry
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Animated Counter Feel */}
      <section className="bg-brand-navy text-white py-10 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 via-transparent to-brand-teal/5"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center relative z-10">
          {[
            { label: "Students", val: "1200+" },
            { label: "Faculty", val: "85+" },
            { label: "Clubs & Activities", val: "40+" },
            { label: "University Placement", val: "100%" }
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="py-4">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-teal mb-1 sm:mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Core Pillars - Image Cards */}
      <section className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">Our Core Pillars</h2>
            <p className="text-slate-600 font-medium text-lg">A comprehensive educational experience that balances academic rigor with creative expression.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum aligned with international standards and future-ready skills.", img: "/images/academics-book.png" },
            { icon: Users, title: "Expert Faculty", desc: "Passionate educators dedicated to nurturing each student's unique potential.", img: "/images/faculty-lecture.jpg" },
            { icon: Globe, title: "Global Perspective", desc: "A multicultural environment that fosters understanding and global citizenship.", img: "/images/global-students.jpg" },
            { icon: Award, title: "Holistic Growth", desc: "Extensive extracurricular programs spanning arts, sports, and leadership.", img: "/images/holistic-art.jpg" }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white h-full">
                <div className="h-44 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent group-hover:from-brand-navy/10 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm text-brand-teal rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon size={20} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative group">
              <img 
                src="/images/classroom.jpg" 
                alt="Mentriq Classroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-brand-navy ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em]">Now Accepting Applications</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy leading-tight">Admissions Open for 2026-27 Session</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We invite parents to visit our campus and meet our team. Our admissions process is designed to find the best fit for your child's educational journey.
              </p>
              <ul className="space-y-3 pb-4">
                {['World-class campus facilities', 'Personalized learning paths', 'Strong community involvement'].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex">
                Download Prospectus <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News & Updates */}
      <section className="section-container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-3">Stay Updated</p>
              <h2 className="text-4xl font-bold text-brand-navy">Latest at Mentriq</h2>
            </div>
            <Link href="#" className="btn-secondary py-2 text-sm">View Archive</Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            { date: "March 20, 2026", title: "Annual Science Fair Results Announced", desc: "Students showcase groundbreaking projects at the inter-school science fair.", img: "/images/science-fair.jpg" },
            { date: "March 15, 2026", title: "New Sports Complex Inauguration", desc: "State-of-the-art facilities for athletics, swimming, and team sports.", img: "/images/sports-complex.jpg" },
            { date: "March 10, 2026", title: "Global Exchange Program 2026", desc: "Students selected for cultural exchange with partner schools worldwide.", img: "/images/exchange-program.jpg" }
          ].map((news, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 group h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <div className="text-xs font-bold text-brand-teal mb-3 uppercase tracking-wider">{news.date}</div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{news.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
