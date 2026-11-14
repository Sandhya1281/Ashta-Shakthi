"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Info,
  TrendingUp,
  Utensils,
  BookOpen,
  Users,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Calendar,
  Edit3
} from 'lucide-react';
import { StorageManager } from '@/lib/storage';
import { ImpactMetric } from '@/lib/types';
import { INITIAL_IMPACT_METRICS } from '@/lib/data';

export default function ImpactPage() {
  const [metrics, setMetrics] = useState<ImpactMetric[]>(INITIAL_IMPACT_METRICS);

  useEffect(() => {
    setMetrics(StorageManager.getMetrics());
  }, []);

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-saffron-600" />
              Organizational Track Record
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Impact Dashboard
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Monitoring children’s health, classroom attendance, and community empowerment through verified grassroots metrics across South Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Notice Alert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Transparency & Data Verification Note</p>
              <p className="text-amber-800 mt-0.5">
                Impact figures should be updated using verified organizational records. Metrics below represent editable project placeholders that can be customized in the Admin portal.
              </p>
            </div>
          </div>
          <Link
            href="/admin"
            className="px-3.5 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold transition-colors shrink-0 text-xs flex items-center gap-1"
          >
            <Edit3 className="w-3 h-3" /> Update in Admin
          </Link>
        </div>
      </section>

      {/* Main Metric Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-cream-100 text-charcoal-700 border border-cream-300">
                    {m.category}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md">
                    Editable
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-serif font-black text-charcoal-900 tracking-tight mb-1">
                  {m.prefix}{m.value}{m.suffix}
                </div>

                <h3 className="font-serif font-bold text-sm sm:text-base text-charcoal-900">
                  {m.label}
                </h3>

                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal-500">
                <span className="flex items-center gap-1 text-forest-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Center Tracked
                </span>
                <span>Bengaluru</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program-Wise Impact Categorization */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
            Outreach by Program Focus
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            A comprehensive look at how interventions operate across multiple community segments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Nutrition & Health */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Nutrition & Health
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Daily warm breakfast & lunch for enrolled students</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Periodic height, weight, and BMI screening camps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Micronutrient fortification and clean drinking water</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Education & Remedial Learning */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Education & Remedial
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Small mentor-student tutoring ratios for reading & math</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>School bags, stationary, notebooks, and uniforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Preventing dropout by supporting primary-to-middle school transition</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Differently-Abled & Women */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-marigold-100 text-marigold-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-900">
              Inclusion & Livelihood
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Sensory play and motor-skill adaptive kits for special children</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Tailoring cohorts providing mothers independent household income</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>Family counseling to foster supportive domestic learning spaces</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Before / After Transformation Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold text-saffron-400 uppercase tracking-wider">
              The Path of Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Before & After Nutri-Ed Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Before Column */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-red-900/80 text-red-200 text-xs font-bold">
                Initial Vulnerability
              </span>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Irregular meals leading to classroom exhaustion and apathy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Low school attendance (often under 50-60%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Parental anxiety regarding nutrition and school expenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Lack of individual remedial tutoring in overcrowded classrooms</span>
                </li>
              </ul>
            </div>

            {/* After Column */}
            <div className="bg-forest-950/60 p-6 rounded-2xl border border-forest-700/80 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-forest-800 text-forest-200 text-xs font-bold">
                With Astha Shakti Nutri-Ed
              </span>
              <ul className="space-y-2.5 text-xs text-forest-100">
                <li className="flex items-start gap-2">
                  <span className="text-forest-400 font-bold">✓</span>
                  <span>Consistent wholesome meals ensuring high energy and focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-400 font-bold">✓</span>
                  <span>Attendance rises to over 90% with enthusiastic participation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-400 font-bold">✓</span>
                  <span>Families feel supported and actively encourage study routines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-400 font-bold">✓</span>
                  <span>Foundational literacy, digital exposure, and creative confidence</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
