import React from 'react';
import BespokeScheduler from '../components/BespokeScheduler';
import { Video, Clock, MessageSquare, ArrowRight, ShieldCheck, Target, Zap, Waves, Brain, Trophy } from 'lucide-react';

const Booking: React.FC = () => {
    return (
        <div className="pt-20 bg-obsidian min-h-screen selection:bg-scarlet selection:text-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-scarlet/20 via-obsidian/90 to-obsidian"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-scarlet/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-scarlet/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-10 reveal active shadow-2xl backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scarlet opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-scarlet"></span>
                        </span>
                        <span className="text-white font-black tracking-[0.3em] uppercase text-[10px]">Complimentary Performance Call</span>
                    </div>

                    <h1 className="text-6xl md:text-[10rem] font-black mb-8 uppercase tracking-tighter leading-[0.85] reveal active italic text-white">
                        MASTER YOUR <br /><span className="text-scarlet not-italic tracking-[-0.05em]">FITNESS.</span>
                    </h1>

                    <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-bold mb-12 reveal active leading-relaxed">
                        Book a 15-minute consultation to discuss your specific goals and discover the most effective roadmap for your elite lifestyle.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 reveal active">
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Video size={16} className="text-scarlet" />
                            Consultation Call
                        </div>
                        <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div>
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Clock size={16} className="text-scarlet" />
                            15 Min Strategy
                        </div>
                        <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div>
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/90">
                            <Brain size={16} className="text-scarlet" />
                            Personalized Path
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
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Why Choose <br /><span className="text-scarlet font-black uppercase tracking-tighter leading-[0.85] italic">Strong Performance?</span></h2>
                                <p className="text-white text-lg font-bold leading-relaxed">
                                    Our consultation is designed to understand your vision and build a sustainable, elite-level training strategy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-10">
                                {[
                                    { icon: <Target className="w-6 h-6" />, title: "Goal Analysis", desc: "We'll define your objectives and the exact metrics needed to hit them." },
                                    { icon: <Zap className="w-6 h-6" />, title: "Strategic Planning", desc: "A high-level look at the training splits and nutrition that fit your life." },
                                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Expert Support", desc: "Direct guidance from a professional trainer. No generic advice." }
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

                                {/* Custom Bespoke Scheduler */}
                                <BespokeScheduler />
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

export default Booking;
