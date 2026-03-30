"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubLink {
  name: string;
  href: string;
  desc?: string;
}

interface NavLink {
  name: string;
  href: string;
  children?: SubLink[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', href: '/about',
      children: [
        { name: 'Management Committee', href: '/management', desc: 'Board of directors' },
        { name: 'Faculty & Staff', href: '/staff', desc: 'Meet our educators' },
        { name: 'History & Timeline', href: '/history', desc: 'The Mentriq journey' },
      ]
    },
    { 
      name: 'Academics', href: '/academics',
      children: [
        { name: 'Programs (K-12)', href: '/academics', desc: 'Curriculum overview' },
        { name: 'Academic Calendar', href: '/calendar', desc: 'Session 2026-27' },
        { name: 'Fee Structure', href: '/fee-structure', desc: 'Tuition & fees' },
        { name: 'Board Results (3 Yr)', href: '/results', desc: 'Performance data' },
      ]
    },
    { 
      name: 'Campus', href: '/campus',
      children: [
        { name: 'Facilities', href: '/campus', desc: 'Labs, library & more' },
        { name: 'Photo Gallery', href: '/gallery', desc: 'Visual stories' },
        { name: 'Virtual Tour', href: '/virtual-tour', desc: '360° experience' },
      ]
    },
    { 
      name: 'Student Life', href: '/community',
      children: [
        { name: 'Clubs & Activities', href: '/community', desc: 'Beyond academics' },
        { name: 'Events', href: '/events', desc: 'What\'s happening' },
        { name: 'Alumni Network', href: '/alumni', desc: 'Stay connected' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm' 
        : isHome ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-black tracking-tight flex items-center gap-2.5 transition-colors duration-300 ${transparent ? 'text-white' : 'text-brand-navy'}`}>
              <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl font-black transition-colors duration-300 ${transparent ? 'bg-white/20 text-brand-teal' : 'bg-brand-navy text-brand-teal'}`}>M</span>
              MENTRIQ
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={link.href} 
                  className={`text-sm font-semibold transition-all duration-300 relative py-1 px-4 inline-flex items-center gap-1 ${
                    pathname === link.href 
                      ? 'text-brand-teal' 
                      : transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                  {link.children && <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-4 right-4 h-0.5 bg-brand-teal rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                    >
                      <div className="px-4 py-2 border-b border-slate-100 mb-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{link.name}</p>
                      </div>
                      {link.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-3 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">{sub.name}</div>
                          {sub.desc && <div className="text-xs text-slate-400 mt-0.5">{sub.desc}</div>}
                        </Link>
                      ))}
                      <div className="px-4 py-2 border-t border-slate-100 mt-1">
                        <Link href={link.href} onClick={() => setOpenDropdown(null)} className="text-xs font-bold text-brand-teal hover:text-brand-navy transition-colors">
                          View All {link.name} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/contact" className={`ml-4 px-7 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${transparent ? 'bg-white/20 text-white hover:bg-white hover:text-brand-navy' : 'bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy shadow-sm'}`}>
              Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${transparent ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-semibold transition-all ${
                          pathname === link.href 
                            ? 'text-brand-teal bg-brand-teal/5' 
                            : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-0.5">
                              {link.children.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                                  className="block py-2.5 px-4 rounded-lg text-sm text-slate-500 hover:text-brand-teal hover:bg-slate-50 transition-all"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                              <Link
                                href={link.href}
                                onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                                className="block py-2.5 px-4 rounded-lg text-xs font-bold text-brand-teal hover:bg-brand-teal/5 transition-all"
                              >
                                View All {link.name} →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-semibold transition-all ${
                        pathname === link.href 
                          ? 'text-brand-teal bg-brand-teal/5' 
                          : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block mt-4 bg-brand-navy text-white text-center px-8 py-3 rounded-xl font-bold hover:bg-brand-teal transition-all"
              >
                Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
