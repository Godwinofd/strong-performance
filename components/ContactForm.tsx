import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        goals: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', goals: '' }); // Reset form
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
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
    );
};

export default ContactForm;
