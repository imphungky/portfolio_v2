// Site configuration
//
// Fork this portfolio and edit this single file to make it yours.
// Every personal link, name, and piece of content lives here — no need to
// touch the components.

const config = {
  // Shown in the nav bar and the browser tab title.
  siteName: 'Portfolio',

  // Path to your resume, served from public/ (e.g. public/resume.pdf).
  resumeUrl: '/resume.pdf',

  hero: {
    greeting: "Hi, I'm",
    name: 'Michael Phung',
    tagline: 'I build the app. Then I ship it. Then I fix the pipeline.',
  },

  about: {
    // Each string is rendered as its own paragraph.
    paragraphs: [
      "I'm a software developer who moves between mobile, backend, and infrastructure without losing the thread. Based in Ontario, I've spent the last 3 years at JANA Corporation building GIS field applications, improving web performance, and quietly filling the gaps no one else was covering. I'm most at home on problems that don't fit neatly into one discipline.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning something new.",
    ],
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Node.js',
      'Python', 'SQL', 'Git', 'REST APIs',
    ],
  },

  projects: [
    {
      title: 'Jace',
      description: 'Deckbuilding assistant taking your brews to the next level. Jace gets his data from scryfall and makes suggestions based on your list.',
      tags: ['Python', 'FastAPI', 'Docker'],
      links: { live: 'https://jacemtg.xyz', github: '#' },
    },
    {
      title: 'teamshook',
      description: 'Open source webhook service reacting to Github and JIRA events to post standardized notifications.',
      tags: ['Go'],
      links: { github: '#' },
    },
    {
      title: 'PostureAI',
      description: 'Facial recognition powered by AI. Built to keep your posture in check.',
      tags: ['React', 'Node.js'],
      links: { github: 'https://github.com/imphungky/PostureAI' },
    },
  ],

  contact: {
    blurb: "I'm currently open to new opportunities. Feel free to reach out!",
    links: [
      { label: 'Email', href: 'phung.michael1@email.com', icon: '✉' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/michael-u-phung/', icon: '🔗' },
      { label: 'GitHub', href: 'https://github.com/imphungky', icon: '⌥' },
    ],
  },
}

export default config
