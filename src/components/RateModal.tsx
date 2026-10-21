import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, EQUIPMENT_LIST } from '../data/companyData';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface RateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEquipment?: string;
  onNavigateToPage?: (path: string) => void;
}

export const RateModal: React.FC<RateModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultEquipment,
  onNavigateToPage 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: defaultEquipment || 'Dry Vans',
    origin: '',
    destination: '',
    commodityNotes: '',
    smsConsent: false, // Unchecked by default per RingCentral requirement
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [consentTimestamp, setConsentTimestamp] = useState('');

  useEffect(() => {
    if (defaultEquipment) {
      setFormData((prev) => ({ ...prev, equipment: defaultEquipment }));
    }
  }, [defaultEquipment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'VET-' + Math.floor(100000 + Math.random() * 900000);
    const nowIso = new Date().toISOString();
    setRefId(generatedRef);
    setConsentTimestamp(nowIso);

    // Record SMS consent audit trail
    const consentRecord = {
      referenceId: generatedRef,
      phone: formData.phone,
      name: formData.name,
      company: formData.company,
      timestamp: nowIso,
      consentGranted: formData.smsConsent,
      consentText: "By checking this box, I consent to receive text messages related to delivery notifications and customer care from Veterans Community Health Support LLC . You can reply “STOP” at any time to opt-out. Message and data rates may apply. Message frequency may vary; text HELP to (951) 413-4908 for assistance. For more information, please refer to our privacy policy (https://vchsllc.com/privacy-policy), and SMS Terms and Conditions (https://vchsllc.com/sms-terms) on our website.",
      consentVersion: "v1.4-A2P-2026",
      source: "Rate Request Modal Window"
    };
    try {
      const existing = JSON.parse(localStorage.getItem('vchs_sms_consent_records') || '[]');
      existing.push(consentRecord);
      localStorage.setItem('vchs_sms_consent_records', JSON.stringify(existing));
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      equipment: defaultEquipment || 'Dry Vans',
      origin: '',
      destination: '',
      commodityNotes: '',
      smsConsent: false,
    });
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
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl z-10 overflow-hidden modal-smooth-in max-h-[95vh] flex flex-col">
        
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
              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="font-bold text-slate-700">SMS Consent Status:</span>
                  {formData.smsConsent ? (
                    <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded text-[11px] border border-emerald-300">
                      Opted In (Voluntary)
                    </span>
                  ) : (
                    <span className="text-slate-600 font-medium bg-slate-200/70 px-2 py-0.5 rounded text-[11px]">
                      Not Opted In
                    </span>
                  )}
                </div>
                {formData.smsConsent ? (
                  <div className="text-[11px] text-slate-600 space-y-1 pt-0.5">
                    <p>
                      Consent recorded for <span className="font-mono font-semibold text-slate-800">{formData.phone}</span>. You will receive non-promotional load coordination and dispatch text updates.
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Audit Timestamp: {consentTimestamp || new Date().toISOString()} | Version: v1.3-A2P-2026
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help.
                    </p>
                  </div>
                ) : (
                  <div className="text-[11px] text-slate-600 pt-0.5">
                    <p>
                      No SMS consent provided. All load confirmations and rate quotes will be communicated strictly via email to <span className="font-semibold text-slate-800">{formData.email}</span>. No automated text messages will be sent.
                    </p>
                  </div>
                )}
              </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

              {/* OPTIONAL SMS CONSENT CHECKBOX (RingCentral / A2P 10DLC Compliant) */}
              <div className="p-3 bg-slate-50 border border-slate-300 rounded-xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="modalSmsConsent"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData((prev) => ({ ...prev, smsConsent: e.target.checked }))}
                    className="mt-0.5 w-4 h-4 text-[#0D4F5C] accent-[#0D4F5C] border-slate-300 rounded focus:ring-[#0D4F5C] cursor-pointer shrink-0"
                  />
                  <label htmlFor="modalSmsConsent" className="text-[11px] text-slate-800 leading-relaxed cursor-pointer select-none">
                    <span className="font-bold text-slate-900 block mb-1">
                      (Optional) SMS Delivery Notifications &amp; Customer Care Consent:
                    </span>
                    By checking this box, I consent to receive text messages related to delivery notifications and customer care from <strong>Veterans Community Health Support LLC</strong> . You can reply &ldquo;<strong>STOP</strong>&rdquo; at any time to opt-out. Message and data rates may apply. Message frequency may vary; text <strong>HELP</strong> to (951) 413-4908 for assistance. For more information, please refer to our{' '}
                    <a
                      href="/privacy-policy"
                      onClick={(e) => {
                        if (onNavigateToPage) {
                          e.preventDefault();
                          onClose();
                          onNavigateToPage('/privacy-policy');
                        }
                      }}
                      className="font-bold text-[#0D4F5C] underline hover:text-[#155D69]"
                    >
                      privacy policy (https://vchsllc.com/privacy-policy)
                    </a>, and{' '}
                    <a
                      href="/sms-terms"
                      onClick={(e) => {
                        if (onNavigateToPage) {
                          e.preventDefault();
                          onClose();
                          onNavigateToPage('/sms-terms');
                        }
                      }}
                      className="font-bold text-[#0D4F5C] underline hover:text-[#155D69]"
                    >
                      SMS Terms and Conditions (https://vchsllc.com/sms-terms)
                    </a>{' '}
                    on our website.
                  </label>
                </div>
                <div className="text-[10px] text-slate-500 pl-6.5 pt-1.5 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-1">
                  <span>
                    Consent is voluntary &amp; not a condition of service or booking.
                  </span>
                  <span className="text-slate-400">
                    Mobile data is never sold or shared for 3rd-party marketing.
                  </span>
                </div>
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
