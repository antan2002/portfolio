import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Antan Roy" },
      { name: "description", content: "Learn more about Antan Roy — full-stack software engineer." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "6+", label: "Years Coding" },
  { value: "20+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "∞", label: "Coffee Consumed" },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bv-bg)] text-[var(--bv-text)]">
      <div className="bv-noise" />

      <div className="max-w-[800px] mx-auto px-5 py-8 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/"
            className="inline-flex bg-transparent text-[var(--bv-text-3)] border border-white/10 px-4 py-2 rounded-full text-xs font-semibold mb-8 transition-colors hover:text-white hover:border-white/20"
          >
            &larr; Back home
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-tight leading-none mb-6"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-invert max-w-none space-y-4"
        >
          <p className="text-base font-medium leading-relaxed text-[var(--bv-text-2)]">
            I'm Antan Roy, a full-stack software engineer based in the US. I specialize in building
            AI-powered web experiences that are fast, accessible, and delightful to use.
          </p>
          <p className="text-base font-medium leading-relaxed text-[var(--bv-text-2)]">
            My journey started with a curiosity about how the web works — from hand-crafted HTML
            pages to complex single-page applications. Over the years I've worked across startups
            and agencies, shipping products used by tens of thousands of users.
          </p>
          <p className="text-base font-medium leading-relaxed text-[var(--bv-text-2)]">
            When I'm not coding, you'll find me exploring new frameworks, contributing to
            open-source, or experimenting with generative AI and computer vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 bg-[var(--bv-surface)] border border-white/10 text-center"
            >
              <div className="text-3xl font-extrabold text-[var(--bv-text)]">{s.value}</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--bv-text-3)] font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-2xl font-extrabold tracking-tight mb-4"
        >
          What I bring
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
        >
          {[
            { title: "Frontend", body: "React, TypeScript, Tailwind, Framer Motion, responsive design, accessibility." },
            { title: "Backend", body: "Node, Express, REST, GraphQL, Postgres, MongoDB, Redis." },
            { title: "AI & ML", body: "Gemini Pro, OpenAI APIs, embedding search, RAG pipelines." },
            { title: "DevOps", body: "Cloudflare, Docker, CI/CD, Vite, monitoring, error tracking." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 bg-[var(--bv-surface)] border border-white/10"
            >
              <h4 className="text-sm font-bold mb-1.5 text-[var(--bv-text)]">{item.title}</h4>
              <p className="text-xs font-medium leading-relaxed text-[var(--bv-text-3)]">{item.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
