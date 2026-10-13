import { SkillCategoryInfo, SkillItem } from "@/types/skills";

export const SKILL_CATEGORIES: SkillCategoryInfo[] = [
  { id: "programming", label: "Programming Languages", color: "#60a5fa" },
  { id: "webdev", label: "Web Development", color: "#38bdf8" },
  { id: "aiml", label: "AI & Machine Learning", color: "#f472b6" },
  { id: "cs", label: "Computer Science", color: "#a78bfa" },
  { id: "tools", label: "Developer Tools", color: "#34d399" },
];

export const SKILLS: SkillItem[] = [
  // --- PROGRAMMING LANGUAGES ---
  {
    id: "python",
    name: "Python",
    category: "programming",
    focusArea: "Core language for algorithmic logic, data processing, and AI experimentation.",
    position: { x: 50, y: 12 },
  },
  {
    id: "cpp",
    name: "C++",
    category: "programming",
    focusArea: "Object-oriented programming, data structures, and algorithmic problem solving.",
    position: { x: 74, y: 16 },
  },
  {
    id: "c",
    name: "C",
    category: "programming",
    focusArea: "Low-level systems programming principles and memory management fundamentals.",
    position: { x: 88, y: 28 },
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
    focusArea: "Robust object-oriented development, modular design, and platform independence.",
    position: { x: 92, y: 44 },
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
    focusArea: "Dynamic web scripting, event-driven programming, and modern ES6+ paradigms.",
    position: { x: 82, y: 58 },
  },

  // --- WEB DEVELOPMENT ---
  {
    id: "html",
    name: "HTML",
    category: "webdev",
    focusArea: "Semantic document structure and web accessibility standards.",
    position: { x: 76, y: 76 },
  },
  {
    id: "css",
    name: "CSS",
    category: "webdev",
    focusArea: "Responsive layouts, custom property systems, animations, and modular styling.",
    position: { x: 88, y: 84 },
  },
  {
    id: "reactjs",
    name: "React.js",
    category: "webdev",
    focusArea: "Component-based architecture, unidirectional data flow, and modern React hooks.",
    position: { x: 64, y: 88 },
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "webdev",
    focusArea: "App Router architecture, React Server Components, and full-stack web integration.",
    position: { x: 50, y: 92 },
  },

  // --- AI & MACHINE LEARNING ---
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "aiml",
    focusArea: "Intelligent systems, generative modeling, and autonomous agent architectures.",
    position: { x: 26, y: 18 },
  },
  {
    id: "ml-fundamentals",
    name: "Machine Learning Fundamentals",
    category: "aiml",
    focusArea: "Core algorithmic concepts, evaluation metrics, and supervised/unsupervised learning.",
    position: { x: 14, y: 34 },
  },
  {
    id: "ai-app-dev",
    name: "AI-Powered Application Development",
    category: "aiml",
    focusArea: "Building intelligent applications combining LLM integration with production UI/UX.",
    position: { x: 18, y: 52 },
  },

  // --- COMPUTER SCIENCE ---
  {
    id: "dsa",
    name: "Data Structures and Algorithms",
    category: "cs",
    focusArea: "Efficiency analysis, arrays, linked lists, trees, graphs, and algorithmic complexity.",
    position: { x: 14, y: 70 },
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "cs",
    focusArea: "Logical reasoning, competitive coding patterns, and analytical decomposition.",
    position: { x: 26, y: 84 },
  },

  // --- DEVELOPER TOOLS ---
  {
    id: "git",
    name: "Git",
    category: "tools",
    focusArea: "Distributed version control, branching workflows, and commit history management.",
    position: { x: 38, y: 74 },
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    focusArea: "Remote repository hosting, issue tracking, collaboration, and open-source contributions.",
    position: { x: 34, y: 90 },
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    category: "tools",
    focusArea: "Primary development environment, multi-language tooling, extensions, and debugging.",
    position: { x: 44, y: 78 },
  },
];
