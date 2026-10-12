import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ArrowRight, Award, BookType, Brain, Lightbulb, Shapes } from 'lucide-react';
import { iflStrands } from '../data/moduleB';
import type { IflStrand } from '../data/types';
import { Chip, cx } from './ui';

type BoxId = 'idea' | 'form' | 'language' | 'reader' | 'significance';
type LinkId = keyof IflStrand['links'];

const boxes: { id: BoxId; label: string; icon: typeof Lightbulb }[] = [
  { id: 'idea', label: 'Idea', icon: Lightbulb },
  { id: 'form', label: 'Form', icon: Shapes },
  { id: 'language', label: 'Language', icon: BookType },
  { id: 'reader', label: 'Reader understanding', icon: Brain },
  { id: 'significance', label: 'Literary significance', icon: Award },
];

const linkMeta: { id: LinkId; label: string; boxes: BoxId[] }[] = [
  { id: 'ideaForm', label: 'Idea ↔ Form', boxes: ['idea', 'form'] },
  { id: 'formLanguage', label: 'Form ↔ Language', boxes: ['form', 'language'] },
  { id: 'toReader', label: 'I + F + L → Reader', boxes: ['idea', 'form', 'language', 'reader'] },
  { id: 'toSignificance', label: 'Reader → Significance', boxes: ['reader', 'significance'] },
];

/** Interactive model: IDEA + FORM + LANGUAGE → READER UNDERSTANDING → LITERARY SIGNIFICANCE */
export function IflDiagram() {
  const [strandId, setStrandId] = useState(iflStrands[0].id);
  const [link, setLink] = useState<LinkId>('toReader');
  const strand = iflStrands.find((s) => s.id === strandId)!;
  const activeBoxes = linkMeta.find((l) => l.id === link)!.boxes;

  const Box = ({ id }: { id: BoxId }) => {
    const meta = boxes.find((b) => b.id === id)!;
    const Icon = meta.icon;
    const active = activeBoxes.includes(id);
    const tone = id === 'significance' ? 'brand' : id === 'reader' ? 'ink' : 'accent';
    return (
      <motion.div
        layout
        className={cx(
          'rounded-2xl border p-4 transition-all duration-300',
          active ? 'opacity-100 shadow-md' : 'opacity-55',
          tone === 'accent' && (active ? 'border-accent bg-accent-soft' : 'border-line bg-surface'),
          tone === 'ink' && (active ? 'border-ink bg-surface' : 'border-line bg-surface'),
          tone === 'brand' && (active ? 'border-brand bg-brand-soft' : 'border-line bg-surface'),
        )}
      >
        <p className={cx('flex items-center gap-2 text-xs font-bold uppercase tracking-wider', tone === 'brand' ? 'text-brand-ink' : tone === 'ink' ? 'text-ink' : 'text-accent-ink')}>
          <Icon size={15} /> {meta.label}
        </p>
        <AnimatePresence mode="wait">
          <motion.p key={strand.id + id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-2 text-sm text-ink">
            {strand[id]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="rounded-3xl border border-line bg-surface-2/50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-semibold text-ink">Choose an idea:</span>
        {iflStrands.map((s) => (
          <Chip key={s.id} active={s.id === strandId} onClick={() => setStrandId(s.id)}>
            {s.label}
          </Chip>
        ))}
      </div>

      <div className="mt-6 grid items-center gap-3 lg:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="relative space-y-3">
          <Box id="idea" />
          <div className="text-center text-lg font-bold text-ink-3" aria-hidden>+</div>
          <Box id="form" />
          <div className="text-center text-lg font-bold text-ink-3" aria-hidden>+</div>
          <Box id="language" />
        </div>
        <div className="flex justify-center text-accent" aria-hidden>
          <ArrowRight className="hidden lg:block" size={28} />
          <ArrowDown className="lg:hidden" size={28} />
        </div>
        <Box id="reader" />
        <div className="flex justify-center text-brand-ink" aria-hidden>
          <ArrowRight className="hidden lg:block" size={28} />
          <ArrowDown className="lg:hidden" size={28} />
        </div>
        <Box id="significance" />
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <p className="text-sm font-semibold text-ink">Explain the relationship</p>
        <div className="mt-3 flex flex-wrap gap-2" role="tablist">
          {linkMeta.map((l) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={l.id === link}
              onClick={() => setLink(l.id)}
              className={cx(
                'rounded-full border px-3 py-1.5 text-sm font-medium',
                l.id === link ? 'border-accent bg-accent text-white dark:text-black' : 'border-line text-ink-2 hover:text-ink',
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p key={strand.id + link} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 text-ink">
            {strand.links[link]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
