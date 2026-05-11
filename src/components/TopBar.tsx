import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

interface TopBarProps {
  now: string;
}

export default function TopBar({ now }: TopBarProps) {
  const { theme, toggle } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="flex items-center gap-2 sm:gap-4 mb-6 flex-wrap"
    >
      {/* Date/time pill */}
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-[12px] text-sm font-medium text-[var(--bv-text-3)]">
        <div className="w-2 h-2 rounded-full bg-[var(--bv-green)] shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        {now}
      </div>

      <div className="flex-1 min-w-[8px]" />

      {/* Nav links */}
      <nav className="hidden sm:flex items-center gap-1">
        <Link
          to="/"
          className="px-3.5 py-2 rounded-full text-xs font-semibold text-[var(--bv-text-3)] transition-colors hover:text-white hover:bg-white/5 [&.active]:text-white [&.active]:bg-white/10"
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-3.5 py-2 rounded-full text-xs font-semibold text-[var(--bv-text-3)] transition-colors hover:text-white hover:bg-white/5 [&.active]:text-white [&.active]:bg-white/10"
        >
          About
        </Link>
      </nav>

      {/* Theme toggle */}
      <ThemeToggle theme={theme} onToggle={toggle} />
    </motion.header>
  );
}
