import React from 'react';
import { CTAParallax } from './ui/cta-parallax';

const CTASection: React.FC = () => {
  return (
    <section className="relative">
      {/* Seção principal com efeito parallax */}
      <CTAParallax />
    </section>
  );
};

export default CTASection;
