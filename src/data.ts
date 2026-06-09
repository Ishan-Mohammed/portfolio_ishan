import { Skill, Project, Education, InternshipTask, LeadershipItem, AchievementItem, AIModelLearned } from './types';

export const personalInfo = {
  name: 'Ishan Mohammed',
  title: 'Computer Science Engineering Student',
  subtitle: 'Passionate B.Tech CSE student specializing in Full-Stack Development, Software Engineering, AI, and Blockchain',
  location: 'Pathanapuram, Kollam, Kerala, India',
  email: 'ishanmohammed2222@gmail.com',
  github: 'https://github.com/Ishan-Mohammed',
  linkedin: 'https://www.linkedin.com/in/ishan-mohammed-37596932b',
  portfolioUrl: 'https://ishanportfolio.dev',
  cgpa: '9.11 / 10',
  academicCycle: '2024 – 2028',
  tagline: 'Building impactful digital solutions while continuously exploring emerging technologies.',
  introText: 'Passionate Computer Science Engineering student with strong interests in Full Stack Development, Software Engineering, Artificial Intelligence, and Data Analytics. Dedicated to building impactful digital solutions while continuously exploring emerging technologies.',
  detailedBio: 'I am Ishan Mohammed, a B.Tech Computer Science Engineering student at College of Engineering Perumon, currently pursuing my degree from 2024–2028. I am passionate about software development, web technologies, AI-powered solutions, and problem-solving. My academic journey and project experiences have helped me develop strong technical foundations in programming, application development, and collaborative teamwork. I continuously seek opportunities to learn, innovate, and contribute to meaningful technological solutions.'
};

export const skillsData: Skill[] = [
  // Programming
  { name: 'C', category: 'programming', level: 85 },
  { name: 'Java', category: 'programming', level: 90 },
  { name: 'Python', category: 'programming', level: 88 },
  { name: 'JavaScript', category: 'programming', level: 92 },

  // Frontend
  { name: 'HTML5', category: 'frontend', level: 95 },
  { name: 'CSS3', category: 'frontend', level: 92 },
  { name: 'Bootstrap 5', category: 'frontend', level: 90 },
  { name: 'React.js', category: 'frontend', level: 88 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 82 },
  { name: 'REST APIs', category: 'backend', level: 85 },

  // Database
  { name: 'SQL', category: 'database', level: 85 },
  { name: 'Firebase', category: 'database', level: 84 },

  // Tools
  { name: 'Git', category: 'tools', level: 88 },
  { name: 'GitHub', category: 'tools', level: 90 },
  { name: 'VS Code', category: 'tools', level: 92 },

  // AI Tools
  { name: 'ChatGPT', category: 'ai-tools', level: 95 },
  { name: 'Gemini', category: 'ai-tools', level: 94 },
  { name: 'Claude', category: 'ai-tools', level: 92 },
  { name: 'DeepSeek', category: 'ai-tools', level: 90 },
  { name: 'Mistral', category: 'ai-tools', level: 88 },
  { name: 'Google AI Studio', category: 'ai-tools', level: 90 },

  // Blockchain
  { name: 'Solidity', category: 'blockchain', level: 80 },
  { name: 'Hardhat', category: 'blockchain', level: 78 },
  { name: 'MetaMask', category: 'blockchain', level: 85 }
];

