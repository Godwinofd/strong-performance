import React, { useState, useEffect } from 'react';
import { Trash2, ShieldCheck, Mail, Send, CheckCircle, ArrowRight, Lock, CreditCard, ShieldAlert, Cpu, Receipt, ArrowLeft, XCircle } from 'lucide-react';
import { useCart } from '../CartContext';
import { Link, useSearchParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

const Checkout: React.FC = () => {
  const { cart, removeFromCart, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success')) {
      setIsOrdered(true);
      clearCart();
    }
    if (searchParams.get('canceled')) {
      setIsCanceled(true);
    }
  }, [searchParams, clearCart]);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const customerEmail = formData.get('email') as string;
      const customerName = formData.get('name') as string;
      const shippingAddress = formData.get('address') as string;
      const phone = formData.get('phone') as string;

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: cart,
          customerEmail,
          customerName,
          shippingAddress,
          phone,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isCanceled) {
    return (
      <div className="min-h-screen pt-40 pb-20 bg-obsidian flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-white/10">
            <XCircle className="w-12 h-12 text-scarlet" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">CANCELED</h1>
          <p className="text-steel text-lg mb-12 font-medium">Your payment was canceled. No charges were made.</p>
          <button onClick={() => setIsCanceled(false)} className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/90 transition-all">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isOrdered) {
    return (
      <div className="min-h-screen pt-40 pb-20 bg-obsidian flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10 reveal active">
          <div className="w-24 h-24 bg-scarlet rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl border-4 border-white/20">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">SUCCESS</h1>
          <p className="text-steel text-lg mb-12 font-medium">Your order has been placed successfully. Check your email for confirmation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/" onClick={() => clearCart()} className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/90 transition-all">
              Return Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <Link to="/shop" className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wide">Continue Shopping</span>
          </Link>

          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            CHECKOUT
          </h1>
          <div className="flex items-center gap-2 text-scarlet">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Secure Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Checkout Form */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Customer Details</h3>
              </div>

              <form id="checkout-form" onSubmit={handleOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wide ml-2">Full Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white text-sm focus:border-scarlet/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wide ml-2">Email Address</label>
                  <input required name="email" type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white text-sm focus:border-scarlet/50 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wide ml-2">Shipping Address</label>
                  <input required name="address" type="text" placeholder="123 Street Name, City, Country" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white text-sm focus:border-scarlet/50 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wide ml-2">Phone Number</label>
                  <input name="phone" type="tel" placeholder="+44 7000 000000" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white text-sm focus:border-scarlet/50 transition-all" />
                </div>

                <div className="md:col-span-2 pt-10">
                  <button
                    type="submit"
                    disabled={isLoading || cart.length === 0}
                    className="w-full bg-scarlet text-white py-5 px-8 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-scarlet/90 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>Place Order • £{total}</>
                    )}
                  </button>
                  <p className="text-center text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] mt-6 leading-relaxed">
                    You will be redirected to our <span className="text-scarlet">Secure Checkout</span> to choose between <br />
                    Card, Google Pay, Apple Pay, or PayPal.
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-6 opacity-30">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">SSL Encrypted Transaction</span>
                  </div>
                </div>
              </form>
            </section>
          </div>

          {/* Right: Cart Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[#0D0D0D] border border-white/10 rounded-[30px] p-8 md:p-10 sticky top-32">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Order Summary</h3>
                <span className="text-xs font-bold text-steel bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest">
                  {cart.length} Items
                </span>
              </div>

              <div className="space-y-6 mb-10 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start group">
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-scarlet transition-colors">{item.name}</p>
                        <p className="text-xs text-steel font-medium opacity-60">Qty: {item.quantity}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-white font-bold text-sm">£{item.price * item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] font-bold text-scarlet uppercase tracking-widest mt-2 hover:text-white transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-10 text-center opacity-30">
                    <p className="text-xs font-bold uppercase tracking-widest">Cart Empty</p>
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex justify-between text-steel text-xs font-bold uppercase tracking-wide">
                  <span>Subtotal</span>
                  <span className="text-white">£{total}</span>
                </div>
                <div className="flex justify-between text-steel text-xs font-bold uppercase tracking-wide">
                  <span>Shipping</span>
                  <span className="text-white">Free</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-white/5 mt-4">
                  <span className="text-sm font-black text-white uppercase tracking-widest">Total</span>
                  <span className="text-3xl font-black text-white italic serif-font">£{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;