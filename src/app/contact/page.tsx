"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] sm:h-[50vh] -mt-20 pt-20 flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img src="/images/campus-aerial.jpg" alt="Contact Mentriq" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
          <ScrollReveal>
            <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.3em] mb-4">We&#39;re Here to Help</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Inquiries about admissions, campus visits, or general information — our team is ready to assist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container px-6 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-brand-teal font-bold text-sm uppercase tracking-[0.2em]">Reach Out</p>
                <h2 className="text-3xl font-bold text-brand-navy">Get in Touch</h2>
                <p className="text-slate-600 font-medium text-lg">Reach out to us via any of the following channels.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: MapPin, title: "Address", detail: "123 Academic Drive, Knowledge Park, Region 5" },
                  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
                  { icon: Mail, title: "Email", detail: "info@mentriq.edu" },
                  { icon: Clock, title: "Office Hours", detail: "Mon - Fri: 8:00 AM - 4:00 PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="p-7 bg-white border border-slate-200 rounded-2xl shadow-sm group hover:border-brand-teal hover:shadow-lg transition-all duration-500 relative overflow-hidden cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="absolute -right-3 -bottom-3 text-slate-50 group-hover:text-brand-teal/5 transition-colors w-20 h-20" />
                    <div className="relative z-10">
                      <item.icon className="text-brand-teal mb-4 group-hover:scale-110 transition-transform" size={26} />
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{item.title}</h4>
                      <p className="text-brand-navy font-bold text-sm">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-10 bg-brand-navy rounded-2xl text-white relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow">
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-4">International Admissions</h3>
                   <p className="text-white/60 mb-6 font-medium">Our admissions team is available for virtual consultations for international students.</p>
                   <button className="bg-brand-teal text-brand-navy px-6 py-3 rounded-xl font-bold hover:bg-white transition-all text-sm inline-flex items-center gap-2">
                      Book Consultation <ArrowRight size={16} />
                   </button>
                 </div>
                 <Globe className="absolute -top-6 -right-6 text-white/5 w-40 h-40 group-hover:rotate-12 transition-transform duration-700" />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative hover:shadow-lg transition-shadow duration-500">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Send a Message</h2>
              <p className="text-slate-500 font-medium mb-8 text-sm">We typically respond within 24 business hours.</p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 ml-1">Inquiry Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all font-medium text-slate-600">
                    <option>Admissions Inquiry</option>
                    <option>Campus Tour Request</option>
                    <option>General Support</option>
                    <option>Employment Opportunities</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 ml-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all font-medium"></textarea>
                </div>
                <button className="btn-primary w-full py-4 justify-center text-lg">
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Map Section */}
      <ScrollReveal>
        <div className="h-[300px] sm:h-[450px] w-full relative overflow-hidden">
           <div className="absolute inset-0">
            <img src="/images/map-bg.jpg" alt="Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-navy/10"></div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-center p-10 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl max-w-md"
             >
                <MapPin className="text-brand-teal mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-brand-navy mb-2">Visit our Campus</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm">Main Academic Complex, Innovation Drive.</p>
                <button className="bg-brand-navy text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-brand-teal transition-all inline-flex items-center gap-2">
                  Get Directions <ArrowRight size={16} />
                </button>
             </motion.div>
           </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
