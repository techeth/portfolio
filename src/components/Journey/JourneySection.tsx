"use client";

import React from "react";
import { JOURNEY_MILESTONES } from "@/data/journey";
import styles from "./JourneySection.module.css";

export default function JourneySection() {
  return (
    <section id="journey" className={styles.journeySection} aria-label="Learning Journey Timeline">
      {/* Anchor alias for universe navigation */}
      <span id="universe" style={{ position: "absolute", top: 0 }} aria-hidden="true" />

      {/* Subtle Lunar Surface Backdrop */}
      <div className={styles.lunarSurface} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        {/* SECTION HEADER */}
        <div className={styles.headerContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>JOURNEY</span>
          </div>

          <h2 className={styles.heading}>My Learning Path</h2>

          <p className={styles.description}>
            A timeline of what I&apos;m doing, learning, and building.
          </p>
        </div>

        {/* TIMELINE TRACK */}
        <div className={styles.timelineWrapper}>
          {/* Desktop Connecting Line (SVG) */}
          <svg
            className={styles.timelineSvg}
            viewBox="0 0 1200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            {/* Completed & Active Journey Segment */}
            <line
              x1="140"
              y1="20"
              x2="760"
              y2="20"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="2"
            />
            {/* Future Horizon Dashed Segment */}
            <line
              x1="760"
              y1="20"
              x2="1060"
              y2="20"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg>

          {/* Milestone Nodes Grid */}
          <div className={styles.timelineGrid} role="list" aria-label="Learning Milestones">
            {JOURNEY_MILESTONES.map((item, index) => {
              const isCurrent = item.status === "CURRENT";
              const isFuture = item.status === "FUTURE";

              return (
                <div key={item.id} className={styles.milestoneItem} role="listitem">
                  {/* Beacon Node */}
                  <div className={styles.beaconContainer}>
                    <div
                      className={`${styles.beaconDot} ${
                        isCurrent
                          ? styles.currentDot
                          : isFuture
                          ? styles.futureDot
                          : ""
                      }`}
                      aria-hidden="true"
                    />

                    {/* Small Explorer Vessel Icon on Future Horizon */}
                    {isFuture && (
                      <span className={styles.explorerVessel} aria-hidden="true">
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
                          <polygon points="12 2 19 21 12 17 5 21 12 2" />
                        </svg>
                      </span>
                    )}
                  </div>

                  {/* Stage Pill */}
                  <span
                    className={`${styles.stageBadge} ${
                      isCurrent
                        ? styles.stageBadgeCurrent
                        : isFuture
                        ? styles.stageBadgeFuture
                        : ""
                    }`}
                  >
                    <span>{item.stageBadge}</span>
                  </span>

                  {/* Milestone Content Card */}
                  <div className={styles.milestoneCard}>
                    <h3 className={styles.milestoneTitle}>
                      {index + 1}. {item.title}
                    </h3>
                    <p className={styles.milestoneDesc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
