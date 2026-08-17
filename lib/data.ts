export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string[];
  certificateUrl?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  availability: string;
  bio: string;
  about: string;
  socials: {
    linkedin: string;
    github: string;
    upwork: string;
    indeed: string;
    email: string;
  };
  resumeUrl: string;
  pfpUrl: string;
}

export const profileData: ProfileInfo = {
  name: "Muhammad Muneeb Iqbal",
  title: "Full-Stack Developer",
  location: "Wah Cantonment, Pakistan",
  email: "muneebiq24@gmail.com",
  availability: "Available for full-time & contract opportunities",
  bio: "Full-Stack Developer with expertise in MERN stack and Flutter, building scalable web platforms and cross-platform mobile apps with a strong focus on clean architecture, real-time performance, and user experience.",
  about: "Results-driven MERN Stack developer with a Computer Science degree and hands-on experience shipping real-world full-stack applications. Known for understanding business requirements, not just code, and delivering working features independently with clear communication. Strong background in RESTful API design, real-time architecture (WebSockets/WebRTC), and database optimization.",
  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-muneeb-iqbal-b55138330",
    github: "https://github.com/m-muneeb-iqbal",
    upwork: "https://www.upwork.com/freelancers/~01a657d6b0a6da59ae",
    indeed: "https://profile.indeed.com/p/muhammadmuneebi-h106hfz",
    email: "mailto:muneebiq24@gmail.com",
  },
  resumeUrl: "/Resume-Muhammad-Muneeb-Iqbal.pdf",
  pfpUrl: "/profile.png",
};

export const projectsData: Project[] = [
  {
    id: "aroundyou",
    title: "AroundYou",
    subtitle: "Real-Time Messaging & Calling App",
    description: [
      "Designed and built a scalable Node.js/Express backend handling real-time events, user sessions, and chat room management.",
      "Implemented bidirectional WebSocket communication for low-latency real-time messaging and peer-to-peer audio calling via WebRTC.",
      "Architected RESTful APIs for authentication, user management, and data persistence with MongoDB.",
      "Built modern React frontend to consume backend APIs and display real-time updates seamlessly.",
      "Optimized database queries and implemented efficient session management for high-throughput real-time operations.",
      "Deployed full-stack application on Vercel (frontend) and Render (backend) with a custom domain, maintaining production uptime for real users.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MVC", "Authentication", "RBAC", "WebRTC", "Socket.io", "REST API", "Vercel", "Render", "MongoDB Atlas"],
    liveUrl: "https://aroundyou.online/",
    githubUrl: "https://github.com/m-muneeb-iqbal/AroundYOU-MERN",
    featured: true,
  },
  {
    id: "smart-finance",
    title: "Smart Finance",
    subtitle: "AI-Powered Personal Finance Manager",
    description: [
      "Built budget insights using ARIMA and LSTM machine learning models to analyze income and spending patterns.",
      "Implemented intelligent expense forecasting: LSTM for short-term (3 months) trends and ARIMA for long-term forecasting.",
      "Developed goal-based savings recommendations based on real-time user affordability metrics.",
      "Enabled expense tracking, automatic categorization, secure authentication, and synced transaction history.",
      "Created interactive data visualizations for trends and predictive forecasts in a clean UI.",
    ],
    techStack: ["Python", "Flutter", "MVC", "ARIMA", "LSTM", "Machine Learning", "Data Visualization", "REST APIs"],
    githubUrl: "https://github.com/m-muneeb-iqbal/Finance-Manager",
    featured: true,
  },
];

