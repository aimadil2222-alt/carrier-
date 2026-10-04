import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck,
  Truck,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenRateModal: (equipmentType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToSection, onOpenRateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  return (
    <header className="w-full relative z-40 bg-white">
      {/* 1. TOP YELLOW BRAND BAR - CLEAN TEXT-BASED COMPANY NAME */}
      <div className="w-full bg-[#FFD13B] py-2 sm:py-2.5 px-4 border-b border-[#e5ba2b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="font-logo text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide text-[#0D4F5C] uppercase select-none hover:opacity-95 transition-opacity"
          >
            {COMPANY_INFO.legalName}
          </a>
          <span className="text-[11px] sm:text-xs font-bold text-[#0D4F5C] uppercase tracking-wider">
            {COMPANY_INFO.tagline}
          </span>
        </div>
      </div>

      {/* 2. DARK TEAL CREDENTIALS & CONTACT BAR */}
      <div className="w-full bg-[#0D4F5C] text-white py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-center md:text-left text-xs">
          
          {/* Verified Carrier Credentials */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center gap-1 bg-[#155D69] text-white text-[11px] font-bold px-2 py-0.5 rounded-xs border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD13B]" />
              <span>{COMPANY_INFO.mcNumber}</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-[#155D69] text-white text-[11px] font-bold px-2 py-0.5 rounded-xs border border-white/10">
              <span>USDOT: {COMPANY_INFO.dotNumber}</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white text-[10px] font-black px-1.5 py-0.5 rounded-xs uppercase tracking-wider">
              Authority: {COMPANY_INFO.operatingAuthority}
            </span>
          </div>

          {/* Direct Phone & Email Contact */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <Phone className="w-3.5 h-3.5 text-[#FFD13B] fill-[#FFD13B] shrink-0" />
              <a 
                href={`tel:${COMPANY_INFO.rawPhone}`} 
                className="hover:text-[#FFD13B] transition-colors tracking-wide"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <span className="text-white/30 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <Mail className="w-3.5 h-3.5 text-[#FFD13B] shrink-0" />
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="hover:text-[#FFD13B] transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <div className="w-full bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          
          {/* Mobile Menu Button / Simple Carrier Identifier */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-10 h-10 bg-[#FFD13B] hover:bg-[#ebbe29] active:scale-95 text-[#0D4F5C] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="hidden lg:flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-[#0D4F5C] text-[#FFD13B] flex items-center justify-center font-black text-sm">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-[#0D4F5C] leading-none">
                  U.S. FREIGHT CARRIER
                </span>
                <span className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">
                  Cleveland, OH · Active Authority
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-bold text-slate-700 uppercase tracking-wide">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('credentials')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Credentials
            </button>
            <button
              onClick={() => handleNavClick('equipment')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Our Equipment
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('brokers')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Brokers & Shippers
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#0D4F5C] hover:border-b-2 hover:border-[#FFD13B] py-1 transition-all cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons: Request a Rate + Contact Us */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => onOpenRateModal()}
              className="bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black text-xs px-3 sm:px-4 py-2 uppercase tracking-wider transition-colors cursor-pointer active:scale-95 shadow-xs"
            >
              Request a Rate
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-black hover:bg-slate-800 text-white font-bold text-xs px-3 sm:px-4 py-2 uppercase tracking-wider transition-colors cursor-pointer active:scale-95 shadow-xs"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-[#0D4F5C] text-white h-full overflow-y-auto shadow-2xl flex flex-col p-5 z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="flex items-start justify-between pb-3 border-b border-white/15">
              <div>
                <div className="bg-[#FFD13B] text-[#0D4F5C] px-2.5 py-1 text-xs font-black uppercase tracking-wider inline-block">
                  VETERANS COMMUNITY HEALTH
                </div>
                <div className="text-[10px] text-slate-200 font-bold mt-1.5 space-y-0.5">
                  <div>{COMPANY_INFO.mcNumber} · USDOT {COMPANY_INFO.dotNumber}</div>
                  <div className="text-emerald-300">Authority: {COMPANY_INFO.operatingAuthority}</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-full bg-white/10"
                aria-label="Close Navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="py-3 flex flex-col gap-1 text-sm font-semibold">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Home</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('credentials')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Carrier Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('equipment')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Our Equipment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Transportation Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('why-us')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Why Choose Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('brokers')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Brokers & Shippers</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-between text-left py-2 px-2 rounded hover:bg-white/10 text-white"
              >
                <span>Contact Information</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
            </div>

            {/* Direct Contact Footer */}
            <div className="mt-auto pt-4 border-t border-white/15 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Phone className="w-3.5 h-3.5 text-[#FFD13B]" />
                <a href={`tel:${COMPANY_INFO.rawPhone}`}>{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-3.5 h-3.5 text-[#FFD13B]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="truncate">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFD13B] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.physicalAddress.full}</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRateModal();
                  }}
                  className="w-full bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black py-2.5 text-center uppercase tracking-wider text-xs shadow-xs"
                >
                  Request a Rate
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-black hover:bg-slate-900 text-white font-bold py-2 text-center uppercase tracking-wider text-xs"
                >
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
