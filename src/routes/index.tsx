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
      { name: "description", content: "Portfolio of Antan Roy — full-stack software engineer building AI-powered web apps." },
      { property: "og:title", content: "Antan Roy — Software Engineer" },
      { property: "og:description", content: "Portfolio of Antan Roy — full-stack software engineer building AI-powered web apps." },
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
    description: "A smart e-commerce platform that learns user preferences and surfaces hyper-relevant products in real time.",
    full: "IntelliCart blends a MongoDB product catalog with Gemini Pro LLM-driven recommendations. The React frontend talks to a Node service that crafts contextual prompts from session behaviour, returning ranked product lists and natural-language explanations.",
    tech: ["MongoDB", "React", "Node", "Gemini"],
    status: "Live",
    type: "Full-Stack AI",
    year: "2025",
    features: [
      { title: "LLM Recommendations", body: "Gemini Pro generates contextual product matches from user session signals." },
      { title: "Realtime Cart", body: "Optimistic UI with Mongo change-streams keeps cart state fresh across tabs." },
      { title: "Smart Search", body: "Embedding-based semantic search beats keyword-only matching." },
      { title: "Admin Insights", body: "Dashboard surfaces top intents, drop-offs, and conversion funnels." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "ai-trip",
    name: "AI Trip Generator",
    short: "AI-crafted travel itineraries tailored to budget, vibe and timeline.",
    description: "Plan a week abroad in 30 seconds — the AI assembles routes, stays and food spots aligned with your taste.",
    full: "Users enter a destination, dates, budget and interests. A Node backend orchestrates GenAI calls to produce day-by-day itineraries, complete with travel times, restaurant picks, and packing tips.",
    tech: ["React", "Node", "MongoDB", "GenAI"],
    status: "Live",
    type: "AI Web App",
    year: "2025",
    features: [
      { title: "Smart Itineraries", body: "Day-by-day plans with travel times and budget breakdowns." },
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
    description: "End-to-end e-commerce for electric vehicle chargers: catalog, cart, payments, orders and admin.",
    full: "ChargeX ships a production-ready EV charger storefront. React on the front, Node + Express on the back, Stripe for payments and webhooks for fulfilment.",
    tech: ["React", "Node", "Stripe"],
    status: "Live",
    type: "E-Commerce",
    year: "2024",
    features: [
      { title: "Stripe Checkout", body: "PCI-safe payments with webhook-driven order fulfilment." },
      { title: "Inventory Mgmt", body: "Admin CRUD with stock thresholds and low-stock alerts." },
      { title: "Order Tracking", body: "Buyers get realtime status from paid → shipped → delivered." },
      { title: "Mobile-First", body: "Optimised for one-handed checkout on the go." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "chess",
    name: "Chess Clone",
    short: "Real-time two-player chess powered by Socket.IO.",
    description: "Play live chess in the browser — full rules engine, room-based matchmaking and move sync under 50ms.",
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
    description: "Upload an image, get bounding boxes around every face — auth, history and rate limiting included.",
    full: "FaceBrain pairs a React frontend with a Node + PostgreSQL backend. Users sign up, submit image URLs, and the app calls a face-detection API to draw bounding boxes.",
    tech: ["React", "Node", "Postgres"],
    status: "Live",
    type: "Computer Vision",
    year: "2023",
    features: [
      { title: "Face Detection", body: "Bounding boxes drawn over every detected face in milliseconds." },
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
    description: "A scroll-driven cinematic landing page using only HTML, CSS and vanilla JS — zero frameworks.",
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

  const now = new Date().toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) +
    " May 11, 2026";

  return (
    <div className="min-h-screen bg-[var(--bv-bg)] text-[var(--bv-text)]">
      <div className="bv-noise" />
      <AnimatePresence mode="wait">
        {active ? (
          <ProjectDetail key="detail" project={active} onBack={() => setActive(null)} />
        ) : (
          <Bento key="bento" onOpen={setActive} now={now} />
        )}
      </AnimatePresence>

      {/* Status FAB */}
      <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-[12px] text-xs font-medium text-[var(--bv-text-2)] shadow-lg">
        <div className="bv-dot-pulse" />
        Open to work
      </div>
    </div>
  );
}

function Bento({ onOpen, now }: { onOpen: (p: Project) => void; now: string }) {
  return (
    <main className="max-w-[1280px] mx-auto px-5 py-5">
      <TopBar now={now} />

      <div className="grid grid-cols-[240px_1fr_1fr] grid-rows-[auto_auto] gap-2.5"
        style={{
          gridTemplateAreas: `
            "rail projects stack"
            "rail projects master"
            "rail contact stats"
          `,
        }}
      >
        {/* Left sidebar */}
        <div style={{ gridArea: "rail" }}>
          <Sidebar onMoreAboutMe={() => onOpen(projects[0])} />
        </div>

        {/* Projects mosaic */}
        <BentoCard className="!p-3.5" style={{ gridArea: "projects" }} delay={0.1}>
          <ProjectMosaic projects={projects} onOpen={onOpen} />
        </BentoCard>

        {/* Stack */}
        <BentoCard className="!bg-[var(--bv-blue)]" style={{ gridArea: "stack" }} delay={0.15}>
          <StackSection stack={stack} />
        </BentoCard>

        {/* Master / Role */}
        <BentoCard style={{ gridArea: "master" }} delay={0.2} onClick={() => onOpen(projects[1])} cta>
          <MasterSection />
        </BentoCard>

        {/* Contact */}
        <BentoCard className="!bg-[var(--bv-orange)]" style={{ gridArea: "contact" }} delay={0.25}>
          <ContactSection />
        </BentoCard>

        {/* Stats */}
        <BentoCard className="!bg-[#0a0a0a]" style={{ gridArea: "stats" }} delay={0.3}>
          <StatsSection />
        </BentoCard>
      </div>
    </main>
  );
}
