import React, { useState } from 'react';

// L13 · Interactive anatomy of a candlestick. Tap a data point to highlight it
// on the candle and read what it means; toggle alcista/bajista to see how
// apertura/cierre swap. Self-contained, exact — no market data needed.
type PartKey = 'maximo' | 'cierre' | 'apertura' | 'minimo';

const Y = { max: 28, bodyTop: 96, bodyBottom: 200, min: 268 };

const CandlestickAnatomy: React.FC = () => {
  const [bullish, setBullish] = useState(true);
  const [sel, setSel] = useState<PartKey>('cierre');

  const color = bullish ? '#10b981' : '#ef4444';
  // Bullish: close at top of body, open at bottom. Bearish: reversed.
  const yFor = (k: PartKey): number =>
    k === 'maximo' ? Y.max
      : k === 'minimo' ? Y.min
      : k === 'cierre' ? (bullish ? Y.bodyTop : Y.bodyBottom)
      : (bullish ? Y.bodyBottom : Y.bodyTop);

  const PARTS: { key: PartKey; label: string; text: string }[] = [
    { key: 'maximo', label: 'Máximo', text: 'El precio más alto que tocó en el periodo: la punta de la mecha superior.' },
    { key: 'apertura', label: 'Apertura', text: 'El precio al que abrió el periodo (una de las bases del cuerpo).' },
    { key: 'cierre', label: 'Cierre', text: 'El precio al que cerró. Si el cierre quedó por encima de la apertura, la vela es alcista (verde).' },
    { key: 'minimo', label: 'Mínimo', text: 'El precio más bajo que tocó: la punta de la mecha inferior.' },
  ];
  const selY = yFor(sel);
  const selPart = PARTS.find((p) => p.key === sel)!;

  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4 sm:p-5">
        <p className="font-heading text-sm font-bold text-white sm:text-base">Anatomía de una vela</p>
        <div className="flex rounded-lg border border-white/10 bg-navy-950/60 p-0.5 text-xs font-semibold">
          <button type="button" onClick={() => setBullish(true)} className={`rounded-md px-3 py-1.5 transition-colors ${bullish ? 'bg-emerald-500/20 text-emerald-300' : 'text-navy-400'}`}>Alcista</button>
          <button type="button" onClick={() => setBullish(false)} className={`rounded-md px-3 py-1.5 transition-colors ${!bullish ? 'bg-red-500/20 text-red-300' : 'text-navy-400'}`}>Bajista</button>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-[160px_1fr] sm:p-6">
        {/* Candle */}
        <div className="flex justify-center">
          <svg viewBox="0 0 160 296" className="h-64 w-auto" role="img" aria-label={`Vela ${bullish ? 'alcista' : 'bajista'}`}>
            {/* wicks */}
            <line x1="80" y1={Y.max} x2="80" y2={Y.bodyTop} stroke={color} strokeWidth="3" />
            <line x1="80" y1={Y.bodyBottom} x2="80" y2={Y.min} stroke={color} strokeWidth="3" />
            {/* body */}
            <rect x="52" y={Y.bodyTop} width="56" height={Y.bodyBottom - Y.bodyTop} rx="4" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="2.5" />
            {/* selected guide */}
            <line x1="20" y1={selY} x2="140" y2={selY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="80" cy={selY} r="6" fill="#f59e0b" />
            <circle cx="80" cy={selY} r="11" fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="2" />
          </svg>
        </div>

        {/* Controls + explanation */}
        <div>
          <div className="grid grid-cols-2 gap-2">
            {PARTS.map((p) => (
              <button
                key={p.key} type="button" onClick={() => setSel(p.key)}
                className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                  sel === p.key ? 'border-brand-500/50 bg-brand-500/15 text-brand-300' : 'border-white/10 bg-navy-950/50 text-navy-300 hover:border-brand-500/30'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-navy-950/60 p-4" aria-live="polite">
            <p className="text-sm font-bold text-brand-400">{selPart.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-navy-300">{selPart.text}</p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-navy-400">
            El <span className="font-semibold text-navy-200">cuerpo</span> es la distancia entre apertura y cierre; las <span className="font-semibold text-navy-200">mechas</span> marcan hasta dónde llegó el precio. Cambia entre alcista y bajista y observa cómo se invierten apertura y cierre.
          </p>
        </div>
      </div>
    </figure>
  );
};

export default CandlestickAnatomy;
