import React from 'react';
import { Youtube, ExternalLink, Play, Sparkles } from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

interface YouTubeEmbedProps {
  videoId?: string;
  title?: string;
}

export default function YouTubeEmbed({
  videoId = 'dQw4w9WgXcQ', // default placeholder or featured ID
  title = 'Astha Shakti in Action: Nutrition & Child Empowerment'
}: YouTubeEmbedProps) {
  return (
    <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden rounded-3xl my-8">
      {/* Background ambient gradient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-saffron-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-forest-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 text-red-400 text-xs font-bold mb-3 border border-red-800/50">
              <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
              Official Video Broadcasts
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Watch Astha Shakti in Action
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Witness the direct ground reality of our Nutri-Ed meal distributions, joyful classroom sessions, and community engagement in Bengaluru.
            </p>
          </div>

          <a
            href={ORG_INFO.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all hover:scale-105 shrink-0"
          >
            <Youtube className="w-4 h-4 fill-white" />
            Watch on YouTube Channel <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Player Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Embed (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative group">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=asthashakti8487"
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Video Channel Info & Highlights (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/30">
                  <Play className="w-5 h-5 fill-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">@asthashakti8487</h4>
                  <p className="text-xs text-slate-400">Official YouTube Channel</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore documentary clips, classroom celebrations, volunteer testimonials, and impact chronicles recorded at our learning centers.
              </p>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <h4 className="font-serif font-bold text-sm text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-marigold-400" /> Video Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 shrink-0" />
                  <span>Morning Nutri-Ed hot meal preparation & feeding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-400 mt-1.5 shrink-0" />
                  <span>Differently-abled children tactile workshop achievements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-marigold-400 mt-1.5 shrink-0" />
                  <span>Volunteer experiences & orientation walkthroughs.</span>
                </li>
              </ul>
            </div>

            <a
              href={ORG_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-colors border border-slate-600"
            >
              Subscribe & Follow on YouTube →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
