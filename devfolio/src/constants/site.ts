export const siteConfig = {
  name: "Sajimithan Pathmanathan",
  title: "Sajimithan Pathmanathan | Software Engineer Intern",
  description: "Information Technology and Management undergraduate at the University of Moratuwa with strong foundations in software engineering and OOP. Focused on building clean, reliable solutions using React, Spring Boot, Node.js and more.",
  url: "https://sajimithan.dev",
  ogImage: "https://sajimithan.dev/og.jpg",
  profileImage: "/profile.jpg",
  links: {
    github: "https://github.com/Sajimithan",
    linkedin: "https://linkedin.com/in/sajimithan-pathmanathan",
    twitter: "https://twitter.com/sajimithan",
  },
  contact: {
    email: "sajimithan@gmail.com",
    phone: "+94 77 118 3109",
    location: "Moratuwa, Sri Lanka",
  },
  skills: [
    "JavaScript", "TypeScript", "Python", "Java", "C",
    "React.js", "Next.js", "React Native", "Angular",
    "Node.js", "Express", "Spring Boot", "FastAPI", "Laravel",
    "PostgreSQL", "MongoDB", "MySQL",
    "Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Terraform"
  ],
  projects: [
    {
      title: "Ceylonify",
      description: "A mobile-first tourism platform integrating Google Maps and AI-driven recommendations.",
      tags: ["React Native", "NestJS", "PostgreSQL", "AI"],
      link: "https://github.com/Sajimithan",
      demo: "",
    },

    {
      title: "Revamp",
      description: "Employee management system with role-based access, JWT security, and Docker containerization.",
      tags: ["Spring Boot", "React", "MongoDB", "Docker"],
      link: "https://github.com/Sajimithan/Revamp.git",
    },
    {
      title: "SteamNoodles",
      description: "AI-powered feedback platform using microservices, LLM pipeline, and Kubernetes orchestration.",
      tags: ["React", "FastAPI", "PostgreSQL", "Kubernetes"],
      link: "https://github.com/Sajimithan/steamnoodles-feedback-agent-Sajimithan.git",
    },
    {
      title: "Translation Inventory Tool",
      description: "Client-facing MERN + Python NLP solution for scalable translation inventory management.",
      tags: ["MERN", "Python", "NLP", "DevOps"],
      link: "https://github.com/Sajimithan",
    },
    {
      title: "MEDIconnect",
      description: "Healthcare management system with an AI symptom checker module.",
      tags: ["Laravel", "MySQL", "Docker", "CI/CD"],
      link: "https://github.com/Sajimithan/MediConnect",
    },
  ],
  experience: [
    {
      company: "Dreamspace Academy",
      location: "Batticaloa, Sri Lanka",
      role: "Makerspace Trainer",
      period: "May 2019 - Jun 2020",
      description: "Led hands-on training sessions and communicated technical concepts clearly to diverse learners; supported structured learning and documentation.",
    },
    {
      company: "NTMI",
      location: "Batticaloa, Sri Lanka",
      role: "Data Processing Trainee",
      period: "Feb 2022 - Aug 2022",
      description: "Performed data processing and entry tasks with strong attention to detail; maintained structured records supporting timely reporting and operational accuracy.",
    },
  ],
  education: [
    {
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      degree: "BSc (Hons) In Information Technology and Management",
      period: "Mar 2023 - Present",
    },
    {
      institution: "CIMA",
      location: "",
      degree: "Operational Level (Reading)",
      period: "Aug 2024 - Present",
    },
  ],
};



export type SiteConfig = typeof siteConfig;
