import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

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

type Project = {
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

const projects: Project[] = [
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
    <>
      <style>{css}</style>
      <div className="bv-root">
        {active ? (
          <Detail project={active} onBack={() => setActive(null)} />
        ) : (
          <Bento onOpen={setActive} now={now} />
        )}
      </div>
    </>
  );
}

function Bento({ onOpen, now }: { onOpen: (p: Project) => void; now: string }) {
  return (
    <main className="bv-shell">
      {/* Top bar */}
      <header className="bv-top">
        <div className="bv-brand">
          <div className="bv-avatar">AR</div>
          <div className="bv-brand-text">
            <div className="bv-name">ANTAN R.</div>
            <div className="bv-role">SOFTWARE ENGINEER</div>
          </div>
        </div>
        <div className="bv-time">{now}</div>
        <button className="bv-menu" aria-label="Menu">≡</button>
      </header>

      <div className="bv-grid">
        {/* Left rail */}
        <aside className="bv-rail">
          <p className="bv-bio">
            I specialize in crafting AI-powered, performant web experiences. With a passion for clean architectures and fast feedback loops, I turn fuzzy product ideas into shipped, delightful interfaces across the modern web.
          </p>
          <button className="bv-pill-btn" onClick={() => onOpen(projects[0])}>More about Me</button>
          <div className="bv-socials">
            <a href="https://github.com/antanroy" className="bv-soc" aria-label="GitHub">G</a>
            <a href="https://linkedin.com" className="bv-soc" aria-label="LinkedIn">in</a>
            <a href="mailto:antan@example.com" className="bv-soc" aria-label="Email">@</a>
          </div>
          <div className="bv-foot">
            <div>© Antan Roy · 2026</div>
            <a href="#">Licensing</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </aside>

        {/* Center: projects collage */}
        <section className="bv-card bv-projects" onClick={() => onOpen(projects[0])}>
          <div className="bv-mosaic">
            {projects.slice(0, 6).map((p, i) => (
              <button
                key={p.id}
                className={`bv-tile bv-tile-${i}`}
                onClick={(e) => { e.stopPropagation(); onOpen(p); }}
              >
                <span className="bv-tile-name">{p.name}</span>
              </button>
            ))}
          </div>
          <span className="bv-card-cta" aria-hidden>↗</span>
        </section>

        {/* Stack card */}
        <section className="bv-card bv-stack">
          <h3 className="bv-card-title bv-card-title-light">My Stack</h3>
          <div className="bv-stack-row">
            {stack.map((s) => (
              <div key={s.name} className="bv-logo" style={{ background: s.color }}>{s.letter}</div>
            ))}
          </div>
          <span className="bv-card-cta bv-cta-light" aria-hidden>↗</span>
        </section>

        {/* Master / Current role */}
        <section className="bv-card bv-master" onClick={() => onOpen(projects[1])}>
          <div className="bv-master-screen">
            <div className="bv-screen-bar">
              <span /><span /><span />
            </div>
            <div className="bv-screen-body">
              <div className="bv-screen-pane" />
              <div className="bv-screen-main">
                <div className="bv-screen-card">
                  <div className="bv-screen-h">Empower</div>
                  <div className="bv-screen-h">Your Engineering</div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="bv-master-title">Software Engineer</h3>
          <span className="bv-card-cta" aria-hidden>↗</span>
        </section>

        {/* Contact */}
        <section className="bv-card bv-contact">
          <h3 className="bv-card-title bv-card-title-dark">Contact</h3>
          <div className="bv-globe" />
          <a href="mailto:antan@example.com" className="bv-card-cta bv-cta-dark" aria-label="Contact">↗</a>
        </section>

        {/* Stats */}
        <section className="bv-card bv-stats">
          <div className="bv-stars">★★★★★</div>
          <div className="bv-stat-num">7.5</div>
          <div className="bv-stat-lbl">CGPA</div>
          <div className="bv-avatars">
            <span className="bv-av" style={{ background: "#22c55e" }}>A</span>
            <span className="bv-av" style={{ background: "#3b82f6" }}>B</span>
            <span className="bv-av" style={{ background: "#f97316" }}>C</span>
          </div>
        </section>
      </div>

      <div className="bv-status-fab">
        <span className="bv-dot" /> Open to work
      </div>
    </main>
  );
}

