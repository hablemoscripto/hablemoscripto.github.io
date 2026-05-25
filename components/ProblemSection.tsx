import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "El espejismo de la información \"gratis\"",
      text: "La mayor parte del contenido que consumes en YouTube, Twitter y Telegram está financiado por quien quiere venderte algo después. Señales \"infalibles\", gurús con resultados falsos y cursos caros que entregan poco. El resultado típico: entras con ilusión, tomas decisiones con datos sesgados y tu primera experiencia termina en pérdidas que te hacen pensar que \"el cripto es una estafa\".",
    },
    {
      icon: TrendingDown,
      title: "El salto sin red al trading avanzado",
      text: "Una vez que dominas los básicos, el siguiente paso natural es futures y perpetuals con apalancamiento. Sin un framework riguroso de análisis técnico, gestión de riesgo y control emocional, el apalancamiento multiplica las pérdidas, no las ganancias. Una mala racha liquida cuentas enteras en horas.",
    },
    {
      icon: Globe,
      title: "El factor LATAM que lo empeora todo",
      text: "En nuestra región la inflación y la devaluación constante generan una urgencia real por proteger el poder adquisitivo. Esa necesidad legítima choca con un océano de promesas irreales de rendimientos fáciles. La combinación es explosiva: personas inteligentes y prudentes en otros ámbitos de su vida cometen errores que nunca cometerían en su profesión.",
    },
  ];

  return (
    <section id="el-problema" className="py-24 bg-navy-950 relative scroll-mt-28">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 mb-6">
            <span className="text-brand-400 text-xs font-black uppercase tracking-[0.2em]">La realidad que nadie te cuenta</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter mb-4">
            Por qué la mayoría falla antes de empezar de verdad
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            No es falta de inteligencia ni de ganas. Es que el camino está lleno de ruido, estafas bien empaquetadas y saltos al trading avanzado sin red de seguridad.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group flex flex-col gap-5 px-6 py-7 rounded-2xl bg-navy-900/50 border border-white/5 hover:border-brand-500/30 hover:bg-navy-900/70 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/10 group-hover:border-brand-500/20 group-hover:text-brand-500 transition-all">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-black text-white text-lg tracking-tight mb-4 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-navy-400 leading-relaxed font-medium">
                    {problem.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
