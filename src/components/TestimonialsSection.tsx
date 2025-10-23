import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Mudou meu workflow. Não perco mais horas procurando transições. Baixo, arrasto e pronto.",
      author: "Rafael Costa",
      role: "Editor (RJ)",
      avatar: "RC"
    },
    {
      quote: "Uso todos os dias. Motions práticos e profissionais. Entrego mais rápido e com mais qualidade.",
      author: "Marina Silva",
      role: "Motion Designer (SP)",
      avatar: "MS"
    },
    {
      quote: "Pack completo, organizado e funcional. Desde que comecei a usar, aumentei minha produtividade e consegui novos freelas.",
      author: "Pedro Almeida",
      role: "Videomaker (BH)",
      avatar: "PA"
    }
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
          {/* Título da Seção */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              <span className="text-gradient">Depoimentos</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Veja o que outros profissionais estão dizendo sobre o M30
            </p>
          </motion.div>

          {/* Grid de Depoimentos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary-gold/50 transition-all duration-300"
              >
                {/* Quote */}
                <div className="space-y-4">
                  <div className="text-primary-gold text-2xl">"</div>
                  <blockquote className="text-gray-300 leading-relaxed text-lg">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-primary-gold text-2xl text-right">"</div>
                </div>

                {/* Autor */}
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-gold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Estrelas de Avaliação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center space-x-2 text-2xl">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-primary-gold"
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-gray-400">
              Avaliação média: <span className="text-primary-gold font-semibold">4.9/5</span> 
              <span className="text-gray-500"> (500+ avaliações)</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
