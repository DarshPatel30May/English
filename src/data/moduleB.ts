import type { CharacterProfile, IflStrand, ModuleData, NarrativeFeature, Relationship } from './types';
import { NESA_SYLLABUS_URL } from './sources';

export const moduleB: ModuleData = {
  id: 'module-b',
  code: 'Module B',
  title: 'Close Study of Literature',
  shortTitle: 'Module B',
  textShort: 'The Curious Incident of the Dog in the Night-Time (2003), Mark Haddon',
  purpose:
    'To develop an informed understanding and appreciation of one substantial literary text: how its ideas, form and language create meaning and lasting value.',
  summary:
    'Module B is a close study of one literary work: Mark Haddon’s novel The Curious Incident of the Dog in the Night-Time. You analyse how the novel’s distinctive qualities create meaning. These include Christopher Boone’s first-person voice, prime-numbered chapters, diagrams and digressions. You explore ideas such as truth, trust, independence and different ways of perceiving the world. You also develop a personal, informed response to the text and its significance.',
  inquiryQuestions: [
    'How does Christopher’s distinctive narrative voice shape our understanding of truth and trust?',
    'How do the novel’s unusual form and structure represent order, uncertainty and different perspectives?',
    'How does the novel move from a detective story to a story about family?',
    'What makes this novel distinctive and enduring as a work of literature?',
    'How has your personal response to Christopher developed through close reading?',
  ],
  nesaExpects: [
    'Develop an informed understanding, knowledge and appreciation of the prescribed text.',
    'Analyse the distinctive qualities of the text, including language features, text structures and stylistic choices.',
    'Explain how the text represents ideas, perspectives and human experiences.',
    'Evaluate the relationships between ideas, form and language and the text’s significance.',
    'Express an informed personal response supported by detailed textual evidence.',
  ],
  examInfo:
    'HSC Paper 2, Section II (20 marks): an extended response on The Curious Incident. Questions may focus on any aspect of the module: ideas, form, language, characterisation, significance or personal response.',
  descriptor: {
    intro: [
      'Students develop an informed understanding, knowledge and appreciation of a substantial literary text.',
      'Through close and wide reading, they analyse the distinctive qualities of the text, including how its language features, text structures and stylistic choices shape meaning and represent ideas and perspectives.',
      'Through analysis and their own compositions, they further develop their personal and intellectual connections with, and enjoyment of, the text.',
    ],
    phrases: [
      {
        id: 'b-informed',
        phrase: 'informed understanding, knowledge and appreciation',
        meaning:
          'Know the whole novel deeply (plot, characters, structure, ideas) and be able to explain why it is worth studying.',
        textLink:
          'Track how Christopher’s detective project turns into a family drama, and know the significance of key chapters such as the discovery of the letters and the journey to London.',
      },
      {
        id: 'b-substantial',
        phrase: 'a substantial literary text',
        meaning: 'A complex, extended work of literature that rewards detailed analysis.',
        textLink:
          'The novel is a sustained first-person narrative that blends detective fiction, the coming-of-age story and visual elements.',
      },
      {
        id: 'b-distinctive',
        phrase: 'distinctive qualities',
        meaning: 'The features that make this text unique: voice, structure, style and ideas.',
        textLink:
          'Prime-numbered chapters, diagrams, lists, maths problems, digressions and Christopher’s literal, precise voice.',
      },
      {
        id: 'b-features',
        phrase: 'language features, text structures and stylistic choices',
        meaning: 'How the writing works: word choice and sentences (language), organisation (structure) and the writer’s style.',
        textLink:
          'Repetitive “and … and” syntax, capitalised phrases, alternating plot and digression chapters, and dense typography during the train journey.',
      },
      {
        id: 'b-ideas',
        phrase: 'ideas and perspectives',
        meaning: 'What the text explores and through whose eyes.',
        textLink:
          'Truth, trust, order, independence and difference, all filtered through Christopher’s unique way of perceiving the world.',
      },
      {
        id: 'b-personal',
        phrase: 'personal and intellectual connections with, and enjoyment of, the text',
        meaning: 'Your own informed response matters: what the text made you think and feel, and why.',
        textLink:
          'Many readers move from finding Christopher puzzling to understanding the logic and courage of his choices. That shift is a strong basis for a personal response.',
      },
    ],
    sourceUrl: NESA_SYLLABUS_URL,
    howTextAddresses:
      'The Curious Incident is defined by its distinctive form: a first-person narrator writing his own book, with prime-numbered chapters, diagrams and digressions. Its ideas (truth, trust, order, independence) are inseparable from that form. This makes it ideal for analysing how ideas, form and language work together.',
  },
  texts: [
    {
      title: 'The Curious Incident of the Dog in the Night-Time',
      creator: 'Mark Haddon',
      year: '2003',
      form: 'Novel (first-person narrative). Study the novel, not the stage adaptation.',
      summary:
        'Fifteen-year-old Christopher Boone lives with his father in Swindon. He finds his neighbour Mrs Shears’ dog, Wellington, killed with a garden fork and decides to investigate, writing his findings as a murder-mystery book. His detective work uncovers letters revealing that his mother, Judy, whom his father said had died, is alive and living in London with Mr Shears. When his father, Ed, admits he lied and that he killed Wellington, Christopher no longer feels safe and travels alone to London to find his mother. He returns to Swindon, sits his A-level maths exam and slowly begins to rebuild trust with his father, ending the novel believing he can do anything.',
      memoryHook: 'A murder mystery that solves itself halfway and becomes a story about truth, trust and courage.',
      context: [
        {
          label: 'Mark Haddon',
          detail:
            'An English writer and illustrator who had written many children’s books before this novel. It was published in 2003 for both adult and younger readers and won the Whitbread Book of the Year award.',
        },
        {
          label: 'Detective fiction',
          detail:
            'Christopher admires Sherlock Holmes. The novel’s title comes from Arthur Conan Doyle’s story “Silver Blaze”, and The Hound of the Baskervilles is discussed in the text. Haddon uses detective conventions (clues, deduction, a culprit), then subverts them.',
        },
        {
          label: 'Coming-of-age (bildungsroman)',
          detail:
            'The novel traces Christopher’s growth towards independence and self-belief through a journey and a crisis.',
        },
        {
          label: 'Representing difference responsibly',
          detail:
            'Christopher’s condition is never named in the novel. Haddon has said the book is not about any specific disorder and is instead about difference and being an outsider. Avoid diagnosing Christopher; analyse how Haddon represents his perspective.',
        },
        {
          label: 'Setting',
          detail:
            'Swindon, a town in southern England, and London. The contrast between Christopher’s familiar routines and the overwhelming city drives the second half.',
        },
      ],
      people: [
        { name: 'Christopher Boone', role: 'Narrator, aged fifteen', description: 'Logical, honest and gifted at maths; he finds people’s emotions, touch and crowds hard to manage, and is far braver than he realises.' },
        { name: 'Ed Boone (Father)', role: 'Christopher’s father', description: 'Devoted and patient but deeply flawed. He lies to protect Christopher and himself, and loses his temper.' },
        { name: 'Judy Boone (Mother)', role: 'Christopher’s mother', description: 'Loving but overwhelmed. She left for London with Mr Shears, and her letters reveal her guilt and struggle.' },
        { name: 'Siobhan', role: 'Christopher’s teacher', description: 'A patient guide who helps him understand people and encourages him to write the book.' },
        { name: 'Mrs Alexander', role: 'Elderly neighbour', description: 'Kind to Christopher; she reveals the affair between his mother and Mr Shears.' },
        { name: 'Mr and Mrs Shears', role: 'Neighbours', description: 'Roger Shears left with Judy; Eileen Shears owned Wellington and had grown close to Ed.' },
      ],
    },
  ],
  themes: [
    {
      id: 'truth-trust',
      name: 'Truth, trust and deception',
      summary:
        'Christopher values truth absolutely; the adults around him lie, often to protect themselves or him. The novel explores how lies, even loving ones, destroy trust, and how trust can be rebuilt.',
      examples: ['Ed’s lie that Judy died, exposed by the hidden letters.', 'Ed’s confession that he killed Wellington.'],
      techniques: ['First-person narration', 'Embedded letters', 'Dramatic irony'],
      related: ['family', 'communication', 'independence'],
    },
    {
      id: 'order-uncertainty',
      name: 'Order, logic and uncertainty',
      summary:
        'Christopher creates order through maths, lists, timetables and rules. These systems help him make sense of a world that is often noisy and unpredictable.',
      examples: ['Counting cars to decide whether a day will be good or bad.', 'Solving maths problems to calm himself.'],
      techniques: ['Prime-numbered chapters', 'Lists', 'Diagrams', 'Digressions'],
      related: ['perspective', 'independence'],
    },
    {
      id: 'independence',
      name: 'Independence and personal development',
      summary:
        'Christopher’s journey to London tests his limits and proves his courage. Growth is measured on his own terms, not on conventional terms.',
      examples: ['Navigating Swindon station and the London Underground alone.', 'Sitting his A-level maths exam.'],
      techniques: ['Quest structure', 'Maps and signs', 'Self-instruction'],
      related: ['truth-trust', 'order-uncertainty'],
    },
    {
      id: 'communication',
      name: 'Communication and misunderstanding',
      summary:
        'Christopher interprets language literally and finds facial expressions and metaphors confusing. Other characters often fail to understand him, too. Misunderstanding goes both ways.',
      examples: ['Siobhan’s drawings of faces showing emotions.', 'Christopher explaining why he dislikes metaphors.'],
      techniques: ['Literal language', 'Diagrams', 'Reported dialogue'],
      related: ['perspective', 'family'],
    },
    {
      id: 'family',
      name: 'Family relationships and conflict',
      summary:
        'Ed and Judy both love Christopher but struggle to cope, and the family breaks apart under strain. The novel shows parents as flawed humans.',
      examples: ['Judy’s letters explaining why she left.', 'Ed giving Christopher a puppy to begin rebuilding trust.'],
      techniques: ['Embedded documents', 'Dialogue', 'Characterisation'],
      related: ['truth-trust', 'communication'],
    },
    {
      id: 'perspective',
      name: 'Perspective and difference',
      summary:
        'By sharing Christopher’s viewpoint, readers experience the world differently. The novel questions what counts as “normal”.',
      examples: ['Christopher noticing details others ignore.', 'Sensory overload rendered on the page during the train journey.'],
      techniques: ['First-person voice', 'Defamiliarisation', 'Typography'],
      related: ['communication', 'order-uncertainty'],
    },
    {
      id: 'courage-fear',
      name: 'Courage and fear',
      summary:
        'Bravery in the novel is quiet and personal: facing crowds, noise and strangers despite fear.',
      examples: ['Hiding on the luggage rack of the train.', 'Climbing down onto the Underground tracks to rescue Toby, his pet rat.'],
      techniques: ['Fragmented typography', 'Present-moment detail', 'Repetition'],
      related: ['independence', 'perspective'],
    },
  ],
  techniques: [
    {
      name: 'First-person narration and limited perspective',
      definition: 'The story is told by Christopher, who records facts precisely but often misses emotional subtext.',
      example: 'Christopher reports what adults say without always grasping what they feel.',
      effect: 'Creates dramatic irony: readers infer emotions Christopher misses, deepening empathy for him and for his parents.',
      rubricLink: 'Distinctive qualities; perspectives.',
    },
    {
      name: 'Prime-numbered chapters',
      definition: 'Chapters are numbered 2, 3, 5, 7, 11 and so on, instead of 1, 2, 3.',
      example: 'Christopher explains he uses primes because he likes them.',
      effect: 'Signals from the first page that this book is Christopher’s creation and follows his logic. It is form expressing character.',
      rubricLink: 'Text structures; distinctive qualities.',
    },
    {
      name: 'Diagrams, maps and visual elements',
      definition: 'Drawings, maps, symbols and equations included in the text.',
      example: 'Siobhan’s faces showing emotions, maps, signs from the station, maths workings and an appendix with an A-level question.',
      effect: 'Lets readers see how Christopher thinks visually and logically, closing the gap between his mind and ours.',
      rubricLink: 'Stylistic choices.',
    },
    {
      name: 'Digressions',
      definition: 'Chapters or passages that move away from the main plot.',
      example: 'Explanations of maths puzzles (such as the Monty Hall problem), space, his likes and dislikes, and metaphors.',
      effect: 'Mirror Christopher’s associative thinking and show how logic soothes him, especially after stressful events.',
      rubricLink: 'Text structures; perspectives.',
    },
    {
      name: 'Literal, plain language',
      definition: 'Simple, precise vocabulary with little figurative language.',
      example: 'Christopher explains why he finds metaphors confusing and prefers words that mean exactly what they say.',
      effect: 'Gives the narrative honesty and freshness, and makes readers notice how much ordinary language relies on hidden meaning.',
      rubricLink: 'Language features.',
    },
    {
      name: 'Repetitive syntax (polysyndeton)',
      definition: 'Repeated use of “and” to join clauses, and repeated “I said … he said” patterns.',
      example: 'Long sequences of actions or dialogue linked by “and”.',
      effect: 'Shows Christopher recording everything in exact order, without prioritising, which mimics his precise memory.',
      rubricLink: 'Language features.',
    },
    {
      name: 'Typography and sensory overload',
      definition: 'Unusual layout, fonts and dense blocks of text.',
      example: 'During the train journey, signs and words crowd the page.',
      effect: 'Readers experience the overwhelming sensory input Christopher feels, building empathy through form.',
      rubricLink: 'Stylistic choices; perspectives.',
    },
    {
      name: 'Metafiction and the detective frame',
      definition: 'A text that draws attention to itself as a text.',
      example: 'Christopher tells us he is writing a murder-mystery novel at Siobhan’s suggestion, and his father later confiscates the book.',
      effect: 'Makes writing an act of agency. The detective plot exposes the family’s secrets, then gives way to a deeper story.',
      rubricLink: 'Distinctive qualities; text structures.',
    },
  ],
  conceptMap: {
    nodes: [
      { id: 'mod', label: 'Close Study of Literature', type: 'module', detail: 'Deep, informed understanding of one substantial literary text.' },
      { id: 'txt', label: 'The Curious Incident', type: 'text', detail: 'Mark Haddon’s 2003 novel narrated by Christopher Boone.' },
      { id: 'r-dist', label: 'Distinctive qualities', type: 'rubric', detail: 'Voice, prime chapters, diagrams, digressions.' },
      { id: 'r-ideas', label: 'Ideas & perspectives', type: 'rubric', detail: 'Truth, order, independence, difference.' },
      { id: 'r-pers', label: 'Personal response', type: 'rubric', detail: 'Your informed connection with the text.' },
      { id: 'r-sig', label: 'Significance', type: 'rubric', detail: 'Why the novel matters and endures.' },
      { id: 't-truth', label: 'Truth & trust', type: 'theme', detail: 'Lies destroy trust; honesty rebuilds it.' },
      { id: 't-order', label: 'Order & uncertainty', type: 'theme', detail: 'Systems for coping with an unpredictable world.' },
      { id: 't-ind', label: 'Independence', type: 'theme', detail: 'Growth through facing fear.' },
      { id: 't-comm', label: 'Communication', type: 'theme', detail: 'Misunderstanding in both directions.' },
      { id: 'k-voice', label: 'First-person voice', type: 'technique', detail: 'Precise but emotionally limited; dramatic irony.' },
      { id: 'k-prime', label: 'Prime chapters', type: 'technique', detail: 'Form expresses Christopher’s logic.' },
      { id: 'k-diag', label: 'Diagrams', type: 'technique', detail: 'Visual thinking on the page.' },
      { id: 'k-dig', label: 'Digressions', type: 'technique', detail: 'Logic as comfort; associative thinking.' },
      { id: 'p-chris', label: 'Christopher', type: 'person', detail: 'Narrator and detective.' },
      { id: 'p-ed', label: 'Ed', type: 'person', detail: 'Loving father whose lies break trust.' },
      { id: 'p-judy', label: 'Judy', type: 'person', detail: 'Mother whose letters reveal the truth.' },
      { id: 'p-siob', label: 'Siobhan', type: 'person', detail: 'Teacher, guide and interpreter.' },
    ],
    edges: [
      { source: 'mod', target: 'txt', label: 'prescribed text' },
      { source: 'mod', target: 'r-dist' },
      { source: 'mod', target: 'r-ideas' },
      { source: 'mod', target: 'r-pers' },
      { source: 'mod', target: 'r-sig' },
      { source: 'r-dist', target: 'k-voice' },
      { source: 'r-dist', target: 'k-prime' },
      { source: 'r-dist', target: 'k-diag' },
      { source: 'r-dist', target: 'k-dig' },
      { source: 'r-ideas', target: 't-truth' },
      { source: 'r-ideas', target: 't-order' },
      { source: 'r-ideas', target: 't-ind' },
      { source: 'r-ideas', target: 't-comm' },
      { source: 't-truth', target: 'p-ed' },
      { source: 't-truth', target: 'p-judy' },
      { source: 't-order', target: 'k-prime' },
      { source: 't-order', target: 'k-dig' },
      { source: 't-comm', target: 'p-siob' },
      { source: 't-comm', target: 'k-diag' },
      { source: 't-ind', target: 'p-chris' },
      { source: 'k-voice', target: 'p-chris' },
      { source: 'r-pers', target: 'p-chris' },
      { source: 'r-sig', target: 'k-voice' },
    ],
  },
  revision: {
    takeaways: [
      'The novel’s form (prime chapters, diagrams, digressions) expresses Christopher’s way of thinking.',
      'Christopher’s first-person voice is precise but emotionally limited, creating dramatic irony.',
      'Truth and trust are central: Ed’s lies break trust; patience and honesty begin to rebuild it.',
      'The detective plot resolves halfway; the real story is about family and independence.',
      'Order (maths, lists, routines) helps Christopher cope with uncertainty.',
      'The journey to London is a quest that redefines courage.',
      'Parents are shown as loving but flawed, not as heroes or villains.',
      'Avoid diagnosing Christopher; the novel never names a condition.',
      'Significance: it widens readers’ understanding of different perspectives.',
      'Always link idea + form + language.',
    ],
    thirtySecond:
      'Mark Haddon’s The Curious Incident follows fifteen-year-old Christopher Boone as his investigation into a neighbour’s dead dog uncovers his father’s lies and his mother’s secret life. Told in Christopher’s precise first-person voice, with prime-numbered chapters, diagrams and digressions, the novel lets readers experience a distinctive way of seeing the world. It explores truth, trust, order and independence, and its fusion of idea, form and language makes it a distinctive and enduring work.',
    terminology: [
      { term: 'Narrative voice', definition: 'The personality and style of the narrator as expressed through language.' },
      { term: 'Dramatic irony', definition: 'When readers understand more than a character does.' },
      { term: 'Digression', definition: 'A temporary departure from the main plot.' },
      { term: 'Metafiction', definition: 'Fiction that draws attention to its own construction.' },
      { term: 'Bildungsroman', definition: 'A coming-of-age narrative tracing a character’s growth.' },
      { term: 'Defamiliarisation', definition: 'Presenting familiar things in an unfamiliar way so readers see them freshly.' },
      { term: 'Polysyndeton', definition: 'Repeated use of conjunctions such as “and”.' },
      { term: 'Distinctive qualities', definition: 'The features that make a text unique in voice, structure, style and ideas.' },
    ],
    misconceptions: [
      {
        myth: 'The novel is a book about a medical condition.',
        truth: 'Christopher’s condition is never named. Haddon has said the book is about difference. Analyse representation, not diagnosis.',
      },
      {
        myth: 'Christopher is an unreliable narrator who lies.',
        truth: 'He reports facts truthfully; his limitation is in interpreting emotions. That is what creates dramatic irony.',
      },
      {
        myth: 'Ed is simply the villain.',
        truth: 'Ed is devoted to Christopher; his lies come from hurt, anger and a desire to protect. Haddon makes him sympathetic and flawed.',
      },
      {
        myth: 'Diagrams are just decoration.',
        truth: 'They are central to meaning: they show Christopher’s visual thinking and invite readers into his perspective.',
      },
    ],
    examGuide: [
      'Identify which rubric aspect the question targets: ideas, form, language, significance or personal response.',
      'Thesis: connect an idea to how form and language express it.',
      'Use evidence from across the novel: the beginning, the letters, the journey and the ending.',
      'Discuss at least one formal feature per paragraph (prime chapters, diagrams, digressions, voice).',
      'Include a confident, informed personal response in your conclusion or throughout.',
    ],
  },
  sources: [
    { label: 'NESA — English Standard Stage 6 Syllabus (2017)', url: NESA_SYLLABUS_URL, note: 'Official Module B descriptor.' },
    { label: 'Mark Haddon — official website', url: 'https://www.markhaddon.com/', note: 'Author information.' },
    { label: 'Project Gutenberg — The Memoirs of Sherlock Holmes (includes “Silver Blaze”)', url: 'https://www.gutenberg.org/ebooks/834', note: 'Source of the novel’s title phrase.' },
    { label: 'Primary source — the novel (Vintage edition, 2004)', url: 'https://www.markhaddon.com/', note: 'Gather your own quotations directly from the text.' },
  ],
};

