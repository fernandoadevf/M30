import React, { useState, useEffect } from 'react';
import UrgencyTimer from './UrgencyTimer';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (elementId: string) => {
    smoothScrollTo(elementId);
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <>
      {/* Cronômetro de Urgência */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-900/95 backdrop-blur-sm border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-2">
          <UrgencyTimer />
        </div>
      </div>
      
      <nav 
        className={`fixed top-16 xs:top-16 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl xs:text-2xl font-bold text-white">
              M<span className="text-orange-500">30</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-white hover:text-red-500 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('motions')}
                className="text-white hover:text-red-500 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200"
              >
                Motions
              </button>
              <button 
                onClick={() => handleNavClick('benefits')}
                className="text-white hover:text-red-500 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200"
              >
                Benefícios
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-white hover:text-red-500 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => handleNavClick('offer')}
                className="text-white hover:text-red-500 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors duration-200"
              >
                Oferta
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://pay.kiwify.com.br/aIDCfF1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 inline-block"
            >
              Comprar Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-red-500 focus:outline-none focus:text-red-500 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`h-5 w-5 xs:h-6 xs:w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-3 xs:px-4 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-sm border-t border-white/10 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <button 
            onClick={() => handleNavClick('home')}
            className="text-white hover:text-red-500 block px-3 py-3 rounded-md text-sm xs:text-base font-medium w-full text-left transition-colors duration-200"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('motions')}
            className="text-white hover:text-red-500 block px-3 py-3 rounded-md text-sm xs:text-base font-medium w-full text-left transition-colors duration-200"
          >
            Motions
          </button>
          <button 
            onClick={() => handleNavClick('benefits')}
            className="text-white hover:text-red-500 block px-3 py-3 rounded-md text-sm xs:text-base font-medium w-full text-left transition-colors duration-200"
          >
            Benefícios
          </button>
          <button 
            onClick={() => handleNavClick('testimonials')}
            className="text-white hover:text-red-500 block px-3 py-3 rounded-md text-sm xs:text-base font-medium w-full text-left transition-colors duration-200"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => handleNavClick('offer')}
            className="text-white hover:text-red-500 block px-3 py-3 rounded-md text-sm xs:text-base font-medium w-full text-left transition-colors duration-200"
          >
            Oferta
          </button>
          <div className="pt-3 border-t border-white/10 mt-3">
            <a 
              href="https://pay.kiwify.com.br/aIDCfF1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 w-full inline-block text-center"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
