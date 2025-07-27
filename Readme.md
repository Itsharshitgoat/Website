# Portfolio Website 🚀

A sleek, modern portfolio website showcasing professional achievements and creative work. Built with modern web technologies and featuring a responsive design, interactive elements, and smooth animations.

## ✨ Live Demo

[View Live Demo](https://itsharshitgoat.github.io/Website/)

## � Key Features

- **Responsive Design**
  - Mobile-first approach
  - Seamless experience across all devices
  - Optimized touch interactions for mobile

- **Interactive UI Elements**
  - Animated timeline navigation
  - Interactive skill progress bars
  - Smooth scrolling navigation
  - Project showcase cards
  - Blog post reaction system
  - Contact form with validation

- **Modern Design Elements**
  - Glassmorphism effects
  - Custom animations and transitions
  - Dynamic content loading
  - Custom scrollbar styling
  - Elegant typography system

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - With Tailwind CSS framework
- **JavaScript** - Vanilla JS for interactivity

### Frameworks & Libraries
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Remix Icons](https://remixicon.com/) - Modern icon library
- [Google Fonts](https://fonts.google.com/) - Typography
- [FormSubmit](https://formsubmit.co/) - Form handling

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 🎨 Design System

### Colors
- **Primary**: `#0047AB` - Royal Blue
- **Secondary**: `#FFD700` - Golden Yellow
- **Background**: Custom gradient overlays
- **Text**: Multi-level gray scale

### Typography
- **Headings**: Helvetica Neue
- **Body**: Inter
- **Code**: Roboto Mono

## 📂 Project Structure

```plaintext
.
├── index.html          # Main application entry
├── thanks.html         # Form submission success page
└── Cs.html            # Coming soon page
```

## � Core Features

### Interactive Timeline
- Horizontal scrolling timeline
- Touch-enabled on mobile devices
- Custom navigation arrows
- Smooth scroll snapping

### Skill Visualization
```javascript
// Dynamic skill bar animation
function renderSkills() {
  skills.forEach(skill => {
    // Progressive loading animation
    setTimeout(() => {
      skillElement.querySelector('.bg-primary').style.width = `${skill.level}%`;
    }, 200);
  });
}
```

### Blog Engagement System
- Real-time reaction updates
- Multiple reaction types (heart, rocket, smile)
- Local storage persistence
- Animated reaction counters

## ⚡ Performance Features

- Lazy loading of images
- Optimized asset delivery
- Smooth animations
- Efficient DOM operations
- Mobile touch optimizations
- Reduced layout shifts

## 🔒 Security Features

- Form spam protection
- Input sanitization
- Secure form submissions
- Protected contact system

## 📱 Mobile Optimizations

- Touch-friendly navigation
- Optimized tap targets (44px minimum)
- Swipe gestures for timeline
- Responsive images
- Mobile-optimized forms

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Contact

- Portfolio: [Website](https://itsharshitgoat.github.io/Website/)

---
Made with ❤️ by Harshit