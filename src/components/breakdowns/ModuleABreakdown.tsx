import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Columns2, Feather, Layers, Timer } from 'lucide-react';
import { poemGroups, poems, poemThemeLabels, quickPairs, quickPoems } from '../../data/moduleA';
import { useProgress } from '../../lib/progress';
import { Badge, Card, Long, cx } from '../ui';
import { SubHeading } from './SubHeading';

const groupStyle: Record<string, string> = {
  collective: 'from-accent/15',
  family: 'from-brand/20',
  inner: 'from-ink/10',
};

export function PoemGroupings() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {poemGroups.map((g, gi) => (
        <motion.div
          key={g.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.08 }}
          className={cx('rounded-2xl border border-line bg-gradient-to-b to-transparent p-5', groupStyle[g.id])}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Grouping {gi + 1}</p>
          <p className="mt-1 font-display text-lg font-semibold leading-snug text-ink">{g.label}</p>
          <div className="mt-4 flex items-center gap-2">
            {g.poems.map((id, i) => {
              const p = poems.find((x) => x.id === id)!;
              return (
                <div key={id} className="contents">
                  {i > 0 && <span className="h-px flex-1 bg-accent/60" aria-hidden />}
                  <Link to={`/module/module-a/poem/${id}`} className="rounded-xl border border-accent/50 bg-surface px-3 py-2 text-sm font-semibold text-accent-ink shadow-sm hover:border-accent">
                    “{p.title}”
                  </Link>
                </div>
              );
            })}
          </div>
          <Long>
            <p className="mt-4 text-sm text-ink-2">{g.explanation}</p>
          </Long>
          <Link to={`/compare?a=${g.poems[0]}&b=${g.poems[1]}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink hover:underline">
            Compare this pair <ArrowRight size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export function FiveMinuteOverview() {
  const title = (id: string) => poems.find((p) => p.id === id)?.title ?? id;
  return (
    <div className="space-y-6">
      <p className="text-sm text-ink-2">
        Forget the quotes for now. If you don’t understand what a poem is about, you won’t know which quotes to use in the HSC. For every poem, remember three things: what happens, what it means, and a one-line memory hook.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quickPoems.map((q, i) => (
          <Link key={q.id} to={`/module/module-a/poem/${q.id}`} className="group block">
            <Card className="flex h-full flex-col transition-all group-hover:-translate-y-0.5 group-hover:border-accent/60">
              <span className="font-display text-3xl font-semibold text-accent/30">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-display text-xl font-semibold text-ink">“{title(q.id)}” — {q.subtitle}</h4>
              <p className="mt-3 text-sm text-ink-2"><strong className="text-ink">Story:</strong> {q.story}</p>
              <p className="mt-2 text-sm text-ink-2"><strong className="text-ink">Meaning:</strong> {q.meaning}</p>
              <p className="mt-3 rounded-lg bg-accent-soft px-3 py-2 text-sm font-semibold text-accent-ink">Remember: {q.remember}</p>
            </Card>
          </Link>
        ))}
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-ink">The easiest way to remember them</p>
        <p className="text-sm text-ink-2">Don’t memorise six separate summaries. Memorise three pairs.</p>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {quickPairs.map((pr) => (
            <Card key={pr.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">{pr.label}</p>
              <p className="mt-2 text-sm text-ink"><strong>“{title(pr.a.id)}”</strong> — {pr.a.focus}</p>
              <p className="mt-1 text-sm text-ink"><strong>“{title(pr.b.id)}”</strong> — {pr.b.focus}</p>
              <p className="mt-3 text-sm text-ink-2">{pr.summary}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ModuleABreakdown() {
  const { isDone } = useProgress();
  return (
    <div className="space-y-12">
      <div>
        <SubHeading icon={Timer} title="Understand all 6 poems in 5 minutes" subtitle="Story, meaning and a memory hook for each poem, then three pairs to remember." />
        <FiveMinuteOverview />
      </div>

      <div>
        <SubHeading icon={Layers} title="Essential poem groupings" subtitle="Three thematic pairings that structure strong essays." />
        <PoemGroupings />
      </div>

      <div>
        <SubHeading icon={Feather} title="The six prescribed poems" subtitle="Open any poem for its full breakdown: summary, speaker, structure, techniques and rubric links." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((p, i) => {
            const group = poemGroups.find((g) => g.id === p.group)!;
            const done = isDone(`module-a:poem:${p.id}`);
            return (
              <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/module/module-a/poem/${p.id}`} className="group block h-full">
                  <Card className="flex h-full flex-col transition-all group-hover:-translate-y-0.5 group-hover:border-accent/60 group-hover:shadow-lg">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display text-4xl font-semibold text-accent/30">{String(i + 1).padStart(2, '0')}</span>
                      {done && <Badge tone="brand">Revised</Badge>}
                    </div>
                    <h4 className="mt-1 font-display text-2xl font-semibold text-ink">“{p.title}”</h4>
                    <p className="mt-1 text-xs font-medium text-accent-ink">{group.label}</p>
                    <p className="mt-3 flex-1 text-sm text-ink-2">{p.oneLine}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.themes.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-2">
                          {poemThemeLabels[t]}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent-ink">
                      Full breakdown <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Card className="flex flex-col items-start justify-between gap-4 border-accent/40 bg-accent-soft sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Columns2 className="mt-1 shrink-0 text-accent" />
          <div>
            <p className="font-display text-lg font-semibold text-ink">Poem comparison tool</p>
            <p className="text-sm text-ink-2">Pick any two poems to see shared themes, different perspectives, techniques, descriptor links and why they work together.</p>
          </div>
        </div>
        <Link to="/compare" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg hover:opacity-90">
          Compare poems <ArrowRight size={15} />
        </Link>
      </Card>
    </div>
  );
}
