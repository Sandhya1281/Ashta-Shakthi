import React from 'react';
import { Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import GalleryLightbox from '@/components/GalleryLightbox';
import { GALLERY_ITEMS } from '@/lib/data';

export const metadata = {
  title: 'Photo & Video Gallery | Astha Shakti Bengaluru',
  description: 'Visual chronicles of our Nutri-Ed meal distributions, joyful classrooms, volunteer activities, and community programs.',
};

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <Camera className="w-3.5 h-3.5 text-saffron-600" />
              Visual Field Chronicles
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Astha Shakti Gallery
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Explore authentic moments from our Bengaluru learning centers, hot meal sessions, vocational workshops, and community events. Click any photo to view in high-resolution lightbox.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryLightbox items={GALLERY_ITEMS} initialCategory="All" />
      </section>

    </div>
  );
}
