"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { Download, ArrowRight, GraduationCap, CreditCard, BookOpen } from "lucide-react";
import Link from "next/link";

const feeData = [
  {
    group: "Primary Years",
    grades: "Nursery – Grade 5",
    icon: BookOpen,
    rows: [
      { item: "Tuition Fee", annual: "₹1,20,000", quarterly: "₹32,000" },
      { item: "Development Fee", annual: "₹15,000", quarterly: "₹4,000" },
      { item: "Activity Fee", annual: "₹10,000", quarterly: "₹2,800" },
      { item: "Lab & Library", annual: "₹5,000", quarterly: "₹1,400" },
      { item: "Total", annual: "₹1,50,000", quarterly: "₹40,200" },
    ]
  },
  {
    group: "Middle School",
    grades: "Grade 6 – Grade 8",
    icon: GraduationCap,
    rows: [
      { item: "Tuition Fee", annual: "₹1,50,000", quarterly: "₹40,000" },
      { item: "Development Fee", annual: "₹18,000", quarterly: "₹4,800" },
      { item: "Activity Fee", annual: "₹12,000", quarterly: "₹3,200" },
      { item: "Lab & Library", annual: "₹8,000", quarterly: "₹2,200" },
      { item: "Total", annual: "₹1,88,000", quarterly: "₹50,200" },
    ]
  },
  {
    group: "High School",
    grades: "Grade 9 – Grade 12",
    icon: CreditCard,
    rows: [
      { item: "Tuition Fee", annual: "₹1,80,000", quarterly: "₹48,000" },
      { item: "Development Fee", annual: "₹20,000", quarterly: "₹5,500" },
      { item: "Activity Fee", annual: "₹15,000", quarterly: "₹4,000" },
      { item: "Lab & Library", annual: "₹12,000", quarterly: "₹3,200" },
      { item: "Total", annual: "₹2,27,000", quarterly: "₹60,700" },
    ]
  }
];

const transportFees = [
  { range: "0 – 5 km", monthly: "₹1,500" },
  { range: "5 – 10 km", monthly: "₹2,500" },
  { range: "10 – 20 km", monthly: "₹3,500" },
  { range: "20+ km", monthly: "₹4,500" },
];

export default function FeeStructure() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/library.jpg" alt="Fee Structure" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Transparency</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Fee Structure</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              A clear and detailed breakdown of tuition and associated fees for the academic year 2026-27.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-container px-6 py-12 sm:py-24">
        <div className="space-y-8 sm:space-y-12">
          {feeData.map((group, gi) => (
            <ScrollReveal key={gi} delay={gi * 0.15}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-brand-navy text-white p-6 sm:p-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <group.icon size={24} className="text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{group.group}</h3>
                    <p className="text-white/50 text-sm font-medium">{group.grades}</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left px-6 py-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Fee Component</th>
                        <th className="text-right px-6 py-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Annual</th>
                        <th className="text-right px-6 py-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Quarterly</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row, ri) => (
                        <tr key={ri} className={`border-b border-slate-100 ${row.item === "Total" ? "bg-brand-teal/5 font-bold" : "hover:bg-slate-50"} transition-colors`}>
                          <td className={`px-6 py-4 ${row.item === "Total" ? "text-brand-navy font-bold" : "text-slate-700"}`}>{row.item}</td>
                          <td className={`px-6 py-4 text-right ${row.item === "Total" ? "text-brand-teal font-bold text-base" : "text-slate-600"}`}>{row.annual}</td>
                          <td className={`px-6 py-4 text-right ${row.item === "Total" ? "text-brand-teal font-bold text-base" : "text-slate-600"}`}>{row.quarterly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transport Fees */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">Transport Fees (Optional)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {transportFees.map((t, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 text-center hover:border-brand-teal transition-colors">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.range}</p>
                  <p className="text-xl font-black text-brand-navy">{t.monthly}</p>
                  <p className="text-[10px] text-slate-400 mt-1">per month</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Scholarships & Download */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16">
          <ScrollReveal>
            <div className="bg-brand-navy text-white p-8 sm:p-10 rounded-2xl h-full relative overflow-hidden group">
              <GraduationCap className="absolute -right-4 -bottom-4 w-28 h-28 text-white/5 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-4">Merit Scholarships</h3>
              <p className="text-white/60 mb-6 font-medium text-sm leading-relaxed">Up to 100% tuition waiver for students scoring 95%+ in board exams. Sports and Arts scholarships also available.</p>
              <Link href="/contact" className="bg-brand-teal text-brand-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all inline-flex items-center gap-2">
                Apply for Scholarship <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Download Complete Fee Schedule</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">Get the full PDF with admission fees, re-admission charges, and late payment policies.</p>
              </div>
              <button className="btn-primary w-full sm:w-fit justify-center"><Download size={18} /> Download PDF</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
