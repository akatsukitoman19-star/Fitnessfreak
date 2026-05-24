import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navMenuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Membership', id: 'membership' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navMenuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // safe offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navMenuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-pink-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-tr from-pink-500 to-purple-600 shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform duration-300 group-hover:scale-110">
              <Dumbbell className="h-5 w-5 text-white stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white uppercase leading-none">
                FITNESS <span className="text-pink-500 group-hover:glow-text-pink transition-all">FREAK</span>
              </span>
              <span className="font-sans text-[10px] tracking-[0.18em] text-purple-400 uppercase font-bold leading-none mt-1">
                Ladies Gym
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-pink-500'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {/* Active Indicator bar */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-linear-to-r from-pink-500 to-purple-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Call to action & booking trigger */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onJoinClick}
              className="glow-btn px-5 py-2.5 rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white font-medium text-xs uppercase tracking-widest cursor-pointer shadow-lg hover:brightness-110 transition-all font-display"
            >
              Book Free Class
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6 text-pink-500" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-neutral-950/98 backdrop-blur-2xl border-l border-pink-500/15 p-6 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-tr from-pink-500 to-purple-600">
              <Dumbbell className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="font-display font-semibold text-base text-white uppercase tracking-wider">
              FITNESS <span className="text-pink-500">FREAK</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-pink-500 focus:outline-none cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          {navMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium uppercase text-xs tracking-widest transition-all ${
                activeSection === item.id
                  ? 'bg-pink-500/10 text-pink-500 border-l-4 border-pink-500 pl-3'
                  : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-10 left-6 right-6">
          <button
            onClick={() => {
              setIsOpen(false);
              onJoinClick();
            }}
            className="w-full glow-btn px-6 py-4.5 rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-medium text-xs uppercase tracking-widest"
          >
            Book Free Class
          </button>
          
          <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-neutral-400">
            <PhoneCall className="h-4 w-4 text-pink-500" />
            <a href="tel:08341725523" className="hover:text-pink-400 transition-colors">
              08341725523
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
