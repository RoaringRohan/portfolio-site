// Experience entries, most recent first. Append an object to add a new role —
// the Work page renders them as a commit log automatically.
//
// Schema:
//   id           unique kebab-case string (used as the "branch" name)
//   role         job title
//   organization employer / lab
//   location     display location string
//   start, end   display date strings ('Present' for current roles)
//   commit       short mono date stamp shown in the commit line (e.g. '2025.09')
//   current      true marks the entry as HEAD
//   summary      1-2 sentence description of the role
//   highlights   array of bullet-point strings (kept short, one line each)
//   tech         array of tech-stack tags (rendered in monospace)
//   link         optional { href, label } — rendered after the organization.
//                A href may carry a #:~:text= fragment to scroll the target
//                page straight to the relevant text; browsers without text
//                fragment support just open the page at the top.

export const experience = [
  {
    id: 'ece1718-ta',
    role: 'Teaching Assistant — ECE1718 Embedded Linux',
    organization: 'University of Toronto',
    location: 'Toronto, ON',
    start: 'Sept 2026',
    end: 'Present',
    commit: '2026.09',
    current: true,
    summary:
      'TA for a graduate embedded Linux course, marking and facilitating labs for 30 students and mentoring them on FPGA-board coursework.',
    highlights: [
      'Marking labs and assignments for 30 students.',
      'Facilitating weekly laboratory sessions.',
      'Mentoring students working on FPGA boards.',
    ],
    tech: ['Embedded Linux', 'FPGA', 'Teaching'],
  },
  {
    id: 'kang-lee-lab',
    role: 'AI/ML Developer',
    organization: 'Kang Lee Research Lab, University of Toronto',
    link: {
      href: 'https://kangleelab.com/current-students#:~:text=Rohan%20Datta',
      label: 'Lab page',
    },
    location: 'Toronto, ON',
    start: 'May 2026',
    end: 'Present',
    commit: '2026.05',
    current: true,
    summary:
      'ML research role building and evaluating models that support active developmental research studies.',
    highlights: [
      'Developing AI/ML models and reproducible training pipelines for ongoing studies.',
      'Working the research-to-engineering boundary: datasets, experiments, and evaluation.',
    ],
    tech: ['Python', 'PyTorch', 'ML Pipelines'],
  },
  {
    id: 'septodont',
    role: 'IT Technician Co-Op',
    organization: 'Septodont — Novocol Pharma',
    location: 'Cambridge, ON',
    start: 'Sept 2023',
    end: 'Apr 2024',
    commit: '2023.09',
    current: false,
    summary:
      'Year-long co-op supporting identity, automation, and device lifecycle across a pharmaceutical manufacturing site.',
    highlights: [
      'Managed identity and access across the site with Azure.',
      'Automated IT workflows in PowerShell and built Power BI reporting.',
      'Owned the device lifecycle end-to-end: imaging, deployment, and remote troubleshooting.',
    ],
    tech: ['Azure', 'PowerShell', 'Power BI'],
  },
  {
    id: 'city-of-orillia',
    role: 'IT Modernization Initiatives Co-Op',
    organization: 'City of Orillia',
    location: 'Orillia, ON',
    start: 'Jun 2022',
    end: 'Aug 2022',
    commit: '2022.06',
    current: false,
    summary:
      'Summer co-op modernizing municipal IT infrastructure and internal processes.',
    highlights: [
      'Automated HR onboarding workflows for new employees.',
      'Maintained intranet backups and retention plans for the Business Resumption Plan.',
      'Presented software and hardware evaluations to stakeholders in a SCRUM team.',
    ],
    tech: ['Automation', 'Backups', 'SCRUM'],
  },
];
