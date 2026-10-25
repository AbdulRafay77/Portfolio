import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              className={styles.navLink}
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
          onClick={() => setMenuOpen((current) => !current)}
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