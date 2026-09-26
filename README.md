# Jatin Singh — Developer Portfolio

Personal portfolio and freelance landing page for **Jatin Singh, MERN Stack Developer** (Bhubaneswar, India).
It presents experience, skills, projects and services, and makes it easy for clients and recruiters to get in touch.

**Live:** https://jatin-singh-portfolio.vercel.app

---

## Features

- **Config-driven content**: every piece of text lives in `src/data/`, so updating the site means editing data, not components
- **Dark and light themes**: follows the system preference on first visit, then remembers the visitor's choice in `localStorage`, with no flash of the wrong theme
- **Sticky, responsive navbar**: compacts on scroll, highlights the active section, includes a mobile menu, a resume download and a "Let's Talk" CTA
- **Project case studies**: an accessible modal (focus trap, Escape to close) that is lazy-loaded so it stays out of the initial bundle
- **Contact options**: WhatsApp (with a pre-filled message), email, LinkedIn and GitHub cards, plus a floating WhatsApp button
- **Validated contact form**: checks required fields, email format and minimum length, and includes a spam honeypot. It works with no backend (it opens the visitor's email app pre-filled) or posts to Formspree when configured.
- **Resume download** from the hero, navbar, mobile menu and contact section
- **Healthcare expertise section**: FHIR, EHR/OpenEMR, eConsent, RBAC
- **Animations**: subtle scroll reveals, hover states and a technology marquee, all turned off for users with `prefers-reduced-motion`
- **SEO**: meta description, Open Graph and Twitter cards, JSON-LD `Person` schema, canonical URL, `robots.txt`, `sitemap.xml` and favicons
- **Accessibility**: semantic landmarks, a skip link, visible focus states, ARIA labels, and form errors linked with `aria-describedby`
- **Responsive**: tested at 1440, 1280, 1024, 768, 390 and 360px with no horizontal scrolling

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (CSS-variable design tokens for both themes) |
| Animation | Framer Motion (`LazyMotion` + `domAnimation` to keep the bundle small) |
| Icons | Lucide React + inline SVG brand icons |
| Linting | oxlint |
| Hosting | Vercel |

The project uses plain JavaScript and npm.

## Folder structure

```text
public/
├── resume/Jatin_Singh_Resume.pdf   ← downloadable resume
├── og-image.png                    ← social share image (1200×630)
├── favicon.svg, apple-touch-icon.png
├── robots.txt, sitemap.xml
src/
├── components/     Reusable UI: Navbar, Footer, Button, SectionHeading, ProjectCard, ProjectModal, …
├── sections/       Page sections: Hero, About, Experience, Skills, Projects, Healthcare, Services, WhyMe, Contact
├── data/           ✏️ All site content
│   ├── personal.js     name, title, contact links, about text, education, certifications, nav
│   ├── experience.js   work history
│   ├── skills.js       grouped skills + marquee technologies
│   ├── projects.js     projects and case-study content
│   └── services.js     services, "why work with me", healthcare section, project types
├── hooks/          useTheme, useActiveSection, useScrolled, useSmoothAnchors
├── lib/            icon registry, social links, contact-form logic
├── App.jsx
├── main.jsx
└── index.css       Tailwind + design tokens (colours for both themes)
```

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run lint       # oxlint
npm run build      # outputs to dist/
npm run preview    # serve the production build locally at http://localhost:4173
```

## Deployment (Vercel)

To deploy every push to `main` automatically, connect the repository in **Vercel → Project → Settings → Git**.
To deploy manually:

```bash
npx vercel --prod
```

Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
If you move to a different domain, update the URL in `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt` and `public/sitemap.xml`.

## Updating content

### Personal information and links
Edit `src/data/personal.js`. Set any field to `""` to hide it everywhere. For example, an empty `whatsapp` hides the floating button and the WhatsApp card.
`whatsapp` must be digits only, including the country code (for example `919336622848`).

### Projects
Edit `src/data/projects.js`. Each project supports:

```js
{
  slug, title, category, icon,          // icon = a name registered in src/lib/icons.js
  description, role, technologies: [],
  overview, problem, solution,
  features: [], contributions: [], challenges: [], outcome: '',
  github: '', liveUrl: '', image: '',   // empty fields are hidden
}
```

To add a screenshot, put it in `public/projects/` (WebP is best) and set `image: '/projects/my-project.webp'`.

### Experience, skills and services
Edit `experience.js`, `skills.js` and `services.js` in `src/data/`. To use a new Lucide icon, import it in `src/lib/icons.js` and add it to the registry.

### Replacing the resume
Replace `public/resume/Jatin_Singh_Resume.pdf` with the new PDF, keeping the same file name.
If you change the file name, update `resumeUrl` and `resumeFileName` in `src/data/personal.js`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | No | A Formspree form endpoint (for example `https://formspree.io/f/abcdwxyz`). When set, the contact form sends messages directly to your inbox. When empty, submitting opens the visitor's email app with the message pre-filled. |

Copy `.env.example` to `.env.local` for local development, and add the variable in **Vercel → Project → Settings → Environment Variables** for production.
A Formspree endpoint is public by design and is not a secret. Never put private API keys in `VITE_` variables, because they are bundled into the frontend.

To use EmailJS, Resend (through a serverless function) or your own API instead, change `sendContact()` in `src/lib/contact.js`. The form UI does not need to change.

## License

© 2026 Jatin Singh. All rights reserved.
