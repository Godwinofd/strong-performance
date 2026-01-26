import React from 'react';
import { Video, Clock, MessageSquare, ArrowRight, ShieldCheck, Target, Zap, Waves, Brain, Trophy } from 'lucide-react';

const Booking: React.FC = () => {
    return (
        <div className="pt-20 bg-obsidian min-h-screen selection:bg-scarlet selection:text-white">
            {/* HERO SECTION - MORE AGGRESSIVE & PREMIUM */}
            <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-scarlet/20 via-obsidian/90 to-obsidian"></div>
                    {/* Animated background elements */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-scarlet/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-scarlet/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-10 reveal active shadow-2xl backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scarlet opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-scarlet"></span>
                        </span>
                        <span className="text-white font-black tracking-[0.3em] uppercase text-[10px]">Elite Strategy Session</span>
                    </div>

                    <h1 className="text-6xl md:text-[10rem] font-black mb-8 uppercase tracking-tighter leading-[0.85] reveal active italic text-white">
                        SECURE YOUR <br /><span className="text-scarlet not-italic tracking-[-0.05em]">EDGE.</span>
                    </h1>

                    <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-bold mb-12 reveal active leading-relaxed">
                        Stop guessing. Start executing. Book your free 15-minute tactical consultation to architect your high-performance future.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 reveal active">
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Video size={16} className="text-scarlet" />
                            Live Google Meet
                        </div>
                        <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div>
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Clock size={16} className="text-scarlet" />
                            15 Min Strategy
                        </div>
                        <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div>
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Brain size={16} className="text-scarlet" />
                            Custom Roadmap
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN INTERFACE SECTION */}
            <section className="pb-40 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-20">

                        {/* LEFT: THE VALUE PROPOSITION */}
                        <div className="xl:col-span-4 space-y-16 reveal active">
                            <div className="space-y-6">
                                <div className="w-12 h-1 bg-scarlet"></div>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">What Happens <br /><span className="text-scarlet italic">On the call?</span></h2>
                                <p className="text-white text-lg font-bold leading-relaxed">
                                    This isn't a sales pitch. It's a technical briefing designed to identify friction in your current training.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-10">
                                {[
                                    { icon: <Target className="w-6 h-6" />, title: "Biometric Audit", desc: "We'll analyze your physiology and specific operational constraints." },
                                    { icon: <Zap className="w-6 h-6" />, title: "Tactical Pivot", desc: "Immediate adjustments to your routine for instant performance results." },
                                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Zero Friction", desc: "Direct access to elite coaching. No automated boilerplates or generic templates." }
                                ].map((item, i) => (
                                    <div key={i} className="group flex gap-6">
                                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-[20px] flex items-center justify-center text-white group-hover:bg-scarlet transition-all duration-500 shrink-0 shadow-xl">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                                            <p className="text-white/80 text-sm leading-relaxed font-bold">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Indicator */}
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[35px] relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-scarlet scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="w-12 h-12 bg-scarlet/20 rounded-full flex items-center justify-center text-scarlet">
                                        <Trophy size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-black uppercase text-xs tracking-widest">Guaranteed Standards</p>
                                        <p className="text-steel text-[10px] font-bold uppercase tracking-wider mt-1">Professional Excellence Only</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: THE SCHEDULER */}
                        <div className="xl:col-span-8 reveal active">
                            <div className="relative group">
                                {/* Decorative border glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-scarlet/20 via-white/5 to-scarlet/20 rounded-[45px] blur-sm opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                                <div className="relative bg-[#111111] border-2 border-white/20 rounded-[40px] shadow-2xl overflow-hidden min-h-[750px] sm:min-h-[850px]">
                                    {/* Desktop Loader / Header */}
                                    <div className="w-full h-14 bg-white/10 border-b border-white/10 flex items-center justify-between px-8">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-scarlet/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                        </div>
                                        <div className="text-[11px] font-black text-white uppercase tracking-[4px]">OFFICIAL SCHEDULER</div>
                                        <div className="flex items-center gap-2 text-scarlet">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scarlet opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-scarlet"></span>
                                            </span>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white">LIVE SLOTS</span>
                                        </div>
                                    </div>

                                    {/* The Iframe with better container */}
                                    <div className="w-full h-full p-1 sm:p-4 bg-white/[0.02]">
                                        <iframe
                                            src="https://calendar.app.google/1q7FMW47477Tb1TLA"
                                            style={{ border: 0, borderRadius: '24px', filter: 'contrast(1.1) brightness(1.1)' }}
                                            width="100%"
                                            height="750"
                                            frameBorder="0"
                                            className="bg-transparent"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-8 px-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-white/10 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale opacity-50" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">+15 Slots Taken This Week</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-scarlet" size={16} />
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">End-to-End Encrypted Booking</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

// Icons with more technical feel
const Target = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="m12 8 4 4-4 4" />
        <path d="M8 12h8" />
    </svg>
);

const Zap = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export default Booking;
