import React, { useState } from 'react';
import { Sparkles, Eye, X, Dumbbell, Compass, Flame, ArrowLeft, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const categories = ['ALL', 'STUDIO', 'STRENGTH', 'YOGA', 'CARDIO'];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop', // Group exercise
      caption: 'Luxury Dance Fitness Batch Class',
      category: 'CARDIO',
    },
    {
      id: 'g2',
      url: 'https://images.pexels.com/photos/4944006/pexels-photo-4944006.jpeg?auto=compress&cs=tinysrgb&w=600', // Woman working out
      caption: 'Bespoke Weight Training Area',
      category: 'STRENGTH',
    },
    {
      id: 'g3',
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop', // Yoga woman
      caption: 'Quiet Morning Yoga & Breathwork Alignment Studio',
      category: 'YOGA',
    },
    {
      id: 'g4',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop', // Stretching
      caption: 'Dedicated Reformer Pilates & Stretching bays',
      category: 'YOGA',
    },
    {
      id: 'g5',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', // Premium Gym
      caption: 'Main Resistance and Strength Circuits Deck',
      category: 'STUDIO',
    },
    {
      id: 'g6',
      url: 'https://images.pexels.com/photos/29825226/pexels-photo-29825226.jpeg?auto=compress&cs=tinysrgb&w=600', // Gym front door/lounge
      caption: 'Hygienic All-Female Wellness Lounge & Juice Bay',
      category: 'STUDIO',
    },
    {
      id: 'g7',
      url: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop', // Dumbbells
      caption: 'Ergonomic dumbbells for tone exercises',
      category: 'STRENGTH',
    },
    {
      id: 'g8',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop', // Abs / core pilates
      caption: 'Group High-Intensity Abs Conditioning',
      category: 'CARDIO',
    }
  ];

  const filteredItems = activeTab === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (idx: number) => {
    // Need to find index of item in filteredItems to navigate correctly inside filtered subset
    setSelectedImageIdx(idx);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    setSelectedImageIdx((selectedImageIdx + 1) % filteredItems.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    setSelectedImageIdx((selectedImageIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-neutral-900 border-y border-pink-500/5 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 font-bold">
            VISUAL CHRONICLES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Our Studio <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">In Pixels</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Take a virtual tour of our high-contrast, premium, hygienic training spots, pilates circles, energetic aerobics class chambers, and luxury social lounge.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setSelectedImageIdx(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest cursor-pointer transition-all border ${
                activeTab === cat
                  ? 'bg-linear-to-r from-pink-500 to-purple-600 border-transparent text-white shadow-md'
                  : 'bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="glass-panel text-left p-3 rounded-2xl group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(236,72,153,0.1)] relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-950">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-pink-500 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg text-white">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>

                {/* Category small indicator tag */}
                <span className="absolute top-2.5 left-2.5 text-[8px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md px-2 py-1 rounded text-pink-400">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="pt-3 px-1">
                <p className="text-xs text-white uppercase font-bold tracking-wider font-display line-clamp-1">
                  {item.caption}
                </p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono mt-0.5">
                  Banjara Hills Center
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal overlay view */}
        {selectedImageIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImageIdx(null)}
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setSelectedImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white cursor-pointer hover:bg-neutral-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Lightbox Frame */}
            <div className="relative max-w-4xl w-full flex flex-col items-center justify-center transition-all">
              
              {/* Next/Previous triggers */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-pink-600/80 border border-white/10 text-white cursor-pointer transition-colors"
                title="Previous image"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-pink-600/80 border border-white/10 text-white cursor-pointer transition-colors"
                title="Next image"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Lightbox Image */}
              <div
                className="w-full aspect-16/10 rounded-2xl overflow-hidden shadow-2xl max-h-[70vh] bg-neutral-900 flex items-center justify-center border border-white/5"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImageIdx].url}
                  alt={filteredItems[selectedImageIdx].caption}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox caption banner at bottom */}
              <div
                className="mt-6 text-center max-w-xl space-y-2 px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-mono text-[9px] font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full uppercase">
                  {filteredItems[selectedImageIdx].category}
                </span>
                <p className="text-sm text-neutral-200 mt-1 uppercase font-bold tracking-wider font-display">
                  {filteredItems[selectedImageIdx].caption}
                </p>
                <p className="text-xs text-neutral-500">
                  Slide {selectedImageIdx + 1} of {filteredItems.length}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
