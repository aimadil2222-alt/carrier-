import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, ArrowLeft, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

interface SmsTermsProps {
  onNavigateHome: () => void;
  onNavigateToPrivacy: () => void;
}

export const SmsTerms: React.FC<SmsTermsProps> = ({ onNavigateHome, onNavigateToPrivacy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'SMS Terms & Conditions | Veterans Community Health Support LLC';
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D4F5C] hover:text-[#155D69] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&larr; Back to Carrier Home</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Related Legal Document:</span>
            <button
              onClick={onNavigateToPrivacy}
              className="font-bold text-[#0D4F5C] hover:underline cursor-pointer"
            >
              Privacy Policy &rarr;
            </button>
          </div>
        </div>

        {/* Legal Document Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#0D4F5C] text-[#FFD13B] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-xs mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Messaging Compliance & Carrier Agreement</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo mb-2">
              SMS TERMS & CONDITIONS
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Effective Date: October 15, 2026
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              1. Program Description
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              {COMPANY_INFO.legalName} provides non-promotional SMS communications relating to transportation and logistics business activities.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Messages may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Available freight and load offers.</li>
              <li>Responses to load inquiries.</li>
              <li>Load acceptance and coordination.</li>
              <li>Pickup and delivery updates.</li>
              <li>Appointment confirmations.</li>
              <li>Other relevant transportation and logistics communications.</li>
            </ul>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
              Messages are intended for drivers, carriers, and business contacts who have provided the required consent to receive such communications.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              2. Consent to Receive Messages
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              By opting in to our SMS program, you agree to receive non-promotional business-related text messages from our company concerning transportation and logistics activities.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Consent to receive SMS messages is not a condition of purchasing any goods or services.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We will obtain and maintain the required consent before sending messages.
            </p>
            <div className="p-3 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-xs rounded-r">
              <span className="font-bold">Important:</span> We must implement an actual consent process before using this section to represent our operational practices. Publishing these terms alone does not establish that a recipient has opted in.
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              3. Message Frequency
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Message frequency may vary depending on your business activities, the number of available load opportunities, and ongoing transportation coordination.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We do not guarantee a specific number of messages.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              4. Message and Data Rates
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Message and data rates may apply depending on your mobile carrier and wireless plan.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              You are responsible for any charges imposed by your mobile service provider.
            </p>
          </section>

          {/* Section 5 - STOP Keyword */}
          <section className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              5. How to Opt Out
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              You may opt out of SMS communications at any time by replying:
            </p>
            <div className="inline-block bg-[#0D4F5C] text-[#FFD13B] font-mono font-black text-sm px-4 py-2 rounded">
              STOP
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              After processing your opt-out request, we will stop sending further SMS messages covered by that opt-out, except where a message is permitted or required by applicable rules.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              If you wish to receive messages again, you must provide any consent required to resume communications.
            </p>
          </section>

          {/* Section 6 - HELP Keyword */}
          <section className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              6. Help and Support
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              For assistance with our SMS program, reply:
            </p>
            <div className="inline-block bg-[#0D4F5C] text-[#FFD13B] font-mono font-black text-sm px-4 py-2 rounded">
              HELP
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              You may also contact us through the business contact details provided on our website.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              Website:{' '}
              <a 
                href="https://www.vchsllc.com/" 
                className="font-bold text-[#0D4F5C] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://www.vchsllc.com/
              </a>
            </p>
          </section>

          {/* Section 7 - RingCentral / A2P 10DLC Critical */}
          <section className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              7. Privacy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We respect your privacy and handle personal information in accordance with our Privacy Policy.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-bold text-slate-900">
              Mobile phone numbers and SMS consent information will not be sold or shared with third parties or affiliates for their own marketing or promotional purposes.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              For more information, please review our Privacy Policy:
            </p>
            <div>
              <button
                onClick={onNavigateToPrivacy}
                className="font-bold text-[#0D4F5C] hover:underline text-xs sm:text-sm cursor-pointer"
              >
                https://www.vchsllc.com/privacy-policy
              </button>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              8. Supported Devices and Carriers
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              SMS delivery depends on your wireless carrier, mobile device, and network availability.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We are not responsible for delayed or undelivered messages caused by circumstances beyond our reasonable control.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              9. Changes to These Terms
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We may update these SMS Terms & Conditions periodically.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              The updated terms will be published on this page with a revised effective date when applicable.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              10. Contact Information
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              For questions about our SMS program or these Terms & Conditions, please contact us through the business email address or telephone number listed on our official website.
            </p>
            
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2 min-w-0 overflow-hidden">
              <div className="font-bold text-slate-900 text-sm break-words">
                {COMPANY_INFO.legalName}
              </div>
              <div className="text-slate-600 flex items-start gap-2 min-w-0">
                <MapPin className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0 mt-0.5" />
                <span className="break-words">{COMPANY_INFO.physicalAddress.full}</span>
              </div>
              <div className="text-slate-600 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0" />
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="font-bold text-slate-800 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="text-slate-600 flex flex-wrap items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-800 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.email}
                </a>
                <span>/</span>
                <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-slate-700 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.secondaryEmail}
                </a>
                <span>/</span>
                <a href={`mailto:${COMPANY_INFO.tertiaryEmail}`} className="text-slate-700 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.tertiaryEmail}
                </a>
              </div>
              <div className="text-slate-600 pt-1">
                Website:{' '}
                <a 
                  href="https://www.vchsllc.com/" 
                  className="font-bold text-[#0D4F5C] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.vchsllc.com/
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
