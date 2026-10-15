/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CarrierCredentials } from './components/CarrierCredentials';
import { Equipment } from './components/Equipment';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrokersAndShippers } from './components/BrokersAndShippers';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RateModal } from './components/RateModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SmsTerms } from './pages/SmsTerms';

function getInitialRoute(): 'home' | 'privacy-policy' | 'sms-terms' {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes('privacy-policy') || hash.includes('privacy-policy')) {
    return 'privacy-policy';
  }
  if (path.includes('sms-terms') || hash.includes('sms-terms')) {
    return 'sms-terms';
  }
  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy-policy' | 'sms-terms'>(getInitialRoute);
  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (path: string) => {
    let targetRoute: 'home' | 'privacy-policy' | 'sms-terms' = 'home';
    let targetUrl = '/';

    if (path.includes('privacy-policy')) {
      targetRoute = 'privacy-policy';
      targetUrl = '/privacy-policy';
    } else if (path.includes('sms-terms')) {
      targetRoute = 'sms-terms';
      targetUrl = '/sms-terms';
    }

    try {
      window.history.pushState({}, '', targetUrl);
    } catch {
      // Fallback in environments where pushState might be restricted
    }
    setCurrentRoute(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRateModal = (equipmentType?: string) => {
    setSelectedEquipment(equipmentType);
    setRateModalOpen(true);
  };

  const handleCloseRateModal = () => {
    setRateModalOpen(false);
    setSelectedEquipment(undefined);
  };

  const scrollToSection = (sectionId: string) => {
    if (currentRoute !== 'home') {
      navigateToPage('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#FFD13B] selection:text-[#0D4F5C]">
      {/* 1. Header with navigation bar, brand details, and separated page links */}
      <Header 
        onNavigateToSection={scrollToSection}
        onOpenRateModal={handleOpenRateModal}
        onNavigateToPage={navigateToPage}
        currentPage={currentRoute}
      />

      {/* 2. Main Page View Routing */}
      <main className="flex-1">
        {currentRoute === 'privacy-policy' && (
          <PrivacyPolicy 
            onNavigateHome={() => navigateToPage('/')}
            onNavigateToSmsTerms={() => navigateToPage('/sms-terms')}
          />
        )}

        {currentRoute === 'sms-terms' && (
          <SmsTerms 
            onNavigateHome={() => navigateToPage('/')}
            onNavigateToPrivacy={() => navigateToPage('/privacy-policy')}
          />
        )}

        {currentRoute === 'home' && (
          <>
            {/* Homepage Hero Section */}
            <Hero 
              onOpenRateModal={() => handleOpenRateModal()}
              onNavigateToSection={scrollToSection}
            />

            {/* Carrier Credentials Section */}
            <CarrierCredentials 
              onOpenRateModal={() => handleOpenRateModal()}
            />

            {/* Our Equipment Section */}
            <Equipment 
              onOpenRateModalWithEquipment={(eqName) => handleOpenRateModal(eqName)}
            />

            {/* Transportation Services Section */}
            <Services 
              onOpenRateModalWithService={() => handleOpenRateModal()}
            />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Brokers, Shippers & Logistics Partners Section */}
            <BrokersAndShippers 
              onOpenRateModal={() => handleOpenRateModal()}
            />

            {/* About Us Section */}
            <AboutUs />

            {/* Contact Section */}
            <Contact 
              onOpenRateModal={handleOpenRateModal}
              preselectedEquipment={selectedEquipment}
            />
          </>
        )}
      </main>

      {/* 3. Clean Footer with direct links to Privacy Policy & SMS Terms */}
      <Footer 
        onNavigateToSection={scrollToSection}
        onOpenRateModal={() => handleOpenRateModal()}
        onNavigateToPage={navigateToPage}
      />

      {/* 4. Request a Rate Modal */}
      <RateModal 
        isOpen={rateModalOpen}
        onClose={handleCloseRateModal}
        defaultEquipment={selectedEquipment}
      />
    </div>
  );
}
