import React from 'react';
import { HeroScrollVideo } from './ui/scroll-animated-video';

const MotionShowcaseSection: React.FC = () => {
  return (
    <div className="relative -mt-8 sm:mt-0">
      <HeroScrollVideo
      title="Por Que Escolher o M30"
      subtitle="Transforme Sua Edição"
      meta="2025 • Profissional"
      credits={
        <>
          <p>Criado por</p>
          <p>Especialistas em Motion</p>
        </>
      }
      media="/imagens/videopedro.mp4"
      poster="/imagens/parte 1.avif"
      mediaType="video"
      muted={true}
      loop={true}
      playsInline={true}
      autoPlay={false}
      overlay={{
        caption: "MOTIONS • +30",
        heading: "Qualidade Profissional Garantida",
        paragraphs: [
          "Mais de 30 motions profissionais prontos para usar no Premiere e After Effects.",
          "Transforme seus vídeos com efeitos cinematográficos de alta qualidade.",
          "Economize horas de trabalho e entregue resultados impressionantes."
        ],
        extra: null
      }}
      initialBoxSize={300}
      targetSize="fullscreen"
      scrollHeightVh={150}
      showHeroExitAnimation={true}
      sticky={true}
      overlayBlur={15}
      overlayRevealDelay={0.4}
      smoothScroll={false}
      className="bg-black"
    />
    </div>
  );
};

export default MotionShowcaseSection;
