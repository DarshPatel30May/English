import type { ModuleData, Poem, PoemGroup, PoemPair } from './types';
import { NESA_SYLLABUS_URL } from './sources';

export const moduleA: ModuleData = {
  id: 'module-a',
  code: 'Module A',
  title: 'Language, Identity and Culture',
  shortTitle: 'Module A',
  textShort: 'Inside My Mother (2015), Ali Cobby Eckermann',
  purpose:
    'To explore how language reflects and shapes individual and collective identity, and how texts affirm, challenge or disrupt assumptions about people and cultures.',
  summary:
    'Module A asks how language builds identity: who we are, where we belong and how cultures are represented. You study six poems from Ali Cobby Eckermann’s Inside My Mother. They explore Aboriginal identity, connection to Country, family, memory and the lasting impact of dispossession and removal. You analyse how Eckermann’s spare, image-rich language gives voice to experiences that have often been silenced. You also compose your own imaginative writing about identity and culture.',
  inquiryQuestions: [
    'How does Eckermann’s language reflect and shape individual and collective Aboriginal identity?',
    'How do the poems affirm Aboriginal culture while revealing and challenging histories of dispossession?',
    'How do family and Country shape a person’s sense of belonging?',
    'How can poetry act as truth-telling?',
    'How do personal poems speak to collective cultural experience?',
  ],
  nesaExpects: [
    'Explain how language reflects and shapes individual and collective identity.',
    'Analyse how texts affirm, ignore, reveal, challenge or disrupt assumptions and beliefs about individuals and cultural groups.',
    'Analyse how poetic language, form and structure represent identity and culture.',
    'Compare poems purposefully and support analysis with precise textual references.',
    'Compose imaginative texts that explore identity and culture, including your own.',
  ],
  examInfo:
    'HSC Paper 2, Section I (20 marks): an extended response on Inside My Mother. Questions usually target language, identity and culture, often with a quotation or stimulus to respond to.',
  descriptor: {
    intro: [
      'Language has the power to both reflect and shape individual and collective identity.',
      'Students deepen their understanding of how language can be used to affirm, ignore, reveal, challenge or disrupt prevailing assumptions and beliefs about themselves, individuals and cultural groups.',
      'They study one prescribed text in detail, analysing how its language, form and features represent identity and culture. They also experiment with language and form to compose their own imaginative texts.',
    ],
    phrases: [
      {
        id: 'a-shape',
        phrase: 'language … reflect and shape individual and collective identity',
        meaning:
          'Language mirrors who we are (reflects) and also helps create who we become (shapes). This works for individuals and for whole communities.',
        textLink:
          'Eckermann’s poems mirror personal experiences of family and loss, and they also shape a collective Aboriginal identity grounded in Country, ancestors and survival.',
      },
      {
        id: 'a-affirm',
        phrase: 'affirm … prevailing assumptions and beliefs',
        meaning: 'To confirm or celebrate an identity or belief.',
        textLink:
          '“Trance” affirms Aboriginal spiritual connection to Country. “Leaves” affirms kinship that survives separation.',
      },
      {
        id: 'a-reveal',
        phrase: 'reveal … and ignore',
        meaning:
          'To uncover something hidden, or to draw attention to what a society has chosen to ignore.',
        textLink:
          '“Unearth” literally and metaphorically digs up buried history. “Oombulgarri” exposes a recent community closure many Australians never heard about.',
      },
      {
        id: 'a-challenge',
        phrase: 'challenge or disrupt',
        meaning: 'To question or break down dominant beliefs, stereotypes or versions of history.',
        textLink:
          'The poems disrupt the idea that colonial dispossession is “in the past” by showing its continuing impact on communities, families and individuals.',
      },
      {
        id: 'a-culture',
        phrase: 'identity and culture',
        meaning:
          'Culture means the shared values, knowledge, practices, stories and connections of a group. Identity is a person’s sense of who they are within (and sometimes against) that culture.',
        textLink:
          'Cultural references such as Country, kinship, ancestors, the boomerang and pituri connect individual speakers to a living Aboriginal culture.',
      },
      {
        id: 'a-compose',
        phrase: 'experiment with language and form to compose imaginative texts',
        meaning: 'You also write creatively, using what you learn from the prescribed text.',
        textLink:
          'Eckermann models how a single image (a key, a tree, eyes) can carry a whole story of identity. That is a useful strategy for your own writing.',
      },
    ],
    sourceUrl: NESA_SYLLABUS_URL,
    howTextAddresses:
      'Inside My Mother is written in spare, image-rich language. It moves between deeply personal experiences (grief, love, family) and collective Aboriginal histories (removal, dispossession, survival). The six prescribed poems show language affirming culture, revealing silenced histories and challenging assumptions. That makes the collection a direct fit for the module.',
  },
  texts: [
    {
      title: 'Inside My Mother',
      creator: 'Ali Cobby Eckermann',
      year: '2015',
      form: 'Poetry collection (Giramondo). Prescribed poems: “Trance”, “Unearth”, “Oombulgarri”, “Eyes”, “Leaves”, “Key”',
      summary:
        'Inside My Mother is a collection written after the death of Eckermann’s birth mother. It explores grief, love, family and connection to Country, alongside the impact of the Stolen Generations and dispossession on Aboriginal communities. The six prescribed poems move between private emotion, family relationships and collective history.',
      memoryHook: 'Six poems, three lenses: collective history, family across generations, the inner self.',
      context: [
        {
          label: 'Ali Cobby Eckermann',
          detail:
            'A Yankunytjatjara and Kokatha woman, born in 1963 in Adelaide. She was adopted as a baby and raised by a non-Aboriginal family in mid-north South Australia. In her thirties she met her birth mother, Audrey, and learned that Audrey had also been taken from her family, as had earlier generations. Her verse novel Ruby Moonlight won the Kenneth Slessor Prize, and she received a Windham-Campbell Prize for poetry in 2017.',
        },
        {
          label: 'The Stolen Generations',
          detail:
            'Aboriginal and Torres Strait Islander children who were forcibly removed from their families by governments, churches and welfare bodies, from the late 1800s into the 1970s. The 1997 Bringing Them Home report documented this history, and the Australian Government made a National Apology on 13 February 2008. Removal disrupted connections to family, language, culture and Country across generations.',
        },
        {
          label: 'Aboriginal identity',
          detail:
            'Aboriginal identity is grounded in kinship, community, Country, culture and shared history, not appearance. For people affected by removal, identity often involves reconnecting with family and culture.',
        },
        {
          label: 'Country',
          detail:
            'For Aboriginal peoples, “Country” (capital C) means more than land. It is a living network of land, waters, sky, ancestors, Law, kin and responsibility. Connection to Country is central to identity and wellbeing.',
        },
        {
          label: 'Not purely autobiography',
          detail:
            'Eckermann draws on lived experience, but the poems use speakers and personae (“she”, “the girl”, “I”). In essays, refer to “the speaker” or “the persona” and analyse the poem as a crafted text, not a diary entry.',
        },
      ],
      people: [
        { name: 'The old woman (“Trance”)', role: 'Persona', description: 'An older Aboriginal woman who enters a trance and remembers a lost lover.' },
        { name: 'Collective voice (“Unearth”)', role: 'Speaker', description: 'A voice that speaks for a community, calling for buried history to be uncovered.' },
        { name: 'The witness (“Oombulgarri”)', role: 'Speaker', description: 'An observer recording a deserted community and its grief.' },
        { name: 'The woman (“Eyes”)', role: 'Persona', description: 'A woman choosing which emotional “eyes” to see the world through.' },
        { name: 'The daughter (“Leaves”)', role: 'Speaker', description: 'A speaker who sees a tree and imagines her father.' },
        { name: 'The girl and her grandmother (“Key”)', role: 'Personae', description: 'A girl trying to understand her grandmother’s private world.' },
      ],
      note:
        'Short textual references on this site are brief cues for finding moments in the poems. Always check exact wording against your own copy of Inside My Mother before quoting in an assessment.',
    },
  ],
  themes: [
    {
      id: 'identity-belonging',
      name: 'Identity and belonging',
      summary:
        'Identity in the poems is relational: it comes from family, Country, culture and memory, and it is threatened when these connections are broken.',
      examples: ['“Leaves”: identity found through imagined kinship with a father.', '“Key”: belonging tested by a grandmother’s private world.'],
      techniques: ['Symbolism', 'Perspective', 'Natural imagery'],
      related: ['country', 'family', 'dispossession'],
    },
    {
      id: 'country',
      name: 'Connection to Country',
      summary:
        'Country appears as a living presence that comforts, remembers and holds people and stories.',
      examples: ['“Trance”: trees, landscape and fire comfort the old woman.', '“Leaves”: a tree on the horizon becomes a father.'],
      techniques: ['Personification', 'Sensory imagery', 'Cultural references'],
      related: ['identity-belonging', 'spirituality', 'dispossession'],
    },
    {
      id: 'dispossession',
      name: 'Dispossession and displacement',
      summary:
        'The poems show the loss of land, community and family caused by colonisation and government policy, and its ongoing grief.',
      examples: ['“Oombulgarri”: a community emptied and silenced.', '“Unearth”: ancestors buried beneath a newer culture.'],
      techniques: ['Repetition', 'Contrast', 'Pathetic fallacy'],
      related: ['truth-telling', 'country', 'silencing'],
    },
    {
      id: 'truth-telling',
      name: 'Memory, history and truth-telling',
      summary:
        'Remembering is an act of resistance. The poems uncover histories that official narratives have buried or ignored.',
      examples: ['“Unearth”: the excavation of bones as recovery of history.', '“Oombulgarri”: naming a place so it is not forgotten.'],
      techniques: ['Extended metaphor', 'Symbolism', 'Urgent tone'],
      related: ['dispossession', 'resilience', 'silencing'],
    },
    {
      id: 'family',
      name: 'Family, kinship and intergenerational identity',
      summary:
        'Relationships with parents and grandparents carry culture, knowledge and love, but are also marked by distance and secrecy.',
      examples: ['“Leaves”: longing for a distant father.', '“Key”: a grandmother’s locked room and private knowledge.'],
      techniques: ['Rhetorical questions', 'Spatial imagery', 'Thresholds'],
      related: ['identity-belonging', 'country'],
    },
    {
      id: 'love-loss',
      name: 'Love, loss and grief',
      summary:
        'Grief runs through the collection, for lovers, parents, communities and culture. Love persists through memory.',
      examples: ['“Trance”: a lost lover recalled in a trance.', '“Oombulgarri”: collective grief for a destroyed community.'],
      techniques: ['Sensory imagery', 'Minimal punctuation', 'Imagery of absence'],
      related: ['spirituality', 'dispossession'],
    },
    {
      id: 'resilience',
      name: 'Resilience and self-determination',
      summary:
        'Speakers choose how to respond to trauma. They draw strength from culture, ancestors and their own will.',
      examples: ['“Eyes”: a woman choosing her emotional stance.', '“Unearth”: a culture that will rise again.'],
      techniques: ['Extended metaphor', 'Tonal shifts', 'Juxtaposition'],
      related: ['truth-telling', 'identity-belonging'],
    },
    {
      id: 'spirituality',
      name: 'Spiritual connection',
      summary:
        'Spiritual experience links people to Country, ancestors and loved ones beyond death.',
      examples: ['“Trance”: the trance state opens a connection with the lost lover.', '“Unearth”: ancestors remain present.'],
      techniques: ['Two-part structure', 'Cultural references', 'Imagery'],
      related: ['country', 'love-loss'],
    },
    {
      id: 'silencing',
      name: 'Silencing and voice',
      summary:
        'The poems give voice to people and histories that have been silenced, while also respecting knowledge that is not for everyone.',
      examples: ['“Oombulgarri”: empty streets as silenced lives.', '“Key”: knowledge the grandmother keeps private.'],
      techniques: ['Repetition', 'Symbolism', 'Imagery of emptiness'],
      related: ['truth-telling', 'dispossession'],
    },
  ],
  techniques: [
    {
      name: 'Imagery (sensory, natural, spatial)',
      definition: 'Descriptive language that appeals to the senses or creates a picture.',
      example: 'Fire, trees and landscape in “Trance”; tumbleweeds and empty streets in “Oombulgarri”; the closed bedroom in “Key”.',
      effect: 'Grounds identity in physical places and bodies, so connection to Country and loss become tangible.',
      rubricLink: 'Language reflects identity and culture.',
    },
    {
      name: 'Symbolism',
      definition: 'An object or image that represents a larger idea.',
      example: 'Bones and the boomerang (“Unearth”), the tree (“Leaves”), the key and door (“Key”), eyes (“Eyes”).',
      effect: 'Compresses complex ideas about history, kinship and access to knowledge into memorable images.',
      rubricLink: 'Language shapes collective identity.',
    },
    {
      name: 'Extended metaphor',
      definition: 'A metaphor developed across a whole poem or section.',
      example: 'Excavation in “Unearth”; eyes as emotional perspectives in “Eyes”.',
      effect: 'Builds a sustained argument through one image: digging up history, choosing how to see.',
      rubricLink: 'Reveal and challenge assumptions.',
    },
    {
      name: 'Personification',
      definition: 'Giving human qualities to non-human things.',
      example: 'The landscape comforting the woman in “Trance”; the tree as father in “Leaves”.',
      effect: 'Shows Country as alive and relational, which reflects Aboriginal understandings of land.',
      rubricLink: 'Affirms cultural identity.',
    },
    {
      name: 'Repetition',
      definition: 'Repeating a word, phrase or structure for emphasis.',
      example: 'The repeated word “empty” in “Oombulgarri”; repeated boomerang imagery in “Unearth”.',
      effect: 'Hammers home absence and loss, or builds momentum towards resistance.',
      rubricLink: 'Reveals ignored histories.',
    },
    {
      name: 'Inclusive / collective pronouns',
      definition: 'Words like “we”, “our” and “us” that create a shared voice.',
      example: 'References to “our ancestors” in “Unearth”.',
      effect: 'Turns a personal poem into a collective statement and positions the reader to consider whose history is told.',
      rubricLink: 'Collective identity.',
    },
    {
      name: 'Perspective and persona',
      definition: 'The point of view the poem is told from, including third-person personae.',
      example: '“The girl” observing her grandmother in “Key”; “she” in “Eyes” and “Trance”; a first-person speaker in “Leaves”.',
      effect: 'Third person creates distance and universality; first person creates intimacy.',
      rubricLink: 'Individual identity.',
    },
    {
      name: 'Spare form and minimal punctuation',
      definition: 'Short lines, few words and limited punctuation.',
      example: 'Characteristic of the collection, especially “Trance” and “Leaves”.',
      effect: 'Creates a quiet, meditative voice. White space can suggest silence, absence and what cannot be said.',
      rubricLink: 'Form shapes meaning.',
    },
  ],
  conceptMap: {
    nodes: [
      { id: 'mod', label: 'Language, Identity & Culture', type: 'module', detail: 'How language reflects and shapes individual and collective identity.' },
      { id: 'txt', label: 'Inside My Mother', type: 'text', detail: 'Ali Cobby Eckermann’s 2015 collection; six prescribed poems.' },
      { id: 'r-ind', label: 'Individual identity', type: 'rubric', detail: 'Personal identity shaped by emotion, family and memory: “Trance”, “Eyes”.' },
      { id: 'r-col', label: 'Collective identity', type: 'rubric', detail: 'Shared Aboriginal identity and history: “Unearth”, “Oombulgarri”.' },
      { id: 'r-aff', label: 'Affirm', type: 'rubric', detail: 'Celebrating culture and kinship: “Trance”, “Leaves”.' },
      { id: 'r-rev', label: 'Reveal / challenge', type: 'rubric', detail: 'Exposing buried and ignored history: “Unearth”, “Oombulgarri”.' },
      { id: 'p-trance', label: 'Trance', type: 'text', detail: 'An old woman’s trance and memory of a lost lover.' },
      { id: 'p-unearth', label: 'Unearth', type: 'text', detail: 'Excavating buried ancestors and history.' },
      { id: 'p-oomb', label: 'Oombulgarri', type: 'text', detail: 'A community closed and emptied.' },
      { id: 'p-eyes', label: 'Eyes', type: 'text', detail: 'Choosing emotional perspectives.' },
      { id: 'p-leaves', label: 'Leaves', type: 'text', detail: 'A tree imagined as a father.' },
      { id: 'p-key', label: 'Key', type: 'text', detail: 'A grandmother’s private world.' },
      { id: 't-country', label: 'Country', type: 'theme', detail: 'Land as a living, relational presence.' },
      { id: 't-disp', label: 'Dispossession', type: 'theme', detail: 'Loss of land, community and family.' },
      { id: 't-fam', label: 'Kinship', type: 'theme', detail: 'Intergenerational relationships and knowledge.' },
      { id: 't-res', label: 'Resilience', type: 'theme', detail: 'Choosing strength in response to trauma.' },
      { id: 'k-sym', label: 'Symbolism', type: 'technique', detail: 'Bones, boomerang, tree, key, eyes.' },
      { id: 'k-met', label: 'Extended metaphor', type: 'technique', detail: 'Excavation; eyes as lenses.' },
      { id: 'k-per', label: 'Personification', type: 'technique', detail: 'Living Country; tree as father.' },
      { id: 'k-rep', label: 'Repetition', type: 'technique', detail: '“empty”; boomerang.' },
    ],
    edges: [
      { source: 'mod', target: 'txt', label: 'prescribed text' },
      { source: 'mod', target: 'r-ind' },
      { source: 'mod', target: 'r-col' },
      { source: 'mod', target: 'r-aff' },
      { source: 'mod', target: 'r-rev' },
      { source: 'r-ind', target: 'p-trance' },
      { source: 'r-ind', target: 'p-eyes' },
      { source: 'r-col', target: 'p-unearth' },
      { source: 'r-col', target: 'p-oomb' },
      { source: 'r-aff', target: 'p-leaves' },
      { source: 'r-aff', target: 'p-trance' },
      { source: 'r-rev', target: 'p-unearth' },
      { source: 'r-rev', target: 'p-oomb' },
      { source: 'txt', target: 'p-key' },
      { source: 'p-key', target: 't-fam' },
      { source: 'p-leaves', target: 't-fam' },
      { source: 'p-leaves', target: 't-country' },
      { source: 'p-trance', target: 't-country' },
      { source: 'p-oomb', target: 't-disp' },
      { source: 'p-unearth', target: 't-disp' },
      { source: 'p-eyes', target: 't-res' },
      { source: 'p-unearth', target: 't-res' },
      { source: 't-country', target: 'k-per' },
      { source: 't-disp', target: 'k-rep' },
      { source: 'p-key', target: 'k-sym' },
      { source: 'p-eyes', target: 'k-met' },
      { source: 'p-unearth', target: 'k-met' },
    ],
  },
  revision: {
    takeaways: [
      'Language both reflects and shapes identity, for individuals and for communities.',
      'Eckermann’s poems affirm Aboriginal culture and reveal histories of dispossession.',
      'Country is a living presence, not just “land” or setting.',
      'Group poems: collective history (“Unearth”, “Oombulgarri”), family (“Leaves”, “Key”), inner self (“Trance”, “Eyes”).',
      'Symbols carry the poems’ big ideas: bones, boomerang, tree, key, eyes.',
      'Spare form, short lines and silence are meaningful choices.',
      'Refer to “the speaker” or “persona”; don’t treat poems as pure autobiography.',
      'Personal experience in the poems connects to collective Aboriginal experience.',
      'Pair poems for contrast in perspective, not only similarity of theme.',
      'Always tie analysis to language, identity AND culture.',
    ],
    thirtySecond:
      'Ali Cobby Eckermann’s Inside My Mother uses spare, image-rich poetry to explore Aboriginal identity, family, Country and the lasting impact of dispossession. “Unearth” and “Oombulgarri” reveal collective histories of loss and resistance. “Leaves” and “Key” explore identity through family across generations. “Trance” and “Eyes” focus on a woman’s inner world. Together they show that language can affirm culture, reveal silenced histories and challenge assumptions about Aboriginal identity.',
    terminology: [
      { term: 'Identity', definition: 'A person’s or group’s sense of who they are, shaped by relationships, culture, place and experience.' },
      { term: 'Culture', definition: 'Shared values, knowledge, practices, language and stories of a group.' },
      { term: 'Collective identity', definition: 'A shared sense of identity held by a community or group.' },
      { term: 'Affirm', definition: 'To confirm, celebrate or validate.' },
      { term: 'Disrupt', definition: 'To break down or interrupt a dominant belief or narrative.' },
      { term: 'Persona', definition: 'A voice or character created by the poet to speak in the poem.' },
      { term: 'Country', definition: 'In Aboriginal understanding, the living interconnection of land, waters, sky, ancestors, kin and Law.' },
      { term: 'Truth-telling', definition: 'Acknowledging the full, often painful, history of colonisation and its impacts.' },
    ],
    misconceptions: [
      {
        myth: 'Every poem is Eckermann describing her own life.',
        truth: 'The poems draw on experience but use crafted personae and speakers. Analyse them as constructed texts.',
      },
      {
        myth: '“Country” just means the land or the setting.',
        truth: 'Country is a living, relational concept central to identity, spirituality and responsibility.',
      },
      {
        myth: 'Module A is a theme module: just discuss identity.',
        truth: 'The module is about language. Every point must explain how language shapes identity and culture.',
      },
      {
        myth: 'The poems only describe victimhood.',
        truth: 'They also affirm culture, resilience, love and self-determination.',
      },
    ],
    examGuide: [
      'Choose two or three poems that let you contrast perspectives (e.g. collective vs personal).',
      'Thesis: state how Eckermann’s language reflects or shapes identity and culture.',
      'Each paragraph: concept → poem → technique + brief textual reference → effect on identity/culture.',
      'Use the rubric verbs: affirm, reveal, challenge, disrupt.',
      'Refer to context briefly and respectfully, only where it deepens analysis.',
    ],
  },
  sources: [
    { label: 'NESA — English Standard Stage 6 Syllabus (2017)', url: NESA_SYLLABUS_URL, note: 'Official Module A descriptor and prescriptions.' },
    { label: 'Reading Australia — Inside My Mother teaching resource', url: 'https://readingaustralia.com.au/lesson/inside-my-mother/', note: 'Copyright Agency / AATE resource with poem-by-poem tasks.' },
    { label: 'AustLit — Ali Cobby Eckermann', url: 'https://www.austlit.edu.au/austlit/page/A96913', note: 'Biographical and publication record.' },
    { label: 'NSW Department of Education — Module A: Language, identity and culture', url: 'https://education.nsw.gov.au/teaching-and-learning/curriculum/english/english-curriculum-resources-k-12/english-11-12-resources/module-a-language-identity-culture', note: 'Department teaching resources.' },
    { label: 'Amnesty International Australia — Oombulgurri demolitions', url: 'https://www.amnesty.org.au/oombulgurri-demolitions-your-questions-answered/', note: 'Context for “Oombulgarri”.' },
    { label: 'Australian Human Rights Commission — Bringing Them Home report (1997)', url: 'https://humanrights.gov.au/our-work/bringing-them-home-report-1997', note: 'Stolen Generations context.' },
  ],
};

