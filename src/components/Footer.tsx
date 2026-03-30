"use client";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <Link href="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-white rounded flex items-center justify-center text-slate-900 text-lg">M</span>
            MENTRIQ
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Dedicated to academic excellence and the holistic development of every student since 2010.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="hover:text-brand-teal transition-colors">
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Academics', href: '/academics' },
              { name: 'Campus', href: '/campus' },
              { name: 'Student Life', href: '/community' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Admissions */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
          <ul className="space-y-3">
            {[
              { name: 'Fee Structure', href: '/fee-structure' },
              { name: 'Academic Calendar', href: '/calendar' },
              { name: 'Board Results', href: '/results' },
              { name: 'Photo Gallery', href: '/gallery' },
              { name: 'Events', href: '/events' }
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <MapPin className="text-brand-teal shrink-0 mt-1" size={18} />
              <p className="text-sm text-slate-400">123 Innovation Drive, Silicon Valley, CA 94025</p>
            </div>
            <div className="flex gap-3 items-start">
              <Phone className="text-brand-teal shrink-0 mt-1" size={18} />
              <p className="text-sm text-slate-400">+1 (555) 000-1234</p>
            </div>
            <div className="flex gap-3 items-start">
              <Mail className="text-brand-teal shrink-0 mt-1" size={18} />
              <p className="text-sm text-slate-400">info@mentriq.edu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © 2026 Mentriq International School. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
