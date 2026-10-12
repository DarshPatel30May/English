import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Theme } from '../data/types';
import { Diagram, KeyList, cx } from './ui';

/** Circular diagram showing how a module's themes connect. Click a theme to highlight its links. */
export function ThemeWeb({ themes }: { themes: Theme[] }) {
  const [sel, setSel] = useState<string>(themes[0]?.id);
  const size = 420;
  const c = size / 2;
  const r = 150;
  const pts = themes.map((t, i) => {
    const a = (i / themes.length) * Math.PI * 2 - Math.PI / 2;
    return { t, x: c + Math.cos(a) * r, y: c + Math.sin(a) * r, a };
  });
  const pos = Object.fromEntries(pts.map((p) => [p.t.id, p]));
  const links: [string, string][] = [];
  for (const t of themes)
    for (const rel of t.related)
      if (pos[rel] && !links.some(([a, b]) => (a === rel && b === t.id) || (a === t.id && b === rel))) links.push([t.id, rel]);

  const selected = themes.find((t) => t.id === sel);
  const isLinked = (id: string) => id === sel || links.some(([a, b]) => (a === sel && b === id) || (b === sel && a === id));

  return (
    <Diagram>
      <div className="grid items-center gap-6 rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <svg viewBox={`-95 -24 ${size + 190} ${size + 48}`} className="mx-auto w-full max-w-[520px]" role="img" aria-label="Theme connections diagram">
          <circle cx={c} cy={c} r={r} fill="none" stroke="var(--line)" strokeDasharray="3 6" />
          {links.map(([a, b]) => {
            const active = a === sel || b === sel;
            return (
              <path
                key={`${a}-${b}`}
                d={`M${pos[a].x},${pos[a].y} Q${c},${c} ${pos[b].x},${pos[b].y}`}
                fill="none"
                stroke={active ? 'var(--accent)' : 'var(--line)'}
                strokeWidth={active ? 2.5 : 1.25}
                opacity={sel && !active ? 0.35 : 1}
                style={{ transition: 'all .25s' }}
              />
            );
          })}
          {pts.map(({ t, x, y, a }) => {
            const active = t.id === sel;
            const linked = isLinked(t.id);
            const anchor = Math.cos(a) > 0.3 ? 'start' : Math.cos(a) < -0.3 ? 'end' : 'middle';
            const lx = x + Math.cos(a) * 18;
            const ly = y + Math.sin(a) * 18 + (Math.abs(Math.cos(a)) <= 0.3 ? (Math.sin(a) > 0 ? 10 : -4) : 4);
            const words = t.name.split(' ');
            const lines: string[] = [];
            let line = '';
            for (const w of words) {
              if ((line + ' ' + w).trim().length > 16) {
                lines.push(line.trim());
                line = w;
              } else line += ' ' + w;
            }
            lines.push(line.trim());
            return (
              <g
                key={t.id}
                role="button"
                tabIndex={0}
                aria-pressed={active}
                aria-label={t.name}
                onClick={() => setSel(t.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSel(t.id))}
                className="cursor-pointer outline-none"
                opacity={linked ? 1 : 0.45}
                style={{ transition: 'opacity .25s' }}
              >
                <circle cx={x} cy={y} r={active ? 13 : 9} fill={active ? 'var(--accent)' : 'var(--surface)'} stroke="var(--accent)" strokeWidth={2} style={{ transition: 'all .25s' }} />
                <text x={lx} y={ly - (lines.length - 1) * 7} textAnchor={anchor} fontSize="12" fontWeight={active ? 700 : 500} fill="var(--ink)">
                  {lines.map((l, i) => (
                    <tspan key={i} x={lx} dy={i === 0 ? 0 : 14}>
                      {l}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div key={selected.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Selected theme</p>
              <h4 className="mt-1 font-display text-2xl font-semibold text-ink">{selected.name}</h4>
              <p className="mt-2 text-ink-2">{selected.summary}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-3">Connects to</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.related.map((id) => {
                  const rel = themes.find((t) => t.id === id);
                  return rel ? (
                    <button key={id} onClick={() => setSel(id)} className={cx('rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-sm font-medium text-accent-ink hover:border-accent')}>
                      {rel.name}
                    </button>
                  ) : null;
                })}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-3">Evidence</p>
              <KeyList items={selected.examples} className="mt-2 text-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Diagram>
  );
}
