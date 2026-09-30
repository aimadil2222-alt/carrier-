import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Building, ShieldCheck, MapPin, Truck } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="w-full py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              Company Overview
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            About Us
          </h2>
        </div>

        {/* Written Content Box */}
        <div className="bg-white rounded-lg border-2 border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          {/* Required Prompt Text */}
          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
            <strong className="text-[#0D4F5C]">{COMPANY_INFO.legalName}</strong> provides freight transportation services for brokers, shippers, and logistics partners. Our focus is on dependable transportation, professional communication, and reliable pickup and delivery services.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Operating under active federal authority (<span className="font-semibold text-slate-800">{COMPANY_INFO.mcNumber}</span>, <span className="font-semibold text-slate-800">USDOT {COMPANY_INFO.dotNumber}</span>), we offer responsive carrier capacity tailored to meet commercial shipping demands. We maintain direct dispatcher contact to ensure every load receives the attention and care required.
          </p>

          {/* Written Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs">
              <span className="font-bold text-[#0D4F5C] uppercase text-[10px] block mb-1">
                Headquarters
              </span>
              <span className="text-slate-700 font-medium">{COMPANY_INFO.physicalAddress.full}</span>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs">
              <span className="font-bold text-[#0D4F5C] uppercase text-[10px] block mb-1">
                Operating Authority
              </span>
              <span className="text-emerald-700 font-bold block">{COMPANY_INFO.operatingAuthority} (Property Carrier)</span>
              <span className="text-slate-500 text-[11px]">{COMPANY_INFO.mcNumber}</span>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs">
              <span className="font-bold text-[#0D4F5C] uppercase text-[10px] block mb-1">
                Carrier Positioning
              </span>
              <span className="text-slate-700 font-medium">Brokers, Shippers & Logistics Partners</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
