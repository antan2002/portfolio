import { motion } from "framer-motion";
import type { Project } from "../routes/index";

interface ProjectMosaicProps {
  projects: Project[];
  onOpen: (p: Project) => void;
}

const tileStyles = [
  "col-span-1 row-span-2 bg-gradient-to-br from-slate-800 to-slate-700",
  "bg-gradient-to-br from-amber-900 to-amber-800",
  "bg-gradient-to-br from-gray-800 to-gray-900",
  "col-span-2 bg-gradient-to-br from-purple-700 to-purple-600",
  "bg-gradient-to-br from-emerald-800 to-emerald-700",
  "col-span-2 bg-gradient-to-br from-pink-800 to-pink-700",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

export default function ProjectMosaic({ projects, onOpen }: ProjectMosaicProps) {
  return (
    <div className="h-full min-h-[380px]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 grid-rows-3 gap-2 h-full min-h-[360px]"
      >
        {projects.slice(0, 6).map((p, i) => (
          <motion.button
            key={p.id}
            variants={item}
            whileHover={{ scale: 1.02, filter: "brightness(1.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => { e.stopPropagation(); onOpen(p); }}
            type="button"
            className={`relative border-none rounded-xl p-3 text-white font-bold text-left flex items-end cursor-pointer transition-[filter] duration-200 ${tileStyles[i] || tileStyles[0]}`}
          >
            <span className="bg-black/55 px-2 py-1 rounded-md text-[11px] font-semibold">
              {p.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
