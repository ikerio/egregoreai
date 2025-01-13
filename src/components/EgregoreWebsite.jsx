import React, { useState } from 'react';  // Removed useEffect since we won't need it
import Header from './Header';
import HeroSection from './HeroSection';
import Manifesto from './Manifesto';
import FeaturesSection from './FeaturesSection';
import ArchitectureSection from './ArchitectureSection';
import DocumentationSection from './DocumentationSection';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import Footer from './Footer';
import AnalysisSection from './AnalysisSection';
import BreathingAscii from './common/BreathingAscii';

const EgregoreWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isFeatureExpanded, setIsFeatureExpanded] = useState(false);

  // Simple scroll detection for header only
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-900 text-zinc-300 font-mono w-full">
      <Header scrolled={scrolled} />

      <div className="flex flex-col space-y-0">
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <Manifesto />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <FeaturesSection onExpand={setIsFeatureExpanded} />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <ArchitectureSection />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <DocumentationSection />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <AnalysisSection />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <EvolutionSection />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <BreathingAscii />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <AboutSection />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EgregoreWebsite;