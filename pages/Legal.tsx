import React from 'react';
import { X, ShieldCheck, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Legal: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen relative animate-in fade-in duration-500">
            {/* Close Button implementation as requested */}
            <Link to="/" className="fixed top-24 right-6 md:top-32 md:right-12 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-scarlet hover:border-scarlet transition-all duration-300 shadow-2xl group">
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </Link>

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-scarlet font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Compliance & Trust</span>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                        Legal <span className="text-scarlet italic serif-font">Framework</span>
                    </h1>
                    <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
                        Transparency is key. Below are the terms that govern our relationship and how we protect your data.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* MEDICAL DISCLAIMER - CRITICAL FOR GYM */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[30px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-scarlet/10 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="flex items-start gap-6 relative z-10">
                            <div className="w-12 h-12 bg-scarlet/20 rounded-xl flex items-center justify-center shrink-0 text-scarlet border border-scarlet/20">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Medical Disclaimer</h3>
                                <div className="text-steel text-sm leading-relaxed space-y-3 font-medium text-justify">
                                    <p>
                                        <strong>Consult Your Physician:</strong> You should consult your physician or other health care professional before starting this or any other fitness program to determine if it is right for your needs. This is particularly true if you (or your family) have a history of high blood pressure or heart disease, or if you have ever experienced chest pain when exercising or have experienced chest pain in the past month when not engaged in physical activity.
                                    </p>
                                    <p>
                                        <strong>Risk Assumption:</strong> By using our plans or services, you understand that there is a risk of injury associated with participating in any form of physical activity. You specifically assume all risk for your injury and hold Strong Performance harmless for your use of these programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PRIVACY POLICY */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[30px]">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-white border border-white/10">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Privacy Policy</h3>
                                <div className="text-steel text-sm leading-relaxed space-y-4 text-justify font-medium">
                                    <p>
                                        <strong>Data Collection:</strong> We collect only the information necessary to process your orders and provide personalized training. This includes your name, email, shipping address, and payment details processed securely via Stripe.
                                    </p>
                                    <p>
                                        <strong>Data Usage:</strong> Your data is used strictly for order fulfillment, coaching communication, and improvement of our services. We do not sell, trade, or rent your personal identification information to others.
                                    </p>
                                    <p>
                                        <strong>Security:</strong> We implement a variety of security measures to maintain the safety of your personal information. All payment transactions are processed through a gateway provider (Stripe) and are not stored or processed on our servers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TERMS OF SERVICE */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[30px]">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-white border border-white/10">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Terms of Service</h3>
                                <div className="text-steel text-sm leading-relaxed space-y-4 text-justify font-medium">
                                    <p>
                                        <strong>Intellectual Property:</strong> All content included on this site, such as text, graphics, logos, images, and training plans, is the property of Strong Performance and protected by international copyright laws.
                                    </p>
                                    <p>
                                        <strong>Digital Products:</strong> Due to the nature of digital goods (Training Plans), all sales are final once the download link has been provided. Refunds are only considered in exceptional circumstances at the sole discretion of Strong Performance.
                                    </p>
                                    <p>
                                        <strong>Apparel Returns:</strong> Physical goods may be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-white/10">
                        <p className="text-white/30 text-[10px] uppercase tracking-widest">
                            Last Updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Legal;
