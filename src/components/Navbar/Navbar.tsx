"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Scroll spy to update active navigation item
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionIds = ["hero", "about", "projects", "skills", "journey", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setIsMenuOpen(false);
    setActiveSection(item.id);

    const targetElement = document.querySelector(item.href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (item.id !== "hero") {
      // Future section is not yet created
      e.preventDefault();
      showToast(`${item.label} section will be available in an upcoming stage.`);
    }
  };

  const handleResumeClick = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    try {
      const response = await fetch("/resume.pdf", { method: "HEAD" });
      if (response.ok) {
        window.open("/resume.pdf", "_blank");
      } else {
        router.push("/resume");
      }
    } catch {
      router.push("/resume");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* LEFT: LOGO */}
        <Link
          href="#hero"
          className={styles.logoLink}
          onClick={(e) => {
            const heroEl = document.querySelector("#hero");
            if (heroEl) {
              e.preventDefault();
              heroEl.scrollIntoView({ behavior: "smooth" });
              setActiveSection("hero");
            }
          }}
          aria-label="AMIT.OS Home"
        >
          <span className={styles.logoIcon} aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.logoText}>AMIT.OS</span>
        </Link>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className={styles.navCenter} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className={styles.activeIndicator} aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: DESKTOP RESUME BUTTON */}
        <a
          href="/resume.pdf"
          className={styles.resumeBtn}
          onClick={handleResumeClick}
          aria-label="Download Resume"
        >
          <span>Resume</span>
          <span className={styles.downloadIcon} aria-hidden="true">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
        </a>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMenuOpen && (
        <div id="mobile-navigation" className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.active : ""}`}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className={styles.toastDot} aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/resume.pdf"
            className={styles.mobileResumeBtn}
            onClick={handleResumeClick}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <span className={styles.downloadIcon} aria-hidden="true">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
          </a>
        </div>
      )}

      {/* TOAST FEEDBACK NOTIFICATION */}
      {toastMessage && (
        <div className={styles.navToast} role="status">
          <span className={styles.toastDot} aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}
    </header>
  );
}
