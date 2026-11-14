"use client";
import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Instagram,
  Youtube
} from 'lucide-react';
import { ORG_INFO } from '@/lib/data';
import { StorageManager } from '@/lib/storage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      StorageManager.addContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <Mail className="w-3.5 h-3.5 text-saffron-600" />
              Connect With Our Team
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Contact Astha Shakti
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              We welcome inquiries regarding Nutri-Ed meal sponsorships, student service-learning collaborations, volunteering, and center visits in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-sm">
            
            <div className="pb-6 border-b border-cream-200 mb-6">
              <h2 className="text-2xl font-serif font-bold text-charcoal-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-charcoal-600 mt-1">
                Fill out the form below and our coordination team will get back to you promptly.
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Srikant Iyer"
                      className={`w-full p-3 rounded-xl border bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.name ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="srikant@example.com"
                      className={`w-full p-3 rounded-xl border bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.email ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-800 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Meal Sponsorship / College Service-Learning"
                      className={`w-full p-3 rounded-xl border bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.subject ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-800 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How would you like to partner or support Astha Shakti? Please share any details..."
                    className={`w-full p-3 rounded-xl border bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                      errors.message ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-saffron-600 hover:bg-saffron-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending Message...' : 'SEND MESSAGE'}
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Astha Shakti. Your inquiry has been logged in our coordinator inbox. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-bold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>

          {/* Bengaluru Address & Social Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-5">
              <h3 className="font-serif font-bold text-lg text-charcoal-900">
                Bengaluru Headquarters
              </h3>

              <div className="space-y-4 text-xs text-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal-900 text-sm font-serif">
                      {ORG_INFO.name}
                    </strong>
                    <p className="mt-0.5 leading-relaxed text-charcoal-600">
                      {ORG_INFO.address.line1},<br />
                      {ORG_INFO.address.line2},<br />
                      {ORG_INFO.address.city}, {ORG_INFO.address.state} {ORG_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal-900">Official Email</strong>
                    <p className="text-charcoal-600">{ORG_INFO.contact.displayEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-marigold-100 text-marigold-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal-900">Phone</strong>
                    <p className="text-charcoal-600">{ORG_INFO.contact.displayPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-charcoal-900">Visiting Hours</strong>
                    <p className="text-charcoal-600">{ORG_INFO.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-cream-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block mb-2">
                  Official Channels
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={ORG_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 text-xs font-semibold hover:bg-pink-100 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                  <a
                    href={ORG_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-semibold hover:bg-red-100 transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5" /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-sm">
              <div className="p-4 border-b border-cream-200 bg-cream-50 flex items-center justify-between text-xs">
                <span className="font-bold text-charcoal-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-saffron-600" /> JP Nagar 6th Phase, Bengaluru
                </span>
                <a
                  href="https://maps.google.com/?q=JP+Nagar+6th+Phase+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron-700 hover:text-saffron-800 font-semibold flex items-center gap-0.5"
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-16/9 w-full bg-slate-100">
                <iframe
                  title="Astha Shakti Location Map"
                  src="https://maps.google.com/maps?q=JP%20Nagar%206th%20Phase,%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
