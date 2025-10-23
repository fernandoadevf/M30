import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Funciona no meu Premiere/After Effects?",
      answer: "Sim! O pack é 100% compatível com Adobe Premiere Pro (CC 2018 ou superior) e After Effects (CC 2018 ou superior). Todos os motions foram desenvolvidos e testados nas versões mais recentes dos softwares. Você recebe instruções detalhadas de instalação, incluindo vídeo tutorial passo a passo. Os arquivos são entregues em formato .aep (After Effects) e .prproj (Premiere Pro), garantindo máxima compatibilidade e facilidade de uso. Além disso, incluímos um guia de resolução de problemas comuns para garantir que tudo funcione perfeitamente no seu computador."
    },
    {
      question: "Vou ficar com vídeos iguais aos outros?",
      answer: "Definitivamente não! Cada motion é completamente personalizável e modular. Você pode ajustar cores, timing, efeitos, tipografia, elementos gráficos e muito mais. O pack inclui múltiplas variações de cada motion, permitindo criar milhares de combinações únicas. Além disso, você pode combinar diferentes motions para criar sequências completamente originais. Seu estilo e criatividade continuam únicos - você apenas economiza tempo na criação técnica, focando no que realmente importa: sua mensagem e visão criativa."
    },
    {
      question: "Posso usar comercialmente?",
      answer: "Sim! Você tem licença comercial completa para usar os motions em projetos pessoais e comerciais. Isso inclui vídeos para clientes, redes sociais, YouTube, campanhas publicitárias, apresentações corporativas e qualquer outro uso comercial. A única restrição é que você não pode revender os motions como se fossem seus ou redistribuir os arquivos originais. Você mantém todos os direitos sobre os vídeos criados usando nossos motions."
    },
    {
      question: "E se eu não gostar do produto?",
      answer: "Oferecemos garantia de 7 dias para você testar o produto sem riscos. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas. Nossa política de reembolso é simples e transparente - basta enviar um email solicitando o reembolso e processamos em até 48 horas. Acreditamos tanto na qualidade do nosso produto que preferimos assumir o risco total para garantir sua satisfação."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <span className="text-gradient">Perguntas Frequentes</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o M30
            </p>
          </motion.div>

          {/* Lista de FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-primary-gold/50 transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="text-lg font-semibold text-primary-light pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-gold flex-shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Adicional */}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
