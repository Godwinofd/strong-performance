import React from 'react';

const Shipping: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                    Shipping <span className="text-scarlet italic serif-font">Hub</span>
                </h1>
                <div className="space-y-6 text-steel text-lg leading-relaxed">
                    <p>
                        We process all orders within 24 hours. Your performance gear is deployed with priority handling to ensure minimal downtime between purchase and training.
                    </p>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-12 mb-4">Delivery Protocols</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">UK Standard:</strong> 2-4 Business Days</li>
                        <li><strong className="text-white">UK Express:</strong> Next Day Delivery (Order before 2pm)</li>
                        <li><strong className="text-white">International:</strong> 5-10 Business Days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
