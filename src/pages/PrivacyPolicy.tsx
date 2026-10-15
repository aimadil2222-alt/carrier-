import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
  onNavigateToSmsTerms: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome, onNavigateToSmsTerms }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Veterans Community Health Support LLC';
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
              onClick={onNavigateToSmsTerms}
              className="font-bold text-[#0D4F5C] hover:underline cursor-pointer"
            >
              SMS Terms & Conditions &rarr;
            </button>
          </div>
        </div>

        {/* Legal Document Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#0D4F5C] text-[#FFD13B] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-xs mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>Official Carrier Policy</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo mb-2">
              PRIVACY POLICY
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Effective Date: October 15, 2026
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              1. Introduction
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              {COMPANY_INFO.legalName} (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you provide when visiting our website or communicating with our business.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              This Privacy Policy explains how we collect, use, maintain, and protect personal information in connection with our transportation and logistics operations, including communications with drivers, carriers, and business contacts.
            </p>
            <div className="p-3 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-xs rounded-r">
              <span className="font-bold">Important:</span> The company name above must be confirmed against the official legal and tax records before publication.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              2. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Depending on your interaction with our business, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Name and business contact information.</li>
              <li>Telephone numbers and email addresses.</li>
              <li>Carrier and transportation business information.</li>
              <li>Load-related information, including pickup and delivery details.</li>
              <li>Communication records relating to business inquiries and transportation services.</li>
              <li>SMS consent records and messaging preferences, where applicable.</li>
              <li>Technical information collected through our website, where applicable.</li>
            </ul>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We collect only information reasonably necessary for our business operations and applicable purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              3. How We Use Your Information
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We may use personal information to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Communicate with drivers, carriers, and business contacts.</li>
              <li>Share available load opportunities with individuals who have agreed to receive such messages.</li>
              <li>Coordinate load acceptance, pickup appointments, deliveries, and transportation details.</li>
              <li>Respond to business inquiries.</li>
              <li>Maintain records of business communications and SMS consent.</li>
              <li>Protect our services against fraud, misuse, and unauthorized access.</li>
              <li>Comply with applicable legal and regulatory requirements.</li>
            </ul>
            <p className="text-xs sm:text-sm leading-relaxed font-semibold text-slate-800">
              We do not intend to use this SMS program to send promotional marketing messages.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              4. SMS Communications and Consent
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Our business may use SMS text messages for non-promotional transportation and logistics communications, including load offers, load coordination, pickup and delivery updates, appointment confirmations, and related business discussions.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We will obtain the required consent before sending SMS messages, in accordance with applicable laws and messaging-provider requirements.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-bold text-slate-800">
              Providing a telephone number does not, by itself, constitute consent to receive SMS messages.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Where applicable, recipients may withdraw their consent by replying <span className="font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-900">STOP</span> to a text message.
            </p>
          </section>

          {/* Section 5 - A2P 10DLC Critical */}
          <section className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              5. Sharing of Personal Information
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We do not sell personal information collected through our SMS program.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-bold text-slate-900">
              We do not share mobile phone numbers or SMS opt-in consent information with third parties or affiliates for their own marketing or promotional purposes.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We may share information with service providers when reasonably necessary to operate our business, provide communications services, coordinate transportation, protect our systems, or comply with legal obligations.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Any sharing of SMS consent information will be handled in accordance with applicable requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              6. Data Security and Retention
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We use reasonable administrative, technical, and organizational measures intended to protect personal information from unauthorized access, loss, misuse, or disclosure.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We retain information for as long as reasonably necessary for business operations, recordkeeping, dispute resolution, and applicable legal requirements.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              No method of electronic storage or transmission can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              7. Your Choices and Rights
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Depending on applicable law, you may request access to, correction of, or deletion of certain personal information.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              You may also opt out of SMS communications by replying <span className="font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-900">STOP</span> to an SMS message.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              For assistance with SMS communications, reply <span className="font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-900">HELP</span> or contact us using the business contact information listed on our website.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              8. Third-Party Websites
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of websites that we do not operate.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We encourage visitors to review the privacy policies of those websites.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Our business SMS communications are intended for business contacts and are not directed toward children.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We do not knowingly collect personal information from children through an SMS program intended for business communications.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              We may update this Privacy Policy periodically to reflect changes in our business practices or applicable requirements.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Any revised version will be published on this page with an updated effective date.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-wide">
              11. Contact Us
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              For questions about this Privacy Policy or our handling of personal information, please contact us using the business email address or telephone number published on our official website.
            </p>
            
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm">
                {COMPANY_INFO.legalName}
              </div>
              <div className="text-slate-600 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0" />
                <span>{COMPANY_INFO.physicalAddress.full}</span>
              </div>
              <div className="text-slate-600 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0" />
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="font-bold text-slate-800 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="text-slate-600 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0D4F5C] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-800 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.email}
                </a>
                <span>/</span>
                <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-slate-700 hover:text-[#0D4F5C]">
                  {COMPANY_INFO.secondaryEmail}
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
