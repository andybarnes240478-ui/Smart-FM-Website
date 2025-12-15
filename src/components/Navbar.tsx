import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: 'about' },
  { label: 'Products', href: 'products' },
  { label: 'Services', href: 'services' },
  { label: 'Contact', href: 'contact' },
];

interface NavbarProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Publish nav height (incl. safe-area padding + py changes) to CSS var: --nav-h
  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--nav-h', `${Math.ceil(h)}px`);
    };

    setVar();

    const ro = new ResizeObserver(() => setVar());
    ro.observe(el);

    window.addEventListener('resize', setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', setVar);
    };
  }, [isScrolled, mobileMenuOpen]);

  const handleNavClick = (item: NavItem) => {
    if (item.label === 'Services') {
      onNavigate('services');
    } else if (item.label === 'Products') {
      onNavigate('products');
    } else {
      onNavigate('home', item.href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        pt-[env(safe-area-inset-top)]
        ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-charcoal/90 backdrop-blur-sm py-4'}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home', 'home')}
          className="hover:opacity-90 transition-opacity"
          aria-label="Go to home"
        >
          <Logo lightMode={!isScrolled} />
        </button>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`font-medium transition-colors text-xs font-bold uppercase tracking-widest ${
                  isScrolled ? 'text-charcoal hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant={isScrolled ? 'primary' : 'ghost'}
            className={isScrolled ? '' : 'border-white/30 text-white hover:bg-white/10'}
            onClick={() => onNavigate('home', 'contact')}
          >
            Request a Demo
          </Button>
        </div>

        <button
          className={`md:hidden ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-charcoal font-medium text-lg py-3 border-b border-gray-100 text-left w-full"
            >
              {item.label}
            </button>
          ))}

          <Button
            className="w-full mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'contact');
            }}
          >
            Request a Demo
          </Button>
        </div>
      )}
    </nav>
  );
};