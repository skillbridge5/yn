export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const PERSONAL_INFO = {
  name: "Yonas Negese M",
  title: "ERP Expert, Data Scientist & AI Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "yonasnegese250@gmail.com",
  phone: "+251955935455",
  summary: "ERP Implementor and AI Engineer with expertise in Odoo, ERPNext implementation, and optimization. Skilled in leveraging Data, AI, and technology to streamline processes, improve efficiency, and drive digital transformation.",
  socials: {
    linkedin: "https://www.linkedin.com/in/yonas-negese/",
    github: "https://github.com/yonasman",
  }
};

export const EXPERIENCES: Experience[] = [
  {
    company: "AidRigs",
    role: "ERP Expert",
    period: "MAR 2026 - Present",
    description: [
      "USA Remote - Leading ERP implementation and strategic optimization.",
      "Configured Finance, Pos, Inventory, and other core modules.",
    ]
  },
  {
    company: "AddisSystems PLC",
    role: "Odoo Techno-Functional Consultant",
    period: "SEP 2025 - Present",
    description: [
      "Designed, developed, and configured Odoo ERP solutions to streamline business operations.",
      "Built custom Odoo features and workflows while ensuring functional efficiency across modules."
    ]
  },
  {
    company: "SkillBridge IOT",
    role: "Odoo Techno-Functional Instructor",
    period: "SEP 2025 - Present",
    description: [
      "Delivering hands-on training on Odoo functional and technical modules.",
      "Designed practical curricula, real-world projects, and ERP workflows aligned with industry needs.",
      "Mentored learners on Odoo customization and best implementation practices."
    ]
  },
  {
    company: "Afomsoft Technologies PLC",
    role: "Odoo Techno-Functional Consultant",
    period: "FEB 2025 - OCT 2025",
    description: [
      "Developed and optimized Odoo (Community and Enterprise) ERP solutions.",
      "Configured modules and built custom features to improve operational efficiency.",
      "Delivered end-to-end solutions combining functional design and technical development."
    ]
  },
  {
    company: "CDIWORK",
    role: "Microsoft-365 Instructor",
    period: "OCT 2024 - SEP 2025",
    description: [
      "Guiding learners to build real-world solutions with SharePoint, Power Apps, and Power BI.",
      "Training professionals in Microsoft 365 tools and Power Platform."
    ]
  },
  {
    company: "GraceERP Consultancy PLC",
    role: "Odoo Techno-Functional Consultant",
    period: "SEP 2024 - FEB 2025",
    description: [
      "Worked on report generation to provide detailed insights and analytics.",
      "Developed custom Odoo modules to address specific organizational needs.",
      "Engaged in functional consultation to streamline workflows."
    ]
  },
  {
    company: "Beltech Solutions",
    role: "ERPNext Developer/Implementor",
    period: "2026",
    description: [
      "Specialized in ERPNext implementation and optimization.",
      "Configured core modules and streamlined business processes using the ERPNext framework.",
      "Customized custom modules to streamline operations."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "OdooMind AI",
    description: "An AI-powered assistant for Odoo users to create sales orders, purchase orders, and other operations using text prompts or voice commands.",
    tech: ["Odoo", "AI Agents", "API", "Python","RAG"],
    status: ""
  },
  {
    title: "CareCentral RAG Assistant",
    description: "An AI-powered RAG assistant that understands healthcare organization knowledge bases—policies, patient workflows, and records.",
    tech: ["LangChain", "ChromaDB", "Groq", "FastAPI", "Python"],
    status: ""
  }
];

export const SKILLS = {
  erp: ["Odoo Implementation", "ERPNext", "Module Configuration", "Workflow Automation", "Custom Module Development"],
  development: ["Python", "R","PyTorch","XML/QWeb", "FastAPI", "LangChain"],
  ai_data: ["Machine Learning", "Deep Learning", "NLP", "Data Analysis", "AI Agents", "RAG Systems"],
  tools: ["Microsoft 365", "Power BI", "Power Apps","Power Automate", "SharePoint","Excel"],
};

export const EDUCATION: Education[] = [
  {
    institution: "ALX Africa",
    degree: "Data Science",
    period: ""
  },
  {
    institution: "Ready Tensor",
    degree: "Agentic AI Development",
    period: ""
  },
  {
    institution: "GraceERP Consultancy",
    degree: "Odoo ERP Training",
    period: ""
  },
   {
    institution: "University Of The People",
    degree: "Computer Science - USA",
    period: ""
  }
];
