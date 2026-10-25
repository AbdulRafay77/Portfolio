import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

import { moreProjects } from "../../data/projects";

import styles from "./MoreProjects.module.css";
import Reveal from "../../components/Reveal/Reveal";

function MoreProjects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span>MORE PROJECTS</span>
          </div>

          <div>
            <h2>
              More things
              <span> I&apos;ve built.</span>
            </h2>

            <p>
              Smaller projects that helped me strengthen my fundamentals,
              experiment with different ideas, and progress toward larger
              full-stack systems.
            </p>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {moreProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.title}
                delay={index * 100}
              >
                <article
                  className={styles.projectCard}
                  key={project.title}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.projectNumber}>
                      0{index + 1}
                    </span>

                    <div className={styles.projectIcon}>
                      <Icon />
                    </div>
                  </div>

                  <div className={styles.content}>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>

                  <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.repoLink}
                  >
                    <FiGithub />
                    View repository
                    <FiArrowUpRight />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className={styles.allRepos}>
          <a
            href="https://github.com/AbdulRafay77?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;