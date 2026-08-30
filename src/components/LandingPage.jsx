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
      {/* 1. Global Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section with Live Workflow Simulation */}
      <HeroSection />

      {/* 3. Key Startup Impact Metrics */}
      <MetricsBar />

      {/* 4. Philosophy & Alignment Section */}
      <PhilosophySection />

      {/* 5. Core Service Pillars */}
      <ServicesSection />

      {/* 6. Filterable Case Studies & Portfolio */}
      <PortfolioSection onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)} />

      {/* 7. Interactive Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* 8. 7-Stage Interactive Split Roadmap */}
      <ProcessSection />

      {/* 9. Authentic Studio Comparison Matrix */}
      <WhyUsSection />

      {/* 10. Careers & Open Positions */}
      <CareersSection />

      {/* 11. About Us, Startup Values & Team */}
      <AboutSection />

      {/* 12. High-Converting Contact & Project Inquiry Hub */}
      <ContactSection />

      {/* 13. Minimalist Global Footer */}
      <Footer />
    </div>
  );
}
