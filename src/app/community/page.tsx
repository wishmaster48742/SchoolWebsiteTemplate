"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { GraduationCap, Trophy, ArrowRight, Quote } from "lucide-react";

export default function Community() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/alumni-group.jpg" alt="Mentriq Community" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">Life at Mentriq</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Our Community</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Education is a collaborative journey involving students, parents, teachers, and alumni in a supportive ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Student Life */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-3">Beyond Academics</p>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Student Life & Clubs</h2>
              <p className="text-slate-600 font-medium text-lg">Our students engage in diverse activities that build character and leadership skills.</p>
            </div>
            <Link href="#" className="btn-secondary text-sm">View Activity Gallery</Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Varsity Sports", category: "Athletics", img: "/images/varsity-sports.jpg" },
            { title: "Performing Arts", category: "Creative", img: "/images/stage-performance.jpg" },
            { title: "Robotics Club", category: "Technology", img: "/images/robotics-club.jpg" },
            { title: "Debate Society", category: "Leadership", img: "/images/debate-society.jpg" }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2 block">{item.category}</span>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Alumni & Achievements */}
      <section className="bg-slate-50 py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <ScrollReveal direction="right">
            <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 z-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                <img src="/images/alumni-group.jpg" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-8">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Alumni Network</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-10">
                  Our graduates are making their mark in top universities and industries worldwide. Connect with our global network of mentors and professionals.
                </p>
                <button className="btn-primary w-fit group/btn">
                  Join the Portal <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-brand-navy p-12 rounded-3xl text-white h-full flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <img src="/images/holistic-art.jpg" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 text-brand-teal rounded-xl flex items-center justify-center mb-8">
                    <Trophy size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Hall of Achievement</h3>
                  <p className="text-white/60 font-medium leading-relaxed mb-10">
                    Celebrating the milestones, awards, and groundbreaking successes of our students and faculty on international platforms.
                  </p>
                </div>
                <button className="bg-white text-brand-navy px-8 py-3 rounded-xl font-bold hover:bg-brand-teal transition-all w-fit inline-flex items-center gap-2">
                  View Success Stories <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Voices</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Notes from our Community</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Mr. David Wilson", role: "Parent", text: "The supportive environment at Mentriq has seen my son grow from a shy learner into a confident leader. We couldn't be happier with the transformation.", avatar: "/images/head-academics.jpg" },
            { name: "Ms. Sarah Thompson", role: "Alumna (Class of 2018)", text: "The foundation I laid at Mentriq was instrumental in my success at university. The teacher-student bond here is truly special and lifelong.", avatar: "/images/head-welfare.jpg" }
          ].map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200 relative text-left hover:shadow-lg transition-all duration-500 group">
                <Quote size={32} className="text-brand-teal/20 mb-4" />
                <p className="italic text-slate-600 text-lg leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-brand-navy">{t.name}</p>
                    <p className="text-xs font-bold text-brand-teal uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
