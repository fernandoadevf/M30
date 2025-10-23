import React from 'react';
import { motion } from 'framer-motion';

const GuaranteeSection: React.FC = () => {
  const securityFeatures = [
    {
      icon: "🔒",
      title: "Compra criptografada",
      description: "Seus dados estão protegidos com criptografia SSL"
    },
    {
      icon: "🛡️",
      title: "Checkout seguro",
      description: "Processamento de pagamento 100% seguro"
    },
    {
      icon: "🎯",
      title: "Suporte garantido",
      description: "Atendimento dedicado para resolver suas dúvidas"
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
              <span className="text-gradient">Compra 100% Segura</span>
              <br />
              <span className="text-primary-light">e com Garantia de 7 Dias</span>
            </h2>
          </motion.div>

          {/* Garantia Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm border-2 border-green-500/50 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-6xl">🛡️</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400">
                  Garantia de Satisfação
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Você tem <span className="text-green-400 font-bold">7 dias para testar</span> o M30.
                  <br />
                  Se o pack não for o que você esperava,{' '}
                  <span className="text-green-400 font-bold">devolvemos 100% do valor</span>, sem perguntas.
                </p>
              </motion.div>

              {/* Características de Segurança */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold text-green-400 mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Por que confiar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-primary-gold">
                Por Que Confiar no M30?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-gold mb-2">Produto Testado</h4>
                      <p className="text-gray-300 text-sm">Mais de 500 profissionais já usam e aprovam nossos motions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-gold mb-2">Suporte Real</h4>
                      <p className="text-gray-300 text-sm">Equipe dedicada para resolver qualquer dúvida ou problema.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-gold mb-2">Atualizações Constantes</h4>
                      <p className="text-gray-300 text-sm">Novos motions adicionados regularmente, sem custo adicional.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-gold mb-2">Compromisso com Qualidade</h4>
                      <p className="text-gray-300 text-sm">Cada motion é criado com padrão profissional de alta qualidade.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
