"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Search } from "lucide-react";

const departments = ["All", "Primary", "Middle School", "High School", "Admin"];

const staffList = [
  { name: "Dr. Sarah Mitchell", role: "Principal", dept: "Admin", subject: "School Administration", qual: "Ed.D., M.Ed.", img: "/images/principal.jpg", exp: "25 years" },
  { name: "Mr. Robert Chen", role: "Head of Academics", dept: "Admin", subject: "Academic Affairs", qual: "M.A. Education", img: "/images/head-academics.jpg", exp: "18 years" },
  { name: "Mrs. Elena Rodriguez", role: "Head of Student Welfare", dept: "Admin", subject: "Student Counseling", qual: "M.Sc. Psychology", img: "/images/head-welfare.jpg", exp: "15 years" },
  { name: "Ms. Aanya Patel", role: "Teacher", dept: "Primary", subject: "English & EVS", qual: "B.Ed., M.A. English", img: "/images/head-welfare.jpg", exp: "8 years" },
  { name: "Mr. James Oliver", role: "Teacher", dept: "Primary", subject: "Mathematics", qual: "B.Ed., B.Sc. Maths", img: "/images/head-academics.jpg", exp: "10 years" },
  { name: "Ms. Keiko Tanaka", role: "Teacher", dept: "Primary", subject: "Art & Craft", qual: "BFA, Dip. Ed.", img: "/images/principal.jpg", exp: "6 years" },
  { name: "Dr. Marcus Brown", role: "Teacher", dept: "Middle School", subject: "Science", qual: "Ph.D. Physics, B.Ed.", img: "/images/head-academics.jpg", exp: "14 years" },
  { name: "Mrs. Sophie Laurent", role: "Teacher", dept: "Middle School", subject: "French & Social Studies", qual: "M.A. French, DELF C2", img: "/images/head-welfare.jpg", exp: "11 years" },
  { name: "Mr. Vikram Singh", role: "Teacher", dept: "Middle School", subject: "Hindi & Sanskrit", qual: "M.A. Hindi, B.Ed.", img: "/images/principal.jpg", exp: "12 years" },
  { name: "Dr. Emily Watson", role: "Teacher", dept: "High School", subject: "Chemistry", qual: "Ph.D. Chemistry", img: "/images/head-welfare.jpg", exp: "16 years" },
  { name: "Mr. Daniel Park", role: "Teacher", dept: "High School", subject: "Computer Science", qual: "M.Tech, B.Ed.", img: "/images/head-academics.jpg", exp: "9 years" },
  { name: "Mrs. Grace Okonkwo", role: "Teacher", dept: "High School", subject: "Biology", qual: "M.Sc. Biotechnology", img: "/images/principal.jpg", exp: "13 years" },
  { name: "Mr. Ali Hassan", role: "Coach", dept: "Admin", subject: "Physical Education", qual: "M.P.Ed., NIS Cert.", img: "/images/head-academics.jpg", exp: "10 years" },
  { name: "Ms. Rachel Kim", role: "Counselor", dept: "Admin", subject: "Career & Wellness", qual: "M.A. Counseling Psych.", img: "/images/head-welfare.jpg", exp: "7 years" },
];

export default function Staff() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? staffList : staffList.filter(s => s.dept === active);

  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/faculty-lecture.jpg" alt="Staff" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Our Educators</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Faculty & Staff</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Meet the passionate professionals dedicated to your child's academic and personal growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-container px-6 py-12 sm:py-24">
        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {departments.map(dep => (
              <button
                key={dep}
                onClick={() => setActive(dep)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  active === dep
                    ? "bg-brand-navy text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {dep}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05}>
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent p-4">
                    <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">{s.dept}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{s.name}</h4>
                  <p className="text-brand-teal text-xs font-bold uppercase tracking-wider mt-1 mb-3">{s.role}</p>
                  <div className="space-y-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2"><BookOpen size={12} className="text-brand-teal shrink-0" /><span><b>Subject:</b> {s.subject}</span></div>
                    <div><b>Qualification:</b> {s.qual}</div>
                    <div><b>Experience:</b> {s.exp}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <Search size={40} className="mx-auto mb-4 opacity-50" />
            <p className="font-semibold">No staff found in this department.</p>
          </div>
        )}
      </section>
    </main>
  );
}
