import { Link, Navigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, FileWarning, GraduationCap, Megaphone, Sparkles, Users } from 'lucide-react';
import { mentorTexts, writingForms } from '../data/moduleC';
import { Breadcrumbs } from '../components/Navigation';
import { Badge, Card, KeyList, Long, MarkComplete, Note } from '../components/ui';

export function MentorPage() {
  const { textId } = useParams();
  const idx = mentorTexts.findIndex((t) => t.id === textId);
  if (idx < 0) return <Navigate to="/module/module-c?s=breakdown" replace />;
  const t = mentorTexts[idx];
  const prev = mentorTexts[(idx + mentorTexts.length - 1) % mentorTexts.length];
  const next = mentorTexts[(idx + 1) % mentorTexts.length];
  const form = writingForms.find((w) => w.id === t.primaryForm)!;

  return (
    <div data-module="module-c" className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Module C', to: '/module/module-c' }, { label: 'Mentor texts', to: '/module/module-c?s=breakdown' }, { label: t.creator }]} />

      <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
        <div className="flex flex-wrap gap-2">
          <Badge tone={t.status.startsWith('NESA') ? 'accent' : 'brand'}>{t.status}</Badge>
          <Badge tone="neutral">{form.name} model</Badge>
        </div>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{t.title}</h1>
        <p className="mt-2 text-lg font-medium text-accent-ink">{t.creator}</p>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink-3">Date</dt>
            <dd className="mt-0.5 text-sm text-ink">{t.date}</dd>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink-3">Textual form</dt>
            <dd className="mt-0.5 text-sm text-ink">{t.form}</dd>
          </div>
        </dl>
        <div className="mt-5">
          <MarkComplete id={`module-c:text:${t.id}`} label="Mark text revised" />
        </div>
      </motion.header>

      {t.verification && (
        <div className="mt-6">
          <Note>
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
              <FileWarning size={15} /> Verification note:
            </span>{' '}
            {t.verification}
          </Note>
        </div>
      )}

      <Card className="mt-8">
        <p className="font-semibold text-ink">Summary</p>
        <p className="mt-2 text-ink-2">{t.summary}</p>
      </Card>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <Card>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Compass size={18} className="text-accent" /> Purpose
          </p>
          <p className="mt-2 text-sm text-ink-2">{t.purpose}</p>
        </Card>
        <Card>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Users size={18} className="text-accent" /> Intended audience
          </p>
          <p className="mt-2 text-sm text-ink-2">{t.audience}</p>
        </Card>
        <Card>
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Megaphone size={18} className="text-accent" /> Tone and voice
          </p>
          <p className="mt-2 text-sm text-ink-2">{t.toneVoice}</p>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Card>
          <p className="font-semibold text-ink">Context</p>
          <Long>
            <p className="mt-2 text-sm text-ink-2">{t.context}</p>
          </Long>
          <p className="mt-4 font-semibold text-ink">Main ideas</p>
          <KeyList items={t.mainIdeas} className="mt-2 text-sm" />
        </Card>
        <Card>
          <p className="font-semibold text-ink">Structural choices</p>
          <ol className="mt-3 space-y-2">
            {t.structure.map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent-ink">{i + 1}</span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <section className="mt-10" aria-labelledby="lang">
        <h2 id="lang" className="font-display text-2xl font-semibold text-ink">
          Important language techniques
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {t.techniques.map((k) => (
            <Card key={k.name} className="p-5">
              <p className="font-semibold text-ink">{k.name}</p>
              <p className="mt-2 text-sm text-ink-3">{k.example}</p>
              <p className="mt-2 rounded-lg bg-accent-soft p-2.5 text-sm text-ink">{k.effect}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card className="border-accent/40">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Sparkles size={18} className="text-accent" /> What makes it effective
          </p>
          <p className="mt-2 text-sm text-ink-2">{t.effectiveness}</p>
          <p className="mt-4 flex items-center gap-2 font-semibold text-ink">
            <GraduationCap size={18} className="text-accent" /> Module C descriptor link
          </p>
          <p className="mt-2 text-sm text-ink-2">{t.rubric}</p>
        </Card>
        <Card className="border-brand/50 bg-brand-soft">
          <p className="font-semibold text-ink">What you can learn from this writer’s craft</p>
          <ul className="mt-3 space-y-2">
            {t.lessons.map((l) => (
              <li key={l} className="flex gap-2 text-sm text-ink">
                <span className="font-bold text-brand-ink">→</span> {l}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <nav className="no-print mt-10 flex items-center justify-between gap-3 border-t border-line pt-6" aria-label="Mentor text navigation">
        <Link to={`/module/module-c/text/${prev.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
          <ArrowLeft size={16} /> {prev.creator}
        </Link>
        <Link to="/compare?tab=mentor" className="text-sm text-ink-3 hover:text-ink">
          Compare mentor texts
        </Link>
        <Link to={`/module/module-c/text/${next.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
          {next.creator} <ArrowRight size={16} />
        </Link>
      </nav>
    </div>
  );
}
