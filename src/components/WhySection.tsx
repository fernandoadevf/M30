import React from 'react';
import { motion } from 'framer-motion';

const WhySection: React.FC = () => {
  const problems = [
    {
      icon: "⏰",
      text: "Passar mais tempo procurando efeitos do que editando."
    },
    {
      icon: "😤",
      text: "Ver outros profissionais entregando vídeos melhores e mais rápidos."
    },
    {
      icon: "💸",
      text: "Perder oportunidades por causa de prazos apertados."
    }
  ];

  return (
    <section className="section-padding bg-black relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Título da Seção */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display"
            >
              <span className="text-primary-gold">Você está perdendo tempo</span>
              <br />
              <span className="text-primary-light">e dinheiro editando como antes.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Todo editor sabe o quanto é frustrante:
            </motion.p>
          </div>

          {/* Lista de Problemas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <p className="text-gray-300 font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solução */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 backdrop-blur-sm border border-primary-gold/30 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-center">
                O <span className="text-primary-gold">M30</span> foi criado exatamente para resolver isso.
              </h3>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Com uma biblioteca organizada e pronta para uso, você{' '}
                <span className="text-primary-gold font-semibold">edita mais rápido</span>,{' '}
                <span className="text-primary-gold font-semibold">entrega com qualidade profissional</span> e{' '}
                <span className="text-primary-gold font-semibold">aumenta seu valor no mercado</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