export const poemThemeLabels: Record<string, string> = {
  identity: 'Identity',
  country: 'Connection to Country',
  memory: 'Memory',
  'love-loss': 'Love and loss',
  spirituality: 'Spiritual connection',
  dispossession: 'Dispossession',
  'truth-telling': 'Truth-telling',
  resistance: 'Resistance',
  survival: 'Cultural survival',
  displacement: 'Displacement',
  belonging: 'Belonging',
  silencing: 'Silencing',
  resilience: 'Emotional resilience',
  trauma: 'Trauma',
  'self-determination': 'Self-determination',
  family: 'Family',
  kinship: 'Kinship',
  intergenerational: 'Intergenerational relationships',
  'cultural-knowledge': 'Cultural knowledge',
  nature: 'Natural environment',
};

export const techniqueTagLabels: Record<string, string> = {
  imagery: 'Imagery',
  symbolism: 'Symbolism',
  metaphor: 'Metaphor / extended metaphor',
  personification: 'Personification',
  repetition: 'Repetition',
  contrast: 'Contrast / juxtaposition',
  tone: 'Tone and tonal shift',
  structure: 'Structure',
  perspective: 'Perspective / persona',
  cultural: 'Cultural references',
  questions: 'Rhetorical questions',
  sound: 'Sound devices',
  lineation: 'Short lines / minimal punctuation',
  inclusive: 'Inclusive language',
  synecdoche: 'Synecdoche',
  simile: 'Simile',
  'pathetic-fallacy': 'Pathetic fallacy',
  thresholds: 'Thresholds / spatial imagery',
};

