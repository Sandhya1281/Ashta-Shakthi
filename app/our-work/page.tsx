import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ArrowRight,
  Sparkles,
  Utensils,
  BookOpen,
  HeartHandshake,
  Users,
  ShieldCheck,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { WORK_AREAS } from '@/lib/data';

export const metadata = {
  title: 'Our Work | Astha Shakti Bengaluru',
  description: 'Explore the 6 core pillars of Astha Shakti: Nutri-Ed, Education, Differently-Abled Support, Skill Development, Women Empowerment, and Community Relief.',
};

export default function OurWorkPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-forest-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
              <HeartHandshake className="w-3.5 h-3.5 text-forest-700" />
              Comprehensive Community Outreach
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Our Areas of Work
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              We design our grassroots initiatives to be holistic and interlinked. From daily nutritional fuel in the classroom to maternal skills that sustain family stability, our work addresses the root causes of cyclical deprivation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Work Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {WORK_AREAS.map((area, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={area.id}
              id={area.id}
              className={`bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-cream-300 shadow-sm scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side (5 cols) */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-md border-2 border-cream-200">
                  <Image
                    src={area.imageUrl}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal-950/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                    {area.tagline}
                  </div>
                </div>
              </div>

              {/* Text Side (7 cols) */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-saffron-700 uppercase tracking-wider">
                    Core Pillar 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-950">
                    {area.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {area.description}
                </p>

                {/* Bullet Points */}
                <div className="bg-cream-50 rounded-2xl p-5 border border-cream-200">
                  <h4 className="text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-3">
                    Key Activities & Outcomes:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {area.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Actions for this card */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {area.id === 'nutri-ed' ? (
                    <Link
                      href="/nutri-ed"
                      className="px-5 py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                    >
                      <span>Explore 7-Step Nutri-Ed Model</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : null}
                  <Link
                    href="/volunteer"
                    className="px-5 py-2.5 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold transition-all"
                  >
                    Volunteer in this Program
                  </Link>
                  <Link
                    href="/donate"
                    className="px-5 py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold transition-all flex items-center gap-1"
                  >
                    <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" />
                    Sponsor this Cause
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Want to collaborate with our community initiatives?
          </h3>
          <p className="text-xs sm:text-sm text-forest-200 max-w-xl mx-auto">
            We partner with colleges for service-learning, CSR teams for meal sponsorships, and individuals for weekend volunteering.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/volunteer"
              className="px-6 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-500 text-white text-xs font-bold shadow-md transition-all"
            >
              Apply to Volunteer
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold border border-forest-600 transition-all"
            >
              Contact Bengaluru Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
