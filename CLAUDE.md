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

### Application Bootstrap

The app is wrapped in multiple providers (outer to inner):
1. **ErrorBoundary** - Catches and displays errors with dev-mode details
2. **HelmetProvider** - Enables react-helmet-async for SEO meta tags
3. **ThemeProvider** - Manages dark/light mode state
4. **BrowserRouter** - Provides routing context

The **DataProvider** from DataContext must wrap components that need portfolio data access (not at App.js level).

### State Management

Two React Context providers manage global state:
- **DataContext** (`src/contexts/DataContext.js`): Provides static portfolio data (projects, skills, awards, experience, publications) from `src/data/` files
- **ThemeContext** (`src/contexts/ThemeContext.js`): Manages dark/light mode with localStorage persistence and system preference detection

### Routing & Code Splitting

Routes are defined in `App.js`. All page components are lazy-loaded via `React.lazy()` with a `Suspense` fallback. The app uses `react-router-dom` v7.

### Data Flow

Portfolio content is static and defined in `src/data/`:
- `projects.js` - Project entries with featured flags, categories, technologies
- `experience.js` - Work history with company logos, tech stacks, bullet points
- `skills.js` - Skills grouped by category
- `awards.js` - Achievements and awards
- `publications.js` - Academic publications and research papers

Components consume this data via the `useData()` hook from DataContext. To add new portfolio content, edit the corresponding file in `src/data/` - no database or CMS is used.

### Key Components

- **SEO** (`src/components/SEO.js`): Uses react-helmet-async for meta tags and JSON-LD structured data
- **LazyImage** (`src/components/LazyImage.js`): IntersectionObserver-based image lazy loading
- **ErrorBoundary** (`src/components/ErrorBoundary.js`): Error boundary with dev-mode error details
- **FloatingContact** (`src/components/FloatingContact.js`): Fixed "Hire Me" button on all pages

### Styling

Tailwind CSS with custom configuration in `tailwind.config.js`:
- Dark mode via `class` strategy (toggled by adding/removing `dark` class on `<html>`)
- Custom color system:
  - `accent` and `primary`: Coral/orange (#f97316) - warm energetic accent
  - `ink`: Charcoal neutral palette (50-950) for text and backgrounds
  - `dark`: Additional dark mode grays
- Custom fonts: Be Vietnam Pro (display/body), JetBrains Mono (monospace)
- Custom animations: fadeIn, slideUp, slideIn, scaleIn, float, pulse-glow, gradient-shift, shimmer, bounce-in, rotate-gradient, marquee, reveal, magnetic
- Background patterns: noise texture, grid-pattern SVG
- Extended spacing and letter-spacing utilities

Global styles in `src/index.css` include glass morphism effects, custom scrollbars, and accessibility features (prefers-reduced-motion, prefers-contrast support).

### Testing

Jest + React Testing Library with mocks in `setupTests.js` for:
- `window.matchMedia` (theme detection)
- `localStorage` (theme persistence)
- `IntersectionObserver` (LazyImage component)
- `ResizeObserver` (responsive components)
- `scrollTo` (scroll behavior)

Run a single test file: `npm test -- ComponentName.test.js`
Run tests matching a pattern: `npm test -- --testNamePattern="should render"`

## Component Patterns

### Inline Styles for Animations
Some components (like ThemeToggle) use inline `<style jsx>` tags for component-specific animations that aren't suitable for global CSS. This is acceptable when:
- The animation is tightly coupled to component state
- The keyframes are only used by that component
- Complex calculations or dynamic values are needed

### Lazy Loading
All route-level components use `React.lazy()` with a `<Suspense>` fallback showing a loading spinner. When adding new pages, follow this pattern in `App.js`.

### Accessibility
Components should include proper ARIA attributes:
- `aria-label` for icon-only buttons
- `role="switch"` for toggle buttons with `aria-checked`
- Focus states with `focus:ring-2` and proper color contrast

## ESLint

Uses CRA defaults: extends `react-app` and `react-app/jest` (configured in package.json).

## File Organization

```
src/
├── components/        # React components (pages and UI elements)
├── contexts/          # React Context providers (Theme, Data)
├── data/             # Static portfolio content (edit these to update content)
├── App.js            # Route definitions and app structure
├── index.css         # Global styles and Tailwind directives
└── setupTests.js     # Jest configuration and mocks
```
