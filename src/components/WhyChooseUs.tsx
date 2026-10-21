import React from 'react';
import { WHY_CHOOSE_POINTS, COMPANY_INFO } from '../data/companyData';
import { 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  Shield, 
  MapPin, 
  Truck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'reliable-pickup-delivery':
        return <CheckCircle2 className="w-5 h-5 text-[#0D4F5C]" />;
      case 'professional-communication':
        return <PhoneCall className="w-5 h-5 text-[#0D4F5C]" />;
      case 'responsive-operations':
        return <Clock className="w-5 h-5 text-[#0D4F5C]" />;
      case 'safety-focused':
        return <Shield className="w-5 h-5 text-[#0D4F5C]" />;
      case 'nationwide-transport':
        return <MapPin className="w-5 h-5 text-[#0D4F5C]" />;
      case 'dependable-services':
        return <Truck className="w-5 h-5 text-[#0D4F5C]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#0D4F5C]" />;
    }
  };

  return (
    <section id="why-us" className="w-full py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              Carrier Commitment
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            Why Choose Us
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            A grounded carrier partner dedicated to clear communication, operational reliability, and safe transit.
          </p>
        </div>

        {/* 6 Simple, Professional Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHY_CHOOSE_POINTS.map((point) => (
            <div 
              key={point.id}
              className="bg-slate-50 p-5 rounded-lg border border-slate-200 flex items-start gap-3.5 hover:bg-white hover:shadow-xs transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-[#FFD13B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                {getIcon(point.id)}
              </div>

              <div>
                <h3 className="text-sm font-black text-[#0D4F5C] uppercase tracking-tight mb-1">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Contact Banner */}
        <div className="mt-6 p-4 sm:p-5 bg-[#0D4F5C] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 border-l-4 border-[#FFD13B]">
          <div>
            <h4 className="text-sm font-black uppercase font-logo text-white">
              Direct Dispatch Support Available
            </h4>
            <p className="text-xs text-slate-200 mt-0.5">
              Contact our team directly for load availability, lane quotes, and check calls.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.rawPhone}`}
            className="bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-none whitespace-nowrap shadow-xs transition-colors"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
