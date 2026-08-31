import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import MetricsBar from './sections/MetricsBar';
import PhilosophySection from './sections/PhilosophySection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import CaseStudyModal from './sections/CaseStudyModal';
import ProcessSection from './sections/ProcessSection';
import WhyUsSection from './sections/WhyUsSection';
import CareersSection from './sections/CareersSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function LandingPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <MetricsBar />
      <PhilosophySection />
      <ServicesSection />
      <PortfolioSection onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)} />
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
      <ProcessSection />
      <WhyUsSection />
      {/* <CareersSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
