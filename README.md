# Aarovan.ai

A modern, responsive website for Aarovan.ai - an AI-powered platform that helps colleges prepare students for interviews through mock interviews and structured feedback.

## Features

- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive Design**: Mobile-first approach, works on all devices
- **React Router**: Multi-page navigation
- **Animated Sections**: Scroll-triggered animations using Intersection Observer
- **Material Symbols**: Google Material Icons integration

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with CSS variables for theming
- **Vite** - Build tool and dev server

## Project Structure

```
aarovan-react/
├── src/
│   ├── components/
│   │   ├── AnimatedSection.jsx    # Scroll animation wrapper
│   │   ├── DarkModeToggle.jsx     # Theme switcher
│   │   ├── Footer.jsx             # Site footer
│   │   └── Navbar.jsx             # Navigation bar
│   ├── hooks/
│   │   ├── useCountUp.js          # Counter animation hook
│   │   └── useInView.js           # Intersection Observer hook
│   ├── pages/
│   │   ├── Home.jsx               # Landing page
│   │   ├── About.jsx              # About page
│   │   ├── Features.jsx           # Features page
│   │   ├── Team.jsx               # Team page
│   │   └── Contact.jsx            # Contact page
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global styles & theme
│   └── main.jsx                   # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aarovan-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Design System

### Color Palette

**Light Mode:**
- Primary: `#01283c` (Deep Blue)
- Accent: `#ff6b35` (Orange)
- Surface: `#faf9f9` (Off White)

**Dark Mode:**
- Primary: `#9cdbf9` (Light Blue)
- Accent: `#ff8c61` (Light Orange)
- Surface: `#0a0e1a` (Dark Blue)

### Typography

- **Headings**: Noto Serif
- **Body**: Inter

### Components

- **Glass Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Animations**: Fade-in, slide-in, and scale animations

## Dark Mode

The website supports dark mode with a toggle button in the bottom-right corner. Theme preference is saved to localStorage.

## Pages

1. **Home** - Hero section, stats, how it works, bento grid, CTA
2. **About** - Mission, journey, team teaser
3. **Features** - Feature cards, engineering edge
4. **Team** - Team member profiles
5. **Contact** - Contact form and information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © Aarovan.ai

## Contact

For inquiries, visit [Aarovan.ai](https://aarovan.ai)
