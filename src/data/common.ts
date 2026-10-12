import type { CharacterProfile, ModuleData, Paradox, Relationship, Scene } from './types';
import { NESA_SYLLABUS_URL } from './sources';

export const common: ModuleData = {
  id: 'common',
  code: 'Common Module',
  title: 'Texts and Human Experiences',
  shortTitle: 'Common Module',
  textShort: 'Billy Elliot (2000), dir. Stephen Daldry',
  purpose:
    'To understand how texts represent individual and collective human experiences, and the qualities, emotions and contradictions that drive people.',
  summary:
    'The Common Module is shared by English Standard and English Advanced. You study how one prescribed text, Billy Elliot, represents what it means to be human: our emotions, motivations, relationships and the ways we behave under pressure. You also respond to unseen short texts in the exam. The focus is always on how the composer uses form and technique to shape our understanding of human experience.',
  inquiryQuestions: [
    'How does Billy Elliot show the tension between an individual’s desires and a community’s expectations?',
    'Why do characters act in ways that seem to contradict their own values?',
    'How do grief and love shape the choices the Elliot family makes?',
    'How do Daldry’s film techniques shape our emotional response to human experiences?',
    'How does the film invite us to challenge assumptions about class and masculinity?',
  ],
  nesaExpects: [
    'Explain how a text represents individual and collective human experiences.',
    'Analyse the human qualities and emotions that arise from those experiences.',
    'Identify anomalies, paradoxes and inconsistencies in behaviour and motivation, and explain what they reveal.',
    'Analyse how form, structure and film techniques shape meaning.',
    'Make informed, personal judgements supported by precise textual evidence.',
  ],
  examInfo:
    'HSC Paper 1. Section I: short-answer questions on unseen texts (20 marks). Section II: an extended response on your prescribed text, Billy Elliot (20 marks).',
  descriptor: {
    intro: [
      'Students deepen their understanding of how texts represent individual and collective human experiences, and the human qualities and emotions associated with them.',
      'Texts can give insight into the anomalies, paradoxes and inconsistencies in human behaviour and motivations, inviting the responder to see the world differently, challenge assumptions, ignite new ideas or reflect personally.',
      'Students consider the role of storytelling and make informed judgements about how context, purpose, structure, stylistic and grammatical features, and form shape meaning.',
    ],
    phrases: [
      {
        id: 'cm-experiences',
        phrase: 'individual and collective human experiences',
        meaning:
          'Individual experiences belong to one person; collective experiences are shared by a group, community or society.',
        textLink:
          'Billy’s private discovery of dance unfolds inside the collective experience of a mining community on strike. Daldry repeatedly sets the two side by side, so every personal choice carries public consequences.',
      },
      {
        id: 'cm-qualities',
        phrase: 'human qualities and emotions',
        meaning:
          'Qualities are traits such as courage, pride or compassion. Emotions are feelings such as grief, anger, shame or joy.',
        textLink:
          'Billy’s grief for his mother and his joy in dancing; Jackie’s pride, humiliation and love; Mrs Wilkinson’s blunt but genuine compassion.',
      },
      {
        id: 'cm-paradox',
        phrase: 'anomalies, paradoxes and inconsistencies in human behaviour and motivations',
        meaning:
          'Anomaly: behaviour that breaks the norms of a context. Paradox: behaviour that seems self-contradictory but reveals a truth. Inconsistency: behaviour that changes or contradicts earlier actions.',
        textLink:
          'Billy is an anomaly in his town. Jackie’s decision to cross the picket line is a paradox: he betrays his union out of loyalty to his son. Tony’s hostility turning to support is an inconsistency that shows growth.',
      },
      {
        id: 'cm-responder',
        phrase: 'see the world differently, challenge assumptions, ignite new ideas or reflect personally',
        meaning: 'Texts can change how an audience thinks or feels about people and society.',
        textLink:
          'The film challenges the assumption that ballet is only “for girls” or for the wealthy, and asks viewers to reflect on how communities police masculinity.',
      },
      {
        id: 'cm-storytelling',
        phrase: 'the role of storytelling',
        meaning: 'Stories preserve and pass on the experiences of particular lives and cultures.',
        textLink:
          'Released in 2000, the film looks back on 1984–85 and preserves the memory of a working-class community at a turning point. Within the story, his mother’s letter is itself a small act of storytelling that keeps her voice alive.',
      },
      {
        id: 'cm-form',
        phrase: 'context, purpose, structure, stylistic and grammatical features, and form shape meaning',
        meaning:
          'Meaning comes from how a text is made, not only from what happens. For film, this means camera, editing, sound, mise-en-scène and narrative structure.',
        textLink:
          'Cross-cutting the ballet class with clashes between police and pickets links personal and collective struggle. Popular songs voice emotions that Billy cannot put into words.',
      },
    ],
    sourceUrl: NESA_SYLLABUS_URL,
    howTextAddresses:
      'Billy Elliot places a coming-of-age story against a collective political struggle. It explores grief, masculinity, family loyalty and self-expression, and its characters constantly act against their stated values. That makes it ideal for discussing paradoxes and inconsistencies in human behaviour.',
  },
  texts: [
    {
      title: 'Billy Elliot',
      creator: 'Directed by Stephen Daldry; screenplay by Lee Hall',
      year: '2000',
      form: 'Feature film (British drama)',
      summary:
        'In a County Durham mining town during the 1984–85 miners’ strike, eleven-year-old Billy Elliot is sent to boxing but drifts into Mrs Wilkinson’s ballet class. His widowed father Jackie and older brother Tony are on strike and clashing with police, so Billy trains in secret for an audition at the Royal Ballet School. When his family finds out, they react with anger. Then Jackie watches Billy dance and decides to break the strike to pay for the audition. Billy is accepted as the strike collapses, and the film ends years later with the adult Billy dancing on a London stage while his father and brother watch.',
      memoryHook: 'One boy finds his voice in dance as a whole community loses its fight.',
      context: [
        {
          label: '1984–85 miners’ strike',
          detail:
            'A year-long national strike began in March 1984 over planned pit closures. The National Union of Mineworkers opposed the National Coal Board and Margaret Thatcher’s Conservative government. Miners returned to work in March 1985 without winning their demands.',
        },
        {
          label: 'Picket lines and policing',
          detail:
            'Striking miners formed picket lines to stop work continuing. There were often confrontations with large numbers of police, which the film shows directly. Miners who returned to work were called “scabs”, so crossing the line was a serious betrayal.',
        },
        {
          label: 'Working-class masculinity',
          detail:
            'In coal-mining communities, manhood was tied to physical labour, toughness and solidarity. Boxing fits that code; ballet threatens it.',
        },
        {
          label: 'Class and the arts',
          detail:
            'Ballet was associated with wealth and elite institutions. Billy’s audition in London exposes the class gap between his family and the Royal Ballet School.',
        },
        {
          label: 'Looking back from 2000',
          detail:
            'The film was made fifteen years after the strike. That retrospective view lets it mourn a lost way of life while celebrating one boy’s escape.',
        },
      ],
      people: [
        {
          name: 'Billy Elliot',
          role: 'Protagonist, aged eleven (Jamie Bell)',
          description: 'A grieving, stubborn and sensitive boy who discovers that dance expresses what he cannot say.',
        },
        {
          name: 'Jackie Elliot',
          role: 'Billy’s widowed father, a striking miner (Gary Lewis)',
          description: 'Proud and traditional, he moves from fierce opposition to sacrifice for his son.',
        },
        {
          name: 'Tony Elliot',
          role: 'Billy’s older brother, a militant striker (Jamie Draven)',
          description: 'Angry and committed to the union; his hostility towards Billy slowly turns to support.',
        },
        {
          name: 'Mrs Wilkinson',
          role: 'Ballet teacher (Julie Walters)',
          description: 'Sardonic, chain-smoking and disappointed by her own life, she recognises Billy’s talent and pushes him.',
        },
        {
          name: 'Michael',
          role: 'Billy’s best friend (Stuart Wells)',
          description: 'He explores dressing in women’s clothes, and the film implies he is gay. His difference parallels Billy’s.',
        },
        {
          name: 'Grandma',
          role: 'Billy’s grandmother (Jean Heywood)',
          description: 'Frail and forgetful; she once dreamed of dancing, which links Billy’s passion to the family’s past.',
        },
      ],
    },
  ],
  themes: [
    {
      id: 'individual-society',
      name: 'Individual vs societal expectations',
      summary:
        'Billy’s desire to dance collides with his community’s rules about what boys should do. The film asks whether self-fulfilment is worth the cost of disappointing the people you love.',
      examples: [
        'The boxing hall is shared with the ballet class: two versions of masculinity in one space.',
        'Jackie’s fury when he discovers Billy has been spending his boxing money on ballet.',
      ],
      techniques: ['Juxtaposition', 'Symbolism (boxing gloves vs ballet shoes)', 'Mise-en-scène'],
      related: ['masculinity', 'class-solidarity', 'identity-expression'],
    },
    {
      id: 'masculinity',
      name: 'Masculinity and gender roles',
      summary:
        'The film shows a rigid code of manhood based on toughness, labour and emotional restraint, and slowly exposes its limits. Billy and Michael both challenge it in different ways.',
      examples: [
        'Billy insists that liking ballet does not define his sexuality, while accepting Michael’s difference without judgement.',
        'Jackie’s tears on the bus after he crosses the picket line break his own code of restraint.',
      ],
      techniques: ['Characterisation', 'Dialogue and dialect', 'Contrast'],
      related: ['individual-society', 'family-grief', 'acceptance'],
    },
    {
      id: 'family-grief',
      name: 'Family, grief and conflict',
      summary:
        'The Elliots are held together and torn apart by the absence of Billy’s mother. Unspoken grief turns into anger, but love ultimately drives each family member’s sacrifice.',
      examples: [
        'Billy reads his mother’s letter to Mrs Wilkinson, showing how much he relies on her memory.',
        'At Christmas, Jackie smashes the mother’s piano for firewood: poverty forces the family to destroy a symbol of her.',
      ],
      techniques: ['Symbolism (piano, letter)', 'Close-ups', 'Silence and restraint'],
      related: ['masculinity', 'resilience', 'change-loss'],
    },
    {
      id: 'class-solidarity',
      name: 'Class, community and solidarity',
      summary:
        'Solidarity gives the miners strength, but it also demands conformity. The community that polices Billy eventually helps fund his future.',
      examples: [
        'Riot police and picket lines are a constant backdrop to Billy’s lessons.',
        'Jackie pawns his late wife’s jewellery, and others in the community help pay for the London trip.',
      ],
      techniques: ['Cross-cutting', 'Long shots of the terraced streets', 'Soundtrack'],
      related: ['individual-society', 'change-loss'],
    },
    {
      id: 'identity-expression',
      name: 'Identity and self-expression',
      summary:
        'Dance becomes Billy’s language for grief, anger and joy, letting him form an identity beyond the one his town gives him.',
      examples: [
        'In the “A Town Called Malice” sequence, Billy’s furious dancing through the backstreets turns rage into movement.',
        'At the audition, Billy describes dancing as feeling like “electricity”.',
      ],
      techniques: ['Choreography as expression', 'Non-diegetic music', 'Tracking shots'],
      related: ['individual-society', 'resilience'],
    },
    {
      id: 'resilience',
      name: 'Adversity, resilience and personal growth',
      summary:
        'Billy, Jackie and Tony all grow through hardship. Resilience appears as stubborn persistence and as the courage to change your mind.',
      examples: [
        'Billy keeps practising in secret despite his father’s ban.',
        'Jackie’s journey from opposition to sacrifice is the film’s central change of heart.',
      ],
      techniques: ['Character arc', 'Three-act structure', 'Flash-forward ending'],
      related: ['family-grief', 'identity-expression', 'change-loss'],
    },
    {
      id: 'change-loss',
      name: 'Change and loss',
      summary:
        'The film is about endings and beginnings. As the mining community loses its fight and its way of life, Billy gains a future elsewhere.',
      examples: [
        'The defeated miners go back underground in the pit cage while Billy heads to London.',
        'The final scene jumps years ahead to Billy’s adult performance.',
      ],
      techniques: ['Parallel editing', 'Symbolism (descent vs flight)', 'Structure'],
      related: ['class-solidarity', 'resilience', 'family-grief'],
    },
    {
      id: 'acceptance',
      name: 'Acceptance and friendship',
      summary:
        'Through Michael and Mrs Wilkinson, the film shows that acceptance outside the family can sustain a person until the family catches up.',
      examples: [
        'Billy accepts Michael’s cross-dressing with curiosity rather than judgement.',
        'The adult Michael is in the audience for Billy’s final performance.',
      ],
      techniques: ['Characterisation', 'Humour', 'Framing'],
      related: ['masculinity', 'identity-expression'],
    },
  ],
  techniques: [
    {
      name: 'Cross-cutting (parallel editing)',
      definition: 'Cutting back and forth between two scenes happening at around the same time.',
      example:
        'Daldry intercuts ballet lessons and Billy’s life with scenes of pickets and riot police throughout the film.',
      effect:
        'It links the personal and the political. Billy’s fight for freedom of expression mirrors his community’s fight for survival, yet the two struggles end differently.',
      rubricLink: 'Individual and collective human experiences',
    },
    {
      name: 'Soundtrack (non-diegetic music)',
      definition: 'Music the characters cannot hear, added to shape the audience’s mood.',
      example:
        'Glam rock and punk songs (T. Rex, The Jam, The Clash) play over moments of energy and conflict. Tchaikovsky’s Swan Lake marks the ending.',
      effect:
        'Rebellious, working-class popular music voices Billy’s emotions and roots him in his era. The move to classical music signals his arrival in a new world.',
      rubricLink: 'Human emotions and motivations',
    },
    {
      name: 'Dance as expression (choreography)',
      definition: 'Movement used to communicate a character’s inner state.',
      example:
        'Billy’s angry dance through the backstreets ends against a corrugated iron wall. His defiant dance for his father in the hall at Christmas works the same way.',
      effect:
        'Dance replaces dialogue for a boy raised not to talk about feelings. The wall shows the barriers boxing him in.',
      rubricLink: 'Human qualities and emotions',
    },
    {
      name: 'Mise-en-scène and setting',
      definition: 'Everything placed in the frame: setting, colour, costume, lighting and props.',
      example:
        'Grey terraced streets, the colliery and the cramped family home contrast with the open space of the hall and the bright London stage.',
      effect:
        'The drab setting represents economic hardship and narrow expectations. Open spaces suggest possibility.',
      rubricLink: 'Context shapes meaning',
    },
    {
      name: 'Symbolism and motif',
      definition: 'Objects or images that carry meaning beyond themselves and may recur.',
      example:
        'Boxing gloves vs ballet shoes; the mother’s piano and letter; the pit cage descending vs Billy’s leaps.',
      effect:
        'Symbols compress big ideas (masculinity, grief, class) into concrete images an audience remembers.',
      rubricLink: 'Representation of human experiences',
    },
    {
      name: 'Camera angles, framing and movement',
      definition: 'Where the camera is placed and how it moves to shape the viewer’s relationship with characters.',
      example:
        'The film opens with Billy bouncing on his bed, airborne in the frame, and returns to the image of flight with his leap on stage at the end.',
      effect:
        'Images of Billy in the air suggest freedom and escape from a grounded, earthbound mining world.',
      rubricLink: 'Structure and form shape meaning',
    },
    {
      name: 'Dialogue and dialect',
      definition: 'What characters say and the regional variety of English they use.',
      example:
        'North-East English dialect and frequent swearing; Billy’s short, halting answer at the audition.',
      effect:
        'Authentic dialect grounds the film in working-class identity. Billy’s struggle to explain dance shows how limited words can be compared with movement.',
      rubricLink: 'Language shapes representations',
    },
    {
      name: 'Circular structure and flash-forward',
      definition: 'An ending that echoes the opening, and a jump forward in time.',
      example:
        'The epilogue jumps years ahead to adult Billy performing in London, watched by Jackie, Tony and Michael.',
      effect:
        'It confirms Billy’s transformation and shows that the family’s sacrifice was worthwhile. It also implies how far the community has changed.',
      rubricLink: 'Storytelling and personal growth',
    },
  ],
  conceptMap: {
    nodes: [
      { id: 'mod', label: 'Texts and Human Experiences', type: 'module', detail: 'The Common Module: how texts represent individual and collective human experiences.' },
      { id: 'txt', label: 'Billy Elliot', type: 'text', detail: 'Stephen Daldry’s 2000 film, set during the 1984–85 miners’ strike.' },
      { id: 'r-ind', label: 'Individual experience', type: 'rubric', detail: 'Billy’s discovery of dance, his grief and his ambition.' },
      { id: 'r-col', label: 'Collective experience', type: 'rubric', detail: 'The mining community’s strike, solidarity and defeat.' },
      { id: 'r-par', label: 'Paradoxes & inconsistencies', type: 'rubric', detail: 'Jackie breaks the strike out of loyalty; Tony fights for freedom but tries to control Billy.' },
      { id: 'r-emo', label: 'Qualities & emotions', type: 'rubric', detail: 'Grief, pride, anger, joy, courage and compassion.' },
      { id: 't-ind', label: 'Individual vs society', type: 'theme', detail: 'Billy’s desire to dance versus the town’s expectations of boys.' },
      { id: 't-mas', label: 'Masculinity', type: 'theme', detail: 'A rigid code of toughness challenged by Billy and Michael.' },
      { id: 't-fam', label: 'Family & grief', type: 'theme', detail: 'The absent mother shapes every family relationship.' },
      { id: 't-cls', label: 'Class & solidarity', type: 'theme', detail: 'Union loyalty gives strength but demands conformity.' },
      { id: 't-res', label: 'Resilience & growth', type: 'theme', detail: 'Billy persists; Jackie and Tony change their minds.' },
      { id: 'k-cut', label: 'Cross-cutting', type: 'technique', detail: 'Links ballet lessons with the strike, connecting personal and collective struggle.' },
      { id: 'k-mus', label: 'Soundtrack', type: 'technique', detail: 'Popular songs voice Billy’s emotions; Swan Lake marks his arrival.' },
      { id: 'k-dan', label: 'Dance as expression', type: 'technique', detail: 'Movement replaces words for emotion.' },
      { id: 'k-sym', label: 'Symbolism', type: 'technique', detail: 'Gloves vs ballet shoes, the piano, the letter, the pit cage.' },
      { id: 'p-billy', label: 'Billy', type: 'person', detail: 'An anomaly in his community whose growth drives the film.' },
      { id: 'p-jackie', label: 'Jackie', type: 'person', detail: 'His change of heart is the film’s emotional turning point.' },
    ],
    edges: [
      { source: 'mod', target: 'txt', label: 'prescribed text' },
      { source: 'mod', target: 'r-ind' },
      { source: 'mod', target: 'r-col' },
      { source: 'mod', target: 'r-par' },
      { source: 'mod', target: 'r-emo' },
      { source: 'r-ind', target: 't-ind' },
      { source: 'r-ind', target: 'p-billy' },
      { source: 'r-col', target: 't-cls' },
      { source: 'r-par', target: 'p-jackie' },
      { source: 'r-emo', target: 't-fam' },
      { source: 't-ind', target: 't-mas' },
      { source: 't-ind', target: 'k-sym' },
      { source: 't-cls', target: 'k-cut' },
      { source: 't-fam', target: 'k-sym' },
      { source: 't-res', target: 'p-jackie' },
      { source: 't-res', target: 'p-billy' },
      { source: 'p-billy', target: 'k-dan' },
      { source: 'k-dan', target: 'k-mus' },
      { source: 'txt', target: 'k-cut' },
      { source: 't-mas', target: 'p-jackie' },
    ],
  },
  revision: {
    takeaways: [
      'Billy’s individual journey is always set against the collective experience of the strike.',
      'Dance is Billy’s language for emotions he cannot speak, especially grief and anger.',
      'Jackie’s choice to cross the picket line is the key paradox: betrayal motivated by love.',
      'The film challenges narrow ideas of working-class masculinity through Billy and Michael.',
      'The absent mother drives the family’s grief, conflict and eventual reconciliation.',
      'Cross-cutting links personal and political struggle; the two outcomes contrast.',
      'Soundtrack choices voice emotion and place the film in its 1980s context.',
      'The ending contrasts the miners’ return underground with Billy’s flight.',
      'Human growth comes from courage, sacrifice and changing your mind.',
      'Always connect techniques to what they reveal about human experience.',
    ],
    thirtySecond:
      'Billy Elliot shows a boy who finds his identity in ballet while his mining community loses the 1984–85 strike. Daldry uses cross-cutting, music, dance and symbolism to show how individual and collective experiences collide. Its characters are full of contradictions, especially Jackie, who betrays his union out of love for his son. The film suggests that human growth requires courage, sacrifice and the willingness to challenge expectations.',
    terminology: [
      { term: 'Human experience', definition: 'Events, feelings and relationships that shape people’s lives, individually or collectively.' },
      { term: 'Anomaly', definition: 'Behaviour that deviates from what is normal or expected in a context.' },
      { term: 'Paradox', definition: 'A seemingly contradictory behaviour or idea that reveals a deeper truth.' },
      { term: 'Inconsistency', definition: 'A change in behaviour, or a contradiction between actions and stated values.' },
      { term: 'Motivation', definition: 'The reason behind a person’s actions.' },
      { term: 'Responder', definition: 'The person who reads, views or listens to a text.' },
      { term: 'Diegetic sound', definition: 'Sound that exists in the world of the film, which characters can hear.' },
      { term: 'Mise-en-scène', definition: 'Everything visible in the frame: setting, props, costume, lighting and actors’ positions.' },
    ],
    misconceptions: [
      {
        myth: 'The Common Module is mainly about the miners’ strike.',
        truth: 'Context matters, but the focus is human experience. Use the strike to explain characters’ emotions and motivations, not as a history lesson.',
      },
      {
        myth: 'Jackie is simply the villain who changes at the end.',
        truth: 'Jackie’s opposition comes from grief, pride and fear for his family. That makes his change believable and paradoxical, not sudden.',
      },
      {
        myth: 'Listing film techniques earns marks.',
        truth: 'Marks come from explaining how each technique shapes meaning about human experience.',
      },
      {
        myth: 'The film just says “follow your dreams”.',
        truth: 'It also shows the cost of Billy’s dream: his family’s sacrifice and the loss of a community’s way of life.',
      },
    ],
    examGuide: [
      'Unpack the question’s key words (e.g. “resilience”, “paradox”) and use them in your thesis.',
      'Build each paragraph around a human experience, not a plot event.',
      'Use 2–3 detailed scenes per paragraph: technique → example → effect → human insight.',
      'Explicitly discuss individual AND collective experiences.',
      'For Section I unseen texts, link techniques to the human experience named in the question.',
    ],
  },
  sources: [
    { label: 'NESA — English Standard Stage 6 Syllabus (2017)', url: NESA_SYLLABUS_URL, note: 'Official Common Module descriptor.' },
    {
      label: 'BFI Sight and Sound — “It was dance as action rather than as aesthetics”: Stephen Daldry on Billy Elliot',
      url: 'https://www.bfi.org.uk/sight-and-sound/interviews/it-was-dance-action-rather-than-aesthetics-stephen-daldry-billy-elliot',
      note: 'Director interview (originally October 2000).',
    },
    {
      label: 'Sheffield City Archives — Miners’ strike research guide',
      url: 'https://www.sheffield.gov.uk/libraries-archives/access-archives-local-studies-library/research-guides/miners-strike',
      note: 'Background on the 1984–85 strike.',
    },
  ],
};

