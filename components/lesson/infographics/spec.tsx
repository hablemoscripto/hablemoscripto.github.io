import React from 'react';
import {
  CheckCircle, X, AlertTriangle, TrendingDown, TrendingUp, Landmark, Banknote, Coins, Wallet,
  Shield, Lock, Globe, Network, Server, Cpu, Zap, Users, Eye, EyeOff, Brain, Target, Clock,
  Layers, RefreshCw, Percent, PiggyBank, Search, BarChart3, Activity, Droplet, Scale, Flame,
  Rocket, AlertCircle, ArrowRight, Gem, Key, LineChart, Building2, HandCoins, Scissors, Repeat,
  type LucideIcon,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Spec-driven infographics. A lesson section references one of these specs
// (see data/lessonInfographics.ts) and this renders it on-brand. Real text,
// crisp, responsive, accessible. Bespoke/interactive graphics use kind:
// 'component' to point at a hand-built component in INFOGRAPHIC_MAP instead.
// ---------------------------------------------------------------------------

export type Tone = 'amber' | 'red' | 'green' | 'neutral';

export type InfographicSpec =
  | { kind: 'component'; key: string }
  | {
      kind: 'comparison';
      left: { title: string; tone?: Tone; points: string[] };
      right: { title: string; tone?: Tone; points: string[] };
      note?: string;
    }
  | { kind: 'statCards'; intro?: string; columns?: 2 | 3 | 4; cards: { value: string; label: string; sublabel?: string; tone?: Tone; flag?: string }[] }
  | { kind: 'iconGrid'; intro?: string; columns?: 2 | 3; items: { icon: string; title: string; text: string }[] }
  | { kind: 'steps'; intro?: string; steps: { title: string; detail: string; warning?: boolean }[] }
  | { kind: 'timeline'; intro?: string; milestones: { label: string; detail?: string; highlight?: boolean }[] }
  | { kind: 'checklist'; good: { title: string; items: string[] }; bad: { title: string; items: string[] } };

const ICONS: Record<string, LucideIcon> = {
  CheckCircle, X, AlertTriangle, TrendingDown, TrendingUp, Landmark, Banknote, Coins, Wallet,
  Shield, Lock, Globe, Network, Server, Cpu, Zap, Users, Eye, EyeOff, Brain, Target, Clock,
  Layers, RefreshCw, Percent, PiggyBank, Search, BarChart3, Activity, Droplet, Scale, Flame,
  Rocket, AlertCircle, Gem, Key, LineChart, Building2, HandCoins, Scissors, Repeat,
};

const TONE: Record<Tone, { accent: string; chip: string; border: string; grad: string; mark: string }> = {
  amber: { accent: 'text-brand-300', chip: 'bg-brand-500/15', border: 'border-brand-500/30', grad: 'from-brand-500/15 to-brand-500/[0.04]', mark: 'text-brand-400' },
  red: { accent: 'text-red-300', chip: 'bg-red-500/15', border: 'border-red-500/30', grad: 'from-red-500/15 to-red-500/[0.04]', mark: 'text-red-400' },
  green: { accent: 'text-emerald-300', chip: 'bg-emerald-500/15', border: 'border-emerald-500/30', grad: 'from-emerald-500/15 to-emerald-500/[0.04]', mark: 'text-emerald-400' },
  neutral: { accent: 'text-white', chip: 'bg-white/10', border: 'border-white/10', grad: 'from-white/[0.06] to-white/[0.02]', mark: 'text-navy-300' },
};

const FIG = 'not-prose my-8 rounded-2xl border border-white/10';
const COLS: Record<number, string> = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' };

const Intro: React.FC<{ text?: string }> = ({ text }) =>
  text ? <p className="mb-4 text-sm leading-relaxed text-navy-300">{text}</p> : null;

const Comparison: React.FC<{ s: Extract<InfographicSpec, { kind: 'comparison' }> }> = ({ s }) => {
  const side = (data: { title: string; tone?: Tone; points: string[] }, tone: Tone, isLeft: boolean) => {
    const t = TONE[data.tone ?? tone];
    const Mark = tone === 'green' ? CheckCircle : tone === 'red' ? X : ArrowRight;
    return (
      <div className={`bg-gradient-to-br ${t.grad} p-5 sm:p-6 ${isLeft ? 'sm:border-r border-white/10' : ''}`}>
        <h4 className={`mb-4 flex items-center gap-2 font-bold ${t.accent}`}>
          <Mark size={18} className={t.mark} aria-hidden="true" /> {data.title}
        </h4>
        <ul className="space-y-2.5">
          {data.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-navy-200">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.chip}`} aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <figure className={`${FIG} overflow-hidden`}>
      <div className="grid sm:grid-cols-2">
        {side(s.left, s.left.tone ?? 'green', true)}
        {side(s.right, s.right.tone ?? 'red', false)}
      </div>
      {s.note && (
        <figcaption className="flex items-center justify-center gap-2 border-t border-white/10 bg-navy-950/60 px-4 py-3 text-center text-xs text-navy-300">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" /> {s.note}
        </figcaption>
      )}
    </figure>
  );
};

const StatCards: React.FC<{ s: Extract<InfographicSpec, { kind: 'statCards' }> }> = ({ s }) => (
  <figure className="not-prose my-8">
    <Intro text={s.intro} />
    <div className={`grid gap-3 ${COLS[s.columns ?? 3]}`}>
      {s.cards.map((c, i) => {
        const t = TONE[c.tone ?? 'amber'];
        return (
          <div key={i} className="rounded-2xl border border-white/10 bg-navy-900/50 p-5">
            <div className="flex items-center gap-2">
              {c.flag && <span className="text-xl" aria-hidden="true">{c.flag}</span>}
              <p className="text-sm font-semibold text-navy-200">{c.label}</p>
            </div>
            <p className={`font-heading mt-2 text-3xl font-black ${t.mark}`}>{c.value}</p>
            {c.sublabel && <p className="mt-1 text-xs leading-snug text-navy-400">{c.sublabel}</p>}
          </div>
        );
      })}
    </div>
  </figure>
);

const IconGrid: React.FC<{ s: Extract<InfographicSpec, { kind: 'iconGrid' }> }> = ({ s }) => (
  <figure className={`${FIG} bg-navy-900/40 p-5 sm:p-6`}>
    <Intro text={s.intro} />
    <div className={`grid gap-4 ${COLS[s.columns ?? 3]}`}>
      {s.items.map((it, i) => {
        const Icon = ICONS[it.icon] ?? Layers;
        return (
          <div key={i} className="rounded-xl border border-white/10 bg-navy-950/50 p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
              <Icon size={20} className="text-brand-400" aria-hidden="true" />
            </div>
            <p className="mb-1 text-sm font-bold text-white">{it.title}</p>
            <p className="text-xs leading-relaxed text-navy-300">{it.text}</p>
          </div>
        );
      })}
    </div>
  </figure>
);

const Steps: React.FC<{ s: Extract<InfographicSpec, { kind: 'steps' }> }> = ({ s }) => (
  <figure className={`${FIG} bg-navy-900/40 p-5 sm:p-6`}>
    <Intro text={s.intro} />
    <ol className="space-y-3">
      {s.steps.map((st, i) => (
        <li key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${st.warning ? 'bg-red-500/15 text-red-400' : 'bg-brand-500/15 text-brand-400'}`}>
              {i + 1}
            </span>
            {i < s.steps.length - 1 && <span className="my-1 w-px flex-1 bg-white/10" aria-hidden="true" />}
          </div>
          <div className={`flex-1 rounded-xl border p-4 ${st.warning ? 'border-red-500/25 bg-red-500/[0.06]' : 'border-white/10 bg-navy-950/50'}`}>
            <p className={`text-sm font-bold ${st.warning ? 'text-red-300' : 'text-white'}`}>{st.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-navy-300">{st.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  </figure>
);

const Timeline: React.FC<{ s: Extract<InfographicSpec, { kind: 'timeline' }> }> = ({ s }) => (
  <figure className={`${FIG} bg-navy-900/40 p-5 sm:p-6`}>
    <Intro text={s.intro} />
    <ol className="relative space-y-4 pl-6">
      <span className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" aria-hidden="true" />
      {s.milestones.map((m, i) => (
        <li key={i} className="relative">
          <span className={`absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 ${m.highlight ? 'border-brand-400 bg-brand-500' : 'border-navy-600 bg-navy-800'}`} aria-hidden="true" />
          <p className={`text-sm font-bold ${m.highlight ? 'text-brand-300' : 'text-white'}`}>{m.label}</p>
          {m.detail && <p className="mt-0.5 text-xs leading-relaxed text-navy-300">{m.detail}</p>}
        </li>
      ))}
    </ol>
  </figure>
);

const Checklist: React.FC<{ s: Extract<InfographicSpec, { kind: 'checklist' }> }> = ({ s }) => {
  const col = (data: { title: string; items: string[] }, good: boolean) => {
    const t = TONE[good ? 'green' : 'red'];
    const Mark = good ? CheckCircle : X;
    return (
      <div className={`rounded-2xl border ${t.border} bg-gradient-to-br ${t.grad} p-5`}>
        <h4 className={`mb-3 flex items-center gap-2 font-bold ${t.accent}`}>
          <Mark size={18} className={t.mark} aria-hidden="true" /> {data.title}
        </h4>
        <ul className="space-y-2.5">
          {data.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-navy-200">
              <Mark size={15} className={`${t.mark} mt-0.5 shrink-0`} aria-hidden="true" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <figure className="not-prose my-8 grid gap-3 sm:grid-cols-2">
      {col(s.good, true)}
      {col(s.bad, false)}
    </figure>
  );
};

export const InfographicSpecView: React.FC<{ spec: InfographicSpec }> = ({ spec }) => {
  switch (spec.kind) {
    case 'comparison': return <Comparison s={spec} />;
    case 'statCards': return <StatCards s={spec} />;
    case 'iconGrid': return <IconGrid s={spec} />;
    case 'steps': return <Steps s={spec} />;
    case 'timeline': return <Timeline s={spec} />;
    case 'checklist': return <Checklist s={spec} />;
    default: return null;
  }
};
