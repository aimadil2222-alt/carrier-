import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenRateModal: () => void;
  onNavigateToPage: (pagePath: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateToSection, 
  onOpenRateModal,
  onNavigateToPage 
}) => {
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavigateToPage('/');
    setTimeout(() => {
      onNavigateToSection(sectionId);
    }, 50);
  };

  const handlePageClick = (e: React.MouseEvent, pagePath: string) => {
    e.preventDefault();
    onNavigateToPage(pagePath);
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

          {/* Col 3: Legal & Messaging Policies (A2P 10DLC & RingCentral Requirement) */}
          <div>
            <h5 className="text-xs font-black uppercase text-[#FFD13B] tracking-wider mb-3">
              Policies & Compliance
            </h5>
            <ul className="space-y-2.5 text-slate-200 text-xs">
              <li>
                <a 
                  href="/privacy-policy" 
                  onClick={(e) => handlePageClick(e, '/privacy-policy')}
                  className="inline-flex items-center gap-1.5 hover:text-[#FFD13B] font-semibold transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
                  <span>Privacy Policy</span>
                </a>
                <span className="block text-[10px] text-slate-400 pl-5 font-mono">
                  /privacy-policy
                </span>
              </li>
              <li className="pt-1">
                <a 
                  href="/sms-terms" 
                  onClick={(e) => handlePageClick(e, '/sms-terms')}
                  className="inline-flex items-center gap-1.5 hover:text-[#FFD13B] font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
                  <span>SMS Terms &amp; Conditions</span>
                </a>
                <span className="block text-[10px] text-slate-400 pl-5 font-mono">
                  /sms-terms
                </span>
              </li>
              <li className="pt-1">
                <a 
                  href="/contact" 
                  onClick={(e) => handlePageClick(e, '/contact')}
                  className="inline-flex items-center gap-1.5 hover:text-[#FFD13B] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
                  <span>Contact Us Page</span>
                </a>
                <span className="block text-[10px] text-slate-400 pl-5 font-mono">
                  /contact
                </span>
              </li>
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
              <div className="flex items-start gap-2 text-slate-200">
                <Mail className="w-3.5 h-3.5 text-[#FFD13B] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FFD13B] font-bold truncate">
                    {COMPANY_INFO.email}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="hover:text-[#FFD13B] text-slate-300 truncate">
                    {COMPANY_INFO.secondaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.tertiaryEmail}`} className="hover:text-[#FFD13B] text-slate-300 truncate">
                    {COMPANY_INFO.tertiaryEmail}
                  </a>
                </div>
              </div>
            <div className="flex items-start gap-2 text-slate-300 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FFD13B] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.physicalAddress.full}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Policy Links */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-300 text-center md:text-left">
          <div>
            &copy; 2026 <span className="font-bold text-white">{COMPANY_INFO.legalName}</span>. All rights reserved.
          </div>
          
          {/* Explicit Quick Footer Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <a 
              href="/contact" 
              onClick={(e) => handlePageClick(e, '/contact')}
              className="text-slate-200 hover:text-[#FFD13B] font-semibold underline underline-offset-2 transition-colors"
            >
              Contact Us
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="/privacy-policy" 
              onClick={(e) => handlePageClick(e, '/privacy-policy')}
              className="text-slate-300 hover:text-[#FFD13B] underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="/sms-terms" 
              onClick={(e) => handlePageClick(e, '/sms-terms')}
              className="text-slate-300 hover:text-[#FFD13B] underline underline-offset-2 transition-colors"
            >
              SMS Terms &amp; Conditions
            </a>
          </div>

          <div className="text-slate-400">
            {COMPANY_INFO.mcNumber} · USDOT {COMPANY_INFO.dotNumber} · Operating Authority: Active
          </div>
        </div>

      </div>
    </footer>
  );
};
