# Mohammed Shafiullah N — Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**.

## About

This portfolio presents my profile, education, technical skills, and projects in a professional format. Built with a sleek dark design language adapted from the Framer DesignFast template.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 6** — Fast build tool and dev server
- **ESLint** — Code quality and React Hooks linting
- **CSS** — Custom design system with CSS variables (DesignFast theme)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (`^18.0.0 || ^20.0.0 || >=22.0.0` — required by Vite 6)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Shafyydev/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the local development server at [http://localhost:5173/](http://localhost:5173/) (or with custom base if `BASE_URL` is set).

### Production Build

```bash
npm run build
```

Output is written to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally at [http://localhost:4173/](http://localhost:4173/).

### Linting

```bash
npm run lint
```

Runs ESLint to verify code quality and React Hook conventions.

## Deployment

This project is configured for **GitHub Pages** deployment via GitHub Actions.

- **Prerequisites:** GitHub Pages must be enabled in the repository settings prior to the initial deployment: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- **Automated CI/CD:** Every push to `main` triggers `.github/workflows/deploy.yml` which validates code quality with ESLint, builds the bundle with `BASE_URL=/My-Portfolio/`, and deploys to GitHub Pages automatically.
- **Base URL Flexibility:** `vite.config.js` defines `base: process.env.BASE_URL || './'`. This default relative path allows the site to run out of the box at any root domain, Netlify, Vercel, or local preview, while CI explicitly sets `BASE_URL=/My-Portfolio/` for GitHub Pages repository sub-paths.
- **Live URL:** The production portfolio is live at: **https://shafyydev.github.io/My-Portfolio/**

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── attendance-preview.jpg
│   ├── attendance-preview.webp
│   ├── portfolio-preview.jpg
│   ├── portfolio-preview.webp
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx / About.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Education.jsx / Education.css
│   │   ├── FocusAreas.jsx / FocusAreas.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Skills.jsx / Skills.css
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Copyright

© 2026 Mohammed Shafiullah N. All rights reserved.
