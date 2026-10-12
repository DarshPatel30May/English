import { memo, useMemo, useState } from 'react';
import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { MousePointerClick, X } from 'lucide-react';
import type { ConceptMap as ConceptMapData, ConceptNode, ConceptType } from '../data/types';
import { Diagram, cx } from './ui';

export const typeMeta: Record<ConceptType, { label: string; node: string; dot: string }> = {
  module: { label: 'Module', node: 'bg-brand text-black border-transparent font-bold text-[17px] px-4 py-2.5', dot: 'bg-brand' },
  rubric: { label: 'Rubric concept', node: 'bg-accent text-white dark:text-black border-transparent font-semibold', dot: 'bg-accent' },
  text: { label: 'Text', node: 'bg-ink text-bg border-transparent font-semibold', dot: 'bg-ink' },
  theme: { label: 'Theme', node: 'bg-accent-soft text-accent-ink border-accent/50 font-medium', dot: 'bg-accent-soft ring-1 ring-accent' },
  technique: { label: 'Technique', node: 'bg-surface text-ink-2 border-line border-dashed font-medium', dot: 'bg-surface ring-1 ring-ink-3' },
  person: { label: 'Character / person', node: 'bg-brand-soft text-brand-ink border-brand/60 font-medium', dot: 'bg-brand-soft ring-1 ring-brand' },
};

type GraphNodeData = { label: string; kind: ConceptType; dim: boolean; selected: boolean; sub?: string };
type GraphNode = Node<GraphNodeData, 'concept'>;

const centreHandle = { top: '50%', left: '50%', width: 1, height: 1, minWidth: 0, minHeight: 0, opacity: 0, border: 0, transform: 'translate(-50%,-50%)' };

const ConceptNodeView = memo(function ConceptNodeView({ data }: NodeProps<GraphNode>) {
  return (
    <div
      className={cx(
        'max-w-[180px] cursor-pointer rounded-xl border px-3.5 py-2 text-center text-[15px] leading-snug shadow-sm transition-all duration-200',
        typeMeta[data.kind].node,
        data.dim && 'opacity-25',
        data.selected && 'scale-110 shadow-lg ring-4 ring-brand/50',
      )}
    >
      <Handle type="target" position={Position.Top} style={centreHandle} isConnectable={false} />
      {data.label}
      {data.sub && <span className="mt-0.5 block text-[10px] font-normal opacity-75">{data.sub}</span>}
      <Handle type="source" position={Position.Bottom} style={centreHandle} isConnectable={false} />
    </div>
  );
});

const nodeTypes = { concept: ConceptNodeView };

/** Radial layout: rings by graph distance from the root, ordered to follow their parents. */
function radialLayout(nodes: ConceptNode[], edges: { source: string; target: string }[], rootId: string) {
  const adj = new Map<string, Set<string>>();
  for (const n of nodes) adj.set(n.id, new Set());
  for (const e of edges) {
    adj.get(e.source)?.add(e.target);
    adj.get(e.target)?.add(e.source);
  }
  const level = new Map<string, number>([[rootId, 0]]);
  const queue = [rootId];
  while (queue.length) {
    const id = queue.shift()!;
    for (const nb of adj.get(id) ?? []) {
      if (!level.has(nb)) {
        level.set(nb, level.get(id)! + 1);
        queue.push(nb);
      }
    }
  }
  const maxLevel = Math.max(0, ...level.values());
  for (const n of nodes) if (!level.has(n.id)) level.set(n.id, maxLevel + 1);

  const rings = new Map<number, string[]>();
  for (const [id, l] of level) rings.set(l, [...(rings.get(l) ?? []), id]);
  const radii = [0, 150, 280, 390, 490];
  const angle = new Map<string, number>([[rootId, 0]]);
  const pos: Record<string, { x: number; y: number }> = { [rootId]: { x: 0, y: 0 } };

  const sortedLevels = [...rings.keys()].sort((a, b) => a - b);
  for (const l of sortedLevels) {
    if (l === 0) continue;
    const ids = rings.get(l)!;
    const step = (2 * Math.PI) / ids.length;
    const desired = ids.map((id) => {
      const parents = [...(adj.get(id) ?? [])].filter((p) => angle.has(p) && (level.get(p) ?? 0) < l);
      if (!parents.length) return { id, a: Math.PI };
      const sx = parents.reduce((s, p) => s + Math.cos(angle.get(p)!), 0);
      const sy = parents.reduce((s, p) => s + Math.sin(angle.get(p)!), 0);
      return { id, a: l === 1 ? 0 : Math.atan2(sy, sx) };
    });
    desired.sort((a, b) => a.a - b.a);
    let offset = -Math.PI / 2;
    if (l > 1) {
      const diffs = desired.map((d, i) => d.a - i * step);
      offset = Math.atan2(diffs.reduce((s, d) => s + Math.sin(d), 0), diffs.reduce((s, d) => s + Math.cos(d), 0));
    }
    desired.forEach((d, i) => {
      const a = offset + i * step;
      angle.set(d.id, a);
      const r = radii[Math.min(l, radii.length - 1)];
      pos[d.id] = { x: Math.cos(a) * r * 1.55, y: Math.sin(a) * r };
    });
  }
  return pos;
}

