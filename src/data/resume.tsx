import { Icons } from "@/components/icons";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderKanbanIcon,
  FileTextIcon,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Socketio } from "@/components/ui/svgs/socketio";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Openai } from "@/components/ui/svgs/openai";
import { Git } from "@/components/ui/svgs/git";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Stripe } from "@/components/ui/svgs/stripe";
import { Langchain } from "@/components/ui/svgs/langchain";
import { GithubActions } from "@/components/ui/svgs/github-actions";
import { Jest } from "@/components/ui/svgs/jest";
import { Gemini } from "@/components/ui/svgs/gemini";
import { RestApi } from "@/components/ui/svgs/rest-api";

export const DATA = {
  name: "Antan Roy",
  initials: "AR",
  url: "https://dev-antan.vercel.app",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Software Engineer building AI-powered and full-stack products, with 1+ years of experience shipping production systems, scalable backend infrastructure, and LLM-driven applications.",
  summary:
    "I'm a final-year [CS student at MAKAUT](/#education), currently wrapping up a [software engineering at Nrolled](/#work) where I built production React Native features like state machines, Stripe billing, and push notifications. I like working at the intersection of full-stack and AI: RAG pipelines, LLM integrations, and recommendation systems. I've also contributed to [langchain-ai/langchain](/#open-source) core. Outside work, I solve DSA problems <mark className=\"bg-[#fcf300] px-1 rounded\">800+</mark> across LeetCode and Codeforces.",
  avatarUrl: "/me.png",
  skills: [
    { name: "C++", icon: Csharp },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "MongoDB", icon: Mongodb },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "Socket.io", icon: Socketio },
    { name: "Tailwind CSS", icon: Tailwindcss },
    { name: "JavaScript", icon: Javascript },
    { name: "OpenAI", icon: Openai },
    { name: "React Native", icon: ReactLight },
    { name: "Git", icon: Git },
    { name: "Supabase", icon: Supabase },
    { name: "REST APIs", icon: RestApi },
    { name: "Stripe", icon: Stripe },
    { name: "LangChain", icon: Langchain },
    { name: "GitHub Actions", icon: GithubActions },
    { name: "Jest", icon: Jest },
    { name: "Gemini", icon: Gemini },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: BriefcaseIcon, label: "Work Experience" },
    { href: "/#projects", icon: FolderKanbanIcon, label: "Projects" },
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "antanroy2002@gmail.com",
    tel: "+91 8420509687",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/antan2002",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antanroy",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/antanroy",
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/antan2002",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/918420509687",
        icon: Icons.whatsapp,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:antanroy2002@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nrolled",
      href: "https://nrolled.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/nrolled.png",
      start: "Dec 2025",
      end: "May 2026",
      description:
        "At Nrolled, contributed to the development of a workforce management platform using React Native, TypeScript, PostgreSQL, and Stripe. Built features for customer and worker workflows, implemented real-time database synchronization and push notifications, integrated payment and billing systems, and improved application reliability through automated testing. Also optimized backend processes using PostgreSQL triggers and state management to ensure efficient booking and assignment operations.",
    },
    {
      company: "C & N Green Energy",
      href: "https://cnkbharat.com/",
      badges: [],
      location: "Kolkata, India",
      title: "Embedded Software Engineer",
      logoUrl: "/cnk.png",
      start: "Aug 2023",
      end: "Nov 2025",
      description:
        "At C & N Green Energy Pvt. Ltd., contributed to the development of EV charging solutions by building fault-detection logic in C++ for embedded systems and improving system reliability through extensive testing. Developed a WebSocket-based communication protocol between embedded devices and the central management system, enabling faster real-time data exchange and reducing response times. Worked closely on embedded software optimization, device monitoring, and performance enhancement for EV charging infrastructure.",
    },
    {
      company: "Accenture",
      href: "https://www.accenture.com/",
      badges: [],
      location: "Remote",
      title: "Development Intern",
      logoUrl: "/accenture.png",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Participated in a development program focusing on software engineering best practices and project delivery.",
    },
  ],
  education: [
    {
      school: "Maulana Abul Kalam Azad University of Technology",
      href: "https://makautwb.ac.in/",
      degree: "B.Tech in Computer Science (CGPA: 7.84)",
      logoUrl: "/makut.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Jnan Chandra Ghosh Polytechnic",
      href: "https://jcgpolytechnic.in/",
      degree: "Diploma in Electronics & Telecommunication (CGPA: 9.1)",
      logoUrl: "/jcgp.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Assistance",
      href: "https://github.com/antan2002/assistance",
      dates: "Jan 2026",
      active: true,
      description:
        "Desktop AI assistant with real-time voice capabilities, local LLM support, and multi-provider integration. Built with Electron for cross-platform desktop compatibility.",
      technologies: [
        "Electron",
        "JavaScript",
        "Node.js",
        "Gemini",
        "Ollama",
        "Hugging Face",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://assistancee.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/antan2002/assistance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assistance.png",
      video: "",
    },
    {
      title: "IntelliCart",
      href: "https://github.com/antan2002/IntelliCart-Sparkathon",
      dates: "June 2025",
      active: true,
      description:
        "AI-powered shopping platform using Gemini-Pro LLM API for personalized product recommendations with health-aware filtering. Analyzes user preferences and applies intelligent filtering based on health criteria.",
      technologies: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini-AI",
        "Zod",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/antan2002/IntelliCart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/rYBkbamDUmI",
    },
    {
      title: "AI Trip Generator",
      href: "https://github.com/antan2002/ai-trip-generator",
      dates: "Dec 2024",
      active: true,
      description:
        "Developed an AI-based Travel Advisor that enhanced user engagement by 60% through personalized itineraries and smart recommendations.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://majestic-valkyrie-99dd84.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/antan2002/AI-Trip-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Trip-Generate.png",
      video: "",
    },

    {
      title: "Spacer-main",
      href: "https://spacer-main.netlify.app/",
      dates: "Feb 2024",
      active: true,
      description:
        "A space-themed landing page built with React, featuring a full-screen starry background, parallax scrolling, and interactive elements.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      links: [
        {
          type: "Website",
          href: "https://spacer-main.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/antan2002/Spacer-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Spacer-main.png",
      video: "",
    },
  ],
  openSource: [
    {
      slug: "fix-core-handle-string-data-in-blob",
      title: "fix(core): handle string data in Blob.as_bytes_io()",
      repo: "langchain-ai/langchain",
      url: "https://github.com/langchain-ai/langchain/pull/37653",
      date: "2026-05-23",
      issue:
        "Blob.as_bytes_io() raised NotImplementedError when created from string data via Blob.from_data(), even though as_bytes() and as_string() both handle strings correctly.",
      description:
        "Blob.as_bytes_io() in langchain-core raised a NotImplementedError when the blob was created from string data via Blob.from_data(), even though as_bytes() and as_string() both handle strings correctly. This inconsistency meant that users passing string data to as_bytes_io() would get an unexpected crash, breaking the API contract where all three methods should agree on the same data.\n\nThe fix adds an elif branch for str data that encodes to bytes before wrapping in BytesIO, matching the existing pattern in as_bytes(). After the fix, Blob.from_data('hello').as_bytes_io() correctly yields b'hello', while Blob.from_data(b'world').as_bytes_io() continues to yield b'world' unchanged. This was my first contribution to the langchain repository — a small but impactful fix <strong style=\"font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;\">ensuring API consistency across all blob read methods</strong>.",
      status: "Merged",
    },
    {
      slug: "fix-core-replace-def-introspection",
      title: "fix(core): replace _def introspection with zod-to-json-schema",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/73",
      date: "2026-05-18",
      issue:
        "Direct access to schema._def breaks when Zod internals change. Need safe, public JSON Schema conversion using zod-to-json-schema.",
      description: `The elsium-ai codebase had direct accesses to schema._def across multiple files for converting Zod schemas to JSON Schema. This approach relied on private Zod internals that could break with any Zod version upgrade, making the code fragile and maintenance-heavy.\n\nThis PR replaced all _def introspection with the zod-to-json-schema library (v3.25.2) for safe, public JSON Schema conversion. A post-processing layer maintains backward-compatible output for LLM providers. The change involved rewriting zodToJsonSchema across 10 files with 772 additions and 133 deletions, adding the library as a dependency to @elsium-ai/core, and updating tests for ZodDefault to reflect that the library preserves default values. <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">All 2121 existing tests pass with zero behavioral changes for consumers</strong> — the exported zodToJsonSchema(schema) signature remains identical.`,
      status: "Merged",
    },
    {
      slug: "test-mcp-trust-framework-coverage",
      title: "test: MCP trust framework coverage (43 tests)",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/72",
      date: "2026-05-18",
      issue:
        "MCP trust framework had only ~33% test coverage — too low for security-critical code handling trust validation and authentication.",
      description: `The MCP (Model Context Protocol) trust framework is security-critical code that handles server allowlisting, tool authorization, manifest verification, and audit logging. Despite its importance, it had only ~33% test coverage with just 9 tests, leaving most code paths untested.\n\nThis PR <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">expanded coverage from 9 to 43 tests</strong> across 6 test files, covering server allowlist (name, transport, URL pattern, stdio command hash, multi-entry, empty allowlist), connect/disconnect delegation and audit logging, listTools filtering (deniedTools, allowedTools, all-denied, empty list), callTool authorization (allowed, denied, oversized output, audit events), generateManifest structure and caching, verifyManifest match/mismatch paths, and all passthrough methods (toElsiumTools, listResources, readResource, listPrompts, getPrompt). The fix closes issue #62 and ensures the trust framework has robust regression coverage.`,
      status: "Merged",
    },
    {
      slug: "feature-app-module-agnostic",
      title: "Feature/app module agnostic",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/70",
      date: "2026-05-16",
      issue:
        "Duplicate get method in hono-adapter.ts — context getter silently replaced route registration, causing 404 on all GET endpoints.",
      description: `The hono-adapter.ts file contained a critical bug where two different functions shared the same name 'get' in a JavaScript object literal. One was for route registration (get(app, path, handler)) and the other for retrieving context values (get(c, key)). Because JavaScript object literals overwrite duplicate keys, the context getter silently replaced the route registration method — <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">causing all GET endpoints to return 404 responses</strong>.\n\nThis PR renamed the context getter from get(c, key) to getContext(c, key) to eliminate the naming collision, and updated all references across adapter.ts, hono-adapter.ts, middleware.ts, and tenant.ts. The fix involved 19 files with 495 additions and 365 deletions, restoring proper GET route registration across the entire adapter layer.`,
      status: "Merged",
    },
    {
      slug: "ci-enforce-benchmark-regression-checks",
      title: "ci: enforce benchmark regression checks in CI",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/68",
      date: "2026-05-13",
      issue:
        "CI workflow never executed benchmark checks despite documented enforcement. Performance regressions could silently pass.",
      description: `The repository already included benchmark baselines, regression thresholds, and a bench:check script — but the <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">CI workflow never actually executed benchmark checks</strong>. This meant performance regressions could silently pass even though the documentation described CI benchmark enforcement. This PR aligned the actual CI behavior with the documented benchmark workflow.\n\nChanges included adding a dedicated benchmark job to .github/workflows/ci.yml that runs bun run bench:check, configuring it in advisory mode with continue-on-error: true to avoid flaky benchmark variance blocking merges initially, adding GitHub Actions ::warning annotations in benchmarks/check-regression.ts that include scenario name, metric name, baseline and current values, and percent regression, and updating benchmarks/README.md to document the advisory CI behavior.`,
      status: "Merged",
    },
    {
      slug: "fix-gateway-prevent-batch-deadlock",
      title: "fix(gateway): prevent batch deadlock on rejected requests",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/67",
      date: "2026-05-12",
      issue:
        "Unexpected rejection in processItem() left batch runner hanging indefinitely — running never decremented, Promise never resolved.",
      description: `The batch execution system had a critical edge case: if a non-standard error escaped the internal request handling flow inside processItem(), the rejection was not handled in the scheduling loop. This meant running-- never executed, completed++ never executed, and the outer Promise never resolved — causing batch execution to deadlock even though all requests had already finished or failed.\n\nThe fix adds a .catch() handler around processItem(idx) that records unexpected failures as { success: false, error: ... }, preserves semaphore correctness by always decrementing running, ensures completed reaches requests.length, and continues scheduling remaining requests after a rejection. A regression test covering an injected TypeError scenario was also added. This was a 63-line addition across 2 files that <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">prevented a subtle production-deadlocking bug</strong>.`,
      status: "Merged",
    },
    {
      slug: "feat-tools-add-mode-process-sandbox",
      title:
        "feat(tools): add mode:process sandbox for OS-level crash isolation",
      repo: "elsium-ai/elsium-ai",
      url: "https://github.com/elsium-ai/elsium-ai/pull/49",
      date: "2026-05-12",
      issue:
        "Bun's process.exit() crash isolation was incomplete in worker mode. Needed true OS-level process isolation via child_process.fork.",
      description: `Bun's Worker mode had incomplete process.exit() crash isolation — when a sandboxed process called process.exit(), it could crash the entire runtime instead of just the sandbox. This PR added a new mode:'process' sandbox backend using child_process.fork for <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">true OS-level process isolation</strong>.\n\nThe implementation extended SandboxConfig mode type from 'worker' to 'worker' | 'process', created runner-process.ts and fork-entry.mjs using child_process.fork with IPC error reconstruction, extracted runner-worker.ts from the original runner.ts, added a dispatcher in runner.ts that routes to the appropriate runner by mode, updated define.ts to validate mode and suggest 'process' under Bun, parameterized all sandbox tests with describe.each(['worker', 'process']), and documented both modes in tool-sandboxing.md with IPC serialization caveats. This was a large feature involving 18 commits, 10,796 additions and 937 deletions across 107 files.`,
      status: "Merged",
    },
    {
      slug: "fix-inability-to-remove-approved-marketplace",
      title: "Fix inability to remove approved marketplace submissions",
      repo: "Significant-Gravitas/AutoGPT",
      url: "https://github.com/Significant-Gravitas/AutoGPT/pull/13109",
      date: "2026-05-13",
      issue:
        "Approved marketplace submissions could not be removed — backend blocked deletion and frontend hid the delete action for approved items.",
      description: `Approved marketplace submissions in AutoGPT's Creator Dashboard could not be removed — the backend explicitly blocked deletion for approved submissions, and the frontend hid the delete action for approved items entirely. This prevented creators from removing their agents from the marketplace after approval, creating a frustrating experience where a submission was effectively stuck once approved.\n\nThis PR <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">enabled creators to remove approved marketplace submissions</strong> from both the Creator Dashboard and Profile Dashboard. Backend changes removed the InvalidOperationError restriction for approved submissions and added cleanup logic for StoreListing state — disconnecting activeVersion when necessary, updating hasApprovedVersion correctly, and falling back to another approved version if available. Frontend changes introduced a separate canDelete condition independent from canModify, allowing approved submissions to expose a dedicated 'Remove from marketplace' action while preserving the existing 'Delete' behavior for pending submissions. Tests were updated to validate the new approved removal flow. The changes spanned 6 files with 110 additions and 21 deletions across both backend (Python) and frontend (TypeScript).`,
      status: "Merged",
    },
    {
      slug: "fix-update-typescript-and-enhance-anthropic-validation",
      title: "fix: update TypeScript and enhance ANTHROPIC_API_KEY validation",
      repo: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip/pull/6141",
      date: "2026-05-16",
      issue:
        "Unsetting API key in adapter config still inherited host env var through process.env merging, causing incorrect probe failures.",
      description: `Paperclip orchestrates AI agents for zero-human companies, and the Claude Local adapter is responsible for executing Claude CLI commands and validating environment configuration. A subtle bug existed where explicitly unsetting ANTHROPIC_API_KEY in adapter config (e.g., { type: 'plain', value: '' }) would still inherit the host environment's API key through process.env merging, causing incorrect probe failures and misleading error messages.\n\nThis PR <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">fixed the environment isolation bug</strong> by adding configExplicitlyHasAnthropicApiKey detection to prevent host ANTHROPIC_API_KEY leakage when config explicitly overrides it. It also added automatic subscription-auth fallback — extracting probe execution into a runSingleProbe helper and adding automatic retry without API key when the host-provided key fails, with successful fallback reporting as a warn-level pass instead of error. Better error diagnostics were added via a describeClaudeFailure helper that surfaces structured Claude error messages (Insufficient credits, Invalid API key) instead of raw stderr. TypeScript was also bumped from ^5.7.3 to ^5.9.3. The changes across 5 files included 578 additions and 68 deletions.`,
      status: "Open",
    },
    {
      slug: "change-the-eye-toggle-button-in-login-page",
      title: "Change the eye toggle button in Login Page",
      repo: "param-code/counter-app",
      url: "https://github.com/param-code/counter-app/pull/310",
      date: "2024-10-29",
      issue:
        "Login form password toggle needed optimization with useCallback to prevent unnecessary re-renders and improve UI interaction.",
      description: `This was a GSSoC (GirlScript Summer of Code) contribution to the counter-app project. The login form's password visibility toggle was causing unnecessary re-renders because the togglePasswordVisibility function was recreated on every render. This PR optimized it by wrapping the function with <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">useCallback to prevent unnecessary re-renders</strong>, improving overall form performance.\n\nAdditional changes included styling refinements for the password input and eye icon with hover effects and borders for better visual clarity, integrated error messages for each form field to improve user feedback during validation, and debugging instructions for developers if the password visibility toggle fails. The PR was accepted as part of Hacktoberfest 2024 and GSSoC Extended, labeled as level1.`,
      status: "Merged",
    },
    {
      slug: "add-show-password-icon-in-login-and-register-page",
      title: "Add show password icon in login and register page",
      repo: "subhadipbhowmik/bio-branch",
      url: "https://github.com/subhadipbhowmik/bio-branch/pull/329",
      date: "2024-10-25",
      issue:
        "Login and register pages lacked show/hide password toggle, making it difficult for users to verify their password input.",
      description: `BioBranch is a platform for managing and showcasing social media handles and important links in one place. This was another GSSoC contribution — the login and register pages lacked a <strong style="font-weight:700;text-decoration:underline wavy #0000FF;text-underline-offset:4px;">show/hide password toggle</strong>, making it difficult for users to verify their password input before submission.\n\nThis PR implemented a password visibility toggle on both the register and login pages using React Icons for the eye and eye-slash icons. The feature enhances usability by allowing users to view or hide their password as they enter it, reducing frustration from mistyped passwords. The change involved 91 additions and 10 deletions across 4 files, adding the toggle UI with proper state management and icon transitions. The PR was accepted as part of GSSoC Extended and Hacktoberfest 2024.`,
      status: "Merged",
    },
  ],
} as const;
