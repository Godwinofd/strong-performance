import React from 'react';

const Returns: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                    Returns <span className="text-scarlet italic serif-font">Policy</span>
                </h1>
                <div className="space-y-6 text-steel text-lg leading-relaxed">
                    <p>
                        We stand by our quality. If your gear doesn't meet your standards, you have 30 days from receipt to initiate a return.
                    </p>
                    <p>
                        Items must be unworn, unwashed, and in their original packaging with tags attached.
                    </p>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-12 mb-4">How to Return</h3>
                    <p>
                        Contact <a href="mailto:support@zacjavid.com" className="text-scarlet hover:text-white transition-colors">support@zacjavid.com</a> with your Order ID to receive a return authorization label.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Returns;
