import { motion, useReducedMotion } from 'framer-motion';
import { Check, Crown, Zap, ShieldCheck } from 'lucide-react';
import {
  PRICING_PLANS,
  formatCop,
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
  free: 'Empezar gratis',
  inversor: 'Elegir Inversor',
  experto: 'Elegir Cripto Experto',
};

// Inversor is the primary paid recommendation while community/live for Experto
// is still opening with fundadores. Keep Experto available and honest, not hyped.
const RECOMMENDED_TIER: CourseTier = 'inversor';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' as const },
  }),
  visibleReduced: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.01 },
  },
};

export default function PricingSection({
  variant = 'authenticated',
  entitlements,
  onSelectPlan,
  onPublicCta,
}: PricingSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const formatUSD = (amount: number) => (amount === 0 ? 'Gratis' : `$${amount}`);

  const isPublic = variant === 'public';
  const currentCourseTier = entitlements?.courseTier ?? 'free';

  const isCurrentPlan = (tier: CourseTier) => !isPublic && tier === currentCourseTier;

  const isIncluded = (tier: CourseTier) =>
    !isPublic && COURSE_TIER_RANK[tier] < COURSE_TIER_RANK[currentCourseTier];

  return (
    <div className="container mx-auto max-w-7xl px-6">
      <div className="mb-10 text-center md:mb-12">
        <p className="mb-4 text-sm font-bold text-brand-400">Planes y precios</p>
        <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
          Elige tu nivel de profundidad
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-navy-300">
          Pago único. Acceso de por vida. Sin suscripciones.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-navy-400">
          <span className="font-semibold text-brand-400">Precio Fundador:</span> precios de
          lanzamiento. Avisaremos con 30 días de anticipación antes de cualquier aumento.
        </p>
      </div>

      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm leading-relaxed text-navy-300">
          <span className="font-semibold text-white">Miembro fundador.</span> Entras con los precios
          de lanzamiento y conservas tu acceso de por vida si el precio sube después. Trayectoria
          verificable en{' '}
          <a
            href="https://twitter.com/Crypto_CBas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 underline decoration-brand-500/40 underline-offset-4 hover:text-brand-300"
          >
            @Crypto_CBas
          </a>
          .
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {COURSE_PLAN_ORDER.map((courseTier, index) => {
          const plan = PRICING_PLANS[courseTier];
          const isCurrent = isCurrentPlan(courseTier);
          const included = isIncluded(courseTier);
          const isFreePlan = courseTier === 'free';
          const isRecommended = courseTier === RECOMMENDED_TIER;
          const isExperto = courseTier === 'experto';

          return (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView={prefersReducedMotion ? 'visibleReduced' : 'visible'}
              viewport={{ once: true, margin: '-80px' }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-navy-900/80 ${
                isRecommended
                  ? 'border-brand-500/50'
                  : isExperto
                    ? 'border-white/15'
                    : 'border-white/10'
              }`}
            >
              <div className="relative z-10 flex h-full flex-col p-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                        isRecommended
                          ? 'border-brand-500/40 bg-brand-500/15'
                          : 'border-white/10 bg-navy-800'
                      }`}
                    >
                      {isExperto ? (
                        <Crown className="h-5 w-5 text-brand-400" aria-hidden="true" />
                      ) : (
                        <Zap
                          className={`h-5 w-5 ${isRecommended ? 'text-brand-400' : 'text-navy-300'}`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {isRecommended && (
                      <span className="rounded-md bg-brand-500 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
                        Recomendado
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-navy-300">{plan.description}</p>
                </div>

                <div className="mb-6 mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight text-white">
                      {formatUSD(plan.priceUsd)}
                    </span>
                    {!isFreePlan && (
                      <span className="ml-1 text-sm font-medium text-navy-400">USD</span>
                    )}
                  </div>
                  {!isFreePlan && plan.priceCopCents > 0 && (
                    <p className="mt-1.5 text-sm font-medium text-navy-300">
                      Equivalente aprox. {formatCop(plan.priceCopCents)}
                    </p>
                  )}
                  {!isFreePlan && (
                    <p className="mt-2 text-xs font-medium text-navy-400">
                      Pago único · Acceso de por vida
                    </p>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3.5">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check
                        size={17}
                        className={`mt-0.5 flex-shrink-0 ${
                          isRecommended ? 'text-brand-400' : 'text-navy-400'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-navy-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isPublic ? (
                  <button
                    type="button"
                    onClick={() => onPublicCta?.(courseTier)}
                    className={`mt-auto w-full rounded-xl py-3.5 text-sm font-bold transition-colors ${
                      isRecommended
                        ? 'bg-brand-500 text-navy-950 hover:bg-brand-400'
                        : isFreePlan
                          ? 'border border-white/10 bg-navy-800 text-white hover:border-white/20 hover:bg-navy-700'
                          : 'border border-brand-500/30 bg-navy-800 text-white hover:border-brand-500/50 hover:bg-navy-700'
                    }`}
                  >
                    {PUBLIC_CTA_LABELS[courseTier]}
                  </button>
                ) : isCurrent ? (
                  <div className="mt-auto w-full rounded-xl border border-brand-500/30 bg-brand-500/10 py-3.5 text-center text-sm font-bold text-brand-400">
                    Plan Actual
                  </div>
                ) : included ? (
                  <div className="mt-auto w-full rounded-xl border border-white/10 bg-navy-800 py-3.5 text-center text-sm font-medium text-navy-400">
                    Incluido
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelectPlan?.(courseTier as 'inversor' | 'experto')}
                    className={`mt-auto w-full rounded-xl py-3.5 text-sm font-bold transition-colors ${
                      isRecommended
                        ? 'bg-brand-500 text-navy-950 hover:bg-brand-400'
                        : isFreePlan
                          ? 'border border-white/10 bg-navy-800 text-white hover:border-white/20 hover:bg-navy-700'
                          : 'border border-brand-500/30 bg-navy-800 text-white hover:border-brand-500/50 hover:bg-navy-700'
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

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <ShieldCheck size={16} className="text-emerald-400" aria-hidden="true" />
          <span className="text-sm font-medium text-emerald-300">
            Garantía de 7 días: si no es para ti, te devolvemos tu dinero.
          </span>
        </div>
        <p className="text-sm text-navy-400">
          ¿Dudas antes de comprar? Escríbenos a{' '}
          <a
            href="mailto:soporte@hablemoscripto.io"
            className="text-brand-400 underline hover:text-brand-300"
          >
            soporte@hablemoscripto.io
          </a>
        </p>
      </div>
    </div>
  );
}
