import React from 'react';
import { Smartphone, ShieldCheck, Calculator, FileText, RefreshCw, LayoutGrid, Zap, Check } from 'lucide-react';
import { Button } from './Button';

const products = [
  {
    id: "field-services",
    title: "Smartech Field Services",
    subtitle: "Work Order Management",
    icon: Smartphone,
    description: "The operational heart of your facility management. Orchestrate your mobile workforce with real-time job deployment, live status tracking, and seamless communication between back-office and field engineers.",
    features: [
      "Real-time dispatch & scheduling",
      "Offline-capable mobile app",
      "SLA tracking & breach alerts",
      "Automated client updates"
    ]
  },
  {
    id: "inspection",
    title: "Smartech Inspection",
    subtitle: "Planned Maintenance & Audits",
    icon: ShieldCheck,
    description: "Move from reactive chaos to planned precision. Utilize our extensive library of industry-standard maintenance plans (SFG20 aligned) or configure bespoke inspection workflows to suit unique asset classes.",
    features: [
      "Drag-and-drop form builder",
      "Pre-loaded compliance templates",
      "Photo & signature capture",
      "Auto-trigger remedial works"
    ]
  },
  {
    id: "quoter",
    title: "Smartech Quoter",
    subtitle: "Commercial Intelligence",
    icon: Calculator,
    description: "A powerful quoting engine designed specifically for the FM sector. Track opportunities, manage margins, and increase conversion rates with professional, data-driven proposals that integrate directly with your price books.",
    features: [
      "Dynamic margin analysis",
      "One-click proposal generation",
      "Approval workflow automation",
      "Conversion rate analytics"
    ]
  },
  {
    id: "evidence",
    title: "Smartech Evidence",
    subtitle: "Digital Compliance Logbook",
    icon: FileText,
    description: "The 'Golden Thread' of your building's compliance. A secure, immutable digital repository for all statutory documentation, ensuring you are audit-ready at a moment's notice.",
    features: [
      "Statutory compliance dashboard",
      "Defect & remedial tracking",
      "Contractor portal access",
      "QR code asset integration"
    ]
  },
  {
    id: "lifecycle",
    title: "Smartech Lifecycle",
    subtitle: "Strategic Asset Planning",
    icon: RefreshCw,
    description: "A complete suite for asset collection, validation, and capital planning. Turn physical asset data into long-term financial forecasts and optimize the total cost of ownership across your estate.",
    features: [
      "10-year CapEx forecasting",
      "Condition monitoring degradation curves",
      "Nrm3 aligned reporting",
      "Scenario modeling"
    ]
  }
];

const VapewearPlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full h-full min-h-[400px] bg-charcoal relative overflow-hidden flex items-center justify-center border-t-4 border-primary/50">
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
      }}
    ></div>

    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-t from-primary to-transparent opacity-20 blur-xl"></div>

    <div className="relative z-10 text-center p-8 border border-primary/30 bg-charcoal/80 backdrop-blur-sm max-w-xs">
      <div className="flex justify-center mb-4">
        <div className="animate-pulse">
           <Zap className="text-primary w-12 h-12" />
        </div>
      </div>
      <h3 className="text-white font-heading font-bold text-2xl mb-2 tracking-wider">COMING SOON</h3>
      <p className="text-primary text-xs uppercase tracking-[0.2em]">{title}</p>
      <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-primary w-1/2 animate-pulse"></div>
      </div>
    </div>
  </div>
);

interface ProductsPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      
      <section className="bg-charcoal text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <Zap size={14} fill="currentColor" /> The Smartech Suite
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Operating System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Built Environments</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A modular SaaS ecosystem designed to digitize every aspect of facility management. 
            Deploy individual modules or leverage the full suite for total operational synergy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => onNavigate('home', 'contact')}>Book a Demo</Button>
            <Button variant="outline" onClick={() => document.getElementById('product-list')?.scrollIntoView({ behavior: 'smooth'})}>
              Explore Modules
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-gray-200 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-lightgray text-primary rounded-xl">
              <LayoutGrid size={28} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-charcoal">Integrated Ecosystem</h3>
              <p className="text-gray-500 text-sm">Data flows seamlessly between all modules.</p>
            </div>
          </div>
          
          <div className="hidden md:block h-10 w-px bg-gray-200"></div>

          <div className="flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-wide">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Cloud Native</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> API First</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Enterprise Security</span>
          </div>
        </div>
      </section>

      <section id="product-list" className="py-24 bg-lightgray">
        <div className="container mx-auto px-6 space-y-32">
          {products.map((product, idx) => (
            <div key={product.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-card flex items-center justify-center text-primary">
                    <product.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{product.subtitle}</h4>
                    <h2 className="font-heading text-4xl font-bold text-charcoal">{product.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium text-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white" onClick={() => onNavigate('home', 'contact')}>
                    Get {product.title}
                  </Button>
                </div>
              </div>

              <div className="flex-1 w-full h-full">
                <div className="relative overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500 bg-charcoal">
                  <VapewearPlaceholder title={product.title} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-20 text-center text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-4xl font-bold mb-6">Build Your Custom Stack</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Start with the module you need most, or implement the full suite for a comprehensive digital transformation. Our team will help you configure the perfect setup.
          </p>
          <Button onClick={() => onNavigate('home', 'contact')}>
            Schedule a Product Tour
          </Button>
        </div>
      </section>

    </div>
  );
};
