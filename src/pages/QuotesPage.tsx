import { useState } from 'react';
import { modules } from '../data';
import { quotes } from '../data/quotes';
import type { ModuleId } from '../data/types';
import { Breadcrumbs } from '../components/Navigation';
import { QuoteBank } from '../components/QuoteBank';
import { Chip } from '../components/ui';

export function QuotesPage() {
  const [mod, setMod] = useState<'all' | ModuleId>('all');
  const list = mod === 'all' ? quotes : quotes.filter((q) => q.moduleId === mod);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Quote bank' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Quote bank</h1>
      <p className="mt-2 max-w-2xl text-ink-3">
        {quotes.length} versatile quotes across all four modules, each with techniques, analysis and the kinds of questions it can answer. Wording was checked against published transcripts and reliable study sources; anything confirmed only by study notes is marked “Check your copy”.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Chip active={mod === 'all'} onClick={() => setMod('all')}>
          All modules
        </Chip>
        {modules.map((m) => (
          <Chip key={m.id} active={mod === m.id} onClick={() => setMod(m.id)}>
            {m.shortTitle} ({quotes.filter((q) => q.moduleId === m.id).length})
          </Chip>
        ))}
      </div>
      <div className="mt-6" key={mod}>
        <QuoteBank quotes={list} showModule={mod === 'all'} />
      </div>
    </div>
  );
}
