import { useState } from "react";

const logo = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const filters = ["All", "Frontend", "Mobile", "Backend", "Full Stack"];

const skills = [
  {
    title: "Frontend Development",
    category: "Frontend",
    level: "Advanced",
    percent: 90,
    logo: logo("react"),
    desc: "Responsive, pixel-perfect interfaces built with clean semantic markup and modern styling.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Flutter App Development",
    category: "Mobile",
    level: "Advanced",
    percent: 85,
    logo: logo("flutter"),
    desc: "Smooth cross-platform mobile apps for Android and iOS from a single codebase.",
    tags: ["Flutter", "Dart", "Material UI"],
  },
  {
    title: "Firebase Backend",
    category: "Backend",
    level: "Intermediate",
    percent: 80,
    logo: logo("firebase"),
    desc: "Authentication, real-time database and cloud storage that power app logic without a server.",
    tags: ["Auth", "Firestore", "Storage"],
  },
  {
    title: "MERN Full Stack",
    category: "Full Stack",
    level: "Advanced",
    percent: 85,
    logo: logo("mongodb"),
    desc: "End-to-end web applications, from the database and server to the interface users see.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "API Integration",
    category: "Backend",
    level: "Intermediate",
    percent: 80,
    logo: logo("postman"),
    desc: "Connecting apps with third-party and custom REST APIs, handling data, tokens and errors safely.",
    tags: ["REST", "JSON", "Axios", "JWT"],
  },
  {
    title: "Backend Development",
    category: "Backend",
    level: "Intermediate",
    percent: 80,
    logo: logo("nodejs"),
    desc: "Secure, scalable server-side logic with well-structured routes, models and middleware.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">
        My <span>Skills</span>
      </h2>
      <p className="skills__subtitle">
        Tools and technologies I use to build complete products
      </p>

      <div className="skills__filters" role="group" aria-label="Filter skills">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`skills__filter ${active === f ? "is-active" : ""}`}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="skills__grid" key={active}>
        {visible.map((s) => (
          <article className="skill-card" key={s.title}>
            <div className="skill-card__icon">
              <img
                src={s.logo}
                alt={s.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            <h3 className="skill-card__title">{s.title}</h3>
            <p className="skill-card__desc">{s.desc}</p>

            <div className="skill-card__level">
              <div className="skill-card__level-row">
                <span>{s.level}</span>
                <span>{s.percent}%</span>
              </div>
              <div className="skill-card__bar">
                <div
                  className="skill-card__bar-fill"
                  style={{ width: `${s.percent}%` }}
                />
              </div>
            </div>

            <ul className="skill-card__tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}