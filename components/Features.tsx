import React from 'react';
import { BookOpen, Zap, Users, Target, Brain, Shield } from 'lucide-react';

const features = [
  { icon: BookOpen, title: "Ruta Estructurada", text: "42 lecciones organizadas en 3 niveles progresivos. Sin saltos, sin confusion." },
  { icon: Zap, title: "Practica Real", text: "Quizzes interactivos y checkpoints en cada leccion para reforzar lo aprendido." },
  { icon: Users, title: "Comunidad LATAM", text: "Grupo activo en Discord enfocado en crecer juntos, sin toxicidad." },
  { icon: Target, title: "Quiz Interactivos", text: "Pon a prueba tu conocimiento con preguntas de opcion multiple, verdadero/falso y mas." },
  { icon: Brain, title: "Asistente IA", text: "Preguntale a CBas AI cualquier duda sobre cripto y recibe respuestas al instante." },
  { icon: Shield, title: "100% Gratuito", text: "Todo el contenido educativo es gratuito. Aprende sin barreras economicas." },
];

const Features: React.FC = () => {
  return (
    <section id="about" className="py-28 lg:py-32 relative overflow-hidden scroll-mt-28">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-3 block">Por que Hablemos Cripto</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Todo lo que necesitas para aprender cripto
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Creamos el recurso que nos hubiera gustado tener cuando empezamos. Sin ruido, sin promesas falsas, solo educacion de calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group p-6 lg:p-8 rounded-2xl bg-surface-1 border border-surface-border hover:border-surface-border-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5">
                <item.icon size={24} className="text-brand-500" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
