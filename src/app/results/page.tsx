"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Award, Star, Download } from "lucide-react";

const resultsData = [
  {
    year: "2026",
    board: "CBSE Board Examination",
    stats: {
      passPercent: "99.2%",
      distinction: "68%",
      firstDiv: "94%",
      topScore: "498/500",
    },
    toppers: [
      { name: "Aisha Verma", score: "498/500 (99.6%)", stream: "Science", img: "/images/head-welfare.jpg" },
      { name: "Rohan Gupta", score: "496/500 (99.2%)", stream: "Commerce", img: "/images/head-academics.jpg" },
      { name: "Priya Nair", score: "494/500 (98.8%)", stream: "Humanities", img: "/images/principal.jpg" },
    ],
    subjectToppers: [
      { subject: "Mathematics", score: "100/100", student: "Aisha Verma" },
      { subject: "Physics", score: "99/100", student: "Dev Sharma" },
      { subject: "English", score: "98/100", student: "Priya Nair" },
      { subject: "Chemistry", score: "98/100", student: "Rohan Gupta" },
      { subject: "Computer Sci.", score: "100/100", student: "Karan Mehta" },
      { subject: "Accountancy", score: "99/100", student: "Sneha Iyer" },
    ]
  },
  {
    year: "2025",
    board: "CBSE Board Examination",
    stats: {
      passPercent: "98.8%",
      distinction: "62%",
      firstDiv: "91%",
      topScore: "496/500",
    },
    toppers: [
      { name: "Meera Joshi", score: "496/500 (99.2%)", stream: "Science", img: "/images/principal.jpg" },
      { name: "Arjun Kapoor", score: "492/500 (98.4%)", stream: "Commerce", img: "/images/head-academics.jpg" },
      { name: "Zara Khan", score: "490/500 (98.0%)", stream: "Humanities", img: "/images/head-welfare.jpg" },
    ],
    subjectToppers: [
      { subject: "Mathematics", score: "100/100", student: "Meera Joshi" },
      { subject: "Biology", score: "99/100", student: "Arjun Kapoor" },
      { subject: "English", score: "97/100", student: "Zara Khan" },
      { subject: "Economics", score: "98/100", student: "Ravi Patel" },
    ]
  },
  {
    year: "2024",
    board: "CBSE Board Examination",
    stats: {
      passPercent: "98.5%",
      distinction: "58%",
      firstDiv: "89%",
      topScore: "494/500",
    },
    toppers: [
      { name: "Ishaan Malhotra", score: "494/500 (98.8%)", stream: "Science", img: "/images/head-academics.jpg" },
      { name: "Ananya Singh", score: "490/500 (98.0%)", stream: "Commerce", img: "/images/head-welfare.jpg" },
      { name: "Omar Siddiqui", score: "488/500 (97.6%)", stream: "Humanities", img: "/images/principal.jpg" },
    ],
    subjectToppers: [
      { subject: "Physics", score: "100/100", student: "Ishaan Malhotra" },
      { subject: "Mathematics", score: "99/100", student: "Ananya Singh" },
      { subject: "English", score: "96/100", student: "Omar Siddiqui" },
      { subject: "Chemistry", score: "97/100", student: "Riya Desai" },
    ]
  }
];

export default function Results() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/high-school.jpg" alt="Results" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Academic Performance</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Board Results</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Consistent excellence — our students' board results over the last three years.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Year-over-Year Performance Bar */}
      <section className="bg-brand-navy text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-3">3-Year Trend</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Performance Overview</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {resultsData.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="relative h-32 sm:h-48 flex items-end justify-center mb-4">
                    <div
                      className="w-full max-w-[80px] sm:max-w-[100px] bg-gradient-to-t from-brand-teal to-brand-teal/60 rounded-t-xl mx-auto transition-all duration-1000"
                      style={{ height: `${parseFloat(r.stats.passPercent)}%` }}
                    ></div>
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-brand-teal">{r.stats.passPercent}</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-bold mt-1">Class of {r.year}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="section-container px-6 py-12 sm:py-24 space-y-12 sm:space-y-20">
        {resultsData.map((r, ri) => (
          <div key={ri}>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12">
                <div className="w-14 h-14 bg-brand-navy text-brand-teal rounded-2xl flex items-center justify-center text-xl font-black shrink-0">{r.year}</div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Class of {r.year}</h2>
                  <p className="text-slate-500 text-sm font-medium">{r.board}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                { label: "Pass Percentage", val: r.stats.passPercent, icon: TrendingUp },
                { label: "Distinctions", val: r.stats.distinction, icon: Star },
                { label: "First Division", val: r.stats.firstDiv, icon: Award },
                { label: "Highest Score", val: r.stats.topScore, icon: Award },
              ].map((s, si) => (
                <ScrollReveal key={si} delay={si * 0.08}>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-brand-teal transition-all group">
                    <s.icon size={20} className="mx-auto text-brand-teal mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xl sm:text-2xl font-black text-brand-navy">{s.val}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Toppers */}
            <ScrollReveal>
              <h3 className="text-lg font-bold text-brand-navy mb-4">School Toppers</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {r.toppers.map((t, ti) => (
                <ScrollReveal key={ti} delay={ti * 0.1}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center group hover:shadow-xl hover:border-brand-teal transition-all">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-brand-teal transition-colors">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block ${ti === 0 ? "bg-amber-100 text-amber-700" : ti === 1 ? "bg-slate-100 text-slate-600" : "bg-orange-50 text-orange-600"}`}>
                      {ti === 0 ? "🥇 1st" : ti === 1 ? "🥈 2nd" : "🥉 3rd"}
                    </span>
                    <h4 className="text-base font-bold text-brand-navy mt-2">{t.name}</h4>
                    <p className="text-brand-teal text-sm font-bold">{t.score}</p>
                    <p className="text-xs text-slate-400 mt-1">{t.stream} Stream</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Subject Toppers Table */}
            <ScrollReveal>
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy">Subject Toppers — {r.year}</h4>
                </div>
                <div className="divide-y divide-slate-100">
                  {r.subjectToppers.map((st, sti) => (
                    <div key={sti} className="flex items-center justify-between px-6 py-3 hover:bg-white transition-colors">
                      <span className="text-sm font-semibold text-brand-navy">{st.subject}</span>
                      <span className="text-sm text-slate-500">{st.student}</span>
                      <span className="text-sm font-bold text-brand-teal">{st.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {ri < resultsData.length - 1 && <hr className="border-slate-200 mt-12 sm:mt-20" />}
          </div>
        ))}

        <ScrollReveal>
          <div className="text-center pt-8">
            <button className="btn-primary justify-center"><Download size={18} /> Download Full Results PDF</button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
