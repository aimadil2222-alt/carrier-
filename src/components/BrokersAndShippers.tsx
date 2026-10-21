import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface BrokersAndShippersProps {
  onOpenRateModal: () => void;
}

export const BrokersAndShippers: React.FC<BrokersAndShippersProps> = ({ onOpenRateModal }) => {
  return (
    <section id="brokers" className="w-full py-8 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#FFD13B] text-[#0D4F5C] px-3 py-1 font-bold text-xs uppercase tracking-wider mb-3">
            Carrier Partnership
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-logo mb-4">
            Brokers, Shippers & Logistics Partners
          </h2>

          {/* Required Prompt Text */}
          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mb-6">
            We work with freight brokers, shippers, and logistics partners to provide dependable transportation solutions and professional communication from pickup through delivery.
          </p>

          {/* Partner Commitments - Clean Written Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-8">
            <div className="p-4 bg-white/10 rounded-md border border-white/10">
              <div className="flex items-center gap-2 font-bold text-xs text-[#FFD13B] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fast Onboarding</span>
              </div>
              <p className="text-[11px] text-slate-300">
                W-9, Certificate of Insurance (COI), and operating authority packet readily available.
              </p>
            </div>

            <div className="p-4 bg-white/10 rounded-md border border-white/10">
              <div className="flex items-center gap-2 font-bold text-xs text-[#FFD13B] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clear Check-In Calls</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Timely arrival, loaded, rolling, and delivery notifications on every assigned lane.
              </p>
            </div>

            <div className="p-4 bg-white/10 rounded-md border border-white/10">
              <div className="flex items-center gap-2 font-bold text-xs text-[#FFD13B] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Prompt Paperwork</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Clean signed Bills of Lading (BOL) and delivery receipts returned without delays.
              </p>
            </div>
          </div>

          {/* Required Request a Rate Button */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenRateModal}
              className="bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3 shadow-xl transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Request a Rate</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 border border-white/20 transition-colors"
            >
              Email Dispatch Packet
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
