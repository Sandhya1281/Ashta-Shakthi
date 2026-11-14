import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Utensils,
  BookOpen,
  ArrowRight,
  Quote
} from 'lucide-react';
import { ORG_INFO, TIMELINE_MILESTONES } from '@/lib/data';

export const metadata = {
  title: 'About Us | Astha Shakti Bengaluru',
  description: 'Learn about Astha Shakti, our 2009 Nutri-Ed foundation, Founder T.G. Aruna, and our community mission in Bengaluru.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              Our Identity & Calling
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              About Astha Shakti
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Founded in Bengaluru around the conviction that nutritious food and compassionate education together can break the cycle of poverty and empower future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 tracking-tight">
              A Grassroots Commitment to Child Dignity
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Astha Shakti is a registered charitable trust operating in Bengaluru, Karnataka. Over the past decade and a half, our volunteers and educators have worked directly with families in informal settlements, identifying children at risk of dropping out due to economic hardships and malnutrition.
            </p>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              We operate community learning centers where hot, wholesome meals are paired with experiential learning, homework support, and life skills coaching.
            </p>

            {/* Philosophy callout */}
            <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-saffron-700 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-saffron-600 text-saffron-600" />
                The Guiding Philosophy
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-charcoal-900 leading-relaxed">
                “Nutrition can open the door to health.<br />
                Education can open the door to opportunity.<br />
                Together, they can help break cycles of poverty.”
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                alt="Children learning in Astha Shakti classroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs text-charcoal-500 italic text-center">
              Learning sessions conducted with individual attention and nurturing guidance.
            </p>
          </div>

        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-saffron-600 to-amber-500 text-white flex items-center justify-center font-serif font-black text-4xl shadow-xl shadow-saffron-600/20">
                TA
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal-950">
                  {ORG_INFO.founder.name}
                </h3>
                <p className="text-xs font-bold text-saffron-700 uppercase tracking-wider">
                  {ORG_INFO.founder.role}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-cream-200 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 text-xs font-bold text-forest-800 uppercase tracking-wider">
                <Quote className="w-4 h-4 text-forest-600" />
                Founder’s Perspective
              </div>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {ORG_INFO.founder.bio}
              </p>
              <blockquote className="bg-cream-50 p-4 rounded-2xl border-l-4 border-forest-600 text-xs sm:text-sm italic font-serif text-charcoal-800">
                “{ORG_INFO.founder.quote}”
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-charcoal-800 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-saffron-600" />
            Milestones of Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 tracking-tight">
            Our Journey Since 2009
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            A continuous trajectory of expanding community support across Bengaluru.
          </p>
        </div>

        <div className="relative border-l-2 border-saffron-300 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Year badge on left for tablet+ */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="font-serif font-black text-xl text-saffron-700">
                  {item.year}
                </span>
              </div>

              {/* Pin indicator on the line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-saffron-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-300 shadow-xs hover:shadow-md transition-shadow">
                <span className="sm:hidden text-xs font-bold text-saffron-700 font-serif block mb-1">
                  {item.year}
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Principles Guiding Every Initiative
            </h2>
            <p className="text-xs sm:text-sm text-forest-200">
              We hold ourselves to authentic community-first values in every center and distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-forest-800/60 p-5 rounded-2xl border border-forest-700">
              <Utensils className="w-6 h-6 text-saffron-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-white">Dignified Nutrition</h4>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Wholesome, respectful, clean food prepared and served with genuine warmth.
              </p>
            </div>

            <div className="bg-forest-800/60 p-5 rounded-2xl border border-forest-700">
              <BookOpen className="w-6 h-6 text-marigold-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-white">Inclusive Learning</h4>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Patient education that embraces special-needs, neurodiverse, and first-generation learners.
              </p>
            </div>

            <div className="bg-forest-800/60 p-5 rounded-2xl border border-forest-700">
              <Users className="w-6 h-6 text-saffron-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-white">Community Trust</h4>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Partnering directly with local mothers, elders, and youth to foster organic engagement.
              </p>
            </div>

            <div className="bg-forest-800/60 p-5 rounded-2xl border border-forest-700">
              <ShieldCheck className="w-6 h-6 text-forest-300 mb-3" />
              <h4 className="font-serif font-bold text-base text-white">Transparent Service</h4>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Responsible stewardship of every volunteer hour and donor rupee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-cream-200/80 rounded-3xl p-8 sm:p-12 border border-cream-300 space-y-4">
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">
            Want to see our work in action?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
            Discover our six core focus areas or join us as a volunteer mentor in Bengaluru.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/our-work"
              className="px-6 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow-md transition-all"
            >
              Explore Our Work
            </Link>
            <Link
              href="/volunteer"
              className="px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold shadow-md transition-all"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
