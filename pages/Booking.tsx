import React from 'react';
import { Calendar, Video, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const Booking: React.FC = () => {
    return (
        <div className="pt-20 bg-obsidian min-h-screen">
            {/* HERO SECTION */}
            <section className="relative py-24 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-scarlet/10 via-obsidian to-obsidian"></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-scarlet/10 border border-scarlet/20 rounded-full mb-8 reveal active">
                        <span className="w-2 h-2 bg-scarlet rounded-full animate-pulse"></span>
                        <span className="text-scarlet font-bold tracking-widest uppercase text-[10px]">Limited Slots Available</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none reveal active">
                        FREE <br /><span className="text-white italic serif-font tracking-normal">Consultation.</span>
                    </h1>

                    <p className="text-steel text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-80 mb-12 reveal active">
                        Take the first step towards elite performance. Book a 15-minute Google Meet deep dive to discuss your goals and choose the perfect roadmap.
                    </p>
                </div>
            </section>

            {/* BOOKING SECTION */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT: Info & Value Props */}
                        <div className="lg:col-span-5 space-y-12 reveal active">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Why Book a Call?</h2>
                                <p className="text-steel font-medium leading-relaxed">
                                    Our consultation is designed to remove guesswork. We'll analyze your current state and map out your path to absolute excellence.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: <Target className="w-6 h-6" />, title: "Precision Mapping", desc: "Identify the exact training protocol suited for your unique biomechanics." },
                                    { icon: <Zap className="w-6 h-6" />, title: "Immediate Tactics", desc: "Walk away with actionable advice you can implement today." },
                                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Zero Pressure", desc: "It's a free discovery call. No strings, just high-value strategic planning." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-scarlet group-hover:bg-scarlet group-hover:text-white transition-all duration-500 shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
                                            <p className="text-steel text-sm leading-relaxed opacity-60 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-[30px] space-y-4">
                                <div className="flex items-center gap-3 text-scarlet font-black tracking-widest text-[10px] uppercase">
                                    <Video className="w-4 h-4" />
                                    Google Meet Integration
                                </div>
                                <p className="text-white text-sm font-bold">
                                    A Google Meet link will be automatically generated and sent to your email once the booking is confirmed.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Booking Interface */}
                        <div className="lg:col-span-7 reveal active">
                            <div className="bg-[#0D0D0D] border border-white/10 rounded-[40px] p-2 overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 bg-scarlet/5 blur-3xl rounded-full"></div>
                                <div className="relative z-10 min-h-[700px]">
                                    {/* Google Calendar Appointment Schedule Iframe */}
                                    <iframe
                                        src="https://calendar.app.google/1q7FMW47477Tb1TLA"
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="700"
                                        frameBorder="0"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <p className="text-steel text-xs font-bold uppercase tracking-widest opacity-40">
                                    Secure Booking Powered by Google Calendar
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

// Internal icons needed
const Target = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const Zap = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export default Booking;
