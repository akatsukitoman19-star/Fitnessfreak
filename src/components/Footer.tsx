import React from 'react';
import { Dumbbell, Instagram, Linkedin, Facebook, Heart, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-pink-500/10 text-neutral-400">
      
      {/* Upper Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-5 text-left">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-pink-500 to-purple-600">
                <Dumbbell className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-display font-black text-lg text-white uppercase tracking-tight">
                FITNESS <span className="text-pink-500">FREAK</span>
              </span>
            </div>
            <p className="text-xs text-neutral-450 leading-relaxed font-light">
              Hyderabad’s finest women-only luxury wellness hub. Experience world-class body scaling, friendly sisterhood support, and targeted health results inside a 100% serene, safe, and modern environment.
            </p>
            <div className="flex items-center space-x-4.5">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">CONNECT:</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-550 hover:text-pink-500 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-550 hover:text-pink-500 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-550 hover:text-pink-500 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Menu Map
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'services', 'trainers', 'membership', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="hover:text-pink-400 uppercase tracking-widest font-mono text-[9.5px] transition-colors cursor-pointer"
                  >
                    ✦ {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs Menu */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Core Streams
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><span className="hover:text-purple-400 transition-colors cursor-pointer">✦ Strength and Resistance</span></li>
              <li><span className="hover:text-purple-400 transition-colors cursor-pointer">✦ Pilates & stretch align</span></li>
              <li><span className="hover:text-purple-400 transition-colors cursor-pointer">✦ Zumba & Cardio Rhythm</span></li>
              <li><span className="hover:text-purple-400 transition-colors cursor-pointer">✦ Aerobics group workouts</span></li>
              <li><span className="hover:text-purple-400 transition-colors cursor-pointer">✦ Pre/Postnatal Care Care</span></li>
            </ul>
          </div>

          {/* Col 4: Safety Guarantee */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Exclusive Policy
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="inline-block text-[9px] font-mono font-bold tracking-widest text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded uppercase">
                100% LADIES ONLY
              </span>
              <p className="text-[10px] text-neutral-450 leading-relaxed font-light">
                Secure access entry gates. Restricted entirely to female memberships and expert certified female trainers. No cameras or guest males allowed inside workout chambers.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Copy signature footer */}
      <div className="border-t border-white/5 bg-neutral-950 py-6 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[10px] text-neutral-500 font-mono">
            &copy; {currentYear} Fitness Freak Ladies Gym. All Rights Served.
          </p>
          <p className="text-[10px] text-neutral-500 flex items-center justify-center gap-1.5 font-mono">
            Designed for <Heart className="h-3 w-3 text-pink-500 fill-pink-500 animate-pulse" /> Banjara Hills Ladies Community.
          </p>
        </div>
      </div>

    </footer>
  );
}
