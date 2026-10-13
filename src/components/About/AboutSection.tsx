"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

interface InfoBlock {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const INFO_BLOCKS: InfoBlock[] = [
  {
    id: "education",
    title: "Education",
    description: "B.Tech CSE (AI & ML) at Parul University, Vadodara (2025–2029).",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "focus-areas",
    title: "Focus Areas",
    description: "AI & Machine Learning, Full-Stack Development, and Software Engineering.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "career-goal",
    title: "Career Objective",
    description: "Build intelligent, reliable products addressing real-world challenges as an AI Engineer.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "always-learning",
    title: "Areas of Interest",
    description: "AI Agents, Intelligent Assistants, Developer Tools, and Product Development.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About Amit Kumar">
      {/* Subtle cosmic lunar terrain background */}
      <div className={styles.lunarBackground} aria-hidden="true" />

      <div className={styles.aboutContainer}>
        {/* TOP EDITORIAL ROW */}
        <div className={styles.editorialRow}>
          {/* LEFT: TEXT CONTENT */}
          <div className={styles.introContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>ABOUT ME</span>
            </div>

            <h2 className={styles.heading}>
              Curious Mind.
              <span className={styles.headingHighlight}> Builder at Heart.</span>
            </h2>

            <p className={styles.introParagraph}>
              Computer Science and Engineering student specializing in <span className={styles.introStrong}>Artificial Intelligence and Machine Learning</span> at <span className={styles.introStrong}>Parul University</span>. Passionate about building intelligent applications, AI-powered tools, and practical software solutions that solve real-world problems.
            </p>

            <p className={styles.introParagraph}>
              Interested in AI engineering, full-stack development, and product development, with a focus on transforming ideas into functional, user-friendly applications. Continuously developing technical skills through programming, independent projects, and hands-on experimentation with modern development tools.
            </p>
          </div>

          {/* RIGHT: PORTRAIT & COSMIC FRAME */}
          <div className={styles.portraitWrapper}>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/amit-portrait.png"
                alt="Portrait of Amit Kumar"
                width={360}
                height={360}
                className={styles.portraitImage}
                priority={false}
              />
            </div>
            <p className={styles.portraitCaption}>
              &ldquo;A small step today for a bigger tomorrow.&rdquo;
            </p>
          </div>
        </div>

        {/* BOTTOM: 4 INFORMATION BLOCKS */}
        <div className={styles.infoGrid} role="list" aria-label="Key Highlights">
          {INFO_BLOCKS.map((block) => (
            <div key={block.id} className={styles.infoCard} role="listitem">
              <div className={styles.iconContainer} aria-hidden="true">
                {block.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{block.title}</h3>
                <p className={styles.cardDescription}>{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