export const billyScenes: Scene[] = [
  {
    id: 'opening',
    title: 'Opening: jumping on the bed',
    moment: 'To T. Rex’s “Cosmic Dancer”, Billy bounces on his bed, repeatedly caught in mid-air.',
    technique: 'Non-diegetic music; framing of Billy airborne.',
    meaning: 'Before he knows ballet exists, Billy already expresses joy through movement. Flight becomes a motif for freedom.',
    rubric: 'Individual human experience; foreshadows personal growth.',
  },
  {
    id: 'hall',
    title: 'From boxing ring to ballet barre',
    moment: 'Boxing and ballet share the same hall. Billy lingers after boxing and is drawn into Mrs Wilkinson’s class.',
    technique: 'Juxtaposition within one setting; costume contrast (boxing gloves vs ballet shoes).',
    meaning: 'Two models of masculinity sit side by side. Billy’s choice is framed as a crossing of social boundaries.',
    rubric: 'Individual vs societal expectations; anomaly.',
  },
  {
    id: 'letter',
    title: 'The mother’s letter',
    moment: 'Billy shares the letter his mother wrote for him to read when he was older.',
    technique: 'Close-ups; quiet, restrained performance; the letter as symbol.',
    meaning: 'Billy’s grief is private and unspoken at home. Storytelling (the letter) keeps his mother present and validates his sense of self.',
    rubric: 'Human emotions (grief, love); role of storytelling.',
  },
  {
    id: 'malice',
    title: '“A Town Called Malice”',
    moment: 'After family conflict over his audition, Billy dances furiously through the backstreets until he hits a corrugated iron wall.',
    technique: 'Choreography as expression; The Jam soundtrack; tracking shots; the wall as symbol.',
    meaning: 'Rage and frustration become movement. The wall represents the social and economic barriers trapping him.',
    rubric: 'Human emotions and motivations; adversity.',
  },
  {
    id: 'christmas',
    title: 'Christmas: the piano and the challenge',
    moment: 'Jackie breaks up the mother’s piano for firewood. Later, Billy dances defiantly in front of his father in the hall.',
    technique: 'Symbolism (the piano); performance as confrontation; reaction shots of Jackie.',
    meaning: 'Poverty forces the family to destroy a symbol of their loss. Billy’s dance forces Jackie to see who his son is.',
    rubric: 'Family conflict; turning point in Jackie’s motivation.',
  },
  {
    id: 'picket',
    title: 'Jackie crosses the picket line',
    moment: 'Jackie boards the bus taking strikebreakers to work. Tony sees him, and Jackie breaks down in tears.',
    technique: 'Close-up on Jackie’s face; contrast between the jeering crowd and the brothers’ private anguish.',
    meaning: 'Jackie’s love for Billy overrides his lifelong loyalty to the union. A man who hides emotion finally shows it.',
    rubric: 'Paradox in human behaviour; collective vs individual loyalty.',
  },
  {
    id: 'audition',
    title: 'The Royal Ballet School audition',
    moment: 'Out of place in London, Billy lashes out at another boy, then struggles to explain what dancing feels like, describing it as “electricity”.',
    technique: 'Contrast in setting and class; framing Jackie as small in grand interiors; plain dialogue.',
    meaning: 'Class difference is exposed. Billy’s simple metaphor shows that dance is felt more than explained.',
    rubric: 'Inconsistency (aggression and grace); identity.',
  },
  {
    id: 'ending',
    title: 'Ending: descent and flight',
    moment: 'The defeated miners return underground in the pit cage while Billy leaves. Years later, the adult Billy leaps on stage in Swan Lake.',
    technique: 'Parallel editing; vertical symbolism (descent vs leap); flash-forward; Tchaikovsky score.',
    meaning: 'Collective defeat and individual triumph exist together. Billy’s success is built on his family’s sacrifice.',
    rubric: 'Individual and collective experiences; personal growth.',
  },
];

