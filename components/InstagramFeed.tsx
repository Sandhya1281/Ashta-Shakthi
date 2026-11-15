import React from 'react';
import Image from 'next/image';
import { Instagram, ExternalLink } from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

const COMMUNITY_PHOTOS = [
  {
    id: 'food',
    image: '/images/community/img-20260921-wa0008.webp',
    category: 'Food Program',
    caption: 'Community members serving a meal at an Astha Shakti program.',
  },
  {
    id: 'education',
    image: '/images/community/img-20260921-wa0020.webp',
    category: 'Education Program',
    caption: 'Children gathered for an outdoor learning activity.',
  },
  {
    id: 'internship',
    image: '/images/community/img-20260921-wa0010.webp',
    category: 'Internship Programs',
    caption: 'Astha Shakti volunteer Eveline, visiting from Australia.',
  },
  {
    id: 'special-children',
    image: '/images/community/img-20260921-wa0045.webp',
    category: 'Programs for Special Children',
    caption: 'A volunteer works alongside a child during a community activity.',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-cream-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold mb-2">
              <Instagram className="w-3.5 h-3.5" />
              @asthashakti8
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Moments from Astha Shakti
            </h2>
            <p className="text-sm text-charcoal-600 mt-1 max-w-xl">
              Photos shared by Astha Shakti, featuring meals, learning activities, volunteers, and inclusive programs.
            </p>
          </div>

          <a
            href={ORG_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-pink-600/20 transition-all hover:scale-105 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            Follow @asthashakti8 <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_PHOTOS.map((photo) => (
            <article
              key={photo.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={photo.image}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-charcoal-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-charcoal-700 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-saffron-700 font-semibold">
                  <span>Astha Shakti photo</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
