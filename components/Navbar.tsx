import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PLANS', path: '/plans' },
    { name: 'CONSULTATION', path: '/booking' },
    { name: 'SHOP', path: '/shop' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-xl'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="relative z-[110] group flex items-center gap-3"
          >
            <img
              src="/images/logos/Strong performance white logo.png"
              alt="Strong Performance"
              className="h-8 md:h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="hidden sm:block w-px h-6 bg-white/10 mx-2"></div>
            <span className="hidden sm:block text-[8px] font-black tracking-[0.4em] text-white/40 uppercase">Personal Training</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[10px] font-black tracking-[0.25em] transition-all duration-300 hover:text-white group py-2 ${isActive ? 'text-white' : 'text-white/50'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-scarlet transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                    }`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6 relative z-[110]">
            <Link
              to="/checkout"
              className="relative group p-2 hover:bg-white/5 rounded-full transition-all duration-300"
            >
              <ShoppingCart className={`w-5 h-5 transition-colors duration-300 ${itemCount > 0 ? 'text-scarlet' : 'text-white/80 group-hover:text-white'}`} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-scarlet text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-[0_4px_10px_rgba(220,20,60,0.3)]">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              to="/booking"
              className="inline-flex cta-base cta-primary !py-1 !pl-3 sm:!pl-6 !min-h-[36px] sm:!min-h-[46px] !gap-2 sm:!gap-4 !text-[9px] sm:!text-[11px]"
            >
              <span className="hidden min-[380px]:inline">GET STARTED</span>
              <span className="min-[380px]:hidden">START</span>
              <div className="cta-icon-circle !w-6 !h-6 sm:!w-8 sm:!h-8">
                <ArrowRight className="w-3 h-3 sm:w-4 h-4" />
              </div>
            </Link>

            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[200] flex flex-col transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/logos/Strong performance white logo.png"
              alt="Strong Performance"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:text-scarlet transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-grow flex flex-col justify-center items-center gap-10 pb-20">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black tracking-tighter uppercase transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${location.pathname === link.path ? 'text-scarlet' : 'text-white hover:text-scarlet'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;