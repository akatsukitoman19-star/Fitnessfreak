import React, { useState } from 'react';
import { 
  Dumbbell, 
  Activity, 
  Flame, 
  Trophy, 
  Shuffle, 
  Heart, 
  Sparkles,
  Smile,
  X,
  Compass
} from 'lucide-react';
import { Service } from '../types';

export default function Services() {
  const [activePromoService, setActivePromoService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: 'fit-center',
      title: 'Fitness Center',
      description: 'Fully equipped luxury resistance deck with modern cardio streams, optimized for women strength mechanics.',
      iconName: 'Dumbbell',
      tag: 'TONE & STRENGTH',
      benefits: [
        'Advanced bio-mechanically optimized ladies strength machinery',
        'Advanced curved treadmills and low-impact elliptical trainers',
        'Specialized high-density functional strength kettlebell racks',
        'Live tracking screens depicting your average active heart rates'
      ]
    },
    {
      id: 'aerobics',
      title: 'Aerobics',
      description: 'Energetic group exercise tracks blending cardiac agility grids with rhythmic weight burning speeds.',
      iconName: 'Activity',
      tag: 'CARDIO PUMP',
      benefits: [
        'Choreographed high-energy rhythmic floor workouts',
        'Improves cardiovascular performance and total lung volume',
        'Friendly supportive community vibes with female workout music',
        'Burns up to 600 calories per session in a fun interactive model'
      ]
    },
    {
      id: 'dance-fitness',
      title: 'Dance Fitness Classes',
      description: 'Zumba, rhythmic hip-hop rhythms, and high-energy aerobics paired to pumping playlists to shed weight in style.',
      iconName: 'Flame',
      tag: 'RHYTHM BURN',
      benefits: [
        'Certified Zumba and cardio dance fitness female instructors',
        'Perfect combination of body toning, core routines and high cardio',
        'Fun, atmospheric, glowing strobe-light evening workouts',
        'Zero judgment environment designed strictly for letting go'
      ]
    },
    {
      id: 'adult-sports',
      title: 'Adult Sports',
      description: 'Functional sports drills, agility court patterns, and speed circuits designed to upgrade athletic endurance.',
      iconName: 'Trophy',
      tag: 'ATHLETICS',
      benefits: [
        'Indoor volleyball and physical speed agility obstacle courts',
        'Cross-training drills, shuttle runs, and group relays',
        'Improves split-second reflexes and core stabilizer power',
        'Weekly intra-gym ladies fun athletic championships and rewards'
      ]
    },
    {
      id: 'pilates',
      title: 'Pilates Circle',
      description: 'Core-focused alignment sessions, mat pilates, and ring workouts for flexible posture and slim lines.',
      iconName: 'Compass',
      tag: 'FLEXIBILITY',
      benefits: [
        'Dedicated reformer pilates and stretching accessories range',
        'Targets deep internal core muscles, pelvic floor, and alignment',
        'Improves physical posture, spine health, and flexibility',
        'Highly recommended for muscle lengthening and injury recovery'
      ]
    },
    {
      id: 'strength',
      title: 'Strength Workouts',
      description: 'Tailored resistance and free-weight sessions designed to build lean skeletal muscle, and boost slow metabolism.',
      iconName: 'Dumbbell',
      tag: 'BODY SCULPTING',
      benefits: [
        'Perfect deadlift, barbell squat, and overhead press coaching',
        'Combats bone-density issues and builds durable lean mass',
        'Customized weight progressive curves optimized by expert trainers',
        'High-five support culture for heavy and moderate lifts alike'
      ]
    }
  ];

  // Helper to render correct icon based on name
  const renderIcon = (name: string) => {
    const classStyle = "h-7 w-7 text-pink-500 stroke-[2] transition-transform duration-300 group-hover:scale-110";
    switch(name) {
      case 'Dumbbell': return <Dumbbell className={classStyle} />;
      case 'Activity': return <Activity className={classStyle} />;
      case 'Flame': return <Flame className={classStyle} />;
      case 'Trophy': return <Trophy className={classStyle} />;
      case 'Compass': return <Compass className={classStyle} />;
      default: return <Sparkles className={classStyle} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900 border-y border-pink-500/5 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 font-bold">
            PREMIUM CLASSES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Designed for <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Every Woman</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            From high-energy cardio dances that shed calories with joy, to quiet, posture-focused core pilates alignments – find your custom routine below.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel hover:bg-neutral-900/60 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)] border border-pink-500/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-pink-500/[0.02] rounded-full filter blur-xl group-hover:bg-pink-500/[0.07] transition-all duration-300"></div>
              
              {/* Card visual elements */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full uppercase">
                    {service.tag}
                  </span>
                  <div className="text-pink-500/30 font-display font-bold text-xl group-hover:text-pink-500/60 transition-colors">
                    ✦
                  </div>
                </div>

                <div className="mb-5 inline-flex p-3 rounded-2xl bg-neutral-900 border border-white/5 shadow-inner group-hover:border-pink-500/15 transition-colors">
                  {renderIcon(service.iconName)}
                </div>

                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 uppercase tracking-wide group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Interaction Details trigger */}
              <button
                onClick={() => setActivePromoService(service)}
                className="w-full text-center py-3 bg-white/5 hover:bg-pink-500/10 border border-white/5 hover:border-pink-500/20 text-neutral-200 hover:text-white rounded-2xl text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer font-display"
              >
                View Sessions & Schedule
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Overlay Modal (Glassmorphism Detail Drawer) */}
        {activePromoService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden animate-scaleUp">
              {/* Glow spots */}
              <div className="absolute -top-12 -left-12 h-24 w-24 bg-pink-500/20 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-12 -right-12 h-24 w-24 bg-purple-500/20 blur-2xl rounded-full"></div>

              {/* Close Button */}
              <button
                onClick={() => setActivePromoService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="font-mono text-[9px] font-bold tracking-widest text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full uppercase inline-block mb-3">
                    {activePromoService.tag}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider">
                    {activePromoService.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {activePromoService.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <h4 className="font-display font-bold text-xs uppercase text-neutral-200 tracking-wider mb-3">
                    Key Highlights & Features:
                  </h4>
                  <ul className="space-y-2.5">
                    {activePromoService.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs text-neutral-400 leading-normal">
                        <span className="text-pink-500 mr-2 shrink-0">✦</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 pt-5 flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">SCHEDULES</p>
                    <p className="text-xs font-semibold text-white">Daily batches (Morning & Evening)</p>
                  </div>
                  <button
                    onClick={() => {
                      setActivePromoService(null);
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="glow-btn px-5 py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold text-[10px] uppercase tracking-widest"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
