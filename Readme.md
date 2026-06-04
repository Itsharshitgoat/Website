
```
    ██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗██╗████████╗
    ██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║██║╚══██╔══╝
    ███████║███████║██████╔╝███████╗███████║██║   ██║   
    ██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║██║   ██║   
    ██║  ██║██║  ██║██║  ██║███████║██║  ██║██║   ██║   
    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   
```

<div align="center">

### _Where pixels meet philosophy._

A digital portfolio that doesn't just show work — it **tells a story**.<br/>
Scroll up to find Heaven. Scroll down to discover Hell.<br/>
Somewhere in between, there's code.

<br/>

[![Enter the Universe](https://img.shields.io/badge/%E2%86%92_ENTER_THE_UNIVERSE-%230047AB?style=for-the-badge&logoColor=white)](https://itsharshitgoat.github.io/Website/)
&nbsp;&nbsp;
[![Source](https://img.shields.io/badge/SOURCE_CODE-%23181717?style=for-the-badge&logo=github)](https://github.com/itsharshitgoat/Website)
&nbsp;&nbsp;
[![MIT](https://img.shields.io/badge/MIT_LICENSE-%23f5c211?style=for-the-badge)](LICENSE)

<br/>

**`5000 lines`** of hand-written code &nbsp;·&nbsp; **`Zero`** frameworks &nbsp;·&nbsp; **`One`** HTML file &nbsp;·&nbsp; **`Infinite`** vibes

</div>

---

<br/>

## I. The Premise

> _"What if a portfolio wasn't a resume on a screen — but a **place** you could explore?"_

This isn't a website. It's a world engine disguised as a single `index.html` file.

Built entirely in **Vanilla JavaScript**, **Tailwind CSS via CDN**, and the **HTML5 Canvas API**, this portfolio rejects the modern framework rat race and instead bets everything on raw browser power. No React. No Vue. No Angular. No build step. Just the DOM and I.

The result? A sub-second Time to Interactive, GPU-accelerated animations, and a user experience that feels like navigating through a living, breathing digital space.

<br/>

## II. The Architecture

```
╭─────────────────────────────────────────────────────────────╮
│                     THE BROWSER ENGINE                      │
│                                                             │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐   │
│  │  Semantic   │  │  Tailwind    │  │  Vanilla JS       │   │
│  │  HTML5      │──│  CSS (CDN)   │──│  (ES6+)           │   │ 
│  │             │  │  + Custom    │  │  + GSAP           │   │
│  └─────────────┘  └──────────────┘  └─────────┬─────────┘   │
│                                               │             │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────▼─────────┐   │
│  │  Canvas 2D  │  │  Intersection│  │  ScrollTrigger    │   │
│  │  Game Loop  │  │  Observer    │  │  (GSAP Plugin)    │   │
│  └─────────────┘  └──────────────┘  └───────────────────┘   │
╰───────────────────────────┬─────────────────────────────────╯
                            │
              ╭─────────────▼─────────────╮
              │     LIVE INTEGRATIONS     │
              │                           │
              │  🎵 Last.fm API           │
              │  📊 GitHub GraphQL API    │
              │  📬 FormSubmit API        │
              │  📈 Google Analytics      │
              ╰───────────────────────────╯
```

### Zero-Build Philosophy

There is no `webpack.config.js`. There is no `vite.config.ts`. There is no `node_modules` folder swallowing your disk space.

You open `index.html`. It works. That's the entire deployment story.

<br/>

## III. The Two Realms

The centerpiece of this portfolio is its **thematic state machine** — two hidden dimensions that exist above and below the main content.

### 🕊 HEAVEN — _The Quiet Layer_

Scroll past the top of the page and the world dissolves. The main content blurs, shrinks, and fades away. A new realm emerges: a white, ethereal library shrouded in drifting fog.

**What lives here:**
- 3D perspective-rendered book cards floating in space
- *Snow Crash*, *Ready Player One*, *The Art of Game Design* — each with physically modeled page thickness and spine shadows
- Ambient dust particles that drift on hover
- A glassmorphism atmosphere built from layered `backdrop-filter: blur(24px)` and radial gradients

**The transition** uses a 3-phase intent system:
```
quiet-intent-1  →  Main content shifts, blurs slightly
quiet-intent-2  →  Main content fades, nav disappears  
quiet-active    →  Heaven layer takes full control
```

### 🔥 HELL — _The Infernal Realm_

Scroll past the bottom. The world catches fire.

**What lives here:**
- Lava glow pulsing from the bottom of the viewport
- CSS-driven smoke using `mix-blend-mode: screen` on rotating radial gradients
- Ember particles with randomized physics (`--ember-drift`, `--ember-dur`)
- The **"Sins of Code"** — floating cards with titles like:
  - *The Untouchable Function*
  - *Friday Deployment*
  - *Works on My Machine*
  - *TODO: Fix Later*
- A fire-flicker text effect with layered `text-shadow` animations
- Chain-link decorative elements in oxidized orange

Both realms feature full fade-out of fixed UI elements (nav, music pill, scroll masks) and reversible descent animations for smooth re-entry.

<br/>

## IV. The Interactions

### 🧭 Magnetic Navigation
A frosted-glass blob that mathematically tracks your cursor across nav links, smoothly interpolating position and dimensions. Desktop has a top-center pill; mobile gets a bottom-anchored bar.

### ⌨️ Command Palette (`⌘ + K`)
A full terminal emulator rendered in the browser. Not just a gimmick — it supports real commands:

| Command | Action |
|---|---|
| `about` | Display bio & summary |
| `projects` | List all featured works |
| `skills` | Show technical proficiency |
| `contact` | Open contact form |
| `social` | Display social links |
| `theme` | Toggle visual modes |
| `resume` | Download the resume |
| `help` | Show all available commands |
| `clear` | Clear terminal history |

The terminal features a glowing hint on the hero section — a pulsing `⌘ K` badge that radiates a `box-shadow` animation in the primary blue (`#0047AB`).

### 🎵 Live Music Pill (Last.fm)
A floating "liquid glass" widget that polls the Last.fm API every 15 seconds:
- **Playing:** 4-bar CSS equalizer dances, song name + artist scroll
- **Paused:** Gracefully swaps to a "Last Listened" badge with timestamp
- Links directly to Spotify for the current track


<br/>

## V. The Sections

| # | Section | What's Inside |
|---|---|---|
| 1 | **Hero** | Gradient title, typewriter loop cycling philosophies, `⌘K` terminal hint, resume download, GitHub + SoftStack links |
| 2 | **About** | Horizontal scroll timeline (`scroll-snap-type: x mandatory`) with milestone cards and programmatic navigation |
| 3 | **Hobbies** | Bento grid of interests with rich imagery |
| 4 | **Skills** | Animated progress bars for HTML, CSS, JS, React, Node.js, Python, VS Code, Photoshop, Premiere Pro, Notion |
| 5 | **Certifications** | Flip-card gallery: Az-900, HTML, CSS, JavaScript, Java, Python certs |
| 6 | **Projects** | 18+ flip-card project showcases with "Why I Built It" back-face reveals |
| 7 | **Blog** | Articles and thoughts feed |
| 8 | **Contact** | FormSubmit-powered contact form with spinning red glow validation errors |

<br/>

## VI. The Gallery — Featured Projects

Every project card flips on click to reveal the reasoning behind it.

| Project | What It Does |
|---|---|
| **General Store** | CLI tool + MCP server that indexes study materials into a local vector database with source citations |
| **Tasks Master** | Speed-built todo app — sleek, efficient daily task management |
| **Carbon Path** | Carbon footprint tracker: emissions saved vs. emitted with greener choice highlights |
| **Redbrain** | AI safety net for Reddit — context-aware moderation using tone analysis |
| **Board** | Limitless canvas for visual idea mapping and creative organization |
| **PKM** | Pokémon team builder with instant type synergy visualization |
| **Wrap** | Discord bot for invisible server event logging and audit trails |
| **View** | Distraction-free Unsplash gallery for finding the perfect wallpaper |
| **Quest** | Discord quest automation script — unlocking perks without the grind |
| **Asana** | Minimalist focus timer with aesthetic themes and motivating quotes |
| **R P S** | Rock Paper Scissors with a modern, snappy interface |
| **Junction** | Digital tea shop storefront with cozy, responsive design |
| **To Mind** | Another creation in the SoftStack ecosystem |
| **+ more** | The grid keeps growing... |

<br/>

## VII. Under The Hood

### Typography Strategy
| Font | Role |
|---|---|
| **Helvetica Neue** | High-impact headers |
| **Inter** | Body text, UI labels |
| **Roboto Mono** | Terminal, code snippets, structural data |
| **Lora** | Serif elegance in the Heaven layer |
| **Pacifico** | Decorative accents |

### Animation Philosophy
All animations are locked to `transform` and `opacity` — the only two CSS properties that trigger GPU compositing without layout recalculation. This guarantees 60fps on mid-range hardware.

Complex sequences use **GSAP + ScrollTrigger** for orchestrated scroll-based choreography. Simple hover states use native CSS transitions.

### Color System
| Token | Hex | Usage |
|---|---|---|
| Primary | `#0047AB` | Buttons, links, scrollbar, accents |
| Secondary | `#FFD700` | Highlights, lightbulb icons |
| Heaven | White / Lavender gradients | The Quiet Layer |
| Hell | `#FF3C00` → `#FFA000` | The Infernal Realm |

### Performance
- **Resource Hints:** `preconnect` and `dns-prefetch` for all CDN origins
- **Image Preloading:** Hero and profile images are `fetchpriority="high"`
- **Lazy Loading:** All project images use `loading="lazy"`
- **Custom Scrollbar:** Styled `#0047AB` thumb on blurred white track
- **Touch Optimization:** `min-height: 44px` touch targets, `16px` minimum font for inputs on mobile

<br/>

## VIII. The Files

```
Website/
├── index.html          ← The entire application (5000 lines)
├── Readme.md           ← You are here
├── LICENSE             ← MIT
├── og.png              ← Open Graph social preview image
├── snowcrash.jpg       ← Snow Crash book cover
├── thanks.html         ← VIP Thank You page (post-contact)
├── Cs.html             ← Coming Soon page (T AI Agent)
└── Certificate/        ← Certification images
    ├── Az-900.png
    ├── CSS.png
    ├── HTML.png
    ├── JAVA.png
    ├── JS.png
    └── Python.png
```

<br/>

## IX. Run It

```bash
# Clone
git clone https://github.com/itsharshitgoat/Website.git

# Enter
cd Website

# Launch (pick your poison)
open index.html              # macOS
xdg-open index.html          # Linux
start index.html             # Windows

# Or spin up a local server for the full experience
npx serve .
# → http://localhost:3000
```

No `npm install`. No `yarn`. No `pnpm`. No `bun`. Just a browser.

<br/>

## X. Deployment

Push to `main`. GitHub Pages does the rest. That's it. That's the CI/CD pipeline.

<br/>

## XI. What's Next

- [ ] **WebGL Particle Mesh** — Porting the hero background to interactive Three.js
- [ ] **True OLED Dark Mode** — `#000000` blacks with neon accent lines
- [ ] **Headless CMS** — Decouple project data from hardcoded HTML
- [ ] **Firebase Leaderboard** — Global high scores for the hidden Canvas game
- [ ] **LLM-Powered Chatbot** — Upgrade from deterministic paths to autonomous AI responses
- [ ] **T AI Agent** — Something exciting. Coming soon. Sooner than you think.

<br/>

## XII. License

**MIT** — Do what you want. But if this architecture inspires you, a credit back would mean the world.

<br/>

---

<div align="center">

<br/>

```
     Built with raw JavaScript, questionable sleep schedules,
              and an unreasonable amount of CSS blur.
```

<br/>

**[@itsharshitgoat](https://github.com/Itsharshitgoat)** · [X/Twitter](https://x.com/itsharshitgoat) · [Instagram](https://www.instagram.com/itsharshitgoat/) · [LinkedIn](https://www.linkedin.com/in/harshit-prasad-833986370/) · [Reddit](https://www.reddit.com/user/itsharshitgoat)

<br/>

_"What if we made it do this… but cooler?"_

</div>