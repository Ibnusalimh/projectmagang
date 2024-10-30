import React from "react";
import BenefitSection from "./BenefitSection";
import TestimonialSection from "./TestimonialSection";
import FeatureSection from "./FeatureSection";
import CallToAction from "./CallToAction";

function MainContent() {
  return (
    <main className="text-4xl md:text-6xl font-semibold">
      <BenefitSection />
      <TestimonialSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
}

export default MainContent;
