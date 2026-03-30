"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  { title: "Annual Science & Innovation Expo", date: "November 20-22, 2026", time: "9:00 AM – 4:00 PM", location: "Innovation Hub & Main Hall", desc: "Students present research projects, robotics demos, and science models to a panel of judges and guests.", img: "/images/science-fair.jpg", tag: "Academic" },
  { title: "Annual Day & Cultural Festival", date: "December 15-18, 2026", time: "5:00 PM – 9:00 PM", location: "Performing Arts Auditorium", desc: "A grand celebration featuring dance, drama, music performances, and an awards ceremony.", img: "/images/stage-performance.jpg", tag: "Cultural" },
  { title: "Inter-School Debate Championship", date: "January 15-17, 2027", time: "10:00 AM – 3:00 PM", location: "Conference Hall", desc: "Top debaters from 20+ schools compete in this prestigious annual event.", img: "/images/debate-society.jpg", tag: "Competition" },
  { title: "Annual Sports Day", date: "February 20, 2027", time: "8:00 AM – 5:00 PM", location: "Sports Complex & Athletics Track", desc: "Track & field events, team sports finals, and the much-awaited Inter-House Championship.", img: "/images/varsity-sports.jpg", tag: "Sports" },
];

const pastEvents = [
  { title: "Global Exchange Program Farewell", date: "March 2026", img: "/images/exchange-program.jpg", tag: "International" },
  { title: "Robotics Club State Championship", date: "February 2026", img: "/images/robotics-club.jpg", tag: "Competition" },
  { title: "Republic Day Celebration", date: "January 2026", img: "/images/holistic-art.jpg", tag: "Cultural" },
  { title: "Winter Carnival & Fun Fair", date: "December 2025", img: "/images/alumni-group.jpg", tag: "Cultural" },
  { title: "Sports Complex Inauguration", date: "November 2025", img: "/images/sports-complex.jpg", tag: "Campus" },
  { title: "Teachers' Day Special Assembly", date: "September 2025", img: "/images/faculty-lecture.jpg", tag: "Cultural" },
];

const tagColors: Record<string, string> = {
  Academic: "bg-blue-100 text-blue-700",
  Cultural: "bg-purple-100 text-purple-700",
  Competition: "bg-amber-100 text-amber-700",
  Sports: "bg-green-100 text-green-700",
  International: "bg-teal-100 text-teal-700",
  Campus: "bg-slate-100 text-slate-700",
};

export default function Events() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/stage-performance.jpg" alt="Events" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">What&#39;s Happening</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Events</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium">
              Stay updated with upcoming activities, competitions, and celebrations at Mentriq.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-container px-6 py-12 sm:py-24">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16">
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-3">Mark Your Calendar</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Upcoming Events</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {upcomingEvents.map((evt, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 aspect-video md:aspect-auto overflow-hidden relative">
                  <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tagColors[evt.tag] || "bg-slate-100 text-slate-700"}`}>{evt.tag}</span>
                </div>
                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{evt.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{evt.desc}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={13} className="text-brand-teal" />{evt.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={13} className="text-brand-teal" />{evt.time}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-brand-teal" />{evt.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-slate-50 py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 sm:mb-16">
              <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em] mb-3">Looking Back</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy">Past Events</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pastEvents.map((evt, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-500">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[evt.tag] || "bg-slate-100 text-slate-700"}`}>{evt.tag}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-slate-400 mb-1">{evt.date}</p>
                    <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{evt.title}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
