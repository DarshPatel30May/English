import { useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
  Timer,
  XCircle,
} from 'lucide-react';
import type { ModuleData, RubricPhrase, Source, Technique, TextOverview, Theme } from '../data/types';
import { checklistFor } from '../data';
import { useProgress } from '../lib/progress';
import { Badge, Card, Eyebrow, KeyList, Long, Note, ProgressBar, cx } from './ui';
import { ModuleIcon } from './ModuleIcon';

/* ---------------- Module card (dashboard) ---------------- */

export function ModuleCard({ m, index }: { m: ModuleData; index: number }) {
  const { isDone } = useProgress();
  const items = checklistFor(m.id);
  const pct = items.filter((i) => isDone(i.id)).length / items.length;
  return (
    <motion.div
      data-module={m.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * index, duration: 0.4 }}
    >
      <Link
        to={`/module/${m.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-xl sm:p-7"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <ModuleIcon id={m.id} size={22} />
          </span>
          <Badge>{m.code}</Badge>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">{m.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent-ink">{m.textShort}</p>
        <p className="mt-3 flex-1 text-ink-2">{m.purpose}</p>
        <div className="mt-6">
          <div className="mb-1.5 flex justify-between text-xs text-ink-3">
            <span>Revision progress</span>
            <span>{Math.round(pct * 100)}%</span>
          </div>
          <ProgressBar value={pct} />
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent-ink">
          Open visual guide <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}

/* ---------------- A. Overview ---------------- */

export function OverviewSection({ m }: { m: ModuleData }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <Eyebrow>{m.code}</Eyebrow>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{m.title}</h3>
        <p className="mt-3 flex items-start gap-2 text-lg font-medium text-ink">
          <Target size={20} className="mt-1 shrink-0 text-brand-ink" />
          {m.purpose}
        </p>
        <Long>
          <p className="mt-4 text-ink-2">{m.summary}</p>
        </Long>
        <div className="mt-5 rounded-xl bg-surface-2 p-4 text-sm text-ink-2">
          <span className="font-semibold text-ink">In the HSC exam: </span>
          {m.examInfo}
        </div>
      </Card>
      <Card>
        <p className="flex items-center gap-2 font-semibold text-ink">
          <HelpCircle size={18} className="text-accent" /> Key inquiry questions
        </p>
        <ol className="mt-3 space-y-2.5">
          {m.inquiryQuestions.map((q, i) => (
            <li key={q} className="flex gap-3 text-sm text-ink-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-[11px] font-bold text-accent-ink">{i + 1}</span>
              {q}
            </li>
          ))}
        </ol>
      </Card>
      <Card className="lg:col-span-3">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <GraduationCap size={18} className="text-accent" /> What NESA expects you to understand
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {m.nesaExpects.map((e) => (
            <div key={e} className="rounded-xl border border-line p-3 text-sm text-ink-2">
              <CheckCircle2 size={16} className="mb-1.5 text-accent" />
              {e}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- B. Descriptor + Rubric explorer ---------------- */

export function RubricExplorer({ phrases, textName }: { phrases: RubricPhrase[]; textName: string }) {
  const [sel, setSel] = useState(phrases[0]?.id);
  const p = phrases.find((x) => x.id === sel) ?? phrases[0];
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-2" role="tablist" aria-label="Descriptor phrases">
        {phrases.map((x) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={x.id === sel}
            onClick={() => setSel(x.id)}
            className={cx(
              'group flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all',
              x.id === sel ? 'border-accent bg-accent-soft' : 'border-line bg-surface hover:border-ink-3',
            )}
          >
            <Quote size={16} className={cx('mt-0.5 shrink-0', x.id === sel ? 'text-accent' : 'text-ink-3')} />
            <span className={cx('font-medium', x.id === sel ? 'text-accent-ink' : 'text-ink-2')}>
              <mark className="bg-transparent text-inherit">{x.phrase}</mark>
            </span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {p && (
          <motion.div
            key={p.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24 lg:self-start"
          >
            <p className="font-display text-xl font-semibold leading-snug text-ink">
              <span className="bg-gradient-to-t from-brand/40 from-30% to-transparent to-30%">“{p.phrase}”</span>
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">What it means</p>
                <p className="mt-1 text-ink-2">{p.meaning}</p>
              </div>
              <div className="rounded-xl bg-accent-soft p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">How {textName} shows it</p>
                <p className="mt-1 text-ink">{p.textLink}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DescriptorSection({ m }: { m: ModuleData }) {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="font-semibold text-ink">The descriptor in brief</p>
          <a href={m.descriptor.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:underline">
            Full NESA descriptor <ExternalLink size={14} />
          </a>
        </div>
        <ul className="mt-3 space-y-3">
          {m.descriptor.intro.map((t) => (
            <li key={t} className="flex gap-3 text-ink-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-3">
          A student-friendly summary of the NESA descriptor. Highlighted phrases are key descriptor terms; always check exact wording in the official syllabus.
        </p>
      </Card>
      <div>
        <p className="mb-3 flex items-center gap-2 font-semibold text-ink">
          <Sparkles size={17} className="text-brand-ink" /> Rubric explorer: select a phrase
        </p>
        <RubricExplorer phrases={m.descriptor.phrases} textName={m.id === 'module-c' ? 'the mentor texts' : m.texts[0].title} />
      </div>
      <Long>
        <Note tone="accent">
          <span className="font-semibold text-ink">How the prescribed text fits: </span>
          {m.descriptor.howTextAddresses}
        </Note>
      </Long>
    </div>
  );
}

/* ---------------- C. Text overview ---------------- */

export function TextOverviewPanel({ t }: { t: TextOverview }) {
  return (
    <div className="space-y-5">
      <Card className="overflow-hidden p-0 sm:p-0">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="p-6 sm:p-7">
            <Eyebrow>Prescribed text</Eyebrow>
            <h3 className="mt-1 font-display text-3xl font-semibold leading-tight text-ink">{t.title}</h3>
            <p className="mt-1 text-ink-3">{t.creator}</p>
            <div className="mt-4 rounded-xl border border-brand/40 bg-brand-soft px-4 py-3">
              <p className="flex items-start gap-2 font-medium text-ink">
                <Lightbulb size={18} className="mt-0.5 shrink-0 text-brand-ink" /> {t.memoryHook}
              </p>
            </div>
            <Long>
              <p className="mt-4 text-ink-2">{t.summary}</p>
            </Long>
          </div>
          <dl className="grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-1 lg:border-l lg:border-t-0">
            {[
              ['Creator', t.creator],
              ['Year', t.year],
              ['Form', t.form],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface-2 p-4 last:col-span-2 lg:last:col-span-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-3">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>

      <div>
        <p className="mb-3 font-semibold text-ink">Major contextual influences</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.context.map((c) => (
            <Card key={c.label} className="p-4 sm:p-5">
              <p className="font-semibold text-accent-ink">{c.label}</p>
              <Long>
                <p className="mt-1.5 text-sm text-ink-2">{c.detail}</p>
              </Long>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-semibold text-ink">Main characters, speakers or individuals</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.people.map((p) => (
            <div key={p.name} className="rounded-xl border border-line bg-surface p-4">
              <p className="font-semibold text-ink">{p.name}</p>
              <p className="text-xs font-medium text-accent-ink">{p.role}</p>
              <Long>
                <p className="mt-1.5 text-sm text-ink-2">{p.description}</p>
              </Long>
            </div>
          ))}
        </div>
      </div>
      {t.note && <Note>{t.note}</Note>}
    </div>
  );
}

/* ---------------- D. Themes ---------------- */

export function ThemeCard({ t, index }: { t: Theme; index: number }) {
  return (
    <Card className="flex flex-col p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft font-display text-sm font-bold text-accent-ink">{index + 1}</span>
        <h4 className="font-display text-lg font-semibold leading-tight text-ink">{t.name}</h4>
      </div>
      <p className="mt-3 text-sm text-ink-2">{t.summary}</p>
      <Long>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-3">Examples</p>
        <KeyList items={t.examples} className="mt-1.5 text-sm" />
      </Long>
      <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
        {t.techniques.map((k) => (
          <span key={k} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-2">
            {k}
          </span>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- E. Techniques ---------------- */

export function TechniqueCard({ k }: { k: Technique }) {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="min-w-0 flex-1 basis-60">
          <h4 className="font-semibold text-ink">{k.name}</h4>
          <p className="mt-0.5 text-sm text-ink-3">{k.definition}</p>
        </div>
        <Badge tone="neutral" className="max-w-full">
          {k.rubricLink}
        </Badge>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-surface-2 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">Example</p>
          <p className="mt-1 text-sm text-ink-2">{k.example}</p>
        </div>
        <div className="rounded-xl bg-accent-soft p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-ink">Effect: how it creates meaning</p>
          <p className="mt-1 text-sm text-ink">{k.effect}</p>
        </div>
      </div>
    </Card>
  );
}

/* ---------------- H. Quick revision ---------------- */

export function QuickRevision({ m }: { m: ModuleData }) {
  const r = m.revision;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card className="lg:col-span-2 border-brand/50 bg-brand-soft">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <Timer size={18} className="text-brand-ink" /> 30-second summary
        </p>
        <p className="mt-2 text-lg leading-relaxed text-ink">{r.thirtySecond}</p>
      </Card>
      <Card>
        <p className="flex items-center gap-2 font-semibold text-ink">
          <BookMarked size={18} className="text-accent" /> {r.takeaways.length} essential takeaways
        </p>
        <ol className="mt-3 space-y-2">
          {r.takeaways.map((t, i) => (
            <li key={t} className="flex gap-3 text-sm text-ink-2">
              <span className="w-5 shrink-0 text-right font-display font-bold text-accent-ink">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </Card>
      <Card>
        <p className="font-semibold text-ink">Key rubric terminology</p>
        <dl className="mt-3 divide-y divide-line">
          {r.terminology.map((t) => (
            <div key={t.term} className="grid grid-cols-[minmax(0,130px)_1fr] gap-3 py-2 text-sm">
              <dt className="font-semibold text-accent-ink">{t.term}</dt>
              <dd className="text-ink-2">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </Card>
      <Card>
        <p className="flex items-center gap-2 font-semibold text-ink">
          <AlertTriangle size={18} className="text-brand-ink" /> Common misconceptions
        </p>
        <div className="mt-3 space-y-3">
          {r.misconceptions.map((x) => (
            <div key={x.myth} className="rounded-xl border border-line p-3 text-sm">
              <p className="flex gap-2 text-ink-3 line-through decoration-ink-3/50">
                <XCircle size={16} className="mt-0.5 shrink-0 text-ink-3 no-underline" /> {x.myth}
              </p>
              <p className="mt-1.5 flex gap-2 text-ink">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" /> {x.truth}
              </p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <p className="flex items-center gap-2 font-semibold text-ink">
          <GraduationCap size={18} className="text-accent" /> Exam-application guide
        </p>
        <ol className="mt-3 space-y-3">
          {r.examGuide.map((g, i) => (
            <li key={g} className="flex gap-3 text-sm text-ink-2">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-bg">{i + 1}</span>
              {g}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

/* ---------------- Sources ---------------- */

export function SourcesList({ sources }: { sources: Source[] }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-2/50 p-5">
      <p className="text-sm font-semibold text-ink">Sources & further reading</p>
      <ul className="mt-3 space-y-2">
        {sources.map((s) => (
          <li key={s.url + s.label} className="text-sm">
            <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1.5 font-medium text-ink-2 hover:text-ink hover:underline">
              <ExternalLink size={13} className="mt-1 shrink-0" />
              {s.label}
            </a>
            {s.note && <span className="text-ink-3"> · {s.note}</span>}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-3">Prioritises NESA, NSW Department of Education, original texts and reputable institutional sources.</p>
    </div>
  );
}
