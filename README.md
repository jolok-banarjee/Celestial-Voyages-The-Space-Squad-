# Celestial Voyages

> **A Dream Come True** — Premium Space Tourism & Educational Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Getting Started](#-getting-started)
- [Technologies Used](#-technologies-used)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

---

## Overview

**Celestial Voyages** is a fully responsive, immersive space tourism website that combines educational content about our solar system with a futuristic booking experience. The platform features interactive VR experiences, detailed planetary guides, space adventure itineraries, and a customizable boarding pass ticket generator.

Built with a dark cosmic aesthetic, animated starfields, and glassmorphism UI elements, Celestial Voyages delivers a visually stunning journey through space from the comfort of your browser.

---

## Features

### Design & UI
- **Dark cosmic theme** with animated canvas starfield background
- **Glassmorphism cards** with backdrop blur and gradient borders
- **Responsive design** — works on desktop, tablet, and mobile
- **Scroll reveal animations** for engaging content discovery
- **Preloader** with animated spinner for smooth page transitions
- **Back-to-top button** for easy navigation
- **Sticky navbar** with scroll-aware transparency effects

### Main Sections
| Feature | Description |
|---------|-------------|
| **Hero Carousel** | Full-screen image slider with animated captions on homepage |
| **Itinerary Booking** | Interactive form to customize space travel (Roundtrip/One-way/Multi-city) |
| **Cosmos Classroom** | Educational content about Solar System, Planets, and Moons |
| **VR Experiences** | Virtual reality space simulations with preview cards |
| **Traveler Reviews** | Customer testimonials with ratings and verified badges |
| **Contact Form** | Functional contact section with company info sidebar |

### Ticket Generator
- **Customizable boarding pass** with passenger details
- **Dynamic QR codes** and barcode generation
- **Print-friendly layout** with exact styling preservation
- **Download as image/PDF** support
- Real-time preview before printing

### Educational Content
- **18+ educational pages** covering:
  - The Sun (full NASA-sourced content with sidebar navigation)
  - All 8 planets (Mercury through Neptune)
  - Moon systems for each planet
  - Kuiper Belt and Oort Cloud
  - Solar System overview

---

## 📁 Project Structure

```
celestial-voyages/
│
├── 📄 index.html                  # Homepage with hero carousel
├── 📄 space_adventure.html        # Space travel itineraries
├── 📄 cosmos_classroom.html       # Educational hub
├── 📄 vr.html                     # VR experiences
├── 📄 travel_experience.html      # Customer reviews
├── 📄 ticket.html                 # Boarding pass generator
├── 📄 signup.html                 # Login/Account page
├── 📄 temp.html                   # Coming soon placeholder
│
├── 📄 Solar_System.html           # Solar System overview
├── 📄 Planets.html                # Planets directory
├── 📄 Moons.html                  # Moons directory
│
├── 📁 css/                        # Stylesheets
│   ├── styles.css                 # Master stylesheet with CSS variables
│   ├── slide.css                  # Carousel animations
│   ├── contact.css                # Contact form styling
│   ├── customize.css              # Booking form styling
│   ├── about.css                  # About section styling
│   ├── vr.css                     # VR page styling
│   ├── space_adventure.css        # Itinerary cards
│   ├── cosmos_classroom.css       # Educational cards
│   ├── travel_experience.css      # Review cards
│   ├── ticket.css                 # Boarding pass design
│   ├── subEdu.css                 # Educational sub-pages
│   └── ...
│
├── 📁 js/                         # JavaScript files
│   ├── stars.js                   # Canvas starfield animation
│   ├── main.js                    # Image slideshow
│   ├── script.js                  # Mobile navigation toggle
│   └── ticket.js                  # Ticket generator logic
│
├── 📁 Image/                      # Main image assets
│   ├── icon.png                   # Site favicon
│   ├── 1.png, 2.png, 3.png        # Hero carousel images
│   ├── space.jpg, cosmos.jpg      # Section backgrounds
│   ├── mars.jpg, moon.jpg         # Destination images
│   ├── vr.jpg, vr2.jpg            # VR experience images
│   └── ...
│
├── 📁 Image_SubEdu/               # Educational images
│   ├── sun.png
│   ├── Mercury_in_numbers.jpg
│   ├── Venus_in_numbers.jpg
│   ├── Earth_in_numbers.jpg
│   ├── Planet_Mars_in_numbers.jpg
│   ├── Jupiter_in_numbers.jpg
│   ├── Saturn_in_numbers.jpg
│   ├── Uranus_in_numbers.jpg
│   ├── Neptune_in_numbers.jpg
│   ├── Kuiper_Belt.png
│   ├── Oort_Cloud.png
│   └── Sun_in_Milky_Way-1.webp
│
├── 📁 sub_edu/                    # Educational sub-pages
│   ├── Sun.html                   # Full Sun article
│   ├── Mercury.html
│   ├── Venus.html
│   ├── Earth.html
│   ├── Mars.html
│   ├── Jupiter.html
│   ├── Saturn.html
│   ├── Uranus.html
│   ├── Neptune.html
│   ├── Earth_Moon.html
│   ├── Mars_Moon.html
│   ├── Jupiter_Moons.html
│   ├── Saturn_Moons.html
│   ├── Uranus_Moons.html
│   ├── Neptune_Moons.html
│   ├── Pluto_Moons.html
│   ├── Kuiper_Belt.html
│   └── Oort_Cloud.html
│
├── 📁 Destination/                # Destination detail pages
│   ├── Mars/
│   │   └── mars.html
│   ├── Moon/
│   │   └── moon.html
│   ├── Jupiter/
│   │   └── jupiter.html
│   └── Saturn/
│       └── saturn.html
│
└── 📄 README.md                   # This file
```

---

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (optional, for proper module loading)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jolok-banarjee/celestial-voyages.git
   cd celestial-voyages
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Using Python simple server
   python -m http.server 8000
   # Then visit http://localhost:8000

   # Option 3: Using Node.js live-server
   npx live-server
   ```

3. **No build step required!** This is a static HTML/CSS/JS project.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom properties, Grid, Flexbox, Animations |
| **JavaScript (ES6+)** | Interactivity, DOM manipulation, Canvas API |
| **Bootstrap 5** | Responsive grid, components, navbar collapse |
| **Font Awesome 6** | Icons throughout the interface |
| **Canvas API** | Animated starfield background |
| **Intersection Observer API** | Scroll-triggered animations |

---

## Screenshots

> *Screenshots will be added here*

| Homepage | Cosmos Classroom | Ticket Generator |
|----------|------------------|------------------|
| *Hero carousel with space imagery* | *Educational cards with planet info* | *Customizable boarding pass* |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Reporting Issues
If you find a bug or have a suggestion, please open an issue with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Browser and device information
- Screenshots (if helpful)

---

## Developer

**Jolok Banarjee**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jolok-banarjee-16825b1b7/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/jolok-banarjee)

> *Designed & Developed with ❤️ and a passion for space exploration*

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [NASA](https://www.nasa.gov/) for educational content and imagery
- [Bootstrap Team](https://getbootstrap.com/) for the excellent framework
- [Font Awesome](https://fontawesome.com/) for the comprehensive icon library
- All space enthusiasts who inspire us to reach for the stars

---

<p align="center">
  <strong>🌌 Ready to explore the cosmos?</strong><br>
  <a href="index.html">Start Your Journey →</a>
</p>

<p align="center">
  <sub>© 2026 Celestial Voyages. All rights reserved.</sub>
</p>
