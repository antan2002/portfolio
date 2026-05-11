import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import BentoCard from "../components/BentoCard";
import ProjectMosaic from "../components/ProjectMosaic";
import StackSection from "../components/StackSection";
import MasterSection from "../components/MasterSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/StatsSection";
import ProjectDetail from "../components/ProjectDetail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antan Roy — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Antan Roy — full-stack software engineer building AI-powered web apps.",
      },
      { property: "og:title", content: "Antan Roy — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Antan Roy — full-stack software engineer building AI-powered web apps.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

export type Project = {
  id: string;
  name: string;
  short: string;
  description: string;
  full: string;
  tech: string[];
  status: string;
  type: string;
  year: string;
  features: { title: string; body: string }[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    id: "intellicart",
    name: "IntelliCart",
    short: "Personalized product recommendation system powered by Gemini Pro.",
    description:
      "A smart e-commerce platform that learns user preferences and surfaces hyper-relevant products in real time.",
    full: "IntelliCart blends a MongoDB product catalog with Gemini Pro LLM-driven recommendations. The React frontend talks to a Node service that crafts contextual prompts from session behaviour, returning ranked product lists and natural-language explanations.",
    tech: ["MongoDB", "React", "Node", "Gemini"],
    status: "Live",
    type: "Full-Stack AI",
    year: "2025",
    features: [
      {
        title: "LLM Recommendations",
        body: "Gemini Pro generates contextual product matches from user session signals.",
      },
      {
        title: "Realtime Cart",
        body: "Optimistic UI with Mongo change-streams keeps cart state fresh across tabs.",
      },
      {
        title: "Smart Search",
        body: "Embedding-based semantic search beats keyword-only matching.",
      },
      {
        title: "Admin Insights",
        body: "Dashboard surfaces top intents, drop-offs, and conversion funnels.",
      },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "ai-trip",
    name: "AI Trip Generator",
    short: "AI-crafted travel itineraries tailored to budget, vibe and timeline.",
    description:
      "Plan a week abroad in 30 seconds — the AI assembles routes, stays and food spots aligned with your taste.",
    full: "Users enter a destination, dates, budget and interests. A Node backend orchestrates GenAI calls to produce day-by-day itineraries, complete with travel times, restaurant picks, and packing tips.",
    tech: ["React", "Node", "MongoDB", "GenAI"],
    status: "Live",
    type: "AI Web App",
    year: "2025",
    features: [
      {
        title: "Smart Itineraries",
        body: "Day-by-day plans with travel times and budget breakdowns.",
      },
      { title: "Taste Profiles", body: "Saves preferences so future trips improve automatically." },
      { title: "Shareable Links", body: "Public URLs let friends collaborate on the trip." },
      { title: "Offline Export", body: "Download itineraries as PDF for offline access." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "chargex",
    name: "ChargeX",
    short: "Full-stack EV charger marketplace with Stripe checkout.",
    description:
      "End-to-end e-commerce for electric vehicle chargers: catalog, cart, payments, orders and admin.",
    full: "ChargeX ships a production-ready EV charger storefront. React on the front, Node + Express on the back, Stripe for payments and webhooks for fulfilment.",
    tech: ["React", "Node", "Stripe"],
    status: "Live",
    type: "E-Commerce",
    year: "2024",
    features: [
      { title: "Stripe Checkout", body: "PCI-safe payments with webhook-driven order fulfilment." },
      { title: "Inventory Mgmt", body: "Admin CRUD with stock thresholds and low-stock alerts." },
      {
        title: "Order Tracking",
        body: "Buyers get realtime status from paid → shipped → delivered.",
      },
      { title: "Mobile-First", body: "Optimised for one-handed checkout on the go." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "chess",
    name: "Chess Clone",
    short: "Real-time two-player chess powered by Socket.IO.",
    description:
      "Play live chess in the browser — full rules engine, room-based matchmaking and move sync under 50ms.",
    full: "A from-scratch chess platform: drag-to-move UI, full legal-move validation, Socket.IO rooms for multiplayer, and a spectator mode.",
    tech: ["CSS", "Node", "Socket.IO"],
    status: "Live",
    type: "Realtime Game",
    year: "2024",
    features: [
      { title: "Live Multiplayer", body: "Socket.IO rooms with sub-50ms move sync." },
      { title: "Legal Moves Only", body: "Server-side rules engine prevents cheating." },
      { title: "Spectator Mode", body: "Watch ongoing games with replay scrubbing." },
      { title: "Game History", body: "Every move logged in algebraic notation." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "facebrain",
    name: "FaceBrain",
    short: "Face detection web app using the Clarifai API.",
    description:
      "Upload an image, get bounding boxes around every face — auth, history and rate limiting included.",
    full: "FaceBrain pairs a React frontend with a Node + PostgreSQL backend. Users sign up, submit image URLs, and the app calls a face-detection API to draw bounding boxes.",
    tech: ["React", "Node", "Postgres"],
    status: "Live",
    type: "Computer Vision",
    year: "2023",
    features: [
      {
        title: "Face Detection",
        body: "Bounding boxes drawn over every detected face in milliseconds.",
      },
      { title: "User Auth", body: "Bcrypt-hashed credentials with session tokens." },
      { title: "Submission Log", body: "PostgreSQL tracks per-user history and counts." },
      { title: "Rate Limiting", body: "Prevents abuse of the upstream vision API." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "spacer",
    name: "Spacer",
    short: "Space-themed landing page with smooth parallax storytelling.",
    description:
      "A scroll-driven cinematic landing page using only HTML, CSS and vanilla JS — zero frameworks.",
    full: "Spacer is a love letter to vanilla web tech. Layered parallax sections, GSAP-free scroll animations, and a hand-tuned starfield create a cinematic feel.",
    tech: ["JS", "HTML", "CSS"],
    status: "Live",
    type: "Landing Page",
    year: "2023",
    features: [
      { title: "Parallax Layers", body: "Multi-depth scrolling for cinematic feel." },
      { title: "Pure CSS Stars", body: "Animated starfield without a single image asset." },
      { title: "Sub-30KB JS", body: "No frameworks — every byte hand-written." },
      { title: "Lighthouse 100", body: "Perfect performance, accessibility and SEO scores." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
];

const stack = [
  { name: "React", color: "#61DAFB", letter: "R" },
  { name: "Node", color: "#3C873A", letter: "N" },
  { name: "TS", color: "#3178C6", letter: "T" },
  { name: "Mongo", color: "#10AA50", letter: "M" },
  { name: "PG", color: "#336791", letter: "P" },
  { name: "AI", color: "#A855F7", letter: "A" },
];

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const now =
    new Date().toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) +
    " May 11, 2026";

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      {active ? (
        <ProjectDetail project={active} onBack={() => setActive(null)} />
      ) : (
        <Bento onOpen={setActive} now={now} />
      )}
    </div>
  );
}

function Bento({ onOpen, now }: { onOpen: (p: Project) => void; now: string }) {
  return (
    <main className="max-w-[1280px] mx-auto px-5 py-5">
      <TopBar now={now} />

      <div
        className="grid grid-cols-[240px_1fr_1fr] grid-rows-[auto_auto] gap-2.5"
        style={{
          gridTemplateAreas: `
            "rail"
            "stack"
            "projects"
            "master"
            "contact"
            "stats"
          `,
        }}
      >
        {/* Left rail */}
        <div style={{ gridArea: "rail" }} className="flex flex-col gap-4 pt-1">
          <p className="text-sm text-[#b3b3b3] leading-relaxed m-0">
            I specialize in crafting AI-powered, performant web experiences. With a passion for
            clean architectures and fast feedback loops, I turn fuzzy product ideas into shipped,
            delightful interfaces across the modern web.
          </p>
          <button
            onClick={() => onOpen(projects[0])}
            className="w-fit px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-[#ffffff] hover:bg-white/10 transition-colors"
          >
            More about Me
          </button>
          <div className="flex gap-2">
            <a
              href="https://github.com/antanroy"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm text-[#b3b3b3] hover:bg-white/10 hover:text-[#ffffff] transition-colors"
            >
              G
            </a>
            <a
              href="https://linkedin.com"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm text-[#b3b3b3] hover:bg-white/10 hover:text-[#ffffff] transition-colors"
            >
              in
            </a>
            <a
              href="mailto:antan@example.com"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm text-[#b3b3b3] hover:bg-white/10 hover:text-[#ffffff] transition-colors"
            >
              @
            </a>
          </div>
          <div className="flex flex-col gap-1 text-xs text-[#b3b3b3] mt-auto pt-4">
            <div>&copy; Antan Roy &middot; 2026</div>
            <a href="#" className="hover:text-[#ffffff]">
              Licensing
            </a>
            <a href="#" className="hover:text-[#ffffff]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#ffffff]">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Stack */}
        <BentoCard className="!bg-[var(--bv-blue)]" style={{ gridArea: "stack" }} delay={0.15}>
          <StackSection stack={stack} />
        </BentoCard>

        {/* Projects mosaic */}
        <BentoCard className="!p-3.5" style={{ gridArea: "projects" }} delay={0.1}>
          <ProjectMosaic projects={projects} onOpen={onOpen} />
        </BentoCard>

        {/* Stack */}
        <BentoCard className="!bg-[var(--bv-blue)]" style={{ gridArea: "stack" }} delay={0.15}>
          <StackSection stack={stack} />
        </BentoCard>

        {/* Master */}
        <div
          style={{ gridArea: "master" }}
          className="bg-[#242424] rounded-[24px] p-5 min-h-[220px] cursor-pointer hover:bg-[#2a2a2a] transition-colors"
          onClick={() => onOpen(projects[1])}
        >
          <div className="bg-[#000000] rounded-[10px] p-2 mb-3 border border-white/10">
            <div className="flex gap-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex gap-1.5 min-h-[90px]">
              <div className="w-[28%] bg-white/5 rounded-lg" />
              <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-2 rounded-lg">
                  <div className="text-[11px] font-bold text-white leading-tight">Empower</div>
                  <div className="text-[11px] font-bold text-white leading-tight">
                    Your Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-extrabold text-[#ffffff]">Software Engineer</h3>
        </div>

        {/* Contact */}
        <div
          style={{ gridArea: "contact" }}
          className="bg-[#f7a307] rounded-[24px] p-5 min-h-[200px] relative overflow-hidden"
        >
          <h3 className="text-lg font-bold mb-3 text-black">Contact</h3>
          <div
            className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full opacity-60"
            style={{
              background: "radial-gradient(circle at 35% 35%, #1f2937, #0a0a0a 70%)",
              boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.5)",
            }}
          />
          <a
            href="mailto:antan@example.com"
            className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-black flex items-center justify-center text-sm font-bold text-white"
          >
            ↗
          </a>
        </div>

        {/* Stats */}
        <div
          style={{ gridArea: "stats" }}
          className="bg-[#000000] rounded-[24px] p-5 min-h-[200px] flex flex-col items-center justify-center gap-2 text-center"
        >
          <div className="text-yellow-400 text-sm tracking-[2px]">★★★★★</div>
          <div className="text-4xl font-extrabold text-[#ffffff]">7.5</div>
          <div className="text-[11px] tracking-[0.18em] text-[#b3b3b3] uppercase font-medium">
            CGPA
          </div>
          <div className="flex mt-2">
            {["A", "B", "C"].map((letter, i) => (
              <div
                key={letter}
                className="w-7 h-7 rounded-full border-2 border-[#000000] flex items-center justify-center font-bold text-[11px] text-black -ml-2 first:ml-0"
                style={{ background: i === 0 ? "#22c55e" : i === 1 ? "#3b82f6" : "#f97316" }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status FAB */}
      <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-[24px] bg-white/5 border border-white/10 text-xs font-medium text-[#b3b3b3]">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        Open to work
      </div>

      {/* Full-width sections below the grid */}
      <ExperienceTimeline />
      <ContactForm />
    </main>
  );
}

function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <main className="max-w-[1080px] mx-auto px-5 py-8 pb-20">
      <button
        onClick={onBack}
        className="bg-transparent text-[#b3b3b3] border border-white/10 px-4 py-2 rounded-[24px] text-xs font-semibold mb-6 hover:text-[#ffffff] hover:border-white/20 transition-colors"
      >
        ← Back
      </button>

      <div className="text-[11px] tracking-[0.18em] text-[#b3b3b3] uppercase font-medium mb-2">
        {project.type}
      </div>

      <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold tracking-tight leading-none mb-4 text-[#ffffff]">
        {project.name}
      </h1>

      <p className="text-sm font-medium leading-relaxed text-[#b3b3b3] max-w-[70ch]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {[
          { label: "Status", value: project.status },
          { label: "Type", value: project.type },
          { label: "Stack", value: project.tech.join(" · ") },
          { label: "Year", value: project.year },
        ].map((m) => (
          <span
            key={m.label}
            className="text-xs px-3.5 py-2 border border-white/10 rounded-[24px] text-[#ffffff] bg-white/5"
          >
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#b3b3b3] mr-2">
              {m.label}
            </span>
            {m.value}
          </span>
        ))}
      </div>

      <div className="w-full aspect-[21/9] rounded-[24px] my-6 bg-[#0a0a0a]" />

      <h2 className="text-xl font-bold mt-8 mb-4 text-[#ffffff]">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {project.features.map((f) => (
          <div key={f.title} className="rounded-[24px] p-5 bg-white/5 border border-white/10">
            <h4 className="text-sm font-bold mb-1.5 text-[#ffffff]">{f.title}</h4>
            <p className="text-xs font-medium leading-relaxed text-[#b3b3b3]">{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-[#ffffff]">Overview</h2>
      <p className="text-sm font-medium leading-relaxed text-[#b3b3b3] max-w-[75ch]">
        {project.full}
      </p>

      <div className="flex gap-2 mt-6">
        <a
          href={project.live}
          className="px-5 py-2.5 rounded-[24px] border border-white/10 bg-white/5 text-sm font-semibold text-[#ffffff] hover:bg-white/10 transition-colors"
        >
          View Live ↗
        </a>
        <a
          href={project.github}
          className="px-5 py-2.5 rounded-[24px] border border-white/10 bg-transparent text-sm font-semibold text-[#ffffff] hover:bg-white/10 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </main>
  );
}
