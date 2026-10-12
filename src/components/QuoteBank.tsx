import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertTriangle, BadgeCheck, Check, Copy, Quote as QuoteIcon, Search } from 'lucide-react';
import { getModule } from '../data';
import { quotes as allQuotes, quoteThemeLabels, type Quote, type QuoteTheme } from '../data/quotes';
import { Badge, Chip, Long, cx } from './ui';

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          window.setTimeout(() => setDone(false), 1500);
        } catch {
          /* clipboard unavailable */
        }
      }}
      className="no-print inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-xs text-ink-3 hover:text-ink"
      aria-label="Copy quote"
    >
      {done ? <Check size={13} /> : <Copy size={13} />} {done ? 'Copied' : 'Copy'}
    </button>
  );
}

export function QuoteCard({ q, showModule = false }: { q: Quote; showModule?: boolean }) {
  const m = getModule(q.moduleId);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      data-module={q.moduleId}
      className="card avoid-break flex flex-col rounded-2xl border border-line bg-surface p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        {showModule && m && <Badge>{m.shortTitle}</Badge>}
        <span className="text-sm font-semibold text-accent-ink">{q.source}</span>
        {q.confidence === 'verified' ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-3" title="Wording confirmed against reliable published sources">
            <BadgeCheck size={13} /> Verified
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand-ink" title="Wording confirmed only by study notes. Check your copy.">
            <AlertTriangle size={12} /> Check your copy
          </span>
        )}
      </div>
      <blockquote className="relative mt-3 border-l-4 border-accent pl-4 font-display text-lg leading-snug text-ink sm:text-xl">
        <QuoteIcon size={16} className="absolute -left-[26px] -top-1 hidden text-accent/40" aria-hidden />“{q.text}”
      </blockquote>
      <p className="mt-2 text-xs text-ink-3">{q.where}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {q.techniques.map((t) => (
          <span key={t} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-ink">
            {t}
          </span>
        ))}
      </div>
      <Long>
        <p className="mt-3 text-sm text-ink-2">{q.analysis}</p>
      </Long>
      <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-sm text-ink">
        <span className="font-semibold text-brand-ink">Use it for: </span>
        {q.useFor}
      </p>
      {q.note && <p className="mt-2 text-xs italic text-ink-3">{q.note}</p>}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
        <div className="flex flex-wrap gap-1">
          {q.themes.map((t) => (
            <span key={t} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-3">
              {quoteThemeLabels[t]}
            </span>
          ))}
        </div>
        <CopyButton text={`“${q.text}” (${q.source})`} />
      </div>
    </motion.article>
  );
}

/** Filterable quote bank. Pass `quotes` for one module, or omit for all modules. */
export function QuoteBank({ quotes = allQuotes, showModule = false, note }: { quotes?: Quote[]; showModule?: boolean; note?: string }) {
  const [theme, setTheme] = useState<QuoteTheme | 'all'>('all');
  const [query, setQuery] = useState('');
  const themes = useMemo(() => [...new Set(quotes.flatMap((q) => q.themes))] as QuoteTheme[], [quotes]);
  const filtered = quotes.filter((q) => {
    if (theme !== 'all' && !q.themes.includes(theme)) return false;
    const s = query.trim().toLowerCase();
    if (!s) return true;
    return `${q.text} ${q.source} ${q.where} ${q.techniques.join(' ')} ${q.useFor}`.toLowerCase().includes(s);
  });

  return (
    <div>
      <div className="no-print mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <Chip active={theme === 'all'} onClick={() => setTheme('all')}>
            All ({quotes.length})
          </Chip>
          {themes.map((t) => (
            <Chip key={t} active={theme === t} onClick={() => setTheme(t)}>
              {quoteThemeLabels[t]}
            </Chip>
          ))}
        </div>
        <label className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 lg:w-64">
          <Search size={15} className="text-ink-3" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter quotes…"
            className="h-9 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
            aria-label="Filter quotes"
          />
        </label>
      </div>
      {note && <p className="mb-4 text-sm text-ink-3">{note}</p>}
      <div className={cx('grid gap-4 md:grid-cols-2')}>
        <AnimatePresence mode="popLayout">
          {filtered.map((q) => (
            <QuoteCard key={q.id} q={q} showModule={showModule} />
          ))}
        </AnimatePresence>
      </div>
      {filtered.length === 0 && <p className="rounded-2xl border border-dashed border-line p-8 text-center text-ink-3">No quotes match that filter.</p>}
    </div>
  );
}
