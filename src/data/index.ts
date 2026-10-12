import type { ModuleData, ModuleId } from './types';
import { common, billyCharacters, billyScenes } from './common';
import { moduleA, poems, poemThemeLabels } from './moduleA';
import { moduleB, curiousCharacters, narrativeFeatures } from './moduleB';
import { moduleC, mentorTexts, writingForms } from './moduleC';
import { quotes } from './quotes';

export const modules: ModuleData[] = [common, moduleA, moduleB, moduleC];

export function getModule(id: string | undefined): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}


/* ---------------- Sections (shared A–H layout) ---------------- */

export const sections = [
  { id: 'overview', letter: 'A', label: 'Module overview' },
  { id: 'descriptor', letter: 'B', label: 'Module descriptor' },
  { id: 'text', letter: 'C', label: 'Prescribed text' },
  { id: 'themes', letter: 'D', label: 'Ideas & themes' },
  { id: 'techniques', letter: 'E', label: 'Language, form & structure' },
  { id: 'breakdown', letter: 'F', label: 'Text breakdown' },
  { id: 'map', letter: 'G', label: 'Concept map' },
  { id: 'revision', letter: 'H', label: 'Quick revision' },
  { id: 'quotes', letter: 'I', label: 'Quote bank' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

export const breakdownLabels: Record<ModuleId, string> = {
  common: 'Characters & scenes',
  'module-a': 'Poem-by-poem',
  'module-b': 'Narrative & structure',
  'module-c': 'Mentor texts',
};

/* ---------------- Cross-module themes (Theme explorer) ---------------- */

export interface CrossThemeEntry {
  moduleId: ModuleId;
  text: string;
  example: string;
  techniques: string[];
  href: string;
}

export interface CrossTheme {
  id: string;
  name: string;
  blurb: string;
  entries: CrossThemeEntry[];
}

export const crossThemes: CrossTheme[] = [
  {
    id: 'identity',
    name: 'Identity',
    blurb: 'Who we are, and how that is shaped by others, culture and choice.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Billy builds an identity through dance that his town does not offer him.', techniques: ['Dance as expression', 'Soundtrack'], href: '/module/common?s=themes' },
      { moduleId: 'module-a', text: '“Eyes”, “Leaves”', example: 'Identity is chosen (“Eyes”) or found through kinship and Country (“Leaves”).', techniques: ['Extended metaphor', 'Personification'], href: '/module/module-a/poem/eyes' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Christopher’s distinctive perspective defines how he, and the reader, understands the world.', techniques: ['First-person voice', 'Diagrams'], href: '/module/module-b?s=themes' },
      { moduleId: 'module-c', text: '“Popcorn”; Jobs', example: 'Cultural identity in a globalised world; living authentically rather than “someone else’s life”.', techniques: ['Motif', 'Direct address'], href: '/module/module-c/text/popcorn' },
    ],
  },
  {
    id: 'family',
    name: 'Family',
    blurb: 'Love, conflict, absence and sacrifice within families.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Grief for Billy’s mother drives conflict; Jackie’s sacrifice reunites the family.', techniques: ['Symbolism (piano, letter)', 'Close-ups'], href: '/module/common?s=breakdown' },
      { moduleId: 'module-a', text: '“Leaves”, “Key”', example: 'Distance from a father and a grandmother shapes the speakers’ identities.', techniques: ['Rhetorical questions', 'Thresholds'], href: '/module/module-a/poem/key' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Ed’s and Judy’s flawed love; trust broken and slowly rebuilt.', techniques: ['Embedded letters', 'Dramatic irony'], href: '/module/module-b?s=breakdown' },
      { moduleId: 'module-c', text: 'Rowling; Jobs', example: 'Rowling describes life as a lone parent; Jobs reflects on his family and career.', techniques: ['Anecdote'], href: '/module/module-c/text/rowling' },
    ],
  },
  {
    id: 'belonging',
    name: 'Belonging & community',
    blurb: 'How communities include, exclude and shape individuals.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Union solidarity gives strength but demands conformity.', techniques: ['Cross-cutting', 'Mise-en-scène'], href: '/module/common?s=themes' },
      { moduleId: 'module-a', text: '“Oombulgarri”, “Unearth”', example: 'Communities displaced from Country; collective identity anchored in ancestors.', techniques: ['Repetition', 'Inclusive language'], href: '/module/module-a/poem/oombulgarri' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Christopher often feels like an outsider in social situations.', techniques: ['Limited perspective'], href: '/module/module-b?s=themes' },
      { moduleId: 'module-c', text: 'Bush address', example: 'Collective pronouns unite a nation in crisis.', techniques: ['Collective pronouns'], href: '/module/module-c/text/bush' },
    ],
  },
  {
    id: 'resilience',
    name: 'Resilience & adversity',
    blurb: 'How people endure, adapt and grow through hardship.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Billy practises in secret; Jackie overcomes his pride.', techniques: ['Character arc', 'Flash-forward'], href: '/module/common?s=themes' },
      { moduleId: 'module-a', text: '“Eyes”, “Unearth”', example: 'A woman chooses strength; a culture refuses erasure.', techniques: ['Tonal shift', 'Symbolism'], href: '/module/module-a/poem/unearth' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Christopher’s journey to London alone.', techniques: ['Quest structure', 'Typography'], href: '/module/module-b?s=themes' },
      { moduleId: 'module-c', text: 'Rowling; Jobs', example: 'Failure and illness reframed as turning points.', techniques: ['Metaphor', 'Anecdote'], href: '/module/module-c/text/jobs' },
    ],
  },
  {
    id: 'truth',
    name: 'Truth & honesty',
    blurb: 'Telling, hiding and uncovering the truth.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Billy hides his lessons; honesty finally comes through dance.', techniques: ['Dance as expression'], href: '/module/common?s=breakdown' },
      { moduleId: 'module-a', text: '“Unearth”, “Oombulgarri”', example: 'Poetry as truth-telling about dispossession.', techniques: ['Extended metaphor', 'Repetition'], href: '/module/module-a/poem/unearth' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Ed’s lies about Judy and Wellington destroy trust.', techniques: ['Detective structure', 'Embedded documents'], href: '/module/module-b?s=themes' },
      { moduleId: 'module-c', text: 'Jobs', example: 'Candour about failure and mortality builds credibility.', techniques: ['Anecdote'], href: '/module/module-c/text/jobs' },
    ],
  },
  {
    id: 'individuality',
    name: 'Individuality vs conformity',
    blurb: 'Standing apart from expectations, and the cost of doing so.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Billy and Michael defy gender norms.', techniques: ['Juxtaposition', 'Symbolism'], href: '/module/common?s=themes' },
      { moduleId: 'module-a', text: '“Eyes”', example: 'Rejecting imposed emotional roles for self-determination.', techniques: ['Extended metaphor'], href: '/module/module-a/poem/eyes' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'The novel questions what counts as “normal”.', techniques: ['Defamiliarisation'], href: '/module/module-b?s=themes' },
      { moduleId: 'module-c', text: 'The Pedestrian', example: 'Leonard Mead is punished for walking.', techniques: ['Irony', 'Light/dark motif'], href: '/module/module-c/text/pedestrian' },
    ],
  },
  {
    id: 'loss',
    name: 'Loss & grief',
    blurb: 'How people experience and express loss.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'The family’s unspoken grief for Billy’s mother.', techniques: ['Symbolism (piano, letter)'], href: '/module/common?s=breakdown' },
      { moduleId: 'module-a', text: '“Trance”, “Oombulgarri”', example: 'Grief for a lover and for a community.', techniques: ['Sensory imagery', 'Pathetic fallacy'], href: '/module/module-a/poem/trance' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Christopher believes his mother is dead, until the letters.', techniques: ['Embedded letters'], href: '/module/module-b?s=breakdown' },
      { moduleId: 'module-c', text: 'Bush address', example: 'Public grief and comfort after 9/11.', techniques: ['Religious allusion'], href: '/module/module-c/text/bush' },
    ],
  },
  {
    id: 'expression',
    name: 'Communication & expression',
    blurb: 'Finding ways to express what words cannot.',
    entries: [
      { moduleId: 'common', text: 'Billy Elliot', example: 'Dance replaces words; Billy describes it as “electricity”.', techniques: ['Choreography', 'Soundtrack'], href: '/module/common?s=techniques' },
      { moduleId: 'module-a', text: 'Inside My Mother', example: 'Spare language and silence express what cannot be said.', techniques: ['Minimal punctuation', 'Imagery'], href: '/module/module-a?s=techniques' },
      { moduleId: 'module-b', text: 'The Curious Incident', example: 'Diagrams and literal language bridge communication gaps.', techniques: ['Diagrams', 'Literal language'], href: '/module/module-b?s=techniques' },
      { moduleId: 'module-c', text: 'All mentor texts', example: 'Craft is how writers communicate purpose to audience.', techniques: ['Voice', 'Structure'], href: '/module/module-c?s=techniques' },
    ],
  },
];

