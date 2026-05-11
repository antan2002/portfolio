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
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Space+Mono:wght@400;700&display=swap",
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
    full: "IntelliCart blends a MongoDB product catalog with Gemini Pro LLM-driven recommendations. The React frontend talks to a Node service that crafts contextual prompts from session behaviour, returning ranked product lists and natural-language explanations. Built for sub-second response with caching and streaming.",
    tech: ["MongoDB", "React.js", "Node.js", "Gemini Pro"],
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
    full: "Users enter a destination, dates, budget and interests. A Node backend orchestrates GenAI calls to produce day-by-day itineraries, complete with travel times, restaurant picks, and packing tips. Saved trips persist in MongoDB and can be shared via a public link.",
    tech: ["React.js", "Node.js", "MongoDB", "GenAI"],
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
    full: "ChargeX ships a production-ready EV charger storefront. React on the front, Node + Express on the back, Stripe for payments and webhooks for fulfilment. Admin tools manage inventory, orders and refunds. Designed mobile-first for on-the-road buyers.",
    tech: ["React.js", "Node.js", "Stripe API"],
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
    name: "Chess.com Clone",
    short: "Real-time two-player chess powered by Socket.IO.",
    description: "Play live chess in the browser — full rules engine, room-based matchmaking and move sync under 50ms.",
    full: "A from-scratch chess platform: drag-to-move UI, full legal-move validation (including castling and en passant), Socket.IO rooms for multiplayer, and a spectator mode. Server enforces move legality so clients can't cheat.",
    tech: ["CSS", "Node.js", "Socket.IO"],
    status: "Live",
    type: "Realtime Game",
    year: "2024",
    features: [
      { title: "Live Multiplayer", body: "Socket.IO rooms with sub-50ms move sync." },
      { title: "Legal Moves Only", body: "Server-side rules engine prevents cheating." },
      { title: "Spectator Mode", body: "Watch ongoing games with replay scrubbing." },
      { title: "Game History", body: "Every move logged in algebraic notation, exportable as PGN." },
    ],
    github: "https://github.com/antanroy",
    live: "#",
  },
  {
    id: "facebrain",
    name: "FaceBrain",
    short: "Face detection web app using the Clarifai/Brain.io API.",
    description: "Upload an image, get bounding boxes around every face — auth, history and rate limiting included.",
    full: "FaceBrain pairs a React frontend with a Node + PostgreSQL backend. Users sign up, submit image URLs, and the app calls a face-detection API to draw bounding boxes. Per-user submission count is tracked in Postgres for analytics and rate limiting.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
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
    name: "Spacer-main",
    short: "Space-themed landing page with smooth parallax storytelling.",
    description: "A scroll-driven cinematic landing page using only HTML, CSS and vanilla JS — zero frameworks.",
    full: "Spacer is a love letter to vanilla web tech. Layered parallax sections, GSAP-free scroll animations, and a hand-tuned starfield create a cinematic feel — all under 30KB of JS. Built as a study in performance and pure CSS craft.",
    tech: ["React", "JavaScript", "HTML/CSS"],
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

const skills = ["C++", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Socket.io", "OpenAI", "Tailwind", "Express"];
const coursework = ["DSA", "OS", "DBMS", "Computer Networks", "OOP", "System Design"];
const experience = [
  { role: "Software Engineer", org: "hrolled", date: "2025 — Present" },
  { role: "Embedded Engineer", org: "C S to Green Energy", date: "2024" },
  { role: "Summer Intern", org: "Goldman Sachs", date: "2024" },
  { role: "Dev Intern", org: "Accenture", date: "2023" },
  { role: "Contributor", org: "Google Summer of Code", date: "2023" },
];

function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject]);

  return (
    <>
      <style>{css}</style>
      <div className="ar-root">
        <Nav />
        {activeProject ? (
          <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />
        ) : (
          <Main onOpen={setActiveProject} />
        )}
      </div>
    </>
  );
}

