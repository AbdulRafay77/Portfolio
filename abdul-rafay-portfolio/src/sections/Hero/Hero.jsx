import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";

import profileImage from "../../assets/images/profile.png";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            Available for opportunities
          </div>

          <p className={styles.eyebrow}>
            SOFTWARE ENGINEER
          </p>

          <h1 className={styles.title}>
            Building reliable
            <span> full-stack </span>
            applications.
          </h1>

          <p className={styles.description}>
            I&apos;m Abdul Rafay Siddiqui, a backend-focused full-stack
            developer building secure, reliable web applications with Node.js, Express, MongoDB, and React, with a focus on APIs, authentication, testing, and backend security.
          </p>

          <div className={styles.actions}>
            <a
              href="#work"
              className={styles.primaryButton}
            >
              View my work
              <FiArrowRight />
            </a>

            <a
              href="/Abdul-Rafay-Siddiqui-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              Download CV
              <FiDownload />
            </a>
          </div>

          <div className={styles.meta}>
            <div className={styles.location}>
              <FiMapPin />
              <span>Karachi, Pakistan</span>
            </div>

            <a
              href="https://github.com/AbdulRafay77"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdulrafayse"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.accentSquare} />
          <div className={styles.accentCircle} />

          <div className={styles.imageCard}>
            <img
              src={profileImage}
              alt="Abdul Rafay Siddiqui"
              className={styles.profileImage}
            />

            <div className={styles.imageOverlay}>
              <p>Backend-focused development</p>
              <span>
                APIs · Authentication · Security · Testing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;