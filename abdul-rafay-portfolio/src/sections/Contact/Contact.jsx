import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span>06</span>
          <span>CONTACT</span>
        </div>

        <div className={styles.main}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              OPEN TO OPPORTUNITIES
            </p>

            <h2>
              Have an opportunity
              <span> worth discussing?</span>
            </h2>

            <p className={styles.description}>
              I&apos;m currently looking for junior software engineering,
              backend, and full-stack opportunities where I can contribute,
              learn from experienced engineers, and continue building reliable
              software.
            </p>

            <a
              href="mailto:abdulrafaysiddiquib153@gmail.com"
              className={styles.emailButton}
            >
              <FiMail />
              Get in touch
              <FiArrowUpRight />
            </a>
          </div>

          <div className={styles.contactPanel}>
            <p className={styles.panelLabel}>
              CONNECT
            </p>

            <a
              href="mailto:abdulrafaysiddiquib153@gmail.com"
              className={styles.contactItem}
            >
              <div>
                <FiMail />

                <span>
                  <small>Email</small>
                  abdulrafaysiddiquib153@gmail.com
                </span>
              </div>

              <FiArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/abdulrafayse"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <div>
                <FiLinkedin />

                <span>
                  <small>LinkedIn</small>
                  /in/abdulrafayse
                </span>
              </div>

              <FiArrowUpRight />
            </a>

            <a
              href="https://github.com/AbdulRafay77"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <div>
                <FiGithub />

                <span>
                  <small>GitHub</small>
                  /AbdulRafay77
                </span>
              </div>

              <FiArrowUpRight />
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <div>
            <strong>
              Abdul Rafay<span>.</span>
            </strong>

            <p>
              Software Engineer · Karachi, Pakistan
            </p>
          </div>

          <p className={styles.footerText}>
            Designed & built by Abdul Rafay Siddiqui
          </p>

          <a href="#home" className={styles.backToTop}>
            Back to top
            ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;