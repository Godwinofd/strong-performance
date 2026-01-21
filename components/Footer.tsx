import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, ArrowUp, ArrowRight, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-obsidian pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Signature Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h2 className="text-[12rem] md:text-[20rem] font-black text-white/[0.02] uppercase tracking-tighter leading-none italic whitespace-nowrap serif-font">
          Bespoke Performance
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <img
                src="/images/logos/Strong performance white logo.png"
                alt="Strong Performance"
                className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-steel text-lg leading-relaxed max-w-md">
              Five years of authentic client transformations. Engineering bespoke paths to physical peak through data-driven methodology and human-centric coaching.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/zacjavid" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Mail, href: "mailto:hello@zacjavid.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-scarlet hover:border-scarlet hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-xs">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Training Plans', path: '/plans' },
                  { name: 'Shop Apparel', path: '/shop' },
                  { name: 'Client Stories', path: '/' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-steel hover:text-scarlet text-sm font-bold uppercase tracking-wider transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-scarlet mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-8 tracking-[0.3em] uppercase text-xs">Support</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Shipping Hub', path: '/shipping' },
                  { name: 'Returns Policy', path: '/returns' },
                  { name: 'Size Blueprint', path: '/size-guide' },
                  { name: 'Legal/Privacy', path: '/legal' },
                  { name: 'Support FAQ', path: '/faq' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-steel hover:text-white text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / Location */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-white font-black tracking-[0.3em] uppercase text-xs">Stay Updated</h3>
              <p className="text-steel text-xs font-bold leading-relaxed">
                Receive exclusive training insights and priority access to new capsule drops.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-charcoal/30 border border-white/10 p-4 pr-12 text-xs font-bold tracking-widest text-white outline-none focus:border-scarlet transition-colors"
                />
                <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-scarlet group-hover:bg-scarlet group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-start gap-3 text-steel text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-scarlet shrink-0" />
                <p>Performance Lab, Oxford</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
          <p className="text-steel text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-0">
            © {new Date().getFullYear()} ZAC JAVID PERSONAL TRAINING • DESIGNED FOR PERFORMANCE
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white font-black text-[10px] tracking-[0.3em] uppercase hover:text-scarlet transition-all"
          >
            Top of Page
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-scarlet group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;