export const experienceData: Experience[] = [
  {
    id: "o2geeks",
    title: "Full Stack Developer Intern",
    company: "O2 Geeks",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    duration: "June 2023 – November 2023",
    description: [
      "Developed and maintained full-stack web applications using modern frontend and backend technologies, contributing to responsive user interfaces, RESTful APIs, and database integration.",
      "Optimized application performance and resolved bugs to improve system reliability and user experience.",
      "Participated in the complete software development lifecycle, including requirement analysis, version control, testing, deployment, and documentation within an agile development environment.",
    ],
    tags: ["React.js", "Node.js", "RESTful APIs", "Git", "Agile", "Web Development"],
  },
  {
    id: "mightydog-atlanta",
    title: "Business Support System Specialist",
    company: "Mighty Dog Roofing of North Atlanta",
    location: "North Atlanta, United States",
    type: "Part-time (Remote)",
    duration: "June 2024 – Present",
    description: [
      "Managing finances with QuickBooks, AccuLynx, and Roofr and supported project teams with budgeting and resource allocation.",
      "Creating accurate project budgets and estimates that supported competitive bidding.",
      "Conducting financial audits and delivered detailed reporting for executive management.",
    ],
    tags: ["QuickBooks", "AccuLynx", "Roofr", "Financial Auditing", "Cost Control"],
  },
  {
    id: "mightydog-wichita",
    title: "Business Support System Specialist",
    company: "Mighty Dog Roofing of Wichita",
    location: "Wichita, United States",
    type: "Part-time (Remote)",
    duration: "July 2024 – October 2024",
    description: [
      "Supported budgeting and cost control across multiple commercial and residential construction projects.",
      "Coordinated with project managers to improve workflows and operational efficiency.",
      "Created and reviewed accurate project cost estimates.",
    ],
    tags: ["Budgeting", "Project Coordination", "Workflow Optimization", "Reporting"],
  },
  {
    id: "advanced-contractors",
    title: "Business Support System Specialist",
    company: "Advanced Contractors",
    location: "Wichita, United States",
    type: "Part-time (Remote)",
    duration: "December 2024 – January 2025",
    description: [
      "Managed financial and administrative tasks for roofing and contracting projects.",
      "Developed accurate project estimates and monitored project expenditure.",
      "Handled bookkeeping, reconciliation, and reporting in QuickBooks.",
    ],
    tags: ["Bookkeeping", "QuickBooks", "Cost Estimation", "Process Management"],
  },
];

export const educationData: Education[] = [
  {
    id: "comsats",
    degree: "B.S. in Computer Science",
    institution: "COMSATS University Islamabad",
    location: "Islamabad, Pakistan",
    duration: "February 2022 – January 2026",
    grade: "First Division",
    details: "Core focus on Software Engineering, Data Structures & Algorithms, Distributed Systems, Web Technologies, and Machine Learning.",
  },
  {
    id: "usman-public",
    degree: "Intermediate in Pre-Engineering",
    institution: "Usman Public School System",
    location: "Karachi, Pakistan",
    duration: "June 2019 – July 2021",
    grade: "Good Standing",
  },
  {
    id: "akbar-public",
    degree: "Matriculation in Computer Science",
    institution: "Akbar Public School",
    location: "Karachi, Pakistan",
    duration: "June 2017 – July 2019",
    grade: "Good Standing",
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Core Stack",
    skills: ["Node.js", "Express.js", "React.js", "MongoDB", "JavaScript (ES6+)", "Laravel", "Flutter",],
  },
  {
    title: "Backend & Architecture",
    skills: ["RESTful API Design", "WebSockets", "WebRTC", "Socket.io", "MVC Architecture", "API Integration"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase Firestore", "Database Schema Design", "Query Optimization"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Vercel", "Render", "MongoDB Atlas", "Postman", "Caido", "Git", "GitHub",],
  },
  {
    title: "Authentication & Security",
    skills: ["JWT Authentication", "OAuth", "Firebase Authentication", "Access Tokens", "Refresh Tokens", "Role-Based Access Control (RBAC)", "Middleware"],
  },
];

export const certificationsData: Certification[] = [
  {
    id: "udemy-fullstack",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "February 2026",
    description: [
      "Gained hands-on expertise in Full-Stack Development using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed and consumed RESTful APIs to connect frontend and backend efficiently.",
      "Implemented MySQL database management and relational data schema design.",
      "Mastered Git and version control workflows for team collaboration.",
      "Enhanced frontend interactivity with React.js and modern JavaScript standards.",
    ],
    certificateUrl: "/Udemy.pdf",
  },
];
