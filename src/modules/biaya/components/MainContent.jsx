import React from 'react';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

function MainContent() {
  return (
    <main className="text-4xl md:text-6xl font-semibold">
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

export default MainContent;