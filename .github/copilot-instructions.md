# Copilot Instructions for AI Coding Agents

## Project Overview

- **Stack:** React (with JSX), Vite for build/dev server, CSS Modules for styling.
- **Structure:**
  - `src/` contains all source code.
    - `components/`: Reusable UI components (e.g., `AppNav.jsx`, `PageNav.jsx`).
    - `pages/`: Top-level route views (e.g., `Homepage.jsx`, `Pricing.jsx`).
    - `assets/`: Static assets (e.g., images, SVGs).
  - `public/`: Static files served as-is.
  - Entry: `src/main.jsx` (mounts `App.jsx`).

## Key Patterns & Conventions

- **Routing:** Likely handled in `App.jsx` or `AppLayout.jsx` (check for React Router or similar usage).
- **Styling:** Uses CSS Modules (`*.module.css`). Import styles as objects and use as `styles.className`.
- **Component Organization:**
  - Components are colocated with their CSS modules.
  - Pages are for route-level views; components are for shared UI.
- **No explicit backend**—this is a frontend-only project unless otherwise noted.

## Developer Workflows

- **Start Dev Server:**
  ```sh
  npm run dev
  ```
- **Build for Production:**
  ```sh
  npm run build
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```
- **Dependencies:** Managed via `npm` and defined in `package.json`.

## Integration & External Dependencies

- **Vite Plugins:** See `vite.config.js` for any custom plugins or configuration.
- **React Fast Refresh:** Enabled via Vite plugins for instant feedback during development.

## Project-Specific Notes

- **Minimal Template:** The project is based on the official Vite + React template with minimal custom setup.
- **Extendability:** Add new components to `src/components/`, new pages to `src/pages/`.
- **Static Assets:** Place images and SVGs in `src/assets/` or `public/` as appropriate.

## Examples

- **Importing a CSS Module:**
  ```js
  import styles from './AppNav.module.css';
  <nav className={styles.navbar}>...</nav>;
  ```
- **Adding a New Page:**
  1. Create `src/pages/NewPage.jsx`.
  2. Add a route in the main router (see `App.jsx` or `AppLayout.jsx`).

## References

- See `README.md` for Vite/React basics.
- See `vite.config.js` for build customization.
- See `package.json` for scripts and dependencies.

---

If you add new conventions or workflows, update this file to keep AI agents productive.
