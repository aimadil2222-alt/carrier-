import React, { useState } from 'react';
import { COMPANY_INFO, EQUIPMENT_LIST } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface ContactProps {
  onOpenRateModal: (preselectedEquipment?: string) => void;
  preselectedEquipment?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenRateModal, preselectedEquipment }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: preselectedEquipment || 'Dry Vans',
    origin: '',
    destination: '',
    commodityNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'VET-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              Direct Dispatch & Rate Inquiries
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            Contact & Rate Request
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            Connect with our team to request a rate confirmation, verify lane availability, or onboard our carrier packet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Official Company Details Card */}
          <div className="lg:col-span-5 bg-[#0D4F5C] text-white p-6 sm:p-7 rounded-lg shadow-md border-l-6 border-[#FFD13B] space-y-5">
            
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD13B] block mb-1">
                U.S. Motor Carrier Details
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase font-logo text-white leading-tight">
                {COMPANY_INFO.legalName}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="bg-[#FFD13B] text-[#0D4F5C] font-mono text-xs font-bold px-2 py-0.5 rounded-xs">
                  {COMPANY_INFO.mcNumber}
                </span>
                <span className="bg-white/15 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-xs">
                  USDOT {COMPANY_INFO.dotNumber}
                </span>
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase">
                  {COMPANY_INFO.operatingAuthority}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              {/* Clickable Phone Number on Mobile & Desktop */}
              <div className="flex items-start gap-3 p-3 rounded bg-white/10">
                <Phone className="w-4 h-4 text-[#FFD13B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-300 block">Phone (Click to Call)</span>
                  <a 
                    href={`tel:${COMPANY_INFO.rawPhone}`} 
                    className="text-base font-black text-white hover:text-[#FFD13B] transition-colors tracking-wide"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3 p-3 rounded bg-white/10">
                <Mail className="w-4 h-4 text-[#FFD13B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-300 block">Dispatch Emails</span>
                  <div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-xs font-bold text-white hover:text-[#FFD13B] transition-colors block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div>
                    <a 
                      href={`mailto:${COMPANY_INFO.secondaryEmail}`} 
                      className="text-xs text-slate-200 hover:text-[#FFD13B] transition-colors block break-all"
                    >
                      {COMPANY_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 p-3 rounded bg-white/10">
                <MapPin className="w-4 h-4 text-[#FFD13B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-300 block">Physical Address</span>
                  <span className="text-xs font-semibold text-white block">
                    {COMPANY_INFO.physicalAddress.street}
                  </span>
                  <span className="text-xs text-slate-200 block">
                    {COMPANY_INFO.physicalAddress.cityStateZip}
                  </span>
                </div>
              </div>

              {/* Mailing Address */}
              <div className="flex items-start gap-3 p-3 rounded bg-white/10">
                <MapPin className="w-4 h-4 text-[#FFD13B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-300 block">Mailing Address</span>
                  <span className="text-xs font-semibold text-white block">
                    {COMPANY_INFO.mailingAddress.street}
                  </span>
                  <span className="text-xs text-slate-200 block">
                    {COMPANY_INFO.mailingAddress.cityStateZip}
                  </span>
                </div>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => onOpenRateModal()}
                className="flex-1 bg-[#FFD13B] hover:bg-[#ebbe29] text-[#0D4F5C] font-black text-xs uppercase tracking-wider py-3 text-center shadow-xs transition-colors cursor-pointer"
              >
                Request a Rate
              </button>
              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="flex-1 bg-black hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3 text-center transition-colors cursor-pointer"
              >
                Contact Us
              </a>
            </div>

          </div>

          {/* RIGHT: Direct Rate Request Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-7 rounded-lg border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-[#0D4F5C] uppercase font-logo">
                  Rate Request Received
                </h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  Thank you, <span className="font-bold">{formData.name}</span>. Your request has been assigned reference ID:
                </p>
                <div className="inline-block bg-white border border-[#0D4F5C] text-[#0D4F5C] font-mono font-bold text-base px-5 py-1.5 rounded">
                  {refId}
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our dispatch operations will review equipment availability and reply to <span className="font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      equipment: 'Dry Vans',
                      origin: '',
                      destination: '',
                      commodityNotes: '',
                    });
                  }}
                  className="mt-4 bg-[#0D4F5C] hover:bg-[#155D69] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-none cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <h4 className="text-sm font-black text-[#0D4F5C] uppercase tracking-wide">
                    Request a Rate Online
                  </h4>
                  <p className="text-xs text-slate-500">
                    Provide load details below for prompt lane confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Broker / Shipper Company *
                    </label>
                    <input
                      type="text"
                      required
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="dispatcher@brokerage.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Equipment Type
                    </label>
                    <select
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    >
                      {EQUIPMENT_LIST.map((eq) => (
                        <option key={eq.id} value={eq.name}>
                          {eq.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Origin (City, State / ZIP) *
                    </label>
                    <input
                      type="text"
                      required
                      name="origin"
                      placeholder="e.g. Cleveland, OH"
                      value={formData.origin}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Destination (City, State / ZIP) *
                    </label>
                    <input
                      type="text"
                      required
                      name="destination"
                      placeholder="e.g. Dallas, TX"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Commodity & Load Details
                  </label>
                  <textarea
                    rows={3}
                    name="commodityNotes"
                    placeholder="Provide cargo details, pickup date, delivery window, or special requirements..."
                    value={formData.commodityNotes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D4F5C] hover:bg-[#155D69] text-white font-black text-xs uppercase tracking-wider py-3 rounded-none shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2 border-b-2 border-[#FFD13B]"
                >
                  <Send className="w-3.5 h-3.5 text-[#FFD13B]" />
                  <span>Submit Rate Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
