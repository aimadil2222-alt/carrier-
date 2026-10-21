import React from 'react';
import { TRANSPORTATION_SERVICES } from '../data/companyData';
import { CheckCircle2, Truck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenRateModalWithService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenRateModalWithService }) => {
  return (
    <section id="services" className="w-full py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              What We Do
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            Transportation Services
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            Dependable commercial freight transportation services engineered for freight brokers, shippers, and supply chain partners.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TRANSPORTATION_SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs hover:border-[#0D4F5C] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#0D4F5C]/10 text-[#0D4F5C] flex items-center justify-center group-hover:bg-[#FFD13B] transition-colors">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0D4F5C] uppercase tracking-tight mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Available Lane Transit
                </span>
                <button
                  onClick={() => onOpenRateModalWithService(service.title)}
                  className="text-xs font-bold text-[#0D4F5C] hover:text-[#155D69] uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Request Rate</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
