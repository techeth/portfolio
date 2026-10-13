"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROFILE_CONFIG } from "@/config/profile";
import styles from "./ContactSection.module.css";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function ContactSection() {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!PROFILE_CONFIG.email) {
      e.preventDefault();
      showToast(
        "Email Notice: Set your personal email in src/config/profile.ts to enable mailto."
      );
    }
  };

  const handleGitHubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!PROFILE_CONFIG.githubUrl) {
      e.preventDefault();
      showToast(
        "GitHub Notice: Add your GitHub profile URL in src/config/profile.ts."
      );
    }
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!PROFILE_CONFIG.linkedinUrl) {
      e.preventDefault();
      showToast(
        "LinkedIn Notice: Add your LinkedIn profile URL in src/config/profile.ts."
      );
    }
  };

  const handleResumeClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(PROFILE_CONFIG.resumePath, {
        method: "HEAD",
      });
      if (response.ok) {
        window.open(PROFILE_CONFIG.resumePath, "_blank");
      } else {
        router.push("/resume");
      }
    } catch {
      router.push("/resume");
    }
  };

  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setCurrentYear(new Date().getFullYear());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact Section">
      <div className={styles.sectionContainer}>
        {/* TOP: 2-COLUMN MAIN LAYOUT */}
        <div className={styles.mainLayout}>
          {/* LEFT: CONTENT & ACTIONS */}
          <div className={styles.leftContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>CONTACT</span>
            </div>

            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Let&apos;s Build</span>
              <span className={styles.headingLine}>Something.</span>
            </h2>

            <p className={styles.description}>
              I&apos;m always open to discussing new opportunities, collaborations, and exciting ideas.
            </p>

            <div className={styles.actionsRow} role="group" aria-label="Contact Actions">
              {/* Primary Email Action */}
              <a
                href={
                  PROFILE_CONFIG.email
                    ? `mailto:${PROFILE_CONFIG.email}`
                    : "#"
                }
                className={styles.primaryEmailBtn}
                onClick={handleEmailClick}
                aria-label="Email Me"
              >
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email Me</span>
                <span className={styles.btnArrow} aria-hidden="true">→</span>
              </a>

              {/* GitHub Action */}
              <a
                href={PROFILE_CONFIG.githubUrl || "#"}
                target={PROFILE_CONFIG.githubUrl ? "_blank" : undefined}
                rel={PROFILE_CONFIG.githubUrl ? "noopener noreferrer" : undefined}
                className={styles.actionBtn}
                onClick={handleGitHubClick}
                aria-label="GitHub Profile"
              >
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>

              {/* LinkedIn Action */}
              <a
                href={PROFILE_CONFIG.linkedinUrl || "#"}
                target={PROFILE_CONFIG.linkedinUrl ? "_blank" : undefined}
                rel={PROFILE_CONFIG.linkedinUrl ? "noopener noreferrer" : undefined}
                className={styles.actionBtn}
                onClick={handleLinkedInClick}
                aria-label="LinkedIn Profile"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Resume Action */}
              <a
                href={PROFILE_CONFIG.resumePath}
                className={styles.actionBtn}
                onClick={handleResumeClick}
                aria-label="Download Resume"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Resume</span>
              </a>
            </div>

            {/* Direct Contact Details Row (Email, Location) */}
            <div className={styles.contactDetailsRow} aria-label="Direct Contact Details">
              <a
                href={`mailto:${PROFILE_CONFIG.email}`}
                className={styles.contactDetailCard}
                aria-label={`Send email to ${PROFILE_CONFIG.email}`}
              >
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className={styles.detailText}>{PROFILE_CONFIG.email}</span>
              </a>

              <div className={styles.contactDetailCard} aria-label={`Location: ${PROFILE_CONFIG.location}`}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className={styles.detailText}>{PROFILE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PLANETARY ARTWORK HORIZON & QUOTE */}
          <div className={styles.rightVisual}>
            <div className={styles.planetHorizonFrame} aria-hidden="true">
              <Image
                src="/images/hero-planet.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className={styles.planetImage}
              />
              <svg
                className={styles.horizonSvg}
                viewBox="0 0 500 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Radiant coronal horizon gradient */}
                  <linearGradient id="horizonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                    <stop offset="50%" stopColor="rgba(255, 255, 255, 0.45)" />
                    <stop offset="85%" stopColor="rgba(255, 255, 255, 0.95)" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                  {/* Atmospheric diffuse blur */}
                  <radialGradient id="sunFlare" cx="85%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.65)" />
                    <stop offset="25%" stopColor="rgba(220, 235, 255, 0.25)" />
                    <stop offset="65%" stopColor="rgba(180, 210, 255, 0.04)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* Sun Flare */}
                <ellipse cx="400" cy="110" rx="150" ry="100" fill="url(#sunFlare)" />

                {/* Curved Planetary Horizon Line */}
                <path
                  d="M -20 340 Q 250 140 520 70"
                  stroke="url(#horizonGlow)"
                  strokeWidth="2.5"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))" }}
                />

                {/* Second soft outer coronal ring */}
                <path
                  d="M -20 340 Q 250 140 520 70"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>

            {/* Decorative Quote */}
            <div className={styles.quoteBox}>
              <span className={styles.quoteText}>
                &ldquo;Good ideas are built together.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM: MINIMALIST FOOTER */}
        <footer className={styles.footer} role="contentinfo">
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>AMIT.OS</span>
            <span className={styles.footerTagline}>Designed and built with curiosity.</span>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className={styles.footerNav}>
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className={styles.footerCopyright}>
            &copy; {currentYear} Amit Kumar. All rights reserved.
          </span>
        </footer>
      </div>

      {/* Floating Notice Toast */}
      {toastMessage && (
        <div className={styles.noticeToast} role="status">
          <span className={styles.toastDot} aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
