import React from 'react';

const SizeGuide: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                    Size <span className="text-scarlet italic serif-font">Blueprint</span>
                </h1>
                <div className="space-y-12 text-steel text-lg leading-relaxed">

                    {/* T-Shirts */}
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">T-Shirts</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Size</th>
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Chest (inches)</th>
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Length (inches)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium">
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">S</td>
                                        <td className="py-4">36-38"</td>
                                        <td className="py-4">28"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">M</td>
                                        <td className="py-4">38-40"</td>
                                        <td className="py-4">29"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">L</td>
                                        <td className="py-4">40-42"</td>
                                        <td className="py-4">30"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">XL</td>
                                        <td className="py-4">42-44"</td>
                                        <td className="py-4">31"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">XXL</td>
                                        <td className="py-4">44-46"</td>
                                        <td className="py-4">32"</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tracksuits */}
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">Tracksuits</h3>
                        <p className="mb-4 text-sm opacity-80">Fits true to size. Athletic cut.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Size</th>
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Waist (inches)</th>
                                        <th className="py-4 pr-8 text-white font-black uppercase text-sm">Inseam (inches)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium">
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">S</td>
                                        <td className="py-4">28-30"</td>
                                        <td className="py-4">30"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">M</td>
                                        <td className="py-4">30-32"</td>
                                        <td className="py-4">31"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">L</td>
                                        <td className="py-4">32-34"</td>
                                        <td className="py-4">32"</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4">XL</td>
                                        <td className="py-4">34-36"</td>
                                        <td className="py-4">32.5"</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
