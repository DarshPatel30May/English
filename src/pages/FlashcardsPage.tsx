import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Shuffle, X } from 'lucide-react';
import { flashcards, getModule, modules, type Flashcard } from '../data';
import type { ModuleId } from '../data/types';
import { useProgress } from '../lib/progress';
import { Breadcrumbs } from '../components/Navigation';
import { Chip, ProgressBar, cx } from '../components/ui';

const categories: Flashcard['category'][] = ['Rubric', 'Theme', 'Technique', 'Text', 'Character', 'Terminology', 'Misconception'];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardsPage() {
  const [mod, setMod] = useState<'all' | ModuleId>('all');
  const [cat, setCat] = useState<'all' | Flashcard['category']>('all');
  const [hideKnown, setHideKnown] = useState(false);
  const [order, setOrder] = useState<string[] | null>(null);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { known, setKnown, resetKnown } = useProgress();

  const deck = useMemo(() => {
    let d = flashcards.filter((c) => (mod === 'all' || c.moduleId === mod) && (cat === 'all' || c.category === cat));
    if (hideKnown) d = d.filter((c) => !known[c.id]);
    if (order) {
      const pos = new Map(order.map((id, idx) => [id, idx]));
      d = [...d].sort((a, b) => (pos.get(a.id) ?? 0) - (pos.get(b.id) ?? 0));
    }
    return d;
  }, [mod, cat, hideKnown, known, order]);

  useEffect(() => {
    setI(0);
    setFlipped(false);
  }, [mod, cat, hideKnown, order]);

  const idx = deck.length ? Math.min(i, deck.length - 1) : 0;
  const card = deck[idx];
  const m = card ? getModule(card.moduleId) : undefined;
  const knownCount = deck.filter((c) => known[c.id]).length;
  const totalInScope = flashcards.filter((c) => (mod === 'all' || c.moduleId === mod) && (cat === 'all' || c.category === cat));
  const knownInScope = totalInScope.filter((c) => known[c.id]).length;

  const go = useCallback(
    (d: number) => {
      if (!deck.length) return;
      setFlipped(false);
      setI((x) => (Math.min(x, deck.length - 1) + d + deck.length) % deck.length);
    },
    [deck.length],
  );

  const mark = (value: boolean) => {
    if (!card) return;
    setKnown(card.id, value);
    if (!hideKnown || !value) go(1);
    else setFlipped(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if ((e.key === ' ' || e.key === 'Enter') && !(t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement)) {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Flashcards' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Revision flashcards</h1>
      <p className="mt-2 text-ink-3">{flashcards.length} cards generated from this guide’s content. Click a card (or press Space) to flip; use the arrow keys to move between cards.</p>

      <div className="mt-6 space-y-3">
        <div className="flex flex-wrap gap-2">
          <Chip active={mod === 'all'} onClick={() => setMod('all')}>
            All modules
          </Chip>
          {modules.map((x) => (
            <Chip key={x.id} active={mod === x.id} onClick={() => setMod(x.id)}>
              {x.shortTitle}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-ink-3">Type</span>
          {(['all', ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cx('rounded-full px-2.5 py-1 text-xs font-medium', cat === c ? 'bg-brand text-black' : 'bg-surface-2 text-ink-2 hover:text-ink')}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-48 flex-1">
          <div className="mb-1 flex justify-between text-xs text-ink-3">
            <span>
              Known: {knownInScope} / {totalInScope.length}
            </span>
            <span>
              Card {deck.length ? idx + 1 : 0} of {deck.length}
            </span>
          </div>
          <ProgressBar value={totalInScope.length ? knownInScope / totalInScope.length : 0} />
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setOrder(shuffleArray(flashcards.map((c) => c.id)))} className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 hover:text-ink">
            <Shuffle size={14} /> Shuffle
          </button>
          <button onClick={() => setHideKnown((h) => !h)} aria-pressed={hideKnown} className={cx('rounded-full border px-3 py-1.5 text-sm', hideKnown ? 'border-brand bg-brand-soft text-ink' : 'border-line text-ink-2 hover:text-ink')}>
            {hideKnown ? 'Showing unknown only' : 'Hide known cards'}
          </button>
          <button
            onClick={() => {
              resetKnown();
              setOrder(null);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 hover:text-ink"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      {card ? (
        <div data-module={card.moduleId} className="mt-6">
          <div className="flip-scene">
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? 'Show question' : 'Show answer'}
              className={cx('flip-card relative block min-h-[340px] w-full text-left', flipped && 'is-flipped')}
            >
              <div className="flip-face absolute inset-0 flex flex-col rounded-3xl border border-line bg-surface p-6 shadow-lg sm:p-10">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-accent-ink">{m?.shortTitle}</span>
                  <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-ink-3">{card.category}</span>
                </div>
                <p className="my-auto py-6 text-center font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{card.front}</p>
                <p className="text-center text-xs text-ink-3">Click to reveal the answer</p>
              </div>
              <div className="flip-face flip-back absolute inset-0 flex flex-col overflow-y-auto rounded-3xl border border-accent/50 bg-accent-soft p-6 shadow-lg sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Answer</p>
                <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-ink sm:text-lg">{card.back}</p>
                {known[card.id] && <p className="mt-auto pt-4 text-xs font-semibold text-brand-ink">✓ Marked as known</p>}
              </div>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink-2 hover:text-ink" aria-label="Previous card">
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              <button onClick={() => mark(false)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-2 hover:text-ink">
                <X size={15} /> Review again
              </button>
              <button onClick={() => mark(true)} className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                <Check size={15} /> Got it
              </button>
            </div>
            <button onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink-2 hover:text-ink" aria-label="Next card">
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-ink-3">{knownCount > 0 && !hideKnown ? `${knownCount} card(s) in this deck marked known.` : ''}</p>
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-line p-12 text-center">
          <p className="font-display text-2xl font-semibold text-ink">All done!</p>
          <p className="mt-2 text-ink-3">You’ve marked every card in this selection as known.</p>
          <button onClick={() => setHideKnown(false)} className="mt-4 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg">
            Show all cards again
          </button>
        </div>
      )}
    </div>
  );
}