/* ---------------- Flashcards ---------------- */

export interface Flashcard {
  id: string;
  moduleId: ModuleId;
  category: 'Rubric' | 'Theme' | 'Technique' | 'Terminology' | 'Text' | 'Misconception' | 'Character' | 'Quote';
  front: string;
  back: string;
}

function buildFlashcards(): Flashcard[] {
  const cards: Flashcard[] = [];
  for (const m of modules) {
    const textName = m.texts[0].title;
    for (const p of m.descriptor.phrases) {
      cards.push({ id: `${m.id}:rub:${p.id}`, moduleId: m.id, category: 'Rubric', front: `What does “${p.phrase}” mean?`, back: `${p.meaning}\n\nIn the text: ${p.textLink}` });
    }
    for (const t of m.themes) {
      cards.push({ id: `${m.id}:theme:${t.id}`, moduleId: m.id, category: 'Theme', front: `Explain the theme “${t.name}” (${m.shortTitle}).`, back: `${t.summary}\n\nExample: ${t.examples[0]}` });
    }
    for (const k of m.techniques) {
      cards.push({ id: `${m.id}:tech:${k.name}`, moduleId: m.id, category: 'Technique', front: `${k.name}: example and effect in ${m.id === 'module-c' ? 'the mentor texts' : textName}?`, back: `${k.definition}\n\nExample: ${k.example}\n\nEffect: ${k.effect}` });
    }
    for (const term of m.revision.terminology) {
      cards.push({ id: `${m.id}:term:${term.term}`, moduleId: m.id, category: 'Terminology', front: `Define: ${term.term}`, back: term.definition });
    }
    for (const mis of m.revision.misconceptions) {
      cards.push({ id: `${m.id}:mis:${mis.myth}`, moduleId: m.id, category: 'Misconception', front: `True or false? “${mis.myth}”`, back: `False. ${mis.truth}` });
    }
  }
  for (const p of poems) {
    cards.push({
      id: `module-a:poem:${p.id}`,
      moduleId: 'module-a',
      category: 'Text',
      front: `Summarise “${p.title}” and name two key techniques.`,
      back: `${p.oneLine}\n\nThemes: ${p.themes.map((t) => poemThemeLabels[t] ?? t).join(', ')}\n\nTechniques: ${p.techniques.slice(0, 2).map((t) => `${t.name} (${t.effect})`).join('; ')}`,
    });
  }
  for (const t of mentorTexts) {
    cards.push({ id: `module-c:text:${t.id}`, moduleId: 'module-c', category: 'Text', front: `${t.creator}: “${t.title}”. Purpose and audience?`, back: `Purpose: ${t.purpose}\n\nAudience: ${t.audience}` });
    cards.push({ id: `module-c:lesson:${t.id}`, moduleId: 'module-c', category: 'Text', front: `What can you learn from ${t.creator}’s craft?`, back: t.lessons.map((l) => `• ${l}`).join('\n') });
  }
  for (const c of billyCharacters) {
    cards.push({ id: `common:char:${c.id}`, moduleId: 'common', category: 'Character', front: `Describe ${c.name}’s arc in Billy Elliot.`, back: `${c.arc}\n\nKey moment: ${c.keyMoment}` });
  }
  for (const s of billyScenes) {
    cards.push({ id: `common:scene:${s.id}`, moduleId: 'common', category: 'Text', front: `Scene: ${s.title}. Technique and meaning?`, back: `${s.technique}\n\n${s.meaning}` });
  }
  for (const c of curiousCharacters) {
    cards.push({ id: `module-b:char:${c.id}`, moduleId: 'module-b', category: 'Character', front: `Describe ${c.name}’s role and development.`, back: `${c.arc}\n\nKey moment: ${c.keyMoment}` });
  }
  for (const f of narrativeFeatures) {
    cards.push({ id: `module-b:nf:${f.id}`, moduleId: 'module-b', category: 'Technique', front: `Narrative feature: ${f.name}. What is its effect?`, back: `${f.what}\n\n${f.effect}` });
  }
  for (const q of quotes) {
    cards.push({
      id: `${q.moduleId}:quote:${q.id}`,
      moduleId: q.moduleId,
      category: 'Quote',
      front: `“${q.text}”\n\nWho / where? Technique?`,
      back: `${q.source} (${q.where})\n\nTechniques: ${q.techniques.join(', ')}\n\n${q.analysis}`,
    });
  }
  for (const w of writingForms) {
    cards.push({ id: `module-c:form:${w.id}`, moduleId: 'module-c', category: 'Terminology', front: `What is the purpose of ${w.name.toLowerCase()} writing?`, back: `${w.purpose}\n\nFeatures: ${w.features.join(', ')}` });
  }
  return cards;
}

