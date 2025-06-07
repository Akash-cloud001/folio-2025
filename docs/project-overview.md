# Folio 2025 - Portfolio Website Documentation

## Project Overview
This is a modern portfolio website built using React, Vite, and Three.js, featuring interactive 3D elements and smooth animations. The project uses a combination of modern web technologies to create an engaging user experience.

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Routing**: React Router DOM
- **Animation**: Motion
- **Physics**: Matter.js
- **Additional Libraries**: 
  - Lenis (for smooth scrolling)
  - OGL (WebGL framework)
  - SVG Path Commander

## Project Structure
```
src/
├── Components/       # Reusable UI components
├── Pages/           # Route-based page components
├── hooks/           # Custom React hooks
├── lib/            # Utility functions and configurations
├── assets/         # Static assets (images, fonts, etc.)
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## Key Components

### NavBar
The navigation bar component (`NavBar.jsx`) provides the main navigation structure for the website. It includes:
- Logo component
- Navigation links (About, My Work, Skills, Blogs)
- Responsive design with Tailwind CSS
- Hover animations and transitions

### Pages
1. **HomePage**: Main landing page of the portfolio
2. **Blogs**: Blog section (under development)
3. **About**: About section (planned)
4. **Work**: Portfolio work section (planned)
5. **Skills**: Skills showcase section (planned)

## Styling
The project uses Tailwind CSS for styling with custom configurations:
- Custom animations via tailwindcss-animate
- Class variance authority for component variants
- Custom utility classes and components

## Development
To run the project locally:
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Performance Considerations
- Uses React 19's latest features
- Implements code splitting via React Router
- Optimizes 3D rendering with React Three Fiber
- Implements smooth scrolling with Lenis

## Future Enhancements
1. Complete implementation of planned pages
2. Add interactive 3D elements
3. Implement blog functionality
4. Add animations and transitions
5. Optimize performance and loading times 