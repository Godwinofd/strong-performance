import React from 'react';
import { Mail, Instagram, Clock, MapPin, Send, ArrowRight, Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        {/* Background Image with optimized filter */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dddvmez6s/image/upload/v1768666066/pexels-eyecon-design-500632474-17211446_rricpx.jpg"
            alt="Gym"
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: Testimonial & Value Prop (UNCHANGED) */}
            <div className="lg:col-span-6 space-y-12 reveal active">
              <div className="space-y-6">
                <span className="text-scarlet font-black tracking-[0.5em] uppercase text-xs block">Direct Access</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase mb-6 leading-[0.9] tracking-tighter">
                  LET'S <span className="text-scarlet italic serif-font">SCHEDULE</span> <br /> YOUR FIRST SESSION
                </h1>
                <p className="text-steel text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                  Inquire today to receive your bespoke biological profiling and initial laboratory consultation.
                </p>
              </div>

              {/* Verified Badge & Stars */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">4.9/5 Client Satisfaction</span>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4285F4]">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white block">Google Verified</span>
                    <span className="text-[9px] font-bold text-steel uppercase">Authority Partner</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="relative p-8 bg-charcoal/30 backdrop-blur-xl border border-white/5 rounded-[30px] max-w-md group overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-scarlet/10 transition-colors" />
                <p className="text-white italic text-lg mb-6 leading-relaxed relative z-10">
                  "Zac didn't just give me a workout; he gave me a blueprint for a new life. The bespoke approach is the only way to train."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-scarlet/50">
                    <img src="https://res.cloudinary.com/dddvmez6s/image/upload/v1768672620/Image_17-01-2026_at_17.55_vpwj4p.jpg" alt="Philip Thompson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest block text-white">Philip Thompson</span>
                    <span className="text-[9px] font-bold text-scarlet uppercase tracking-widest">Transformation Client</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Optimized Contact Form */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end reveal active">
              <div className="max-w-xl w-full">
                <div className="bg-black/95 backdrop-blur-3xl p-10 md:p-14 rounded-[50px] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative transition-all duration-500">

                  {status === 'success' ? (
                    <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Message Sent</h3>
                      <p className="text-steel font-medium mb-8">We have received your inquiry. A coach will be in touch shortly.</p>
                      <button onClick={() => setStatus('idle')} className="text-scarlet font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">Send Another Message</button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-12">
                        <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-3">Get In Touch</h3>
                        <p className="text-steel text-sm font-medium opacity-60">Ready to start your transformation?</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2 text-left">
                          <label htmlFor="name" className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Your Name</label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet focus:bg-white/10 transition-all shadow-inner"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <label htmlFor="email" className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Email Address</label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm focus:border-scarlet focus:bg-white/10 transition-all shadow-inner"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <label htmlFor="goals" className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Your Goals</label>
                          <textarea
                            name="goals"
                            value={formData.goals}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Tell us about your fitness goals..."
                            className="w-full bg-white/5 border border-white/10 p-6 rounded-[25px] outline-none text-white text-sm resize-none focus:border-scarlet focus:bg-white/10 transition-all shadow-inner"
                          ></textarea>
                        </div>

                        <div className="pt-8 w-full">
                          <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-scarlet rounded-full h-[70px] flex items-center justify-between px-8 transition-all hover:bg-white hover:text-black group disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-black">
                              {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                            </span>

                            {!status.includes('loading') && (
                              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                                <ArrowRight className="w-5 h-5 text-scarlet group-hover:text-white" />
                              </div>
                            )}
                          </button>
                        </div>

                        {status === 'error' && (
                          <p className="text-red-500 text-xs font-bold text-center uppercase tracking-widest animate-pulse">Failed to send. Please try again.</p>
                        )}

                        <div className="flex items-center justify-center gap-3 pt-10 opacity-40">
                          <ShieldCheck className="w-4 h-4 text-scarlet" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-white">Your Privacy is Protected</span>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;