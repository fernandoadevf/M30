import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8"
        >
          {/* Conteúdo Simplificado */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Criado por Shiftway */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Criado por <span className="text-primary-gold font-semibold">Shiftway</span>
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 M30. Todos os direitos reservados.
              </p>
            </div>

            {/* Instagram */}
            <div className="text-center md:text-right">
              <a 
                href="https://www.instagram.com/shiftway.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-gold transition-colors duration-300 text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
