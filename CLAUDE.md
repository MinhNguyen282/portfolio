# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests in watch mode
```

## Architecture Overview

This is a React 18 portfolio website using Create React App, Tailwind CSS, and React Router v7.

### State Management

Two React Context providers wrap the app:
- **DataContext** (`src/contexts/DataContext.js`): Provides static portfolio data (projects, skills, awards, experience) from `src/data/` files
- **ThemeContext** (`src/contexts/ThemeContext.js`): Manages dark/light mode with localStorage persistence and system preference detection

### Routing & Code Splitting

Routes are defined in `App.js`. All page components are lazy-loaded via `React.lazy()` with a `Suspense` fallback. The app uses `react-router-dom` v7.

### Data Flow

Portfolio content is static and defined in `src/data/`:
- `projects.js` - Project entries with featured flags, categories, technologies
- `experience.js` - Work history with company logos, tech stacks, bullet points
- `skills.js` - Skills grouped by category
- `awards.js` - Achievements and awards

Components consume this data via the `useData()` hook from DataContext.

### Key Components

- **SEO** (`src/components/SEO.js`): Uses react-helmet-async for meta tags and JSON-LD structured data
- **LazyImage** (`src/components/LazyImage.js`): IntersectionObserver-based image lazy loading
- **ErrorBoundary** (`src/components/ErrorBoundary.js`): Error boundary with dev-mode error details
- **FloatingContact** (`src/components/FloatingContact.js`): Fixed "Hire Me" button on all pages

### Styling

Tailwind CSS with custom configuration in `tailwind.config.js`:
- Dark mode via `class` strategy
- Custom primary color palette (blue #4A90E2)
- Custom animations: fadeIn, slideUp, float, pulse-glow, gradient-shift, shimmer, bounce-in

Global styles in `src/index.css` include glass morphism effects, custom scrollbars, and accessibility features (prefers-reduced-motion, prefers-contrast support).

### Testing

Jest + React Testing Library with mocks in `setupTests.js` for:
- `window.matchMedia` (theme detection)
- `localStorage`
- `IntersectionObserver`
- `ResizeObserver`

## ESLint

Uses CRA defaults: extends `react-app` and `react-app/jest` (configured in package.json).