export const curiousCharacters: CharacterProfile[] = [
  {
    id: 'christopher',
    name: 'Christopher Boone',
    role: 'Narrator and detective',
    traits: ['Logical', 'Honest', 'Observant', 'Determined', 'Brave'],
    arc: 'From a boy dependent on routines and his father, to someone who travels to London alone, sits his A-level and believes he can do anything.',
    keyMoment: 'Deciding to leave home after Ed’s confession.',
    rubric: 'Distinctive perspective; independence.',
  },
  {
    id: 'ed',
    name: 'Ed Boone',
    role: 'Father',
    traits: ['Devoted', 'Patient', 'Hot-tempered', 'Deceptive', 'Remorseful'],
    arc: 'From protective carer and liar, to a father who confesses and patiently earns back trust.',
    keyMoment: 'Confessing he killed Wellington.',
    rubric: 'Truth and trust; flawed humanity.',
  },
  {
    id: 'judy',
    name: 'Judy Boone',
    role: 'Mother',
    traits: ['Loving', 'Impulsive', 'Overwhelmed', 'Guilty'],
    arc: 'Absent and believed dead, she is revealed through letters, then takes Christopher back to Swindon and puts his needs first.',
    keyMoment: 'Her letters, read in Ed’s room.',
    rubric: 'Family conflict; deception.',
  },
  {
    id: 'siobhan',
    name: 'Siobhan',
    role: 'Teacher',
    traits: ['Patient', 'Encouraging', 'Clear', 'Trustworthy'],
    arc: 'A constant, stable presence who helps Christopher interpret the world and encourages his writing.',
    keyMoment: 'Advising him on how to write his book.',
    rubric: 'Communication; trust.',
  },
];

