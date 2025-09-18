import React from "react";
import HeroButtons from "./HeroButtons";
import HeroTrustIndicators from "./HeroTrustIndicators";


export default function HeroContent() {
  return (
    <div className="text-white fade-in-up">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Healthcare
        <span className="block text-blue-200">Redefined</span>
        <span className="block">for You</span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
        Experience premium healthcare from the comfort of your home. Connect
        with certified doctors instantly, get personalized treatment plans, and
        manage your health with confidence.
      </p>

      <HeroButtons />
      <HeroTrustIndicators />
    </div>
  );
}
