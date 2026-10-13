export interface JourneyMilestone {
  id: string;
  stageBadge: string;
  title: string;
  description: string;
  status: "COMPLETED" | "CURRENT" | "FUTURE";
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "foundations",
    stageBadge: "FOUNDATIONS",
    title: "Foundations",
    description:
      "Learning programming fundamentals and strengthening my understanding of computer science.",
    status: "COMPLETED",
  },
  {
    id: "building",
    stageBadge: "BUILDING",
    title: "Building",
    description:
      "Turning ideas into software projects and learning through practical implementation.",
    status: "COMPLETED",
  },
  {
    id: "exploring-ai",
    stageBadge: "EXPLORING AI",
    title: "Exploring AI",
    description:
      "Exploring AI application development, LLM integration, and intelligent software systems.",
    status: "CURRENT",
  },
  {
    id: "next-horizon",
    stageBadge: "NEXT HORIZON",
    title: "Next Horizon",
    description:
      "Growing toward a career in AI and software engineering through continuous learning and building.",
    status: "FUTURE",
  },
];
