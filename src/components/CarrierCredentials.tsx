import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, CheckCircle2, FileText, Phone, Mail, Building, MapPin } from 'lucide-react';

interface CarrierCredentialsProps {
  onOpenRateModal: () => void;
}

export const CarrierCredentials: React.FC<CarrierCredentialsProps> = ({ onOpenRateModal }) => {
  return (
    <section id="credentials" className="w-full py-8 sm:py-12 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              FMCSA Verified Information
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            Carrier Credentials
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            Official operating authority and registration details for freight brokers, shippers, and logistics partners.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Legal Company Name */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Legal Entity Name
              </span>
              <h3 className="text-sm font-black text-[#0D4F5C] leading-snug">
                {COMPANY_INFO.legalName}
              </h3>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600">
              <Building className="w-3.5 h-3.5 text-[#0D4F5C]" />
              <span>Registered Freight Carrier</span>
            </div>
          </div>

          {/* Card 2: MC Number */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Motor Carrier Number
              </span>
              <div className="text-2xl font-black text-[#0D4F5C] font-mono tracking-tight">
                {COMPANY_INFO.rawMc}
              </div>
              <span className="text-xs font-bold text-[#FFD13B] bg-[#0D4F5C] px-2 py-0.5 rounded-xs inline-block mt-1">
                {COMPANY_INFO.mcNumber}
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600">
              <FileText className="w-3.5 h-3.5 text-[#0D4F5C]" />
              <span>Interstate Authority</span>
            </div>
          </div>

          {/* Card 3: USDOT Number */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                U.S. DOT Number
              </span>
              <div className="text-2xl font-black text-[#0D4F5C] font-mono tracking-tight">
                {COMPANY_INFO.dotNumber}
              </div>
              <span className="text-xs font-bold text-slate-700 block mt-1">
                USDOT: {COMPANY_INFO.dotNumber}
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0D4F5C]" />
              <span>Federal Registration</span>
            </div>
          </div>

          {/* Card 4: Operating Authority */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Operating Authority
              </span>
              <div className="text-2xl font-black text-emerald-600 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span>{COMPANY_INFO.operatingAuthority}</span>
              </div>
              <span className="text-xs text-slate-600 font-medium block mt-1">
                Authorized for property transport
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
              <span>Ready for Immediate Dispatch</span>
            </div>
          </div>

        </div>

        {/* Address & Quick Broker Packet Notice */}
        <div className="mt-5 p-4 sm:p-5 bg-white rounded-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-xs text-slate-700">
            <MapPin className="w-4 h-4 text-[#0D4F5C] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block text-xs">Official Carrier Address:</span>
              <span>Physical: {COMPANY_INFO.physicalAddress.full}</span>
              <span className="text-slate-400 mx-2">|</span>
              <span>Mailing: {COMPANY_INFO.mailingAddress.full}</span>
            </div>
          </div>

          <button
            onClick={onOpenRateModal}
            className="bg-[#0D4F5C] hover:bg-[#155D69] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none whitespace-nowrap shadow-xs transition-colors cursor-pointer"
          >
            Request Rate / Carrier Packet
          </button>
        </div>

      </div>
    </section>
  );
};
