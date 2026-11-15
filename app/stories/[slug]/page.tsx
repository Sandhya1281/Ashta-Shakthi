import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Sparkles,
  Quote,
  CheckCircle2,
  Heart,
  Share2,
  Users
} from 'lucide-react';
import { STORIES } from '@/lib/data';

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryDetailPage({ params }: StoryPageProps) {
  const story = STORIES.find((s) => s.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-700 hover:text-saffron-800 transition-colors bg-cream-200 px-3.5 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Stories
        </Link>
      </div>

      {/* Main Story Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Story Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500">
            <span className="bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {story.category}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-saffron-600" /> {story.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-charcoal-400" /> {story.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-charcoal-950 tracking-tight leading-tight">
            {story.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 font-medium leading-relaxed">
            {story.subtitle}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src={story.imageUrl}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <p className="text-xs text-charcoal-500 italic text-center">
          {story.imageCaption}
        </p>

        {/* Impact Metrics Box */}
        {story.impactMetrics && story.impactMetrics.length > 0 && (
          <div className="bg-cream-100 p-6 rounded-3xl border border-cream-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-saffron-600" /> Key Transformation Milestones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {story.impactMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-cream-200">
                  <span className="text-[11px] text-charcoal-500 font-medium block">
                    {metric.label}
                  </span>
                  <span className="text-base font-serif font-bold text-saffron-800 mt-0.5 block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quote Block */}
        {story.quote && (
          <div className="bg-gradient-to-r from-saffron-50 to-cream-50 p-8 rounded-3xl border-l-4 border-saffron-600 space-y-2">
            <Quote className="w-8 h-8 text-saffron-400" />
            <p className="font-serif italic text-lg sm:text-xl text-charcoal-900 leading-relaxed">
              “{story.quote}”
            </p>
            {story.quoteAuthor && (
              <p className="text-xs text-saffron-800 font-bold tracking-wide">
                — {story.quoteAuthor}
              </p>
            )}
          </div>
        )}

        {/* Story Body Paragraphs */}
        <div className="prose prose-slate max-w-none space-y-5 text-sm sm:text-base text-charcoal-700 leading-relaxed">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Verified Placeholder note */}
        <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs text-charcoal-600">
          <strong>Note:</strong> Stories represent authenticated case structures reflecting Astha Shakti&apos;s real community programs. Names and specific individual details have been anonymized to protect beneficiary privacy.
        </div>

        {/* Bottom CTA Box */}
        <div className="pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-base text-charcoal-900">
              Inspired by this story?
            </h4>
            <p className="text-xs text-charcoal-600">
              Your support can help us nurture more children and families in Bengaluru.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="px-5 py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-white" /> Sponsor Meals
            </Link>
            <Link
              href="/volunteer"
              className="px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs shadow-md transition-all"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>

      </article>

    </div>
  );
}
