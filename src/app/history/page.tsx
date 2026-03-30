"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timeline = [
  { year: "2010", title: "Foundation", desc: "Mentriq Academy was established with 120 students and 12 faculty members in a modest campus with a vision to redefine quality education." },
  { year: "2012", title: "First Graduation Batch", desc: "Our inaugural batch of 45 students graduated with a 100% pass rate. 85% secured admission in top national universities." },
  { year: "2014", title: "Campus Expansion", desc: "Inauguration of the new Science Block with fully equipped Physics, Chemistry, and Biology laboratories." },
  { year: "2016", title: "Sports Complex Opens", desc: "State-of-the-art indoor sports complex inaugurated with basketball courts, swimming pool, and athletics track." },
  { year: "2018", title: "International Accreditation", desc: "Received accreditation from the Council of International Schools (CIS), joining an elite network of 1,300+ schools worldwide." },
  { year: "2020", title: "Digital Transformation", desc: "Launched 1:1 tablet program, smart classrooms, and the Innovation Hub for robotics and coding education." },
  { year: "2022", title: "Ranked Top 10", desc: "Recognized among the Top 10 International Schools nationally by Education World magazine for the third consecutive year." },
  { year: "2024", title: "Innovation Center Launch", desc: "Opened the ₹15 Crore Digital Innovation Center featuring AI labs, 3D printing studio, and maker spaces." },
  { year: "2026", title: "1200+ Students Strong", desc: "Currently serving 1200+ students from 30+ nationalities with 85+ faculty members and 40+ extracurricular programs." },
];

export default function History() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/school-history.jpg" alt="History" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Since 2010</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Our History</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              From a humble beginning to a nationally recognized institution — the journey of Mentriq International School.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Journey</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Milestones That Define Us</h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 sm:-translate-x-px"></div>

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 sm:gap-0 mb-10 sm:mb-16 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`flex-1 pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"}`}>
                <div className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-brand-teal transition-all duration-500 group`}>
                  <span className="text-brand-teal font-black text-2xl sm:text-3xl block mb-2">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-brand-teal rounded-full border-4 border-white shadow-md -translate-x-1/2 mt-8 z-10"></div>

              {/* Spacer for desktop */}
              <div className="hidden sm:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-12 sm:py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Be Part of Our Next Chapter</h2>
            <p className="text-slate-600 font-medium">Join the Mentriq family and help us write the next milestone together.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Apply Now <ArrowRight size={18} /></Link>
              <Link href="/about" className="btn-secondary">About Mentriq</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
