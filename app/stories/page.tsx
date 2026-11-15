import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, MapPin, CheckCircle2, Quote, Smile } from 'lucide-react';
import { STORIES } from '@/lib/data';

export const metadata = {
  title: 'Stories of Change | Astha Shakti Bengaluru',
  description: 'Read inspiring case narratives of children, mothers, and special learners nurtured through Astha Shakti programs.',
};

export default function StoriesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <Smile className="w-3.5 h-3.5 text-saffron-600" />
              Human-Centered Outcomes
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Stories of Change
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Every child has boundless potential when provided food security, patient learning guidance, and genuine dignity. Discover real transformation narratives from our community centers.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                    {story.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-charcoal-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-saffron-600" /> {story.location}
                    </span>
                    <span>{story.publishedDate}</span>
                  </div>

                  <h2 className="font-serif font-bold text-lg text-charcoal-950 leading-snug">
                    {story.title}
                  </h2>

                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                    {story.summary}
                  </p>

                  {story.quote && (
                    <div className="p-3 bg-cream-50 rounded-xl border-l-2 border-saffron-500 text-xs italic text-charcoal-700">
                      “{story.quote}”
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-cream-200">
                <Link
                  href={`/stories/${story.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-saffron-50 hover:bg-saffron-600 text-saffron-800 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Detailed Narrative</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
