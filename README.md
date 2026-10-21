# Mohammed Shafiullah N — Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**.

## About

This portfolio presents my profile, education, technical skills, and projects in a professional format. Built with a sleek dark design language adapted from the Framer DesignFast template.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 6** — Fast build tool and dev server
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

Opens the site at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Output is written to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

Runs ESLint to verify code quality and React Hook conventions.

## Deployment

This project is configured for **GitHub Pages** deployment via GitHub Actions.

- Every push to `main` triggers a CI workflow that runs linting, builds the bundle, and deploys to GitHub Pages automatically.
- The live site is available at: **https://shafyydev.github.io/My-Portfolio/**
- `vite.config.js` sets `base: '/My-Portfolio/'` for correct asset paths on the subpath.

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
