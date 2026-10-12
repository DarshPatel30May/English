import { Link } from 'react-router';
import { Check, ExternalLink, RotateCcw } from 'lucide-react';
import { checklistFor, modules } from '../data';
import { useProgress } from '../lib/progress';
import { Breadcrumbs } from '../components/Navigation';
import { ModuleIcon } from '../components/ModuleIcon';
import { ProgressBar, cx } from '../components/ui';

export function ChecklistPage() {
  const { isDone, toggle, setMany, resetAll } = useProgress();
  const all = modules.flatMap((m) => checklistFor(m.id));
  const total = all.filter((i) => isDone(i.id)).length;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Revision checklist' }]} />
      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">Revision checklist</h1>
          <p className="mt-2 text-ink-3">Tick sections as you revise them. Progress is saved in this browser.</p>
        </div>
        <button
          onClick={() => {
            if (window.confirm('Reset all checklist progress?')) resetAll();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 hover:text-ink"
        >
          <RotateCcw size={14} /> Reset all
        </button>
      </div>
      <div className="mt-6 max-w-md">
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium text-ink">Overall</span>
          <span className="text-ink-3">
            {total} / {all.length}
          </span>
        </div>
        <ProgressBar value={total / all.length} className="h-2" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {modules.map((m) => {
          const items = checklistFor(m.id);
          const done = items.filter((i) => isDone(i.id)).length;
          const allDone = done === items.length;
          return (
            <section key={m.id} data-module={m.id} className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                    <ModuleIcon id={m.id} size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">{m.code}</p>
                    <h2 className="font-display text-lg font-semibold text-ink">{m.title}</h2>
                  </div>
                </div>
                <button onClick={() => setMany(items.map((i) => i.id), !allDone)} className="shrink-0 text-xs font-semibold text-brand-ink hover:underline">
                  {allDone ? 'Clear all' : 'Tick all'}
                </button>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ProgressBar value={done / items.length} />
                <span className="shrink-0 text-xs text-ink-3">
                  {done}/{items.length}
                </span>
              </div>
              <ul className="mt-4 space-y-1">
                {items.map((i) => {
                  const d = isDone(i.id);
                  return (
                    <li key={i.id} className="group flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-surface-2">
                      <button
                        onClick={() => toggle(i.id)}
                        role="checkbox"
                        aria-checked={d}
                        aria-label={i.label}
                        className={cx('grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors', d ? 'border-brand bg-brand text-black' : 'border-line')}
                      >
                        {d && <Check size={13} strokeWidth={3} />}
                      </button>
                      <span onClick={() => toggle(i.id)} className={cx('flex-1 cursor-pointer text-sm', d ? 'text-ink-3 line-through' : 'text-ink')}>
                        {i.label}
                      </span>
                      <Link to={i.href} className="text-ink-3 opacity-0 transition-opacity hover:text-ink group-hover:opacity-100 focus:opacity-100" aria-label={`Open ${i.label}`}>
                        <ExternalLink size={14} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
