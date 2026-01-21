import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ShoppingBag,
  Plus,
  Star,
  CheckCircle2,
  Zap,
  Users,
  ShieldCheck,
  Award,
  Scale,
  Timer,
  Dumbbell,
  Activity,
  Clock,
  Flame,
  BarChart3
} from 'lucide-react';
import { PRODUCTS, PLANS } from '../constants';
import { useCart } from '../CartContext';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const featuredProducts = [
    PRODUCTS.find(p => p.id === 'c1'),
    PRODUCTS.find(p => p.id === 'c2'),
    PRODUCTS.find(p => p.id === 'a1'),
    PRODUCTS.find(p => p.id === 's2'),
    PRODUCTS.find(p => p.id === 'e1'),
    PRODUCTS.find(p => p.id === 'c3'),
    PRODUCTS.find(p => p.id === 'a6'),
    PRODUCTS.find(p => p.id === 's1'),
  ].filter(Boolean) as typeof PRODUCTS;

  const transformations = [
    {
      name: "Philip Thompson",
      title: "PHILIP'S HARD WORK PAID OFF",
      desc: "Philip aimed to lose fat and build muscle. With determination and a solid plan, he succeeded remarkably.",
      before: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672620/Image_17-01-2026_at_17.54_ool8mr.jpg",
      after: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672620/Image_17-01-2026_at_17.55_vpwj4p.jpg",
    },
    {
      name: "Felix Taylor",
      title: "FELIX GOT HIS DREAM BODY",
      desc: "A year ago, Felix approached me with the goal of simultaneously losing fat and building muscle.",
      before: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672620/Image_17-01-2026_at_17.53_2_ftvyah.jpg",
      after: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672620/Image_17-01-2026_at_17.53_3_ggokhj.jpg",
    },
    {
      name: "Jack Smith",
      title: "JACK GOT RIPPED!",
      desc: "Jack wanted the shredded, muscular body. Through dedication and hard work, he made it a reality.",
      before: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672618/Image_17-01-2026_at_17.50_ewfmsp.jpg",
      after: "https://res.cloudinary.com/dddvmez6s/image/upload/v1768672619/Image_17-01-2026_at_17.50_1_qvshjc.jpg",
    }
  ];

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

  return (
    <div className="overflow-hidden bg-obsidian text-white">
      {/* Hero Section - HEADINGS REDUCED FOR LAPTOP VIEW */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)`, willChange: 'transform' }}
        >
          <video autoPlay loop muted playsInline className="w-full h-[120%] object-cover grayscale-[0.5] brightness-[0.3]">
            <source src="https://res.cloudinary.com/dddvmez6s/video/upload/v1768662492/6389562-uhd_3840_2160_25fps_fk4ls6.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
        </div>

        <div
          className="container mx-auto px-6 relative z-10"
          style={{ transform: `translateY(-${scrollY * 0.1}px)`, willChange: 'transform' }}
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] animate-in fade-in duration-700 uppercase tracking-tighter text-white">
              ELITE <span className="text-scarlet">TRAINING.</span><br />BUILT FOR YOU.
            </h1>
            <p className="text-sm md:text-xl text-white/60 mb-10 max-w-xl font-medium animate-in fade-in delay-150 duration-700 leading-relaxed">
              Five years. Hundreds of transformations. One commitment: Your bespoke journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-in fade-in delay-300 duration-700">
              <Link to="/plans" className="cta-base cta-primary">
                VIEW PLANS
                <span className="cta-icon-circle">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link to="/shop" className="cta-base cta-secondary">
                SHOP GEAR
                <span className="cta-icon-circle">
                  <ShoppingBag className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer z-20">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/20">Scroll</span>
          <ArrowDown className="w-5 h-5 text-scarlet" />
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16 relative">
            <span className="text-scarlet font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-2 block">CLIENT STORIES</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">RESULTS SPEAK FOR THEMSELVES</h2>
          </div>

          <div ref={scrollRef} className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10">
            {transformations.map((item, i) => (
              <div key={i} className="min-w-[85vw] sm:min-w-[420px] lg:min-w-[480px] snap-center bg-charcoal/40 border border-white/5 rounded-[30px] p-6 md:p-8 flex flex-col transition-all duration-500 hover:border-white/10 hover:shadow-2xl">
                <div className="grid grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8 rounded-[20px] overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale opacity-70 transition-opacity" />
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-black/60 backdrop-blur-md px-2 md:px-3 py-1 rounded-full border border-white/10">
                      <span className="text-white font-black text-[7px] md:text-[8px] uppercase tracking-widest">BEFORE</span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-700" />
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-scarlet px-2 md:px-3 py-1 rounded-full border border-scarlet/10">
                      <span className="text-white font-black text-[7px] md:text-[8px] uppercase tracking-widest">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-2xl font-black text-white mb-3 md:mb-4 uppercase leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-steel text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-medium">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-0.5 bg-scarlet shadow-[0_0_8px_rgba(220,20,60,0.5)]"></div>
                    <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">{item.name}</span>
                  </div>
                  <button className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center text-obsidian shadow-lg hover:bg-scarlet hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING PROTOCOLS (PLANS) SECTION */}
      <section className="py-24 md:py-40 bg-[#080808] relative overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="text-scarlet font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Programs</span>
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase leading-none tracking-tighter text-white">
              Training <span className="text-scarlet italic serif-font">Plans.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => {
              const meta = getMetadata(plan.id);
              const isElite = plan.id === 'p2';

              return (
                <div
                  key={plan.id}
                  className={`relative group p-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[35px] transition-all duration-700 ${isElite ? 'lg:scale-[1.02]' : ''}`}
                >
                  <div className={`relative h-full bg-[#0D0D0D] p-8 md:p-10 flex flex-col rounded-[33px] overflow-hidden border ${isElite ? 'border-scarlet/40 shadow-[0_30px_80px_-20px_rgba(220,20,60,0.15)]' : 'border-white/5'} group-hover:border-scarlet/50 transition-all duration-700`}>
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${isElite ? 'bg-scarlet border-scarlet text-white' : 'bg-white/5 border-white/10 text-scarlet'}`}>
                            {React.isValidElement(getIcon(plan.icon)) && React.cloneElement(getIcon(plan.icon) as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                          </div>
                          <span className="text-[7px] font-black text-white/30 tracking-[0.3em] uppercase">PLAN {plan.id.toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black serif-font uppercase text-white leading-tight">{plan.name}</h3>
                      </div>
                      <div className="flex flex-col sm:items-end">
                        <span className="text-3xl md:text-4xl font-black text-white italic serif-font">£{plan.price}</span>
                        <span className="text-steel text-[7px] font-black uppercase tracking-[0.3em] opacity-30">ONE-TIME FEE</span>
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-3 gap-2 mb-8 py-4 border-y border-white/5">
                      <div className="space-y-0.5">
                        <span className="block text-[6px] font-black text-steel tracking-[0.2em] uppercase">TIMELINE</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-2.5 h-2.5 text-scarlet" />
                          <span className="text-[9px] font-black text-white">{meta.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[6px] font-black text-steel tracking-[0.2em] uppercase">LOAD</span>
                        <div className="flex items-center gap-1.5">
                          <Flame className="w-2.5 h-2.5 text-scarlet" />
                          <span className="text-[9px] font-black text-white">{meta.intensity}</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[6px] font-black text-steel tracking-[0.2em] uppercase">SCOPE</span>
                        <div className="flex items-center gap-1.5">
                          <BarChart3 className="w-2.5 h-2.5 text-scarlet" />
                          <span className="text-[9px] font-black text-white">{meta.focus}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mb-8 flex-grow">
                      <p className="text-steel text-[11px] font-medium leading-relaxed italic border-l border-scarlet/30 pl-4 mb-4 opacity-70">
                        {plan.target}
                      </p>
                    </div>

                    <div className="relative z-10">
                      <button
                        onClick={() => handleBuyPlan(plan)}
                        className={`cta-base cta-icon-left w-full justify-center !min-h-[48px] !text-[11px] ${isElite ? 'cta-primary' : 'cta-black'}`}
                      >
                        <span className="w-full text-center pr-10">GET STARTED</span>
                        <span className="cta-icon-circle !w-8 !h-8">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Bespoke Matters Sector */}
      <section className="py-24 md:py-48 bg-obsidian relative overflow-hidden reveal">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col items-center mb-16 md:mb-32">
            <span className="text-scarlet font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tighter text-white">
              Why <span className="text-scarlet italic serif-font">Choose</span> Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-32">
            {[
              { num: "01", icon: Users, title: "Personalized Training", desc: "Cookie-cutter plans fail because no two people are the same. Your plan is built for you." },
              { num: "02", icon: CheckCircle2, title: "Proven Results", desc: "Five years of successful client transformations in Dublin." },
              { num: "03", icon: Zap, title: "Science-Based Approach", desc: "Data-driven training combined with expert coaching." },
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 bg-charcoal/10 border border-white/5 rounded-[40px] text-left hover:border-scarlet/30 transition-all hover:shadow-2xl">
                <item.icon className="w-8 h-8 text-scarlet mb-6" />
                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white">{item.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/about" className="cta-base cta-primary">
              ABOUT US
              <span className="cta-icon-circle">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Apparel Drop Section */}
      <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden reveal">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
            <span className="text-scarlet font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Shop Our Gear</span>
            <h2 className="text-4xl md:text-8xl font-black mb-8 uppercase leading-none tracking-tighter text-white">
              Performance <span className="text-scarlet italic serif-font">Meets</span> Style
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 md:mb-20">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col bg-[#0D0D0D] border border-white/5 rounded-[40px] transition-all duration-700 hover:border-scarlet/30 overflow-hidden hover:shadow-2xl">
                <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-white/5">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="p-6 md:p-8">
                  <h3 className="font-black text-lg md:text-xl uppercase mb-1 text-white">{product.name}</h3>
                  <p className="text-white/40 text-[8px] font-black uppercase tracking-widest mb-4 md:mb-6">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-black text-lg md:text-xl">£{product.price}</span>
                    <button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, type: 'product' })} className="w-10 h-10 bg-white text-obsidian rounded-full flex items-center justify-center hover:bg-scarlet hover:text-white transition-all">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/shop" className="cta-base cta-secondary">
              VIEW ALL
              <span className="cta-icon-circle">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* High-Impact Contact Sector - DARK THEME */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-48 reveal">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dddvmez6s/image/upload/v1768666066/pexels-eyecon-design-500632474-17211446_rricpx.jpg" alt="Gym" className="w-full h-full object-cover grayscale brightness-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-scarlet/[0.05] to-obsidian"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">

            <div className="lg:col-span-6 space-y-16">
              <div className="space-y-8 text-left">
                <span className="text-scarlet font-black tracking-[0.5em] uppercase text-[10px] block mb-6">Get In Touch</span>

                <h2 className="text-6xl md:text-[8rem] font-black text-white uppercase leading-[0.85] tracking-tighter">
                  START YOUR <br /> <span className="serif-font italic lowercase tracking-normal text-scarlet">Journey</span>
                </h2>

                <p className="text-steel text-lg md:text-2xl max-w-xl font-medium leading-relaxed opacity-70">
                  Start your transformation today with Dublin's top personal trainer.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-scarlet" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Dublin Authority Status</span>
                  </div>
                </div>

                <div className="h-16 w-px bg-white/10"></div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-obsidian">
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
                      <input type="text" placeholder="Your name" className="w-full bg-charcoal/40 border border-white/5 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Email Address</label>
                      <input type="email" placeholder="your@email.com" className="w-full bg-charcoal/40 border border-white/5 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet transition-all shadow-inner" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Your Goals</label>
                      <textarea rows={4} placeholder="Tell us about your fitness goals..." className="w-full bg-charcoal/40 border border-white/5 p-6 rounded-[25px] outline-none text-white text-sm resize-none focus:border-scarlet transition-all shadow-inner"></textarea>
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

export default Home;