export const curiousRelationships: Relationship[] = [
  { from: 'christopher', to: 'ed', label: 'Trust → betrayal → rebuilding', detail: 'Their close bond is broken by Ed’s lies, then slowly rebuilt through honesty, patience and a puppy.' },
  { from: 'christopher', to: 'judy', label: 'Absence → reunion', detail: 'Believed dead, Judy re-enters his life through letters. The reunion is loving but difficult.' },
  { from: 'christopher', to: 'siobhan', label: 'Guide & interpreter', detail: 'Siobhan explains social rules and encourages his book. She is the adult he trusts most consistently.' },
  { from: 'ed', to: 'judy', label: 'Marriage breakdown', detail: 'The strain of family life led to conflict and Judy leaving; their bitterness shapes Ed’s lie.' },
  { from: 'judy', to: 'shears', label: 'Affair', detail: 'Judy leaves with Roger Shears; the relationship deteriorates once Christopher arrives in London.' },
  { from: 'ed', to: 'eileen', label: 'Friendship → conflict', detail: 'Ed grew close to Eileen Shears; an argument with her led to Wellington’s death.' },
];

export const narrativeFeatures: NarrativeFeature[] = [
  {
    id: 'voice',
    name: 'First-person voice',
    what: 'Christopher narrates as the author of his own book.',
    example: 'He states facts precisely and explains his reasoning.',
    effect: 'Readers are inside his logic, but must infer emotional subtext themselves.',
  },
  {
    id: 'primes',
    name: 'Prime-numbered chapters',
    what: 'Chapters follow prime numbers.',
    example: 'The first chapter is numbered 2.',
    effect: 'The structure itself expresses Christopher’s values of logic and order.',
  },
  {
    id: 'alternation',
    name: 'Alternating plot and digression',
    what: 'Story chapters interleave with chapters on maths, science and memories.',
    example: 'A maths puzzle follows a stressful event.',
    effect: 'Controls pace and shows how Christopher calms himself.',
  },
  {
    id: 'visual',
    name: 'Visual and mathematical elements',
    what: 'Diagrams, maps, faces, equations and an appendix.',
    example: 'The appendix proves a maths question from his A-level.',
    effect: 'Invites readers to think the way Christopher does.',
  },
  {
    id: 'documents',
    name: 'Embedded documents',
    what: 'Judy’s letters reproduced in full.',
    example: 'The letters are found in a shirt box in Ed’s room.',
    effect: 'A second voice enters the novel; truth arrives through text.',
  },
  {
    id: 'typography',
    name: 'Typographical overload',
    what: 'Dense, crowded text during the journey.',
    example: 'Station signs and advertisements fill the page.',
    effect: 'Form recreates sensory overwhelm.',
  },
];

