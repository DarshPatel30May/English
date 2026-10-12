import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ChevronRight, Home, LayoutDashboard, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { modules, sections } from '../data';
import type { ModuleId } from '../data/types';
import { useProgress } from '../lib/progress';
import { cx } from './ui';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="no-print">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-3">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-ink">
            <Home size={14} /> Dashboard
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="inline-flex items-center gap-1">
            <ChevronRight size={14} className="opacity-60" />
            {c.to ? (
              <Link to={c.to} className="hover:text-ink">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink-2">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function useActiveSection() {
  const [active, setActive] = useState<string>('overview');
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-90px 0px -60% 0px', threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

/** Collapsible, sticky A–H section navigation for module pages. */
export function SectionNav({ moduleId, breakdownLabel, variant }: { moduleId: ModuleId; breakdownLabel: string; variant: 'desktop' | 'mobile' }) {
  const active = useActiveSection();
  const { isDone } = useProgress();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const list = (
    <ul className="space-y-0.5">
      {sections.map((s) => {
        const done = isDone(`${moduleId}:${s.id}`);
        return (
          <li key={s.id}>
            <button
              onClick={() => jump(s.id)}
              aria-current={active === s.id ? 'true' : undefined}
              className={cx(
                'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors',
                active === s.id ? 'bg-accent-soft font-semibold text-accent-ink' : 'text-ink-2 hover:bg-surface-2 hover:text-ink',
              )}
            >
              <span
                className={cx(
                  'grid h-5 w-5 shrink-0 place-items-center rounded-md text-[11px] font-bold',
                  done ? 'bg-brand text-black' : active === s.id ? 'bg-accent text-white dark:text-black' : 'bg-surface-2 text-ink-3',
                )}
              >
                {s.letter}
              </span>
              <span className="truncate">{s.id === 'breakdown' ? breakdownLabel : s.label}</span>
            </button>
          </li>
        );
      })}
      <li>
        <button onClick={() => jump('sources')} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-sm text-ink-3 hover:text-ink">
          <span className="grid h-5 w-5 place-items-center text-[11px]">↗</span> Sources
        </button>
      </li>
    </ul>
  );

  if (variant === 'desktop')
    return (
      <aside className={cx('no-print sticky top-20 hidden self-start lg:block', collapsed ? 'w-12' : 'w-60')}>
        <div className="rounded-2xl border border-line bg-surface p-2">
          <div className="flex items-center justify-between px-1.5 pb-1.5">
            {!collapsed && <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">On this page</span>}
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="grid h-7 w-7 place-items-center rounded-md text-ink-3 hover:bg-surface-2 hover:text-ink"
              aria-label={collapsed ? 'Expand section navigation' : 'Collapse section navigation'}
              aria-expanded={!collapsed}
            >
              {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
            </button>
          </div>
          {!collapsed && list}
          {collapsed && (
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => jump(s.id)}
                    title={s.label}
                    className={cx('grid h-8 w-8 place-items-center rounded-lg text-xs font-bold', active === s.id ? 'bg-accent text-white dark:text-black' : 'text-ink-3 hover:bg-surface-2')}
                  >
                    {s.letter}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {!collapsed && (
            <div className="mt-2 border-t border-line pt-2">
              <Link to="/" className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-ink-3 hover:text-ink">
                <LayoutDashboard size={15} /> Back to dashboard
              </Link>
              <div className="mt-1 px-2.5 text-xs text-ink-3">Other modules:</div>
              <div className="mt-1 flex flex-wrap gap-1 px-2">
                {modules
                  .filter((m) => m.id !== moduleId)
                  .map((m) => (
                    <Link key={m.id} to={`/module/${m.id}`} data-module={m.id} className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
                      {m.shortTitle.replace('Module ', '')}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    );

  return (
      <div className="no-print sticky top-16 z-30 -mx-4 border-b border-line bg-bg/90 px-4 py-2 backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
          aria-expanded={mobileOpen}
        >
          <span>
            Section {sections.find((s) => s.id === active)?.letter}: {sections.find((s) => s.id === active)?.label}
          </span>
          <ChevronDown size={16} className={cx('transition-transform', mobileOpen && 'rotate-180')} />
        </button>
        {mobileOpen && <div className="mt-2 rounded-xl border border-line bg-surface p-2 shadow-lg">{list}</div>}
      </div>
  );
}
