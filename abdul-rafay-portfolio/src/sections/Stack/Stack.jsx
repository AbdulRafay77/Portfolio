import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiJavascript,
  SiVite,
  SiHtml5,
  SiJest,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiVercel,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

import {
  FiCode,
  FiDatabase,
  FiShield,
  FiLock,
  FiServer,
  FiCloud,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "./Stack.module.css";

const groups = [
  {
    title: "Backend",
    number: "01",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#111827" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: FiDatabase, color: "#880000" },
      { name: "REST APIs", icon: FiServer, color: "#2563EB" },
      { name: "JWT", icon: FiLock, color: "#7C3AED" },
      { name: "bcrypt", icon: FiShield, color: "#0F766E" },
      { name: "RBAC", icon: FiCheckCircle, color: "#EA580C" },
    ],
  },
  {
    title: "Frontend",
    number: "02",
    skills: [
      { name: "React", icon: SiReact, color: "#087EA4" },
      { name: "JavaScript", icon: SiJavascript, color: "#D5B900" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Axios", icon: FiCode, color: "#5A29E4" },
    ],
  },
  {
    title: "Testing & Security",
    number: "03",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Supertest", icon: FiCheckCircle, color: "#16A34A" },
      { name: "Unit Testing", icon: FiCode, color: "#2563EB" },
      { name: "Integration Testing", icon: FiServer, color: "#0891B2" },
      { name: "CORS", icon: FiShield, color: "#7C3AED" },
      { name: "Rate Limiting", icon: FiLock, color: "#EA580C" },
      { name: "SSRF Protection", icon: FiShield, color: "#DC2626" },
    ],
  },
  {
    title: "Tools & Deployment",
    number: "04",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Vercel", icon: SiVercel, color: "#111827" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
      { name: "Render", icon: FiCloud, color: "#2563EB" },
      { name: "Railway", icon: FiCloud, color: "#7C3AED" },
    ],
  },
];

function Stack() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>SKILLS</span>
          </div>

          <div>
            <h2>Tools I work with.</h2>

            <p>
              A practical toolkit for building secure, tested, and maintainable
              full-stack applications.
            </p>
          </div>
        </div>

        <div className={styles.groups}>
          {groups.map((group) => (
            <article className={styles.group} key={group.title}>
              <div className={styles.groupHeading}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>

              <div className={styles.skillGrid}>
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div className={styles.skill} key={skill.name}>
                      <div
                        className={styles.iconBox}
                        style={{ "--skill-color": skill.color }}
                      >
                        <Icon />
                      </div>

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;