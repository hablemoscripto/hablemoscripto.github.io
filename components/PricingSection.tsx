import { motion } from 'framer-motion';
import { Check, Crown, Zap } from 'lucide-react';
import {
  PRICING_PLANS,
  type CourseTier,
  type UserEntitlements,
} from '../services/paymentService';

interface PricingSectionProps {
  variant?: 'authenticated' | 'public';
  entitlements?: UserEntitlements;
  onSelectPlan?: (planId: 'inversor' | 'experto') => void;
  onPublicCta?: (tier: CourseTier) => void;
}

const COURSE_PLAN_ORDER: CourseTier[] = ['free', 'inversor', 'experto'];

const COURSE_TIER_RANK: Record<CourseTier, number> = {
  free: 0,
  inversor: 1,
  experto: 2,
};

const PUBLIC_CTA_LABELS: Record<CourseTier, string> = {
  free: 'Comenzar gratis',
  inversor: 'Elegir Inversor',
  experto: 'Convertirme en Cripto Experto',
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
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

  const isCurrentPlan = (tier: CourseTier) =>
    !isPublic && tier === currentCourseTier;

  const isIncluded = (tier: CourseTier) =>
    !isPublic && COURSE_TIER_RANK[tier] < COURSE_TIER_RANK[currentCourseTier];

  return (
    <div className="container max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-white/10 text-brand-500 text-xs font-black uppercase tracking-[0.2em] mb-6">
          Planes y Precios
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter mb-4">
          Elige tu nivel de profundidad
        </h2>
        <p className="text-lg text-navy-300 max-w-2xl mx-auto">
          Pago único. Acceso de por vida. Sin suscripciones.
        </p>

        {/* Precio Fundador — honest launch pricing, no fake scarcity */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-sm">
          <span className="text-brand-400 font-medium">
            Precio Fundador: estos son los precios de lanzamiento. Avisaremos con 30 días de anticipación antes de cualquier aumento.
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        {COURSE_PLAN_ORDER.map((courseTier, index) => {
          const plan = PRICING_PLANS[courseTier];
          const isCurrent = isCurrentPlan(courseTier);
          const included = isIncluded(courseTier);
          const isFreePlan = courseTier === 'free';
          const isTopTier = courseTier === 'experto';

          return (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                isTopTier
                  ? 'border border-brand-500/30 shadow-[0_0_50px_rgba(245,158,11,0.08)]'
                  : isFreePlan
                  ? 'border border-white/10'
                  : 'border border-white/10 bg-navy-900/40'
              }`}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-xl" />

              {/* Premium border for the top tier */}
              {isTopTier && (
                <div className="absolute inset-0 rounded-3xl border border-brand-500/20" />
              )}

              <div className="relative z-10 flex h-full flex-col p-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isTopTier
                          ? 'bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/25'
                          : isFreePlan
                          ? 'bg-navy-800 border border-white/10'
                          : 'bg-navy-800 border border-brand-500/20'
                      }`}
                    >
                      {isTopTier ? (
                        <Crown className="h-5 w-5 text-navy-950" />
                      ) : (
                        <Zap className="h-5 w-5 text-brand-400" />
                      )}
                    </div>

                    {isTopTier && (
                      <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-navy-950">
                        Recomendado
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 leading-snug">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white tracking-[-1.5px]">
                      {formatUSD(plan.priceUsd)}
                    </span>
                    {!isFreePlan && (
                      <span className="text-sm font-medium text-navy-400 ml-1">
                        USD
                      </span>
                    )}
                  </div>
                  {!isFreePlan && plan.priceCopCents > 0 && (
                    <p className="text-sm text-navy-300 mt-1.5 font-medium">
                      ${(plan.priceCopCents / 100).toLocaleString('es-CO')} COP
                    </p>
                  )}
                  {!isFreePlan && (
                    <p className="text-xs text-navy-400 mt-2 font-medium">
                      Pago único · Acceso de por vida
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check
                        size={17}
                        className={`mt-0.5 flex-shrink-0 ${
                          isTopTier ? 'text-brand-400' : 'text-navy-400'
                        }`}
                      />
                      <span className="text-navy-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {isPublic ? (
                  <button
                    onClick={() => onPublicCta?.(courseTier)}
                    className={`mt-auto w-full rounded-2xl py-3.5 text-sm font-bold transition-all duration-200 ${
                      isTopTier
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-navy-950 shadow-lg shadow-brand-500/20 hover:from-brand-400 hover:to-brand-500'
                        : isFreePlan
                        ? 'border border-white/10 bg-navy-800 text-white hover:bg-navy-700 hover:border-white/20'
                        : 'border border-white/15 bg-navy-800 text-white hover:border-brand-500/40 hover:bg-navy-700'
                    }`}
                  >
                    {PUBLIC_CTA_LABELS[courseTier]}
                  </button>
                ) : isCurrent ? (
                  <div className="mt-auto w-full rounded-2xl border border-brand-500/30 bg-brand-500/10 py-3.5 text-center text-sm font-bold text-brand-400">
                    Plan Actual
                  </div>
                ) : included ? (
                  <div className="mt-auto w-full rounded-2xl border border-white/10 bg-navy-800 py-3.5 text-center text-sm font-medium text-navy-400">
                    Incluido
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      onSelectPlan?.(courseTier as 'inversor' | 'experto')
                    }
                    className={`mt-auto w-full rounded-2xl py-3.5 text-sm font-bold transition-all duration-200 ${
                      isTopTier
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-navy-950 shadow-lg shadow-brand-500/20 hover:from-brand-400 hover:to-brand-500'
                        : isFreePlan
                        ? 'border border-white/10 bg-navy-800 text-white hover:bg-navy-700 hover:border-white/20'
                        : 'border border-white/15 bg-navy-800 text-white hover:border-brand-500/40 hover:bg-navy-700'
                    }`}
                  >
                    Actualizar a {plan.name}
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
