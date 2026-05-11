import { motion } from "framer-motion";

interface StackItem {
  name: string;
  color: string;
  letter: string;
  level?: number;
}

interface StackSectionProps {
  stack: StackItem[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

const defaultStack: StackItem[] = [
  { name: "React", color: "#61DAFB", letter: "R", level: 95 },
  { name: "Node", color: "#3C873A", letter: "N", level: 90 },
  { name: "TS", color: "#3178C6", letter: "T", level: 92 },
  { name: "Mongo", color: "#10AA50", letter: "M", level: 80 },
  { name: "PG", color: "#336791", letter: "P", level: 85 },
  { name: "AI", color: "#A855F7", letter: "A", level: 88 },
];

export default function StackSection({ stack = defaultStack }: StackSectionProps) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight m-0 mb-4 text-white">
        My Stack
      </h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2 mb-4"
      >
        {stack.map((s) => (
          <motion.div
            key={s.name}
            variants={item}
            whileHover={{ y: -4, scale: 1.05 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-white text-lg shadow-lg border-2 border-white/20"
            style={{ background: s.color }}
          >
            {s.letter}
          </motion.div>
        ))}
      </motion.div>

      {stack.some((s) => s.level !== undefined) && (
        <div className="space-y-2">
          {stack.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-xs font-medium text-white/80 mb-1">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.level}%` }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="h-full rounded-full"
                  style={{ background: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
