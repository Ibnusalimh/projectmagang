import React from "react";
import Header from "./Header";
import BenefitSection from "./BenefitSection";
import TestimonialSection from "./TestimonialSection";
import FeatureSection from "./FeatureSection";
import CallToAction from "./CallToAction";

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header />
      <BenefitSection />
      <TestimonialSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
}

export default MainContent;
