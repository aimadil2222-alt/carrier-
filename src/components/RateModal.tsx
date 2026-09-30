import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, EQUIPMENT_LIST } from '../data/companyData';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface RateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEquipment?: string;
}

export const RateModal: React.FC<RateModalProps> = ({ isOpen, onClose, defaultEquipment }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: defaultEquipment || 'Dry Vans',
    origin: '',
    destination: '',
    commodityNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (defaultEquipment) {
      setFormData((prev) => ({ ...prev, equipment: defaultEquipment }));
    }
  }, [defaultEquipment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'VET-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0D4F5C] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#FFD13B]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD13B] block">
              {COMPANY_INFO.mcNumber} · USDOT {COMPANY_INFO.dotNumber}
            </span>
            <h3 className="text-lg sm:text-xl font-black uppercase text-white font-logo">
              Request a Rate Confirmation
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-full bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#0D4F5C] uppercase">
                Rate Request Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Reference ID: <span className="font-mono font-bold text-slate-900">{refId}</span>
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Our dispatch coordinator will review equipment capacity and reply to <span className="font-semibold text-slate-700">{formData.email}</span> with lane pricing promptly.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#0D4F5C] hover:bg-[#155D69] text-white font-bold text-xs uppercase tracking-wider rounded-none cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Broker / Shipper *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dispatcher@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                  Equipment Requested
                </label>
                <select
                  value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                >
                  {EQUIPMENT_LIST.map((eq) => (
                    <option key={eq.id} value={eq.name}>
                      {eq.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Origin *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, State / ZIP"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Destination *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, State / ZIP"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                  Commodity & Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Commodity type, pickup date, or special instructions..."
                  value={formData.commodityNotes}
                  onChange={(e) => setFormData({ ...formData, commodityNotes: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0D4F5C] hover:bg-[#155D69] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-none shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 border-b-2 border-[#FFD13B]"
              >
                <span>Submit Rate Request</span>
                <Send className="w-3.5 h-3.5 text-[#FFD13B]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
