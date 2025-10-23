import React from 'react';
import { motion } from 'framer-motion';

const HeroBenefits: React.FC = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Lista de Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              '+30 Motions prontos e editáveis',
              'Compatível com Premiere e After Effects',
              'Fácil de usar — basta arrastar e ajustar',
              'Acesso vitalício e atualizações gratuitas'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-center">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Preço e Oferta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 backdrop-blur-sm border border-primary-gold/30 rounded-3xl p-8 max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-gray-400 line-through">De R$197</span>
                <span className="text-4xl sm:text-5xl font-bold text-gradient">por apenas R$59,90</span>
              </div>
              <p className="text-gray-300 text-sm">
                💰 Pagamento único • Sem mensalidades • Oferta por tempo limitado
              </p>
            </div>
          </motion.div>

          {/* Garantia */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            🔒 Compra 100% segura • Garantia de 7 dias • Suporte garantido
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBenefits;