export const poems: Poem[] = [
  {
    id: 'trance',
    title: 'Trance',
    group: 'inner',
    oneLine: 'An old woman enters a trance and is reunited, in memory, with her lost lover.',
    summary:
      'In two numbered parts, an older Aboriginal woman prepares for and then enters a trance. Comforted by trees, landscape, pituri (a traditional plant stimulant) and the campfire, she feels the presence of a lover she has lost. Memory, Country and spirit merge, so grief becomes a form of connection.',
    speaker: 'Third-person narration focused on “the old woman”, giving a respectful, slightly distanced view of a private spiritual experience.',
    structure:
      'Two sections. Part 1: the preparation, set in the outer, physical world. Part 2: the trance itself, an inner world of memory and spirit. The shift mirrors her passage from one state of consciousness to another.',
    keyImages: ['The old woman and the landscape', 'Pituri', 'The campfire', 'Trees offering comfort', 'The lost lover / man'],
    themes: ['identity', 'country', 'memory', 'love-loss', 'spirituality'],
    techniques: [
      { name: 'Two-part structure', tag: 'structure', where: 'Sections “1” and “2”.', effect: 'Moves the reader from the outer world into the inner trance, enacting her spiritual journey.' },
      { name: 'Cultural references', tag: 'cultural', where: 'Pituri, campfire, the bush setting.', effect: 'Grounds the experience in Aboriginal cultural practice and affirms its spiritual knowledge.' },
      { name: 'Sensory (tactile and visual) imagery', tag: 'imagery', where: 'Fire, trees and touch in Part 2.', effect: 'Makes memory physical; the lover is felt, not just remembered.' },
      { name: 'Personification', tag: 'personification', where: 'Trees and landscape comforting the woman.', effect: 'Country is a living companion that shares her grief.' },
      { name: 'Synecdoche', tag: 'synecdoche', where: 'Details of body and landscape stand in for the whole.', effect: 'Memory returns in fragments, as it does in grief and in altered states.' },
      { name: 'Minimal punctuation', tag: 'lineation', where: 'Lines flow with little punctuation.', effect: 'Imitates the drifting, dreamlike flow of the trance.' },
    ],
    identity:
      'Identity is rooted in Country and spiritual practice. The woman’s sense of self includes her relationships with land and with the dead.',
    rubric:
      'Affirms Aboriginal spiritual identity and shows how the language of Country expresses individual identity within a culture.',
    essayAngle: 'Memory and Country sustain identity through loss. Pair with “Key” (an older woman seen from outside) or “Leaves” (people found in landscape).',
  },
  {
    id: 'unearth',
    title: 'Unearth',
    group: 'collective',
    oneLine: 'Digging up buried bones becomes a call to uncover suppressed history.',
    summary:
      'Literally, the poem describes an excavation that brings the bones of long-buried people to the surface. Metaphorically, it calls for the recovery of buried ancestors, cultural memory and suppressed Aboriginal history. Repeated boomerang imagery identifies the culture, and the poem builds towards a warning that what was buried will return.',
    speaker: 'A collective voice that uses inclusive language (“our ancestors”) to speak for and with a community.',
    structure:
      'Builds progressively, from the act of digging to the rising of what is buried. The tone grows increasingly urgent and defiant towards the end.',
    keyImages: ['Bones', 'Digging and excavation', 'The boomerang', '“our ancestors”', 'Rising from beneath'],
    themes: ['dispossession', 'truth-telling', 'resistance', 'survival', 'memory'],
    techniques: [
      { name: 'Extended metaphor of excavation', tag: 'metaphor', where: 'Across the whole poem.', effect: 'Truth-telling becomes physical work: history must be dug up to be faced.' },
      { name: 'Inclusive language', tag: 'inclusive', where: 'Collective pronouns such as “our”.', effect: 'Creates shared identity and positions the reader to ask whose history has been buried.' },
      { name: 'Symbolism', tag: 'symbolism', where: 'Bones; the boomerang.', effect: 'Bones represent ancestors who endure. The boomerang, which returns when thrown, suggests a culture that cannot be suppressed.' },
      { name: 'Personification', tag: 'personification', where: 'The buried past stirring and rising.', effect: 'History is alive and active, not finished.' },
      { name: 'Increasingly urgent tone', tag: 'tone', where: 'Towards the close.', effect: 'Turns remembrance into resistance and warning.' },
      { name: 'Repetition', tag: 'repetition', where: 'Repeated boomerang imagery.', effect: 'Builds rhythm and momentum, like something gathering force.' },
    ],
    identity:
      'Collective Aboriginal identity is anchored in ancestors and survives attempts at erasure. Uncovering history restores identity.',
    rubric:
      'Reveals and challenges dominant versions of Australian history, disrupting the assumption that colonial violence is buried in the past.',
    essayAngle: 'Truth-telling as resistance. Pair with “Oombulgarri” (past and present dispossession) or “Key” (revealing vs respecting hidden knowledge).',
  },
  {
    id: 'oombulgarri',
    title: 'Oombulgarri',
    group: 'collective',
    oneLine: 'A portrait of an Aboriginal community emptied after its closure.',
    summary:
      'The poem depicts the Aboriginal community of Oombulgarri (often spelled Oombulgurri) in the East Kimberley after it was closed and its people displaced. Images of empty streets, abandoned belongings and police vehicles convey desolation, tension and grief. It shows how dispossession continues in recent times.',
    speaker: 'A witness or observer recording the aftermath, which positions the reader as a witness too.',
    structure:
      'A series of stark images of absence. The title names the place, so the poem acts as a record and memorial.',
    keyImages: ['Repeated “empty”', 'Tumbleweeds and dresses', 'Empty streets', 'Paddy wagons', 'Broken and abandoned things'],
    themes: ['dispossession', 'displacement', 'belonging', 'silencing', 'country'],
    techniques: [
      { name: 'Repetition', tag: 'repetition', where: 'The word “empty”.', effect: 'Emphasises the hollowness left when people are removed: absence becomes the poem’s subject.' },
      { name: 'Imagery / metaphor', tag: 'imagery', where: 'Tumbleweeds linked with dresses.', effect: 'Combines the cliché of a ghost town with human traces, reminding us real people lived here.' },
      { name: 'Contrast', tag: 'contrast', where: 'Signs of past life vs present desolation.', effect: 'Highlights what has been lost.' },
      { name: 'Simile', tag: 'simile', where: 'Comparisons describing the deserted place.', effect: 'Makes the abstract loss vivid and concrete.' },
      { name: 'Alliteration', tag: 'sound', where: 'Sound patterns in descriptive lines.', effect: 'Slows the reading and adds a mournful rhythm.' },
      { name: 'Pathetic fallacy', tag: 'pathetic-fallacy', where: 'The landscape mirrors grief.', effect: 'Country itself seems to mourn its people.' },
    ],
    identity:
      'Belonging to place is central to identity. Removing a community from its Country damages collective identity.',
    rubric:
      'Reveals an event many Australians ignored and challenges assumptions that dispossession belongs only to history.',
    essayAngle: 'Ongoing dispossession and silencing. Pair with “Unearth” (historical vs recent) or “Key” (exclusion and closed spaces).',
    context:
      'Oombulgurri was a remote Aboriginal community in the East Kimberley, Western Australia. The state government withdrew services, and the last residents were relocated by late 2011. Its buildings were demolished in 2014. Eckermann has encouraged readers to research the places named in her poems.',
  },
  {
    id: 'eyes',
    title: 'Eyes',
    group: 'inner',
    oneLine: 'A woman chooses which emotional “eyes” to see the world through.',
    summary:
      'A woman considers different emotional perspectives, imagined as different pairs of eyes. She rejects eyes associated with fear and submission and chooses a stance of strength, keeping anger as a kind of protector. Eckermann has said the poem speaks to any woman facing challenging situations, including domestic violence.',
    speaker: 'Third person (“she”), which universalises the experience beyond one individual.',
    structure:
      'Organised around a sequence of different “eyes”. The poem progresses from vulnerability towards self-protection and agency, with clear tonal shifts.',
    keyImages: ['Different eyes', 'Eyes discarded', 'Eyes chosen', 'Anger as protector'],
    themes: ['identity', 'resilience', 'trauma', 'self-determination'],
    techniques: [
      { name: 'Extended metaphor', tag: 'metaphor', where: 'Eyes as emotional perspectives throughout.', effect: 'Identity becomes a choice of how to see, giving the woman agency.' },
      { name: 'Juxtaposition', tag: 'contrast', where: 'Fearful/submissive eyes vs strong eyes.', effect: 'Sharpens the contrast between victimhood and self-determination.' },
      { name: 'Imagery', tag: 'imagery', where: 'Visual descriptions of eyes.', effect: 'Makes inner emotion visible.' },
      { name: 'Tonal shift', tag: 'tone', where: 'From vulnerability to defiance.', effect: 'Enacts emotional resilience across the poem.' },
      { name: 'Third-person persona', tag: 'perspective', where: '“She”.', effect: 'Allows the poem to speak for many women, not one.' },
    ],
    identity:
      'Identity is not simply imposed by trauma; it can be actively chosen. Anger is reframed as self-protection rather than weakness.',
    rubric:
      'Challenges assumptions about passive victims and shows how language constructs an empowered individual identity.',
    essayAngle: 'Self-determination and emotional resilience. Pair with “Trance” (two forms of inner strength) or “Unearth” (anger as resistance).',
  },
  {
    id: 'leaves',
    title: 'Leaves',
    group: 'family',
    oneLine: 'A tree on the horizon becomes the father the speaker longs to know.',
    summary:
      'The speaker sees a tree on the horizon and wonders whether it is her father. Through natural metaphors, she explores a distant relationship and imagines kinship and a shared story despite separation. The title has a double meaning: the leaves of a tree, and someone who leaves.',
    speaker: 'A first-person speaker, which creates intimacy and a reflective, questioning voice.',
    structure: 'Short lines in regular stanzas give a calm, contemplative rhythm, with questions creating uncertainty.',
    keyImages: ['A tree on the horizon', 'Leaves', 'The father', 'Shared story'],
    themes: ['family', 'kinship', 'belonging', 'identity', 'nature'],
    techniques: [
      { name: 'Personification', tag: 'personification', where: 'The tree imagined as father.', effect: 'Kinship and Country merge; family is found in the land.' },
      { name: 'Metaphor', tag: 'metaphor', where: 'Natural images for the relationship.', effect: 'Expresses a relationship too distant to describe directly.' },
      { name: 'Rhetorical questions', tag: 'questions', where: 'The speaker’s wondering.', effect: 'Conveys longing and uncertainty about her father and herself.' },
      { name: 'Natural imagery', tag: 'imagery', where: 'Tree, horizon, leaves.', effect: 'Grounds identity in the natural environment.' },
      { name: 'Short lines', tag: 'lineation', where: 'Throughout.', effect: 'Slows reading; creates a gentle, reflective tone.' },
    ],
    identity:
      'Identity is found through kinship and Country together. Belonging can survive separation through imagination and shared story.',
    rubric:
      'Affirms Aboriginal kinship and connection to Country, showing language reconstructing family identity.',
    essayAngle: 'Family and belonging across distance. Pair with “Key” (intergenerational identity) or “Trance” (people found in landscape).',
  },
  {
    id: 'key',
    title: 'Key',
    group: 'family',
    oneLine: 'A girl tries to understand her grandmother’s private, locked world.',
    summary:
      'A girl observes her grandmother and is curious about her private bedroom, a space she cannot enter. The girl comes to realise there are parts of her grandmother’s life and knowledge she will never fully access. The “key” appears late in the poem, linked to images of a door without a key or keyhole.',
    speaker: 'Third person, closely following “the girl”, so the reader shares her curiosity and her exclusion.',
    structure:
      'Moves from observation and curiosity towards recognition. The withheld title image arrives near the end, so the reader also waits for “the key”.',
    keyImages: ['The grandmother’s bedroom', 'The closed door', 'A door without a key / keyhole', 'Inside vs outside'],
    themes: ['family', 'intergenerational', 'identity', 'cultural-knowledge', 'belonging'],
    techniques: [
      { name: 'Symbolism', tag: 'symbolism', where: 'Key, door, bedroom.', effect: 'Represents access to knowledge, memory and the grandmother’s inner life.' },
      { name: 'Thresholds and spatial imagery', tag: 'thresholds', where: 'Inside vs outside the room.', effect: 'Maps the emotional and generational distance between them.' },
      { name: 'Sensory imagery', tag: 'imagery', where: 'Details the girl notices.', effect: 'Creates intimacy and curiosity.' },
      { name: 'Shift in perspective', tag: 'perspective', where: 'From curiosity to understanding.', effect: 'Shows the girl’s growing maturity and respect.' },
    ],
    identity:
      'Identity is shaped by relationships with elders and by knowledge passed down, or held back. The poem can suggest both cultural knowledge and private experiences, possibly including trauma, that are not shared.',
    rubric:
      'Explores how culture and identity are transmitted between generations, and challenges the idea that all knowledge should be accessible.',
    essayAngle: 'Intergenerational identity and limits of knowing. Pair with “Leaves” (family) or “Unearth” (revealing vs respecting what is hidden).',
  },
];

