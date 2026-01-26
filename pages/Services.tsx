import React from 'react';
import { Clipboard, Mail, FileText, Check, ChevronDown, Plus, Minus, Scale, Timer, Dumbbell, Activity, ArrowRight, ShieldAlert, ShieldCheck, Cpu, Workflow, Compass, Target, Zap, Clock, Flame, BarChart3, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Services: React.FC = () => {
  const { addToCart } = useCart();

  const handleBuyPlan = (plan: typeof PLANS[0]) => {
    addToCart({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      quantity: 1,
      type: 'plan'
    });
    window.location.hash = '#/checkout';
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Weight': return <Scale className="w-8 h-8" />;
      case 'Timer': return <Timer className="w-8 h-8" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8" />;
      case 'Activity': return <Activity className="w-8 h-8" />;
      default: return <Activity className="w-8 h-8" />;
    }
  };

  const getMetadata = (id: string) => {
    switch (id) {
      case 'p1': return { duration: '16 WEEKS', intensity: 'MEDIUM', focus: 'METABOLIC' };
      case 'p2': return { duration: '12 WEEKS', intensity: 'MAXIMAL', focus: 'HYBRID' };
      case 'p3': return { duration: '12 WEEKS', intensity: 'HIGH', focus: 'STRUCTURAL' };
      case 'p4': return { duration: 'ONGOING', intensity: 'VARIABLE', focus: 'LONGEVITY' };
      default: return { duration: '12 WEEKS', intensity: 'HIGH', focus: 'GENERAL' };
    }
  };

  return (
    <div className="pt-20 bg-obsidian">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dddvmez6s/image/upload/v1768689331/pexels-tima-miroshnichenko-6390237_bzph5h.jpg"
            alt="Training"
            className="w-full h-full object-cover grayscale-[0.6] brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center reveal active">
          <span className="text-scarlet font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Programs</span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-none">
            CHOOSE YOUR <br /><span className="text-white italic serif-font tracking-normal">Plan.</span>
          </h1>
          <p className="text-steel text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-60">
            Hand-crafted high-performance roadmaps designed for the individual who demands absolute excellence.
          </p>
        </div>
      </section>

      {/* CONSULTATION CTA SECTION */}
      <section className="py-20 relative overflow-hidden bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-scarlet p-12 lg:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>

            <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-6">
              <span className="text-[10px] font-black tracking-[4px] uppercase text-white/70">Expert Strategic Deep-Dive</span>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                NOT SURE <br /><span className="text-black not-italic">WHICH PLAN?</span>
              </h2>
              <p className="text-white/80 font-medium text-lg lg:text-xl">
                Book a 15-minute free tactical consultation. We'll find the absolute best roadmap for your specific environment and goals.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/booking"
                className="bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4 group/btn"
              >
                Book Free Call
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS GRID SECTION */}
      <section id="plan-grid" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {PLANS.map((plan) => {
              const meta = getMetadata(plan.id);
              const isElite = plan.id === 'p2'; // Highlighting HYROX as elite

              return (
                <div
                  key={plan.id}
                  className="relative group transition-all duration-300"
                >
                  {isElite && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-scarlet px-6 py-1.5 rounded-full">
                        <span className="text-[9px] font-bold text-white tracking-wider uppercase">Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className={`relative h-full bg-[#0D0D0D] p-8 lg:p-10 flex flex-col rounded-3xl border ${isElite ? 'border-scarlet/30' : 'border-white/10'} hover:border-scarlet/50 transition-all duration-300`}>

                    {/* Header: Title & Price */}
                    <div className="relative z-10 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isElite ? 'bg-scarlet text-white' : 'bg-white/5 text-scarlet'}`}>
                          {getIcon(plan.icon)}
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">{plan.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">£{plan.price}</span>
                        <span className="text-steel text-sm">one-time</span>
                      </div>
                    </div>



                    {/* Description & Features */}
                    <div className="relative z-10 flex-grow mb-8">
                      <p className="text-steel text-base leading-relaxed mb-6">
                        {plan.target}
                      </p>
                      <div className="space-y-3">
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-scarlet flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="relative z-10">
                      <button
                        onClick={() => handleBuyPlan(plan)}
                        className={`w-full py-4 px-8 font-bold text-sm uppercase tracking-wide rounded-full transition-all hover:scale-105 ${isElite ? 'bg-scarlet hover:bg-scarlet/90 text-white' : 'bg-white text-black hover:bg-white/90'}`}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELEVATE PERFORMANCE / UPSELLS */}
      <section className="py-48 relative overflow-hidden reveal">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-scarlet font-black tracking-[0.6em] uppercase text-xs mb-8 block">Add-Ons</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter">
              Enhance Your <span className="serif-font italic lowercase tracking-normal text-scarlet">Training</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Video Check-Ins", price: "45", desc: "45-minute tactical deep dive to adjust strategy and technical form metrics." },
              { title: "Custom Meal Prep", price: "25", desc: "Engineered shopping lists and recipe macros tailored for your metabolism." },
              { title: "Form Review", price: "30", desc: "Biomechanical analysis of lift videos via dedicated secure channel." },
            ].map((item, i) => (
              <div key={i} className="group p-12 bg-white/5 border border-white/5 rounded-[40px] hover:border-scarlet/30 transition-all duration-700 flex flex-col items-center text-center">
                <h3 className="font-black text-2xl mb-4 uppercase tracking-tighter text-white">{item.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-scarlet italic serif-font">£{item.price}</span>
                  <span className="text-[10px] font-black text-steel tracking-widest uppercase">/ UNIT</span>
                </div>
                <p className="text-steel text-sm mb-12 font-medium leading-relaxed opacity-60 flex-grow">
                  {item.desc}
                </p>
                <button className="text-[10px] font-black tracking-[0.4em] uppercase border-b-2 border-scarlet pb-1 text-white hover:text-scarlet transition-all transform hover:scale-105 active:scale-95">
                  ADD THIS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-48 bg-[#050505] relative reveal">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
            <span className="text-scarlet font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">Common <span className="serif-font italic lowercase tracking-normal text-white">Questions</span></h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Delivery Timeline?", a: "Protocols are hand-crafted within 48-72 hours of receiving your biometrics. No generic templates, no automation." },
              { q: "Protocol Adaptability?", a: "If your operational environment shifts, we pivot. Your plan is a living document monitored for efficiency." },
              { q: "Integrity Guarantee?", a: "As these are bespoke assets, we focus on manual refinement over simple refunds. Absolute satisfaction is the standard." },
              { q: "Injury Management?", a: "Medical transparency is required. We engineer around limitations to ensure longevity without compromising output." },
            ].map((faq, i) => (
              <div key={i} className="bg-obsidian p-10 border border-white/5 rounded-[35px] cursor-pointer group hover:border-scarlet/30 transition-all duration-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-black text-xl text-white uppercase tracking-tighter">{faq.q}</h4>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-scarlet group-hover:rotate-180 group-hover:bg-scarlet group-hover:text-white transition-all duration-700">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-steel text-sm leading-relaxed font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
};

export default Services;