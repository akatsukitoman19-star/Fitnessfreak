import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { Sparkles, Calendar, Heart, ShieldAlert } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth entry transitions on scroll
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 80) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial check in case elements are already in view
    setTimeout(handleScrollReveal, 2200);

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, [isLoading]);

  const handleScrollToMembership = () => {
    const element = document.getElementById('membership');
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

  const handlePlanSelected = (planName: string) => {
    setToastMessage(`Excellent Choice! Guided pass registered for the ${planName}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-150">
      
      {/* 1. Intro Loading Screen Overlay */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-fadeIn">
          
          {/* Brand header / Sticky Navbar */}
          <Header onJoinClick={handleScrollToMembership} />

          {/* Core Body Sections */}
          <main>
            
            {/* 2. Hero banner Space */}
            <Hero onJoinClick={handleScrollToMembership} />

            {/* 3. About philosophy Block */}
            <div className="reveal-on-scroll">
              <About />
            </div>

            {/* 4. Luxury Services chamber */}
            <div className="reveal-on-scroll">
              <Services />
            </div>

            {/* 5. Female Trainers Circle */}
            <div className="reveal-on-scroll">
              <Trainers />
            </div>

            {/* 6. Comparison plans List */}
            <div className="reveal-on-scroll">
              <Membership onPlanSelected={handlePlanSelected} />
            </div>

            {/* 7. Gallery mosaics */}
            <div className="reveal-on-scroll">
              <Gallery />
            </div>

            {/* 8. Verified reviews Swiper */}
            <div className="reveal-on-scroll">
              <Testimonials />
            </div>

            {/* 9. Map & Contacts bay */}
            <div className="reveal-on-scroll">
              <Contact />
            </div>

          </main>

          {/* 10. Floating Interactive WhatsApp Link */}
          <WhatsAppButton />

          {/* 11. Scroll indicator Back-to-Top trigger */}
          <BackToTop />

          {/* 12. Branded rich Footer */}
          <Footer />

          {/* Toast Notification for Plan booking confirmation */}
          {toastMessage && (
            <div className="fixed top-24 right-6 z-50 p-4.5 rounded-2xl glass-panel border-pink-500/30 max-w-sm flex items-start space-x-3 shadow-2xl animate-scaleUp">
              <div className="h-9 w-9 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20">
                <Calendar className="h-5 w-5 animate-pulse" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[9px] font-mono font-bold tracking-widest text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded uppercase">
                  RESERVATION PENDING
                </span>
                <p className="text-xs text-white uppercase font-black leading-tight mt-1">
                  Spot Reserved
                </p>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  {toastMessage} We have notified our Banjara Hills floor coordinators.
                </p>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
