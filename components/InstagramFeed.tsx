import React from 'react';
import Image from 'next/image';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

const INSTA_POSTS = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    caption: 'Every meal shared is a step closer to consistent education. #NutriEd #AsthaShakti #BengaluruNGO',
    likes: 'Verified',
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    caption: 'Weekend storytelling circles with our wonderful volunteers in JP Nagar. #ChildEducation #VolunteerBengaluru',
    likes: 'Verified',
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    caption: 'Inclusive art and sensory fun! Celebrating every child’s unique creativity. #DifferentlyAbled #Inclusion',
    likes: 'Verified',
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1609137144822-0d1217e94e50?auto=format&fit=crop&w=600&q=80',
    caption: 'Empowering mothers with tailoring & livelihood skills for household resilience. #WomenEmpowerment',
    likes: 'Verified',
  }
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
              Follow Our Journey on Instagram
            </h2>
            <p className="text-sm text-charcoal-600 mt-1 max-w-xl">
              Stay connected with daily photos, community stories, and field milestones from our Bengaluru centers.
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
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href={ORG_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt="Astha Shakti Instagram post"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                  <span className="flex items-center gap-1 font-bold text-xs">
                    <Heart className="w-4 h-4 fill-white" /> Astha Shakti
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <ExternalLink className="w-4 h-4" /> View Post
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-charcoal-700 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-saffron-700 font-semibold">
                  <span>View on Instagram</span>
                  <span>↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
