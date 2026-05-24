import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Weight Loss & Toning',
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    // Simulate API storage / messaging delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'Weight Loss & Toning',
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Ambient background pink glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/[0.04] blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-500/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500 font-bold">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Begin Your <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Transformation</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Have questions about our premium memberships, female trainer batches, or amenities? Write us a message or visit our state-of-the-art facility in Banjara Hills today.
          </p>
        </div>

        {/* Contact Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Coordinates & Opening Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Contacts Panel */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-6">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider border-b border-white/5 pb-4">
                Club Information
              </h3>

              <div className="space-y-4.5">
                {/* Physical address */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 shrink-0 border border-pink-500/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Address</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Road No 4, Green Valley, Banjara Hills,<br />
                      Hyderabad, Telangana 500034
                    </p>
                  </div>
                </div>

                {/* Main Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 shrink-0 border border-purple-500/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Phone</h4>
                    <a
                      href="tel:08341725523"
                      className="text-xs text-neutral-300 hover:text-pink-500 transition-colors inline-block mt-1 hover:underline"
                    >
                      08341725523
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 shrink-0 border border-pink-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Email Support</h4>
                    <a
                      href="mailto:help@fitnessfreakladies.com"
                      className="text-xs text-neutral-300 hover:text-pink-500 transition-colors inline-block mt-1 hover:underline"
                    >
                      help@fitnessfreakladies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule Table */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/5 pb-3.5">
                <Clock className="h-5 w-5 text-pink-500" />
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  Club Operating Hours
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="font-medium">Monday — Friday</span>
                  <span className="text-neutral-400 font-mono">6:00 AM — 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="font-medium">Saturday</span>
                  <span className="text-neutral-400 font-mono">7:00 AM — 7:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-medium text-pink-400 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 animate-pulse" /> Sunday (Ladies Special Slot)
                  </span>
                  <span className="text-pink-400 font-bold font-mono">8:00 AM — 1:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form and Google Maps embed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Inquiry Form */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden">
              {success ? (
                <div className="py-12 px-4 text-center space-y-5 animate-scaleUp">
                  <div className="mx-auto h-16 w-16 bg-pink-500/15 text-pink-500 rounded-full flex items-center justify-center border border-pink-500/20">
                    <CheckCircle className="h-8 w-8 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                      Thank You, Champion!
                    </h3>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                      We have safely logged your fitness query. Sofia or Priya from our front-deck executive team will connect with you via call on <strong className="text-white">{formData.phone}</strong> inside the hour!
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-[10px] text-neutral-200 uppercase font-black tracking-widest cursor-pointer"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2">
                    Submit Member Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Shalini Roy"
                        className="w-full px-4.5 py-3 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-xs placeholder-neutral-500 text-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 8341725523"
                        className="w-full px-4.5 py-3 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-xs placeholder-neutral-500 text-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. shalini@gmail.com"
                        className="w-full px-4.5 py-3 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-xs placeholder-neutral-500 text-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Primary Interest Area */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                        Primary Fitness Target
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4.5 py-3 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-xs text-neutral-300 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Weight Loss & Toning">Weight Loss & Toning</option>
                        <option value="Strength deadlifting">Strength & Power lifting</option>
                        <option value="Pilates & Core Flexibility">Pilates & Posture Spine restoration</option>
                        <option value="Group Zumba & Cardio Dances">Group Zumba Dance & Aerobics</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                      Custom Message (Special health limitations etc)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your wellness objectives or ask about class schedules..."
                      className="w-full px-4.5 py-3 bg-neutral-900 border border-white/5 hover:border-pink-500/20 focus:border-pink-500/50 rounded-xl text-xs placeholder-neutral-500 text-white focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Trigger */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full glow-btn py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:brightness-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span>Encrypting & dispatching details...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message & Lock consultation Slot</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center space-x-2 p-3 bg-pink-500/5 rounded-lg border border-pink-500/10 text-[10.5px] text-neutral-400">
                    <ShieldAlert className="h-4 w-4 text-pink-500 shrink-0" />
                    <span>Your personal data remains strictly private. We never share contacts with secondary third parties.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="glass-panel w-full h-[240px] rounded-3xl overflow-hidden border border-white/5 shadow-lg relative group">
              <iframe
                title="Fitness Freak Ladies Gym Banjara Hills Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.189524673898!2d78.4376359!3d17.4026362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97473724c96d%3A0xe7bc32fcd0c3d98c!2sRoad%20No.%204%2C%20Green%20Valley%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1704040900000!5m2!1sen!2sin"
                className="w-full h-full border-0 brightness-85 contrast-[1.10] saturate-[0.80]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
