import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

export const metadata = {
  title: 'Privacy Policy | Astha Shakti',
  description: 'Privacy Policy and child protection data standards for Astha Shakti.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-700 hover:text-saffron-800 bg-cream-200 px-3 py-1.5 rounded-xl"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-cream-200 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
            <Lock className="w-3.5 h-3.5" /> Privacy & Protection Standards
          </div>
          <h1 className="text-3xl font-serif font-black text-charcoal-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-500">
            Last Updated: September 2024 • Astha Shakti Charitable Trust
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          <h2 className="font-serif font-bold text-base text-charcoal-900">
            1. Information Collection & Purpose
          </h2>
          <p>
            Astha Shakti collects volunteer application details, donor contact and PAN records, and general inquiry submissions solely for program coordination, 80G tax receipt issuance, and community communications.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            2. Child Protection & Anonymity
          </h2>
          <p>
            In strict compliance with child protection guidelines, photograph identities and identifiable personal data of minor beneficiaries are carefully curated and safeguarded. Case studies published on this platform may use anonymized names.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            3. Financial & Payment Security
          </h2>
          <p>
            We do not store credit card numbers, CVVs, or payment passwords on our servers. All digital donation gateways interface with RBI-compliant payment processors.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            4. Academic & Service Learning Context
          </h2>
          <p>
            {ORG_INFO.serviceLearningDisclaimer}
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            5. Contacting the Trust
          </h2>
          <p>
            For privacy inquiries or data removal requests, please write to <strong>{ORG_INFO.contact.email}</strong> or visit our office at {ORG_INFO.address.line1}, {ORG_INFO.address.city}, Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
