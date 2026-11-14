"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Info, Users, Utensils, MapPin, Calendar, Edit3, X, CheckCircle2 } from 'lucide-react';
import { StorageManager } from '@/lib/storage';
import { ImpactMetric } from '@/lib/types';
import { INITIAL_IMPACT_METRICS } from '@/lib/data';

export default function ImpactCounters() {
  const [metrics, setMetrics] = useState<ImpactMetric[]>(INITIAL_IMPACT_METRICS);
  const [selectedMetric, setSelectedMetric] = useState<ImpactMetric | null>(null);

  useEffect(() => {
    setMetrics(StorageManager.getMetrics());
  }, []);

  const getMetricIcon = (category: string) => {
    switch (category) {
      case 'nutrition':
        return <Utensils className="w-5 h-5 text-saffron-600" />;
      case 'education':
        return <Users className="w-5 h-5 text-forest-700" />;
      case 'community':
        return <MapPin className="w-5 h-5 text-marigold-600" />;
      default:
        return <Calendar className="w-5 h-5 text-charcoal-700" />;
    }
  };

  return (
    <section className="relative -mt-12 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-cream-300/80 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-cream-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              Small Acts. Meaningful Change.
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
              Grassroots Impact in Action
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal-600 bg-cream-100 px-3 py-2 rounded-xl border border-cream-300">
            <Info className="w-4 h-4 text-saffron-600 shrink-0" />
            <span>
              Metrics represent verifiable data placeholders configurable via{' '}
              <Link href="/admin" className="underline font-semibold text-saffron-700 hover:text-saffron-800">
                Admin Panel
              </Link>.
            </span>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative group bg-cream-50/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-cream-200/80 hover:border-saffron-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-cream-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getMetricIcon(metric.category)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center gap-1">
                    <Edit3 className="w-2.5 h-2.5" /> Editable
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-charcoal-900 tracking-tight">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-charcoal-800 mt-1">
                  {metric.label}
                </h3>

                <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed line-clamp-2">
                  {metric.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-200/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedMetric(metric)}
                  className="text-xs font-semibold text-saffron-700 hover:text-saffron-800 flex items-center gap-1 transition-colors"
                >
                  Impact Details →
                </button>
                <Link
                  href="/impact"
                  className="text-[11px] text-charcoal-500 hover:text-forest-700 transition-colors"
                >
                  View full report
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Impact Details Modal */}
      {selectedMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-cream-300 animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-50 border border-saffron-200 flex items-center justify-center">
                  {getMetricIcon(selectedMetric.category)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-charcoal-900">
                    {selectedMetric.label}
                  </h4>
                  <p className="text-xs text-charcoal-500">Astha Shakti Program Metric</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-1.5 rounded-xl hover:bg-cream-100 text-charcoal-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-cream-50 p-4 rounded-2xl border border-cream-200 mb-5">
              <div className="text-3xl font-serif font-black text-charcoal-900 mb-1">
                {selectedMetric.prefix}{selectedMetric.value}{selectedMetric.suffix}
              </div>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                {selectedMetric.description}
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-charcoal-600 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                <span>Verified through daily center attendance and nutrition registers.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                <span>Focuses on sustained, continuous child engagement rather than one-time distributions.</span>
              </div>
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                <span>Coordinators can adjust this metric to match current verified records in the Admin portal.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedMetric(null)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-charcoal-900 text-white font-semibold text-xs hover:bg-charcoal-800 transition-colors"
              >
                Close
              </button>
              <Link
                href="/admin"
                className="py-2.5 px-4 rounded-xl bg-cream-200 text-charcoal-800 font-semibold text-xs hover:bg-cream-300 transition-colors"
              >
                Edit in Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