function Nav() {
  return (
    <nav className="ar-nav">
      <div className="ar-nav-inner">
        <a href="#" className="ar-logo">AR.</a>
        <div className="ar-nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="ar-status"><span className="ar-dot" /> Open to work</div>
      </div>
    </nav>
  );
}

function Main({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <main className="ar-grid" id="home">
      {/* Hero */}
      <section className="card hero" style={{ animationDelay: "0.05s" }}>
        <div className="badge"><span className="ar-dot" /> Available for work</div>
        <h1 className="hero-title">ANTAN<br />/ ROY</h1>
        <p className="bio">
          Full-stack software engineer crafting AI-powered web experiences. I love
          turning fuzzy product ideas into shipped, performant interfaces — from
          realtime systems to LLM-driven workflows.
        </p>
        <div className="hero-cta">
          <a href="mailto:antan@example.com" className="btn">Email ↗</a>
          <a href="https://github.com/antanroy" className="btn">GitHub ↗</a>
          <a href="https://linkedin.com" className="btn">LinkedIn ↗</a>
        </div>
      </section>

      {/* Current Role */}
      <section className="card role" style={{ animationDelay: "0.1s" }}>
        <div className="kicker">CURRENT ROLE</div>
        <div className="role-head">
          <h3>hrolled</h3>
          <span className="badge sm"><span className="ar-dot" /> Current</span>
        </div>
        <div className="meta-line">Software Engineer · 2025 — Present</div>
        <p className="bio">Building AI-driven hiring tooling — LLM pipelines, realtime collab and a snappy React frontend.</p>
      </section>

      {/* Skills */}
      <section className="card skills" style={{ animationDelay: "0.15s" }}>
        <div className="kicker">STACK</div>
        <h3>Full-stack toolkit</h3>
        <div className="pills">
          {skills.map((s) => <span key={s} className="pill">{s}</span>)}
        </div>
      </section>

      {/* Divider */}
      <div className="divider" id="projects">
        <span className="line" /><span className="divider-text">MY PROJECTS</span><span className="line" />
      </div>

      {projects.map((p, i) => (
        <article
          key={p.id}
          className="card project"
          style={{ animationDelay: `${0.2 + i * 0.05}s` }}
          onClick={() => onOpen(p)}
        >
          <div className="project-top">
            <div className="icon-row">
              <a href={p.github} onClick={(e) => e.stopPropagation()} className="icon-btn" aria-label="GitHub">⌥</a>
              <a href={p.live} onClick={(e) => e.stopPropagation()} className="icon-btn" aria-label="Live">↗</a>
            </div>
            <div className="icon-btn arrow">→</div>
          </div>
          <div className="dot-img" />
          <h3 className="project-name">{p.name}</h3>
          <p className="project-desc">{p.short}</p>
          <div className="pills">
            {p.tech.map((t) => <span key={t} className="pill">{t}</span>)}
          </div>
        </article>
      ))}

      {/* About */}
      <section className="card about" style={{ animationDelay: "0.5s" }}>
        <div className="kicker">ABOUT</div>
        <p className="bio">
          CS student & engineer based in India. Obsessed with clean architectures,
          fast feedback loops and the craft of UI.
        </p>
        <div className="stat">
          <div className="stat-num">7.5</div>
          <div className="stat-label">CGPA</div>
        </div>
        <div className="pills">
          {coursework.map((c) => <span key={c} className="pill">{c}</span>)}
        </div>
      </section>

      {/* Experience */}
      <section className="card exp" style={{ animationDelay: "0.55s" }}>
        <div className="kicker">EXPERIENCE</div>
        <ul className="exp-list">
          {experience.map((e) => (
            <li key={e.role + e.org}>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">{e.org}</div>
              </div>
              <div className="exp-date">{e.date}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="card contact" id="contact" style={{ animationDelay: "0.6s" }}>
        <div className="kicker">CONTACT</div>
        <h2 className="contact-title">GET IN<br />TOUCH</h2>
        <p className="bio">Open to full-time roles, freelance and interesting collaborations.</p>
        <div className="contact-links">
          <a href="https://github.com/antanroy">GitHub ↗</a>
          <a href="https://linkedin.com">LinkedIn ↗</a>
          <a href="mailto:antan@example.com">Email ↗</a>
        </div>
      </section>
    </main>
  );
}

function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <main className="ar-detail">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="kicker">{project.type}</div>
      <h1 className="detail-title">{project.name}</h1>
      <p className="detail-desc">{project.description}</p>

      <div className="meta-row">
        <span className="meta-pill"><span className="meta-key">Status</span> {project.status}</span>
        <span className="meta-pill"><span className="meta-key">Type</span> {project.type}</span>
        <span className="meta-pill"><span className="meta-key">Stack</span> {project.tech.join(" · ")}</span>
        <span className="meta-pill"><span className="meta-key">Year</span> {project.year}</span>
      </div>

      <div className="dot-img big" />

      <h2 className="section-h">Features</h2>
      <div className="features">
        {project.features.map((f) => (
          <div key={f.title} className="card feat">
            <h4>{f.title}</h4>
            <p>{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="section-h">Overview</h2>
      <p className="detail-full">{project.full}</p>

      <div className="hero-cta">
        <a href={project.live} className="btn">View Live ↗</a>
        <a href={project.github} className="btn">GitHub ↗</a>
      </div>
    </main>
  );
}

const css = `
:root {
  --bg: #080808;
  --card: #0f0f0f;
  --card-2: #161616;
  --border: #2a2a2a;
  --border-hi: #3d3d3d;
  --text: #ededed;
  --muted: #8a8a8a;
  --green: #22c55e;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: 'Space Mono', ui-monospace, monospace; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }

.ar-root { min-height: 100vh; }

.ar-nav { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(14px); background: rgba(8,8,8,0.7); border-bottom: 1px solid var(--border); }
.ar-nav-inner { max-width: 1280px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.ar-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.25rem; letter-spacing: 0.02em; }
.ar-nav-links { display: flex; gap: 28px; font-size: 0.85rem; color: var(--muted); }
.ar-nav-links a:hover { color: var(--text); }
.ar-status { font-size: 0.78rem; color: var(--muted); display: flex; align-items: center; gap: 8px; }

.ar-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 0 rgba(34,197,94,0.6); animation: pulse 2s infinite; }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
  70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}

.ar-grid { max-width: 1280px; margin: 0 auto; padding: 24px; display: grid; grid-template-columns: repeat(12, 1fr); gap: 12px; }

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  transition: border-color .25s ease, transform .25s ease, background .25s ease;
  opacity: 0;
  transform: translateY(12px);
  animation: fadeUp .6s ease forwards;
}
.card:hover { border-color: var(--border-hi); transform: translateY(-2px); }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

.hero { grid-column: span 7; grid-row: span 2; display: flex; flex-direction: column; gap: 18px; }
.role { grid-column: span 5; }
.skills { grid-column: span 5; }

.badge { display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; padding: 6px 12px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); width: fit-content; }
.badge.sm { font-size: 0.68rem; padding: 4px 10px; }

.hero-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2.5rem, 7vw, 5rem); line-height: 0.95; margin: 0; letter-spacing: -0.02em; }
.bio { color: var(--muted); font-size: 0.92rem; line-height: 1.65; margin: 0; max-width: 60ch; }
.hero-cta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
.btn { padding: 10px 18px; border: 1px solid var(--border); border-radius: 999px; font-size: 0.82rem; transition: all .2s ease; }
.btn:hover { border-color: var(--text); background: var(--card-2); }

.kicker { font-size: 0.7rem; letter-spacing: 0.18em; color: var(--muted); text-transform: uppercase; margin-bottom: 14px; }
.role h3, .skills h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.5rem; margin: 0 0 6px; }
.role-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.meta-line { color: var(--muted); font-size: 0.78rem; margin: 6px 0 14px; }

.pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
.pill { font-size: 0.72rem; padding: 5px 11px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--card-2); }

.divider { grid-column: span 12; display: flex; align-items: center; gap: 18px; margin: 24px 0 4px; }
.divider .line { flex: 1; height: 1px; background: var(--border); }
.divider-text { font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: 0.2em; font-size: 0.85rem; color: var(--muted); }

.project { grid-column: span 4; cursor: pointer; display: flex; flex-direction: column; gap: 12px; }
.project-top { display: flex; justify-content: space-between; align-items: center; }
.icon-row { display: flex; gap: 6px; }
.icon-btn { width: 32px; height: 32px; border: 1px solid var(--border); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--muted); background: var(--card-2); transition: all .2s ease; }
.icon-btn:hover { color: var(--text); border-color: var(--text); }
.icon-btn.arrow { font-size: 1rem; }

.dot-img {
  width: 100%; aspect-ratio: 16 / 10; border-radius: 12px; border: 1px solid var(--border);
  background:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0) 0 0 / 14px 14px,
    linear-gradient(135deg, #111 0%, #1a1a1a 100%);
}
.dot-img.big { aspect-ratio: 21 / 9; margin: 24px 0; }

.project-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.35rem; margin: 4px 0 0; }
.project-desc { color: var(--muted); font-size: 0.85rem; line-height: 1.55; margin: 0; }

.about { grid-column: span 4; }
.exp { grid-column: span 4; }
.contact { grid-column: span 4; }

.stat { margin: 18px 0; }
.stat-num { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 3rem; line-height: 1; }
.stat-label { font-size: 0.72rem; letter-spacing: 0.15em; color: var(--muted); text-transform: uppercase; margin-top: 4px; }

.exp-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.exp-list li { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid var(--border); }
.exp-list li:last-child { border-bottom: none; padding-bottom: 0; }
.exp-role { font-size: 0.92rem; }
.exp-org { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }
.exp-date { font-size: 0.75rem; color: var(--muted); white-space: nowrap; }

.contact-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 2.4rem; line-height: 0.95; margin: 0 0 12px; letter-spacing: -0.02em; }
.contact-links { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
.contact-links a { font-size: 0.9rem; padding: 12px 16px; border: 1px solid var(--border); border-radius: 12px; transition: all .2s ease; }
.contact-links a:hover { border-color: var(--text); background: var(--card-2); }

/* Detail */
.ar-detail { max-width: 1080px; margin: 0 auto; padding: 32px 24px 80px; animation: fadeUp .5s ease; opacity: 0; animation-fill-mode: forwards; }
.back-btn { background: transparent; color: var(--muted); border: 1px solid var(--border); padding: 8px 16px; border-radius: 999px; font-family: inherit; font-size: 0.8rem; cursor: pointer; margin-bottom: 32px; transition: all .2s; }
.back-btn:hover { color: var(--text); border-color: var(--text); }
.detail-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2.2rem, 6vw, 4rem); line-height: 1; letter-spacing: -0.02em; margin: 8px 0 18px; }
.detail-desc { color: var(--muted); font-size: 1.05rem; line-height: 1.6; max-width: 70ch; }
.meta-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.meta-pill { font-size: 0.78rem; padding: 8px 14px; border: 1px solid var(--border); border-radius: 999px; color: var(--text); background: var(--card); }
.meta-key { color: var(--muted); margin-right: 8px; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; }
.section-h { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.5rem; margin: 36px 0 16px; }
.features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.feat h4 { font-family: 'Syne', sans-serif; margin: 0 0 8px; font-size: 1.05rem; }
.feat p { color: var(--muted); font-size: 0.85rem; line-height: 1.55; margin: 0; }
.detail-full { color: var(--muted); font-size: 0.95rem; line-height: 1.7; max-width: 75ch; }

@media (max-width: 1024px) {
  .hero { grid-column: span 12; grid-row: auto; }
  .role, .skills { grid-column: span 6; }
  .project { grid-column: span 6; }
  .about, .exp, .contact { grid-column: span 6; }
}
@media (max-width: 640px) {
  .ar-nav-links { display: none; }
  .card { padding: 22px; }
  .ar-grid { padding: 16px; gap: 10px; }
  .hero, .role, .skills, .project, .about, .exp, .contact { grid-column: span 12; }
  .features { grid-template-columns: 1fr; }
}
`;