export const billyCharacters: CharacterProfile[] = [
  {
    id: 'billy',
    name: 'Billy',
    role: 'Protagonist',
    traits: ['Grieving', 'Stubborn', 'Sensitive', 'Defiant', 'Caring towards Grandma'],
    arc: 'Moves from a confused, angry boy hiding his passion to a young man confident enough to claim his own identity.',
    keyMoment: 'Dancing defiantly in front of Jackie at Christmas.',
    rubric: 'Individual experience; identity; resilience.',
  },
  {
    id: 'jackie',
    name: 'Jackie',
    role: 'Father',
    traits: ['Proud', 'Grieving', 'Traditional', 'Loving', 'Self-sacrificing'],
    arc: 'Moves from forbidding ballet to crossing the picket line and pawning his late wife’s jewellery to fund Billy’s audition.',
    keyMoment: 'Breaking down on the strikebreakers’ bus.',
    rubric: 'Paradox: betrayal motivated by love.',
  },
  {
    id: 'tony',
    name: 'Tony',
    role: 'Older brother',
    traits: ['Militant', 'Angry', 'Loyal to the union', 'Protective'],
    arc: 'Moves from mocking Billy and attacking Mrs Wilkinson’s influence to quietly supporting his brother’s departure.',
    keyMoment: 'Confronting Jackie when he crosses the picket line.',
    rubric: 'Inconsistency; collective identity.',
  },
  {
    id: 'wilkinson',
    name: 'Mrs Wilkinson',
    role: 'Mentor',
    traits: ['Blunt', 'Cynical', 'Perceptive', 'Committed'],
    arc: 'A woman disappointed with her own life who invests her hopes in Billy, giving free private lessons.',
    keyMoment: 'Clashing with Tony over Billy’s future.',
    rubric: 'Human qualities: compassion beneath a harsh manner.',
  },
  {
    id: 'michael',
    name: 'Michael',
    role: 'Best friend',
    traits: ['Playful', 'Unashamed', 'Lonely', 'Loyal'],
    arc: 'Explores his identity openly and is accepted by Billy. The adult Michael appears at the final performance.',
    keyMoment: 'Sharing his love of dressing up with Billy.',
    rubric: 'Anomaly; acceptance; diverse identities.',
  },
];

