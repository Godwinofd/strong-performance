import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-scarlet transition-colors">{question}</span>
                <span className={`text-scarlet transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-steel leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-obsidian min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">
                    Support <span className="text-scarlet italic serif-font">FAQ</span>
                </h1>

                <div className="space-y-2">
                    <FAQItem
                        question="How are training plans delivered?"
                        answer="All plans are delivered digitally via email immediately after purchase. You'll receive a secure link to access your program."
                    />
                    <FAQItem
                        question="Can I swap my size?"
                        answer="Yes. Please refer to our Returns Policy page for details on how to exchange sizes within 30 days."
                    />
                    <FAQItem
                        question="Do you offer international shipping?"
                        answer="Yes, we ship globally. International shipping times vary between 5-10 business days depending on location."
                    />
                    <FAQItem
                        question="Is the payment gateway secure?"
                        answer="We use industry-standard encryption (Stripe) to ensure your payment details are 100% secure."
                    />
                </div>

            </div>
        </div>
    );
};

export default FAQ;
