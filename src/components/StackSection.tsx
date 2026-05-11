import { motion } from "framer-motion";

interface StackItem {
  name: string;
  color: string;
  letter: string;
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

export default function StackSection({ stack }: StackSectionProps) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight m-0 mb-4 text-white">
        My Stack
      </h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
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
    </>
  );
}
