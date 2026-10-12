import { Link, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeftRight, BadgeCheck, Feather, Library } from 'lucide-react';
import { findPair, poemGroups, poems, poemThemeLabels, techniqueTagLabels } from '../data/moduleA';
import { mentorTexts, writingForms } from '../data/moduleC';
import { Breadcrumbs } from '../components/Navigation';
import { Card, Chip, cx } from '../components/ui';

function Selector<T extends { id: string; title: string }>({
  label,
  items,
  value,
  other,
  onChange,
}: {
  label: string;
  items: T[];
  value: string;
  other: string;
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">{label}</p>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {items.map((i) => (
          <button
            key={i.id}
            role="radio"
            aria-checked={i.id === value}
            disabled={i.id === other}
            onClick={() => onChange(i.id)}
            className={cx(
              'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-35',
              i.id === value ? 'border-accent bg-accent text-white dark:text-black' : 'border-line bg-surface text-ink-2 hover:text-ink',
            )}
          >
            {i.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function PoemCompare({ a, b, set }: { a: string; b: string; set: (a: string, b: string) => void }) {
  const pa = poems.find((p) => p.id === a)!;
  const pb = poems.find((p) => p.id === b)!;
  const pair = findPair(a, b)!;
  const shared = pa.themes.filter((t) => pb.themes.includes(t));
  const onlyA = pa.themes.filter((t) => !pb.themes.includes(t));
  const onlyB = pb.themes.filter((t) => !pa.themes.includes(t));
  const tagsA = new Set(pa.techniques.map((t) => t.tag));
  const tagsB = new Set(pb.techniques.map((t) => t.tag));
  const sharedTech = [...tagsA].filter((t) => tagsB.has(t));
  const sameGroup = pa.group === pb.group;
  const items = poems.map((p) => ({ id: p.id, title: `“${p.title}”` }));

  return (
    <div data-module="module-a" className="space-y-6">
      <Card>
        <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <Selector label="First poem" items={items} value={a} other={b} onChange={(id) => set(id, b)} />
          <button onClick={() => set(b, a)} className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-line text-ink-3 hover:text-ink md:mt-6" aria-label="Swap poems">
            <ArrowLeftRight size={16} />
          </button>
          <Selector label="Second poem" items={items} value={b} other={a} onChange={(id) => set(a, id)} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">Official groupings:</span>
          {poemGroups.map((g) => (
            <button key={g.id} onClick={() => set(g.poems[0], g.poems[1])} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink-2 hover:text-ink">
              {g.label}
            </button>
          ))}
        </div>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div key={a + b} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="space-y-6">
          {sameGroup && (
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-ink">
              <BadgeCheck size={16} /> Official grouping: {poemGroups.find((g) => g.id === pa.group)!.label}
            </p>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {[pa, pb].map((p) => (
              <Card key={p.id}>
                <Link to={`/module/module-a/poem/${p.id}`} className="font-display text-2xl font-semibold text-ink hover:text-accent-ink">
                  “{p.title}”
                </Link>
                <p className="mt-1 text-sm text-ink-3">{poemGroups.find((g) => g.id === p.group)!.label}</p>
                <p className="mt-3 text-ink-2">{p.oneLine}</p>
                <p className="mt-3 text-sm text-ink-3">
                  <span className="font-semibold text-ink-2">Speaker: </span>
                  {p.speaker}
                </p>
              </Card>
            ))}
          </div>

          <Card>
            <p className="font-semibold text-ink">Themes</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">Only “{pa.title}”</p>
                <div className="flex flex-wrap gap-1.5">
                  {onlyA.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-1 text-sm text-ink-2">
                      {poemThemeLabels[t]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-accent-soft p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-ink">Shared themes</p>
                <div className="flex flex-wrap gap-1.5">
                  {shared.length ? (
                    shared.map((t) => (
                      <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-sm font-semibold text-white dark:text-black">
                        {poemThemeLabels[t]}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-ink-2">No directly shared theme tags; the connection is through contrast (see below).</span>
                  )}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">Only “{pb.title}”</p>
                <div className="flex flex-wrap gap-1.5">
                  {onlyB.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-1 text-sm text-ink-2">
                      {poemThemeLabels[t]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <p className="font-semibold text-ink">Different perspectives</p>
              <p className="mt-2 text-ink-2">{pair.perspectives}</p>
            </Card>
            <Card>
              <p className="font-semibold text-ink">Relationship to identity and culture</p>
              <p className="mt-2 text-ink-2">{pair.identityCulture}</p>
            </Card>
          </div>

          <Card>
            <p className="font-semibold text-ink">Relevant techniques</p>
            {sharedTech.length > 0 && (
              <p className="mt-2 text-sm text-ink-2">
                <span className="font-semibold text-accent-ink">Both use: </span>
                {sharedTech.map((t) => techniqueTagLabels[t]).join(', ')}, a natural point of comparison.
              </p>
            )}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[pa, pb].map((p) => (
                <ul key={p.id} className="space-y-2">
                  <li className="text-xs font-semibold uppercase tracking-wider text-ink-3">“{p.title}”</li>
                  {p.techniques.map((t) => (
                    <li key={t.name} className={cx('rounded-lg border p-2.5 text-sm', sharedTech.includes(t.tag) ? 'border-accent/50 bg-accent-soft' : 'border-line')}>
                      <span className="font-semibold text-ink">{t.name}</span>
                      <span className="text-ink-2">: {t.effect}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-accent/40">
              <p className="font-semibold text-ink">Connection to the Module A descriptor</p>
              <p className="mt-2 text-ink-2">{pair.descriptor}</p>
            </Card>
            <Card className="border-brand/50 bg-brand-soft">
              <p className="font-semibold text-ink">Why they work together in an essay</p>
              <p className="mt-2 text-ink">{pair.why}</p>
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MentorCompare({ a, b, set }: { a: string; b: string; set: (a: string, b: string) => void }) {
  const ta = mentorTexts.find((t) => t.id === a)!;
  const tb = mentorTexts.find((t) => t.id === b)!;
  const items = mentorTexts.map((t) => ({ id: t.id, title: t.creator }));
  const formName = (id: string) => writingForms.find((w) => w.id === id)?.name ?? id;
  const rows: [string, (t: typeof ta) => React.ReactNode][] = [
    ['Title', (t) => <span className="font-semibold text-ink">{t.title}</span>],
    ['Form', (t) => t.form],
    ['Date', (t) => t.date],
    ['Primary writing mode', (t) => formName(t.primaryForm)],
    ['Purpose', (t) => t.purpose],
    ['Audience', (t) => t.audience],
    ['Tone & voice', (t) => t.toneVoice],
    ['Structure', (t) => t.structure.join(' → ')],
    ['Key techniques', (t) => t.techniques.map((k) => k.name).join(' · ')],
    ['Borrow for your writing', (t) => t.lessons[0]],
  ];
  return (
    <div data-module="module-c" className="space-y-6">
      <Card>
        <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <Selector label="First text" items={items} value={a} other={b} onChange={(id) => set(id, b)} />
          <button onClick={() => set(b, a)} className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-line text-ink-3 hover:text-ink md:mt-6" aria-label="Swap texts">
            <ArrowLeftRight size={16} />
          </button>
          <Selector label="Second text" items={items} value={b} other={a} onChange={(id) => set(a, id)} />
        </div>
      </Card>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface-2">
              <th className="w-44 p-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-3" scope="col">
                Feature
              </th>
              {[ta, tb].map((t) => (
                <th key={t.id} className="border-l border-line p-3 text-left font-display text-base font-semibold text-ink" scope="col">
                  <Link to={`/module/module-c/text/${t.id}`} className="hover:text-accent-ink">
                    {t.creator}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, render]) => (
              <tr key={label} className="border-t border-line bg-surface align-top">
                <th scope="row" className="p-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-3">
                  {label}
                </th>
                {[ta, tb].map((t) => (
                  <td key={t.id} className="border-l border-line p-3 text-ink-2">
                    {render(t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card className="border-brand/50 bg-brand-soft">
        <p className="font-semibold text-ink">Comparing craft</p>
        <p className="mt-2 text-ink">
          {ta.primaryForm === tb.primaryForm
            ? `Both are ${formName(ta.primaryForm).toLowerCase()} models, so compare how each writer shapes voice and structure for a different audience: ${ta.audience.split(',')[0].toLowerCase()} vs ${tb.audience.split(',')[0].toLowerCase()}.`
            : `These texts model different modes (${formName(ta.primaryForm).toLowerCase()} vs ${formName(tb.primaryForm).toLowerCase()}). Notice how purpose changes structure: “${ta.structure[0]}” vs “${tb.structure[0]}”. Try combining one technique from each in your own piece.`}
        </p>
      </Card>
    </div>
  );
}

export function ComparePage() {
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab') === 'mentor' ? 'mentor' : 'poems';
  const ids = tab === 'poems' ? poems.map((p) => p.id) : mentorTexts.map((t) => t.id);
  let a = params.get('a') ?? '';
  let b = params.get('b') ?? '';
  if (!ids.includes(a)) a = tab === 'poems' ? 'unearth' : 'jobs';
  if (!ids.includes(b) || b === a) b = tab === 'poems' ? (a === 'oombulgarri' ? 'unearth' : 'oombulgarri') : a === 'rowling' ? 'jobs' : 'rowling';
  const set = (na: string, nb: string) => setParams({ tab, a: na, b: nb }, { replace: true });

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Compare texts' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Text comparison</h1>
      <p className="mt-2 max-w-2xl text-ink-3">Select any two texts to compare them side by side.</p>
      <div className="mt-6 flex gap-2">
        <Chip active={tab === 'poems'} onClick={() => setParams({ tab: 'poems' })}>
          <Feather size={15} /> Module A poems
        </Chip>
        <Chip active={tab === 'mentor'} onClick={() => setParams({ tab: 'mentor' })}>
          <Library size={15} /> Module C mentor texts
        </Chip>
      </div>
      <div className="mt-6">{tab === 'poems' ? <PoemCompare a={a} b={b} set={set} /> : <MentorCompare a={a} b={b} set={set} />}</div>
    </div>
  );
}
