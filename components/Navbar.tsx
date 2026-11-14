"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'Nutri-Ed', href: '/nutri-ed' },
  { name: 'Impact', href: '/impact' },
  { name: 'Stories', href: '/stories' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b border-cream-300/80 py-2'
        : 'bg-cream-100/90 backdrop-blur-sm border-b border-cream-200 py-3'
    }`}>
      {/* Top micro bar for quick location and emergency notice */}
      <div className="hidden lg:block border-b border-cream-200/60 pb-1.5 mb-1.5 text-xs text-charcoal-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-forest-800 font-medium">
              <MapPin className="w-3.5 h-3.5 text-saffron-600" />
              JP Nagar 6th Phase, Bengaluru
            </span>
            <span className="text-cream-400">•</span>
            <span className="flex items-center gap-1.5 text-forest-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-marigold-500" />
              Serving Children Since 2009
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-saffron-700 font-medium transition-colors text-[11px] flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-slate-500" /> Admin Portal
            </Link>
            <span className="text-cream-400">•</span>
            <Link href="/transparency" className="hover:text-forest-800 transition-colors">
              Transparency & Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center shadow-md shadow-saffron-500/20 group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-6 h-6 text-white fill-white/20 stroke-[2.2]" />
            </div>
            <div>
              <span className="block font-serif font-black text-xl sm:text-2xl text-charcoal-900 tracking-tight leading-none group-hover:text-saffron-700 transition-colors">
                ASTHA SHAKTI
              </span>
              <span className="block text-[10px] sm:text-[11px] font-medium text-forest-800 mt-0.5 tracking-wide">
                Food • Health • Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-saffron-50 text-saffron-700 font-semibold shadow-xs'
                      : 'text-charcoal-800 hover:text-saffron-600 hover:bg-cream-200/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/volunteer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-forest-900 bg-forest-50 hover:bg-forest-100 border border-forest-200/80 shadow-xs transition-all hover:scale-[1.02]"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-700 hover:to-saffron-600 shadow-md shadow-saffron-600/25 transition-all hover:scale-[1.02] flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/donate"
              className="md:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-saffron-600 shadow-xs flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-white" /> Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-charcoal-800 hover:bg-cream-200 transition-colors focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-cream-100 border-b border-cream-300 shadow-xl px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Link
              href="/volunteer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-forest-50 text-forest-900 font-semibold text-xs border border-forest-200 text-center"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/donate"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-saffron-600 text-white font-bold text-xs shadow-md shadow-saffron-600/20 text-center"
            >
              <Heart className="w-3.5 h-3.5 fill-white" /> Donate to Nutri-Ed
            </Link>
          </div>

          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    active
                      ? 'bg-saffron-100/70 text-saffron-800 font-semibold'
                      : 'text-charcoal-800 hover:bg-cream-200'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-charcoal-400" />
                </Link>
              );
            })}
            <div className="pt-2 border-t border-cream-300 flex justify-between text-xs text-charcoal-600 px-3">
              <Link href="/transparency" className="hover:text-forest-800">
                Transparency & Governance
              </Link>
              <Link href="/admin" className="text-saffron-700 font-semibold">
                Admin Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
