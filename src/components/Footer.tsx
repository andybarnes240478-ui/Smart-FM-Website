import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div onClick={() => onNavigate('home', 'home')} className="cursor-pointer">
               <Logo />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering businesses with intelligent facility management solutions. We maintain your world so you can focus on building yours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-lightgray flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-lightgray flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-lightgray flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-lightgray flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate('home', 'home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('home', 'about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Products</button></li>
              <li><button onClick={() => onNavigate('home', 'contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Field Services</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Inspection</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Quoter</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Evidence</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors">Lifecycle</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('cookies')} className="hover:text-primary transition-colors">Cookie Policy</button></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Smartech FM. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Designed with <span className="text-primary">♦</span> Precision
          </p>
        </div>
      </div>
    </footer>
  );
};