// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rubenperezm', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['vre-hub/reana-jupyterlab-extension', 'rubenperezm/ChatbotSQL', 'rubenperezm/roBDa', 'rubenperezm/Sudoku', 'rubenperezm/ListadosPalabrasRAE', 'rubenperezm/C-Compiler'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      //],
    },
  },
  profile: {
    image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=9qcesMUAAAAJ',
    role: 'Software Engineer & Data Scientist',
    bio: 'I\'m a software developer passionate about solving complex problems. I love contributing to open-source projects that make a real impact. With a strong foundation in Computer Science and Data Analysis, I\'m always eager to learn new technologies and apply innovative solutions.',
  },
  seo: {
    title: 'Rubén Pérez Mercado',
    description: 'Rubén Pérez Mercado - Software Developer Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'rubenperezmercado',
    twitter: 'Ruben___Perez',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '18475298/rubén-pérez', // example: '1/jeff-atwood'
    leetcode: 'perez_mercado',
    skype: '',
    telegram: '',
    website: 'https://rubenperezm.github.io',
    phone: '',
    email: 'rubenpermerc@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1T-tEJGcH2DEtyYjtvBCOlRzK7h_u8-uC/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'CERN',
      position: 'Openlab Summer Student',
      from: 'July 2024',
      to: 'August 2024',
      companyLink: 'https://openlab.cern/news/02-jul-2024/2024-cern-openlab-summer-student-programme-has-started-dont-miss-our-lectures',
      description: [
        'Selected out from over 6660 applicants.',
        'Created Reana JupyterLab, an open-source JupyterLab extension in React and Python to interact with REANA, a reproducible research data analysis platform.',
        'Automated the project’s publishing process to PyPI, the building of Docker images, and the integration of testing using GitHub Actions to streamline CI/CD pipelines.'
      ],
    },
    {
      company: 'University of Granada',
      position: 'Data Analyst',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: 'https://www.ugr.es/',
      description: [
        'Participated as a researcher in the project U-MIND - Understanding Multimodal Misinformation Diffusion.',
        'Analysed 1.5M+ Telegram messages from 90 channels to investigate the spread dynamics of misinformation, focusing on the impact of multimedia content.'
      ]
    },
    {
      company: 'University of Cádiz',
      position: 'Full-stack Developer',
      from: 'October 2021',
      to: 'July 2023',
      companyLink: 'https://www.uca.es/',
      description: [
        'Contributed to two open-source projects in collaboration with the Software Process Improvement & Formal Methods research group (SPI&FM, TIC-195).',
        'Designed and developed a community-based learning platform for the students of the Databases course. Implemented an API REST in Django (Python) and a PWA in NextJS, and successfully deployed the project on a Rocky Linux server.',
        'Enhanced, deployed and maintained a legacy Laravel (PHP) platform to learn SQL, previously created by the SPI&FM research group. It used a NodeJS API connected to an IBM Watson Assistant instance to help the students with the exercises. In the first year, more than 70 students used the platform, and we fetched data from over 2400 attempts (9400+ queries).'
      ]
    }
  ],
  certifications: [
    {
      name: 'Google Cloud Data Analyst Path',
      body: '',
      year: 'January 2024',
      link: 'https://www.cloudskillsboost.google/public_profiles/e7eb279b-aeea-4017-9424-036d3054ecd1'
    },
    {
      name: 'Google Cloud Associate Cloud Engineer Path',
      body: '',
      year: 'January 2024',
      link: 'https://www.cloudskillsboost.google/public_profiles/e7eb279b-aeea-4017-9424-036d3054ecd1'
    },
    {
      name: 'MongoDB Associate Developer',
      body: '',
      year: 'February 2023',
      link: 'https://www.credly.com/earner/earned/badge/2428c15b-8dc9-4501-ae71-6e40ea217559',
    },
    {
      name: 'Cisco CCNA: Introduction to Networks',
      body: '',
      year: 'July 2021',
      link: 'https://www.credly.com/earner/earned/badge/0ee6aee4-0f99-43d9-aa73-071cc279d569'
    },
  ],
  awards: [
    {
      title: 'Departmental Collaboration Scholarship from the Spanish Ministry of Education',
      year: '2022/23',
    },
    {
      title: 'First Place in the IX edition of the Regional Multisite AdaByron Competitive Programming Contest',
      year: '2023',
    },
    {
      title: 'Outstanding Student Award in Computer Science',
      year: '2024',
    },
    {
      title: 'Athenaeum-UCA Chair Award in Engineering and Architecture',
      year: '2024',
    },
  ],
  educations: [
    {
      institution: 'University of Granada · 9.1',
      degree: 'Master\'s Degree in Data Science and Computer Engineering',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'University of Cádiz · 8.83',
      degree: 'Bachelor\'s Degree in Computer Science',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'ChatbotSQL: Agente Conversacional y Plataforma Web para el Aprendizaje de SQL',
      conferenceName: 'XXVII JISBD (2023)',
      journalName: '',
      authors: 'Rubén Pérez-Mercado, Antonio Balderas, Andrés Muñoz, Juan Francisco Cabrera, Manuel Palomo-Duarte, Juan Manuel Dodero',
      link: 'https://www.researchgate.net/publication/374145174_ChatbotSQL_Agente_Conversacional_y_Plataforma_Web_para_el_Aprendizaje_de_SQL',
      description: 'La comprensión de las bases de datos no solo requiere conocimientos técnicos, sino también una capacidad para conceptualizar y organizar información de manera lógica y sistemática, lo cual puede resultar desafiante para muchos estudiantes de informática. Para ayudar al estudiante en el aprendizaje y entrenamiento de SQL, este trabajo presenta la herramienta ChatbotSQL, un agente conversacional que da soporte al estudiante en la resolución de diferentes ejercicios SQL y que le permite trabajar de manera autónoma. ChatbotSQL se presenta en una plataforma web que permite al profesorado definir y distribuir ejercicios en tres niveles de dificultad. Estos ejercicios serán resueltos por los estudiantes con la ayuda del chatbot, permitiéndoles trabajar a su ritmo y proporcionándoles evidencias de su progreso. Esta herramienta ha sido probada en una asignatura de Bases de Datos dos años consecutivos, arrojando evidencias positivas de su utilidad.'
    },
    {
      title: 'ChatbotSQL: Conversational agent to support relational database query language learning',
      conferenceName: '',
      journalName: 'SoftwareX (2023)',
      authors: 'Rubén Pérez-Mercado, Antonio Balderas, Andrés Muñoz, Juan Francisco Cabrera, Manuel Palomo-Duarte, Juan Manuel Dodero',
      link: 'https://doi.org/10.1016/j.softx.2023.101346',
      description: 'SQL is a key programming language for data scientists, but its learning is sometimes challenging, especially if the learner does not have a proper computer science background. This article introduces ChatbotSQL, a conversational agent that aims to support the autonomous learning of the SQL language for database querying. ChatbotSQL proposes exercises and guides about the steps to be taken by the learner in case of doubts, providing customised feedback. ChatbotSQL has been created on top of IBM Watson Assistant and is available in a web platform. Students in a higher education database subject used ChatbotSQL extensively, showing a positive perception of its usefulness in supporting the resolution of complex queries.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
