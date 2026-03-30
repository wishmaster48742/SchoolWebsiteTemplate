"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { Download, Printer } from "lucide-react";

const months = [
  {
    name: "August 2026", events: [
      { date: "Aug 1-3", event: "Teacher Orientation & Staff Development", type: "admin" },
      { date: "Aug 5", event: "New Student Orientation Day", type: "event" },
      { date: "Aug 6", event: "Academic Session Begins (All Grades)", type: "academic" },
      { date: "Aug 15", event: "Independence Day — Holiday", type: "holiday" },
      { date: "Aug 22", event: "Parent-Teacher Meet (Primary)", type: "event" },
    ]
  },
  {
    name: "September 2026", events: [
      { date: "Sep 5", event: "Teachers' Day Celebration", type: "event" },
      { date: "Sep 14-18", event: "Unit Test I (All Grades)", type: "exam" },
      { date: "Sep 25", event: "Inter-House Sports Meet", type: "event" },
    ]
  },
  {
    name: "October 2026", events: [
      { date: "Oct 2", event: "Gandhi Jayanti — Holiday", type: "holiday" },
      { date: "Oct 12-16", event: "Mid-Term Break (Autumn)", type: "holiday" },
      { date: "Oct 20-30", event: "Mid-Term Examinations", type: "exam" },
      { date: "Oct 31", event: "Halloween Fun Fair (Primary)", type: "event" },
    ]
  },
  {
    name: "November 2026", events: [
      { date: "Nov 5", event: "Mid-Term Report Cards Issued", type: "academic" },
      { date: "Nov 14", event: "Children's Day Celebration", type: "event" },
      { date: "Nov 20-22", event: "Annual Science & Tech Expo", type: "event" },
      { date: "Nov 28", event: "Parent-Teacher Meet (All)", type: "event" },
    ]
  },
  {
    name: "December 2026", events: [
      { date: "Dec 1-5", event: "Unit Test II (All Grades)", type: "exam" },
      { date: "Dec 15-18", event: "Annual Day & Cultural Festival", type: "event" },
      { date: "Dec 21 - Jan 4", event: "Winter Holidays", type: "holiday" },
      { date: "Dec 25", event: "Christmas Day — Holiday", type: "holiday" },
    ]
  },
  {
    name: "January 2027", events: [
      { date: "Jan 5", event: "School Reopens After Winter Break", type: "academic" },
      { date: "Jan 15-17", event: "Inter-School Debate Championship", type: "event" },
      { date: "Jan 26", event: "Republic Day — Holiday", type: "holiday" },
    ]
  },
  {
    name: "February 2027", events: [
      { date: "Feb 1-10", event: "Pre-Board Exams (Grade 10 & 12)", type: "exam" },
      { date: "Feb 14", event: "Community Service Day", type: "event" },
      { date: "Feb 20", event: "Annual Sports Day", type: "event" },
    ]
  },
  {
    name: "March 2027", events: [
      { date: "Mar 1-15", event: "Final Examinations (Grade 1-9, 11)", type: "exam" },
      { date: "Mar 5-25", event: "Board Examinations (Grade 10 & 12)", type: "exam" },
      { date: "Mar 22-26", event: "Spring Break", type: "holiday" },
    ]
  },
  {
    name: "April 2027", events: [
      { date: "Apr 1", event: "New Academic Session Begins (Next Year)", type: "academic" },
      { date: "Apr 10", event: "Final Report Cards Issued", type: "academic" },
      { date: "Apr 15", event: "Annual Awards Ceremony", type: "event" },
    ]
  },
];

const typeColors: Record<string, string> = {
  holiday: "bg-red-50 text-red-600 border-red-200",
  exam: "bg-amber-50 text-amber-700 border-amber-200",
  event: "bg-blue-50 text-blue-600 border-blue-200",
  academic: "bg-emerald-50 text-emerald-600 border-emerald-200",
  admin: "bg-slate-50 text-slate-600 border-slate-200",
};

const typeBadge: Record<string, string> = {
  holiday: "bg-red-100 text-red-700",
  exam: "bg-amber-100 text-amber-700",
  event: "bg-blue-100 text-blue-700",
  academic: "bg-emerald-100 text-emerald-700",
  admin: "bg-slate-100 text-slate-700",
};

export default function Calendar() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/modern-classroom.jpg" alt="Calendar" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">Session 2026-27</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Academic Calendar</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Plan your year with our comprehensive month-by-month academic schedule.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-container px-6 py-12 sm:py-24">
        {/* Legend */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-16">
            {[
              { label: "Holiday", type: "holiday" },
              { label: "Examination", type: "exam" },
              { label: "Event", type: "event" },
              { label: "Academic", type: "academic" },
            ].map(l => (
              <span key={l.type} className={`text-xs font-bold px-3 py-1.5 rounded-full ${typeBadge[l.type]}`}>
                {l.label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {months.map((month, mi) => (
            <ScrollReveal key={mi} delay={mi * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy">{month.name}</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {month.events.map((evt, ei) => (
                    <div key={ei} className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-3.5 hover:bg-slate-50 transition-colors`}>
                      <span className="text-xs font-bold text-slate-400 w-28 shrink-0">{evt.date}</span>
                      <span className="text-sm text-brand-navy font-medium flex-1">{evt.event}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit ${typeBadge[evt.type]}`}>{evt.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16">
            <button className="btn-primary justify-center"><Download size={18} /> Download Calendar PDF</button>
            <button className="btn-secondary justify-center"><Printer size={18} /> Print Calendar</button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
