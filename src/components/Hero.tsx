import React, { useEffect, useState } from 'react';
import { ShieldCheck, Trophy, Sparkles, Flame, Play } from 'lucide-react';

const heroImage = "/src/assets/images/ladies_gym_hero_1779632986478.png";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const [stats, setStats] = useState({
    members: 0,
    trainers: 0,
    classes: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    // Dynamic rolling counts for stats on load
    const duration = 1500; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setStats({
        members: Math.min(Math.round((1500 / steps) * stepCount), 1500),
        trainers: Math.min(Math.round((15 / steps) * stepCount), 15),
        classes: Math.min(Math.round((25 / steps) * stepCount), 25),
        satisfaction: Math.min(Math.round((100 / steps) * stepCount), 100),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Linear Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Ladies Gym Background"
          className="w-full h-full object-cover scale-105 animate-pulse-slow brightness-40 saturate-[1.10]"
          referrerPolicy="no-referrer"
        />
        {/* Soft Pink-To-Purple Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/75 to-purple-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950"></div>
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-pink-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/15 blur-[120px] rounded-full"></div>
      </div>

      {/* Decorative Badge Overlay */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:transform-none z-10 hidden lg:block animate-float">
        <div className="glass-panel rounded-2xl p-4.5 flex items-center space-x-3 shadow-lg max-w-xs">
          <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
            <ShieldCheck className="h-5 w-5 text-pink-400" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">100% Secure Space</h4>
            <p className="text-[10px] text-neutral-400 mt-0.5">Exclusive all-female fitness club</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Branded pill tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-widest mx-auto lg:mx-0">
              <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
              <span>Premium Luxury Fitness Studio</span>
            </div>

            {/* Giant Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight">
              Strong Women.<br />
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent glow-text-pink">
                Stronger Confidence.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto lg:mx-0 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
              Welcome to Hyderabad's premier women's luxury fitness sanctuary. Reclaim your strength, tone your body, and ignite supreme confidence in a secure, high-vibe, modern atmosphere curated exclusively for ladies.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onJoinClick}
                className="w-full sm:w-auto glow-btn px-8 py-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs uppercase tracking-widest cursor-pointer hover:scale-105 active:scale-95 transition-all font-display"
              >
                Join Now • Begin Journey
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs uppercase tracking-widest cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Explore Classes
              </button>
            </div>

            {/* Minimal highlights list */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-pink-500" /> Professional Female Coaches
              </span>
              <span className="flex items-center gap-1.5">
                <Flame className="h-4 w-4 text-purple-400" /> Premium Wellness Lounge
              </span>
            </div>

          </div>

          {/* Right Hero Frame Column (Interactive Stats Block) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm glass-panel rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-600/5 pointer-events-none"></div>
              
              {/* Glow border ring effect */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl pointer-events-none"></div>
              
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-6 text-center border-b border-white/5 pb-4">
                Club Performance Stats
              </h3>

              {/* Animated Stats Columns */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Stat 1 */}
                <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 text-center">
                  <div className="font-display font-black text-3xl text-pink-500 tracking-tight">
                    {stats.members}+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Happy Clients
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 text-center">
                  <div className="font-display font-black text-3xl text-purple-400 tracking-tight">
                    {stats.trainers}+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Female Trainers
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 text-center">
                  <div className="font-display font-black text-3xl text-pink-500 tracking-tight">
                    {stats.classes}+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Weekly Programs
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 text-center">
                  <div className="font-display font-black text-3xl text-purple-400 tracking-tight">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Safety & Comfort
                  </div>
                </div>

              </div>

              {/* Secure reassurance badge */}
              <div className="mt-6 p-3.5 rounded-xl bg-pink-500/5 border border-pink-500/10 flex items-center space-x-3">
                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <p className="text-[11px] text-neutral-300 leading-normal">
                  <strong className="text-white">Strictly Ladies-Only:</strong> Our facility, entry gates, locker bay, and training decks are restricted to female members and personnel.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
