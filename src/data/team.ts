export interface TeamMember {
  id: string;
  surname: string;
  fullName: string;
  alias: string;
  relations: string[];
  text: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'stark',
    surname: 'Stark',
    fullName: 'Tony Stark',
    alias: 'Iron Man',
    relations: ['Inventor', 'Teammate'],
    text: 'The inventor at the center of the team. Every new idea he brings, and every mistake that follows, puts the Avengers under pressure.',
  },
  {
    id: 'rogers',
    surname: 'Rogers',
    fullName: 'Steve Rogers',
    alias: 'Captain America',
    relations: ['Teammate', 'Rival'],
    text: 'A soldier with a moral compass Tony cannot ignore. They clash over Ultron and the Sokovia Accords, and their disagreement splits the team in Civil War.',
  },
  {
    id: 'romanoff',
    surname: 'Romanoff',
    fullName: 'Natasha Romanoff',
    alias: 'Black Widow',
    relations: ['Teammate', 'Friend'],
    text: 'A spy who reads people quickly, Tony included. She sees through him, challenges him, and stands with him when the team splits in Civil War.',
  },
  {
    id: 'thor',
    surname: 'Thor',
    fullName: 'Thor Odinson',
    alias: 'God of Thunder',
    relations: ['Teammate', 'Friend'],
    text: 'The Asgardian who joins the fight over New York. Early on, he and Tony trade insults, but they grow into allies and fight Thanos side by side on Titan.',
  },
  {
    id: 'banner',
    surname: 'Banner',
    fullName: 'Bruce Banner',
    alias: 'The Hulk',
    relations: ['Teammate', 'Friend'],
    text: 'A scientist who shares Tony\u2019s drive to understand how things work. Together they build Ultron, and the disaster leaves them both carrying the guilt.',
  },
  {
    id: 'barton',
    surname: 'Barton',
    fullName: 'Clint Barton',
    alias: 'Hawkeye',
    relations: ['Teammate'],
    text: 'An archer who fights beside the team from the first battle in New York. He takes Steve\u2019s side in Civil War, and the split with Tony leaves the team fractured.',
  },
];
