import React from 'react';
import { Check, Users, ShieldCheck, Award, ArrowRight, Target, Zap, Activity, Microscope, Fingerprint, Layers, Compass, Workflow, Star, CheckCircle2, MapPin, Search, Cpu, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-obsidian text-white overflow-x-hidden">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000"
            alt="Strong Performance"
            className="w-full h-full object-cover grayscale brightness-[0.12] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 md:gap-4 px-4 md:px-5 py-2 rounded-full border border-scarlet/30 bg-scarlet/5 mb-8 md:mb-10 animate-in fade-in slide-in-from-top-6 duration-1000">
            <div className="w-1.5 h-1.5 rounded-full bg-scarlet animate-pulse"></div>
            <span className="text-scarlet font-black tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] uppercase">Personal Trainer</span>
          </div>

          <img
            src="/images/logos/Strong performance white logo.png"
            alt="Strong Performance"
            className="h-32 md:h-48 w-auto mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000"
          />

          <div className="flex flex-col items-center gap-10 mt-10 md:mt-16 animate-in fade-in delay-700 duration-1000">
            <p className="text-steel text-base md:text-2xl max-w-2xl md:max-w-3xl font-medium tracking-wide leading-relaxed px-4">
              Helping you achieve <span className="text-white">real, lasting results</span> through personalized training and proven methods.
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="w-px h-16 md:h-24 bg-gradient-to-b from-scarlet to-transparent"></div>
              <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-scarlet opacity-50" />
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] md:tracking-[0.5em] text-white/40 uppercase font-mono">Oxford, UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC OVERVIEW */}
      <section className="py-16 md:py-24 bg-obsidian border-y border-white/5 reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "EXPERIENCE", value: "05", unit: "YEARS" },
              { label: "CLIENTS", value: "500", unit: "+" },
              { label: "SUCCESS RATE", value: "100", unit: "%" },
              { label: "PROGRAMS", value: "24", unit: "+" }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 md:space-y-2">
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-scarlet uppercase">{metric.label}</span>
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="text-4xl md:text-6xl font-black text-white">{metric.value}</span>
                  <span className="text-[10px] font-black text-steel tracking-widest">{metric.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY SECTION */}
      <section className="py-24 md:py-48 bg-obsidian relative overflow-hidden reveal">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/10 bg-charcoal/20">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000"
                  alt="Strong Performance Coaching"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-12 md:space-y-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10 bg-white/5">
                  <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-scarlet" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/70">My Approach</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-[1.1] md:leading-none tracking-tighter">
                  Your Personal <br /> <span className="text-scarlet italic serif-font">Journey</span>
                </h2>
              </div>

              <div className="space-y-8 md:space-y-10 text-steel text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-scarlet/30 pl-6 md:pl-10">
                <p>
                  I've spent years perfecting my approach to personal training, learning what works and what doesn't.
                </p>
                <p className="text-white">
                  Every client is different, so every training plan should be too. I create personalized programs based on your unique goals and needs.
                </p>
              </div>

              <div className="pt-6 md:pt-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <Link to="/plans" className="cta-base cta-primary">
                  VIEW PLANS
                  <span className="cta-icon-circle">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
                <div className="flex items-center gap-4 opacity-40">
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Results-Driven Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 md:py-48 bg-[#080808] relative overflow-hidden reveal">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
            <span className="text-scarlet font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-[11px] mb-6 md:mb-8 block">What I Offer</span>
            <h2 className="text-4xl md:text-9xl font-black text-white uppercase leading-tight md:leading-none tracking-tighter">
              My <span className="text-scarlet italic serif-font">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: ShieldCheck, title: "Commitment", id: "01", desc: "Every session is focused and purposeful. We make every rep count toward your goals." },
              { icon: Workflow, title: "Adaptable", id: "02", desc: "Your plan adjusts based on your progress and recovery, keeping you on track." },
              { icon: Zap, title: "Motivation", id: "03", desc: "I'll push you to go further than you thought possible, building real strength and confidence." },
            ].map((pillar, i) => (
              <div key={i} className="group relative p-10 md:p-16 bg-obsidian border border-white/5 rounded-[40px] md:rounded-[50px] transition-all duration-700">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-charcoal/30 rounded-[20px] md:rounded-[25px] border border-white/5 flex items-center justify-center mb-10 group-hover:bg-scarlet transition-all shadow-xl">
                  <pillar.icon className="w-8 h-8 md:w-9 md:h-9 text-scarlet group-hover:text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8">{pillar.title}</h3>
                <p className="text-steel text-sm md:text-base leading-relaxed font-medium opacity-70">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT CONTACT SECTOR - Restoring Form Functional as in Home Page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-48 reveal">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dddvmez6s/image/upload/v1768666066/pexels-eyecon-design-500632474-17211446_rricpx.jpg" alt="Gym" className="w-full h-full object-cover grayscale brightness-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-scarlet/[0.05] to-obsidian"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">

            {/* Left: Authority Text & Trust */}
            <div className="lg:col-span-6 space-y-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-scarlet/30 bg-scarlet/5">
                  <div className="w-2 h-2 rounded-full bg-scarlet animate-pulse shadow-[0_0_10px_#DC143C]"></div>
                  <span className="text-white/80 font-black tracking-[0.5em] uppercase text-[10px]">Get In Touch</span>
                </div>

                <h2 className="text-6xl md:text-[8rem] font-black text-white uppercase leading-[0.85] tracking-tighter">
                  START YOUR <br /> <span className="serif-font italic lowercase tracking-normal text-scarlet">Journey</span>
                </h2>

                <p className="text-steel text-lg md:text-2xl max-w-xl font-medium leading-relaxed opacity-70">
                  Start your transformation today with Oxford's top personal trainer.
                </p>
              </div>

              {/* Trust Matrix */}
              <div className="flex flex-wrap items-center gap-10">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-scarlet" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Oxford Authority Status</span>
                  </div>
                </div>

                <div className="h-16 w-px bg-white/10"></div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#4285F4]">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white block">Google Verified</span>
                    <span className="text-[9px] font-bold text-scarlet uppercase tracking-widest">Client Authenticated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bespoke Form Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="max-w-xl w-full">
                <div className="bg-black/95 backdrop-blur-3xl p-10 md:p-14 rounded-[50px] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative">
                  <div className="mb-12">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-3">Get In Touch</h3>
                    <p className="text-steel text-sm font-medium opacity-60">Ready to start your transformation?</p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Your Name</label>
                      <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet focus:bg-white/10 transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Email Address</label>
                      <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet focus:bg-white/10 transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Your Goals</label>
                      <textarea rows={4} placeholder="Tell us about your fitness goals..." className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm resize-none focus:border-scarlet focus:bg-white/10 transition-all shadow-inner"></textarea>
                    </div>

                    <div className="pt-8">
                      <button type="button" className="cta-base cta-primary w-full !min-h-[64px]">
                        SEND MESSAGE
                        <span className="cta-icon-circle !w-10 !h-10">
                          <ArrowRight className="w-6 h-6" />
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-10 opacity-40">
                      <ShieldCheck className="w-4 h-4 text-scarlet" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">Your Privacy is Protected</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;