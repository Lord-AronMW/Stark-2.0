export const NAV_CHAPTERS = [
  { id: 'hero', number: '01', label: 'Hero' },
  { id: 'before', number: '02', label: 'Before' },
  { id: 'beginning', number: '03', label: 'The beginning' },
  { id: 'armor', number: '04', label: 'Armor evolution' },
  { id: 'avenger', number: '05', label: 'The Avenger' },
  { id: 'behind', number: '06', label: 'Behind the armor' },
  { id: 'climax', number: '07', label: 'The climax' },
  { id: 'legacy', number: '08', label: 'The legacy' },
] as const;

export const SITE = {
  name: 'Stark Industries',
  project: 'The Legacy Project',
};

export const HERO = {
  eyebrow: 'Stark Industries',
  title: 'Iron Man',
  subtitle: 'The legacy of Tony Stark',
  tagline: 'The man. The machine. The legacy.',
  body: 'He built a suit to survive. He became a hero by learning what was worth protecting. This is the story of Tony Stark.',
  cta: 'Explore chapters',
  image: '/images/hero/iron-man-hero.jpg',
  imageAlt: 'Tony Stark standing in his workshop with armor displays behind him',
};

export const BEFORE = {
  eyebrow: 'Genius. Billionaire. Playboy. Philanthropist.',
  title: ['Before', 'the armor.'],
  paragraphs: [
    'Tony Stark inherited a name that could open any door. A prodigy raised in the shadow of Howard Stark, he turned his father\u2019s company into an empire of weapons, spectacle and impossible engineering.',
    'He was funny, restless and very good at looking away. Before he could change the world, he would have to see what his inventions were doing to it.',
  ],
  stats: [
    { year: '1970', text: 'Born in Manhattan' },
    { year: '1991', text: 'His parents are killed' },
  ],
  image: '/images/before/tony-workshop.jpg',
  imageAlt: 'Tony Stark in a dark workshop',
  caption: 'Anthony Edward Stark',
};

export const BEGINNING = {
  eyebrow: 'Afghanistan / The cave / The first spark',
  title: ['Captivity.', 'Then creation.'],
  intro:
    'Captured by the Ten Rings and wounded by his own weapons, Tony survives because Ho Yinsen keeps shrapnel from reaching his heart. Together, they build a miniature Arc Reactor, and something their captors never see coming.',
  secondary:
    'The Mark I gets him out. Yinsen\u2019s sacrifice gives him a reason not to waste the life that remains.',
  image: '/images/beginning/forge.jpg',
  imageAlt: 'Tony Stark hammering metal at a forge inside a cave',
  quote: 'Don\u2019t waste it. Don\u2019t waste your life.',
  captions: ['A lifeline becomes a power source.', 'Forged under captivity. Not in a lab.'],
};

export const ARMOR = {
  eyebrow: 'Stark Industries / Hall of armor',
  title: 'Armor evolution',
  intro: 'Six turning points in a lifetime of iteration. Each suit answers a different fear.',
};

export const AVENGER = {
  eyebrow: 'New York / 2012. Six individuals. One impossible idea.',
  title: ['He could not', 'do it alone.'],
  team: ['Stark', 'Rogers', 'Romanoff', 'Thor', 'Banner', 'Barton'],
  intro:
    'The Avengers do not make Tony less difficult. They give his brilliance something to answer to. Steve challenges him. Natasha sees through him. Rhodey keeps him grounded. Learning to trust them is harder than building the suit.',
  heading: 'From lone genius to something greater.',
  stories: [
    {
      year: '2012',
      title: 'A bigger world.',
      text: 'In New York, Tony carries a nuclear missile through the wormhole. For once, the man with an exit strategy is willing not to come back.',
      film: 'The Avengers / 2012',
    },
    {
      year: '2015',
      title: 'Fear builds a monster.',
      text: 'The memory of that sky never leaves him. His attempt to protect the planet helps create Ultron. Good intentions are not enough.',
      film: 'Age of Ultron / 2015',
    },
    {
      year: '2016',
      title: 'A team divided.',
      text: 'He backs the Sokovia Accords. Accountability becomes a fault line with Steve Rogers; the truth about his parents makes it personal.',
      film: 'Civil War / 2016',
    },
    {
      year: '2018',
      title: 'Everything to lose.',
      text: 'On Titan, the future he feared arrives. Even his most advanced armor cannot stop Thanos. Peter disappears in his arms.',
      film: 'Infinity War / 2018',
    },
  ],
};

export const BEHIND = {
  eyebrow: 'No armor can keep everything out.',
  title: ['The hardest thing to build', 'was a life.'],
  paragraphs: [
    'After New York, sleep becomes difficult. Panic finds him far from the battlefield. He builds more suits, as if another layer of metal might quiet the fear underneath.',
    'But the people who love him never needed another Iron Man. They needed Tony. The closer he comes to an ordinary life, the more extraordinary the cost of leaving it becomes.',
  ],
  image: '/images/behind/family-lake.jpg',
  imageAlt: 'Tony Stark sitting on a lakeside dock with his family',
  caption: 'Story / The five years after the Blip',
  captionRight: 'Avengers: Endgame / Release 2019',
  people: [
    {
      name: 'Pepper',
      tagline: 'A partner, not a safety net.',
      text: 'She sees the man behind the performance. Their life together asks him to be present, not merely brilliant.',
    },
    {
      name: 'Peter',
      tagline: 'The weight of a promise.',
      text: 'Mentorship gives Tony a responsibility he cannot engineer away. Losing Peter makes the cost of failure unbearable.',
    },
    {
      name: 'Morgan',
      tagline: 'A future he can hold.',
      text: 'After the Blip, a daughter and a quiet home give him the life he once could not imagine. Saving everyone means risking it.',
    },
  ],
};

export const CLIMAX = {
  title: 'I am Iron Man.',
  text: 'Once, the words were a confession. Now, they are a choice. Tony takes the Stones and ends the battle, knowing he will not survive it.',
  meta: ['Story / Earth, 2023', 'Film / Avengers: Endgame / Release 2019'],
  footer: 'The invention was never the whole story.',
};

export const REACTOR = {
  eyebrow: 'The invention was never the whole story.',
  title: ['Not the suit.', 'The heart.'],
  intro:
    'Tony leaves behind a world that gets another chance. For Peter, a mentor\u2019s absence. For Rhodey, a friend\u2019s impossible example. For Pepper and Morgan, a life of small moments no monument can replace. His future belongs to the people who carry it forward.',
  quote: 'I love you 3000.',
  quoteCaption: 'A father\u2019s message. A family\u2019s memory.',
  artifact: {
    label: 'Artifact / 001',
    title: 'Original miniature arc reactor',
    text: 'Pepper saved it when Tony was ready to throw it away. Long before the world called him a hero, someone had already seen his heart.',
  },
  reactorLabels: ['Arc reactor / Radial assembly', 'Copper coil array / Concentric power core'],
  footer: 'Proof that Tony Stark has a heart.',
};

export const LEGACY = {
  title: ['The legacy', 'lives on.'],
  name: 'Anthony Edward Stark / 1970\u20132023',
  footerTitle: 'Iron Man: The legacy of Tony Stark',
  backLabel: 'Back to the beginning',
};
