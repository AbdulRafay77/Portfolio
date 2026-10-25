import {
  FiArrowUpRight,
  FiGithub,
  FiPlay,
  FiShield,
  FiRefreshCw,
  FiBell,
  FiCheckCircle,
} from "react-icons/fi";

import pulsewatchImage from "../../assets/projects/pulsewatch-dashboard.png";
import techpathImage from "../../assets/projects/techpath-dashboard.png";

import styles from "./Work.module.css";

function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>

          <div>
            <h2>Projects built beyond the tutorial stage.</h2>

            <p>
              A closer look at the systems I&apos;ve worked on, the problems
              they solve, and the engineering decisions behind them.
            </p>
          </div>
        </div>

        {/* PulseWatch */}
        <article className={styles.featuredProject}>
          <div className={styles.projectTop}>
            <div>
              <span className={styles.featuredLabel}>
                FEATURED PROJECT · 01
              </span>

              <h3>PulseWatch</h3>

              <p className={styles.projectSubtitle}>
                Website & API Monitoring Platform
              </p>
            </div>

            <div className={styles.links}>
              <a
                href="https://github.com/AbdulRafay77/pulsewatch"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="https://www.youtube.com/watch?v=FQ9YzMvwMoA"
                target="_blank"
                rel="noreferrer"
              >
                <FiPlay />
                Demo
              </a>
            </div>
          </div>

          <div className={styles.pulsewatchGrid}>
            <div className={styles.projectContent}>
              <p className={styles.projectDescription}>
                A full-stack monitoring system that automatically checks
                websites and APIs, detects outages, manages incidents,
                measures response times, and delivers in-app and email
                notifications.
              </p>

              <div className={styles.problem}>
                <span>THE ENGINEERING PROBLEM</span>

                <p>
                  Monitoring a URL safely involves more than sending an HTTP
                  request. Temporary failures, duplicate incidents, retry
                  behaviour, authentication, malicious URLs, redirects, and
                  alert delivery all need to be handled correctly.
                </p>
              </div>

              <div className={styles.highlights}>
                <div>
                  <FiRefreshCw />
                  <span>
                    <strong>Automated monitoring</strong>
                    Background scheduling and configurable retry logic.
                  </span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>
                    <strong>Incident lifecycle</strong>
                    Automatically opens and resolves outage incidents.
                  </span>
                </div>

                <div>
                  <FiShield />
                  <span>
                    <strong>SSRF protection</strong>
                    Private-IP blocking, DNS validation, and redirect
                    revalidation.
                  </span>
                </div>

                <div>
                  <FiBell />
                  <span>
                    <strong>Notifications</strong>
                    In-app and email outage/recovery alerts.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.projectVisual}>
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>

                  <p>pulsewatch</p>
                </div>

                <img
                  src={pulsewatchImage}
                  alt="PulseWatch monitoring dashboard"
                />
              </div>
            </div>
          </div>

          <div className={styles.metrics}>
            <div>
              <strong>42</strong>
              <span>Automated tests</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Test suites</span>
            </div>

            <div>
              <strong>3×</strong>
              <span>Retry attempts</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Max redirects validated</span>
            </div>
          </div>

          <div className={styles.stack}>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>React</span>
            <span>Jest</span>
            <span>Supertest</span>
          </div>
        </article>

        {/* TechPath */}
        <article className={styles.secondaryProject}>
          <div className={styles.secondaryVisual}>
            <img
              src={techpathImage}
              alt="TechPath AI platform"
            />
          </div>

          <div className={styles.secondaryContent}>
            <span className={styles.featuredLabel}>
              FINAL YEAR PROJECT · 02
            </span>

            <h3>TechPath AI</h3>

            <p>
              AI-assisted learning and career guidance platform designed for
              Computer Science and Software Engineering students.
            </p>

            <div className={styles.contribution}>
              <span>MY CONTRIBUTION</span>

              <ul>
                <li>UI/UX Design</li>
                <li>Product Planning</li>
                <li>Assessment Workflows</li>
                <li>Structured Learning Flows</li>
                <li>Gemini AI Integration & Debugging</li>
              </ul>
            </div>

            <div className={styles.techpathFooter}>
              <div className={styles.stack}>
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>Gemini AI</span>
              </div>

              <a
                href="https://github.com/AbdulRafay77/Tech-Path-AI"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                View repository
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Work;