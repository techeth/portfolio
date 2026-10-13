export type SkillCategory =
  | "programming"
  | "webdev"
  | "aiml"
  | "cs"
  | "tools";

export interface SkillCategoryInfo {
  id: SkillCategory;
  label: string;
  color: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  focusArea: string;
  isLearningArea?: boolean;
  // Positioning for desktop constellation (percentage-based coordinates)
  position: {
    x: number; // percentage (0-100)
    y: number; // percentage (0-100)
  };
}
