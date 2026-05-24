import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonialsData: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Rithika Reddy',
      role: 'Shed 12 Kgs • Corporate Lawyer',
      comment: 'Fitness Freak completely changed my perspective on lifting weights! Being in an exclusive women-only space made me feel so secure and confident. I was able to safely decrease my body weight by 12 kgs while gaining incredible muscle density under Ananya\'s direct strength guidance!',
      rating: 5,
      avatar: 'RR',
      tag: 'STRENGTH TRANSFORMATION',
    },
    {
      id: 'test-2',
      name: 'Dr. Sameera Khan',
      role: 'Postnatal Wellness • Dermatologist',
      comment: 'Following my pregnancy, I had severe lower back pain and joint exhaustion. Sofia\'s customized postnatal pilates routines and stretching circles were a lifesaver. Within 4 months, my physical core stability has returned to normal and I feel more energized than ever before!',
      rating: 5,
      avatar: 'SK',
      tag: 'POSTNATAL CARE',
    },
    {
      id: 'test-3',
      name: 'Neha Deshmukh',
      role: 'Cardio Core • Software Engineer',
      comment: 'The Zumba and Aerobic Dance sessions here are absolute high-energy therapy after long hours of sitting in front of code. The evening strobe-light setting and electric music playlists make working out feel like a fun weekend party. It is easily the best investment I make in myself!',
      rating: 5,
      avatar: 'ND',
      tag: 'ZUMBA RHYTHMS',
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Glow lines */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500 font-bold">
            SUCCESS CHRONICLES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Loved By <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Our Champions</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Read inspiring feedback from real Hyderabad women who achieved incredible weight control, body toning, and newfound confidence.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="glass-panel p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(236,72,153,0.08)] flex flex-col justify-between group relative"
            >
              {/* Giant quote watermark */}
              <div className="absolute top-4 right-6 text-pink-500/10 group-hover:text-pink-500/20 transition-colors pointer-events-none">
                <Quote className="h-14 w-14 rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Tag */}
                <span className="font-mono text-[9px] font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full uppercase inline-block">
                  {test.tag}
                </span>

                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink-500 text-pink-500 shrink-0" />
                  ))}
                </div>

                {/* Comment body */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light italic">
                  “{test.comment}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-white/5">
                {/* Rounded Initial Avatar */}
                <div className="h-11 w-11 rounded-full bg-linear-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-display font-black text-sm text-white shadow-md">
                  {test.avatar}
                </div>
                
                {/* Name & Role */}
                <div className="text-left space-y-0.5">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-medium font-sans">
                    {test.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small Trust Banner */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center border-t border-white/5 pt-12 text-neutral-500">
          <div className="text-center">
            <p className="font-display font-black text-2xl text-white">4.9/5 ★</p>
            <p className="text-[10px] font-mono tracking-wider uppercase mt-1">Google Reviews rating</p>
          </div>
          <div className="text-center">
            <p className="font-display font-black text-2xl text-white">2,400+</p>
            <p className="text-[10px] font-mono tracking-wider uppercase mt-1">Active Women Members</p>
          </div>
          <div className="text-center">
            <p className="font-display font-black text-2xl text-white">100%</p>
            <p className="text-[10px] font-mono tracking-wider uppercase mt-1">Exclusive Ladies Policy</p>
          </div>
        </div>

      </div>
    </section>
  );
}
