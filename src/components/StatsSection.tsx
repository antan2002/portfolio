import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="text-yellow-400 text-sm tracking-[2px]"
      >
        ★★★★★
      </motion.div>
      <div className="text-4xl font-extrabold tracking-tight text-white">
        7.5
      </div>
      <div className="text-[11px] tracking-[0.18em] text-[var(--bv-text-3)] uppercase font-medium">
        CGPA
      </div>
      <div className="flex mt-2">
        {["A", "B", "C"].map((letter, i) => (
          <div
            key={letter}
            className="w-7 h-7 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center font-bold text-[11px] text-[#0a0a0a] -ml-2 first:ml-0"
            style={{
              background: i === 0 ? "#22c55e" : i === 1 ? "#3b82f6" : "#f97316",
            }}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
