import React, { useState } from 'react';
import { BadgeCheck, Sparkles, X, Gift, ShieldAlert } from 'lucide-react';
import { MembershipPlan } from '../types';

interface MembershipProps {
  onPlanSelected: (planName: string) => void;
}

export default function Membership({ onPlanSelected }: MembershipProps) {
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<MembershipPlan | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', timeSlot: 'Morning (6:00 AM - 10:00 AM)' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const plans: MembershipPlan[] = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: '₹1,999',
      period: 'Monthly',
      tagline: 'Ideal for getting started with standard cardio & strength coaching.',
      features: [
        'Full ladies-only fitness center entry',
        'Standard resistance & cardio deck access',
        'Locker room, dry shower, & changing bays',
        'Initial physical health evaluation trial',
        'Access to standard community events',
        '1 Companion Free weekend pass/month',
      ],
      isPopular: false,
      buttonText: 'Get Started Today',
      colorTheme: 'starter',
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '₹3,999',
      period: 'Monthly',
      tagline: 'Our highly recommended program including group classes and training.',
      features: [
        'Everything in our Starter Plan',
        'UNLIMITED Aerobics & Dance Fitness slots',
        'UNLIMITED Pilates & stretch circle sessions',
        '2 One-on-One personal fitness coach sessions',
        'Sustained body impedance fat audits',
        'Monthly customized diet plans from nutritionist',
        'Complimentary hydration drinks & clean towels',
      ],
      isPopular: true,
      buttonText: 'Claim Premium Access',
      colorTheme: 'premium',
    },
    {
      id: 'elite',
      name: 'Elite VIP Plan',
      price: '₹6,999',
      period: 'Monthly',
      tagline: 'The ultimate bespoke wellness care for our highest level achievers.',
      features: [
        'Everything in our Premium Plan',
        'Dedicated personal trainer assigned 5 days/week',
        'Bespoke progressive fitness tracker application',
        'Priority booking for reformer pilates machines',
        'Weekly premium therapeutic spa & massage entries',
        'Bespoke pre/postnatal and core-healing options',
        'Companion Free access for guests anytime',
      ],
      isPopular: false,
      buttonText: 'Go Elite Luxury',
      colorTheme: 'elite',
    },
  ];

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setSelectedPlanDetails(null);
      setFormData({ name: '', phone: '', timeSlot: 'Morning (6:00 AM - 10:00 AM)' });
      if (selectedPlanDetails) {
        onPlanSelected(selectedPlanDetails.name);
      }
    }, 2500);
  };

  return (
    <section id="membership" className="py-24 bg-neutral-900 border-t border-pink-500/5 relative overflow-hidden">
      {/* Glow Rings */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/[0.03] blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/[0.04] blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 font-bold">
            MEMBERSHIPS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Select Your <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Luxury Level</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Simple, honest pricing designed to accommodate your busy lifestyle. Switch or freeze your options at any point with zero transaction charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-neutral-950 border-2 border-pink-500 shadow-[0_0_35px_rgba(236,72,153,0.2)] md:-translate-y-4 scale-102 z-10 hover:shadow-[0_0_45px_rgba(236,72,153,0.35)]'
                  : 'glass-panel border border-white/5 hover:border-pink-500/15 shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Popular glow badge */}
              {plan.isPopular && (
                <div className="absolute -top-4.5 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-pink-500 to-purple-600 text-white text-[10px] uppercase font-bold tracking-widest px-4.5 py-1.5 rounded-full shadow-[0_4px_10px_rgba(236,72,153,0.3)] flex items-center space-x-1">
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  <span>Most Popular Program</span>
                </div>
              )}

              {/* Header Info */}
              <div className="space-y-4">
                <div className="text-left">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 min-h-[32px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline space-x-1 py-4 border-y border-white/5">
                  <span className="font-display font-black text-4xl text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Benefits List */}
                <div className="space-y-3.5 pt-4">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold">
                    What's Included:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-neutral-300 leading-normal">
                        <BadgeCheck className="h-4.5 w-4.5 text-pink-500 shrink-0 mr-2.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => setSelectedPlanDetails(plan)}
                  className={`w-full py-4.5 rounded-2xl text-xs uppercase font-bold tracking-widest transition-all cursor-pointer font-display ${
                    plan.isPopular
                      ? 'glow-btn bg-linear-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-white/5 hover:border-pink-500/20'
                  }`}
                >
                  {plan.buttonText}
                </button>
                <p className="text-[10px] font-mono text-center text-neutral-500 uppercase tracking-wider mt-3">
                  Cancel or pause anytime • No signup fees
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Booking Form for selected plan */}
        {selectedPlanDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-md glass-panel rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden animate-scaleUp">
              
              {/* Glow blobs */}
              <div className="absolute -top-12 -right-12 h-24 w-24 bg-pink-500/25 blur-2xl rounded-full"></div>
              
              <button
                onClick={() => setSelectedPlanDetails(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Form content */}
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex p-3 rounded-2xl bg-pink-500/10 text-pink-500 border border-pink-500/20">
                    <Gift className="h-6 w-6 animate-pulse" />
                  </div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                    Book Trial Pass
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5">
                    Secure your 100% complimentary trial pass for the <strong className="text-white">{selectedPlanDetails.name}</strong>. Our staff will coordinate your onboarding.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="p-6 bg-pink-500/10 border border-pink-500/20 rounded-2xl text-center space-y-3 animate-pulse">
                    <h4 className="font-display font-bold text-sm text-pink-400 uppercase tracking-widest">
                      Reservation Locked!
                    </h4>
                    <p className="text-xs text-neutral-300 leading-normal">
                      Excellent! We have mapped a free day pass to your phone number. One of our ladies' relationship hosts will message you on WhatsApp shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSub} className="space-y-4.5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4.5 py-3.5 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-sm placeholder-neutral-500 text-white focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210 (10 digits)"
                        className="w-full px-4.5 py-3.5 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-sm placeholder-neutral-500 text-white focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Preferred Batch Time
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4.5 py-3.5 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-sm text-neutral-300 focus:outline-none transition-all"
                      >
                        <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                        <option value="Midnoon Ladies Slot (11:00 AM - 3:00 PM)">Midnoon Ladies Slot (11:00 AM - 3:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:30 PM)">Evening (4:00 PM - 8:30 PM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full glow-btn py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl mt-3"
                    >
                      Lock Free Trial Spot
                    </button>
                    
                    <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-white/5 text-[10px] text-neutral-400">
                      <ShieldAlert className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>By clicking above, you claim a free 1-day pass. Valid for ladies residing in Hyderabad, Telangana.</span>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
