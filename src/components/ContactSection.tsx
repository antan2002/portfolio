import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight m-0 mb-4 text-[#1a1a1a]">
        Contact
      </h3>

      {/* Decorative globe */}
      <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full opacity-50"
        style={{
          background: `
            radial-gradient(circle at 35% 35%, #1f2937, #0a0a0a 70%),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundBlendMode: "overlay",
          backgroundSize: "100% 100%, 8px 8px",
          boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.6)",
        }}
      />

      <motion.a
        href="mailto:antan@example.com"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
        className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-[#0a0a0a] flex items-center justify-center text-sm font-bold text-white z-10"
        aria-label="Contact"
      >
        ↗
      </motion.a>
    </>
  );
}