export const projectsData: Project[] = [
  {
    id: 'hospnet',
    title: 'Hospital Network Web Application',
    description: 'A secure and scalable healthcare management platform offering multi-role access control, clinical record keeping, and scheduling systems.',
    detailedDescription: 'Developed a comprehensive, secure hospital management platform designed to streamline clinical administrative activities, enhance Patient Care workflows, and guarantee high data integrity. Configured customizable dashboards for Doctors, Patients, and Admin staff with full authentication layers, digital registration, and health check records organization.',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs', 'SQL'],
    metrics: 'Active Patients & Dr. dash validation',
    status: 'Featured'
  },
  {
    id: 'restomgr',
    title: 'Restaurant Sales & Order Management System',
    description: 'An elegant desktop-backend system constructed to automate table allocations, live ordering operations, and financial invoice generating.',
    detailedDescription: 'Built a robust restaurant operations and order tracking system. Engineered safe database operations for direct sales calculations, bill generations, and live kitchen orders monitoring. Provides actionable daily income analytical breakdowns to support management decision-making.',
    category: 'desktop-ai',
    technologies: ['Java', 'SQL', 'Swing UI', 'JDBC'],
    metrics: 'Integrated inventory & offline sales logic',
    status: 'Completed'
  },
  {
    id: 'msmeportal',
    title: 'MSME National Portal (Hackathon)',
    description: 'Government-oriented onboarding and scoring workflow portal built for Indian MSMEs with automated metrics and AI engines.',
    detailedDescription: 'Designed and architected a government-class web platform for MSME verification, funding assistance analysis, and smart analytics during a college-level hackathon. Integrates AI scoring matrices to cross-examine financial metrics and auto-evaluate business growth metrics, reducing onboarding delays by up to 60%.',
    category: 'web',
    technologies: ['React.js', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'AI Integrations'],
    metrics: 'National Portal Prototype / Finalist',
    status: 'Hackathon'
  },
  {
    id: 'gamifiedreward',
    title: 'Gamified Daily Life Reward Platform',
    description: 'A decentralized blockchain productivity tracker rewarding daily item completions using Web3 Smart Contracts.',
    detailedDescription: 'Conceived and implemented a web3 productivity platform that gamifies daily physical or mental goals. Users commit on-chain goals and earn custom utility tokens upon completion validated by cryptographic signatures and secured parameters in EVM Smart Contracts.',
    category: 'blockchain',
    technologies: ['Solidity', 'Hardhat', 'MetaMask', 'Firebase', 'JavaScript', 'Ethers.js'],
    metrics: 'Solidity/EVM Active contract deployment',
    status: 'Featured'
  }
];

export const educationData: Education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering',
  school: 'College of Engineering Perumon',
  duration: '2024 – 2028',
  score: '9.11 / 10',
  location: 'Perumon, Kollam, Kerala'
};

export const internshipTasks: InternshipTask[] = [
  {
    id: 1,
    title: 'AI Model Research & Comparison',
    description: 'Conducted comprehensive engineering and logical evaluations across tier-1 LLMs for strategic company deployment.',
    details: [
      'Engineered detailed benchmark comparison matrices covering speed, accuracy, and output relevance.',
      'Authored meticulous structural reviews highlighting the strengths and functional limits of GPT-4o, Claude 3.5, Gemini 1.5, DeepSeek V3, and Mistral.',
      'Sourced token usage pricing frameworks and performance-cost recommendation reports for business solutions.'
    ],
    skillsGained: ['Research & Analysis', 'AI Capability Benchmarking', 'Cost Evaluation'],
    metric: 'Compared 5 Major LLM Architectures'
  },
  {
    id: 2,
    title: 'AI Website Content Writing',
    description: 'Created user-centric website copies and interactive conversion copy strategies using modern LLM prompt paradigms.',
    details: [
      'Wrote engaging layout texts across key marketing elements: Home copies, About, Plans, FAQ, and detailed Enrollment menus.',
      'Established target communication guidelines for complex customer inquiries.',
      'Leveraged generative models with styled prompting to curate search engine optimized copy.'
    ],
    skillsGained: ['UX Content Strategy', 'Copywriting & Marketing', 'Advanced Prompt Engineering'],
    metric: '6 Dynamic Page Outlines Formulated'
  },
  {
    id: 3,
    title: 'Asset Extraction & Organization',
    description: 'Managed corporate media properties by indexing, cleaning, and packing branding resources.',
    details: [
      'Extracted raw vector drawings, illustrations, and photographic layout slides.',
      'Built a structured enterprise-wide organization structure with automated naming conventions.',
      'Created optimized and compressed offline distribution repositories.'
    ],
    skillsGained: ['Branding Asset Management', 'Media Content Formatting', 'Productivity Operations'],
    metric: '20+ Brand Elements Synthesized'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website Development',
    description: 'Architected and built a highly-responsive portfolio demonstrating computer science rigor and project achievements using AI-assisted programming tools.',
    details: [
      'Coded visual user interface segments optimized for smooth interaction metrics.',
      'Constructed modular components following proper state updates and clean CSS styling grids.',
      'Crafted accessible, dark-mode focused layouts utilizing high-contrast accents.'
    ],
    skillsGained: ['Modern React & Tailwind Development', 'Interactive UX design', 'Personal Brand Strategy'],
    metric: '100% Mobile & Desktop UI responsiveness'
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    role: 'Event Co-Chair',
    organization: 'Computer Society of India (CSI) Trivandrum Chapter',
    details: 'Co-managed regional workshops, technical talks, and hackathons coordinating with standard industry experts and organizing bodies, improving overall participation metrics.',
    badge: 'Co-Chair'
  },
  {
    role: 'Documentation Head',
    organization: 'CSI Student Branch',
    details: 'Pioneered editorial standardizations, created comprehensive event records, published reports, and formatted promotional contents for student chapter activities.',
    badge: 'Head of Documentation'
  },
  {
    role: 'Active Volunteer',
    organization: 'TinkerHub CEP',
    details: 'Spearheaded open-source coding drives, technical peer-to-peer sharing circles, and beginner-level workshops for computer programming frameworks.',
    badge: 'Community Core'
  },
  {
    role: 'Documentation Team member',
    organization: 'Google Developer Groups (GDG) CEP',
    details: 'Collaborated on organizing DevFest segments, compiling speaker slides, drafting post-event newsletters, and managing logistics pipelines.',
    badge: 'Team Lead'
  },
  {
    role: 'Mentor & Organizer',
    organization: 'College Technical & Cultural Fest',
    details: 'Provided technical guidance on Git/GitHub workflow, HTML/JS debugging, and concept ideation arrays during college-level hackathons and technical events.',
    badge: 'Mentor'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Winner of Zyra Industrial Hackathon',
    description: 'Won the top prize for conceptualizing and developing an automated industrial system monitoring app.',
    category: 'Industrial Win',
    meta: '1st Place'
  },
  {
    title: 'Active Hackathon Participant',
    description: 'Collaborated with dynamic engineering teams to conceptualize and assemble prototype utilities under rigid deadlines in several college and community hackathons.',
    category: 'Competition',
    meta: 'Competitor'
  },
  {
    title: 'Prize Winner in Multiple Ideation Events',
    description: 'Recognized for top pitches proposing innovative answers for sustainable resource distributions, smart-traffic loops, and tech-driven agriculture.',
    category: 'Innovation',
    meta: 'Top Finalist'
  },
  {
    title: 'Experienced Mentor for College Hackathons',
    description: 'Instructed junior groups and peer programmers on coding workflows, repository systems, and rapid web prototyping methodologies.',
    category: 'Leadership',
    meta: 'Community'
  },
  {
    title: 'Event Management & Leadership Roles',
    description: 'Successfully coordinated five technical seminars, hands-on masterclasses, and coding bootcamps involving up to 200+ students.',
    category: 'Coordination',
    meta: 'Executive'
  }
];

