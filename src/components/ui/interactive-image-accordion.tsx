import React, { useState } from 'react';

// --- Types ---
interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Data for the image accordion ---
const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Transições Cinematográficas',
    imageUrl: '/imagens/1.jpeg',
  },
  {
    id: 2,
    title: 'Efeitos de Texto',
    imageUrl: '/imagens/5.jpeg',
  },
  {
    id: 3,
    title: 'Títulos Dinâmicos',
    imageUrl: '/imagens/8.jpeg',
  },
  {
    id: 4,
    title: 'Overlays Criativos',
    imageUrl: '/imagens/img2.png',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    imageUrl: '/imagens/img3.jpeg',
  },
];

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[200px] xs:w-[220px] sm:w-[250px] md:w-[280px] lg:w-[400px]' : 'w-[40px] xs:w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-12 xs:bottom-14 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black font-sans section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4 lg:px-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-primary-light leading-tight tracking-tighter">
              <span className="text-gradient">+30 Motions Prontos</span>
              <br />
              <span className="text-primary-gold">e Editáveis</span>
            </h1>
            <p className="mt-3 xs:mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Transforme seus vídeos com nossa biblioteca de motions profissionais. 
              Todos os efeitos são totalmente editáveis e prontos para usar no Premiere e After Effects.
            </p>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-0">
            <div className="flex flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 overflow-x-auto p-1 xs:p-2 sm:p-3 md:p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
