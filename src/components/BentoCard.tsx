import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  delay?: number;
  cta?: boolean;
  ctaDark?: boolean;
  as?: "glass" | "glass-solid";
}

export default function BentoCard({
  children,
  className = "",
  style,
  onClick,
  delay = 0,
  cta = false,
  ctaDark = false,
  as = "glass-solid",
}: BentoCardProps) {
  const base = as === "glass" ? "bv-glass" : "bv-glass-solid";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={onClick ? { y: -4, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } } : undefined}
      onClick={onClick}
      style={style}
      className={`${base} relative p-6 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
      {cta && (
        <span
          className={`absolute right-4 bottom-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
            ${ctaDark ? "bg-[#0a0a0a] text-white" : "bg-white/95 text-black"}`}
          aria-hidden
        >
          ↗
        </span>
      )}
    </motion.section>
  );
}
