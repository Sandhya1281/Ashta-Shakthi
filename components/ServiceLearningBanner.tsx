"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Info, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ServiceLearningBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-amber-900/90 backdrop-blur-md text-amber-50 text-xs px-4 py-2 border-b border-amber-700/50 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase shrink-0">
            <ShieldCheck className="w-3 h-3" /> Service Learning Project
          </span>
          <p className="text-amber-100 font-medium">
            Digital initiative designed to present and support the charitable work of <strong className="text-white">Astha Shakti (Bengaluru)</strong>.
            <span className="hidden md:inline text-amber-200/80 ml-1">
              Organizational records & figures represent academic templates for verification.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-white transition-colors text-[11px] flex items-center gap-1"
          >
            Learn More <ExternalLink className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-amber-300 hover:text-white p-0.5 rounded transition-colors"
            title="Dismiss notice"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
