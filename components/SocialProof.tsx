import React from 'react';
import { BadgeCheck, Users, Youtube, ArrowUpRight } from 'lucide-react';

// Real student testimonials go here as you collect them (friends/family/beta
// count — they actually used it). The block auto-hides while this is empty, so
// nothing placeholder ever ships. Example shape:
//   { quote: 'Por fin entendí cómo funciona una wallet sin sentirme tonto.', name: 'Ana', detail: 'Bogotá' }
const TESTIMONIALS: { quote: string; name: string; detail?: string }[] = [];

const SocialProof: React.FC = () => (
  <section className="py-20 bg-navy-950 border-y border-white/5">
    <div className="container max-w-5xl mx-auto px-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 mb-5">
          <span className="text-brand-400 text-xs font-black uppercase tracking-[0.2em]">Quién te enseña</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
          No es teoría de manual. Es alguien que vive el mercado.
        </h2>
      </div>

      {/* Founder credibility card — real social presence */}
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-navy-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-heading text-xl font-black text-navy-950">
            CB
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">CBas</span>
              <BadgeCheck size={18} className="text-brand-400" aria-label="Cuenta verificada" />
            </div>
            <p className="text-sm text-navy-400">@Crypto_CBas · En cripto desde 2017</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-2 text-sm text-navy-200">
            <Users size={16} className="text-brand-400" aria-hidden="true" />
            <span className="font-bold text-white">3.2K+</span> seguidores en X
          </span>
          <span className="flex items-center gap-2 text-sm text-navy-200">
            <Youtube size={16} className="text-brand-400" aria-hidden="true" /> Canal en YouTube
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://x.com/Crypto_CBas" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-navy-950/60 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-500/40"
          >
            Síguelo en X <ArrowUpRight size={15} className="text-navy-400" aria-hidden="true" />
          </a>
          <a
            href="https://youtube.com/@Crypto-CBas" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-navy-950/60 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-500/40"
          >
            <Youtube size={15} className="text-brand-400" aria-hidden="true" /> YouTube
          </a>
        </div>
      </div>

      {/* Student testimonials — auto-hidden until real quotes are added above */}
      {TESTIMONIALS.length > 0 && (
        <div className="mt-12">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Lo que dicen los primeros estudiantes
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-white/10 bg-navy-900/50 p-5">
                <blockquote className="text-sm leading-relaxed text-navy-200">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-xs text-navy-400">
                  <span className="font-semibold text-white">{t.name}</span>{t.detail ? ` · ${t.detail}` : ''}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default SocialProof;
