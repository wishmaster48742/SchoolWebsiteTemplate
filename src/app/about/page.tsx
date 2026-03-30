"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Header with Background Image */}
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-aerial.jpg" alt="Mentriq Campus" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">Since 2010</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">About Mentriq</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              A beacon of educational excellence, dedicated to shaping the leaders of tomorrow through a balanced approach to learning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 px-6 py-12 sm:py-24">
        <ScrollReveal direction="right">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-brand-teal rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              To provide a nurturing environment that inspires curiosity, fosters creativity, and empowers students to achieve academic excellence while becoming responsible global citizens.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.2}>
          <div className="space-y-6">
            <div className="w-12 h-1 bg-brand-teal rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              To be a world-class institution recognized for innovation in education, where every student is equipped with the skills and character needed to thrive in a rapidly changing world.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* History Section with Timeline */}
      <section className="bg-brand-navy text-white py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group">
              <img 
                src="/images/school-history.jpg" 
                alt="School History" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em]">Our Journey</p>
              <h2 className="text-4xl font-bold">A Legacy of Excellence</h2>
              <p className="text-slate-300 leading-relaxed font-medium">
                From our humble beginnings to our current state-of-the-art campus, Mentriq has always prioritized quality over quantity.
              </p>
              <div className="space-y-6">
                {[
                  { year: "2010", event: "Foundation of Mentriq Academy" },
                  { year: "2015", event: "Inauguration of the High School Wing" },
                  { year: "2020", event: "Ranked Top 10 International Schools" },
                  { year: "2024", event: "Launch of the Digital Innovation Center" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-5 items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-brand-teal font-black text-xl w-16 shrink-0">{item.year}</div>
                    <div className="h-[2px] w-8 bg-slate-700 shrink-0"></div>
                    <div className="text-slate-200 font-semibold">{item.event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-4">Meet the Team</p>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">School Leadership</h2>
            <p className="text-slate-600 font-medium text-lg">The visionary educators behind our success.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[
            { name: "Dr. Sarah Mitchell", role: "Principal", img: "/images/principal.jpg", bio: "With over 25 years of experience in international education, Dr. Mitchell leads with a focus on holistic development." },
            { name: "Mr. Robert Chen", role: "Head of Academics", img: "/images/head-academics.jpg", bio: "Mr. Chen oversees our curriculum integration, ensuring it meets global standards while remaining relevant." },
            { name: "Mrs. Elena Rodriguez", role: "Head of Student Welfare", img: "/images/head-welfare.jpg", bio: "Dedicated to student well-being, Mrs. Rodriguez ensures every child feels supported and valued." }
          ].map((leader, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg border border-slate-100">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-teal transition-colors">{leader.name}</h3>
                <div className="text-brand-teal font-black text-xs uppercase tracking-widest mb-4">{leader.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-brand-navy">Want to Know More?</h2>
            <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">Schedule a campus visit or reach out to our admissions team to learn how Mentriq can be the right fit for your child.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Schedule a Visit <ArrowRight size={20} /></Link>
              <Link href="/academics" className="btn-secondary">View Academics</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
