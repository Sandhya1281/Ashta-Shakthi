"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  X,
  AlertCircle
} from 'lucide-react';
import { UPCOMING_EVENTS } from '@/lib/data';
import { EventItem } from '@/lib/types';
import { StorageManager } from '@/lib/storage';
import confetti from 'canvas-confetti';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendeesCount: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setIsSubmitting(true);
    setTimeout(() => {
      StorageManager.addEventRegistration({
        eventId: selectedEvent.id,
        eventTitle: selectedEvent.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        attendeesCount: Number(formData.attendeesCount) || 1,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 600);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsSuccess(false);
    setFormData({ fullName: '', email: '', phone: '', attendeesCount: 1 });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-forest-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5 text-forest-700" />
              Upcoming Community Engagements
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Events & Volunteer Drives
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Participate directly in our weekend Nutri-Ed meal distributions, inclusive creative workshops, and community health camps across Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Events List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                    {event.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-forest-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow-sm">
                    {event.status}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-bold text-lg text-charcoal-950 leading-snug">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs text-charcoal-600 bg-cream-50 p-4 rounded-2xl border border-cream-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                      <span className="font-semibold text-charcoal-800">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-marigold-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {event.description}
                  </p>

                  {event.seatsRemaining !== undefined && (
                    <div className="flex items-center justify-between text-[11px] text-charcoal-500 pt-2 border-t border-cream-200">
                      <span className="flex items-center gap-1 font-semibold text-saffron-700">
                        <Users className="w-3.5 h-3.5" /> {event.seatsRemaining} Volunteer Spots Left
                      </span>
                      <span>Total Capacity: {event.seatsTotal}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full py-3 px-4 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Register for Event</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-cream-300 relative animate-in zoom-in-95 duration-150">
            
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-1.5 rounded-xl hover:bg-cream-100 text-charcoal-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                <div className="space-y-1 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-2.5 py-0.5 rounded-md">
                    {selectedEvent.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-charcoal-900 pt-1">
                    Event Registration
                  </h3>
                  <p className="text-xs text-charcoal-600">
                    {selectedEvent.title}
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full p-3 rounded-xl border border-cream-300 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 bg-cream-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-charcoal-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full p-3 rounded-xl border border-cream-300 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 bg-cream-50/50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-charcoal-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 rounded-xl border border-cream-300 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 bg-cream-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Number of Attendees
                    </label>
                    <select
                      value={formData.attendeesCount}
                      onChange={(e) => setFormData({ ...formData, attendeesCount: Number(e.target.value) })}
                      className="w-full p-3 rounded-xl border border-cream-300 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 bg-cream-50/50"
                    >
                      <option value={1}>1 Volunteer / Attendee</option>
                      <option value={2}>2 Attendees</option>
                      <option value={3}>3 Attendees</option>
                      <option value={4}>4+ (Group / College team)</option>
                    </select>
                  </div>

                  <div className="p-3 bg-cream-100 rounded-xl text-[11px] text-charcoal-600">
                    Location: <strong>{selectedEvent.location}</strong> on <strong>{selectedEvent.date}</strong> ({selectedEvent.time}).
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-saffron-600 hover:bg-saffron-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Confirming Registration...' : 'Confirm My Registration'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Registration Confirmed!
                </h3>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your spot for <strong>{selectedEvent.title}</strong> has been recorded. Our coordinator will reach out before the event with logistics.
                </p>
                <div className="pt-2">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
