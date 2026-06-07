# lazaro.vc

Personal portfolio and project showcase — deployed via **GitHub Pages** on the custom domain [lazaro.vc](https://lazaro.vc).

---

## About

This is the source code for my personal website. It's a static site built with plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no bundler. Everything ships directly to the browser.

The site is fully bilingual (English / Spanish) with a language toggle, and adapts to both light and dark reading contexts through a consistent design system.

---

## Pages

| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Home — hero, projects, education, skills, contact |
| `ceapp.html` | `/ceapp` | Case study: CEApp (Red de CEAs) |
| `semillero.html` | `/semillero` | Case study: Semillero HR portal |
| `automaton_disigner.html` | `/automaton_disigner` | Case study: My Automata (DFA/NFA editor) |
| `my-games.html` | `/my-games` | Games showcase: Donut Tunnel, Neon Hover, Planet Dance |

---

## Tech

- **HTML5** — semantic structure, SEO meta tags, per-page canonical URLs
- **Vanilla CSS** (`main.css`) — custom design system, glassmorphism, animations, responsive layout
- **Vanilla JS** (`js/index.js`) — nav behavior, terminal animation, scroll effects, email obfuscation
- **i18n** (`js/translations.js`) — bilingual EN/ES toggle via `data-i18n` attributes
- **Fonts** — Geist, Inter, JetBrains Mono (Google Fonts)
- **SEO** — `sitemap.xml` + `robots.txt` for crawler discovery (Google Search Console)
- **Deployed** — GitHub Pages on a custom domain (`CNAME` → `lazaro.vc`), no CI/CD needed

### Email protection

The contact address is never written into the static HTML. It's stored base64-encoded in `js/index.js` and only decoded into a `mailto:` link on the first user interaction (hover, focus, touch, or click) with the Email button, so crawlers and spam harvesters never see it.

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
├── index.html               # Main portfolio page
├── ceapp.html               # CEApp case study
├── semillero.html           # Semillero case study
├── automaton_disigner.html  # My Automata case study
├── my-games.html            # Games showcase
├── main.css                 # Global stylesheet (design system)
├── logo.svg                 # Brand logo
├── CNAME                    # Custom domain for GitHub Pages (lazaro.vc)
├── robots.txt               # Crawler directives → sitemap
├── sitemap.xml              # Page index for search engines
├── js/
│   ├── index.js             # Main scripts (nav, terminal, scroll, email)
│   ├── translations.js      # EN/ES translation strings
│   └── ascii_image.js       # ASCII art helper
├── images/                  # Photos, screenshots, skill + project icons
│   └── icons/               # Project card icons + favicon
├── icons/                   # SVG icon set
└── ascii/                   # ASCII art assets
```

---

## Running Locally

No build step required. Just open `index.html` in a browser, or use any static file server:

```bash
# Using VS Code Live Server (recommended)
# Install the Live Server extension, then right-click index.html → Open with Live Server

# Using Python
python -m http.server 8080

# Using Node.js
npx serve .
```

---

## License

The **source code** (HTML, CSS, JS) is open source under the [MIT License](LICENSE).  
All **images and screenshots** are personal or client property and are not covered by this license.

---

*Built by [Lázaro Ventancor Cressatti](https://lazaro.vc) — Systems Engineer & AI/Web Developer.*