export const billyRelationships: Relationship[] = [
  { from: 'billy', to: 'jackie', label: 'Conflict → acceptance', detail: 'Jackie forbids ballet out of pride and fear of what others think. After seeing Billy dance, he sacrifices his principles for his son.' },
  { from: 'billy', to: 'tony', label: 'Hostility → respect', detail: 'Tony mocks Billy and resents the distraction from the strike. By the end he shows his affection, even if he cannot say it easily.' },
  { from: 'billy', to: 'wilkinson', label: 'Mentor / surrogate mother figure', detail: 'She recognises his talent and fills part of the gap left by his mother, while staying blunt and demanding.' },
  { from: 'billy', to: 'michael', label: 'Friendship & acceptance', detail: 'Each accepts the other’s difference. Their bond shows a gentler masculinity than the adults around them.' },
  { from: 'billy', to: 'mum', label: 'Grief & memory', detail: 'Her letter and remembered presence give Billy emotional permission to be himself.' },
  { from: 'billy', to: 'grandma', label: 'Care & inheritance', detail: 'Billy looks after Grandma, who once dreamed of dancing herself.' },
  { from: 'jackie', to: 'tony', label: 'Union loyalty → rupture', detail: 'They share the strike, until Jackie crosses the picket line. Their confrontation shows two kinds of loyalty colliding.' },
  { from: 'tony', to: 'wilkinson', label: 'Class clash', detail: 'Tony sees her as interfering and middle class; she sees Billy’s future being sacrificed to the strike.' },
  { from: 'jackie', to: 'mum', label: 'Unspoken grief', detail: 'Jackie’s grief shows in silence and anger, most painfully when he breaks up her piano for firewood.' },
];

