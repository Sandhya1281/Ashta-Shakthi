import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  ArrowRight,
  Sparkles,
  BookOpen,
  Utensils,
  HeartHandshake,
  Users,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
  Smile,
  Quote
} from 'lucide-react';
import ImpactCounters from '@/components/ImpactCounters';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import InstagramFeed from '@/components/InstagramFeed';
import GalleryLightbox from '@/components/GalleryLightbox';
import {
  ORG_INFO,
  WORK_AREAS,
  NUTRI_ED_STEPS,
  STORIES,
  GALLERY_ITEMS,
  DONATION_TIERS
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-cream-200/80 via-cream-100 to-cream-100">
        {/* Subtle decorative background circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-saffron-300/15 via-marigold-200/20 to-forest-200/15 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100/90 border border-saffron-300/60 text-saffron-900 text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-saffron-600 animate-ping" />
                <span>Grassroots Child Welfare • Bengaluru</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-black text-charcoal-950 tracking-tight leading-[1.15]">
                “Food is the Gateway to Good Health and Education”
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {ORG_INFO.shortDescription}
              </p>

              {/* Hero CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/donate"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-700 hover:to-saffron-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-saffron-600/30 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-white text-white" />
                  DONATE NOW
                </Link>

                <Link
                  href="/volunteer"
                  className="px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm sm:text-base shadow-md shadow-forest-800/20 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
                >
                  <Users className="w-5 h-5 text-forest-200" />
                  BECOME A VOLUNTEER
                </Link>

                <Link
                  href="/our-work"
                  className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-cream-200 text-charcoal-900 font-bold text-sm sm:text-base border border-cream-300 shadow-xs transition-all duration-200 hover:scale-[1.02]"
                >
                  OUR WORK
                </Link>
              </div>

              {/* Secondary Link */}
              <div className="pt-1">
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-800 hover:text-saffron-900 group transition-colors"
                >
                  <span>See how we create impact</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Hero Visual & Floating Impact Card (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Main Hero Image Container */}
                <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white shadow-saffron-950/10">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                    alt="Children happily learning and receiving nutritious food at Astha Shakti"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent" />
                  
                  {/* Overlay text on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                    <p className="font-serif font-bold text-sm sm:text-base text-white drop-shadow-md">
                      Nutri-Ed Learning Centers • Bengaluru
                    </p>
                    <p className="text-xs text-cream-200/90 drop-shadow-xs">
                      Unlocking child potential through nutrition and care.
                    </p>
                  </div>
                </div>

                {/* Floating Impact Card: "Nutrition + Education = Opportunity" */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-cream-300 max-w-[280px] sm:max-w-[310px] animate-pulse-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-forest-700" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-charcoal-900 font-serif">
                        Nutrition + Education = Opportunity
                      </h4>
                      <p className="text-[11px] text-charcoal-600 mt-0.5">
                        A child free from hunger is a child ready to learn.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top Right */}
                <div className="absolute -top-4 -right-4 bg-saffron-600 text-white rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-1.5 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Est. 2009</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK IMPACT COUNTERS (Requirement #5) */}
      <ImpactCounters />

      {/* 3. ABOUT ASTHA SHAKTI & PHILOSOPHY (Requirement #6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5 text-forest-700" />
                Who We Are & Our Story
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-950 tracking-tight">
                Empowering Children from the Ground Up
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                <strong>Astha Shakti</strong> is a Bengaluru-based charitable organization founded on a foundational truth: children battling hunger cannot fully absorb education. By integrating wholesome daily nourishment with systematic academic tutoring and life skill enrichment, we help underprivileged children stay in school and build brighter futures.
              </p>

              {/* Core Philosophy Box */}
              <div className="bg-gradient-to-r from-cream-100 to-cream-50 p-6 rounded-2xl border-l-4 border-saffron-600 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-800">
                  Our Core Philosophy
                </h3>
                <div className="space-y-1.5 text-sm sm:text-base font-serif italic text-charcoal-900 leading-snug">
                  <p>“Nutrition can open the door to health.</p>
                  <p>Education can open the door to opportunity.</p>
                  <p>Together, they can help break cycles of poverty.”</p>
                </div>
              </div>

              {/* Founder Section */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-cream-50 p-4 rounded-2xl border border-cream-200">
                <div className="w-14 h-14 rounded-2xl bg-saffron-600 text-white flex items-center justify-center font-serif font-black text-xl shrink-0 shadow-md">
                  TA
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-charcoal-950">
                    {ORG_INFO.founder.name}
                  </h4>
                  <p className="text-xs text-saffron-700 font-semibold mb-1">
                    {ORG_INFO.founder.role}
                  </p>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {ORG_INFO.founder.bio}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forest-800 hover:text-forest-900 group"
                >
                  <span>Read the complete Astha Shakti story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Visual / Milestone Timeline preview (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-md border border-cream-300">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Classroom learning at Astha Shakti"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Timeline Card */}
              <div className="bg-cream-100 p-5 rounded-2xl border border-cream-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-saffron-600" /> Key Milestone
                </h4>
                <div className="flex items-start gap-3">
                  <span className="font-serif font-black text-2xl text-saffron-700">2009</span>
                  <div>
                    <h5 className="font-bold text-sm text-charcoal-900">
                      Beginning of the Nutri-Ed Initiative
                    </h5>
                    <p className="text-xs text-charcoal-600 mt-0.5">
                      Pioneered in Bengaluru to directly solve morning hunger as the root cause of classroom dropouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NUTRI-ED PROGRAM INFOGRAPHIC PREVIEW (Requirement #8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800/90 text-forest-200 text-xs font-bold border border-forest-700">
              <Utensils className="w-3.5 h-3.5 text-saffron-400" />
              Flagship Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              From Nutrition to Education: The 7-Step Nutri-Ed Process
            </h2>
            <p className="text-sm sm:text-base text-forest-100 leading-relaxed">
              The Nutri-Ed approach recognizes that a child struggling with hunger cannot fully benefit from education. By addressing nutrition alongside education, Astha Shakti creates a solid foundation for long-term growth.
            </p>
          </div>

          {/* 7-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {NUTRI_ED_STEPS.slice(0, 4).map((step) => (
              <div
                key={step.step}
                className="bg-forest-800/60 backdrop-blur-md rounded-2xl p-5 border border-forest-700/80 hover:bg-forest-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-saffron-600 text-white font-serif font-bold text-sm flex items-center justify-center shadow-md">
                      0{step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-forest-300 font-bold">
                      Phase {step.step}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-forest-200 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-forest-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-forest-300">
              Explore the full 7-step holistic diagram and volunteer meal sponsorship details.
            </p>
            <Link
              href="/nutri-ed"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-500 text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              Explore Complete Nutri-Ed Model <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SIX AREAS OF WORK (Requirement #7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
            <HeartHandshake className="w-3.5 h-3.5 text-saffron-600" />
            Holistic Community Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
            Our Core Areas of Work
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Every program addresses a specific dimension of child growth, parental dignity, and neighborhood resilience.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK_AREAS.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={area.imageUrl}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-charcoal-900/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    {area.tagline}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-saffron-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                    {area.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-cream-200 pt-3">
                    {area.points.slice(0, 2).map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={area.link}
                  className="w-full py-2.5 px-4 rounded-xl bg-cream-200 hover:bg-saffron-600 hover:text-white text-charcoal-800 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                >
                  Learn More About {area.title} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STORIES OF CHANGE (Requirement #10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-200/60 rounded-3xl p-8 sm:p-12 border border-cream-300">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-cream-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold mb-2">
                <Smile className="w-3.5 h-3.5 text-saffron-600" />
                Impact Narratives
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
                Stories of Change
              </h2>
              <p className="text-xs text-charcoal-600 mt-1">
                Real-world examples illustrating how daily nourishment and patient mentorship transform lives.
              </p>
            </div>

            <Link
              href="/stories"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-saffron-700 hover:text-saffron-800 shrink-0"
            >
              <span>Read more stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={story.imageUrl}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-charcoal-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-base text-charcoal-900 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                      {story.summary}
                    </p>

                    {story.quote && (
                      <div className="mt-4 p-3 bg-cream-100 rounded-xl border-l-2 border-saffron-500 text-xs italic text-charcoal-700">
                        “{story.quote}”
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1 border-t border-cream-200/80">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="text-xs font-bold text-saffron-700 hover:text-saffron-800 flex items-center justify-between"
                  >
                    <span>Read Full Story</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. GALLERY PREVIEW (Requirement #11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-cream-200">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
              Moments from the Field
            </h2>
            <p className="text-sm text-charcoal-600 mt-1">
              Explore glimpses of our daily nutrition sessions, creative workshops, and volunteer drives.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-700 hover:text-saffron-800 bg-cream-200 hover:bg-cream-300 px-4 py-2 rounded-xl transition-colors"
          >
            Open Full Gallery ({GALLERY_ITEMS.length} Photos) →
          </Link>
        </div>

        <GalleryLightbox items={GALLERY_ITEMS.slice(0, 4)} />
      </section>

      {/* 8. YOUTUBE VIDEO SECTION (Requirement #12) */}
      <YouTubeEmbed />

      {/* 9. INSTAGRAM SECTION (Requirement #13) */}
      <InstagramFeed />

      {/* 10. VOLUNTEER & DONATION CALL TO ACTION (Requirements #14 & #15) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Volunteer CTA */}
          <div className="bg-gradient-to-br from-forest-800 to-forest-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700 text-forest-200 text-xs font-bold">
                <Users className="w-3.5 h-3.5" /> Join Our Bengaluru Volunteers
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Share Your Time, Knowledge & Compassion
              </h3>
              <p className="text-xs sm:text-sm text-forest-100 leading-relaxed">
                Whether you can teach reading, assist during morning meal distribution, coordinate fun workshops, or help digitally, your support creates tangible smiles.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-forest-950 font-bold text-sm hover:bg-forest-50 transition-all shadow-md"
              >
                Apply as a Volunteer <ArrowRight className="w-4 h-4 text-forest-700" />
              </Link>
            </div>
          </div>

          {/* Donation CTA */}
          <div className="bg-gradient-to-br from-saffron-600 to-saffron-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500 text-white text-xs font-bold">
                <Heart className="w-3.5 h-3.5 fill-white" /> Nourish a Child Today
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Your Support Can Help Create Opportunity
              </h3>
              <p className="text-xs sm:text-sm text-saffron-100 leading-relaxed">
                Just ₹500 provides 25 wholesome, protein-rich Nutri-Ed hot meals to a student attending classes in Bengaluru. Every contribution counts.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-charcoal-950 text-white font-bold text-sm hover:bg-charcoal-900 transition-all shadow-md"
              >
                <Heart className="w-4 h-4 fill-saffron-400 text-saffron-400" />
                Make a Contribution <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 11. CONTACT TEASER (Requirement #16) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-saffron-700 text-xs font-bold">
              <MapPin className="w-4 h-4" /> Bengaluru Headquarters
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900">
              Have questions or want to visit our centers?
            </h3>
            <p className="text-xs text-charcoal-600">
              Located at JP Nagar 6th Phase, Bengaluru. We welcome inquiries from community members, volunteers, and CSR partners.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
