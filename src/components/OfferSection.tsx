import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Film, Zap, Rocket } from 'lucide-react';

const OfferSection: React.FC = () => {
  const includedItems = [
    "+30 motions para Premiere e After Effects",
    "Tutorial de instalação passo a passo",
    "Biblioteca organizada por categorias",
    "Acesso vitalício sem custo adicional",
    "Atualizações gratuitas sempre"
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Oferta Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 backdrop-blur-sm border-2 border-primary-gold/50 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 text-6xl text-primary-gold">
                <DollarSign size={48} />
              </div>
              <div className="absolute top-4 right-4 text-6xl text-primary-gold">
                <Film size={48} />
              </div>
              <div className="absolute bottom-4 left-4 text-6xl text-primary-gold">
                <Zap size={48} />
              </div>
              <div className="absolute bottom-4 right-4 text-6xl text-primary-gold">
                <Rocket size={48} />
              </div>
            </div>

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                  <span className="text-gradient">Oferta Especial</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl">
                  <span className="text-gray-400 line-through">De R$197</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-gold">
                    Por apenas R$23,90
                  </span>
                </div>
              </motion.div>

              {/* Benefícios da Oferta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              >
                <div className="space-y-2">
                  <div className="text-3xl">💳</div>
                  <p className="font-semibold text-primary-gold">Pagamento único</p>
                  <p className="text-gray-300 text-sm">Sem mensalidades</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">♾️</div>
                  <p className="font-semibold text-primary-gold">Acesso vitalício</p>
                  <p className="text-gray-300 text-sm">Para sempre</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🧩</div>
                  <p className="font-semibold text-primary-gold">Atualizações gratuitas</p>
                  <p className="text-gray-300 text-sm">Sempre incluídas</p>
                </div>
              </motion.div>

              {/* CTA Principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://pay.kiwify.com.br/aIDCfF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-2xl px-16 py-6 font-bold animate-pulse-urgent inline-block"
                >
                  GARANTIR MEU ACESSO AGORA
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* O Que Está Incluído */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary-gold">
                🎁 O Que Está Incluído
              </h3>
              
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Urgência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-red-400 mb-2">⏰ Oferta por Tempo Limitado</h4>
              <p className="text-gray-300">
                Esta promoção pode encerrar a qualquer momento. 
                Não perca esta oportunidade única!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
