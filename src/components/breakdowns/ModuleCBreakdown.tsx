import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ClipboardList, FileWarning, Library, PenLine, Wand2 } from 'lucide-react';
import { mentorTexts, reflectionSteps, writingForms } from '../../data/moduleC';
import type { WritingFormId } from '../../data/types';
import { useProgress } from '../../lib/progress';
import { Badge, Card, Chip, Long, cx } from '../ui';
import { SubHeading } from './SubHeading';

export function WritingFormsCompare() {
  const [sel, setSel] = useState<WritingFormId[]>(['imaginative', 'discursive', 'persuasive']);
  const toggle = (id: WritingFormId) =>
    setSel((s) => (s.includes(id) ? (s.length > 1 ? s.filter((x) => x !== id) : s) : [...s, id]));
  const shown = writingForms.filter((w) => sel.includes(w.id));
  const rows: { label: string; render: (w: (typeof writingForms)[number]) => React.ReactNode }[] = [
    { label: 'Purpose', render: (w) => w.purpose },
    { label: 'Feel', render: (w) => w.feel },
    { label: 'Typical structure', render: (w) => <ol className="list-decimal space-y-0.5 pl-4">{w.structure.map((s) => <li key={s}>{s}</li>)}</ol> },
    { label: 'Language features', render: (w) => <div className="flex flex-wrap gap-1">{w.features.map((f) => <span key={f} className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">{f}</span>)}</div> },
    { label: 'Voice', render: (w) => w.voice },
    { label: 'Mentor text model', render: (w) => <span className="font-medium text-accent-ink">{w.mentor}</span> },
  ];
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink">Compare forms:</span>
        {writingForms.map((w) => (
          <Chip key={w.id} active={sel.includes(w.id)} onClick={() => toggle(w.id)}>
            {w.name}
          </Chip>
        ))}
      </div>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface-2">
              <th className="w-36 p-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-3" scope="col">
                Feature
              </th>
              {shown.map((w) => (
                <th key={w.id} scope="col" className="border-l border-line p-3 text-left">
                  <span className="font-display text-base font-semibold text-ink">{w.name}</span>
                  {!w.inStandardDescriptor && <span className="ml-2 align-middle text-[10px] font-semibold uppercase text-brand-ink">Used in reflections</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-line bg-surface align-top">
                <th scope="row" className="p-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-3">
                  {r.label}
                </th>
                {shown.map((w) => (
                  <td key={w.id} className="border-l border-line p-3 text-ink-2">
                    {r.render(w)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-ink-3">
        The English Standard Module C descriptor names imaginative, discursive, persuasive and informative texts. Reflective writing is included because HSC tasks often ask you to reflect on your compositional choices.
      </p>
    </div>
  );
}

export function ReflectionGuide() {
  return (
    <div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {reflectionSteps.map((s, i) => (
          <motion.li
            key={s.step}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="relative flex flex-col rounded-2xl border border-line bg-surface p-4"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand font-bold text-black">{i + 1}</span>
            <p className="mt-3 font-semibold text-ink">{s.step}</p>
            <p className="mt-1 flex-1 text-sm text-ink-2">{s.prompt}</p>
            <p className="mt-3 rounded-lg bg-surface-2 p-2 text-xs italic text-ink-2">{s.starter}</p>
          </motion.li>
        ))}
      </ol>
      <Long>
        <div className="mt-4 rounded-2xl border border-dashed border-line p-4 text-sm text-ink-2">
          <p className="font-semibold text-ink">Quick checklist for a strong reflection</p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            <li>✓ Uses first person (“I chose…”, “I wanted…”)</li>
            <li>✓ Names specific techniques with examples from your own piece</li>
            <li>✓ Explains effects on the reader, not just what you did</li>
            <li>✓ Links a choice to a mentor text accurately</li>
            <li>✓ Connects choices to purpose, audience and form</li>
            <li>✓ Evaluates honestly: what worked, what you’d refine</li>
          </ul>
        </div>
      </Long>
    </div>
  );
}

const borrow: { skill: string; from: string; textId: string; how: string }[] = [
  { skill: 'Build a setting in a few sensory details', from: 'Bradbury', textId: 'pedestrian', how: 'Open with two or three precise sensory images that establish atmosphere before any action.' },
  { skill: 'Signpost a simple structure', from: 'Jobs', textId: 'jobs', how: 'Announce a clear structure (e.g. three moments) so your reader can follow complex ideas.' },
  { skill: 'Balance humour and gravity', from: 'Rowling', textId: 'rowling', how: 'Start light to build rapport, then shift to your serious point.' },
  { skill: 'Use one object to carry a big idea', from: 'Chan', textId: 'popcorn', how: 'Choose an everyday object as a controlling motif that opens onto bigger questions.' },
  { skill: 'Craft a memorable contrast', from: 'Bush', textId: 'bush', how: 'Use balanced antithesis to make your central message stick.' },
  { skill: 'End with impact', from: 'Bradbury / Jobs', textId: 'jobs', how: 'Finish abruptly (Bradbury) or with a repeated, quotable line (Jobs).' },
];

export function ModuleCBreakdown() {
  const { isDone } = useProgress();
  return (
    <div className="space-y-12">
      <div>
        <SubHeading icon={Library} title="Mentor texts" subtitle="Open each text for summary, purpose, audience, context, techniques, structure, tone and lessons for your own writing." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mentorTexts.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={`/module/module-c/text/${t.id}`} className="group block h-full">
                <Card className="flex h-full flex-col transition-all group-hover:-translate-y-0.5 group-hover:border-accent/60 group-hover:shadow-lg">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={t.status.startsWith('NESA') ? 'accent' : 'brand'}>{t.status.startsWith('NESA') ? 'NESA prescribed' : 'Teacher-selected'}</Badge>
                    {t.verification && t.id === 'popcorn' && (
                      <Badge tone="neutral">
                        <FileWarning size={12} /> Check your copy
                      </Badge>
                    )}
                    {isDone(`module-c:text:${t.id}`) && <Badge tone="brand">Revised</Badge>}
                  </div>
                  <h4 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">{t.title}</h4>
                  <p className="text-sm font-medium text-accent-ink">{t.creator}</p>
                  <p className="mt-1 text-xs text-ink-3">{t.form}</p>
                  <Long>
                    <p className="mt-3 line-clamp-4 text-sm text-ink-2">{t.summary}</p>
                  </Long>
                  <div className="flex-1" />
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent-ink">
                    Mentor-text breakdown <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading icon={ClipboardList} title="Writing forms compared" subtitle="Purpose, feel, structure and features of each form. Select forms to compare side by side." />
        <WritingFormsCompare />
      </div>

      <div>
        <SubHeading icon={Wand2} title="Using prescribed texts as mentor texts" subtitle="Read like a writer: notice a technique, then adapt it in your own work." />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {borrow.map((b) => (
            <div key={b.skill} className="rounded-2xl border border-line bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Borrow from {b.from}</p>
              <p className="mt-1 font-semibold text-ink">{b.skill}</p>
              <p className="mt-1.5 text-sm text-ink-2">{b.how}</p>
            </div>
          ))}
        </div>
        <Long>
          <div className={cx('mt-4 grid gap-3 rounded-2xl bg-surface-2 p-4 text-sm text-ink-2 sm:grid-cols-4')}>
            {['1. Read for meaning', '2. Re-read for craft: what is the writer doing?', '3. Imitate: write a short piece using the technique', '4. Adapt: make it your own and reflect'].map((s) => (
              <p key={s} className="font-medium text-ink">
                {s}
              </p>
            ))}
          </div>
        </Long>
      </div>

      <div>
        <SubHeading icon={PenLine} title="How to write a reflection on compositional choices" subtitle="A simple five-step guide with sentence starters." />
        <ReflectionGuide />
      </div>
    </div>
  );
}
