import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Aguarda a animação de saída
    }, 1500); // 1.5 segundos

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {/* Logo M30 com brilho */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-8xl md:text-9xl font-bold relative"
        >
          {/* M */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white relative inline-block"
          >
            M
            {/* Brilho para o M */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: 0.5,
                repeatDelay: 1.5 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
                filter: 'blur(2px)'
              }}
            />
          </motion.span>

          {/* 30 */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-orange-500 relative inline-block"
          >
            30
            {/* Brilho para o 30 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: 0.7,
                repeatDelay: 1.5 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/25 to-transparent"
              style={{
                background: 'radial-gradient(circle at center, rgba(249,115,22,0.2) 0%, transparent 70%)',
                filter: 'blur(2px)'
              }}
            />
          </motion.span>
        </motion.div>

      </div>

      {/* Efeito de partículas de brilho */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200]
            }}
            transition={{ 
              duration: 2, 
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;