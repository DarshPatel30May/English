export type ModuleId = 'common' | 'module-a' | 'module-b' | 'module-c';

export interface Source {
  label: string;
  url: string;
  note?: string;
}

export interface RubricPhrase {
  id: string;
  phrase: string;
  /** Plain-English meaning of the phrase. */
  meaning: string;
  /** How the prescribed text addresses this phrase. */
  textLink: string;
}

export interface Theme {
  id: string;
  name: string;
  summary: string;
  examples: string[];
  techniques: string[];
  /** ids of related themes in the same module */
  related: string[];
}

export interface Technique {
  name: string;
  definition: string;
  example: string;
  effect: string;
  rubricLink: string;
}

export interface Person {
  name: string;
  role: string;
  description: string;
}

export interface ContextPoint {
  label: string;
  detail: string;
}

export interface TextOverview {
  title: string;
  creator: string;
  year: string;
  form: string;
  summary: string;
  memoryHook: string;
  context: ContextPoint[];
  people: Person[];
  note?: string;
}

export type ConceptType = 'module' | 'rubric' | 'text' | 'theme' | 'technique' | 'person';

export interface ConceptNode {
  id: string;
  label: string;
  type: ConceptType;
  detail: string;
}

export interface ConceptEdge {
  source: string;
  target: string;
  label?: string;
}

export interface ConceptMap {
  nodes: ConceptNode[];
  edges: ConceptEdge[];
}

export interface Misconception {
  myth: string;
  truth: string;
}

export interface Revision {
  takeaways: string[];
  thirtySecond: string;
  terminology: { term: string; definition: string }[];
  misconceptions: Misconception[];
  examGuide: string[];
}

export interface Descriptor {
  intro: string[];
  phrases: RubricPhrase[];
  sourceUrl: string;
  howTextAddresses: string;
}

/* ---------- Module-specific breakdown data ---------- */

export interface Scene {
  id: string;
  title: string;
  moment: string;
  technique: string;
  meaning: string;
  rubric: string;
}

export interface Relationship {
  from: string;
  to: string;
  label: string;
  detail: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  traits: string[];
  arc: string;
  keyMoment: string;
  rubric: string;
}

export interface Paradox {
  who: string;
  type: 'Paradox' | 'Anomaly' | 'Inconsistency';
  observation: string;
  insight: string;
}

export interface PoemTechnique {
  name: string;
  /** canonical tag used for comparison */
  tag: string;
  where: string;
  effect: string;
}

export interface Poem {
  id: string;
  title: string;
  group: 'collective' | 'family' | 'inner';
  oneLine: string;
  summary: string;
  speaker: string;
  structure: string;
  keyImages: string[];
  themes: string[];
  techniques: PoemTechnique[];
  identity: string;
  rubric: string;
  essayAngle: string;
  context?: string;
}

export interface PoemGroup {
  id: Poem['group'];
  label: string;
  poems: string[];
  explanation: string;
}

export interface PoemPair {
  a: string;
  b: string;
  perspectives: string;
  identityCulture: string;
  descriptor: string;
  why: string;
}

export interface NarrativeFeature {
  id: string;
  name: string;
  what: string;
  example: string;
  effect: string;
}

export interface IflStrand {
  id: string;
  label: string;
  idea: string;
  form: string;
  language: string;
  reader: string;
  significance: string;
  links: { ideaForm: string; formLanguage: string; toReader: string; toSignificance: string };
}

export interface MentorText {
  id: string;
  title: string;
  creator: string;
  date: string;
  form: string;
  status: string;
  verification?: string;
  summary: string;
  purpose: string;
  audience: string;
  context: string;
  mainIdeas: string[];
  techniques: { name: string; example: string; effect: string }[];
  structure: string[];
  toneVoice: string;
  effectiveness: string;
  lessons: string[];
  rubric: string;
  primaryForm: WritingFormId;
}

export type WritingFormId = 'imaginative' | 'discursive' | 'persuasive' | 'reflective' | 'informative';

export interface WritingForm {
  id: WritingFormId;
  name: string;
  purpose: string;
  feel: string;
  structure: string[];
  features: string[];
  voice: string;
  mentor: string;
  inStandardDescriptor: boolean;
}

export interface ModuleData {
  id: ModuleId;
  code: string;
  title: string;
  shortTitle: string;
  textShort: string;
  purpose: string;
  summary: string;
  inquiryQuestions: string[];
  nesaExpects: string[];
  examInfo: string;
  descriptor: Descriptor;
  texts: TextOverview[];
  themes: Theme[];
  techniques: Technique[];
  conceptMap: ConceptMap;
  revision: Revision;
  sources: Source[];
}
