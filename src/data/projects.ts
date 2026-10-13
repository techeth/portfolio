import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "ai-project-mentor",
    title: "AI Project Mentor",
    shortDescription:
      "An AI-powered project planning application designed to help students and beginner developers transform vague software ideas into structured project blueprints.",
    detailedDescription:
      "AI Project Mentor acts as an interactive engineering lead. It conducts an adaptive interview—asking clarifying questions—to refine requirements, scope features realistically, and produce structured, actionable architecture roadmaps.",
    status: "IN PROGRESS",
    technologies: ["Next.js", "TypeScript", "React", "Google Gemini API"],
    githubUrl: null, // In private development; no fabricated link
    liveDemoUrl: null, // In progress; no fabricated link
    featured: true,
    galaxyPosition: {
      x: 50,
      y: 52,
      size: 76,
      colorTheme: "silver",
    },
    caseStudy: {
      problem:
        "Students and beginner developers frequently struggle to translate vague project ideas into structured architecture and achievable milestones.",
      targetUsers:
        "Computer science students, bootcamp learners, and self-taught developers preparing portfolio projects.",
      proposedSolution:
        "An interactive AI mentoring workflow that conducts an adaptive discovery interview, refining ideas into structured project blueprints.",
      mainFeatures: [
        "Interactive AI mentoring workflow that guides users through project discovery",
        "Adaptive interview that asks clarifying questions to understand project requirements",
        "Planned live project context panel to help users refine their ideas",
        "Realistic project scoping, structured planning, and actionable development roadmaps",
      ],
      technicalArchitecture:
        "Built on Next.js App Router for serverless streaming API endpoints, typed with TypeScript, leveraging Google Gemini API structured output modes for deterministic JSON plan creation.",
      engineeringChallenges: [
        "Maintaining context continuity across multi-turn discovery steps without ballooning token usage",
        "Preventing the model from agreeing to unrealistic feature sets proposed by novice users",
      ],
      decisionsAndTradeoffs: [
        "Single-turn question constraint: Prevents user cognitive overload at the cost of requiring more total interaction rounds",
        "Structured schema enforcement: Eliminates hallucinated API responses but requires strict validation handling",
      ],
      currentStatus:
        "Core interview state engine and prompt architecture currently under development. Repository in private testing.",
      futureImprovements: [
        "GitHub repository scaffolding export",
        "Integration with linear task issue trackers",
      ],
    },
  },
  {
    id: "knowledge-graph-builder",
    title: "Knowledge Graph Builder",
    shortDescription:
      "An exploratory system for extracting entities and visualizing relationships across complex knowledge domains.",
    detailedDescription:
      "Designed to parse unstructured documents, extract key concepts and dependencies, and render interactive multi-dimensional graphs to explore information landscapes.",
    status: "PLANNED",
    technologies: ["Python", "FastAPI", "Neo4j"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: false,
    galaxyPosition: {
      x: 24,
      y: 28,
      size: 52,
      colorTheme: "blue",
    },
    caseStudy: {
      problem:
        "Textbooks and documentation contain dense conceptual networks that are difficult to synthesize through linear reading alone.",
      targetUsers:
        "Students and researchers organizing technical documentation and study materials.",
      proposedSolution:
        "Automated semantic extraction combined with graph database queries to generate queryable concept maps.",
      mainFeatures: [
        "Entity and relationship extraction pipeline",
        "Interactive force-directed graph canvas",
        "Sub-graph pathfinding and concept search",
      ],
      technicalArchitecture:
        "FastAPI backend parsing text into Neo4j graph nodes and edges, served to a responsive canvas UI.",
      engineeringChallenges: [
        "Disambiguating polysemous terminology across technical sub-fields",
      ],
      decisionsAndTradeoffs: [
        "Choosing property graph (Neo4j) over RDF for straightforward developer ergonomics",
      ],
      currentStatus: "Architecture and schema planning phase.",
      futureImprovements: ["Vector similarity overlay on graph clusters"],
    },
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription:
      "A collection of responsive, accessible web applications exploring modern front-end architectures and interfaces.",
    detailedDescription:
      "Hands-on implementations focusing on clean design systems, performance optimization, client-server state boundaries, and accessible user experiences.",
    status: "IN PROGRESS",
    technologies: ["Next.js", "TypeScript", "CSS Modules"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: false,
    galaxyPosition: {
      x: 76,
      y: 26,
      size: 48,
      colorTheme: "ice",
    },
    caseStudy: {
      problem:
        "Balancing expressive cinematic aesthetics with strict accessibility, responsive layout stability, and zero runtime bloat.",
      targetUsers: "Web users, recruiters, and engineering teams.",
      proposedSolution:
        "Component-driven design systems utilizing CSS Modules, native CSS variables, and modern semantic HTML without heavy third-party CSS overhead.",
      mainFeatures: [
        "Zero-dependency custom CSS token system",
        "High-contrast dark monochrome space theme",
        "WCAG-compliant keyboard focus handling and reduced-motion modes",
      ],
      technicalArchitecture:
        "Next.js App Router with server components by default, isolated CSS Modules, and client components for fine-grained interactive state.",
      engineeringChallenges: [
        "Orchestrating responsive layout shifts between complex desktop canvas grids and touch-friendly mobile layouts",
      ],
      decisionsAndTradeoffs: [
        "Vanilla CSS Modules over Tailwind: Maximizes flexibility and reduces generated classes while maintaining strict scoping",
      ],
      currentStatus: "Active production and refinement.",
      futureImprovements: ["Internationalization and theme contrast toggles"],
    },
  },
  {
    id: "research-to-product-ai",
    title: "Research to Product AI",
    shortDescription:
      "Explorations translating machine learning research concepts into practical, deployable microservices.",
    detailedDescription:
      "Bridging the gap between academic AI papers and production-ready code by analyzing model inference performance, quantization, and developer-friendly APIs.",
    status: "PLANNED",
    technologies: ["Python", "PyTorch", "HuggingFace"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: false,
    galaxyPosition: {
      x: 28,
      y: 74,
      size: 44,
      colorTheme: "white",
    },
    caseStudy: {
      problem:
        "Many machine learning papers remain theoretical prototypes without accessible APIs or user-friendly integration points.",
      targetUsers:
        "Engineers looking to consume specialized AI capabilities without managing raw model checkpoints.",
      proposedSolution:
        "Containerized model inference microservices featuring standardized OpenAPI specifications and optimized latency.",
      mainFeatures: [
        "Model quantization and export (ONNX / TensorRT)",
        "Streaming inference endpoints",
        "Automated benchmarking harness",
      ],
      technicalArchitecture:
        "PyTorch and HuggingFace pipelines containerized with Docker and served via high-throughput asynchronous workers.",
      engineeringChallenges: [
        "Managing cold-start times and GPU memory constraints on serverless or budget compute",
      ],
      decisionsAndTradeoffs: [
        "Prioritizing INT8 quantization over FP16: Trade slight precision for significant latency and memory gains",
      ],
      currentStatus: "Conceptual exploration and model evaluation.",
      futureImprovements: ["Batching queue management and telemetry"],
    },
  },
  {
    id: "more-projects",
    title: "More Projects",
    shortDescription:
      "Upcoming experiments in distributed systems, developer tooling, and algorithmic workflows.",
    detailedDescription:
      "Continuous sandbox experiments where theoretical computer science concepts—data structures, compilers, networking—are tested in practical code.",
    status: "EXPLORING",
    technologies: ["Algorithms", "System Design"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: false,
    galaxyPosition: {
      x: 74,
      y: 72,
      size: 42,
      colorTheme: "bronze",
    },
    caseStudy: {
      problem:
        "Continuous skill growth requires practical implementation of fundamental computing paradigms.",
      targetUsers: "Self-driven engineering development.",
      proposedSolution:
        "A structured collection of small, focused utility engines and algorithms.",
      mainFeatures: [
        "Algorithm benchmarks",
        "CLI developer utilities",
        "Distributed consensus prototypes",
      ],
      technicalArchitecture:
        "Polyglot repository with modular unit tests and performance benchmarks.",
      engineeringChallenges: [
        "Simulating network partitions and concurrency edge cases accurately",
      ],
      decisionsAndTradeoffs: [
        "Depth over breadth on individual architectural components",
      ],
      currentStatus: "Continuous experimentation.",
      futureImprovements: ["Public open-source releases"],
    },
  },
];
