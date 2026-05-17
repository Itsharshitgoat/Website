# Harshit | itsharshitgoat - AI & OS Developer Portfolio 🚀

Welcome to the comprehensive documentation for my personal portfolio. This isn't just a website; it's a meticulously crafted digital experience built to showcase my technical journey, design philosophy, and engineering skills. 

Built with a "Performance-First" mindset, this site avoids the bloat of heavy JavaScript frameworks, opting for **Vanilla JavaScript**, **Tailwind CSS**, and **HTML5 Canvas** to achieve hardware-accelerated animations and a seamless, high-performance UI.

## 🔗 Live Experience
**[Visit itsharshitgoat.github.io](https://itsharshitgoat.github.io/Website/)**

---

## 🛠️ Technical Architecture & Stack

This project is a testament to what can be achieved with modern browser primitives and zero-build tooling.

- **Vanilla JavaScript (ES6+):** Manages all state, DOM manipulation, complex animations, and third-party API integrations (Last.fm).
- **Tailwind CSS (CDN):** Utilizes a utility-first approach for rapid, responsive design. Custom configurations handle glassmorphism effects and complex grid layouts.
- **HTML5 Canvas API:** Powers the "Harshit Arcade" game with high-performance frame-by-frame rendering.
- **Remix Icons:** Integrated for a consistent, sharp iconography set.
- **FormSubmit.co:** Provides a serverless backend for the contact system.
- **LocalStorage API:** Ensures user reactions and states persist across sessions.
- **Intersection Observer API:** Drives the staggered, "reveal-on-scroll" animations for optimal performance.

---

## 🎵 Featured: The Now Playing "Music Pill"

One of the most complex components of the site is the **Liquid Glass Music Pill**. This feature provides a real-time window into my current listening habits.

### Technical Implementation:
- **Last.fm Integration:** Uses the `user.getrecenttracks` method to fetch live data every 15 seconds.
- **Cache-Busting Logic:** Every API call is appended with a unique timestamp (`_=${Date.now()}`) to prevent browser caching and ensure the most up-to-date track info.
- **Smart State Management:**
  - **Live State:** If a song is currently playing, the pill displays the song name, artist, and a live-moving **Equalizer Animation**.
  - **"Last Listened" State:** When I'm offline, the pill automatically switches to a static state. It features a **Blue Glassmorphism Tag** labeled "Last Listened" and shows the most recently played track.
- **Direct Spotify Linking:** The pill is fully interactive. Clicking it constructs a precise Spotify search URL (`artist:NAME track:NAME`) to take the user directly to the song on Spotify.
- **Smooth Content Transitions:** 
  - Uses a custom **0.8s cubic-bezier(0.23, 1, 0.32, 1)** animation.
  - Features a "Fade, Blur, and Slide" effect that ensures content swaps look organic and polished.
  - The Equalizer and Status Tags slide in and out with coordinated scaling effects.
- **Interactivity:** With a high `z-index: 100`, the pill remains clickable even over complex navigation elements.

---

## 🔍 Section-by-Section Minute Details

### 1. Navigation & UI Shell
- **Magnetic Nav Blob:** A JavaScript-driven `nav-blob` that calculates the position of the hovered link and slides behind it with a frosted glass effect.
- **Glassmorphism Header:** Uses `backdrop-blur-xl` and `bg-white/30` to maintain readability while letting background colors bleed through.
- **Scroll Spy:** An `IntersectionObserver` monitors every section, updating the navigation's active state in real-time as the user scrolls.

### 2. The Hero Section (#home)
- **Typewriter Engine:** A custom JS loop that cycles through personal philosophies. It handles backspacing, variable typing speeds, and a custom CSS blinking cursor.
- **Staggered Entrance:** Upon page load, elements are injected into the DOM with varying `delay` properties to create a sophisticated "waterfall" entry.

### 3. About & Journey (#about)
- **Horizontal Journey Timeline:** 
  - Implements `scroll-snap-type: x mandatory` for a "paged" scrolling feel.
  - Custom navigation buttons calculate the exact `scrollLeft` offset to ensure precise movement.
  - Each timeline card features a scale-up transition and shadow enhancement on hover.

### 4. Skills & Tools (#skills)
- **3D Emoji Pills:** Programming languages are presented as pill-shaped tags with custom-sourced 3D emojis.
- **Squircle Cards:** Tools like VS Code and Photoshop use a "Squircle" (rounded square) geometry with a lifting animation that reacts to mouse movement.

### 5. Certifications (#certifications)
- **Bento Grid:** An asymmetrical layout that adapts dynamically to different screen sizes.
- **Modal System:** A custom-built modal engine that locks body scrolling (`overflow: hidden`), applies a heavy background blur, and animates the certificate image from the center of the viewport.

### 6. Projects (#projects)
- **Dynamic Reveal:** Projects are revealed row-by-row using an `IntersectionObserver`.
- **Project Cards:** Feature high-contrast typography and a clean "External Link" interaction.

### 7. Blog & Research (#blog)
- **Persistent Reaction System:** Heart, Rocket, and Smile reactions are tracked per-post. Counts are stored in `localStorage`, so your reactions stay there forever.
- **Reading Experience:** Detailed thoughts are presented in a clean, distraction-free modal layout.

### 8. Contact (#contact)
- **AJAX Integration:** Submissions happen via `fetch`, meaning no page reloads.
- **State Notifications:** Real-time feedback banners (Success/Error) are injected into the DOM and self-destruct after 5 seconds.

---

## 🎮 Hidden Gem: Harshit Arcade

The **Social Pill** in the footer hides a fully-fledged shoot-'em-up game.

### Mechanics:
- **Activation:** A "Proof of Attention" mechanic requires holding or hovering for 10 continuous seconds.
- **FLIP Animation:** The pill violently shakes, detaches, and expands into a full-screen game canvas.
- **Game Engine:** 
  - **Collision Detection:** Circle-to-point collision for lasers and circle-to-circle for ship-enemy contact.
  - **Particle System:** Independent particle lifecycles for engine thrusters and enemy explosions.
  - **Difficulty Scaling:** Introduction of "Tough Enemies" that require multiple hits.
  - **Tactile Feedback:** Physical screen shake on Game Over.

---

## 💎 Design & Performance Details

- **Color Palette:** Primary Blue (`#0047AB`), with accents of Glass White and deep Gradients.
- **Typography:** 
  - **Inter:** Used for high-readability body copy.
  - **Helvetica Neue:** High-impact headers.
  - **Roboto Mono:** Technical data and code snippets.
- **Performance Optimization:** 
  - Zero framework overhead.
  - Hardware-accelerated transforms (no `top/left` animations).
  - Minimal layout thrashing through careful DOM batching.

---

## 🔮 Future Plans & Roadmap

I am constantly iterating on this experience. Here is what's coming next:

- [ ] **Project: "Heaven & Hell" (The Dual-Realm Update):** A goofy yet ambitious thematic overhaul.
- [ ] **Dark Mode 2.0:** A completely revamped, deep-space dark theme with OLED-ready blacks.
- [ ] **Project Filtering:** The ability to filter projects by language (Python, C++, JS) or category (AI, OS, Web).
- [ ] **Arcade Expansion:** New enemy types, power-ups (Triple Shot), and a global leaderboard using a Firebase backend.
- [ ] **PWA Support:** Making the website installable as a mobile app for offline viewing.
- [ ] **Headless Blog:** Migrating the blog section to a real-time CMS (like Contentful or Sanity) for easier updates.
- [ ] **Interactive 3D Elements:** Integration of Three.js for a more immersive 3D background in the Hero section.

---

## 🚀 Deployment & Installation

This project is static and requires no build process.
1. `git clone https://github.com/itsharshitgoat/Website.git`
2. Open `index.html` in any modern browser.
3. Host on any static provider (GitHub Pages, Netlify, Vercel).

## 📜 License
Licensed under the MIT License. Feel free to use the code, but please give credit where it's due!

---

**Crafted with passion by Harshit**
*"Code is poetry, but performance is the rhythm"*