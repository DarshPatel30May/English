import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CornerDownLeft, Search } from 'lucide-react';
import { getModule, search, type SearchEntry } from '../data';
import { cx } from './ui';

export function SearchResultRow({ entry, active, onSelect }: { entry: SearchEntry; active?: boolean; onSelect: () => void }) {
  const mod = getModule(entry.moduleId);
  return (
    <button
      type="button"
      onClick={onSelect}
      data-module={entry.moduleId}
      className={cx(
        'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
        active ? 'bg-surface-2' : 'hover:bg-surface-2',
      )}
    >
      <span className="mt-0.5 shrink-0 rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-ink">
        {entry.type}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium text-ink">{entry.title}</span>
        <span className="line-clamp-1 block text-sm text-ink-3">
          {mod ? `${mod.shortTitle} · ` : ''}
          {entry.snippet}
        </span>
      </span>
      <ArrowRight size={16} className="mt-1 shrink-0 text-ink-3" />
    </button>
  );
}

const suggestions = ['paradox', 'Country', 'prime chapters', 'Oombulgarri', 'reflection', 'anecdote', 'trust', 'cross-cutting'];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const results = useMemo(() => search(q, 12), [q]);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      window.setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => setActive(0), [q]);

  const go = (e: SearchEntry) => {
    onClose();
    navigate(e.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      if (results[active]) go(results[active]);
      else if (q.trim()) {
        onClose();
        navigate(`/search?q=${encodeURIComponent(q)}`);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[10vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            initial={{ y: -12, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={18} className="text-ink-3" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search modules, texts, themes, techniques, terms…"
                className="h-14 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-3"
                aria-label="Search query"
              />
              <kbd className="rounded border border-line px-1.5 text-[10px] font-semibold text-ink-3">Esc</kbd>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {!q.trim() && (
                <div className="p-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">Try</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button key={s} onClick={() => setQ(s)} className="rounded-full border border-line px-3 py-1 text-sm text-ink-2 hover:border-brand hover:text-ink">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {q.trim() && results.length === 0 && <p className="p-6 text-center text-ink-3">No results for “{q}”.</p>}
              {results.map((r, i) => (
                <SearchResultRow key={r.id} entry={r} active={i === active} onSelect={() => go(r)} />
              ))}
              {q.trim() && results.length > 0 && (
                <button
                  onClick={() => {
                    onClose();
                    navigate(`/search?q=${encodeURIComponent(q)}`);
                  }}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-brand-ink hover:bg-surface-2"
                >
                  See all results <CornerDownLeft size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