export const poemGroups: PoemGroup[] = [
  {
    id: 'collective',
    label: 'Collective history and dispossession',
    poems: ['unearth', 'oombulgarri'],
    explanation: 'Both poems reveal histories of dispossession affecting whole communities: one historical and buried, one recent and visible.',
  },
  {
    id: 'family',
    label: 'Family and intergenerational identity',
    poems: ['leaves', 'key'],
    explanation: 'Both poems explore identity through relationships with a parent or grandparent marked by distance.',
  },
  {
    id: 'inner',
    label: 'Individual emotion and inner identity',
    poems: ['trance', 'eyes'],
    explanation: 'Both poems centre a woman’s inner world, through spiritual memory and through chosen emotional strength.',
  },
];

export const poemPairs: PoemPair[] = [
  {
    a: 'trance', b: 'unearth',
    perspectives: '“Trance” is private, spiritual and tender. “Unearth” is public, collective and political.',
    identityCulture: 'Both connect identity to ancestral presence and Country: one through personal memory, one through collective history.',
    descriptor: 'Affirm (spiritual culture) alongside reveal/challenge (buried history).',
    why: 'Shows memory sustaining identity at two scales, personal and collective, for a balanced essay.',
  },
  {
    a: 'trance', b: 'oombulgarri',
    perspectives: '“Trance” finds comfort in Country. “Oombulgarri” shows a community removed from its Country.',
    identityCulture: 'Both are filled with absence (a lost lover, a lost community) but respond differently: connection vs rupture.',
    descriptor: 'Affirming connection vs revealing what dispossession destroys.',
    why: 'A strong contrast between identity sustained and identity threatened by separation from Country.',
  },
  {
    a: 'trance', b: 'eyes',
    perspectives: 'Both centre a woman’s inner life in the third person. “Trance” draws strength from spirit and memory; “Eyes” from conscious choice.',
    identityCulture: 'Two models of resilience: spiritual connection and emotional self-determination.',
    descriptor: 'Language shaping individual identity.',
    why: 'The official “inner identity” pairing. It contrasts receptive and assertive ways of surviving pain.',
  },
  {
    a: 'trance', b: 'leaves',
    perspectives: 'Both find a loved person in the landscape. “Trance” recalls intimacy; “Leaves” imagines a relationship never fully had.',
    identityCulture: 'Country holds relationships, so identity and land are inseparable.',
    descriptor: 'Affirms cultural understanding of Country and kinship.',
    why: 'A focused essay on Country as a keeper of relationships.',
  },
  {
    a: 'trance', b: 'key',
    perspectives: 'Both concern an older woman’s private world: “Trance” from inside her experience, “Key” from the outside, through a granddaughter.',
    identityCulture: 'Elders hold memory and knowledge that shape identity; access to it differs.',
    descriptor: 'Language representing private and shared cultural knowledge.',
    why: 'An excellent perspective contrast: the same kind of subject seen from inside and outside.',
  },
  {
    a: 'unearth', b: 'oombulgarri',
    perspectives: '“Unearth” looks to buried history with defiance and hope. “Oombulgarri” records a recent loss with grief.',
    identityCulture: 'Collective Aboriginal identity threatened by dispossession, past and present.',
    descriptor: 'Reveal and challenge: both expose histories that dominant narratives ignore.',
    why: 'The official “collective history” pairing. It shows continuity between historical and recent dispossession.',
  },
  {
    a: 'unearth', b: 'eyes',
    perspectives: '“Unearth” channels collective anger into resistance. “Eyes” channels personal anger into protection.',
    identityCulture: 'Both turn suffering into strength and refuse passivity.',
    descriptor: 'Challenge assumptions of powerlessness.',
    why: 'Shows resilience at collective and individual levels.',
  },
  {
    a: 'unearth', b: 'leaves',
    perspectives: '“Unearth” connects to ancestors collectively; “Leaves” to one father personally.',
    identityCulture: 'Identity is inherited through lineage and land.',
    descriptor: 'Affirms kinship and ancestral identity.',
    why: 'Links collective and family lineage, showing how identity passes between generations.',
  },
  {
    a: 'unearth', b: 'key',
    perspectives: '“Unearth” demands buried knowledge be dug up. “Key” accepts that some knowledge stays locked.',
    identityCulture: 'Both explore access to the past and its role in identity.',
    descriptor: 'Reveal vs respecting what is withheld: a sophisticated tension.',
    why: 'Creates a nuanced argument about truth-telling and privacy.',
  },
  {
    a: 'oombulgarri', b: 'eyes',
    perspectives: '“Oombulgarri” voices collective grief after policy decisions; “Eyes” voices personal agency after trauma.',
    identityCulture: 'Trauma shapes identity, but responses differ: mourning vs self-determination.',
    descriptor: 'Reveal (collective harm) and challenge (passive victimhood).',
    why: 'Balances collective trauma with individual empowerment.',
  },
  {
    a: 'oombulgarri', b: 'leaves',
    perspectives: '“Oombulgarri” shows people removed from place; “Leaves” shows a speaker reconnecting with family through place.',
    identityCulture: 'Belonging to place and people is central to identity.',
    descriptor: 'Reveal loss vs affirm reconnection.',
    why: 'Shows disconnection and reconnection as two sides of Aboriginal identity.',
  },
  {
    a: 'oombulgarri', b: 'key',
    perspectives: 'Exclusion imposed by government (“Oombulgarri”) vs a boundary set by the grandmother (“Key”).',
    identityCulture: 'Closed spaces shape identity, but who controls access matters.',
    descriptor: 'Challenge assumptions about access and agency.',
    why: 'An unexpected but rich contrast built on spatial imagery of closed places.',
  },
  {
    a: 'eyes', b: 'leaves',
    perspectives: '“Eyes” defines identity decisively; “Leaves” questions identity through an uncertain relationship.',
    identityCulture: 'Identity as choice vs identity as inheritance.',
    descriptor: 'Language shaping individual identity.',
    why: 'Contrasts certainty and uncertainty in how identity is formed.',
  },
  {
    a: 'eyes', b: 'key',
    perspectives: '“Eyes” is from inside a woman’s mind; “Key” watches an older woman from outside.',
    identityCulture: 'Women’s private interior worlds and agency.',
    descriptor: 'Reveal inner experience vs respect privacy.',
    why: 'Explores how perspective shapes what we can know about a person.',
  },
  {
    a: 'leaves', b: 'key',
    perspectives: '“Leaves” reaches out imaginatively to a father; “Key” learns the limits of reaching a grandmother.',
    identityCulture: 'Identity is built through family across generations, through connection and distance.',
    descriptor: 'Affirms kinship while acknowledging separation.',
    why: 'The official “family” pairing: parallel relationships with different outcomes.',
  },
];

