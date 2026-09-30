import React from 'react';
import { COMPANY_INFO, heroFreightTruck } from '../data/companyData';
import { ShieldCheck, Truck, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenRateModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRateModal, onNavigateToSection }) => {
  return (
    <section 
      id="home"
      aria-label="Veterans Health Freight Transportation Hero"
      className="relative w-full overflow-hidden bg-slate-950 select-none min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex items-center"
    >
      {/* BACKGROUND IMAGE - CRISP U.S. FREIGHT TRUCK VISIBLE ON PHONES & DESKTOPS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFreightTruck}
          alt="Veterans Health commercial freight truck hauling on highway"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-100 contrast-100"
        />
        {/* Balanced scrim keeping photo visible while giving text 100% legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/60 sm:to-transparent" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
        <div className="max-w-2xl bg-black/60 sm:bg-black/50 backdrop-blur-[3px] p-5 sm:p-7 rounded-lg border-l-4 border-[#FFD13B] shadow-2xl">
          
          {/* Positioning Category Tag */}
          <div className="inline-flex items-center gap-1.5 bg-[#0D4F5C] px-3 py-1 text-white border-l-2 border-[#FFD13B] shadow-sm mb-3">
            <Truck className="w-3.5 h-3.5 text-[#FFD13B]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-100">
              U.S. Motor Carrier · Active Authority
            </span>
          </div>

          {/* Prompt-Specific Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
            Reliable Freight Transportation <span className="text-[#FFD13B]">Across the United States</span>
          </h1>

          {/* Prompt-Specific Subheading */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed mb-6 max-w-xl">
            Professional and dependable transportation services for brokers, shippers, and logistics partners.
          </p>

          {/* Action Buttons: Request a Rate + Contact Us */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={onOpenRateModal}
              className="bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Request a Rate</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => onNavigateToSection('contact')}
              className="bg-[#0D4F5C] hover:bg-[#155D69] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 border border-white/20 shadow-lg transition-colors cursor-pointer active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Quick Carrier Verification Bar */}
          <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-2 text-[11px] sm:text-xs text-slate-200">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">MC Number</span>
              <span className="font-mono font-bold text-white text-xs sm:text-sm text-[#FFD13B]">{COMPANY_INFO.mcNumber}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">USDOT Number</span>
              <span className="font-mono font-bold text-white text-xs sm:text-sm">{COMPANY_INFO.dotNumber}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Authority Status</span>
              <span className="font-bold text-emerald-400 text-xs sm:text-sm flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {COMPANY_INFO.operatingAuthority}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
