"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/lib/types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  MapPin
} from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  initialCategory?: string;
}

export default function GalleryLightbox({ items, initialCategory = 'All' }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const categories = ['All', ...Array.from(new Set(items.map((item) => item.category))).sort()];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <div className="space-y-8">
      
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5 text-saffron-600" /> Filter:
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-saffron-600 text-white shadow-md shadow-saffron-600/20 scale-105'
                  : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.imageUrl}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-saffron-600/90 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  <Maximize2 className="w-3 h-3" /> View Photo
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-charcoal-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                {item.category}
              </span>
            </div>

            {/* Content & Caption */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h4 className="font-serif font-bold text-sm text-charcoal-900 line-clamp-1 group-hover:text-saffron-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-charcoal-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal-500">
                {item.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-saffron-600" /> {item.location}
                  </span>
                )}
                {item.date && <span>{item.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-cream-200 p-8">
          <p className="text-charcoal-500 text-sm font-medium">
            No gallery items found in category &ldquo;{activeCategory}&rdquo;.
          </p>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50">
            <div className="flex items-center gap-2">
              <span className="bg-saffron-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {currentItem.category}
              </span>
              <span className="text-xs text-slate-400">
                {selectedIndex! + 1} of {filteredItems.length}
              </span>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-saffron-600 text-white transition-all z-50 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-saffron-600 text-white transition-all z-50 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.caption}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="w-full bg-slate-900/90 rounded-2xl p-4 mt-4 text-white border border-slate-800">
              <h3 className="font-serif font-bold text-base text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {currentItem.caption}
              </p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                {currentItem.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-saffron-400" /> {currentItem.location}
                  </span>
                )}
                {currentItem.date && <span>Year: {currentItem.date}</span>}
                <span className="text-slate-500 italic ml-auto">
                  Use ← and → arrows to browse photos
                </span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
