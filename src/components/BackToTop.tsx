import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrolled > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 flex items-center justify-center h-12 w-12 rounded-full bg-neutral-950 border border-pink-500/25 text-pink-500 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hover:bg-neutral-900 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      {/* Scroll indicator SVG circle border */}
      <svg className="absolute inset-0 h-full w-full -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="rgba(236, 72, 153, 0.15)"
          strokeWidth="2.5"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="url(#progress-gradient)"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={`${2.5 * Math.PI * 2 * 21 / 2.5}`}
          strokeDashoffset={`${(1 - scrollProgress / 100) * (2 * Math.PI * 21)}`}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      <ArrowUp className="h-5 w-5 text-pink-500 group-hover:text-pink-400 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
