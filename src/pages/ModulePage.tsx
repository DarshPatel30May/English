import type { ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { Layers, Printer } from 'lucide-react';
import { breakdownLabels, getModule, sections, type SectionId } from '../data';
import type { ModuleData } from '../data/types';
import { useScrollToSection } from '../lib/useScrollToSection';
import { Breadcrumbs, SectionNav } from '../components/Navigation';
import { ModuleIcon } from '../components/ModuleIcon';
import {
  DescriptorSection,
  OverviewSection,
  QuickRevision,
  SourcesList,
  TechniqueCard,
  TextOverviewPanel,
  ThemeCard,
} from '../components/ModuleParts';
import { ThemeWeb } from '../components/ThemeWeb';
import { QuoteBank } from '../components/QuoteBank';
import { quotesFor } from '../data/quotes';

const quoteNotes: Partial<Record<ModuleData['id'], string>> = {
  common:
    'Film dialogue transcriptions vary slightly in spelling and punctuation. In film essays, also cite camera, sound and mise-en-scène evidence (see section F).',
  'module-a':
    'Eckermann’s poems are short and under copyright, so these are brief fragments. Items marked “Check your copy” were confirmed only by study notes. The “ma-” quotes come from study notes: all “Leaves” lines in particular are unverified, so confirm wording in your own copy.',
  'module-c':
    'No quotes from Carol Chan’s “Popcorn” could be verified online. Take them from your class copy.',
};
import { ConceptMap } from '../components/ConceptMap';
import { CommonBreakdown } from '../components/breakdowns/CommonBreakdown';
import { ModuleABreakdown } from '../components/breakdowns/ModuleABreakdown';
import { ModuleBBreakdown } from '../components/breakdowns/ModuleBBreakdown';
import { ModuleCBreakdown } from '../components/breakdowns/ModuleCBreakdown';
import { MarkComplete, SectionHeading } from '../components/ui';
import { ModeSwitcher } from '../components/Layout';

const subtitles: Record<SectionId, (m: ModuleData) => string> = {
  overview: () => 'Purpose, summary, inquiry questions and NESA’s expectations.',
  descriptor: () => 'What the official descriptor means, phrase by phrase, and how your text addresses it.',
  text: (m) => (m.id === 'module-c' ? 'Your five mentor texts at a glance.' : 'Title, creator, form, context and key people.'),
  themes: () => 'Major ideas with brief explanations, evidence and visual connections.',
  techniques: (m) => (m.id === 'common' ? 'Film techniques: example → effect → rubric link.' : 'Techniques: example → effect → rubric link.'),
  breakdown: (m) =>
    ({
      common: 'Relationship map, character arcs, key scenes, paradoxes and the two timelines.',
      'module-a': 'Groupings, then a dedicated breakdown page for each of the six poems.',
      'module-b': 'The Idea + Form + Language model, narrative arc, structural features and relationships.',
      'module-c': 'Each mentor text, writing forms compared, and how to write a reflection.',
    })[m.id],
  map: () => 'Select a concept to see its relationships to the module, text, themes and techniques.',
  revision: () => 'Everything you need for last-minute revision.',
  quotes: () => 'Versatile quotes with techniques and analysis. Filter by theme; copy straight into your notes.',
};

function Section({ m, id, children }: { m: ModuleData; id: SectionId; children: ReactNode }) {
  const s = sections.find((x) => x.id === id)!;
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-12 first:border-t-0 first:pt-0">
      <SectionHeading
        letter={s.letter}
        title={id === 'breakdown' ? breakdownLabels[m.id] : s.label}
        subtitle={subtitles[id](m)}
        action={<MarkComplete id={`${m.id}:${id}`} />}
      />
      {children}
    </section>
  );
}

const breakdowns = {
  common: CommonBreakdown,
  'module-a': ModuleABreakdown,
  'module-b': ModuleBBreakdown,
  'module-c': ModuleCBreakdown,
};

export function ModulePage() {
  const { moduleId } = useParams();
  const m = getModule(moduleId);
  useScrollToSection([moduleId]);
  if (!m) return <Navigate to="/" replace />;
  const Breakdown = breakdowns[m.id];

  return (
    <div data-module={m.id} key={m.id}>
      <div className="border-b border-line bg-gradient-to-b from-accent-soft to-transparent">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6">
          <Breadcrumbs items={[{ label: `${m.code}: ${m.title}` }]} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-white shadow-lg dark:text-black">
                <ModuleIcon id={m.id} size={26} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-ink">{m.code}</p>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{m.title}</h1>
                <p className="mt-2 text-lg text-ink-2">{m.textShort}</p>
              </div>
            </div>
            <div className="no-print flex flex-wrap items-center gap-2">
              <span className="hidden items-center gap-1.5 text-xs text-ink-3 sm:inline-flex">
                <Layers size={14} /> Mode
              </span>
              <ModeSwitcher />
              <Link to={`/print/${m.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink-2 hover:text-ink">
                <Printer size={15} /> Print summary
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionNav moduleId={m.id} breakdownLabel={breakdownLabels[m.id]} variant="mobile" />
        <div className="flex gap-8 pt-8 lg:pt-10">
          <SectionNav moduleId={m.id} breakdownLabel={breakdownLabels[m.id]} variant="desktop" />
          <div className="min-w-0 flex-1 space-y-12">
            <Section m={m} id="overview">
              <OverviewSection m={m} />
            </Section>
            <Section m={m} id="descriptor">
              <DescriptorSection m={m} />
            </Section>
            <Section m={m} id="text">
              <TextOverviewPanel t={m.texts[0]} />
            </Section>
            <Section m={m} id="themes">
              <div className="space-y-6">
                <ThemeWeb themes={m.themes} />
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {m.themes.map((t, i) => (
                    <ThemeCard key={t.id} t={t} index={i} />
                  ))}
                </div>
              </div>
            </Section>
            <Section m={m} id="techniques">
              <div className="grid gap-4 xl:grid-cols-2">
                {m.techniques.map((k) => (
                  <TechniqueCard key={k.name} k={k} />
                ))}
              </div>
            </Section>
            <Section m={m} id="breakdown">
              <Breakdown />
            </Section>
            <Section m={m} id="map">
              <ConceptMap map={m.conceptMap} title={`${m.title} concept map`} />
            </Section>
            <Section m={m} id="revision">
              <QuickRevision m={m} />
            </Section>
            <Section m={m} id="quotes">
              <QuoteBank quotes={quotesFor(m.id)} note={quoteNotes[m.id]} />
            </Section>
            <section id="sources" className="scroll-mt-28">
              <SourcesList sources={m.sources} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
