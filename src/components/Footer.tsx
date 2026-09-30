import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, ShieldCheck, Truck } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenRateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection, onOpenRateModal }) => {
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavigateToSection(sectionId);
  };

  return (
    <footer className="w-full bg-[#0D4F5C] text-white pt-8 pb-6 px-4 sm:px-6 border-t-4 border-[#FFD13B]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-white/10 text-xs">
          
          {/* Col 1: Company Profile */}
          <div className="space-y-3">
            <div className="bg-[#FFD13B] text-[#0D4F5C] font-black text-xs uppercase px-2.5 py-1 inline-block">
              U.S. FREIGHT CARRIER
            </div>
            <h4 className="text-sm font-black uppercase text-white font-logo leading-tight">
              {COMPANY_INFO.legalName}
            </h4>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Professional and dependable freight transportation services for brokers, shippers, and logistics partners nationwide.
            </p>
            <div className="pt-1 text-[11px] text-slate-300 space-y-0.5 font-mono">
              <div>{COMPANY_INFO.mcNumber}</div>
              <div>USDOT: {COMPANY_INFO.dotNumber}</div>
              <div className="text-emerald-400 font-bold">Authority: {COMPANY_INFO.operatingAuthority}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 className="text-xs font-black uppercase text-[#FFD13B] tracking-wider mb-3">
              Carrier Navigation
            </h5>
            <ul className="space-y-2 text-slate-200">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-[#FFD13B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#credentials" onClick={(e) => handleLinkClick(e, 'credentials')} className="hover:text-[#FFD13B] transition-colors">
                  Carrier Credentials
                </a>
              </li>
              <li>
                <a href="#equipment" onClick={(e) => handleLinkClick(e, 'equipment')} className="hover:text-[#FFD13B] transition-colors">
                  Our Equipment
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFD13B] transition-colors">
                  Transportation Services
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us')} className="hover:text-[#FFD13B] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#brokers" onClick={(e) => handleLinkClick(e, 'brokers')} className="hover:text-[#FFD13B] transition-colors">
                  Brokers & Shippers
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#FFD13B] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Equipment Overview */}
          <div>
            <h5 className="text-xs font-black uppercase text-[#FFD13B] tracking-wider mb-3">
              Our Equipment
            </h5>
            <ul className="space-y-2 text-slate-200 text-xs">
              <li>Box Trucks</li>
              <li>Hotshot</li>
              <li>Dry Vans</li>
              <li>Other Available Equipment</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10">
              <button
                onClick={onOpenRateModal}
                className="text-[11px] font-bold text-[#FFD13B] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Request a Lane Rate &rarr;
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Addresses */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-black uppercase text-[#FFD13B] tracking-wider mb-3">
              Direct Contact
            </h5>
            <div className="flex items-center gap-2 text-slate-200">
              <Phone className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
              <a href={`tel:${COMPANY_INFO.rawPhone}`} className="hover:text-[#FFD13B] font-bold">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Mail className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FFD13B] truncate">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2 text-slate-300 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FFD13B] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.physicalAddress.full}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-300 text-center sm:text-left">
          <div>
            &copy; 2026 <span className="font-bold text-white">{COMPANY_INFO.legalName}</span>. All rights reserved.
          </div>
          <div className="text-slate-400">
            {COMPANY_INFO.mcNumber} · USDOT {COMPANY_INFO.dotNumber} · Operating Authority: Active
          </div>
        </div>

      </div>
    </footer>
  );
};
