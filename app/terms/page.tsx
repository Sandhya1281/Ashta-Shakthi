import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, ArrowLeft } from 'lucide-react';
import { ORG_INFO } from '@/lib/data';

export const metadata = {
  title: 'Terms of Use & Service Learning Disclaimer | Astha Shakti',
  description: 'Terms of use, service learning project disclosure, and organizational disclaimer.',
};

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <AlertCircle className="w-3.5 h-3.5" /> Project Disclaimer & Terms
          </div>
          <h1 className="text-3xl font-serif font-black text-charcoal-900">
            Terms & Service Learning Disclaimer
          </h1>
          <p className="text-xs text-charcoal-500">
            Academic Demonstration & Community Presentation Guidelines
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
            <p className="font-bold">Academic Service Learning Scope</p>
            <p className="leading-relaxed">
              {ORG_INFO.serviceLearningDisclaimer}
            </p>
          </div>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            1. Purpose of the Platform
          </h2>
          <p>
            This website has been constructed as part of an experiential service-learning academic curriculum to digitally structure, present, and showcase the ongoing grassroots charitable programs of Astha Shakti in Bengaluru, India.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            2. Intellectual Property & Brand Rights
          </h2>
          <p>
            The name &ldquo;Astha Shakti&rdquo;, the tagline &ldquo;Food is the Gateway to Good Health and Education&rdquo;, and official program identifiers are the property of the respective charitable trust.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            3. Verification of Information
          </h2>
          <p>
            While every effort has been made to adhere strictly to publicly authentic sources, public metrics and documents provided in editable placeholder states must be formally signed off by the trustees of Astha Shakti prior to formal public deployment.
          </p>

          <h2 className="font-serif font-bold text-base text-charcoal-900">
            4. Volunteer Participation
          </h2>
          <p>
            Submitting a volunteer application conveys interest in participating in community programs and does not constitute a contractual employment arrangement.
          </p>
        </div>
      </div>
    </div>
  );
}
