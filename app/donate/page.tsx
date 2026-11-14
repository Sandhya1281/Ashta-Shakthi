"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  HelpCircle,
  FileText,
  CreditCard,
  Building,
  Info,
  ChevronDown
} from 'lucide-react';
import { StorageManager } from '@/lib/storage';
import { DonationRecord } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import ReceiptModal from '@/components/ReceiptModal';
import confetti from 'canvas-confetti';

const CAUSES = [
  'Nutritious Food (Nutri-Ed)',
  'Education & Tutoring',
  'Learning Materials & Kits',
  'Skill Development for Youth',
  'Support for Differently-Abled Children',
  'Community Relief Initiatives'
];

const PRESETS = [500, 1200, 2500, 5000];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(1200);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [purpose, setPurpose] = useState<string>(CAUSES[0]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Bengaluru',
    pan: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedDonation, setCompletedDonation] = useState<DonationRecord | null>(null);

  const handleAmountPreset = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(Number(val));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!amount || amount < 100) {
      errs.amount = 'Minimum contribution is ₹100';
    }
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required for receipt delivery';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);

    setTimeout(() => {
      const record = StorageManager.addDonation({
        donationType,
        amount: Number(amount),
        purpose,
        donorName: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        pan: formData.pan.toUpperCase(),
        message: formData.message,
        paymentStatus: 'COMPLETED_DEMO'
      });

      setIsProcessing(false);
      setCompletedDonation(record);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 1000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" />
              Nourish & Educate a Child
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-950 tracking-tight">
              Your Support Can Help Create Opportunity
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Every single rupee directly sustains wholesome daily meals, remedial schooling kits, and specialized care for underprivileged children in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Donation Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-sm space-y-8">
            
            <form onSubmit={handleSimulatePayment} className="space-y-6">
              
              {/* Frequency Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                  1. Choose Contribution Type
                </label>
                <div className="grid grid-cols-2 gap-2 bg-cream-100 p-1.5 rounded-2xl border border-cream-200">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      donationType === 'one-time'
                        ? 'bg-white text-saffron-800 shadow-sm'
                        : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    One-Time Support
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      donationType === 'monthly'
                        ? 'bg-white text-saffron-800 shadow-sm'
                        : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    <span>Monthly Supporter</span>
                    <Sparkles className="w-3 h-3 text-saffron-600" />
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                  2. Select Amount (INR ₹)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {PRESETS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => handleAmountPreset(p)}
                      className={`p-3 rounded-2xl text-xs font-bold transition-all border ${
                        amount === p && !customAmount
                          ? 'bg-saffron-600 text-white border-saffron-600 shadow-md shadow-saffron-600/20 scale-102'
                          : 'bg-cream-50 text-charcoal-800 border-cream-200 hover:bg-cream-100'
                      }`}
                    >
                      ₹{p}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-serif font-bold text-charcoal-500 text-sm">
                    ₹
                  </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount (e.g. 3000)"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                  />
                </div>
                {errors.amount && <p className="text-[11px] text-red-600 mt-1">{errors.amount}</p>}
              </div>

              {/* Cause Allocation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                  3. Direct Contribution Toward
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                >
                  {CAUSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Donor Details */}
              <div className="space-y-4 pt-2 border-t border-cream-200">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700">
                  4. Donor Information (For 80G Tax Receipt)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name *"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.name ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.email ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number *"
                      className={`w-full p-3 rounded-xl border text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 ${
                        errors.phone ? 'border-red-500 ring-red-200' : 'border-cream-300 focus:ring-saffron-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City (e.g. Bengaluru)"
                      className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={formData.pan}
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                    placeholder="PAN Card (Optional for 80G Tax Exemption e.g. ABCDE1234F)"
                    className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 uppercase font-mono focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message / Blessing for the children (Optional)"
                    className="w-full p-3 rounded-xl border border-cream-300 text-xs bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                  />
                </div>
              </div>

              {/* Payment Architecture & Gateway Sandbox notice */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  Razorpay Payment Integration Ready
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Configured with secure environment variable hooks (<code>NEXT_PUBLIC_RAZORPAY_KEY_ID</code>). Submitting in this demo mode simulates a successful transaction and immediately generates a compliant printable 80G tax receipt!
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-700 hover:to-saffron-600 disabled:opacity-50 text-white font-bold text-sm sm:text-base shadow-lg shadow-saffron-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                {isProcessing ? 'Processing Secure Donation...' : `CONFIRM DONATION OF ${formatCurrency(amount)}`}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-charcoal-500 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-forest-700" /> 256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3 text-saffron-700" /> Instant 80G Receipt
                </span>
              </div>

            </form>

          </div>

          {/* Right Trust & FAQ Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Impact summary card */}
            <div className="bg-forest-900 text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest-300">
                What Your Donation Does
              </span>
              <h3 className="font-serif font-bold text-xl text-white">
                Tangible Impact Breakdown
              </h3>
              
              <ul className="space-y-3 text-xs text-forest-100">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>₹500:</strong> Provides 25 wholesome, protein-rich Nutri-Ed hot meals for a learner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>₹1,200:</strong> Covers 1 month of daily nutrition plus a complete school bag & learning kit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>₹2,500:</strong> Sponsors specialized adaptive motor and sensory materials for a special-needs child.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>₹5,000:</strong> Sponsors wholesome breakfast feeds and tutoring supplies for a cohort of 10 students.</span>
                </li>
              </ul>
            </div>

            {/* Tax Exemption Note */}
            <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-2 text-xs">
              <h4 className="font-serif font-bold text-sm text-charcoal-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-saffron-600" /> Tax Exemption (Section 80G)
              </h4>
              <p className="text-charcoal-600 leading-relaxed">
                Contributions made to verified charitable trusts in India are eligible for tax deduction under Section 80G of the Income Tax Act. Please provide your PAN number to receive an 80G tax certificate.
              </p>
            </div>

            {/* Donation FAQ */}
            <div className="bg-white p-6 rounded-3xl border border-cream-300 shadow-sm space-y-3 text-xs">
              <h4 className="font-serif font-bold text-sm text-charcoal-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-forest-700" /> Frequently Asked Questions
              </h4>
              <div className="space-y-2.5 text-charcoal-600">
                <div>
                  <p className="font-bold text-charcoal-800">Can I donate via bank transfer (NEFT/IMPS)?</p>
                  <p className="mt-0.5">Yes, official trust bank details are available on request via our Bengaluru contact office.</p>
                </div>
                <div>
                  <p className="font-bold text-charcoal-800">How soon do I receive my tax receipt?</p>
                  <p className="mt-0.5">Instant printable receipts are generated on screen and archived in the transaction log.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Printable Receipt Modal Triggered after simulation */}
      {completedDonation && (
        <ReceiptModal
          donation={completedDonation}
          onClose={() => setCompletedDonation(null)}
        />
      )}

    </div>
  );
}
