import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Download,
  AlertCircle,
  Building,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { TRANSPARENCY_DOCUMENTS } from '@/lib/data';
import CommunityPhotoFeature from '@/components/CommunityPhotoFeature';

export const metadata = {
  title: 'Transparency & Governance | Astha Shakti',
  description: 'Review our governance framework, annual reports, trust deed placeholders, and compliance records.',
};

export default function TransparencyPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-forest-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
              Accountability & Trust
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Transparency & Reports
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              We uphold responsible governance, ethical fundraising standards, and transparent community stewardship for every volunteer hour and contribution.
            </p>
          </div>
        </div>
      </section>

      <CommunityPhotoFeature
        src="/images/community/img-20260921-wa0007.webp"
        alt="Certificate of appreciation received by Astha Shakti"
        caption="Recognition shared in the Astha Shakti photo archive."
      />

      {/* Trust & Governance Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-2">
            <Building className="w-6 h-6 text-saffron-600 mb-2" />
            <h3 className="font-serif font-bold text-base text-charcoal-900">Registered Trust</h3>
            <p className="text-xs text-charcoal-600">
              Established under public charitable trust regulations in Bengaluru, Karnataka.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-forest-700 mb-2" />
            <h3 className="font-serif font-bold text-base text-charcoal-900">Zero Commercial Margin</h3>
            <p className="text-xs text-charcoal-600">
              Direct beneficiary pass-through for meal distribution and educational supplies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-2">
            <FileText className="w-6 h-6 text-marigold-600 mb-2" />
            <h3 className="font-serif font-bold text-base text-charcoal-900">80G Compliance</h3>
            <p className="text-xs text-charcoal-600">
              Tax exemption certificates generated for eligible individual and corporate donors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-2">
            <Lock className="w-6 h-6 text-charcoal-700 mb-2" />
            <h3 className="font-serif font-bold text-base text-charcoal-900">Data Privacy</h3>
            <p className="text-xs text-charcoal-600">
              Strict safeguarding of volunteer and child beneficiary identities and records.
            </p>
          </div>

        </div>

        {/* Documents Directory */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-sm space-y-6">
          <div className="border-b border-cream-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">
              Organizational Governance Documents
            </h2>
            <p className="text-xs text-charcoal-600 mt-1">
              Public audit summaries, annual reports, and operational guidelines.
            </p>
          </div>

          <div className="divide-y divide-cream-200">
            {TRANSPARENCY_DOCUMENTS.map((doc, i) => (
              <div
                key={i}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-cream-100 text-charcoal-700">
                      {doc.category}
                    </span>
                    <span className="text-xs text-charcoal-500 font-medium">
                      {doc.date}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-charcoal-900">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-charcoal-600">
                    {doc.note}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-100 text-charcoal-600 text-xs font-semibold border border-cream-300">
                    <FileText className="w-3.5 h-3.5 text-saffron-600" />
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Service Learning Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Service Learning Project Notice</p>
              <p className="text-amber-800 leading-relaxed">
                As part of this academic initiative, actual signed PDF files and audits can be uploaded via the administrative portal. Official certificates must be verified with Astha Shakti leadership before commercial or public deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
