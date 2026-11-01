export interface ArmorSuit {
  id: string;
  designation: string;
  tagline: string;
  film: string;
  year: number;
  image: string;
  description?: string;
}

export const ARMOR_SUITS: ArmorSuit[] = [
  {
    id: 'mk-i',
    designation: 'MK I',
    tagline: 'Cave-built exoskeleton',
    film: 'Iron Man',
    year: 2008,
    image: '/images/armor/mk-i.jpg',
  },
  {
    id: 'mk-iii',
    designation: 'MK III',
    tagline: 'Gold-titanium alloy',
    film: 'Iron Man',
    year: 2008,
    image: '/images/armor/mk-iii.jpg',
    description:
      'The red and gold arrives. A gold-titanium alloy solves the icing problem of the Mark II, turning an experiment into the silhouette the world will remember.',
  },
  {
    id: 'mk-vii',
    designation: 'MK VII',
    tagline: 'Automated suit-up',
    film: 'The Avengers',
    year: 2012,
    image: '/images/armor/mk-vii.jpg',
  },
  {
    id: 'mk-xlii',
    designation: 'MK XLII',
    tagline: 'Remote modular assembly',
    film: 'Iron Man 3',
    year: 2013,
    image: '/images/armor/mk-xlii.jpg',
  },
  {
    id: 'mk-l',
    designation: 'MK L',
    tagline: 'Nanotech nano-assembly',
    film: 'Avengers: Infinity War',
    year: 2018,
    image: '/images/armor/mk-l.jpg',
  },
  {
    id: 'mk-lxxxv',
    designation: 'MK LXXXV',
    tagline: 'Refined nanotech armor',
    film: 'Avengers: Endgame',
    year: 2019,
    image: '/images/armor/mk-lxxxv.jpg',
  },
];