function Detail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <main className="bv-detail">
      <button className="bv-back" onClick={onBack}>← Back</button>
      <div className="bv-kicker">{project.type}</div>
      <h1 className="bv-detail-title">{project.name}</h1>
      <p className="bv-detail-desc">{project.description}</p>

      <div className="bv-meta-row">
        <span className="bv-meta-pill"><span className="bv-meta-key">Status</span> {project.status}</span>
        <span className="bv-meta-pill"><span className="bv-meta-key">Type</span> {project.type}</span>
        <span className="bv-meta-pill"><span className="bv-meta-key">Stack</span> {project.tech.join(" · ")}</span>
        <span className="bv-meta-pill"><span className="bv-meta-key">Year</span> {project.year}</span>
      </div>

      <div className="bv-cover" />

      <h2 className="bv-section-h">Features</h2>
      <div className="bv-features">
        {project.features.map((f) => (
          <div key={f.title} className="bv-card bv-feat">
            <h4>{f.title}</h4>
            <p>{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="bv-section-h">Overview</h2>
      <p className="bv-detail-full">{project.full}</p>

      <div className="bv-cta-row">
        <a href={project.live} className="bv-pill-btn">View Live ↗</a>
        <a href={project.github} className="bv-pill-btn bv-pill-btn-ghost">GitHub ↗</a>
      </div>
    </main>
  );
}

const css = `
:root {
  --bv-bg: #000000;
  --bv-surface: #1d1d1d;
  --bv-surface-2: #242424;
  --bv-surface-3: #333333;
  --bv-text: #ffffff;
  --bv-text-2: #eeeeee;
  --bv-text-3: #999999;
  --bv-radius: 18px;
  --bv-radius-sm: 8px;
  --bv-shadow: rgba(0,0,0,0.2) 0 2px 4px 0;
  --bv-blue: #2563eb;
  --bv-orange: #f97316;
  --bv-green: #22c55e;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--bv-bg); color: var(--bv-text);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 12px; font-weight: 600; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }

.bv-root { min-height: 100vh; padding: 20px; }
.bv-shell { max-width: 1280px; margin: 0 auto; }

/* Top bar */
.bv-top { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
.bv-brand { display: flex; align-items: center; gap: 10px; background: var(--bv-surface); border-radius: 999px; padding: 7px 16px 7px 7px; }
.bv-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #60a5fa, #a78bfa); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #0b0b0b; }
.bv-brand-text { line-height: 1.1; }
.bv-name { font-weight: 800; font-size: 13px; letter-spacing: 0.02em; }
.bv-role { font-weight: 500; font-size: 10px; color: var(--bv-text-3); letter-spacing: 0.12em; }
.bv-time { flex: 1; color: var(--bv-text-3); font-size: 12px; }
.bv-menu { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--bv-surface-3); background: transparent; color: var(--bv-text); font-size: 16px; display: inline-flex; align-items: center; justify-content: center; }

/* Grid */
.bv-grid {
  display: grid;
  grid-template-columns: 240px 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
  grid-template-areas:
    "rail projects stack"
    "rail projects master"
    "rail contact stats"
    "rail master2 master2";
}

@media (max-width: 1024px) {
  .bv-grid { grid-template-columns: 1fr 1fr; grid-template-areas:
    "rail rail"
    "projects projects"
    "stack master"
    "contact stats"; }
}
@media (max-width: 640px) {
  .bv-grid { grid-template-columns: 1fr; grid-template-areas:
    "rail" "projects" "stack" "master" "contact" "stats"; }
}

/* Left rail */
.bv-rail { grid-area: rail; padding: 10px 4px; display: flex; flex-direction: column; gap: 20px; }
.bv-bio { color: var(--bv-text-2); font-weight: 500; font-size: 13px; line-height: 1.55; margin: 0; }
.bv-pill-btn { background: var(--bv-surface-2); color: var(--bv-text); border: 1px solid var(--bv-surface-3); border-radius: 999px; padding: 10px 18px; font-size: 12px; font-weight: 600; transition: background 200ms, border-color 200ms; width: fit-content; }
.bv-pill-btn:hover, .bv-pill-btn:focus-visible { background: var(--bv-surface-3); outline: none; border-color: var(--bv-text-3); }
.bv-pill-btn-ghost { background: transparent; }
.bv-socials { display: flex; gap: 7px; }
.bv-soc { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--bv-surface-3); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; color: var(--bv-text-2); transition: all 200ms; }
.bv-soc:hover { background: var(--bv-surface-2); color: var(--bv-text); }
.bv-foot { display: flex; flex-direction: column; gap: 7px; color: var(--bv-text-3); font-size: 12px; font-weight: 500; margin-top: auto; padding-top: 30px; }
.bv-foot a:hover { color: var(--bv-text); }

/* Card base */
.bv-card { position: relative; background: var(--bv-surface); border-radius: var(--bv-radius); padding: 20px; box-shadow: var(--bv-shadow); overflow: hidden; transition: transform 200ms, background 200ms; opacity: 0; transform: translateY(8px); animation: bvFade 0.5s ease forwards; }
.bv-card:hover { transform: translateY(-2px); }
@keyframes bvFade { to { opacity: 1; transform: translateY(0); } }

.bv-card-title { font-size: 22px; font-weight: 700; margin: 0 0 14px; letter-spacing: -0.01em; }
.bv-card-title-light { color: #fff; }
.bv-card-title-dark { color: #0a0a0a; }
.bv-card-cta { position: absolute; right: 14px; bottom: 14px; width: 30px; height: 30px; border-radius: 50%; background: rgba(255,255,255,0.95); color: #000; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; }
.bv-cta-light { background: rgba(255,255,255,0.95); color: #1e3a8a; }
.bv-cta-dark { background: #0a0a0a; color: #fff; }

/* Projects mosaic */
.bv-projects { grid-area: projects; min-height: 380px; cursor: pointer; padding: 14px; background: #0a0a0a; }
.bv-mosaic { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 8px; height: 100%; min-height: 360px; }
.bv-tile { border: none; border-radius: 10px; padding: 12px; color: #fff; font-weight: 700; font-size: 13px; text-align: left; display: flex; align-items: flex-end; cursor: pointer; transition: transform 200ms, filter 200ms; }
.bv-tile:hover, .bv-tile:focus-visible { transform: scale(1.02); filter: brightness(1.15); outline: none; }
.bv-tile-name { background: rgba(0,0,0,0.55); padding: 4px 8px; border-radius: 6px; font-size: 11px; }
.bv-tile-0 { grid-column: span 1; grid-row: span 2; background: linear-gradient(135deg, #1e293b, #334155); }
.bv-tile-1 { background: linear-gradient(135deg, #422006, #78350f); }
.bv-tile-2 { background: linear-gradient(135deg, #1f2937, #111827); }
.bv-tile-3 { grid-column: span 2; background: linear-gradient(135deg, #4c1d95, #7c3aed); }
.bv-tile-4 { background: linear-gradient(135deg, #064e3b, #047857); }
.bv-tile-5 { grid-column: span 2; background: linear-gradient(135deg, #831843, #be185d); }

/* Stack card */
.bv-stack { grid-area: stack; background: var(--bv-blue); min-height: 180px; }
.bv-stack-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
.bv-logo { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #fff; font-size: 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.25); border: 2px solid rgba(255,255,255,0.2); }

/* Master card */
.bv-master { grid-area: master; min-height: 220px; cursor: pointer; background: var(--bv-surface); }
.bv-master-screen { background: #0a0a0a; border-radius: 10px; padding: 8px; margin-bottom: 14px; border: 1px solid var(--bv-surface-3); }
.bv-screen-bar { display: flex; gap: 4px; margin-bottom: 8px; }
.bv-screen-bar span { width: 8px; height: 8px; border-radius: 50%; background: var(--bv-surface-3); }
.bv-screen-body { display: flex; gap: 6px; min-height: 90px; }
.bv-screen-pane { width: 28%; background: var(--bv-surface-2); border-radius: 6px; }
.bv-screen-main { flex: 1; background: var(--bv-surface-2); border-radius: 6px; display: flex; align-items: center; justify-content: center; padding: 10px; }
.bv-screen-card { background: linear-gradient(135deg, #ec4899, #8b5cf6); padding: 10px 14px; border-radius: 8px; }
.bv-screen-h { font-size: 11px; font-weight: 700; color: #fff; line-height: 1.2; }
.bv-master-title { font-family: Inter; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: -0.02em; }

/* Contact */
.bv-contact { grid-area: contact; background: var(--bv-orange); min-height: 200px; }
.bv-contact .bv-card-title-dark { color: #1a1a1a; }
.bv-globe { position: absolute; right: -20px; bottom: -20px; width: 160px; height: 160px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #1f2937, #0a0a0a 70%);
  box-shadow: inset -10px -10px 30px rgba(0,0,0,0.6);
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
    radial-gradient(circle at 35% 35%, #1f2937, #0a0a0a 70%);
  background-size: 8px 8px, 100% 100%;
}

/* Stats */
.bv-stats { grid-area: stats; background: #0a0a0a; min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; text-align: center; }
.bv-stars { color: #facc15; font-size: 14px; letter-spacing: 2px; }
.bv-stat-num { font-size: 36px; font-weight: 800; letter-spacing: -0.02em; }
.bv-stat-lbl { font-size: 11px; letter-spacing: 0.18em; color: var(--bv-text-3); text-transform: uppercase; }
.bv-avatars { display: flex; gap: -6px; margin-top: 8px; }
.bv-av { width: 28px; height: 28px; border-radius: 50%; border: 2px solid #0a0a0a; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 11px; color: #0a0a0a; margin-left: -8px; }
.bv-av:first-child { margin-left: 0; }

/* Status FAB */
.bv-status-fab { position: fixed; right: 20px; bottom: 20px; background: var(--bv-surface); border: 1px solid var(--bv-surface-3); border-radius: 999px; padding: 8px 14px; font-size: 12px; color: var(--bv-text-2); display: flex; align-items: center; gap: 8px; z-index: 50; box-shadow: var(--bv-shadow); }
.bv-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--bv-green); box-shadow: 0 0 0 0 rgba(34,197,94,0.6); animation: bvPulse 2s infinite; }
@keyframes bvPulse { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); } 70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); } }

/* Detail */
.bv-detail { max-width: 1080px; margin: 0 auto; padding: 32px 20px 80px; animation: bvFade .5s ease forwards; opacity: 0; }
.bv-back { background: transparent; color: var(--bv-text-3); border: 1px solid var(--bv-surface-3); padding: 8px 16px; border-radius: 999px; font-size: 12px; margin-bottom: 24px; }
.bv-back:hover { color: var(--bv-text); border-color: var(--bv-text-3); }
.bv-kicker { font-size: 11px; letter-spacing: 0.18em; color: var(--bv-text-3); text-transform: uppercase; margin-bottom: 8px; }
.bv-detail-title { font-size: clamp(36px, 6vw, 64px); font-weight: 800; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1; }
.bv-detail-desc { color: var(--bv-text-3); font-weight: 500; font-size: 15px; line-height: 1.6; max-width: 70ch; }
.bv-meta-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 20px; }
.bv-meta-pill { font-size: 12px; padding: 8px 14px; border: 1px solid var(--bv-surface-3); border-radius: 999px; color: var(--bv-text); background: var(--bv-surface); }
.bv-meta-key { color: var(--bv-text-3); margin-right: 8px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }
.bv-cover { width: 100%; aspect-ratio: 21 / 9; border-radius: 14px; margin: 24px 0; background:
  radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0) 0 0 / 14px 14px,
  linear-gradient(135deg, #111 0%, #1a1a1a 100%); }
.bv-section-h { font-size: 20px; font-weight: 700; margin: 36px 0 14px; }
.bv-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.bv-feat h4 { margin: 0 0 6px; font-size: 14px; font-weight: 700; }
.bv-feat p { color: var(--bv-text-3); font-weight: 500; font-size: 12px; line-height: 1.55; margin: 0; }
.bv-detail-full { color: var(--bv-text-3); font-weight: 500; font-size: 13px; line-height: 1.7; max-width: 75ch; }
.bv-cta-row { display: flex; gap: 8px; margin-top: 24px; }

@media (max-width: 640px) {
  .bv-features { grid-template-columns: 1fr; }
  .bv-top { flex-wrap: wrap; }
  .bv-time { order: 3; flex-basis: 100%; }
}
`;
