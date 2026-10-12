import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Clapperboard, Clock, Network, Shuffle, Users } from 'lucide-react';
import { billyCharacters, billyParadoxes, billyRelationships, billyScenes, strikeTimeline } from '../../data/common';
import { InteractiveGraph, type GraphNodeInput } from '../ConceptMap';
import { Badge, Card, Long, cx } from '../ui';
import { SubHeading } from './SubHeading';

const mapNodes: GraphNodeInput[] = [
  { id: 'billy', label: 'Billy', kind: 'module', detail: 'Protagonist. His relationships change as each character responds to his love of dance.', position: { x: 0, y: 0 } },
  { id: 'jackie', label: 'Jackie', sub: 'Father', kind: 'person', detail: 'Proud, grieving widower whose opposition turns to sacrifice.', position: { x: -330, y: -150 } },
  { id: 'tony', label: 'Tony', sub: 'Brother', kind: 'person', detail: 'Militant striker; hostile, then quietly supportive.', position: { x: -380, y: 150 } },
  { id: 'wilkinson', label: 'Mrs Wilkinson', sub: 'Teacher / mentor', kind: 'rubric', detail: 'Recognises Billy’s talent and acts as a surrogate mother figure.', position: { x: 330, y: 190 } },
  { id: 'michael', label: 'Michael', sub: 'Best friend', kind: 'rubric', detail: 'Explores his own identity; mutual acceptance with Billy.', position: { x: 350, y: -140 } },
  { id: 'mum', label: 'Mum', sub: 'Deceased', kind: 'text', detail: 'Present through memory and her letter; her absence shapes the family.', position: { x: -20, y: -270 } },
  { id: 'grandma', label: 'Grandma', kind: 'person', detail: 'Frail, once dreamed of dancing; cared for by Billy.', position: { x: 10, y: 270 } },
];

export function CommonBreakdown() {
  const [scene, setScene] = useState(billyScenes[0].id);
  const [char, setChar] = useState(billyCharacters[0].id);
  const s = billyScenes.find((x) => x.id === scene)!;
  const c = billyCharacters.find((x) => x.id === char)!;

  return (
    <div className="space-y-12">
      <div>
        <SubHeading icon={Network} title="Character relationship map" subtitle="Select a character or a connecting line to see how the relationship works and changes." />
        <InteractiveGraph
          nodes={mapNodes}
          edges={billyRelationships.map((r) => ({ source: r.from, target: r.to, label: r.label, detail: r.detail }))}
          height={500}
          showEdgeLabels
          title="Billy Elliot character relationship map"
          kindLabels={{ module: 'Protagonist', person: 'Family', rubric: 'Outside the family', text: 'Remembered presence' }}
        />
      </div>

      <div>
        <SubHeading icon={Users} title="Character analysis" subtitle="Traits, arcs and the moments that define them." />
        <div className="mb-4 flex flex-wrap gap-2" role="tablist">
          {billyCharacters.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === char}
              onClick={() => setChar(x.id)}
              className={cx('rounded-full border px-4 py-1.5 text-sm font-medium', x.id === char ? 'border-accent bg-accent text-white dark:text-black' : 'border-line text-ink-2 hover:text-ink')}
            >
              {x.name}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={c.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            <Card>
              <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
                <div>
                  <p className="font-display text-2xl font-semibold text-ink">{c.name}</p>
                  <p className="text-sm text-accent-ink">{c.role}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.traits.map((t) => (
                      <Badge key={t} tone="neutral">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Character arc</p>
                    <p className="mt-1 text-ink-2">{c.arc}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-surface-2 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Key moment</p>
                      <p className="mt-1 text-sm text-ink">{c.keyMoment}</p>
                    </div>
                    <div className="rounded-xl bg-accent-soft p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Rubric link</p>
                      <p className="mt-1 text-sm text-ink">{c.rubric}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div>
        <SubHeading icon={Clapperboard} title="Key scene analysis" subtitle="Step through eight scenes: what happens, the technique, and what it reveals about human experience." />
        <div className="relative mb-5 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2">
            {billyScenes.map((x, i) => (
              <button
                key={x.id}
                onClick={() => setScene(x.id)}
                aria-pressed={x.id === scene}
                className={cx(
                  'flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors',
                  x.id === scene ? 'border-accent bg-accent-soft font-semibold text-accent-ink' : 'border-line text-ink-2 hover:text-ink',
                )}
              >
                <span className={cx('grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold', x.id === scene ? 'bg-accent text-white dark:text-black' : 'bg-surface-2 text-ink-3')}>{i + 1}</span>
                {x.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={s.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
            <Card>
              <h4 className="font-display text-2xl font-semibold text-ink">{s.title}</h4>
              <p className="mt-2 text-ink-2">{s.moment}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-line p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Film technique</p>
                  <p className="mt-1 text-sm text-ink">{s.technique}</p>
                </div>
                <div className="rounded-xl bg-accent-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Meaning</p>
                  <p className="mt-1 text-sm text-ink">{s.meaning}</p>
                </div>
                <div className="rounded-xl bg-brand-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">Common Module link</p>
                  <p className="mt-1 text-sm text-ink">{s.rubric}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div>
        <SubHeading icon={Shuffle} title="Paradoxes, anomalies and inconsistencies" subtitle="The rubric’s most distinctive idea: what contradictions reveal about being human." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {billyParadoxes.map((p) => (
            <Card key={p.observation} className="p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-ink">{p.who}</p>
                <Badge tone={p.type === 'Paradox' ? 'brand' : p.type === 'Anomaly' ? 'accent' : 'neutral'}>{p.type}</Badge>
              </div>
              <p className="mt-2 text-sm text-ink-2">{p.observation}</p>
              <p className="mt-3 border-t border-line pt-3 text-sm font-medium text-ink">
                <span className="text-brand-ink">Insight → </span>
                {p.insight}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SubHeading icon={Clock} title="Two timelines: the strike and Billy" subtitle="Collective and individual experiences run in parallel and end in opposite ways." />
        <Long>
          <p className="-mt-2 mb-4 text-sm text-ink-3">Strike dates are historical; Billy’s events are the film’s fictional story placed against them.</p>
        </Long>
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-[90px_1fr_1fr] bg-surface-2 text-xs font-semibold uppercase tracking-wider text-ink-3 sm:grid-cols-[130px_1fr_1fr]">
            <div className="p-3">When</div>
            <div className="border-l border-line p-3">Collective: the strike</div>
            <div className="border-l border-line p-3 text-accent-ink">Individual: Billy</div>
          </div>
          {strikeTimeline.map((t, i) => (
            <div key={t.when} className={cx('grid grid-cols-[90px_1fr_1fr] text-sm sm:grid-cols-[130px_1fr_1fr]', i % 2 ? 'bg-surface-2/40' : 'bg-surface')}>
              <div className="p-3 font-semibold text-ink">{t.when}</div>
              <div className="border-l border-line p-3 text-ink-2">{t.strike}</div>
              <div className="border-l border-line p-3 text-ink">{t.billy}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
