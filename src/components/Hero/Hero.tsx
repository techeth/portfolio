"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleExploreClick = () => {
    setToastMessage("Stage 02 Active • Universe sections will be unlocked in upcoming stages.");
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleProjectsClick = () => {
    setToastMessage("Project Galaxy is scheduled for Stage 03 • Stay tuned!");
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero Introduction">
      {/* Dynamic Starfield Atmosphere */}
      <div className={styles.starfieldLayer} aria-hidden="true" />

      <div className={styles.heroContainer}>
        {/* LEFT COLUMN: HERO INFORMATION */}
        <div className={styles.leftContent}>
          {/* Availability Indicator */}
          <div className={styles.availabilityBadge}>
            <span className={styles.pulsingDot} aria-hidden="true" />
            <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>AMIT.OS</h1>

          {/* Tagline */}
          <p className={styles.tagline}>
            Engineering intelligence.
            <span className={styles.taglineSub}>Building what comes next.</span>
          </p>

          {/* Introduction Paragraph */}
          <p className={styles.introText}>
            I&apos;m <span className={styles.introHighlight}>Amit Kumar</span>, an Aspiring AI Engineer, Software Developer, and Full-Stack Developer specializing in AI and Machine Learning. I turn ideas into intelligent, functional digital products.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={handleExploreClick}
              aria-label="Explore My Universe"
            >
              <span>Explore My Universe</span>
              <span className={styles.btnArrow} aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={handleProjectsClick}
              aria-label="View My Projects"
            >
              <span>View My Projects</span>
              <span className={styles.btnArrow} aria-hidden="true">→</span>
            </button>
          </div>

          {/* Technology Labels */}
          <div className={styles.techLabelsRow} aria-label="Core Technical Disciplines">
            <span className={styles.techPill}>AI Engineer</span>
            <span className={styles.techPill}>Full-Stack Developer</span>
            <span className={styles.techPill}>Software Developer</span>
            <span className={styles.techPill}>Vadodara, India</span>
          </div>
        </div>

        {/* RIGHT COLUMN: PLANETARY ARTWORK & DECORATIVE CAPTION */}
        <div className={styles.rightVisual}>
          <div className={styles.planetWrapper}>
            <div className={styles.planetGlowHalo} aria-hidden="true" />
            <Image
              src="/images/hero-planet.jpg"
              alt="Cinematic Monochrome Ringed Planet in Deep Space"
              width={750}
              height={750}
              priority
              className={styles.planetImage}
            />
          </div>

          {/* Small Decorative Caption */}
          <div className={styles.decorativeCaption}>
            <span className={styles.captionLine1}>Ideas are just the beginning.</span>
            <span className={styles.captionLine2}>Execution is what creates worlds.</span>
          </div>
        </div>
      </div>

      {/* Interactive Micro-Notice for Temporary Actions */}
      {toastMessage && (
        <div className={styles.interactionNotice} role="status">
          <span className={styles.pulsingDot} aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
