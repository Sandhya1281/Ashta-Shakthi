import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Utensils,
  BookOpen,
  Heart,
  Search,
  GraduationCap,
  Palette,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Building,
  DollarSign
} from 'lucide-react';
import { NUTRI_ED_STEPS, ORG_INFO, DONATION_TIERS } from '@/lib/data';

export const metadata = {
  title: 'Nutri-Ed Program | Astha Shakti Flagship Model',
  description: 'Discover how the Nutri-Ed model connects daily nutrition directly with classroom learning to break the cycle of poverty in Bengaluru.',
};

export default function NutriEdPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-saffron-700 via-saffron-800 to-amber-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold backdrop-blur-md border border-white/20">
              <Utensils className="w-3.5 h-3.5 text-amber-300" />
              Flagship Methodology Since 2009
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              The Nutri-Ed Model
            </h1>
            <p className="text-base sm:text-lg text-saffron-100 leading-relaxed">
              Food is the Gateway to Good Health and Education. When children are freed from morning food insecurity, their focus, attendance, and cognitive stamina blossom.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="px-6 py-3 rounded-2xl bg-white text-saffron-900 font-bold text-xs hover:bg-cream-100 transition-all shadow-md flex items-center gap-1.5"
              >
                <Heart className="w-4 h-4 fill-saffron-600 text-saffron-600" />
                Sponsor Nutri-Ed Meals
              </Link>
              <Link
                href="/volunteer"
                className="px-6 py-3 rounded-2xl bg-saffron-900/80 hover:bg-saffron-900 text-white border border-saffron-400/40 font-bold text-xs transition-all"
              >
                Volunteer at Learning Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rationale & Philosophy Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-saffron-700 uppercase tracking-wider">
              Why Nutrition Must Precede Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 tracking-tight">
              A Hungry Mind Cannot Learn
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              In vulnerable urban clusters, children often begin their day on an empty stomach. By 10:00 AM, physiological fatigue sets in—causing lethargy, behavioral irritability, and impaired memory retention.
            </p>
            <blockquote className="bg-cream-100 p-6 rounded-2xl border-l-4 border-saffron-600 text-sm sm:text-base font-serif italic text-charcoal-900 leading-relaxed">
              “The Nutri-Ed approach recognizes that a child struggling with hunger cannot fully benefit from education. By addressing nutrition alongside education, Astha Shakti aims to create a stronger foundation for learning and development.”
            </blockquote>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              By pairing morning nutrition directly with our tutoring centers, we eliminate hunger, motivate parents to send their children to school consistently, and restore dignity to the classroom experience.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/community/img-20260921-wa0008.webp"
                alt="Community members serving a meal in an Astha Shakti program photo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7-STEP INFOGRAPHIC PROCESS (From Nutrition to Education) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300 shadow-sm space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-forest-700" />
              The Systematic Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-950 tracking-tight">
              From Nutrition to Education: 7 Steps to Self-Reliance
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              A comprehensive cycle that guides vulnerable learners from basic nourishment toward long-term educational opportunity.
            </p>
          </div>

          {/* Interactive Responsive Infographic Steps */}
          <div className="space-y-6">
            {NUTRI_ED_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-cream-50 hover:bg-cream-100/70 p-6 rounded-2xl border border-cream-200/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Step Marker */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-saffron-600 text-white font-serif font-black text-xl flex items-center justify-center shadow-md">
                    0{step.step}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-saffron-700 tracking-wider">
                      Step {step.step} of 07
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Details */}
                <div className="flex-1 md:px-6 border-t md:border-t-0 md:border-l border-cream-300 pt-4 md:pt-0">
                  <p className="text-xs font-bold text-charcoal-800 mb-1">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow or Progress */}
                <div className="hidden lg:flex items-center justify-center text-forest-700 font-bold text-xs shrink-0">
                  {idx < NUTRI_ED_STEPS.length - 1 ? (
                    <span className="bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                      Next Step ↓
                    </span>
                  ) : (
                    <span className="bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full border border-saffron-200">
                      Sustainable Outcome ★
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW YOU CAN SUPPORT NUTRI-ED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" />
            Join the Nutri-Ed Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
            How You Can Support Nutri-Ed
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Multiple flexible avenues for individuals, student volunteers, and corporate partners to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Option 1: Sponsor a Meal */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Sponsor Nutritious Meals
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Provide wholesome, protein-rich breakfast feeds or hot lunches for children attending learning centers.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/donate"
                className="block text-center py-2.5 px-4 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-colors"
              >
                Sponsor Meals (₹500 / Month)
              </Link>
            </div>
          </div>

          {/* Option 2: Support Education */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Support Education Kits
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Sponsor school bags, notebooks, geometry kits, and after-school remedial tutoring sessions for a student.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/donate"
                className="block text-center py-2.5 px-4 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors"
              >
                Sponsor Learning Kit (₹1,200)
              </Link>
            </div>
          </div>

          {/* Option 3: Volunteer Mentorship */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Volunteer as a Mentor
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Join our weekend reading circles, assist during meal distributions, or conduct fun creative workshops.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/volunteer"
                className="block text-center py-2.5 px-4 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-bold transition-colors"
              >
                Apply to Volunteer
              </Link>
            </div>
          </div>

          {/* Option 4: Corporate / CSR Partnership */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Corporate & CSR Support
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Adopt a whole learning center, sponsor kitchen infrastructure, or organize employee engagement volunteering drives.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-bold transition-colors"
              >
                Initiate CSR Dialogue
              </Link>
            </div>
          </div>

          {/* Option 5: Student Service-Learning */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                College Service-Learning
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Partner with Astha Shakti for certified social impact internships, community research, and fieldwork.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-bold transition-colors"
              >
                Service Learning Inquiry
              </Link>
            </div>
          </div>

          {/* Option 6: Community Drive */}
          <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Special Learner Support
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Sponsor sensory art materials, speech therapy tools, and adaptive crafts for neurodiverse children.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/donate"
                className="block text-center py-2.5 px-4 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-colors"
              >
                Sponsor Adaptive Kits
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
