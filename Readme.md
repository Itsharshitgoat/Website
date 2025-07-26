# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS (Tailwind CSS), and JavaScript showcasing my projects, skills, and professional journey.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Custom animations for enhanced user experience
- **Interactive Elements**: 
  - Reaction system for blog posts
  - Modal popups for detailed content
  - Smooth scroll navigation
  - Animated skill bars
  - Interactive project cards

## 🛠️ Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla)
- [Remix Icons](https://remixicon.com/)
- [Google Fonts](https://fonts.google.com/)
- [FormSubmit](https://formsubmit.co/) for contact form

## 📂 Project Structure

```plaintext
.
├── index.html              # Main HTML file
└── thanks.html            # Form submission confirmation page
```

## 🔍 Key Components

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Sections
1. **Home**: Hero section with introduction and CTA buttons
2. **About**: Personal introduction with profile image
3. **Hobbies**: Visual representation of interests
4. **Skills**: Interactive skill bars and tools grid
5. **Projects**: Portfolio showcase with project cards
6. **Blog**: Blog posts with reaction system
7. **Contact**: Contact form with social media links

### Custom Features

#### Skill Bars Animation
```javascript
function renderSkills() {
  skills.forEach(skill => {
    // Progressive animation for skill bars
    setTimeout(() => {
      skillElement.querySelector('.bg-primary').style.width = `${skill.level}%`;
    }, 200);
  });
}
```

#### Blog Reaction System
```javascript
const reactionData = {
  blog1: { heart: 0, rocket: 0, smile: 0 },
  blog2: { heart: 0, rocket: 0, smile: 0 },
  blog3: { heart: 0, rocket: 0, smile: 0 }
};
```

## 🎨 Styling

- **Color Scheme**:
  - Primary: `#0047AB`
  - Secondary: `#FFD700`
  - Background gradients and glassmorphism effects

- **Typography**:
  - Helvetica Neue for headings
  - Inter for body text
  - Roboto Mono for code and technical text

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Performance Optimizations

- Lazy loading images
- Optimized animations
- Efficient DOM manipulation
- Local storage for reaction data persistence

## 📤 Contact Form

- Powered by FormSubmit
- Honeypot spam protection
- Custom success page redirect
- Required field validation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](issues).

## 📞 Contact

- Website: [Website](https://itsharshitgoat.github.io/Website/)
---
Made with ❤️ by Harshit
