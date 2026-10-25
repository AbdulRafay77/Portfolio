import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <a
          href="#home"
          className={styles.brand}
          aria-label="Go to homepage"
          onClick={closeMenu}
        >
          Abdul Rafay<span>.</span>
        </a>

        <nav
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksOpen : ""
          }`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`${styles.navLink} ${
                activeSection === link.id
                  ? styles.active
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Abdul-Rafay-Siddiqui-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.resumeButton}
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;