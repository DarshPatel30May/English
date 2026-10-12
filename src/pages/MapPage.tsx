import { useMemo } from 'react';
import { Link } from 'react-router';
import { crossThemes, modules } from '../data';
import { Breadcrumbs } from '../components/Navigation';
import { InteractiveGraph, type GraphEdgeInput, type GraphNodeInput } from '../components/ConceptMap';

const textLabels: Record<string, string> = {
  common: 'Billy Elliot',
  'module-a': 'Inside My Mother',
  'module-b': 'The Curious Incident',
  'module-c': 'Five mentor texts',
};

export function MapPage() {
  const { nodes, edges } = useMemo(() => {
    const nodes: GraphNodeInput[] = [];
    const edges: GraphEdgeInput[] = [];
    modules.forEach((m, i) => {
      const x = -570 + i * 380;
      nodes.push({ id: m.id, label: m.code, sub: m.title, kind: 'module', detail: m.purpose, position: { x, y: -300 } });
      nodes.push({ id: `t-${m.id}`, label: textLabels[m.id], kind: 'text', detail: m.texts[0].memoryHook, position: { x, y: -170 } });
      edges.push({ source: m.id, target: `t-${m.id}`, label: 'prescribed text' });
    });
    crossThemes.forEach((t, i) => {
      const row = i % 2;
      const x = -630 + i * 180;
      nodes.push({
        id: `x-${t.id}`,
        label: t.name,
        kind: 'theme',
        detail: `${t.blurb} ${t.entries.map((e) => `${textLabels[e.moduleId]}: ${e.example}`).join(' ')}`,
        position: { x, y: 60 + row * 130 },
      });
      for (const e of t.entries) edges.push({ source: `t-${e.moduleId}`, target: `x-${t.id}`, label: e.text, detail: e.example });
    });
    return { nodes, edges };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Course map' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Course map</h1>
      <p className="mt-2 max-w-2xl text-ink-3">
        How the four modules, their prescribed texts and the course’s big ideas connect. Select a theme to see where it appears, or a text to see its themes. Each module also has its own detailed concept map in section G.
      </p>
      <div className="mt-6">
        <InteractiveGraph nodes={nodes} edges={edges} height={620} title="Course map" kindLabels={{ module: 'Module', text: 'Prescribed text', theme: 'Cross-module theme' }} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {modules.map((m) => (
          <Link key={m.id} to={`/module/${m.id}?s=map`} data-module={m.id} className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent-ink">
            {m.shortTitle} concept map →
          </Link>
        ))}
      </div>
    </div>
  );
}
