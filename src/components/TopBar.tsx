import { motion } from "framer-motion";

interface TopBarProps {
  now: string;
}

export default function TopBar({ now }: TopBarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="flex items-center gap-4 mb-6"
    >
      {/* Date/time pill */}
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-[12px] text-sm font-medium text-[var(--bv-text-3)]">
        <div className="w-2 h-2 rounded-full bg-[var(--bv-green)] shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        {now}
      </div>

      <div className="flex-1" />

      {/* Menu button */}
      <button
        className="w-10 h-10 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-base text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        aria-label="Menu"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </motion.header>
  );
}
