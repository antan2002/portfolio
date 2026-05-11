import { motion } from "framer-motion";
import type { Project } from "../routes/index";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-[1080px] mx-auto px-5 py-8 pb-20"
    >
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ x: -4 }}
        onClick={onBack}
        className="bg-transparent text-[var(--bv-text-3)] border border-white/10 px-4 py-2 rounded-full text-xs font-semibold mb-6 transition-colors hover:text-white hover:border-white/20"
      >
        &larr; Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-[11px] tracking-[0.18em] text-[var(--bv-text-3)] uppercase font-medium mb-2"
      >
        {project.type}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[clamp(36px,6vw,64px)] font-extrabold tracking-tight leading-none m-0 mb-4 text-white"
      >
        {project.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="text-sm font-medium leading-relaxed text-[var(--bv-text-3)] max-w-[70ch]"
      >
        {project.description}
      </motion.p>

      {/* Meta pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap gap-2 mt-5"
      >
        {[
          { label: "Status", value: project.status },
          { label: "Type", value: project.type },
          { label: "Stack", value: project.tech.join(" · ") },
          { label: "Year", value: project.year },
        ].map((m) => (
          <span
            key={m.label}
            className="text-xs px-3.5 py-2 border border-white/10 rounded-full text-white bg-white/5"
          >
            <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--bv-text-3)] mr-2">{m.label}</span>
            {m.value}
          </span>
        ))}
      </motion.div>

      {/* Cover */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="w-full aspect-[21/9] rounded-2xl my-6"
        style={{
          background: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0) 0 0 / 14px 14px,
            linear-gradient(135deg, #111 0%, #1a1a1a 100%)
          `,
        }}
      />

      {/* Features */}
      <h2 className="text-xl font-bold mt-8 mb-4 text-white">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {project.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            className="rounded-2xl p-5 bg-white/5 border border-white/10"
          >
            <h4 className="text-sm font-bold m-0 mb-1.5 text-white">{f.title}</h4>
            <p className="text-xs font-medium leading-relaxed text-[var(--bv-text-3)] m-0">{f.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Overview */}
      <h2 className="text-xl font-bold mt-8 mb-4 text-white">Overview</h2>
      <p className="text-sm font-medium leading-relaxed text-[var(--bv-text-3)] max-w-[75ch]">
        {project.full}
      </p>

      {/* CTA row */}
      <div className="flex gap-2 mt-6">
        <a
          href={project.live}
          className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        >
          View Live &nearr;
        </a>
        <a
          href={project.github}
          className="px-5 py-2.5 rounded-full border border-white/10 bg-transparent text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        >
          GitHub &nearr;
        </a>
      </div>
    </motion.main>
  );
}
