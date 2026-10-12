import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Printer } from 'lucide-react';
import { getModule, modules } from '../data';
import type { ModuleData } from '../data/types';
import { billyParadoxes, billyScenes } from '../data/common';
import { poems, poemThemeLabels } from '../data/moduleA';
import { iflStrands, narrativeFeatures } from '../data/moduleB';
import { mentorTexts } from '../data/moduleC';
import { Breadcrumbs } from '../components/Navigation';
import { Chip } from '../components/ui';

function H({ children }: { children: React.ReactNode }) {
  return <h3 className="avoid-break mb-2 mt-6 border-b border-line pb-1 font-display text-lg font-semibold text-ink">{children}</h3>;
}

function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto print:overflow-visible">
    <table className="w-full min-w-[520px] border-collapse text-[13px] print:min-w-0">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} className="border border-line bg-surface-2 p-1.5 text-left font-semibold text-ink">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="avoid-break align-top">
            {r.map((c, j) => (
              <td key={j} className="border border-line p-1.5 text-ink-2">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

function Breakdown({ m }: { m: ModuleData }) {
  if (m.id === 'common')
    return (
      <>
        <H>Key scenes</H>
        <Table head={['Scene', 'Technique', 'Meaning']} rows={billyScenes.map((s) => [s.title, s.technique, s.meaning])} />
        <H>Paradoxes & inconsistencies</H>
        <Table head={['Who', 'Type', 'Observation', 'Insight']} rows={billyParadoxes.map((p) => [p.who, p.type, p.observation, p.insight])} />
      </>
    );
  if (m.id === 'module-a')
    return (
      <>
        <H>Poem-by-poem</H>
        <Table
          head={['Poem', 'Summary', 'Themes', 'Key techniques']}
          rows={poems.map((p) => [
            <strong key="t">“{p.title}”</strong>,
            p.oneLine,
            p.themes.map((t) => poemThemeLabels[t]).join(', '),
            p.techniques.map((t) => t.name).join('; '),
          ])}
        />
        <p className="mt-2 text-[12px] text-ink-3">Groupings: Unearth + Oombulgarri (collective history) · Leaves + Key (family) · Trance + Eyes (inner identity)</p>
      </>
    );
  if (m.id === 'module-b')
    return (
      <>
        <H>Narrative features</H>
        <Table head={['Feature', 'What', 'Effect']} rows={narrativeFeatures.map((f) => [f.name, f.what, f.effect])} />
        <H>Idea + Form + Language → Reader → Significance</H>
        <Table head={['Idea', 'Form', 'Language', 'Reader', 'Significance']} rows={iflStrands.map((s) => [s.idea, s.form, s.language, s.reader, s.significance])} />
      </>
    );
  return (
    <>
      <H>Mentor texts</H>
      <Table
        head={['Text', 'Form & date', 'Purpose', 'Key techniques', 'Borrow']}
        rows={mentorTexts.map((t) => [
          <span key="t">
            <strong>{t.title}</strong>, {t.creator}
          </span>,
          `${t.form}. ${t.date}`,
          t.purpose,
          t.techniques.map((k) => k.name).join('; '),
          t.lessons[0],
        ])}
      />
    </>
  );
}

function PrintModule({ m, first }: { m: ModuleData; first: boolean }) {
  const t = m.texts[0];
  return (
    <article data-module={m.id} className={first ? '' : 'print-break mt-16 border-t-4 border-line pt-10 print:mt-0 print:border-0 print:pt-0'}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{m.code}</p>
      <h2 className="font-display text-3xl font-semibold text-ink">{m.title}</h2>
      <p className="mt-1 text-ink-3">{m.textShort}</p>
      <p className="mt-3 font-medium text-ink">{m.purpose}</p>
      <p className="mt-2 text-sm text-ink-2">{m.summary}</p>
      <p className="mt-2 text-sm text-ink-2">
        <strong>Exam:</strong> {m.examInfo}
      </p>

      <H>Descriptor: key phrases</H>
      <Table head={['Phrase', 'Meaning', 'In the text']} rows={m.descriptor.phrases.map((p) => [<strong key="p">{p.phrase}</strong>, p.meaning, p.textLink])} />

      <H>Prescribed text</H>
      <p className="text-sm text-ink-2">
        <strong>{t.title}</strong> · {t.creator} · {t.year} · {t.form}
      </p>
      <p className="mt-1 text-sm text-ink-2">{t.summary}</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-ink-2">
        {t.context.map((c) => (
          <li key={c.label}>
            <strong>{c.label}:</strong> {c.detail}
          </li>
        ))}
      </ul>

      <H>Themes</H>
      <ul className="list-disc pl-5 text-sm text-ink-2">
        {m.themes.map((th) => (
          <li key={th.id}>
            <strong>{th.name}:</strong> {th.summary}
          </li>
        ))}
      </ul>

      <H>Techniques</H>
      <Table head={['Technique', 'Example', 'Effect']} rows={m.techniques.map((k) => [k.name, k.example, k.effect])} />

      <Breakdown m={m} />

      <H>Quick revision</H>
      <p className="text-sm text-ink">
        <strong>30-second summary:</strong> {m.revision.thirtySecond}
      </p>
      <ol className="mt-2 list-decimal pl-5 text-sm text-ink-2">
        {m.revision.takeaways.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
      <div className="mt-3 grid gap-4 text-sm sm:grid-cols-2 print:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">Terminology</p>
          <ul className="mt-1 text-ink-2">
            {m.revision.terminology.map((x) => (
              <li key={x.term}>
                <strong>{x.term}</strong>: {x.definition}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Misconceptions</p>
          <ul className="mt-1 text-ink-2">
            {m.revision.misconceptions.map((x) => (
              <li key={x.myth}>
                ✗ {x.myth} <br />✓ {x.truth}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-semibold text-ink">Exam guide</p>
          <ul className="mt-1 list-disc pl-5 text-ink-2">
            {m.revision.examGuide.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <H>Sources</H>
      <ul className="text-[12px] text-ink-3">
        {m.sources.map((s) => (
          <li key={s.url + s.label}>
            {s.label}: {s.url}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PrintPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const single = getModule(moduleId);
  const list = single ? [single] : modules;

  useEffect(() => {
    const prev = document.title;
    document.title = single ? `${single.code} ${single.title}: Summary` : 'HSC English Standard 2026: All module summaries';
    return () => {
      document.title = prev;
    };
  }, [single]);

  return (
    <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 print:max-w-none print:px-0 print:pt-0">
      <div className="no-print">
        <Breadcrumbs items={[{ label: 'Print / PDF' }]} />
        <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
          <h1 className="font-display text-3xl font-semibold text-ink">Printable summaries</h1>
          <p className="mt-1 text-sm text-ink-3">
            Choose a module (or all), then press Print. To make a PDF, choose “Save as PDF” as the printer in your browser’s print dialog.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip active={!single} onClick={() => navigate('/print/all')}>
              All modules
            </Chip>
            {modules.map((m) => (
              <Chip key={m.id} active={single?.id === m.id} onClick={() => navigate(`/print/${m.id}`)}>
                {m.shortTitle}
              </Chip>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90">
              <Printer size={16} /> Print / Save as PDF
            </button>
            {single && (
              <Link to={`/module/${single.id}`} className="inline-flex items-center rounded-full border border-line px-4 py-2.5 text-sm text-ink-2 hover:text-ink">
                Back to module
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 print:mt-0">
        <header className="mb-8 hidden print:block">
          <p className="text-sm">HSC English Standard 2026 · Visual Study Guide · Summary</p>
        </header>
        {list.map((m, i) => (
          <PrintModule key={m.id} m={m} first={i === 0} />
        ))}
      </div>
    </div>
  );
}