export const aiLearningJourney: AIModelLearned[] = [
  {
    name: 'Google Gemini',
    description: 'Leveraged for multimodal research and developer environment integrations. Invaluable during coding sprints and full-stack component modeling.',
    learningOutcome: 'Mastered long-context window file analysis, code documentation generation, and rapid schema building utilizing Google AI Studio.',
    tags: ['Multimodal', 'Long Context', 'Google AI Studio'],
    sentiment: 'Primary Development Companion'
  },
  {
    name: 'Claude (Anthropic)',
    description: 'Used extensively for writing elegant, highly structural, and secure JavaScript algorithms and complex layout compositions.',
    learningOutcome: 'Acquired advanced coding practices, sophisticated state machine structures, and precise system documentation outlines.',
    tags: ['Logical Reasoning', 'Interactive Prototypes', 'Code Elegance'],
    sentiment: 'Refined Code Architect'
  },
  {
    name: 'GPT-4o (OpenAI)',
    description: 'Applied for general logical debugging, project brainstorming sessions, and rapid task checklist generation.',
    learningOutcome: 'Practiced system analysis patterns, prompt engineering concepts, and comprehensive user story creations.',
    tags: ['General Problem Solving', 'Prompt Optimization', 'Conversational AI'],
    sentiment: 'Versatile Co-Pilot'
  },
  {
    name: 'DeepSeek',
    description: 'Explored deep mathematical reasoning, complex database structures, and high-performance querying formats.',
    learningOutcome: 'Understood advanced reasoning-trace mechanisms, code compilation efficiency, and specialized query planning.',
    tags: ['Reasoning model', 'Efficient Queries', 'Math/Code Logic'],
    sentiment: 'Algorithm Brainstormer'
  },
  {
    name: 'Mistral AI',
    description: 'Researched open-weights deployment mechanisms, local execution profiles, and small parameters custom tuning options.',
    learningOutcome: 'Acquired theoretical knowledge regarding local host server endpoints, quantization configurations, and offline AI execution models.',
    tags: ['Open weights', 'Local Execution', 'Quantization'],
    sentiment: 'Local Host Explorer'
  }
];
