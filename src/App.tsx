/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<string | undefined>(undefined);

  const handleOpenRateModal = (equipmentType?: string) => {
    setSelectedEquipment(equipmentType);
    setRateModalOpen(true);
  };

  const handleCloseRateModal = () => {
    setRateModalOpen(false);
    setSelectedEquipment(undefined);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#FFD13B] selection:text-[#0D4F5C]">
      {/* 1. Header with confirmed company name and verified credentials */}
      <Header 
        onNavigateToSection={scrollToSection}
        onOpenRateModal={handleOpenRateModal}
      />

      <main className="flex-1">
        {/* 2. Homepage Hero Section */}
        <Hero 
          onOpenRateModal={() => handleOpenRateModal()}
          onNavigateToSection={scrollToSection}
        />

        {/* 3. Carrier Credentials Section */}
        <CarrierCredentials 
          onOpenRateModal={() => handleOpenRateModal()}
        />

        {/* 4. Our Equipment Section */}
        <Equipment 
          onOpenRateModalWithEquipment={(eqName) => handleOpenRateModal(eqName)}
        />

        {/* 5. Transportation Services Section */}
        <Services 
          onOpenRateModalWithService={() => handleOpenRateModal()}
        />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Brokers, Shippers & Logistics Partners Section */}
        <BrokersAndShippers 
          onOpenRateModal={() => handleOpenRateModal()}
        />

        {/* 8. About Us Section */}
        <AboutUs />

        {/* 9. Contact Section */}
        <Contact 
          onOpenRateModal={handleOpenRateModal}
          preselectedEquipment={selectedEquipment}
        />
      </main>

      {/* 10. Clean Footer */}
      <Footer 
        onNavigateToSection={scrollToSection}
        onOpenRateModal={() => handleOpenRateModal()}
      />

      {/* 11. Request a Rate Modal */}
      <RateModal 
        isOpen={rateModalOpen}
        onClose={handleCloseRateModal}
        defaultEquipment={selectedEquipment}
      />
    </div>
  );
}