export interface GraphNodeInput {
  id: string;
  label: string;
  kind: ConceptType;
  detail: string;
  sub?: string;
  position?: { x: number; y: number };
}

export interface GraphEdgeInput {
  id?: string;
  source: string;
  target: string;
  label?: string;
  detail?: string;
}

interface InteractiveGraphProps {
  nodes: GraphNodeInput[];
  edges: GraphEdgeInput[];
  rootId?: string;
  height?: number;
  showEdgeLabels?: boolean;
  initialSelected?: string;
  title?: string;
  kindLabels?: Partial<Record<ConceptType, string>>;
}

function Graph({ nodes, edges, rootId, height = 600, showEdgeLabels = false, initialSelected, title, kindLabels }: InteractiveGraphProps) {
  const kindLabel = (k: ConceptType) => kindLabels?.[k] ?? typeMeta[k].label;
  const [selected, setSelected] = useState<string | null>(initialSelected ?? null);
  const [selectedEdge, setSelectedEdge] = useState<string | null>(null);

  const positions = useMemo(() => {
    if (nodes.every((n) => n.position)) return Object.fromEntries(nodes.map((n) => [n.id, n.position!]));
    return radialLayout(
      nodes.map((n) => ({ id: n.id, label: n.label, type: n.kind, detail: n.detail })),
      edges,
      rootId ?? nodes[0].id,
    );
  }, [nodes, edges, rootId]);

  const edgeList = useMemo(() => edges.map((e, i) => ({ ...e, id: e.id ?? `e${i}-${e.source}-${e.target}` })), [edges]);

  const neighbours = useMemo(() => {
    if (!selected) return null;
    const s = new Set([selected]);
    for (const e of edgeList) {
      if (e.source === selected) s.add(e.target);
      if (e.target === selected) s.add(e.source);
    }
    return s;
  }, [selected, edgeList]);

  const rfNodes: GraphNode[] = useMemo(
    () =>
      nodes.map((n) => ({
        id: n.id,
        type: 'concept',
        position: { x: positions[n.id].x - 70, y: positions[n.id].y - 18 },
        data: { label: n.label, kind: n.kind, sub: n.sub, dim: !!neighbours && !neighbours.has(n.id), selected: selected === n.id },
      })),
    [nodes, positions, neighbours, selected],
  );

  const rfEdges: Edge[] = useMemo(
    () =>
      edgeList.map((e) => {
        const active = (selected && (e.source === selected || e.target === selected)) || selectedEdge === e.id;
        return {
          id: e.id,
          source: e.source,
          target: e.target,
          type: 'straight',
          label: showEdgeLabels || active ? e.label : undefined,
          animated: !!active,
          style: {
            stroke: active ? 'var(--accent)' : 'var(--line)',
            strokeWidth: active ? 2.5 : 1.5,
            opacity: selected && !active ? 0.25 : 1,
          },
          labelBgPadding: [6, 3] as [number, number],
          labelBgBorderRadius: 6,
          interactionWidth: 18,
        };
      }),
    [edgeList, selected, selectedEdge, showEdgeLabels],
  );

  const node = nodes.find((n) => n.id === selected);
  const edge = edgeList.find((e) => e.id === selectedEdge);
  const label = (id: string) => nodes.find((n) => n.id === id)?.label ?? id;
  const connections = node ? edgeList.filter((e) => e.source === node.id || e.target === node.id) : [];

  return (
    <div>
      <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Legend">
        {[...new Set(nodes.map((n) => n.kind))].map((k) => (
          <li key={k} className="flex items-center gap-2 text-sm text-ink-2">
            <span className={cx('h-3 w-3 rounded-full', typeMeta[k].dot)} />
            {kindLabel(k)}
          </li>
        ))}
      </ul>
      <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-2/60" style={{ height }}>
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          nodeTypes={nodeTypes}
          onNodeClick={(_, n) => {
            setSelectedEdge(null);
            setSelected((s) => (s === n.id ? null : n.id));
          }}
          onEdgeClick={(_, e) => {
            setSelected(null);
            setSelectedEdge(e.id);
          }}
          onPaneClick={() => {
            setSelected(null);
            setSelectedEdge(null);
          }}
          fitView
          fitViewOptions={{ padding: 0.08 }}
          minZoom={0.3}
          maxZoom={1.8}
          zoomOnScroll={false}
          preventScrolling={false}
          nodesConnectable={false}
          proOptions={{ hideAttribution: false }}
          aria-label={title ?? 'Interactive concept map'}
        >
          <Background gap={22} size={1} color="var(--line)" />
          <Controls showInteractive={false} position="bottom-left" />
        </ReactFlow>
        <div className="pointer-events-none absolute bottom-5 right-3 hidden items-center gap-1.5 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] text-ink-3 shadow-sm sm:flex">
          <MousePointerClick size={13} /> Click a node{edges.some((e) => e.detail) ? ' or line' : ''} · drag to pan
        </div>
      </div>

      <aside
        className={cx(
          'mt-3 rounded-2xl border border-line bg-surface p-5 md:absolute md:right-3 md:top-3 md:mt-0 md:max-h-[calc(100%-24px)] md:w-80 md:overflow-y-auto md:shadow-xl',
          !node && !edge && 'md:hidden',
        )}
        aria-live="polite"
      >
        {(node || edge) && (
          <button
            onClick={() => {
              setSelected(null);
              setSelectedEdge(null);
            }}
            className="float-right -mr-1 -mt-1 grid h-7 w-7 place-items-center rounded-full text-ink-3 hover:bg-surface-2 hover:text-ink"
            aria-label="Close details"
          >
            <X size={16} />
          </button>
        )}
        {node ? (
          <>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
              <span className={cx('h-2.5 w-2.5 rounded-full', typeMeta[node.kind].dot)} /> {kindLabel(node.kind)}
            </span>
            <h4 className="mt-2 font-display text-xl font-semibold text-ink">{node.label}</h4>
            <p className="mt-2 text-ink-2">{node.detail}</p>
            {connections.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">Connected to</p>
                <div className="flex flex-wrap gap-1.5">
                  {connections.map((c) => {
                    const other = c.source === node.id ? c.target : c.source;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelected(other)}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2 hover:border-accent hover:text-ink"
                        title={c.detail ?? c.label}
                      >
                        {label(other)}
                        {c.label ? <span className="text-ink-3"> · {c.label}</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : edge ? (
          <>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">Relationship</span>
            <h4 className="mt-2 font-display text-xl font-semibold text-ink">
              {label(edge.source)} ↔ {label(edge.target)}
            </h4>
            {edge.label && <p className="mt-1 font-medium text-accent-ink">{edge.label}</p>}
            {edge.detail && <p className="mt-2 text-ink-2">{edge.detail}</p>}
          </>
        ) : (
          <p className="text-sm text-ink-3">Select any node{edges.some((e) => e.detail) ? ' or connecting line' : ''} to see its explanation and highlight its connections.</p>
        )}
      </aside>
      </div>
    </div>
  );
}

/** Accessible list version of a graph, used in Text-only mode. */
export function GraphList({ nodes, edges }: { nodes: GraphNodeInput[]; edges: GraphEdgeInput[] }) {
  const label = (id: string) => nodes.find((n) => n.id === id)?.label ?? id;
  return (
    <div className="space-y-3">
      {nodes.map((n) => {
        const links = edges.filter((e) => e.source === n.id || e.target === n.id);
        return (
          <div key={n.id} className="border-b border-line pb-3">
            <p className="font-semibold text-ink">
              {n.label} <span className="text-sm font-normal text-ink-3">({typeMeta[n.kind].label})</span>
            </p>
            <p className="text-ink-2">{n.detail}</p>
            {links.length > 0 && (
              <p className="mt-1 text-sm text-ink-3">
                Connects to:{' '}
                {links
                  .map((l) => {
                    const other = l.source === n.id ? l.target : l.source;
                    return l.label ? `${label(other)} (${l.label})` : label(other);
                  })
                  .join('; ')}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function InteractiveGraph(props: InteractiveGraphProps) {
  return (
    <Diagram fallback={<GraphList nodes={props.nodes} edges={props.edges} />}>
      <ReactFlowProvider>
        <Graph {...props} />
      </ReactFlowProvider>
    </Diagram>
  );
}

export function ConceptMap({ map, title }: { map: ConceptMapData; title?: string }) {
  const nodes = useMemo<GraphNodeInput[]>(() => map.nodes.map((n) => ({ id: n.id, label: n.label, kind: n.type, detail: n.detail })), [map]);
  return <InteractiveGraph nodes={nodes} edges={map.edges} rootId={map.nodes.find((n) => n.type === 'module')?.id} title={title} />;
}
