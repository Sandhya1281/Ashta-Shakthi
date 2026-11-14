import React from 'react';
import Link from 'next/link';
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-slate-300 pt-16 pb-8 border-t-4 border-saffron-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Organization Bio & Mission (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-600 flex items-center justify-center shadow-lg shadow-saffron-600/30">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white tracking-wide">
                  {ORG_INFO.name.toUpperCase()}
                </h3>
                <p className="text-xs text-saffron-400 font-medium">
                  {ORG_INFO.legalName}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 italic font-serif border-l-2 border-saffron-500 pl-3 py-1">
              “{ORG_INFO.tagline}”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to improving opportunities for underprivileged and economically deprived children and communities in Bengaluru through continuous nutrition, educational enrichment, skill training, and social empowerment.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={ORG_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                title="Follow Astha Shakti on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ORG_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                title="Subscribe to Astha Shakti on YouTube"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <Link
                href="/volunteer"
                className="text-xs font-semibold text-saffron-400 hover:text-saffron-300 flex items-center gap-1 ml-2 transition-colors"
              >
                Join Volunteer Network <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-saffron-400 transition-colors">
                  About Astha Shakti
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-saffron-400 transition-colors">
                  Our Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/nutri-ed" className="hover:text-saffron-400 transition-colors">
                  Nutri-Ed Model
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-saffron-400 transition-colors">
                  Impact Dashboard
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-saffron-400 transition-colors">
                  Stories of Change
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-saffron-400 transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved & Governance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get Involved & Trust
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/volunteer" className="text-forest-400 hover:text-forest-300 font-medium flex items-center gap-1 transition-colors">
                  <span>• Volunteer Application</span>
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-saffron-400 hover:text-saffron-300 font-medium flex items-center gap-1 transition-colors">
                  <span>• Support / Donate</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-saffron-400 transition-colors">
                  Upcoming Events & Drives
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-saffron-400 transition-colors flex items-center gap-1">
                  <span>Annual Reports & Governance</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                  Coordinator / Admin Portal
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-forest-400 shrink-0" />
                  Academic Service Learning Project
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  Created to present and digitally empower Astha Shakti’s community initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Bengaluru Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bengaluru Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-500 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <strong>{ORG_INFO.name}</strong><br />
                  {ORG_INFO.address.line1},<br />
                  {ORG_INFO.address.line2},<br />
                  {ORG_INFO.address.city}, {ORG_INFO.address.state} {ORG_INFO.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <span className="text-slate-300">{ORG_INFO.contact.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-marigold-400 shrink-0" />
                <span className="text-slate-300">{ORG_INFO.contact.displayPhone}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors border border-slate-700"
              >
                Send Direct Message <ArrowRight className="w-3 h-3 text-saffron-400" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Astha Shakti. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 max-w-2xl">
              {ORG_INFO.serviceLearningDisclaimer}
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs shrink-0">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Disclaimer
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
