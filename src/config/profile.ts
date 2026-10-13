/**
 * AMIT.OS — Centralized Profile & Contact Configuration
 * Single Source of Truth for Amit Kumar's Portfolio & Resume
 */

export interface EducationInfo {
  degree: string;
  branch: string;
  specialization: string;
  institution: string;
  location: string;
  duration: string;
}

export interface FeaturedProjectInfo {
  name: string;
  technologies: string[];
  description: string;
  details: string[];
  githubUrl?: string | null;
}

export interface ProfileConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  careerObjective: string;
  summary: string;
  education: EducationInfo;
  areasOfInterest: string[];
  featuredProject: FeaturedProjectInfo;
}

export const PROFILE_CONFIG: ProfileConfig = {
  name: "Amit Kumar",
  title: "Aspiring AI Engineer | Software Developer | Full-Stack Developer",
  tagline: "Engineering intelligence. Building what comes next.",
  location: "Vadodara, Gujarat, India",
  email: "amitkumar19042006@gmail.com",
  githubUrl: "https://github.com/techeth",
  linkedinUrl: "https://www.linkedin.com/in/amit-kumar-6b7411395/",
  resumePath: "/resume.pdf",

  careerObjective:
    "To become an AI Engineer who builds intelligent, reliable, and useful technology products. My goal is to combine software engineering, artificial intelligence, and product thinking to create applications that address meaningful real-world challenges.",

  summary:
    "Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Parul University. Passionate about building intelligent applications, AI-powered tools, and practical software solutions that solve real-world problems. Interested in AI engineering, full-stack development, and product development, with a focus on transforming ideas into functional, user-friendly applications. Continuously developing technical skills through programming, independent projects, and hands-on experimentation with modern development tools.",

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "Parul University",
    location: "Vadodara, Gujarat, India",
    duration: "2025–2029",
  },

  areasOfInterest: [
    "Artificial Intelligence and Machine Learning",
    "AI Agents and Intelligent Assistants",
    "Full-Stack Web Development",
    "Software Engineering",
    "Developer Tools and Productivity Applications",
    "Hackathons and Product Development",
  ],

  featuredProject: {
    name: "AI Project Mentor",
    technologies: ["Next.js", "TypeScript", "React", "Google Gemini API"],
    description:
      "An AI-powered project planning application designed to help students and beginner developers transform vague software ideas into structured project blueprints.",
    details: [
      "Designed an interactive AI mentoring workflow that guides users through project discovery.",
      "Developed the concept of an adaptive interview that asks clarifying questions to understand project requirements.",
      "Planned a live project context panel to help users refine their ideas.",
      "Focused on realistic project scope, structured planning, and actionable development roadmaps.",
    ],
    githubUrl: null, // Private development repository
  },
};
