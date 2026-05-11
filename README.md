# Portfolio — Antan Roy

Full-stack software engineer portfolio built with [TanStack Start](https://tanstack.com/start/latest), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start/latest) (React 19) |
| Routing | [TanStack Router](https://tanstack.com/router/latest) (file-based) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + `tw-animate-css` |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) (46 components) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Icons | Lucide React |
| Hosting | Cloudflare (via `@cloudflare/vite-plugin`) |
| Package | npm / bun |

## Features

- **Bento grid layout** — dynamic card-based homepage with `grid-template-areas`
- **Dark/Light theme** — persisted toggle with CSS custom properties
- **Experience timeline** — animated scroll-triggered career history
- **Project showcase** — detail view with features, tech stack, and links
- **Stack visualization** — technology badges with proficiency levels
- **Contact form** — React Hook Form + Zod validation
- **About page** — dedicated route with bio and stats
- **Responsive design** — mobile-first breakpoints for all sections
- **Animated page transitions** — Framer Motion `AnimatePresence`
- **SSR error boundaries** — custom 404, 500 pages with h3 error normalization
- **SEO optimized** — meta tags, OG/twitter cards, semantic HTML

## Getting Started

```bash
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint check |
| `npm run format` | Prettier format |

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/            # Radix UI primitives (46 components)
│   ├── BentoCard.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── MasterSection.tsx
│   ├── ProjectDetail.tsx
│   ├── ProjectMosaic.tsx
│   ├── Sidebar.tsx
│   ├── StackSection.tsx
│   ├── StatsSection.tsx
│   ├── ThemeToggle.tsx
│   └── TopBar.tsx
├── hooks/             # Custom hooks
│   ├── use-mobile.tsx
│   └── useTheme.ts
├── lib/               # Utilities & error handling
│   ├── error-capture.ts
│   ├── error-page.ts
│   └── utils.ts
├── routes/            # File-based router pages
│   ├── __root.tsx     # Root layout + error boundaries
│   ├── about.tsx      # About page
│   └── index.tsx      # Homepage (bento grid)
├── router.tsx
├── server.ts          # Cloudflare entry
├── start.ts           # App config
├── styles.css         # Global styles + theme vars
├── routeTree.gen.ts   # Auto-generated
└── ...
```

## Deployment

The site is deployed on Cloudflare via `@cloudflare/vite-plugin`. Build with:

```bash
npm run build
```

The output is handled by the Cloudflare adapter configured in `wrangler.jsonc`.
