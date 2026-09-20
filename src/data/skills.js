// Skill groups shown on the landing page. Append a group (or a tag inside
// `items`) to extend the section — the layout adapts automatically.
//
// Schema:
//   id     unique kebab-case string
//   label  short monospace group label
//   blurb  one-line description of the group
//   items  array of skill tag strings (rendered in monospace)

export const skills = [
  {
    id: 'languages',
    label: 'languages',
    blurb: 'Daily drivers across systems, scripting, and the web.',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'C#', 'Swift', 'SQL', 'MATLAB', 'Assembly'],
  },
  {
    id: 'ml-ai',
    label: 'ml / ai',
    blurb: 'Model building and training pipelines for research and applied work.',
    items: ['PyTorch', 'TensorFlow', 'NumPy', 'Reinforcement Learning', 'Matplotlib'],
  },
  {
    id: 'frameworks',
    label: 'frameworks',
    blurb: 'Front-end and server-side application development.',
    items: ['React', 'Node.js', 'Express', 'Next.js', 'Angular'],
  },
  {
    id: 'data',
    label: 'databases',
    blurb: 'Relational and document stores in production projects.',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    id: 'cloud',
    label: 'cloud + deploy',
    blurb: 'Shipping and operating software across the major clouds.',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'Linux', 'Vultr'],
  },
  {
    id: 'tools',
    label: 'tooling',
    blurb: 'The workbench around the code.',
    items: ['Git', 'PowerShell', 'Postman', 'Jira', 'Wireshark', 'Power BI'],
  },
];
