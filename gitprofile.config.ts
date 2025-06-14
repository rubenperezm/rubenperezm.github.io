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
        projects: ['vre-hub/reana-jupyterlab-extension', 'rubenperezm/ChatbotSQL', 'rubenperezm/roBDa', 'rubenperezm/Sudoku', 'rubenperezm/pystrukts', 'rubenperezm/C-Compiler'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
      'https://drive.google.com/file/d/1pZ8wyH2IUm584NnEYIa0Bs7cfxpTQoBE/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Real time',
    'Distributed Systems',
  ],
  experiences: [
    {
      company: 'ACOBUR',
      position: 'Software Engineer',
      from: 'February 2025',
      to: 'April 2025',
      companyLink: 'https://www.acobur.es/en/',
      description: [
        'Contributed to the development of a system with RAGs and AI agents integration, taking full ownership of key components.',
        'Developed a tender recommendation system using translations and synonyms of user keywords, leveraging hybrid search with Elasticsearch and FastAPI.',
        'Built user interfaces in React for interaction with AI systems.'
      ],
    },
    {
      company: 'CERN',
      position: 'Openlab Summer Student',
      from: 'July 2024',
      to: 'August 2024',
      companyLink: 'https://openlab.cern/news/02-jul-2024/2024-cern-openlab-summer-student-programme-has-started-dont-miss-our-lectures',
      description: [
        'Selected out of over 6660 applicants.',
        'Created Reana JupyterLab, an open-source JupyterLab extension in React and Python to interact with REANA, a reproducible research data analysis platform. It is currently being used by CERN’s Virtual Research Environment.',
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
      name: 'GitHub Foundations',
      body: '',
      year: 'Feb 2025',
      link: 'https://www.credly.com/badges/95860384-9acf-4c57-8dee-4221c2874dcd'
    },
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
      link: 'https://www.credly.com/badges/2428c15b-8dc9-4501-ae71-6e40ea217559/public_url',
    },
    {
      name: 'Cisco CCNA: Introduction to Networks',
      body: '',
      year: 'July 2021',
      link: 'https://www.credly.com/badges/0ee6aee4-0f99-43d9-aa73-071cc279d569/public_url'
    },
  ],
  awards: [
    {
      title: 'Athenaeum-UCA Chair Award in Engineering and Architecture',
      year: '2024',
    },
    {
      title: 'Outstanding Student Award in Computer Science',
      year: '2024',
    },
    {
      title: 'First Place in the IX edition of the Regional Multisite AdaByron Competitive Programming Contest',
      year: '2023',
    },
    {
      title: 'Departmental Collaboration Scholarship from the Spanish Ministry of Education',
      year: '2022/23',
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
      title: 'Data discovery, analysis and reproducibility in Virtual Research Environments',
      conferenceName: '',
      journalName: 'arXiv preprint (2025)',
      authors: 'E. García-García, G. Guerrieri, R. Pérez-Mercado, M.R. Zengel, G. Skorobogatov, H. González-Labrador, X. Espinal-Curull',
      link: 'https://doi.org/10.48550/arXiv.2503.02483',
      description: 'During the ESCAPE project, a pilot analysis facility was developed with a bottom-up approach, in collaboration with all the project partners. As a result, the CERN Virtual Research Environment (VRE) initiative proposes a workspace that facilitates data access from the ESCAPE Data Lake, managed by Rucio, a data management framework, and supports interactive analysis via Jupyter notebooks. The facility offers custom software stacks and access to CVMFS, and connects to local data processing resources through REANA, an open-source framework developed by CERN IT for reanalysis and reproducibility. The CERN VRE deploys an instance of REANA, allowing users to utilise its features together with the analysis facility\'s services. Integrating heterogeneous services with a unified interface significantly eases the user experience. Furthermore, in line with the ESCAPE Open Collaboration, the development of open source tools that can be leveraged by different physics communities with similar analysis strategies, laying the foundation of common lifecycle analysis practices. Therefore, in order to foster accessibility, as well as interactivity, reproducibility and data preservation to more complex infrastructure services, the development of user-friendly middleware should be prioritized. This contribution focuses on the connection of REANA and Zenodo to the CERN Virtual Research Environment\'s interface through Jupyter extensions. The development of these extensions makes it possible to use the Virtual Research Environment as a single workspace to enhance the lifecycle of research analysis: from data discovery and data access, through interactive analysis and offload to computing resources, to reproducibility and preservation of results.'
},
    {
      title: 'Pytopicgram: A library for data extraction and topic modeling from Telegram channels',
      conferenceName: '',
      journalName: 'SoftwareX (2025)',
      authors: 'J. Gómez-Romero, J. Cantón Correa, R. Pérez Mercado, F. Prados Abad, M. Molina-Solana, W. Fajardo',
      link: 'https://doi.org/10.48550/arXiv.2502.04882',
      description: 'Telegram is a popular platform for public communication, generating large amounts of messages through its channels. pytopicgram is a Python library that helps researchers collect, organize, and analyze these Telegram messages. The library offers key features such as easy message retrieval, detailed channel information, engagement metrics, and topic identification using advanced modeling techniques. By simplifying data extraction and analysis, pytopicgram allows users to understand how content spreads and how audiences interact on Telegram. This paper describes the design, main features, and practical uses of \pytopicgram, showcasing its effectiveness for studying public conversations on Telegram.'
    },
    {
      title: 'Connecting REANA and the CERN-VRE: a JupyterLab Extension Middleware',
      conferenceName: 'CERN Openlab Lightning Talks (2024)',
      journalName: '',
      authors: 'Rubén Pérez-Mercado, Enrique García-García, Giovanni Guerrieri',
      link: 'https://zenodo.org/records/13847614',
      description: 'In modern scientific research, preserving and reproducing analyses and results is crucial. The data gathered by experiments is shared among international collaborations and is analysed with software in continuous development, complicating the tasks of maintaining consistency and robustness. Within the ESCAPE and EOSC Future projects, an analysis facility was developed using a collaborative, bottom-up approach between all project partners. This initiative led to the CERN Virtual Research Environment, a platform that integrates several key components to streamline data analysis. It provides access to the ESCAPE Data Lake infrastructure through the CERN-developed data management framework (Rucio), and incorporates REANA – an open-source tool designed by CERN that focuses on ensuring result reproducibility and facilitating re-analysis. This contribution introduces Reana JupyterLab, a JupyterLab extension that integrates REANA into any JupyterHub-based environment, such as the CERN Virtual Research Environment. This extension allows the users to connect to any REANA instance, display their workflows, run new analysis and download data and results to the remote environment. The accessibility for non-expert users is ensured by providing a plug-and-play graphical interfaces.'
    },
    {
      title: 'ChatbotSQL: Conversational agent to support relational database query language learning',
      conferenceName: '',
      journalName: 'SoftwareX (2023)',
      authors: 'R. Pérez-Mercado, A. Balderas, A. Muñoz, J.F. Cabrera, M. Palomo-Duarte, J.M. Dodero',
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
