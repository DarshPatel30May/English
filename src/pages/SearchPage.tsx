import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Search } from 'lucide-react';
import { search, type SearchEntry } from '../data';
import { Breadcrumbs } from '../components/Navigation';
import { SearchResultRow } from '../components/SearchDialog';

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const navigate = useNavigate();
  const results = useMemo(() => search(q, 200), [q]);
  const groups = useMemo(() => {
    const g = new Map<string, SearchEntry[]>();
    for (const r of results) g.set(r.type, [...(g.get(r.type) ?? []), r]);
    return [...g.entries()];
  }, [results]);

  return (
    <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Search' }]} />
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink">Search</h1>
      <label className="mt-6 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 focus-within:border-brand">
        <Search size={18} className="text-ink-3" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
          placeholder="Search modules, texts, themes, techniques and terminology"
          className="h-14 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-3"
          aria-label="Search query"
        />
      </label>
      <p className="mt-3 text-sm text-ink-3">{q ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Type to search across all four modules.'}</p>
      <div className="mt-6 space-y-8">
        {groups.map(([type, list]) => (
          <section key={type}>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
              {type} ({list.length})
            </h2>
            <div className="rounded-2xl border border-line bg-surface p-1.5">
              {list.map((r) => (
                <SearchResultRow key={r.id} entry={r} onSelect={() => navigate(r.href)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
