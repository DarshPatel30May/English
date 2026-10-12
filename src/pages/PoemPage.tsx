import { Link, Navigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Columns2, Eye, Landmark, Layers, Lightbulb, MapPin, Mic, PenLine } from 'lucide-react';
import { moduleA, poemGroups, poems, poemThemeLabels } from '../data/moduleA';
import { Breadcrumbs } from '../components/Navigation';
import { Badge, Card, Long, MarkComplete, Note } from '../components/ui';

export function PoemPage() {
  const { poemId } = useParams();
  const idx = poems.findIndex((p) => p.id === poemId);
  if (idx < 0) return <Navigate to="/module/module-a?s=breakdown" replace />;
  const p = poems[idx];
  const prev = poems[(idx + poems.length - 1) % poems.length];
  const next = poems[(idx + 1) % poems.length];
  const group = poemGroups.find((g) => g.id === p.group)!;
  const partner = group.poems.find((id) => id !== p.id)!;
  const otherPairs = poems.filter((x) => x.id !== p.id && x.id !== partner);

  return (
    <div data-module="module-a" className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Module A', to: '/module/module-a' }, { label: 'Poems', to: '/module/module-a?s=breakdown' }, { label: `“${p.title}”` }]} />

      <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Poem {idx + 1} of 6</Badge>
          <Badge tone="neutral">{group.label}</Badge>
        </div>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">“{p.title}”</h1>
        <p className="mt-2 text-ink-3">Ali Cobby Eckermann · Inside My Mother (2015)</p>
        <p className="mt-5 max-w-3xl font-display text-2xl leading-snug text-accent-ink">{p.oneLine}</p>
        <div className="mt-5">
          <MarkComplete id={`module-a:poem:${p.id}`} label="Mark poem revised" />
        </div>
      </motion.header>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card className="md:col-span-2">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Lightbulb size={18} className="text-brand-ink" /> Summary
          </p>
          <p className="mt-2 text-ink-2">{p.summary}</p>
          {p.context && (
            <Long>
              <div className="mt-4 rounded-xl bg-surface-2 p-4 text-sm text-ink-2">
                <p className="mb-1 flex items-center gap-1.5 font-semibold text-ink">
                  <MapPin size={15} /> Context
                </p>
                {p.context}
              </div>
            </Long>
          )}
        </Card>
        <Card>
          <p className="font-semibold text-ink">Themes</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.themes.map((t) => (
              <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-ink">
                {poemThemeLabels[t]}
              </span>
            ))}
          </div>
          <p className="mt-5 font-semibold text-ink">Key images to locate</p>
          <ul className="mt-2 space-y-1.5">
            {p.keyImages.map((k) => (
              <li key={k} className="flex items-center gap-2 text-sm text-ink-2">
                <Eye size={14} className="shrink-0 text-accent" /> {k}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Card>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Mic size={18} className="text-accent" /> Speaker / persona
          </p>
          <p className="mt-2 text-ink-2">{p.speaker}</p>
        </Card>
        <Card>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Layers size={18} className="text-accent" /> Form and structure
          </p>
          <p className="mt-2 text-ink-2">{p.structure}</p>
        </Card>
      </div>

      <section className="mt-10" aria-labelledby="tech">
        <h2 id="tech" className="font-display text-2xl font-semibold text-ink">
          Techniques and how they create meaning
        </h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-line">
          <div className="hidden grid-cols-[1fr_1fr_1.4fr] bg-surface-2 text-xs font-semibold uppercase tracking-wider text-ink-3 md:grid">
            <div className="p-3">Technique</div>
            <div className="border-l border-line p-3">Where to look</div>
            <div className="border-l border-line p-3">Effect on meaning</div>
          </div>
          {p.techniques.map((t, i) => (
            <div key={t.name} className={`grid gap-1 p-4 md:grid-cols-[1fr_1fr_1.4fr] md:gap-0 md:p-0 ${i % 2 ? 'bg-surface-2/40' : 'bg-surface'}`}>
              <div className="font-semibold text-ink md:p-3">{t.name}</div>
              <div className="text-sm text-ink-3 md:border-l md:border-line md:p-3 md:text-ink-2">{t.where}</div>
              <div className="text-sm text-ink md:border-l md:border-line md:p-3">{t.effect}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card className="border-accent/40">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Landmark size={18} className="text-accent" /> Identity & culture
          </p>
          <p className="mt-2 text-sm text-ink-2">{p.identity}</p>
        </Card>
        <Card className="border-accent/40">
          <p className="font-semibold text-ink">Module A descriptor link</p>
          <p className="mt-2 text-sm text-ink-2">{p.rubric}</p>
        </Card>
        <Card className="border-brand/50 bg-brand-soft">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <PenLine size={18} className="text-brand-ink" /> Essay angle
          </p>
          <p className="mt-2 text-sm text-ink">{p.essayAngle}</p>
        </Card>
      </div>

      <Card className="mt-10">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <Columns2 size={18} className="text-accent" /> Compare “{p.title}” with…
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link to={`/compare?a=${p.id}&b=${partner}`} className="rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-white dark:text-black">
            “{poems.find((x) => x.id === partner)!.title}” · official grouping
          </Link>
          {otherPairs.map((o) => (
            <Link key={o.id} to={`/compare?a=${p.id}&b=${o.id}`} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 hover:border-accent hover:text-ink">
              “{o.title}”
            </Link>
          ))}
        </div>
      </Card>

      {moduleA.texts[0].note && (
        <div className="mt-6">
          <Note>{moduleA.texts[0].note}</Note>
        </div>
      )}

      <nav className="no-print mt-10 flex items-center justify-between gap-3 border-t border-line pt-6" aria-label="Poem navigation">
        <Link to={`/module/module-a/poem/${prev.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
          <ArrowLeft size={16} /> “{prev.title}”
        </Link>
        <Link to="/module/module-a?s=breakdown" className="text-sm text-ink-3 hover:text-ink">
          All poems
        </Link>
        <Link to={`/module/module-a/poem/${next.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
          “{next.title}” <ArrowRight size={16} />
        </Link>
      </nav>
    </div>
  );
}
