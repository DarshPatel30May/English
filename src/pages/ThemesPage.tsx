import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { crossThemes, getModule, modules } from '../data';
import { Breadcrumbs } from '../components/Navigation';
import { ModuleIcon } from '../components/ModuleIcon';
import { Chip, cx } from '../components/ui';

export function ThemesPage() {
  const [params, setParams] = useSearchParams();
  const sel = params.get('t') ?? crossThemes[0].id;
  const theme = crossThemes.find((t) => t.id === sel) ?? crossThemes[0];
  const [scope, setScope] = useState<'all' | (typeof modules)[number]['id']>('all');
  const entries = theme.entries.filter((e) => scope === 'all' || e.moduleId === scope);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Theme explorer' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Theme explorer</h1>
      <p className="mt-2 max-w-2xl text-ink-3">Select a theme to instantly see how it appears across your prescribed texts, with examples and techniques.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Themes">
          {crossThemes.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === theme.id}
              onClick={() => setParams({ t: t.id }, { replace: true })}
              className={cx(
                'shrink-0 rounded-xl border px-4 py-3 text-left transition-colors',
                t.id === theme.id ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-ink-3',
              )}
            >
              <span className={cx('block font-semibold', t.id === theme.id ? 'text-ink' : 'text-ink-2')}>{t.name}</span>
              <span className="hidden text-xs text-ink-3 lg:block">{t.blurb}</span>
            </button>
          ))}
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink">{theme.name}</h2>
              <p className="text-ink-3">{theme.blurb}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip active={scope === 'all'} onClick={() => setScope('all')}>
                All modules
              </Chip>
              {modules.map((m) => (
                <Chip key={m.id} active={scope === m.id} onClick={() => setScope(m.id)}>
                  {m.shortTitle}
                </Chip>
              ))}
            </div>
          </div>

          <div className="relative mt-6">
            <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-line sm:block" aria-hidden />
            <AnimatePresence mode="popLayout">
              {entries.map((e, i) => {
                const m = getModule(e.moduleId)!;
                return (
                  <motion.div
                    key={theme.id + e.moduleId}
                    data-module={e.moduleId}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative mb-4 sm:pl-16"
                  >
                    <span className="absolute left-0 top-5 hidden h-12 w-12 place-items-center rounded-2xl bg-accent text-white shadow-md dark:text-black sm:grid">
                      <ModuleIcon id={m.id} size={20} />
                    </span>
                    <div className="rounded-2xl border border-line bg-surface p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                          {m.code} · {m.title}
                        </p>
                        <p className="text-sm font-medium text-ink-3">{e.text}</p>
                      </div>
                      <p className="mt-2 text-ink">{e.example}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-ink-3">Techniques:</span>
                        {e.techniques.map((k) => (
                          <span key={k} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-ink">
                            {k}
                          </span>
                        ))}
                      </div>
                      <Link to={e.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink-2 hover:text-ink">
                        Go to the guide <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-surface-2/50 p-5">
            <p className="text-sm font-semibold text-ink">Module-specific themes</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {modules.map((m) => (
                <div key={m.id} data-module={m.id}>
                  <p className="text-xs font-semibold text-accent-ink">{m.shortTitle}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {m.themes.map((t) => (
                      <Link key={t.id} to={`/module/${m.id}?s=themes`} className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink-2 hover:border-accent hover:text-ink">
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
