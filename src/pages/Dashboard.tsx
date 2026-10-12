import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Columns2, Compass, Layers3, ListChecks, Network, Printer, Search, SquareStack } from 'lucide-react';
import { checklistFor, flashcards, modules } from '../data';
import { useProgress } from '../lib/progress';
import { ModuleCard } from '../components/ModuleParts';
import { ModeSwitcher } from '../components/Layout';
import { ProgressBar } from '../components/ui';

const tools = [
  { to: '/themes', title: 'Theme explorer', desc: 'Pick a theme; see texts, examples and techniques across all modules.', icon: Compass },
  { to: '/compare', title: 'Compare texts', desc: 'Any two Module A poems or Module C mentor texts, side by side.', icon: Columns2 },
  { to: '/rubric', title: 'Rubric explorer', desc: 'Every descriptor phrase explained and linked to your texts.', icon: Layers3 },
  { to: '/map', title: 'Course map', desc: 'One interactive map connecting modules, texts and big ideas.', icon: Network },
  { to: '/flashcards', title: 'Flashcards', desc: `${flashcards.length} cards built from this guide. Flip, filter, track.`, icon: SquareStack },
  { to: '/checklist', title: 'Revision checklist', desc: 'Tick off sections; progress saves in your browser.', icon: ListChecks },
  { to: '/print/all', title: 'Print / PDF', desc: 'Clean printable summaries of every module.', icon: Printer },
];

export function Dashboard() {
  const { isDone } = useProgress();
  const all = modules.flatMap((m) => checklistFor(m.id));
  const pct = all.filter((i) => isDone(i.id)).length / all.length;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
              NSW HSC · English Standard · 2026
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              See the course.
              <br />
              <span className="relative">
                <span className="relative z-10">Understand it fast.</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand/60 sm:bottom-2 sm:h-4" aria-hidden />
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-2">
              A visual study guide to all four modules and your prescribed texts: what each module asks, what the texts mean, how they’re crafted, and how it all connects to the NESA descriptors.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/module/common" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90">
                Start with the Common Module <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink-2 hover:text-ink"
              >
                <Search size={16} /> Search everything
              </button>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div className="max-w-md">
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="font-medium text-ink">Overall revision progress</span>
                <span className="text-ink-3">{Math.round(pct * 100)}%</span>
              </div>
              <ProgressBar value={pct} className="h-2" />
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-3">
              Study mode <ModeSwitcher />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6" aria-labelledby="modules-h">
        <h2 id="modules-h" className="font-display text-2xl font-semibold text-ink">
          Your four modules
        </h2>
        <p className="mt-1 text-ink-3">Each guide follows the same structure: overview, descriptor, text, themes, techniques, breakdown, concept map and quick revision.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {modules.map((m, i) => (
            <ModuleCard key={m.id} m={m} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6" aria-labelledby="tools-h">
        <h2 id="tools-h" className="font-display text-2xl font-semibold text-ink">
          Study tools
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.to} to={t.to} className="group rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-lg">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-ink">
                  <Icon size={19} />
                </span>
                <p className="mt-4 font-semibold text-ink">{t.title}</p>
                <p className="mt-1 text-sm text-ink-3">{t.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:p-8 md:grid-cols-3">
          {[
            ['Standard mode', 'The full guide: diagrams, explanations and examples.'],
            ['Visual learning mode', 'Hides longer explanations. Just diagrams, short summaries, themes and connections.'],
            ['Text-only mode', 'A calm reading layout without diagrams or animation, ideal for focused revision.'],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-semibold text-ink">{t}</p>
              <p className="mt-1 text-sm text-ink-3">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
