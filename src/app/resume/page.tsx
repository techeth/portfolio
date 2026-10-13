"use client";

import React from "react";
import Link from "next/link";
import { PROFILE_CONFIG } from "@/config/profile";
import { SKILL_CATEGORIES, SKILLS } from "@/data/skills";
import styles from "./resume.module.css";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* TOP TOOLBAR (Hidden in print) */}
      <nav className={styles.toolbar} aria-label="Resume Actions">
        <Link href="/" className={styles.backBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Portfolio</span>
        </Link>

        <div className={styles.toolbarActions}>
          <button
            type="button"
            onClick={handlePrint}
            className={styles.printBtn}
            aria-label="Save as PDF or Print"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect width="12" height="8" x="6" y="14" />
            </svg>
            <span>Save as PDF / Print</span>
          </button>

          <a
            href={PROFILE_CONFIG.resumePath}
            download="Amit_Kumar_Resume.pdf"
            className={styles.downloadBtn}
            aria-label="Download Resume PDF"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </nav>

      {/* RECRUITER-FRIENDLY RESUME DOCUMENT */}
      <main className={styles.resumeSheet} role="article" aria-label="Amit Kumar Resume">
        {/* 1. HEADER & CONTACT ROW (No portfolio URL in contact row) */}
        <header className={styles.header}>
          <h1 className={styles.name}>{PROFILE_CONFIG.name}</h1>
          <p className={styles.title}>{PROFILE_CONFIG.title}</p>

          <div className={styles.contactRow} aria-label="Contact Information">
            {/* Email */}
            <a
              href={`mailto:${PROFILE_CONFIG.email}`}
              className={styles.contactItem}
              aria-label="Email Amit Kumar"
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
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{PROFILE_CONFIG.email}</span>
            </a>

            <span className={styles.separator} aria-hidden="true">•</span>

            {/* Location */}
            <span className={styles.contactItem} aria-label="Location">
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{PROFILE_CONFIG.location}</span>
            </span>

            <span className={styles.separator} aria-hidden="true">•</span>

            {/* LinkedIn */}
            <a
              href={PROFILE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              aria-label="LinkedIn Profile"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <span className={styles.separator} aria-hidden="true">•</span>

            {/* GitHub */}
            <a
              href={PROFILE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              aria-label="GitHub Profile"
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* 2. CAREER OBJECTIVE */}
        <section className={styles.section} aria-labelledby="heading-objective">
          <h2 id="heading-objective" className={styles.sectionHeading}>
            Career Objective
          </h2>
          <p className={styles.paragraph}>
            {PROFILE_CONFIG.careerObjective}
          </p>
        </section>

        {/* 3. PROFESSIONAL SUMMARY */}
        <section className={styles.section} aria-labelledby="heading-summary">
          <h2 id="heading-summary" className={styles.sectionHeading}>
            Professional Summary
          </h2>
          <p className={styles.paragraph}>
            {PROFILE_CONFIG.summary}
          </p>
        </section>

        {/* 4. TECHNICAL SKILLS */}
        <section className={styles.section} aria-labelledby="heading-skills">
          <h2 id="heading-skills" className={styles.sectionHeading}>
            Technical Skills
          </h2>
          <div className={styles.skillsGrid}>
            {SKILL_CATEGORIES.map((cat) => {
              const categorySkills = SKILLS.filter((s) => s.category === cat.id);
              return (
                <div key={cat.id} className={styles.skillRow}>
                  <span className={styles.skillCategoryLabel}>{cat.label}:</span>
                  <span className={styles.skillItemsList}>
                    {categorySkills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. FEATURED PROJECT (AI Project Mentor ONLY — No Misanthropic or Jarvis) */}
        <section className={styles.section} aria-labelledby="heading-project">
          <h2 id="heading-project" className={styles.sectionHeading}>
            Featured Project
          </h2>
          <div className={styles.projectEntry}>
            <div className={styles.projectHeader}>
              <span className={styles.projectName}>
                {PROFILE_CONFIG.featuredProject.name}
              </span>
              <span className={styles.projectTech}>
                {PROFILE_CONFIG.featuredProject.technologies.join(" • ")}
              </span>
            </div>
            <p className={styles.projectSummary}>
              &ldquo;{PROFILE_CONFIG.featuredProject.description}&rdquo;
            </p>
            <ul className={styles.bulletList}>
              {PROFILE_CONFIG.featuredProject.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. EDUCATION */}
        <section className={styles.section} aria-labelledby="heading-education">
          <h2 id="heading-education" className={styles.sectionHeading}>
            Education
          </h2>
          <div className={styles.educationEntry}>
            <div>
              <div className={styles.educationDegree}>
                {PROFILE_CONFIG.education.degree} in {PROFILE_CONFIG.education.branch}
              </div>
              <div className={styles.educationSpecialization}>
                Specialization: {PROFILE_CONFIG.education.specialization}
              </div>
              <div className={styles.educationInstitution}>
                {PROFILE_CONFIG.education.institution}
              </div>
            </div>
            <div className={styles.educationMeta}>
              <div className={styles.educationDuration}>
                {PROFILE_CONFIG.education.duration}
              </div>
              <div className={styles.educationLocation}>
                {PROFILE_CONFIG.education.location}
              </div>
            </div>
          </div>
        </section>

        {/* 7. AREAS OF INTEREST */}
        <section className={styles.section} aria-labelledby="heading-interests">
          <h2 id="heading-interests" className={styles.sectionHeading}>
            Areas of Interest
          </h2>
          <div className={styles.interestsList}>
            {PROFILE_CONFIG.areasOfInterest.map((interest, idx) => (
              <span key={idx} className={styles.interestTag}>
                {interest}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
