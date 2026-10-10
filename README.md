# lazaro.vc

Personal portfolio and project showcase — deployed via **GitHub Pages** on the custom domain [lazaro.vc](https://lazaro.vc).

---

## About

This is the source code for my personal website. It's a static site built with [Astro](https://astro.build): components and scoped CSS at build time, plain HTML and a few small scripts in the browser.

The site is bilingual (English / Spanish) with a language toggle. It has a light and a dark theme: it follows the OS setting by default, and a toggle next to the language button overrides it.

---

## Pages

| Source | Route | Description |
|---|---|---|
| `src/pages/index.astro` | `/` | Home — hero, projects, education, skills, contact |
| `src/pages/ceapp.astro` | `/ceapp.html` | Case study: CEApp (Red de CEAs) |
| `src/pages/semillero.astro` | `/semillero.html` | Case study: Semillero HR portal |
| `src/pages/automaton_disigner.astro` | `/automaton_disigner.html` | Case study: My Automata (DFA/NFA editor) |
| `src/pages/my-games.astro` | `/my-games.html` | Games showcase: Donut Tunnel, Neon Hover, Planet Dance |
| `src/pages/decimas.astro` | `/decimas.html` | Case study: Editor de Décimas |

Pages build to `.html` files (`build.format: "file"`) so the URLs already indexed by search engines keep working.

---

## Tech

- **Astro**: layouts and components, scoped CSS per component, per-page canonical URLs and SEO meta tags
- **Theme** (`src/styles/global.css`): every color is a token, with a light block and a `[data-theme="dark"]` block. An inline script in `<head>` picks the theme before first paint
- **Images** (`astro:assets`): screenshots in `src/assets/images/` are served as resized WebP; the lightbox loads a copy capped at 2400px only when opened
- **i18n** (`src/i18n/translations.ts`): one dictionary for both languages. English is rendered into the HTML at build time and the toggle swaps text through `data-i18n` attributes. A missing key fails `npm run check`
- **Fonts**: Geist, Inter, JetBrains Mono (Google Fonts)
- **SEO**: `public/sitemap.xml` + `public/robots.txt` for crawler discovery (Google Search Console)
- **Deployed**: GitHub Pages on a custom domain (`public/CNAME` → `lazaro.vc`), built by a GitHub Actions workflow on every push to `main`

### Email protection

The contact address is never written into the static HTML. It's stored base64-encoded in `src/components/Contact.astro` and only decoded into a `mailto:` link on the first user interaction (hover, focus, touch, or click) with the Email button, so crawlers and spam harvesters never see it.

---

## Projects Featured

### [CEApp — Red de CEAs](https://red-cea.web.app)
Multi-tenant platform for Agricultural Training Centers (CEAs) in Buenos Aires province. Public websites for each institution + a centralized admin panel managing registrations, training lifecycle states, certificate generation, and government-format data exports.
Stack: React · Sass · Firebase · Figma

### [Semillero](https://semillero-personas.web.app)
HR portal with candidate registration, CV upload, and a backoffice for job posting and application management.
Stack: React · Sass · Firebase · Figma

### [My Automata](https://my-automata.web.app)
Online editor for designing, testing, and sharing finite automata (DFA/NFA). Built to turn formal computation theory into an interactive tool.
Stack: React · Firebase · Figma

### [GuessTheClip](https://guesstheclip.com)
Heardle-style guessing game: identify a YouTube creator's video from a growing audio clip, with multiple reveal mechanics, difficulty modes, and chained runs.
Stack: React · TypeScript · Firebase

### Games
Mobile games published on Google Play — **Donut Tunnel**, **Neon Hover**, and **Planet Dance** — featuring procedural generation, orbit simulation, and polished gameplay design.
Stack: Unity · C#

### AI Portfolio Rotation (TradeSpark — internal)
ML system for equity signal generation: sequential neural network trained on 2M+ rows of market data, end-to-end from raw input to walk-forward validated predictions.
Stack: Python · TensorFlow/Keras · Pandas

---

## Structure

```
lazaro.vc/
├── astro.config.mjs         # Site URL + .html output
├── public/                  # Copied as-is: CNAME, robots.txt, sitemap.xml, logo.svg, icons/
├── src/
│   ├── pages/               # One .astro file per page
│   ├── layouts/             # BaseLayout (head, dock, contact, toggles) + CaseStudyLayout
│   ├── components/          # Shared pieces; home/ and case-study/ hold page-specific ones
│   ├── data/                # Projects list and tech icons
│   ├── i18n/                # EN/ES dictionary
│   ├── scripts/             # Client scripts: language toggle, terminal animation
│   ├── styles/global.css    # Reset + theme tokens
│   └── assets/images/       # Photos, screenshots, skill + project icons
└── .github/workflows/       # Pages deployment
```

---

## Running Locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static site in dist/
npm run check    # type check, including translation keys
```

---

## License

The **source code** (HTML, CSS, JS) is open source under the [MIT License](LICENSE).  
All **images and screenshots** are personal or client property and are not covered by this license.

---

*Built by [Lázaro Ventancor Cressatti](https://lazaro.vc) — Systems Engineer & AI/Web Developer.*
