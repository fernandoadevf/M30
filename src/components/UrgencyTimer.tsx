import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UrgencyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const getTimeUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999); // 23:59:59 do dia atual
      
      // Se já passou das 23:59:59, vai para o próximo dia
      if (now >= midnight) {
        midnight.setDate(midnight.getDate() + 1);
        midnight.setHours(23, 59, 59, 999);
      }
      
      return midnight.getTime() - now.getTime();
    };

    const updateTimer = () => {
      const timeUntilMidnight = getTimeUntilMidnight();
      
      const hours = Math.floor(timeUntilMidnight / (1000 * 60 * 60));
      const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeUntilMidnight % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    // Atualiza imediatamente
    updateTimer();
    
    // Atualiza a cada segundo
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-900/90 backdrop-blur-sm border border-red-500/50 rounded-lg px-4 py-2 mx-auto max-w-fit"
    >
      <div className="flex items-center justify-center space-x-2 text-white">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-red-400"
        >
          🔥
        </motion.div>
        <span className="text-sm font-semibold text-red-200">
          OFERTA TERMINA EM:
        </span>
        <div className="flex items-center space-x-1 font-mono text-lg font-bold">
          <motion.span
            key={timeLeft.hours}
            initial={{ scale: 1.2, color: '#ff4444' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.3 }}
            className="bg-red-600 px-2 py-1 rounded text-white"
          >
            {timeLeft.hours.toString()}
          </motion.span>
          <span className="text-red-400">:</span>
          <motion.span
            key={timeLeft.minutes}
            initial={{ scale: 1.2, color: '#ff4444' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.3 }}
            className="bg-red-600 px-2 py-1 rounded text-white"
          >
            {timeLeft.minutes.toString().padStart(2, '0')}
          </motion.span>
          <span className="text-red-400">:</span>
          <motion.span
            key={timeLeft.seconds}
            initial={{ scale: 1.2, color: '#ff4444' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.3 }}
            className="bg-red-600 px-2 py-1 rounded text-white"
          >
            {timeLeft.seconds.toString().padStart(2, '0')}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default UrgencyTimer;
