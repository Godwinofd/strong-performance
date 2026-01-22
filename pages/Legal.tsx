import React from 'react';

const Legal: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                    Legal / <span className="text-scarlet italic serif-font">Privacy</span>
                </h1>
                <div className="space-y-8 text-steel text-sm leading-relaxed">

                    <section>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Privacy Policy</h3>
                        <p className="mb-4">
                            We respect your privacy. We only collect information necessary to process your orders and improve your training experience. We do not sell your data to third parties.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Terms of Service</h3>
                        <p className="mb-4">
                            By using this website, you agree to our terms. All content is copyright Strong Performance.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Medical Disclaimer</h3>
                        <p className="mb-4">
                            Consult with a physician before beginning any exercise program. Strong Performance is not responsible for any injuries sustained during training.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Legal;
