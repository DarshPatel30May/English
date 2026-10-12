import type { LucideIcon } from 'lucide-react';

export function SubHeading({ icon: Icon, title, subtitle }: { icon: LucideIcon; title: string; subtitle?: string }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent">
        <Icon size={18} />
      </span>
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        {subtitle && <p className="text-sm text-ink-3">{subtitle}</p>}
      </div>
    </div>
  );
}
