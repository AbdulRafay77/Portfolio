import {
  FiAward,
  FiMonitor,
  FiCheck,
  FiStar,
  FiExternalLink,
} from "react-icons/fi";

import styles from "./Credentials.module.css";

const simulations = [
  {
    company: "Walmart Global Tech",
    title: "Advanced Software Engineering Job Simulation",
    provider: "Forage",
    date: "Oct 2026",
    credentialId: "6add05d9d4a81158c3ec498e",
    certificate: "/certificates/walmart-software-engineering.pdf",
    topics: [
      "Advanced Data Structures",
      "Software Architecture",
      "Relational Database Design",
      "Data Munging",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    title: "Software Engineering Job Simulation",
    provider: "Forage",
    date: "Oct 2026",
    credentialId: "6adca289de57a23d972b54e7",
    certificate: "/certificates/hpe-software-engineering.pdf",
    topics: [
      "RESTful Web Services",
      "Backend Development",
      "Data Upload",
      "Unit Testing",
    ],
  },
];

const awards = [
  {
    year: "2018",
    title: "Gold Medallist",
    detail: "O-Levels",
    icon: <FiAward />,
    tone: "gold",
  },
  {
    year: "2017",
    title: "Silver Medallist",
    detail: "O-Levels",
    icon: <FiStar />,
    tone: "silver",
  },
  {
    year: "2023",
    title: "Laptop Award",
    detail: "Government of Pakistan",
    icon: <FiMonitor />,
    tone: "blue",
  },
];

function Credentials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            <span>CREDENTIALS</span>
          </div>

          <div>
            <h2>
              Learning beyond
              <span> the classroom.</span>
            </h2>

            <p>
              Practical software engineering simulations and academic
              recognition from different stages of my journey.
            </p>
          </div>
        </div>

        <div className={styles.simulations}>
          {simulations.map((simulation, index) => (
            <article
              className={styles.simulation}
              key={simulation.company}
            >
              <div className={styles.simulationNumber}>
                0{index + 1}
              </div>

              <div className={styles.simulationMain}>
                <div className={styles.companyRow}>
                  <span>{simulation.provider}</span>
                  <span>{simulation.date}</span>
                </div>

                <h3>{simulation.company}</h3>

                <h4>{simulation.title}</h4>

                <div className={styles.topics}>
                  {simulation.topics.map((topic) => (
                    <div key={topic}>
                      <FiCheck />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.credential}>
                <span>CREDENTIAL ID</span>

                <code>{simulation.credentialId}</code>

                <a
                  href={simulation.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certificateLink}
                >
                  View Certificate
                  <FiExternalLink />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.recognition}>
          <div className={styles.recognitionHeading}>
            <FiAward />

            <div>
              <span>RECOGNITION</span>
              <h3>Academic & personal milestones</h3>
            </div>
          </div>

          <div className={styles.awardsGrid}>
            {awards.map((award) => (
              <article
                className={`${styles.awardCard} ${styles[award.tone]}`}
                key={award.title}
              >
                <div className={styles.awardTop}>
                  <div className={styles.awardIcon}>{award.icon}</div>
                  <span className={styles.awardYear}>{award.year}</span>
                </div>

                <h4>{award.title}</h4>
                <p>{award.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;