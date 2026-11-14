"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  Heart,
  Upload,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  FileText,
  Clock,
  MapPin
} from 'lucide-react';
import { StorageManager } from '@/lib/storage';
import confetti from 'canvas-confetti';

const INTEREST_AREAS = [
  'Teaching',
  'Event Support',
  'Fundraising',
  'Social Media',
  'Content Creation',
  'Technology',
  'Community Outreach',
  'Skill Development',
  'Other'
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    city: 'Bengaluru',
    occupation: '',
    interests: [] as string[],
    availability: '',
    skills: '',
    experience: '',
    motivation: '',
    resumeFileName: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resumeFileName: e.target.files![0].name
      }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid phone number is required (min 10 digits)';
    }
    if (!formData.age.trim()) errs.age = 'Age is required';
    if (!formData.occupation.trim()) errs.occupation = 'Occupation or College is required';
    if (formData.interests.length === 0) {
      errs.interests = 'Please select at least one area of interest';
    }
    if (!formData.availability.trim()) {
      errs.availability = 'Please indicate your available days/hours';
    }
    if (!formData.motivation.trim()) {
      errs.motivation = 'Please share why you would like to volunteer';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the volunteer consent';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      StorageManager.addVolunteer({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        city: formData.city,
        occupation: formData.occupation,
        interests: formData.interests,
        availability: formData.availability,
        skills: formData.skills,
        experience: formData.experience,
        motivation: formData.motivation,
        resumeFileName: formData.resumeFileName,
        consent: formData.consent,
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 700);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-forest-50/70 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-forest-700" />
              Community Volunteer Network
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Become an Astha Shakti Volunteer
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Join students, working professionals, and compassionate citizens in Bengaluru dedicated to uplifting children through daily nutrition, academic tutoring, and creative enrichment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-cream-300 shadow-sm">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Intro */}
              <div className="pb-6 border-b border-cream-200">
                <h2 className="text-2xl font-serif font-bold text-charcoal-900">
                  Volunteer Application Form
                </h2>
                <p className="text-xs text-charcoal-600 mt-1">
                  Please fill in your details below. All fields marked with * are required.
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                  1. Personal & Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.fullName ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.email ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.phone ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 mb-1">
                        Age *
                      </label>
                      <input
                        type="text"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 21"
                        className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                          errors.age ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                        }`}
                      />
                      {errors.age && <p className="text-[11px] text-red-600 mt-1">{errors.age}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 mb-1">
                        City / Locality *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bengaluru"
                        className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    Occupation / College *
                  </label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    placeholder="e.g. B.Tech Student at RVCE / Software Engineer at Infosys"
                    className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                      errors.occupation ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                    }`}
                  />
                  {errors.occupation && <p className="text-[11px] text-red-600 mt-1">{errors.occupation}</p>}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-3 pt-4 border-t border-cream-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                  2. Areas of Interest *
                </h3>
                <p className="text-xs text-charcoal-600">
                  Select all the areas you would love to contribute to:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {INTEREST_AREAS.map((interest) => {
                    const isChecked = formData.interests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                          isChecked
                            ? 'bg-saffron-50 border-saffron-500 text-saffron-900 shadow-xs'
                            : 'bg-cream-50 border-cream-200 text-charcoal-700 hover:bg-cream-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                            isChecked ? 'bg-saffron-600 border-saffron-600 text-white' : 'border-charcoal-300'
                          }`}>
                            {isChecked ? '✓' : ''}
                          </span>
                          <span>{interest}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.interests && <p className="text-[11px] text-red-600 mt-1">{errors.interests}</p>}
              </div>

              {/* Availability & Skills */}
              <div className="space-y-4 pt-4 border-t border-cream-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                  3. Availability & Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1">
                      Availability *
                    </label>
                    <input
                      type="text"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      placeholder="e.g. Saturdays 9 AM - 1 PM / 4 hours per week"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.availability ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.availability && <p className="text-[11px] text-red-600 mt-1">{errors.availability}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1">
                      Skills & Strengths
                    </label>
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g. Mathematics, English storytelling, Art, Tech, Video editing"
                      className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    Previous Volunteering Experience (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Briefly describe any past social work, NGO teaching, or event coordination..."
                    className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    Why would you like to volunteer with Astha Shakti? *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Share what inspires you to support our Nutri-Ed and child education initiatives..."
                    className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                      errors.motivation ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                    }`}
                  />
                  {errors.motivation && <p className="text-[11px] text-red-600 mt-1">{errors.motivation}</p>}
                </div>
              </div>

              {/* Upload Document / CV & Consent */}
              <div className="space-y-4 pt-4 border-t border-cream-200">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    Upload CV / Document (Optional)
                  </label>
                  <div className="p-4 border-2 border-dashed border-cream-300 rounded-2xl bg-cream-50/50 flex flex-col items-center justify-center text-center">
                    <Upload className="w-6 h-6 text-charcoal-400 mb-2" />
                    <label className="cursor-pointer text-xs font-bold text-saffron-700 hover:text-saffron-800">
                      <span>Click to upload file</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[11px] text-charcoal-500 mt-0.5">
                      {formData.resumeFileName ? `Selected: ${formData.resumeFileName}` : 'PDF, DOC up to 5MB'}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-saffron-600 focus:ring-saffron-500 border-cream-300"
                    />
                    <span className="text-xs text-charcoal-600 leading-snug">
                      I confirm that the details provided are accurate and agree to participate in Astha Shakti&apos;s volunteer orientation and child protection guidelines. *
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-forest-800 to-forest-900 hover:from-forest-900 hover:to-forest-950 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-forest-900/20 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  {isSubmitting ? 'Submitting Application...' : 'SUBMIT VOLUNTEER APPLICATION'}
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-forest-100 text-forest-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
                  Application Received!
                </h2>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in supporting Astha Shakti. Your application has been received and logged in our volunteer database.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200 max-w-md mx-auto text-left text-xs space-y-2">
                <p className="font-bold text-charcoal-800">Next Steps:</p>
                <p className="text-charcoal-600">
                  1. Our volunteer coordinator will review your areas of interest.
                </p>
                <p className="text-charcoal-600">
                  2. You will receive an invitation to our upcoming weekend orientation drive in JP Nagar Bengaluru.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-bold transition-colors"
                >
                  Submit Another Form
                </button>
                <Link
                  href="/admin"
                  className="px-6 py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-colors"
                >
                  View in Admin Portal
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
