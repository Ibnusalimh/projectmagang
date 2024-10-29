import React from 'react';
import Header from './Header';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

export default MainContent;