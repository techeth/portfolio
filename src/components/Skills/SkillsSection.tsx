"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { SkillCategory } from "@/types/skills";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");
  const [selectedSkillId, setSelectedSkillId] = useState<string>("python");

  const selectedSkill = SKILLS.find((s) => s.id === selectedSkillId) || SKILLS[0];

  const handleCategorySelect = (categoryId: SkillCategory | "all") => {
    setSelectedCategory(categoryId);
    if (categoryId !== "all") {
      const firstSkill = SKILLS.find((s) => s.category === categoryId);
      if (firstSkill) {
        setSelectedSkillId(firstSkill.id);
      }
    }
  };

  const getCategoryColor = (category: SkillCategory) => {
    const found = SKILL_CATEGORIES.find((c) => c.id === category);
    return found ? found.color : "#ffffff";
  };

  const getCategoryLabel = (category: SkillCategory) => {
    const found = SKILL_CATEGORIES.find((c) => c.id === category);
    return found ? found.label : category;
  };

  return (
    <section id="skills" className={styles.skillsSection} aria-label="Technical Skills Constellation">
      <div className={styles.sectionContainer}>
        <div className={styles.mainLayout}>
          {/* LEFT COLUMN: INTRODUCTION & CATEGORIES */}
          <div className={styles.leftColumn}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>SKILLS</span>
            </div>

            <h2 className={styles.heading}>My Technical Constellation</h2>

            <p className={styles.description}>
              Technologies I work with to build, learn, and create.
            </p>

            {/* Category Filter Panel */}
            <div className={styles.categoryPanel}>
              <span className={styles.categoryTitle}>Filter Constellation</span>
              <div className={styles.categoryList} role="group" aria-label="Technology Domains">
                <button
                  type="button"
                  className={`${styles.categoryBtn} ${selectedCategory === "all" ? styles.activeCategory : ""}`}
                  onClick={() => handleCategorySelect("all")}
                  aria-pressed={selectedCategory === "all"}
                >
                  <span
                    className={styles.categoryDot}
                    style={{ backgroundColor: "#ffffff" }}
                    aria-hidden="true"
                  />
                  <span>All Technologies</span>
                </button>

                {SKILL_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`${styles.categoryBtn} ${isActive ? styles.activeCategory : ""}`}
                      onClick={() => handleCategorySelect(cat.id)}
                      aria-pressed={isActive}
                    >
                      <span
                        className={styles.categoryDot}
                        style={{ backgroundColor: cat.color }}
                        aria-hidden="true"
                      />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inspect Detail Card */}
            <div
              className={styles.skillInspectCard}
              role="region"
              aria-label="Selected skill details"
            >
              <div className={styles.inspectHeader}>
                <span className={styles.inspectName}>{selectedSkill.name}</span>
                <span
                  className={styles.inspectBadge}
                  style={{ borderColor: getCategoryColor(selectedSkill.category) }}
                >
                  {getCategoryLabel(selectedSkill.category)}
                </span>
              </div>

              <p className={styles.inspectFocus}>{selectedSkill.focusArea}</p>

              {selectedSkill.isLearningArea && (
                <span className={styles.learningNotice}>
                  <span>✦</span>
                  <span>Active Learning &amp; Exploration Focus</span>
                </span>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: CONSTELLATION VISUAL */}
          <div
            className={styles.constellationWrapper}
            role="region"
            aria-label="Interactive Technical Constellation"
          >
            {/* Orbital Line Paths (SVG) */}
            <svg
              className={styles.constellationSvg}
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer orbit */}
              <ellipse
                cx="250"
                cy="250"
                rx="220"
                ry="180"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="3 5"
                transform="rotate(-10 250 250)"
              />
              {/* Middle orbit */}
              <ellipse
                cx="250"
                cy="250"
                rx="155"
                ry="125"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1"
                strokeDasharray="4 4"
                transform="rotate(15 250 250)"
              />
              {/* Inner orbit */}
              <ellipse
                cx="250"
                cy="250"
                rx="90"
                ry="75"
                stroke="rgba(255, 255, 255, 0.16)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            </svg>

            {/* Central Celestial Sphere with Code Symbol */}
            <div className={styles.centralCore} aria-hidden="true">
              <div className={styles.coreRing} />
              <span className={styles.coreSymbol}>&lt;/&gt;</span>
            </div>

            {/* Technology Nodes */}
            {SKILLS.map((skill) => {
              const isSelected = skill.id === selectedSkillId;
              const isDimmed =
                selectedCategory !== "all" && skill.category !== selectedCategory;
              const categoryColor = getCategoryColor(skill.category);

              return (
                <button
                  key={skill.id}
                  type="button"
                  className={`${styles.skillNode} ${isSelected ? styles.selectedNode : ""} ${
                    isDimmed ? styles.dimmed : ""
                  }`}
                  style={{
                    left: `${skill.position.x}%`,
                    top: `${skill.position.y}%`,
                  }}
                  onClick={() => setSelectedSkillId(skill.id)}
                  aria-label={`${skill.name} (${getCategoryLabel(skill.category)})`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={styles.nodeDot}
                    style={{
                      backgroundColor: isSelected ? "#030507" : categoryColor,
                      boxShadow: isSelected
                        ? "none"
                        : `0 0 8px ${categoryColor}`,
                    }}
                    aria-hidden="true"
                  />
                  <span className={styles.nodeText}>{skill.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
