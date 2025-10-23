import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BookOpen, DollarSign } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap size={32} />,
      title: "Entregas 50% mais rápidas",
      description: "Pare de perder tempo procurando assets. Tenha tudo organizado e pronto para usar."
    },
    {
      icon: <Target size={32} />,
      title: "Projetos com padrão profissional",
      description: "Motions criados por profissionais de pós-produção para elevar a qualidade dos seus vídeos."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Biblioteca organizada e prática",
      description: "Tudo categorizado e fácil de encontrar. Workflow otimizado para máxima produtividade."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Maior valorização dos seus serviços",
      description: "Entregue trabalhos de qualidade superior e cobre o que realmente vale no mercado."
    }
  ];

  const reasons = [
    {
      title: "Velocidade",
      description: "Economize horas em cada edição."
    },
    {
      title: "Qualidade",
      description: "Designs criados por profissionais de pós-produção."
    },
    {
      title: "Crescimento",
      description: "Posicione-se como um editor de alto nível."
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
          className="space-y-16"
        >
          {/* Título Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              <span className="text-gradient">Seu workflow nunca mais</span>
              <br />
              <span className="text-primary-light">será o mesmo.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transforme sua produtividade e eleve a qualidade dos seus projetos com o M30
            </p>
          </motion.div>

          {/* Grid de Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary-gold/50 transition-all duration-300 text-center"
              >
                <div className="text-primary-gold mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-primary-gold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Investimento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 backdrop-blur-sm border border-primary-gold/30 rounded-3xl p-8 text-center max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <div className="text-3xl">🧠</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-gold">
                Um investimento que se paga em apenas 1 projeto.
              </h3>
              <p className="text-gray-300 text-lg">
                Com a economia de tempo e o aumento na qualidade dos seus trabalhos, 
                o M30 se paga rapidamente.
              </p>
              <motion.a
                href="https://pay.kiwify.com.br/aIDCfF1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-6 inline-block"
              >
                QUERO TRANSFORMAR MEU WORKFLOW
              </motion.a>
            </div>
          </motion.div>

          {/* Por que escolher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Por Que Escolher o <span className="text-gradient">M30</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="text-3xl font-bold text-primary-gold">{index + 1}.</div>
                  <h4 className="text-xl font-semibold text-primary-gold">{reason.title}</h4>
                  <p className="text-gray-300">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