export const billyParadoxes: Paradox[] = [
  {
    who: 'Jackie',
    type: 'Paradox',
    observation: 'He strikes to protect his community’s future, then breaks the strike to protect his son’s.',
    insight: 'Love for family can override even our deepest political loyalties.',
  },
  {
    who: 'Tony',
    type: 'Paradox',
    observation: 'He fights for workers’ freedom and dignity, yet tries to control and belittle Billy’s choices.',
    insight: 'People can demand freedom for their group while denying it to individuals within it.',
  },
  {
    who: 'Billy',
    type: 'Paradox',
    observation: 'He finds freedom through ballet, one of the most disciplined and rule-bound art forms.',
    insight: 'True self-expression often depends on discipline and hard work.',
  },
  {
    who: 'Billy',
    type: 'Inconsistency',
    observation: 'At the audition he punches another boy, then tries to convey the grace and feeling of dance.',
    insight: 'Anger and artistry can exist side by side, especially under pressure and in unfamiliar settings.',
  },
  {
    who: 'Billy & Michael',
    type: 'Anomaly',
    observation: 'Both boys behave outside the gender norms of their mining town.',
    insight: 'Anomalies expose how narrow and constructed social norms can be.',
  },
  {
    who: 'The community',
    type: 'Inconsistency',
    observation: 'The same community that enforces rigid masculinity helps raise money for Billy’s trip.',
    insight: 'Communities are capable of change when loyalty to their own is at stake.',
  },
];

export const strikeTimeline = [
  { when: 'March 1984', strike: 'Strike begins over planned pit closures.', billy: 'Billy is sent to boxing; Jackie and Tony are on strike.' },
  { when: 'Mid 1984', strike: 'Clashes between pickets and police.', billy: 'Billy secretly joins Mrs Wilkinson’s class.' },
  { when: 'Later 1984', strike: 'Hardship deepens; some miners drift back to work.', billy: 'Tony’s arrest means Billy misses the Newcastle audition; family conflict erupts.' },
  { when: 'Christmas 1984', strike: 'Families struggle to afford food and heating.', billy: 'The piano is burned; Jackie sees Billy dance.' },
  { when: 'Early 1985', strike: 'The strike nears collapse.', billy: 'Jackie crosses the picket line; Billy auditions in London.' },
  { when: 'March 1985', strike: 'Miners return to work without winning their demands.', billy: 'Billy is accepted and leaves for London.' },
  { when: 'Years later', strike: 'The mining world of the film has largely gone.', billy: 'Adult Billy performs Swan Lake on a London stage.' },
];
