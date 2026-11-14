"use client";
import React from 'react';
import { DonationRecord } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ORG_INFO } from '@/lib/data';
import { X, Printer, Download, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ReceiptModalProps {
  donation: DonationRecord;
  onClose: () => void;
}

export default function ReceiptModal({ donation, onClose }: ReceiptModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-cream-300 relative my-8">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-cream-200 no-print">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 font-bold text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
              Tax Exemption Receipt Generated
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-cream-100 text-charcoal-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div id="printable-receipt" className="pt-6 space-y-6">
          
          {/* Organization Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-charcoal-900">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-lg bg-saffron-600 flex items-center justify-center text-white font-bold">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <h2 className="text-xl font-serif font-black text-charcoal-950 tracking-tight">
                  {ORG_INFO.legalName.toUpperCase()}
                </h2>
              </div>
              <p className="text-xs text-charcoal-600 font-medium">
                Regd. Trust • Bengaluru, Karnataka
              </p>
              <p className="text-[11px] text-charcoal-500 leading-snug mt-1">
                {ORG_INFO.address.line1}, {ORG_INFO.address.line2},<br />
                {ORG_INFO.address.city}, {ORG_INFO.address.state} {ORG_INFO.address.pincode}
              </p>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1 bg-cream-50 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-cream-200 sm:border-none">
              <div className="font-mono text-xs font-bold text-saffron-800">
                Receipt #{donation.receiptNumber}
              </div>
              <div className="text-charcoal-500">
                Date: <strong>{formatDate(donation.createdAt)}</strong>
              </div>
              <div className="text-charcoal-500">
                Txn ID: <span className="font-mono">{donation.transactionId}</span>
              </div>
              <div className="text-[10px] text-forest-700 font-medium bg-forest-50 px-2 py-0.5 rounded inline-block mt-1">
                Section 80G Compliant (Simulated)
              </div>
            </div>
          </div>

          {/* Donor & Contribution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-cream-50 p-4 rounded-2xl border border-cream-200 text-xs">
            <div>
              <span className="text-charcoal-500 uppercase tracking-wider text-[10px] font-bold block mb-1">
                Donor Information
              </span>
              <p className="font-bold text-sm text-charcoal-900">{donation.donorName}</p>
              <p className="text-charcoal-600">{donation.email}</p>
              <p className="text-charcoal-600">{donation.phone}</p>
              {donation.pan && (
                <p className="text-charcoal-700 font-medium mt-1">
                  PAN: <span className="font-mono font-bold">{donation.pan}</span>
                </p>
              )}
              <p className="text-charcoal-500 text-[11px] mt-0.5">{donation.city}</p>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-cream-300 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-charcoal-500 uppercase tracking-wider text-[10px] font-bold block mb-1">
                Donation Details
              </span>
              <div className="text-2xl font-serif font-black text-saffron-700 mb-1">
                {formatCurrency(donation.amount)}
              </div>
              <p className="text-charcoal-700 font-medium">
                Allocated Cause: <strong>{donation.purpose}</strong>
              </p>
              <p className="text-charcoal-500 capitalize">
                Frequency: <strong>{donation.donationType}</strong>
              </p>
              <p className="text-[11px] text-forest-700 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Payment Status: Successful (Demo Verified)
              </p>
            </div>
          </div>

          {/* Purpose & Acknowledgment */}
          <div className="text-xs text-charcoal-600 space-y-2 leading-relaxed bg-white p-3 rounded-xl border border-cream-200">
            <p>
              Received with heartfelt gratitude from <strong>{donation.donorName}</strong> the sum of{' '}
              <strong>{formatCurrency(donation.amount)}</strong> toward supporting underprivileged children through the{' '}
              <strong>{donation.purpose}</strong> initiative of Astha Shakti.
            </p>
            <p className="text-[11px] text-charcoal-500 italic">
              “Food is the Gateway to Good Health and Education”
            </p>
          </div>

          {/* Legal / Service Learning Note & Signatory */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cream-300 text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-[10px] text-charcoal-500 max-w-sm">
                * Note: Issued as part of the Astha Shakti Service Learning Project demonstration system. Official 80G tax exemption certificates are issued from verified trust records.
              </p>
            </div>
            <div className="text-center shrink-0">
              <div className="font-serif italic text-charcoal-800 text-sm font-bold border-b border-charcoal-400 pb-1 px-4">
                T.G. Aruna
              </div>
              <span className="text-[10px] text-charcoal-500 font-medium uppercase tracking-wider block mt-1">
                Founder / Authorized Signatory
              </span>
            </div>
          </div>

        </div>

        {/* Footer Actions (Hidden on print) */}
        <div className="pt-6 border-t border-cream-200 flex justify-end gap-3 no-print">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-semibold text-xs transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
