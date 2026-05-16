# Harshit | itsharshitgoat - AI & OS Developer Portfolio 🚀

Welcome to the official repository and documentation for my personal portfolio website. This project is a sleek, modern, and highly interactive digital resume designed to showcase my journey, skills, and projects as an AI & OS Developer. 

Built completely without heavy JavaScript frameworks (No React/Vue), this site relies on **Vanilla JavaScript**, **HTML5**, and **Tailwind CSS** to deliver a blazingly fast, hardware-accelerated, and highly polished user experience.

## ✨ Live Demo

[View Live Demo](https://itsharshitgoat.github.io/Website/)

---

## 🏗️ Architecture & Tech Stack

This website is built with a focus on performance, relying on native browser capabilities and minimal dependencies.

- **HTML5:** Semantic, accessible markup.
- **Tailwind CSS (via CDN):** Rapid, utility-first styling, enabling complex layouts like CSS Grid and Flexbox without large external stylesheets.
- **Vanilla JavaScript (ES6+):** Handling all state, animations, intersection observers, and game logic without the overhead of a framework.
- **HTML5 Canvas API:** Powers the high-performance hidden arcade mini-game.
- **Remix Icons:** A crisp, open-source icon set used consistently across the UI.
- **Google Fonts:** Utilizing `Inter` for highly readable body text, `Helvetica Neue` for punchy headers, and `Roboto Mono` for technical accents.

---

## 🔍 Section-by-Section Deep Dive

Every pixel of this website was intentionally designed. Here is exactly what is happening in each section:

### 1. Navigation (Desktop & Mobile)
- **Glassmorphism Header:** A fixed, pill-shaped navigation bar with a frosted glass effect (`backdrop-blur-xl`).
- **Magnetic Blob Effect:** As you hover over navigation icons, a subtle, glowing blob smoothly follows your mouse, snapping to the active icon. This is achieved using JavaScript to calculate bounding client rectangles and applying dynamic CSS transforms.
- **Scroll Spy:** As you scroll down the page, the navigation bar automatically highlights the icon corresponding to the section currently in view.
- **Mobile Menu:** On smaller screens, the navigation transforms into a bottom-anchored, touch-friendly floating bar.

### 2. Home (#home)
- **Parallax Background:** A subtle, low-opacity background image provides depth.
- **Staggered Entrance:** When the page loads, the title, description, and buttons fade in sequentially.
- **Typewriter Effect:** A custom JavaScript function drives a continuous typewriter effect (`hero-tagline`) that cycles through personal philosophies ("I have come here to win, not to play", etc.), complete with a blinking CSS cursor.
- **Interactive Buttons:** Hovering over the buttons (GitHub, Resume, Cart) triggers a smooth background fill animation and icon translations.

### 3. About (#about)
- **Profile Layout:** Features a high-quality profile image that elevates on hover with enhanced shadows. An absolute-positioned floating badge displays location and current status.
- **Interactive Journey Timeline:** 
  - A custom horizontal scrolling timeline detailing my tech journey from 2012 to the present.
  - **Mechanics:** It uses CSS `scroll-snap` for smooth stopping points.
  - **Controls:** Users can scroll via touch, trackpad, or by clicking the floating arrow buttons, which use JavaScript to calculate the necessary translation distances.
  - **Accessibility:** Keyboard arrow keys are supported for navigating the timeline when not focused on an input.

### 4. Hobbies (#hobbies)
- A clean, 3-column grid showcasing personal interests (Binge Watching, Music, Reading).
- Each card features an image that subtly zooms (`transform: scale(1.05)`) when hovered, alongside crisp iconography.

### 5. Skills & Tools (#skills)
- **Languages Grid:** Programming languages are displayed as pill-shaped tags featuring custom 3D emojis (rendered via high-res image sources) for a unique, playful aesthetic.
- **Tools Grid:** A visually distinct grid of squircle-shaped cards displaying software I use (VS Code, Photoshop, Notion, etc.). These feature a lifting hover effect with enhanced drop shadows.

### 6. Certifications (#certifications)
- **Bento Grid Layout:** Certificates are arranged in a modern asymmetrical "Bento Box" layout.
- **Interactive Modals:** Clicking any certificate opens a full-screen, glassmorphism modal (`#cert-modal`) displaying the high-resolution certificate image, title, and issuer. The background scrolling is locked while the modal is open.

### 7. Projects (#projects)
- A comprehensive grid displaying over 15 projects.
- **Intersection Observer Animations:** Project cards do not load immediately. As you scroll down, an `IntersectionObserver` triggers a staggered fade-in and slide-up animation for each row of cards, making the page feel alive.
- **Responsive Layout:** Automatically shifts from a 3-column grid on desktop to a single-column layout on mobile devices.

### 8. Blog & Research (#blog)
- Features thoughts and articles on AI, human thinking, and design philosophy.
- **Persistent Reaction System:** 
  - Users can react to posts using Emoji buttons (❤️, 🚀, 😊).
  - The click counts are saved to the browser's `localStorage`, meaning reactions persist even if the user refreshes or closes the page.
- **Content Modals:** Clicking "Details" opens a modal containing the full text of the thought piece and links to external platforms like Notion.

### 9. Contact (#contact)
- **Backend-Free Forms:** The contact form routes submissions through `FormSubmit.co`, allowing for functional emails without needing a server or database.
- **AJAX Submission:** The form uses the `fetch` API to submit data seamlessly. 
- **Dynamic UI States:** When submitting, the button text hides, a loading spinner appears, and the form handles success/error states by displaying color-coded notification banners without reloading the page.

### 10. Footer & Socials
- A clean, dark gradient footer displaying copyright info.
- **The Social Pill:** A floating, glassmorphism pill containing links to Reddit, Instagram, X (Twitter), and LinkedIn.

---

## 🎮 The Secret: Harshit Arcade
Hidden within the website is a fully functional, high-performance arcade mini-game built entirely with the HTML5 Canvas API.

### How to Unlock:
Hover your mouse (or hold your finger on mobile) over the **Social Pill in the footer** for **10 continuous seconds**. 

### The Transition (FLIP Animation):
1. The pill will begin to shake violently.
2. Once clicked, a Javascript-generated clone of the pill detaches from the footer.
3. The clone flies to the exact center of the viewport and expands.
4. A premium frosted-glass overlay fades in, revealing the **Harshit Arcade**.

### Gameplay Mechanics:
- **Canvas Rendering:** Everything inside the game is drawn frame-by-frame via `requestAnimationFrame` for buttery-smooth 60FPS performance.
- **Controls:** The player's ship (designed to look like the social pill) smoothly follows the user's mouse or touch coordinates. Horizontal movement is clamped to the canvas edges.
- **Combat:** 
  - The ship automatically fires **Dual Blasters** (two parallel yellow lasers).
  - **Standard Enemies:** Multi-colored balls that fall and bounce off the walls.
  - **Tough Enemies:** 20% of spawned enemies are "Tough Balls" featuring an inner white core and a heavy glow. These require 2 hits to destroy.
- **Visual Effects (VFX):**
  - **Engine Thrusters:** Small blue particles continuously emit from the back of the player's ship.
  - **Explosions:** When a laser hits a ball, dynamic particles burst outward and fade away based on a lifecycle timer.
  - **Screen Shake:** If an enemy breaches the bottom of the screen (Game Over), the entire modal wrapper translates violently to simulate a physical impact.

---

## ⚡ Performance & Optimization

- **CSS Hardware Acceleration:** Animations (like the magnetic nav blob, parallax scrolling, and card lifting) rely strictly on `transform` and `opacity` properties, offloading the work to the GPU and preventing main-thread layout thrashing.
- **Intersection Observers:** Used extensively to delay animations until elements are actually visible in the viewport, saving CPU cycles on initial load.
- **Debounced Resizing:** The game canvas and scroll events listen to window resizing efficiently, preventing memory leaks and infinite loops.
- **Scroll Locking:** When modals or the Arcade are open, `document.body.style.overflow = 'hidden'` is applied, and touch movements are prevented via `e.preventDefault()`. This completely eliminates mobile "scroll-bleed" (where the page scrolls behind the modal).

---

## 📱 Responsiveness strategy

The layout uses Tailwind's mobile-first breakpoints:
- `default`: Base styles for mobile.
- `md`: Tablet layouts (e.g., expanding grids to 2 or 3 columns).
- `lg / xl`: Desktop refinements (increased padding, larger typography).
- Custom `@media` queries are used in the `<style>` block to handle edge cases like hiding scrollbars on the timeline container while maintaining scrollability.

---

## 🚀 Deployment

This project requires zero build steps (no Webpack, Vite, or Babel required).
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Currently deployed and hosted via **GitHub Pages**.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Harshit**

*"If no one's crazy enough to fix it, I guess it's my job now"*