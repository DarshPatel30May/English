import { useSearchParams } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { getModule, modules } from '../data';
import { Breadcrumbs } from '../components/Navigation';
import { RubricExplorer } from '../components/ModuleParts';
import { Chip } from '../components/ui';

export function RubricPage() {
  const [params, setParams] = useSearchParams();
  const m = getModule(params.get('m') ?? '') ?? modules[0];
  return (
    <div data-module={m.id} className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Rubric explorer' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Rubric explorer</h1>
      <p className="mt-2 max-w-2xl text-ink-3">Select a module, then a descriptor phrase, to see what it means and how your prescribed text addresses it.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {modules.map((x) => (
          <Chip key={x.id} active={x.id === m.id} onClick={() => setParams({ m: x.id }, { replace: true })}>
            {x.code}: {x.title}
          </Chip>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
        <ul className="space-y-2">
          {m.descriptor.intro.map((t) => (
            <li key={t} className="flex gap-3 text-ink-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>
        <a href={m.descriptor.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:underline">
          Read the full NESA descriptor <ExternalLink size={14} />
        </a>
      </div>
      <div className="mt-6" key={m.id}>
        <RubricExplorer phrases={m.descriptor.phrases} textName={m.id === 'module-c' ? 'the mentor texts' : m.texts[0].title} />
      </div>
    </div>
  );
}
