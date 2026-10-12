import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Check, Circle } from 'lucide-react';
import { usePrefs } from '../lib/prefs';
import { useProgress } from '../lib/progress';

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

export function Card({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cx('card rounded-2xl border border-line bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Badge({ children, tone = 'accent', className }: { children: ReactNode; tone?: 'accent' | 'brand' | 'neutral'; className?: string }) {
  const tones = {
    accent: 'bg-accent-soft text-accent-ink',
    brand: 'bg-brand-soft text-brand-ink',
    neutral: 'bg-surface-2 text-ink-2',
  };
  return (
    <span className={cx('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx('text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink', className)}>{children}</p>;
}

export function SectionHeading({ letter, title, subtitle, action }: { letter?: string; title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="flex items-start gap-4">
        {letter && (
          <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-lg font-bold text-white dark:text-black">
            {letter}
          </span>
        )}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 max-w-2xl text-ink-3">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

/** Longer explanatory content, hidden in Visual learning mode. */
export function Long({ children }: { children: ReactNode }) {
  const { mode } = usePrefs();
  if (mode === 'visual') return null;
  return <>{children}</>;
}

/** Diagram content, replaced by `fallback` in Text-only mode. */
export function Diagram({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const { mode } = usePrefs();
  if (mode === 'text') return <>{fallback}</>;
  return <>{children}</>;
}

export function Chip({
  active,
  children,
  className,
  ...rest
}: { active?: boolean } & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-transparent bg-ink text-bg'
          : 'border-line bg-surface text-ink-2 hover:border-ink-3 hover:text-ink',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function MarkComplete({ id, label = 'Mark section complete' }: { id: string; label?: string }) {
  const { isDone, toggle } = useProgress();
  const done = isDone(id);
  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={done}
      className={cx(
        'no-print inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        done ? 'border-transparent bg-brand text-black' : 'border-line text-ink-2 hover:border-brand hover:text-ink',
      )}
    >
      {done ? <Check size={16} strokeWidth={2.5} /> : <Circle size={16} />}
      {done ? 'Completed' : label}
    </button>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const pct = Math.round(value * 100);
  return (
    <div className={cx('h-1.5 w-full overflow-hidden rounded-full bg-surface-2', className)} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-brand transition-[width] duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function KeyList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cx('space-y-2', className)}>
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-ink-2">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Note({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'accent' }) {
  return (
    <div
      className={cx(
        'rounded-xl border-l-4 px-4 py-3 text-sm',
        tone === 'brand' ? 'border-brand bg-brand-soft text-ink-2' : 'border-accent bg-accent-soft text-ink-2',
      )}
    >
      {children}
    </div>
  );
}
