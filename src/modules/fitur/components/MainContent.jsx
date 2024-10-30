import React from "react";
import FeatureSection from "./FeatureSection";
import CallToAction from "./CallToAction";
import Testimonial from "./Testimonial";
import JoinSection from "./JoinSection";

const MainContent = () => {
  return (
    <main className="text-4xl md:text-6xl font-semibold">
      <FeatureSection />
      <CallToAction />
      <Testimonial />
      <JoinSection />
    </main>
  );
};

export default MainContent;
