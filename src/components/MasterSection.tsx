import { motion } from "framer-motion";

export default function MasterSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      {/* Screen mockup */}
      <div className="bg-[#0a0a0a] rounded-xl p-2 mb-4 border border-white/10">
        <div className="flex gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1.5 min-h-[90px]">
          <div className="w-[28%] bg-white/5 rounded-lg" />
          <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center p-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-2 rounded-lg"
            >
              <div className="text-[11px] font-bold text-white leading-tight">Empower</div>
              <div className="text-[11px] font-bold text-white leading-tight">Your Engineering</div>
            </motion.div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight m-0 text-white">
        Software Engineer
      </h3>
    </motion.div>
  );
}
