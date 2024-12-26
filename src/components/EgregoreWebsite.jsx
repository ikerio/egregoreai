import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ArchitectureSection from './ArchitectureSection';
import DocumentationSection from './DocumentationSection';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import Footer from './Footer';
import { ContentSection } from './common/ContentSection';
import BreathingAscii from './common/BreathingAscii';
import AnalysisSection from './AnalysisSection';

const EgregoreWebsite = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isFeatureExpanded, setIsFeatureExpanded] = useState(false);
  const [scrollingEnabled, setScrollingEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
  
      if (!scrollingEnabled) return;
  
      const scrollPosition = window.scrollY + window.innerHeight * 0.4; // Reduced trigger point
      const viewportHeight = window.innerHeight;
      const featuresHeight = isFeatureExpanded ? viewportHeight * 1.5 : viewportHeight;
      
      // Reduced spacing between sections
      if (scrollPosition < viewportHeight * 1) {
        setActiveSection(0);
      } else if (scrollPosition < viewportHeight * 0.8 + featuresHeight) {
        setActiveSection(1);
      } else if (scrollPosition < (viewportHeight * 0.8 + featuresHeight + viewportHeight)) {
        setActiveSection(2);
      } else if (scrollPosition < (viewportHeight * 0.8 + featuresHeight + viewportHeight * 1.8)) {
        setActiveSection(3);
      } else if (scrollPosition < (viewportHeight * 0.8 + featuresHeight + viewportHeight * 2.6)) {
        setActiveSection(4);
      } else {
        setActiveSection(5);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFeatureExpanded, scrollingEnabled]);

  return (
    <div className="bg-zinc-900 text-zinc-300 font-mono w-full min-h-screen">
      <Header scrolled={scrolled} />
      <HeroSection />

      <div className="min-h-screen relative flex items-center justify-center">
        <div className="container mx-auto mb-10 px-4 max-w-screen-xl">
          <div className={`relative w-full transition-all duration-500 ${
            isFeatureExpanded ? 'min-h-[900px]' : 'min-h-[600px]'
          }`}>
            <ContentSection active={activeSection === 0}>
              <FeaturesSection onExpand={setIsFeatureExpanded} />
            </ContentSection>

            <ContentSection active={activeSection === 1} >
              <ArchitectureSection />
            </ContentSection>

            <ContentSection active={activeSection === 2} className="min-h-screen mb-10">
              <DocumentationSection />
            </ContentSection>

            <ContentSection active={activeSection === 3} className="min-h-screen mb-10">
              <AnalysisSection />
            </ContentSection>

            <ContentSection active={activeSection === 4} className="min-h-screen mb-20">
              <EvolutionSection />
            </ContentSection>

            <ContentSection active={activeSection === 2} className="ml-2 min-h-screen mb-20">
              <BreathingAscii />
            </ContentSection>

            <ContentSection active={activeSection === 5} className="min-h-screen mt-40">
              <AboutSection />
            </ContentSection>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EgregoreWebsite;