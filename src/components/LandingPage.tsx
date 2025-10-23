import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { LandingAccordionItem } from './ui/interactive-image-accordion';
import MotionShowcaseSection from './MotionShowcaseSection';
import WhySection from './WhySection';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import OfferSection from './OfferSection';
import GuaranteeSection from './GuaranteeSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-primary-light">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Motions Gallery Section */}
      <section id="motions">
        <LandingAccordionItem />
      </section>
      
      {/* Motion Showcase Section - Vídeo Interativo */}
      <MotionShowcaseSection />
      
      {/* Why Section - A Dor e a Solução */}
      <WhySection />
      
      {/* Benefits Section - O Que Você Ganha */}
      <section id="benefits">
        <BenefitsSection />
      </section>
      
      {/* Testimonials Section - Depoimentos */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      {/* FAQ Section - Perguntas Frequentes */}
      <FAQSection />
      
      {/* Offer Section - Oferta */}
      <section id="offer">
        <OfferSection />
      </section>
      
      {/* Guarantee Section - Garantia */}
      <GuaranteeSection />
      
      {/* CTA Section - Chamada Final */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
