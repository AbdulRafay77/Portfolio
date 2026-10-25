import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiMapPin,
  FiShield,
  FiZap,
} from "react-icons/fi";

import styles from "./About.module.css";

const principles = [
  {
    number: "01",
    title: "Build",
    description:
      "Start with a clear problem and make the core user flow work reliably.",
    icon: FiCode,
  },
  {
    number: "02",
    title: "Break",
    description:
      "Think through edge cases, failures, and what happens when assumptions stop being true.",
    icon: FiZap,
  },
  {
    number: "03",
    title: "Secure",
    description:
      "Treat authentication, input validation, access control, and exposed services as part of the design.",
    icon: FiShield,
  },
  {
    number: "04",
    title: "Test",
    description:
      "Turn important behaviour into automated tests instead of relying only on manual checking.",
    icon: FiCheckCircle,
  },
];

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span>04</span>
          <span>ABOUT</span>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.intro}>
            <h2>
              I like understanding
              <span> why systems fail</span> — not just making them work.
            </h2>

            <p>
              I&apos;m Abdul Rafay Siddiqui, a Software Engineering graduate
              from the University of Karachi with a backend-focused full-stack
              approach.
            </p>

            <p>
              Projects like PulseWatch made me increasingly interested in the
              engineering behind an application: API behaviour, authentication,
              security, failure handling, and automated testing.
            </p>

            <a
              href="https://www.linkedin.com/in/abdulrafayse"
              target="_blank"
              rel="noreferrer"
              className={styles.linkedin}
            >
              View LinkedIn
              <FiArrowUpRight />
            </a>
          </div>

          <div className={styles.approach}>
            <p className={styles.approachLabel}>
              HOW I APPROACH SOFTWARE
            </p>

            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  className={styles.principle}
                  key={principle.number}
                >
                  <span className={styles.number}>
                    {principle.number}
                  </span>

                  <div className={styles.icon}>
                    <Icon />
                  </div>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.profileStrip}>
          <div>
            <span>EDUCATION</span>
            <strong>BS Software Engineering</strong>
            <p>University of Karachi · 2021–2025</p>
          </div>

          <div>
            <span>LOCATION</span>
            <strong>
              <FiMapPin />
              Karachi, Pakistan
            </strong>
            <p>Open to local & remote opportunities</p>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>Backend-heavy Full-Stack</strong>
            <p>APIs · Security · Testing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;