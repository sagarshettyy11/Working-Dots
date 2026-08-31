import React, { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import MetricsBar from '../components/sections/MetricsBar';
import ITStudioSection from '../components/sections/ITStudioSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import CaseStudyModal from '../components/sections/CaseStudyModal';
import ProcessSection from '../components/sections/ProcessSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage({ navigate }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="landing-page-view">
      {/* 1. Hero with Live Architecture Simulator */}
      <HeroSection navigate={navigate} />

      {/* 2. Live Metrics & SLA Status Bar */}
      <MetricsBar />

      {/* 3. High-Impact IT Studio & Engineering Team Visual Showcase */}
      <ITStudioSection />

      {/* 4. Core Philosophy: Connecting the Dots */}
      <PhilosophySection />

      {/* 5. Core Services Section with "View Full Catalog" link */}
      <ServicesSection navigate={navigate} />

      {/* 6. Featured Portfolio & Case Studies with "View All Projects" link */}
      <PortfolioSection
        onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
        navigate={navigate}
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* 7. 4-Stage Engineering & Automation Process */}
      <ProcessSection />

      {/* 8. Why Choose Us vs Traditional Agencies */}
      <WhyUsSection />

      {/* 9. About Our Studio & Team */}
      <AboutSection />

      {/* 10. Start a Project / Contact Form */}
      <ContactSection />
    </div>
  );
}