export const flashcards: Flashcard[] = buildFlashcards();

/* ---------------- Search index ---------------- */

export interface SearchEntry {
  id: string;
  title: string;
  type: 'Module' | 'Section' | 'Theme' | 'Technique' | 'Rubric' | 'Term' | 'Poem' | 'Mentor text' | 'Character' | 'Scene' | 'Quote' | 'Tool';
  moduleId?: ModuleId;
  snippet: string;
  haystack: string;
  href: string;
}

function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];
  const add = (e: Omit<SearchEntry, 'haystack'> & { extra?: string }) => {
    const { extra, ...rest } = e;
    out.push({ ...rest, haystack: `${e.title} ${e.snippet} ${extra ?? ''}`.toLowerCase() });
  };
  for (const m of modules) {
    add({ id: `mod:${m.id}`, title: `${m.code}: ${m.title}`, type: 'Module', moduleId: m.id, snippet: m.purpose, href: `/module/${m.id}`, extra: `${m.textShort} ${m.summary}` });
    for (const s of sections) {
      add({ id: `sec:${m.id}:${s.id}`, title: `${s.letter}. ${s.label}`, type: 'Section', moduleId: m.id, snippet: `${m.shortTitle}: ${s.label}`, href: `/module/${m.id}?s=${s.id}` });
    }
    for (const t of m.themes) {
      add({ id: `th:${m.id}:${t.id}`, title: t.name, type: 'Theme', moduleId: m.id, snippet: t.summary, href: `/module/${m.id}?s=themes`, extra: t.examples.join(' ') });
    }
    for (const k of m.techniques) {
      add({ id: `tk:${m.id}:${k.name}`, title: k.name, type: 'Technique', moduleId: m.id, snippet: k.effect, href: `/module/${m.id}?s=techniques`, extra: `${k.definition} ${k.example}` });
    }
    for (const p of m.descriptor.phrases) {
      add({ id: `rb:${m.id}:${p.id}`, title: p.phrase, type: 'Rubric', moduleId: m.id, snippet: p.meaning, href: `/module/${m.id}?s=descriptor`, extra: p.textLink });
    }
    for (const term of m.revision.terminology) {
      add({ id: `tm:${m.id}:${term.term}`, title: term.term, type: 'Term', moduleId: m.id, snippet: term.definition, href: `/module/${m.id}?s=revision` });
    }
  }
  for (const p of poems) {
    add({ id: `poem:${p.id}`, title: `“${p.title}”`, type: 'Poem', moduleId: 'module-a', snippet: p.oneLine, href: `/module/module-a/poem/${p.id}`, extra: `${p.summary} ${p.techniques.map((t) => t.name).join(' ')} ${p.themes.join(' ')}` });
  }
  for (const t of mentorTexts) {
    add({ id: `mentor:${t.id}`, title: `${t.title} (${t.creator})`, type: 'Mentor text', moduleId: 'module-c', snippet: t.summary, href: `/module/module-c/text/${t.id}`, extra: `${t.form} ${t.techniques.map((k) => k.name).join(' ')}` });
  }
  for (const c of billyCharacters) {
    add({ id: `char:bill:${c.id}`, title: c.name, type: 'Character', moduleId: 'common', snippet: c.arc, href: '/module/common?s=breakdown', extra: c.traits.join(' ') });
  }
  for (const s of billyScenes) {
    add({ id: `scene:${s.id}`, title: s.title, type: 'Scene', moduleId: 'common', snippet: s.moment, href: '/module/common?s=breakdown', extra: `${s.technique} ${s.meaning}` });
  }
  for (const c of curiousCharacters) {
    add({ id: `char:cur:${c.id}`, title: c.name, type: 'Character', moduleId: 'module-b', snippet: c.arc, href: '/module/module-b?s=breakdown', extra: c.traits.join(' ') });
  }
  for (const f of narrativeFeatures) {
    add({ id: `nf:${f.id}`, title: f.name, type: 'Technique', moduleId: 'module-b', snippet: f.effect, href: '/module/module-b?s=breakdown', extra: f.what });
  }
  for (const w of writingForms) {
    add({ id: `wf:${w.id}`, title: `${w.name} writing`, type: 'Term', moduleId: 'module-c', snippet: w.purpose, href: '/module/module-c?s=breakdown', extra: w.features.join(' ') });
  }
  for (const q of quotes) {
    add({ id: `quote:${q.id}`, title: `“${q.text.length > 70 ? q.text.slice(0, 70) + '…' : q.text}”`, type: 'Quote', moduleId: q.moduleId, snippet: `${q.source}: ${q.useFor}`, href: `/module/${q.moduleId}?s=quotes`, extra: `${q.text} ${q.techniques.join(' ')} ${q.themes.join(' ')}` });
  }
  const tools: [string, string, string][] = [
    ['Quote bank', '/quotes', 'Verified quotes for every module, filterable by theme.'],
    ['Theme explorer', '/themes', 'Select a theme to see texts, examples and techniques across modules.'],
    ['Compare texts', '/compare', 'Compare any two Module A poems or Module C mentor texts.'],
    ['Rubric explorer', '/rubric', 'Explore descriptor phrases and how texts address them.'],
    ['Flashcards', '/flashcards', 'Flip revision cards filtered by module.'],
    ['Revision checklist', '/checklist', 'Tick off completed sections.'],
    ['Course map', '/map', 'Interactive map linking all modules, texts and themes.'],
    ['Print summaries', '/print/all', 'Printable module summaries / save as PDF.'],
  ];
  for (const [title, href, snippet] of tools) add({ id: `tool:${href}`, title, type: 'Tool', snippet, href });
  return out;
}

