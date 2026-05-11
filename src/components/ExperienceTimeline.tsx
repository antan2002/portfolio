import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp",
    period: "2024 — Present",
    description: "Leading full-stack development of AI-powered web applications. Architecting microservices, mentoring juniors, and driving migration to React 19 + TanStack.",
    tags: ["React", "Node", "AI", "Architecture"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2022 — 2024",
    description: "Built and shipped 3 major products from zero to production. Owned the entire frontend and designed REST/GraphQL APIs serving 50K+ users.",
    tags: ["React", "TypeScript", "Postgres", "GraphQL"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency Co.",
    period: "2021 — 2022",
    description: "Developed responsive landing pages, interactive dashboards, and e-commerce storefronts for 15+ clients using React and Node.",
    tags: ["React", "Node", "MongoDB", "CSS"],
  },
  {
    role: "Intern",
    company: "WebDev Studio",
    period: "2020 — 2021",
    description: "Built internal tooling dashboards and contributed to open-source component libraries. Wrote unit tests and participated in code reviews.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

export default function ExperienceTimeline() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold tracking-tight text-[var(--bv-text)] mb-10"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative pl-8 border-l-2 border-white/10"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.role + exp.company}
            variants={itemVariants}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--bv-blue)] border-2 border-[var(--bv-bg)]" />

            <div className="rounded-2xl p-5 bg-[var(--bv-surface)] border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="text-lg font-bold text-[var(--bv-text)]">{exp.role}</h3>
                <span className="text-sm font-semibold text-[var(--bv-blue)]">{exp.company}</span>
                <span className="text-xs font-medium text-[var(--bv-text-3)] ml-auto">{exp.period}</span>
              </div>
              <p className="text-sm font-medium leading-relaxed text-[var(--bv-text-2)] mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--bv-text-3)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
