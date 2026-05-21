import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Zap } from 'lucide-react';
import {
  PRICING_PLANS,
  type PlanId,
  type UserEntitlements,
} from '../services/paymentService';

interface PricingSectionProps {
  variant?: 'authenticated' | 'public';
  entitlements?: UserEntitlements;
  onSelectPlan?: (planId: 'basico' | 'completo') => void;
  onPublicCta?: () => void;
}

// Course-tier rendering scope, v2 launch phase.
//
// TODO(pricing-ui, later phase): render Comunidad anual and Acceso Total
// here too. Their plans are already in PRICING_PLANS (data layer) but the
// pricing UI redesign that surfaces them is a separate phase.
const COURSE_PLAN_ORDER: PlanId[] = ['free', 'basico', 'completo'];

const COURSE_TIER_RANK: Record<'free' | 'basico' | 'completo', number> = {
  free: 0,
  basico: 1,
  completo: 2,
};

const PUBLIC_CTA_LABELS: Record<'free' | 'basico' | 'completo', string> = {
  free: 'Empieza ahora',
  basico: 'Desbloquea Intermedio',
  completo: 'Acceso completo',
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function PricingSection({
  variant = 'authenticated',
  entitlements,
  onSelectPlan,
  onPublicCta,
}: PricingSectionProps) {
  const formatUSD = (amount: number) => (amount === 0 ? 'Gratis' : `$${amount}`);

  const isPublic = variant === 'public';
  const currentCourseTier = entitlements?.courseTier ?? 'free';

  const isCurrentPlan = (planId: 'free' | 'basico' | 'completo') =>
    !isPublic && planId === currentCourseTier;
  const isIncluded = (planId: 'free' | 'basico' | 'completo') =>
    !isPublic && COURSE_TIER_RANK[planId] < COURSE_TIER_RANK[currentCourseTier];

  return (
    <div className="container max-w-7xl mx-auto px-6 mt-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-white/5 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Crown size={14} />
          Planes y Precios
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tighter">
          Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">camino</span>
        </h2>
        <p className="text-lg text-navy-300 max-w-2xl mx-auto font-medium">
          Pago único. Acceso de por vida. Sin suscripciones, sin renovaciones.
        </p>

        {/* Founder pricing notice */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30">
          <Sparkles size={14} className="text-brand-400" />
          <span className="text-xs font-bold text-brand-300">
            Precio Fundador — sube cuando completemos la siguiente fase del producto
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {COURSE_PLAN_ORDER.map((planId, index) => {
          const plan = PRICING_PLANS[planId];
          const courseTier = planId as 'free' | 'basico' | 'completo';
          const isCurrent = isCurrentPlan(courseTier);
          const included = isIncluded(courseTier);
          const isFreePlan = plan.id === 'free';

          return (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted ? 'lg:scale-105 lg:-my-2' : ''
              }`}
            >
              {plan.gradient && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-300 via-brand-400 to-brand-500 p-[1px]">
                  <div className="w-full h-full rounded-3xl bg-navy-900" />
                </div>
              )}

              {plan.highlighted && !plan.gradient && (
                <div className="absolute inset-0 rounded-3xl border-2 border-brand-500/30 shadow-[0_0_40px_rgba(245,158,11,0.12)]" />
              )}

              {!plan.highlighted && !plan.gradient && (
                <div className="absolute inset-0 rounded-3xl border border-navy-700" />
              )}

              <div className="relative z-10 p-8 bg-navy-900 rounded-3xl m-[1px]">
                {plan.highlighted && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-brand-500 text-navy-950 text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-b-xl">
                      Más Popular
                    </div>
                  </div>
                )}

                {plan.gradient && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-300 to-brand-500 text-navy-950 text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-b-xl">
                      Mejor Valor
                    </div>
                  </div>
                )}

                <div className={`mt-${plan.highlighted || plan.gradient ? '4' : '0'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    isFreePlan
                      ? 'bg-navy-800 border border-white/5'
                      : plan.highlighted
                        ? 'bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20'
                        : 'bg-gradient-to-br from-brand-300 to-brand-500 shadow-lg shadow-brand-300/30'
                  }`}>
                    {isFreePlan ? (
                      <Zap size={22} className="text-navy-300" aria-hidden="true" />
                    ) : plan.highlighted ? (
                      <Crown size={22} className="text-navy-950" aria-hidden="true" />
                    ) : (
                      <Sparkles size={22} className="text-navy-950" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-navy-400 mt-1 font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 mb-8">
                  {!isFreePlan && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-md mb-2">
                      Precio Fundador
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tight">
                      {formatUSD(plan.priceUsd)}
                    </span>
                    {!isFreePlan && (
                      <span className="text-navy-400 text-sm font-medium">
                        USD · pago único
                      </span>
                    )}
                  </div>
                  {!isFreePlan && (
                    <p className="text-xs text-navy-500 font-medium mt-1">
                      Acceso de por vida — sin renovaciones
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check
                        size={18}
                        aria-hidden="true"
                        className={`flex-shrink-0 mt-0.5 ${
                          isFreePlan
                            ? 'text-navy-400'
                            : plan.highlighted
                              ? 'text-brand-400'
                              : 'text-brand-300'
                        }`}
                      />
                      <span className="text-sm text-navy-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isPublic ? (
                  <button
                    onClick={() => onPublicCta?.()}
                    className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                      plan.highlighted || plan.gradient
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40'
                        : 'bg-navy-800 hover:bg-navy-700 border border-white/10 hover:border-brand-500/40 text-white'
                    }`}
                  >
                    {PUBLIC_CTA_LABELS[courseTier]}
                  </button>
                ) : isFreePlan ? (
                  <div className="w-full py-3.5 rounded-2xl text-center text-sm font-bold bg-navy-800 border border-white/5 text-navy-400">
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
                    onClick={() => onSelectPlan?.(courseTier as 'basico' | 'completo')}
                    className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40'
                        : 'bg-navy-800 hover:bg-navy-700 border border-white/10 hover:border-brand-500/40 text-white'
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
