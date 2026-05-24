import React from 'react';
import { Target, Users, ShieldAlert, BadgeCheck, HeartHandshake, Smile } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldAlert className="h-6 w-6 text-pink-500" />,
      title: '100% Safe & Comfortable',
      description: 'An exclusive ladies-only sanctuary designed meticulously so you can workout with absolute peace of mind and freedom.',
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: 'Elite Female Trainers',
      description: 'Our certified, friendly coaches specialize in women’s body toning, pre/post-natal care, core conditioning, and weight management.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-pink-500" />,
      title: 'Confidence Building',
      description: 'More than burning calories; we nurture self-worth, positive mindset, and strong healthy habits that empower you inside and outside the gym.',
    },
    {
      icon: <Smile className="h-6 w-6 text-purple-400" />,
      title: 'Premium Wellness Culture',
      description: 'Celebrate your body, bond with like-minded ambitious women, and indulge in a premium community centered around clean, high-vitality living.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500 font-bold">
            WHO WE ARE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Our Mission: Empowering <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Your Everyday Strength
            </span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            At Fitness Freak Ladies Gym, we believe fitness is a life-long state of self-acceptance and power. We provide standard luxury amenities, customized exercise logs, and a vibrant all-female community.
          </p>
        </div>

        {/* Bento/Modern grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Detailed Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif italic text-2xl text-pink-100 font-medium leading-snug">
              "We provide a sacred space for women to redefine their health parameters on their own terms."
            </h3>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              Founded in Hyderabad, Banjara Hills, we noticed that general hybrid gym environments can often feel intimidating, overcrowded, or lacking in specialist guidance crafted with female physiology in mind.
            </p>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              We made a deliberate promise: zero distraction, premium luxury setups, hygienic lounge decks, specialized strength circles, and dedicated pilates reformer suites. We hold your health close and celebrate your progress daily.
            </p>

            {/* Checkmark benchmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-neutral-200">Exclusive Luxury All-Female Workouts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-neutral-200">Pre-Natal & Post-Natal Exercise Regimes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-neutral-200">Complimentary Health & Diet Evaluations</span>
              </div>
            </div>
          </div>

          {/* Highlights Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="glass-panel hover:glass-panel p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(236,72,153,0.1)] group relative overflow-hidden"
              >
                {/* Decorative Hover Pink Glow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-pink-500/10 group-hover:border-pink-500/25 transition-all">
                  {highlight.icon}
                </div>
                
                <h3 className="font-display font-bold text-base text-white mb-2 uppercase tracking-wide group-hover:text-pink-400 transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Floating Brand Philosophy Quote Block */}
        <div className="mt-16 p-8 rounded-3xl border border-pink-500/10 bg-linear-to-r from-neutral-900/50 via-pink-950/10 to-purple-950/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">
              Ready to feel powerful inside and out?
            </h4>
            <p className="text-xs text-neutral-400">
              Claim your first companion training pass for free. No credit card required.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('membership');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glow-btn px-6 py-3 rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            Claim Free Pass
          </button>
        </div>

      </div>
    </section>
  );
}
