import React from "react";
import HeroSection from "../components/portfolio/HeroSection.jsx";
import ServicesSection from "../components/portfolio/ServicesSection.jsx";
import ImpactSection from "../components/portfolio/ImpactSection.jsx";
import AboutSection from "../components/portfolio/AboutSection.jsx";
import FooterSection from "../components/portfolio/FooterSection.jsx";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}