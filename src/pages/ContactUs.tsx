import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, EQUIPMENT_LIST } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  Truck, 
  FileText,
  Shield,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface ContactUsProps {
  onNavigateHome: () => void;
  onNavigateToPrivacy: () => void;
  onNavigateToSmsTerms: () => void;
  onOpenRateModal?: (preselectedEquipment?: string) => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({
  onNavigateHome,
  onNavigateToPrivacy,
  onNavigateToSmsTerms,
  onOpenRateModal,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Veterans Community Health Support LLC';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: 'Dry Vans',
    origin: '',
    destination: '',
    commodityNotes: '',
    smsConsent: false, // Unchecked by default per A2P / RingCentral requirements
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [consentTimestamp, setConsentTimestamp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
      consentText: "By checking this box, I consent to receive text messages related to delivery notifications and customer care from Veterans Community Health Support LLC . You can reply “STOP” at any time to opt-out. Message and data rates may apply. Message frequency may vary; text HELP to (234) 900-8907 for assistance. For more information, please refer to our privacy policy (https://vchsllc.com/privacy-policy), and SMS Terms and Conditions (https://vchsllc.com/sms-terms) on our website.",
      consentVersion: "v1.4-A2P-2026",
      source: "Separated Contact Us Page (/contact)"
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

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D4F5C] hover:text-[#155D69] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Carrier Home</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="text-slate-400 hidden sm:inline">Policies:</span>
            <button
              onClick={onNavigateToPrivacy}
              className="font-bold text-[#0D4F5C] hover:underline cursor-pointer flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onNavigateToSmsTerms}
              className="font-bold text-[#0D4F5C] hover:underline cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>SMS Terms</span>
            </button>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="bg-[#0D4F5C] text-white rounded-lg p-6 sm:p-8 md:p-10 mb-8 border-l-8 border-[#FFD13B] shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-[#FFD13B] text-[#0D4F5C] font-mono text-xs font-black px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {COMPANY_INFO.mcNumber}
            </span>
            <span className="bg-white/15 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-xs">
              USDOT {COMPANY_INFO.dotNumber}
            </span>
            <span className="bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-xs uppercase">
              {COMPANY_INFO.operatingAuthority} Property Authority
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight font-logo text-white mb-3">
            CONTACT US &amp; DISPATCH OPERATIONS
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            Connect directly with <strong>{COMPANY_INFO.legalName}</strong> for freight capacity booking, immediate dispatch inquiries, lane pricing confirmations, or broker carrier onboarding.
          </p>
        </div>

        {/* Main Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* LEFT COLUMN: Official Contact Cards & Operating Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Channels Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-5">
              <h2 className="text-sm font-black text-[#0D4F5C] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FFD13B] fill-[#0D4F5C]" />
                <span>Direct Contact Channels</span>
              </h2>

              <div className="space-y-4 text-xs">
                {/* Telephone */}
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                    Direct Dispatch Phone (Click to Call)
                  </span>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0D4F5C] shrink-0" />
                    <a 
                      href={`tel:${COMPANY_INFO.rawPhone}`} 
                      className="text-base font-black text-[#0D4F5C] hover:text-[#155D69] tracking-wide"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Dispatch Emails */}
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">
                    Operations &amp; Dispatch Emails
                  </span>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#0D4F5C] shrink-0 mt-0.5" />
                    <div className="space-y-1 min-w-0 flex-1">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 block">Corporate Domain:</span>
                        <a 
                          href={`mailto:${COMPANY_INFO.email}`} 
                          className="font-bold text-[#0D4F5C] hover:underline break-all"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60">
                        <span className="text-[10px] font-bold text-slate-500 block">Operations Email:</span>
                        <a 
                          href={`mailto:${COMPANY_INFO.secondaryEmail}`} 
                          className="text-slate-700 hover:text-[#0D4F5C] break-all"
                        >
                          {COMPANY_INFO.secondaryEmail}
                        </a>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60">
                        <span className="text-[10px] font-bold text-slate-500 block">Dispatch Desk:</span>
                        <a 
                          href={`mailto:${COMPANY_INFO.tertiaryEmail}`} 
                          className="text-slate-700 hover:text-[#0D4F5C] break-all"
                        >
                          {COMPANY_INFO.tertiaryEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physical & Mailing Address */}
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0D4F5C] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase text-slate-500 block mb-0.5">
                        Physical Carrier Address
                      </span>
                      <span className="font-semibold text-slate-800 block break-words">
                        {COMPANY_INFO.physicalAddress.full}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/60">
                    <MapPin className="w-4 h-4 text-[#0D4F5C] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase text-slate-500 block mb-0.5">
                        Official Mailing Address
                      </span>
                      <span className="font-semibold text-slate-800 block break-words">
                        {COMPANY_INFO.mailingAddress.full}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-3">
              <h2 className="text-sm font-black text-[#0D4F5C] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-4 h-4 text-[#FFD13B]" />
                <span>Operating &amp; Support Hours</span>
              </h2>

              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold">Dispatch Office:</span>
                  <span className="text-slate-600 font-mono">Mon – Fri: 7:00 AM – 6:00 PM EST</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold">Weekend Dispatch:</span>
                  <span className="text-slate-600 font-mono">Sat: 8:00 AM – 2:00 PM EST</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold">In-Transit Live Freight:</span>
                  <span className="font-bold text-emerald-700 font-mono">24/7 / 365 On-Call</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-semibold">Online Rate Confirmation:</span>
                  <span className="text-slate-600 font-mono">Replies within 15–30 Mins</span>
                </li>
              </ul>
            </div>

            {/* Carrier Verification Callout */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>FMCSA &amp; DOT Verified Carrier</span>
              </div>
              <p className="text-emerald-800 leading-relaxed">
                Operating under active federal authority with full property carriage insurance. Brokers and shippers can review active safety ratings directly on the FMCSA SAFER system.
              </p>
              <div className="pt-1">
                <a
                  href={`https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=MC_MX&query_string=${COMPANY_INFO.rawMc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-emerald-900 hover:text-emerald-950 underline"
                >
                  <span>Verify MC 1760354 on SAFER</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Inquiry & Rate Request Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0D4F5C] uppercase font-logo">
                  Inquiry &amp; Rate Request Submitted
                </h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  Thank you, <span className="font-bold">{formData.name}</span>. Your request has been assigned reference ID:
                </p>
                <div className="inline-block bg-slate-50 border border-[#0D4F5C] text-[#0D4F5C] font-mono font-black text-lg px-6 py-2 rounded">
                  {refId}
                </div>

                {/* SMS Consent Audit Display */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">SMS Consent Record:</span>
                    {formData.smsConsent ? (
                      <span className="text-emerald-700 font-bold bg-emerald-100 px-2.5 py-0.5 rounded text-[11px] border border-emerald-300">
                        Opted In (Voluntary)
                      </span>
                    ) : (
                      <span className="text-slate-600 font-medium bg-slate-200 px-2.5 py-0.5 rounded text-[11px]">
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

                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our dispatch coordinator is reviewing equipment availability and will reply to <span className="font-semibold text-slate-800">{formData.email}</span> shortly.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
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
                        smsConsent: false,
                      });
                    }}
                    className="bg-[#0D4F5C] hover:bg-[#155D69] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={onNavigateHome}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
                    Online Inquiry &amp; Rate Request Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    Complete the details below for prompt load coordination or lane pricing confirmation.
                  </p>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
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
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="dispatcher@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
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
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                {/* Equipment & Lane Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Equipment Type
                    </label>
                    <select
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
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
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
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
                      className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                    />
                  </div>
                </div>

                {/* Commodity & Notes */}
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Commodity &amp; Shipment Notes
                  </label>
                  <textarea
                    rows={3}
                    name="commodityNotes"
                    placeholder="Provide freight description, target pickup/delivery date, weight, or special handling instructions..."
                    value={formData.commodityNotes}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 rounded-none focus:outline-hidden focus:border-[#0D4F5C]"
                  />
                </div>

                {/* EXACT MANDATORY OPTIONAL SMS CONSENT CHECKBOX (RingCentral / A2P 10DLC) */}
                <div className="p-4 bg-slate-50 border border-slate-300 rounded-xs space-y-2">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="pageContactSmsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData((prev) => ({ ...prev, smsConsent: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 text-[#0D4F5C] accent-[#0D4F5C] border-slate-300 rounded focus:ring-[#0D4F5C] cursor-pointer shrink-0"
                    />
                    <label htmlFor="pageContactSmsConsent" className="text-[11px] text-slate-800 leading-relaxed cursor-pointer select-none">
                      <span className="font-bold text-slate-900 block mb-1">
                        (Optional) SMS Delivery Notifications &amp; Customer Care Consent:
                      </span>
                      By checking this box, I consent to receive text messages related to delivery notifications and customer care from <strong>Veterans Community Health Support LLC</strong> . You can reply &ldquo;<strong>STOP</strong>&rdquo; at any time to opt-out. Message and data rates may apply. Message frequency may vary; text <strong>HELP</strong> to (234) 900-8907 for assistance. For more information, please refer to our{' '}
                      <button
                        type="button"
                        onClick={onNavigateToPrivacy}
                        className="font-bold text-[#0D4F5C] underline hover:text-[#155D69] cursor-pointer"
                      >
                        privacy policy (https://vchsllc.com/privacy-policy)
                      </button>, and{' '}
                      <button
                        type="button"
                        onClick={onNavigateToSmsTerms}
                        className="font-bold text-[#0D4F5C] underline hover:text-[#155D69] cursor-pointer"
                      >
                        SMS Terms and Conditions (https://vchsllc.com/sms-terms)
                      </button>{' '}
                      on our website.
                    </label>
                  </div>
                  <div className="text-[10px] text-slate-500 pl-6.5 pt-1.5 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-1">
                    <span>
                      Consent is voluntary &amp; not a condition of service or booking freight.
                    </span>
                    <span className="text-slate-400">
                      Mobile data is never sold or shared for 3rd-party marketing.
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0D4F5C] hover:bg-[#155D69] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-none shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2 border-b-2 border-[#FFD13B]"
                >
                  <Send className="w-4 h-4 text-[#FFD13B]" />
                  <span>Submit Inquiry &amp; Request Rate</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Support & FAQ Grid */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-[#0D4F5C]" />
            <h3 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              Frequently Asked Questions &amp; Carrier Inquiries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">
                How quickly does dispatch respond to rate requests?
              </h4>
              <p className="leading-relaxed text-slate-600">
                During standard dispatch hours (Monday – Friday, 7:00 AM – 6:00 PM EST), our operations team reviews equipment availability and responds with firm rate quotes typically within 15 to 30 minutes.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">
                What equipment types does Veterans Community Health Support LLC operate?
              </h4>
              <p className="leading-relaxed text-slate-600">
                We operate Dry Vans, Box Trucks (commercial freight), Refrigerated (Reefer) Units, Flatbed Trailers, and Expedited Hotshot transports across regional and interstate shipping corridors.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">
                How can brokers obtain carrier packets and COI?
              </h4>
              <p className="leading-relaxed text-slate-600">
                Brokers and shippers may request our onboarding packet, W-9, and Certificate of Insurance (COI) by emailing our dispatch team directly at <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#0D4F5C] underline">{COMPANY_INFO.email}</a> or using the form above.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm">
                How are load tracking and pickup/delivery notifications handled?
              </h4>
              <p className="leading-relaxed text-slate-600">
                If you elect to receive voluntary SMS updates, our dispatch coordinator will send real-time pickup confirmations, in-transit milestones, and delivery receipt notices. You can opt out at any time by replying STOP.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