export function findPair(a: string, b: string): PoemPair | undefined {
  return poemPairs.find((p) => (p.a === a && p.b === b) || (p.a === b && p.b === a));
}

/* ───────────── "Understand all 6 poems in 5 minutes" ───────────── */
export interface QuickPoem {
  id: string;
  subtitle: string;
  story: string;
  meaning: string;
  remember: string;
}

export const quickPoems: QuickPoem[] = [
  {
    id: 'trance',
    subtitle: 'Connection to Country',
    story: 'A woman enters a trance-like state, experiencing nature, cultural memories and grief.',
    meaning: 'Aboriginal identity is deeply connected to Country, spirituality, traditions and memories.',
    remember: 'Nature = Culture',
  },
  {
    id: 'unearth',
    subtitle: 'Uncovering Hidden History',
    story: 'The poem calls for buried Aboriginal histories and ancestral experiences to be brought to light.',
    meaning: 'Remembering suppressed histories is essential for truth, cultural identity and resistance to injustice.',
    remember: 'Digging = Truth',
  },
  {
    id: 'oombulgarri',
    subtitle: 'Losing a Community',
    story: 'An Aboriginal community has been displaced, leaving a formerly inhabited settlement abandoned.',
    meaning: 'Dispossession damages more than homes. It disrupts cultural belonging, community relationships and identity.',
    remember: 'Empty Town = Cultural Loss',
  },
  {
    id: 'eyes',
    subtitle: 'Choosing How to Face the World',
    story: 'A woman considers different eyes, representing different ways of seeing and responding to the world.',
    meaning: 'Identity is influenced by emotions, difficult experiences and how individuals choose to respond to them.',
    remember: 'Eyes = Perspectives and Choices',
  },
  {
    id: 'leaves',
    subtitle: 'Missing a Father',
    story: 'A speaker reflects on her relationship with her father, represented through imagery of a tree.',
    meaning: 'Family relationships, ancestry and separation influence personal identity and the desire to belong.',
    remember: 'Tree = Father',
  },
  {
    id: 'key',
    subtitle: 'Locked Away Family Knowledge',
    story: 'A girl is unable to enter her grandmother’s private space and understand what lies beyond the door.',
    meaning: 'Barriers between generations can make family history and cultural identity difficult to understand.',
    remember: 'Locked Door = Missing Knowledge',
  },
];

export interface QuickPair {
  label: string;
  a: { id: string; focus: string };
  b: { id: string; focus: string };
  summary: string;
}

export const quickPairs: QuickPair[] = [
  {
    label: 'Country and belonging',
    a: { id: 'trance', focus: 'Connection to Country' },
    b: { id: 'oombulgarri', focus: 'Loss of community' },
    summary: 'Both explore Country and belonging, but one emphasises connection while the other emphasises loss.',
  },
  {
    label: 'Resistance',
    a: { id: 'unearth', focus: 'Historical resistance' },
    b: { id: 'eyes', focus: 'Emotional resistance' },
    summary: 'Both explore resistance, but one confronts historical injustice while the other explores an individual’s response.',
  },
  {
    label: 'Family identity',
    a: { id: 'leaves', focus: 'Father relationship' },
    b: { id: 'key', focus: 'Grandmother relationship' },
    summary: 'Both explore family identity, but they represent different barriers to intergenerational belonging.',
  },
];
