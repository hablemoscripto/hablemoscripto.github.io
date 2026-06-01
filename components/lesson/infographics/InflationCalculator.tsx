import React, { useMemo, useState } from 'react';
import { TrendingDown } from 'lucide-react';

// L1 · Interactive: feel inflation erode a fixed amount of savings over time.
// Pure formula (realValue = monto / (1+r)^años) so it's always exact — no dataset.
const COP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

const PRESETS: { label: string; rate: number }[] = [
  { label: 'Dólar ~3%', rate: 3 },
  { label: 'Colombia ~9%', rate: 9 },
  { label: 'Argentina ~140%', rate: 140 },
];

const InflationCalculator: React.FC = () => {
  const [monto, setMonto] = useState(1_000_000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(10);

  const { real, lost, lostPct, remainingPct } = useMemo(() => {
    const r = monto / Math.pow(1 + rate / 100, years);
    const l = monto - r;
    return { real: r, lost: l, lostPct: (l / monto) * 100, remainingPct: Math.max(0, (r / monto) * 100) };
  }, [monto, rate, years]);

  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40">
      <div className="border-b border-white/10 bg-gradient-to-br from-brand-500/10 to-brand-500/[0.03] p-5 sm:p-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-400">
          <TrendingDown size={13} aria-hidden="true" /> Calculadora interactiva
        </span>
        <h3 className="font-heading mt-3 text-xl font-bold text-white sm:text-2xl">Mira cómo la inflación se come tus ahorros</h3>
        <p className="mt-1 text-sm text-navy-300">El dólar perdió 87% de su poder de compra desde 1971. Mueve los controles y velo tú mismo.</p>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        {/* Monto */}
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor="ig-monto" className="text-sm font-medium text-navy-300">Guardas hoy</label>
            <span className="font-heading text-lg font-bold text-white">{COP.format(monto)}</span>
          </div>
          <input
            id="ig-monto" type="range" min={100_000} max={50_000_000} step={100_000}
            value={monto} onChange={(e) => setMonto(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-500"
            aria-label="Monto que guardas hoy en pesos"
          />
        </div>

        {/* Inflación */}
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor="ig-rate" className="text-sm font-medium text-navy-300">Inflación anual</label>
            <span className="font-heading text-lg font-bold text-white">{rate}%</span>
          </div>
          <input
            id="ig-rate" type="range" min={1} max={150} step={1}
            value={rate} onChange={(e) => setRate(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-500"
            aria-label="Inflación anual en porcentaje"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label} type="button" onClick={() => setRate(p.rate)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  rate === p.rate
                    ? 'border-brand-500/50 bg-brand-500/15 text-brand-300'
                    : 'border-white/10 bg-navy-950/50 text-navy-300 hover:border-brand-500/30'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Años */}
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor="ig-years" className="text-sm font-medium text-navy-300">Después de</label>
            <span className="font-heading text-lg font-bold text-white">{years} {years === 1 ? 'año' : 'años'}</span>
          </div>
          <input
            id="ig-years" type="range" min={1} max={40} step={1}
            value={years} onChange={(e) => setYears(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-500"
            aria-label="Cantidad de años"
          />
        </div>

        {/* Result */}
        <div className="rounded-xl border border-white/10 bg-navy-950/60 p-5" aria-live="polite">
          <p className="text-sm text-navy-300">
            En {years} {years === 1 ? 'año' : 'años'}, tu dinero tendrá el poder de compra de:
          </p>
          <p className="font-heading mt-1 text-4xl font-black leading-none text-white sm:text-5xl">{COP.format(Math.round(real))}</p>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-red-500/20">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-300"
              style={{ width: `${remainingPct}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-navy-400">Poder de compra restante: <span className="font-semibold text-brand-400">{remainingPct.toFixed(0)}%</span></span>
            <span className="text-navy-400">Perdido: <span className="font-semibold text-red-400">{lostPct.toFixed(0)}%</span></span>
          </div>

          <p className="mt-4 text-sm text-navy-300">
            Perdiste el equivalente a <span className="font-bold text-red-400">{COP.format(Math.round(lost))}</span> sin gastar un solo peso.
          </p>
        </div>
      </div>

      <figcaption className="border-t border-white/10 bg-navy-950/60 px-5 py-3 text-center text-xs text-navy-300">
        Eso es lo que significa "dinero que pierde valor". <span className="font-semibold text-brand-400">Por esto existe este curso.</span>
      </figcaption>
    </figure>
  );
};

export default InflationCalculator;