export const plotArc = [
  { stage: 'Mystery', chapters: 'Opening', detail: 'Wellington is found dead. Christopher begins investigating and writing his book.' },
  { stage: 'Investigation', chapters: 'Early chapters', detail: 'He questions neighbours; Mrs Alexander reveals Judy’s affair with Mr Shears.' },
  { stage: 'Discovery', chapters: 'Midpoint', detail: 'He finds Judy’s letters: his mother is alive.' },
  { stage: 'Confession & crisis', chapters: 'Midpoint', detail: 'Ed admits he killed Wellington. Christopher no longer feels safe.' },
  { stage: 'Quest', chapters: 'Second half', detail: 'He travels alone to London, overwhelmed but determined.' },
  { stage: 'Resolution', chapters: 'Ending', detail: 'He returns to Swindon, sits his A-level and begins rebuilding trust with Ed.' },
];

export const iflStrands: IflStrand[] = [
  {
    id: 'truth',
    label: 'Truth and trust',
    idea: 'Honesty underpins trust; even loving lies can be devastating.',
    form: 'The detective structure: solving the dog mystery exposes a domestic truth. Judy’s letters are embedded as documents.',
    language: 'Christopher’s literal, factual statements contrast with adults’ evasions and euphemisms.',
    reader: 'Dramatic irony lets us see the adults’ lies as both protective and damaging.',
    significance: 'The novel complicates simple moral judgements and asks what honesty adults owe children.',
    links: {
      ideaForm: 'The mystery form turns the search for truth into the novel’s engine.',
      formLanguage: 'Documents and plain statements present “truth” as text that can be hidden or found.',
      toReader: 'We understand more than Christopher, so we feel both his betrayal and Ed’s desperation.',
      toSignificance: 'By refusing easy villains, the novel offers a mature, enduring view of family honesty.',
    },
  },
  {
    id: 'order',
    label: 'Order and uncertainty',
    idea: 'People create order to manage an unpredictable world.',
    form: 'Prime-numbered chapters, lists, timetables and maths digressions.',
    language: 'Precise numbers, times and logical connectives (“because”, “therefore”).',
    reader: 'We see order as a coping strategy and a source of meaning, and feel the panic when it collapses.',
    significance: 'It shows that logical and emotional ways of knowing both have value.',
    links: {
      ideaForm: 'The book’s architecture literally is ordered, mirroring Christopher’s need for structure.',
      formLanguage: 'Lists and precise wording reinforce structure at sentence level.',
      toReader: 'When the order breaks (crowded typography on the journey), readers experience the chaos too.',
      toSignificance: 'The novel makes structure itself meaningful, which is a distinctive literary achievement.',
    },
  },
  {
    id: 'independence',
    label: 'Independence and growth',
    idea: 'Growth comes from facing fears and acting alone.',
    form: 'A quest structure: the journey to London with maps and signs.',
    language: 'Step-by-step self-instructions, counting and repetition as self-soothing.',
    reader: 'We measure bravery on Christopher’s terms; ordinary tasks become heroic.',
    significance: 'It redefines courage and the coming-of-age story beyond conventional heroics.',
    links: {
      ideaForm: 'The quest form externalises inner growth as a physical journey.',
      formLanguage: 'Instructions and repetition show him building strategies in real time.',
      toReader: 'We cheer small victories, re-evaluating what counts as achievement.',
      toSignificance: 'Its affirming final line about being able to do anything resonates with diverse readers.',
    },
  },
  {
    id: 'perspective',
    label: 'Perspective and difference',
    idea: 'There is no single “normal” way to see the world.',
    form: 'Sustained first-person narration with diagrams and digressions.',
    language: 'Plain, literal and intensely detailed noticing.',
    reader: 'Defamiliarisation: we see ordinary things freshly and question our assumptions.',
    significance: 'It builds empathy and has helped widen literary representation of different perspectives.',
    links: {
      ideaForm: 'Staying inside one voice for the whole novel makes difference the reader’s lived experience.',
      formLanguage: 'Diagrams and literal language work together to show how Christopher processes the world.',
      toReader: 'Readers move from seeing Christopher as strange to understanding his logic.',
      toSignificance: 'This shift in understanding is a key reason the novel endures.',
    },
  },
];
