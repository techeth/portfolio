export type ProjectStatus = "COMPLETED" | "IN PROGRESS" | "PLANNED" | "EXPLORING";

export interface ProjectCaseStudy {
  problem: string;
  targetUsers: string;
  proposedSolution: string;
  mainFeatures: string[];
  technicalArchitecture: string;
  engineeringChallenges: string[];
  decisionsAndTradeoffs: string[];
  currentStatus: string;
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  status: ProjectStatus;
  technologies: string[];
  githubUrl?: string | null;
  liveDemoUrl?: string | null;
  thumbnailUrl?: string;
  caseStudyUrl?: string | null;
  featured: boolean;
  galaxyPosition: {
    x: number; // percentage in galaxy container
    y: number; // percentage in galaxy container
    size: number; // diameter in pixels on desktop
    colorTheme: "silver" | "blue" | "bronze" | "ice" | "white";
  };
  caseStudy?: ProjectCaseStudy;
}
