"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/project";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("ai-project-mentor");
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  const selectedProject =
    PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCaseStudyOpen) {
        setIsCaseStudyOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCaseStudyOpen]);

  const getThemeClass = (theme: Project["galaxyPosition"]["colorTheme"]) => {
    switch (theme) {
      case "silver":
        return styles.themeSilver;
      case "blue":
        return styles.themeBlue;
      case "ice":
        return styles.themeIce;
      case "white":
        return styles.themeWhite;
      case "bronze":
        return styles.themeBronze;
      default:
        return styles.themeSilver;
    }
  };

  return (
    <section id="projects" className={styles.projectsSection} aria-label="Projects Showcase">
      <div className={styles.sectionContainer}>
        <div className={styles.mainLayout}>
          {/* LEFT COLUMN: INTRODUCTION */}
          <div className={styles.leftColumn}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>PROJECTS</span>
            </div>

            <h2 className={styles.heading}>My Project Galaxy</h2>

            <p className={styles.description}>
              Each project is a world of its own. Built with curiosity,
              powered by technology, and driven by real problems.
            </p>

            <button
              type="button"
              className={styles.viewAllBtn}
              onClick={() => {
                const nextIndex = (PROJECTS.findIndex((p) => p.id === selectedProjectId) + 1) % PROJECTS.length;
                setSelectedProjectId(PROJECTS[nextIndex].id);
              }}
              aria-label="Cycle to next project"
            >
              <span>Explore Next Planet</span>
              <span className={styles.btnArrow} aria-hidden="true">→</span>
            </button>
          </div>

          {/* CENTER COLUMN: INTERACTIVE GALAXY ORBIT */}
          <div
            className={styles.centerGalaxy}
            role="tablist"
            aria-label="Project Galaxy Planets"
          >
            {/* Orbital Paths (SVG Overlay) */}
            <svg
              className={styles.orbitSvg}
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <ellipse
                cx="250"
                cy="250"
                rx="210"
                ry="130"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                strokeDasharray="3 4"
                transform="rotate(-15 250 250)"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="150"
                ry="90"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="1"
                strokeDasharray="4 4"
                transform="rotate(20 250 250)"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="85"
                ry="55"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            </svg>

            {/* Clickable Planets */}
            {PROJECTS.map((project) => {
              const isSelected = project.id === selectedProjectId;
              const themeClass = getThemeClass(project.galaxyPosition.colorTheme);

              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`project-panel-${project.id}`}
                  className={`${styles.planetNode} ${isSelected ? styles.selected : ""}`}
                  style={{
                    top: `${project.galaxyPosition.y}%`,
                    left: `${project.galaxyPosition.x}%`,
                  }}
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <span
                    className={`${styles.planetSphere} ${themeClass}`}
                    style={{
                      width: `${project.galaxyPosition.size}px`,
                      height: `${project.galaxyPosition.size}px`,
                    }}
                  />
                  <span className={styles.planetLabel}>{project.title}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: FEATURED / SELECTED PROJECT PANEL */}
          <div
            id={`project-panel-${selectedProject.id}`}
            role="tabpanel"
            className={styles.rightPanel}
            aria-label={`${selectedProject.title} details`}
          >
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <span className={styles.featuredBadge}>
                  {selectedProject.featured ? "⭐ Featured Project" : "🪐 Selected World"}
                </span>
                <span className={styles.statusPill}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  <span>{selectedProject.status}</span>
                </span>
              </div>

              <h3 className={styles.projectTitle}>{selectedProject.title}</h3>

              <p className={styles.projectDesc}>{selectedProject.shortDescription}</p>

              {/* Technologies */}
              <div className={styles.techList} aria-label="Used technologies">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.cardActions}>
                {selectedProject.caseStudy && (
                  <button
                    type="button"
                    className={styles.caseStudyBtn}
                    onClick={() => setIsCaseStudyOpen(true)}
                  >
                    <span>View Case Study</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}

                <span
                  className={styles.actionBtnDisabled}
                  title="Repository is currently in active private development"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>Private Repo</span>
                </span>

                <span
                  className={styles.actionBtnDisabled}
                  title="Demo will be live upon deployment stage"
                >
                  <span>Demo Pending</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      {isCaseStudyOpen && selectedProject.caseStudy && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setIsCaseStudyOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setIsCaseStudyOpen(false)}
              aria-label="Close Case Study"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.featuredBadge}>
                {selectedProject.status} • Architecture Blueprint
              </span>
              <h3 id="case-study-title" className={styles.modalTitle}>
                {selectedProject.title}
              </h3>
              <p className={styles.projectDesc}>{selectedProject.detailedDescription}</p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Problem &amp; Target Users</h4>
              <p className={styles.modalSectionText}>
                {selectedProject.caseStudy.problem}
              </p>
              <p className={styles.modalSectionText} style={{ marginTop: "0.5rem" }}>
                <strong>Audience:</strong> {selectedProject.caseStudy.targetUsers}
              </p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Proposed Solution</h4>
              <p className={styles.modalSectionText}>
                {selectedProject.caseStudy.proposedSolution}
              </p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Main Features</h4>
              <ul className={styles.modalBulletList}>
                {selectedProject.caseStudy.mainFeatures.map((feat, idx) => (
                  <li key={idx} className={styles.modalBulletItem}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Technical Architecture</h4>
              <p className={styles.modalSectionText}>
                {selectedProject.caseStudy.technicalArchitecture}
              </p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Engineering Challenges &amp; Trade-offs</h4>
              <ul className={styles.modalBulletList}>
                {selectedProject.caseStudy.engineeringChallenges.map((ch, idx) => (
                  <li key={idx} className={styles.modalBulletItem}>
                    <strong>Challenge:</strong> {ch}
                  </li>
                ))}
                {selectedProject.caseStudy.decisionsAndTradeoffs.map((td, idx) => (
                  <li key={idx} className={styles.modalBulletItem}>
                    <strong>Decision:</strong> {td}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Current Status &amp; Roadmap</h4>
              <p className={styles.modalSectionText}>
                {selectedProject.caseStudy.currentStatus}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
