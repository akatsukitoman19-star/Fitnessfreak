import React, { useEffect, useState } from 'react';
import { Dumbbell, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill progress bar slowly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Fade out a bit after progress fills
    const timeout = setTimeout(() => {
      setFade(true);
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimeout);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 transition-all duration-700 ease-in-out ${
        fade ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow"></div>

      <div className="relative flex flex-col items-center text-center px-4 max-w-md">
        {/* Animated Brand Logo Icon */}
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-tr from-pink-500 to-purple-600 shadow-[0_0_40px_rgba(236,72,153,0.3)] animate-float">
          <Dumbbell className="h-12 w-12 text-white stroke-[2]" />
          <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-pink-600 shadow-md">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="font-display font-bold text-3xl tracking-tight text-white uppercase sm:text-4xl mb-2">
          FITNESS <span className="text-pink-500 glow-text-pink">FREAK</span>
        </h1>
        <p className="font-sans text-xs tracking-[0.25em] text-purple-400 uppercase font-semibold mb-6">
          Ladies Gym & Wellness
        </p>

        {/* Motivating Tagline */}
        <p className="font-serif italic text-lg text-neutral-300 font-medium mb-12">
          “Strong Women. Stronger Confidence.”
        </p>

        {/* Progress Container */}
        <div className="w-64 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800/50 p-[2px]">
          <div
            className="h-full bg-linear-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(236,72,153,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading details */}
        <div className="mt-4 flex items-center justify-between w-64 text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
          <span>SECURE SPACE</span>
          <span>{Math.round(progress)}%</span>
          <span>ELITE ONLY</span>
        </div>
      </div>
    </div>
  );
}