export const searchIndex: SearchEntry[] = buildSearchIndex();

export function search(query: string, limit = 40): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored: { e: SearchEntry; score: number }[] = [];
  for (const e of searchIndex) {
    let score = 0;
    let all = true;
    for (const t of terms) {
      if (!e.haystack.includes(t)) {
        all = false;
        break;
      }
      const title = e.title.toLowerCase();
      score += title.includes(t) ? (title.startsWith(t) ? 6 : 4) : 1;
    }
    if (!all) continue;
    if (e.title.toLowerCase().includes(q)) score += 5;
    if (e.type === 'Section') score -= 1;
    scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.e);
}

/* ---------------- Revision checklist ---------------- */

export interface ChecklistItem {
  id: string;
  label: string;
  href: string;
}

export function checklistFor(id: ModuleId): ChecklistItem[] {
  const base: ChecklistItem[] = sections.map((s) => ({ id: `${id}:${s.id}`, label: `${s.letter}. ${s.label}`, href: `/module/${id}?s=${s.id}` }));
  if (id === 'module-a') {
    for (const p of poems) base.push({ id: `${id}:poem:${p.id}`, label: `Poem: “${p.title}”`, href: `/module/module-a/poem/${p.id}` });
    base.push({ id: `${id}:compare`, label: 'Compared poem pairs', href: '/compare' });
  }
  if (id === 'module-c') {
    for (const t of mentorTexts) base.push({ id: `${id}:text:${t.id}`, label: `Mentor text: ${t.creator}`, href: `/module/module-c/text/${t.id}` });
    base.push({ id: `${id}:reflection`, label: 'Practised a reflection statement', href: '/module/module-c?s=breakdown' });
  }
  if (id === 'common') base.push({ id: `${id}:paradoxes`, label: 'Revised paradoxes & inconsistencies', href: '/module/common?s=breakdown' });
  if (id === 'module-b') base.push({ id: `${id}:ifl`, label: 'Explored Idea + Form + Language model', href: '/module/module-b?s=breakdown' });
  base.push({ id: `${id}:flashcards`, label: 'Reviewed flashcards', href: '/flashcards' });
  return base;
}
