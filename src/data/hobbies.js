// Hobby entries. Append an object to add a new hobby section to the page.
//
// Schema:
//   id       unique kebab-case string
//   title    hobby name
//   label    short monospace section label
//   summary  editorial paragraph
//   stats    array of { label, value } facts (rendered as a data grid)
//   details  optional array of { heading, body } sub-sections
//   links    optional { label, url } array

export const hobbies = [
  {
    id: 'competitive-chess',
    title: 'Competitive Chess',
    label: 'over the board',
    summary:
      'I play competitive over-the-board chess at a CFC rating of roughly 1600, favouring quiet, structure-first systems that trade early fireworks for long-term positional pressure.',
    stats: [
      { label: 'CFC Rating', value: '~1600' },
      { label: 'With White', value: 'English Opening' },
      { label: 'With Black', value: 'Caro-Kann Defense' },
      { label: 'Team', value: 'UofT Team E' },
    ],
    details: [
      {
        heading: '2026 Canadian University Chess Championship',
        body: 'Represented the University of Toronto on Team E at the 2026 CUCC, competing over the board against university teams from across Canada.',
      },
      {
        heading: 'Repertoire',
        body: 'The English (1. c4) as White for flexible, reversed-Sicilian structures; the Caro-Kann as Black for a solid pawn skeleton and reliable endgames.',
      },
    ],
    links: [{ label: 'chess.com/member/roaringrohan', url: 'https://www.chess.com/member/roaringrohan' }],
  },
  {
    id: 'table-tennis',
    title: 'Table Tennis',
    label: 'between sessions',
    summary:
      'I play table tennis whenever a table is free — university lounge games between classes, and pickup matches with coworkers during internships.',
    stats: [
      { label: 'Where', value: 'University lounge' },
      { label: 'Format', value: 'Casual pickup' },
    ],
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    label: 'giving time',
    summary:
      'I volunteer with FIRST Robotics Competition teams and mentor first-year students as an upper-year mentor with the ECE faculty at the University of Toronto.',
    stats: [
      { label: 'FRC', value: 'Competition volunteer' },
      { label: 'UofT ECE', value: 'Upper-year mentor' },
    ],
    details: [
      {
        heading: 'FIRST Robotics Competition',
        body: 'Volunteering at FRC events, supporting student teams through build and competition season.',
      },
      {
        heading: 'ECE Upper-Year Mentor',
        body: 'Mentoring junior ECE students at the University of Toronto on coursework, study habits, and navigating the program.',
      },
    ],
  },
];
