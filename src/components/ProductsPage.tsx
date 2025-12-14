import React from 'react';
import {
  Smartphone,
  ShieldCheck,
  FileText,
  Calculator,
  RefreshCw,
  CheckCircle
} from 'lucide-react';
import { Button } from './Button';

interface ProductsPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div id="products" className="pt-24">

      {/* INTRO */}
      <section className="bg-charcoal text-white py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            One Platform. One Spine.
          </h1>
          <p className="text-gray-400 text-xl">
            Smartech replaces fragmented tools with a connected operational system —
            from inspection through to delivered work and long-term asset planning.
          </p>
        </div>
      </section>

      {/* FIELD SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Smartphone className="text-primary" size={36} />
              <div>
                <h4 className="uppercase text-primary text-sm font-bold tracking-widest">
                  Core Platform
                </h4>
                <h2 className="font-heading text-4xl font-bold text-charcoal">
                  Smartech Field Services
                </h2>
              </div>
            </div>

            <p className="text-gray-600 text-lg">
              The operational backbone of Smartech. Manage work orders, engineers,
              subcontractors, costs, and SLAs — all in one system.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Work order creation & dispatch',
                'Mobile-first, offline capable',
                'SLA tracking & escalation',
                'Time, materials & cost capture'
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="text-sm font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <Button onClick={() => onNavigate('home', 'contact')}>
              Get Field Services
            </Button>
          </div>

          <div className="bg-charcoal h-80 rounded-xl shadow-xl" />
        </div>
      </section>

      {/* CONTROL PACK */}
      <section className="py-24 bg-lightgray">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-charcoal h-80 rounded-xl shadow-xl order-last lg:order-first" />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-primary" size={36} />
              <div>
                <h4 className="uppercase text-primary text-sm font-bold tracking-widest">
                  Control Pack (Add-On)
                </h4>
                <h2 className="font-heading text-4xl font-bold text-charcoal">
                  Inspection & Evidence
                </h2>
              </div>
            </div>

            <p className="text-gray-600 text-lg">
              Standardise inspections, lock down compliance evidence, and manage defects
              as real operational objects — not comments or PDFs.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'PM & inspection templates',
                'Photo & signature capture',
                'Immutable audit trails',
                'Structured defect register'
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="text-sm font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 italic">
              Requires Smartech Field Services
            </p>

            <Button variant="outline" onClick={() => onNavigate('home', 'contact')}>
              Add Control Pack
            </Button>
          </div>
        </div>
      </section>

      {/* QUOTER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Calculator className="text-primary" size={36} />
              <h2 className="font-heading text-4xl font-bold text-charcoal">
                Smartech Quoter
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              Convert defects into approved spend before work begins.
              Control margins, approvals, and scope — then generate work orders automatically.
            </p>

            <Button variant="outline" onClick={() => onNavigate('home', 'contact')}>
              Add Quoter
            </Button>
          </div>

          <div className="bg-charcoal h-72 rounded-xl shadow-xl" />
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          <RefreshCw className="text-primary mx-auto" size={40} />
          <h2 className="font-heading text-4xl font-bold">
            Smartech Lifecycle
          </h2>
          <p className="text-gray-400 text-lg">
            Use real inspection, defect, and work data to forecast asset replacement,
            plan capital spend, and optimise long-term risk.
          </p>

          <Button onClick={() => onNavigate('home', 'contact')}>
            Explore Lifecycle (Enterprise)
          </Button>
        </div>
      </section>
    </div>
  );
};

