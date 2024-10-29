import React from "react";
import Header from "./Header";
import FeatureSection from "./FeatureSection";
import CallToAction from "./CallToAction";
import Testimonial from "./Testimonial";
import JoinSection from "./JoinSection";

const MainContent = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header />
      <FeatureSection />
      <CallToAction />
      <Testimonial />
      <JoinSection />
    </main>
  );
};

export default MainContent;
