import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Zap } from 'lucide-react';

export interface PricingPlan {
  tier: 'free' | 'premium' | 'vip';
  name: string;
  monthlyPrice: number; // USD
  yearlyPrice: number;  // USD
  monthlyPriceCOP: number; // COP cents
  yearlyPriceCOP: number;  // COP cents
  description: string;
  features: string[];
  highlighted?: boolean;
  gradient?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: 'free',
    name: 'Explorador',
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyPriceCOP: 0,
    yearlyPriceCOP: 0,
    description: 'Empieza tu camino en el mundo cripto',
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Quizzes interactivos',
      'Certificado de nivel',
      'Sistema de logros',
      'Asistente IA (límite diario)',
    ],
  },
  {
    tier: 'premium',
    name: 'Inversor',
    monthlyPrice: 15,
    yearlyPrice: 150,
    monthlyPriceCOP: 6500000,  // ~$65,000 COP
    yearlyPriceCOP: 65000000,  // ~$650,000 COP
    description: 'Para quienes quieren dominar DeFi',
    features: [
      'Todo lo del plan Explorador',
      'Nivel Intermedio completo (12 lecciones)',
      'Análisis de mercado semanal',
      'Asistente IA ilimitado',
      'Comunidad privada',
      'Sesiones en vivo mensuales',
    ],
    highlighted: true,
  },
  {
    tier: 'vip',
    name: 'Cripto Experto',
    monthlyPrice: 35,
    yearlyPrice: 350,
    monthlyPriceCOP: 15000000, // ~$150,000 COP
    yearlyPriceCOP: 150000000, // ~$1,500,000 COP
    description: 'Acceso total + mentoría personalizada',
    features: [
      'Todo lo del plan Inversor',
      'Nivel Avanzado completo (11 lecciones)',
      'Mentoría 1 a 1 mensual',
      'Estrategias avanzadas de trading',
      'Alertas de mercado en tiempo real',
      'Acceso anticipado a nuevo contenido',
      'Grupo exclusivo de networking',
    ],
    gradient: true,
  },
];

interface PricingSectionProps {
  currentTier: 'free' | 'premium' | 'vip';
  onSelectPlan: (tier: 'premium' | 'vip', cycle: 'monthly' | 'yearly') => void;
}

const tierOrder: Record<string, number> = { free: 0, premium: 1, vip: 2 };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function PricingSection({ currentTier, onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const formatUSD = (amount: number) => {
    if (amount === 0) return 'Gratis';
    return `$${amount}`;
  };

  const isCurrentPlan = (planTier: string) => planTier === currentTier;
  const isIncluded = (planTier: string) => tierOrder[planTier] < tierOrder[currentTier];

  return (
    <div className="container max-w-7xl mx-auto px-6 mt-24">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-white/5 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Crown size={14} />
          Planes y Precios
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tighter">
          Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">camino</span>
        </h2>
        <p className="text-lg text-navy-300 max-w-2xl mx-auto font-medium">
          Invierte en tu educación financiera. Todos los planes incluyen actualizaciones de contenido.
        </p>
      </div>

      {/* Billing cycle toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            billingCycle === 'monthly'
              ? 'bg-brand-500 text-navy-950'
              : 'bg-navy-800 text-navy-300 hover:text-white'
          }`}
        >
          Mensual
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            billingCycle === 'yearly'
              ? 'bg-brand-500 text-navy-950'
              : 'bg-navy-800 text-navy-300 hover:text-white'
          }`}
        >
          Anual
          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
            billingCycle === 'yearly'
              ? 'bg-navy-950/30 text-navy-950'
              : 'bg-green-500/20 text-green-400'
          }`}>
            Ahorra 2 meses
          </span>
        </button>
      </div>

      {/* Pricing cards */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {PRICING_PLANS.map((plan, index) => {
          const isCurrent = isCurrentPlan(plan.tier);
          const included = isIncluded(plan.tier);
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
          const isFreePlan = plan.tier === 'free';

          return (
            <motion.div
              key={plan.tier}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 lg:-my-2'
                  : ''
              }`}
            >
              {/* Gradient border wrapper for VIP */}
              {plan.gradient && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 p-[1px]">
                  <div className="w-full h-full rounded-3xl bg-navy-900" />
                </div>
              )}

              {/* Highlighted border for Premium */}
              {plan.highlighted && !plan.gradient && (
                <div className="absolute inset-0 rounded-3xl border-2 border-brand-500/30 shadow-[0_0_40px_rgba(245,158,11,0.12)]" />
              )}

              {/* Default border for Free */}
              {!plan.highlighted && !plan.gradient && (
                <div className="absolute inset-0 rounded-3xl border border-navy-700" />
              )}

              {/* Card content */}
              <div className="relative z-10 p-8 bg-navy-900 rounded-3xl m-[1px]">
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-brand-500 text-navy-950 text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-b-xl">
                      Más Popular
                    </div>
                  </div>
                )}

                {plan.gradient && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-b-xl">
                      Mejor Valor
                    </div>
                  </div>
                )}

                {/* Tier icon + name */}
                <div className={`mt-${plan.highlighted || plan.gradient ? '4' : '0'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    isFreePlan
                      ? 'bg-navy-800 border border-white/5'
                      : plan.highlighted
                        ? 'bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20'
                        : 'bg-gradient-to-br from-indigo-400 to-rose-500 shadow-lg shadow-indigo-500/20'
                  }`}>
                    {isFreePlan ? (
                      <Zap size={22} className="text-navy-300" />
                    ) : plan.highlighted ? (
                      <Crown size={22} className="text-navy-950" />
                    ) : (
                      <Sparkles size={22} className="text-white" />
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-navy-400 mt-1 font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-6 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tight">
                      {formatUSD(price)}
                    </span>
                    {!isFreePlan && (
                      <span className="text-navy-400 text-sm font-medium">
                        /{billingCycle === 'monthly' ? 'mes' : 'año'}
                      </span>
                    )}
                  </div>
                  {!isFreePlan && billingCycle === 'yearly' && (
                    <p className="text-xs text-green-400 font-bold mt-1">
                      ${Math.round(price / 12)}/mes — ahorras ${plan.monthlyPrice * 12 - price}/año
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={`flex-shrink-0 mt-0.5 ${
                          isFreePlan
                            ? 'text-navy-400'
                            : plan.highlighted
                              ? 'text-brand-400'
                              : 'text-indigo-400'
                        }`}
                      />
                      <span className="text-sm text-navy-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {isFreePlan ? (
                  <div className={`w-full py-3.5 rounded-2xl text-center text-sm font-bold ${
                    isCurrent
                      ? 'bg-navy-800 border border-white/5 text-navy-300'
                      : 'bg-navy-800 border border-white/5 text-navy-400'
                  }`}>
                    {isCurrent ? 'Plan Actual' : 'Incluido'}
                  </div>
                ) : isCurrent ? (
                  <div className="w-full py-3.5 rounded-2xl text-center text-sm font-bold bg-brand-500/10 border border-brand-500/20 text-brand-400">
                    Plan Actual
                  </div>
                ) : included ? (
                  <div className="w-full py-3.5 rounded-2xl text-center text-sm font-bold bg-navy-800 border border-white/5 text-navy-400">
                    Incluido
                  </div>
                ) : (
                  <button
                    onClick={() => onSelectPlan(plan.tier as 'premium' | 'vip', billingCycle)}
                    className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 text-navy-950 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40'
                        : 'bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40'
                    }`}
                  >
                    Obtener {plan.name}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
