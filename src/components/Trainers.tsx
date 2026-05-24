import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Star, Award, Heart, MessageSquareText } from 'lucide-react';
import { Trainer } from '../types';

const imageAnanya = "/src/assets/images/trainer_ananya_1779633005840.png";
const imagePriya = "/src/assets/images/trainer_priya_1779633025371.png";
const imageSofia = "/src/assets/images/trainer_sofia_1779633044465.png";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  const trainersData: Trainer[] = [
    {
      id: 'ananya',
      name: 'Ananya Sharma',
      specialty: 'Head Strength Coach & Nutritionist',
      experience: '8+ Years Experience',
      bio: 'Ananya is a certified CrossFit level-2 coach and sports nutrition specialist. She is passionate about breaking the stereotype that lifting heavy is only for men, guiding over 800+ women to their strength peaks.',
      image: imageAnanya,
      credentials: ['ACE Certified Personal Trainer', 'ISSN Sports Nutritionist', 'Functional Kettlebell Master'],
      social: {
        instagram: 'https://instagram.com/ananya_sports_fit',
        facebook: 'https://facebook.com/chef.ananya.fit',
        linkedin: 'https://linkedin.com/in/ananya-fit-elite'
      }
    },
    {
      id: 'priya',
      name: 'Priya Kapoor',
      specialty: 'High-Intensity Cardio & Aerobics',
      experience: '6+ Years Experience',
      bio: 'Priya specializes in circuit conditioning and fat loss dynamics. With her infectious electric energy, Priya transforms routine cardio workouts into high-motivation dance aerobic parties where every drop of sweat counts.',
      image: imagePriya,
      credentials: ['Zumba® Fitness Instructor', 'AFAA Certified group Coach', 'CPR/AED RedCross Certified'],
      social: {
        instagram: 'https://instagram.com/priya_kapoor_zumba',
        facebook: 'https://facebook.com/priya.cardio.coach',
        linkedin: 'https://linkedin.com/in/priya-kapoor-fitness'
      }
    },
    {
      id: 'sofia',
      name: 'Sofia Khan',
      specialty: 'Yoga Acharya & Mindfulness Expert',
      experience: '10+ Years Experience',
      bio: 'Sofia trained in Rishikesh and has spent a decade coaching women on mind-body unity, flexibility and prenatal recovery. Her peaceful yet challenging pilates and yoga regimes help reset your nervous system while lengthening muscles.',
      image: imageSofia,
      credentials: ['500-Hour RYT Certified Yogi', 'Certified Pilates Reformer Coach', 'Pre/Post-Natal Care Specialist'],
      social: {
        instagram: 'https://instagram.com/sofia_khan_wellness',
        facebook: 'https://facebook.com/sofia.mindfulness',
        linkedin: 'https://linkedin.com/in/sofia-khan-yoga'
      }
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-pink-500/5 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500 font-bold">
            ELITE LEADERSHIP
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Meet Your <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Female Mentors</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Professional. Certified. Powerhouses. Our trainers are dedicated exclusively to designing, motivating, and tracking female-centric fitness paths with zero compromises.
          </p>
        </div>

        {/* Trainers Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="glass-panel rounded-3xl overflow-hidden group hover:shadow-[0_25px_50px_rgba(236,72,153,0.15)] hover:border-pink-500/25 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative Pink Gradient Wash on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-350"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1 px-3 py-1 bg-neutral-950/80 backdrop-blur-md rounded-full border border-pink-500/20 text-[10px] uppercase font-bold text-pink-400 tracking-wider">
                  <Star className="h-3 w-3 fill-pink-500 text-pink-500 shrink-0" />
                  <span>{trainer.experience}</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-pink-500 transition-colors uppercase tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-purple-400 font-medium tracking-wide">
                    {trainer.specialty}
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3">
                  {trainer.bio}
                </p>

                {/* Social icons */}
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href={trainer.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={trainer.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <button
                    onClick={() => setSelectedTrainer(trainer)}
                    className="w-full py-3 bg-neutral-900 text-[10px] text-neutral-300 hover:text-white font-bold uppercase tracking-wider rounded-xl border border-white/5 hover:border-pink-500/25 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer font-display"
                  >
                    <Award className="h-4 w-4 text-pink-500" /> View Achievements & Bio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Overlay Bio Modal */}
        {selectedTrainer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-xl glass-panel rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden animate-scaleUp">
              {/* Soft purple and pink backgrounds */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-pink-500/10 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-purple-500/10 blur-3xl rounded-full"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-pink-500 cursor-pointer z-20"
              >
                ✕
              </button>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                {/* Image */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-2 border-pink-500/40 shadow-xl bg-neutral-900">
                  <img
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Context */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-pink-400 px-2 py-0.5 rounded bg-pink-500/10 uppercase">
                      {selectedTrainer.experience}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mt-2">
                      {selectedTrainer.name}
                    </h3>
                    <p className="text-xs text-purple-400 font-semibold">{selectedTrainer.specialty}</p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {selectedTrainer.bio}
                  </p>

                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-[11px] font-display font-bold uppercase text-neutral-100 tracking-wider mb-2 flex items-center justify-center md:justify-start gap-1.5">
                      <Award className="h-4 w-4 text-pink-500" /> Elite Credentials:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-neutral-400">
                      {selectedTrainer.credentials.map((cred, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-1.5 justify-center md:justify-start">
                          <span className="text-pink-500 text-xs">✦</span>
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setSelectedTrainer(null);
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto glow-btn px-5 py-2.5 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold text-[10px] uppercase tracking-widest text-center cursor-pointer"
                    >
                      Book Free 1:1 Trial Session
                    </button>
                    <button
                      onClick={() => setSelectedTrainer(null)}
                      className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-[10px] font-bold uppercase px-5 py-2.5 rounded-xl text-neutral-300 hover:text-white"
                    >
                      Close Bio
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
