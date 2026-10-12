import { useState } from 'react';
import { Binary, GitCommitHorizontal, Network, Sigma, Workflow } from 'lucide-react';
import { curiousRelationships, narrativeFeatures, plotArc } from '../../data/moduleB';
import { IflDiagram } from '../IflDiagram';
import { InteractiveGraph, type GraphNodeInput } from '../ConceptMap';
import { Card, Diagram, Long, cx } from '../ui';
import { SubHeading } from './SubHeading';

const relNodes: GraphNodeInput[] = [
  { id: 'christopher', label: 'Christopher', sub: 'Narrator', kind: 'module', detail: 'Narrator and detective; the centre of every relationship.', position: { x: 0, y: 0 } },
  { id: 'ed', label: 'Ed (Father)', kind: 'person', detail: 'Devoted but deceptive father; trust broken and rebuilt.', position: { x: -330, y: -110 } },
  { id: 'judy', label: 'Judy (Mother)', kind: 'person', detail: 'Mother believed dead; revealed through her letters.', position: { x: 330, y: -110 } },
  { id: 'siobhan', label: 'Siobhan', sub: 'Teacher', kind: 'rubric', detail: 'Patient guide and most trusted adult.', position: { x: 0, y: 220 } },
  { id: 'eileen', label: 'Mrs Shears', sub: 'Eileen', kind: 'text', detail: 'Wellington’s owner; her conflict with Ed caused the dog’s death.', position: { x: -380, y: -320 } },
  { id: 'shears', label: 'Mr Shears', sub: 'Roger', kind: 'text', detail: 'Left with Judy for London.', position: { x: 380, y: -320 } },
];

function primesUpTo(n: number) {
  const out: number[] = [];
  for (let i = 2; i <= n; i++) if (out.every((p) => i % p !== 0)) out.push(i);
  return out;
}

export function ModuleBBreakdown() {
  const [feature, setFeature] = useState(narrativeFeatures[0].id);
  const f = narrativeFeatures.find((x) => x.id === feature)!;
  const primes = primesUpTo(233);

  return (
    <div className="space-y-12">
      <div>
        <SubHeading icon={Workflow} title="Idea + Form + Language → Reader understanding → Literary significance" subtitle="Choose an idea, then explore how each relationship works with text-specific examples." />
        <IflDiagram />
      </div>

      <div>
        <SubHeading icon={GitCommitHorizontal} title="Narrative arc" subtitle="A detective story that turns into a family drama and a quest." />
        <ol className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {plotArc.map((p, i) => (
            <li key={p.stage} className="relative rounded-2xl border border-line bg-surface p-4">
              <span className="text-xs font-semibold text-ink-3">{p.chapters}</span>
              <p className="mt-0.5 font-display text-lg font-semibold text-accent-ink">
                {i + 1}. {p.stage}
              </p>
              <Long>
                <p className="mt-1 text-sm text-ink-2">{p.detail}</p>
              </Long>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <SubHeading icon={Binary} title="Narrative and structural features" subtitle="Select a feature to see what it is, an example and its effect." />
        <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" role="tablist">
            {narrativeFeatures.map((x) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={x.id === feature}
                onClick={() => setFeature(x.id)}
                className={cx(
                  'shrink-0 rounded-xl border px-4 py-2.5 text-left text-sm font-medium',
                  x.id === feature ? 'border-accent bg-accent-soft text-accent-ink' : 'border-line bg-surface text-ink-2 hover:text-ink',
                )}
              >
                {x.name}
              </button>
            ))}
          </div>
          <Card>
            <h4 className="font-display text-2xl font-semibold text-ink">{f.name}</h4>
            <p className="mt-2 text-ink-2">{f.what}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Example</p>
                <p className="mt-1 text-sm text-ink">{f.example}</p>
              </div>
              <div className="rounded-xl bg-accent-soft p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">Effect</p>
                <p className="mt-1 text-sm text-ink">{f.effect}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Diagram>
        <div>
          <SubHeading icon={Sigma} title="Prime-numbered chapters, visualised" subtitle="The novel’s chapter numbers run through the prime numbers, from 2 to 233." />
          <Card>
            <div className="flex flex-wrap gap-1.5" aria-label="Prime numbers used as chapter numbers">
              {primes.map((p) => (
                <span key={p} className="grid h-9 min-w-9 place-items-center rounded-lg bg-accent-soft px-1.5 font-mono text-xs font-semibold text-accent-ink">
                  {p}
                </span>
              ))}
            </div>
            <Long>
              <p className="mt-4 text-sm text-ink-2">
                Christopher explains that he numbers chapters with primes because he likes them. A conventional feature (chapter numbering) becomes an expression of his identity, reminding readers on every page that the book is his creation and follows his logic.
              </p>
            </Long>
          </Card>
        </div>
      </Diagram>

      <div>
        <SubHeading icon={Network} title="Relationship map" subtitle="Truth, trust and deception mapped across the novel’s key relationships." />
        <InteractiveGraph
          nodes={relNodes}
          edges={curiousRelationships.map((r) => ({ source: r.from, target: r.to, label: r.label, detail: r.detail }))}
          height={480}
          showEdgeLabels
          title="Curious Incident relationship map"
          kindLabels={{ module: 'Narrator', person: 'Parent', rubric: 'Mentor', text: 'Neighbour' }}
        />
      </div>
    </div>
  );
}
