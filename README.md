# Mohammed Shafiullah N — Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**.

## About

This portfolio presents my profile, education, technical skills, and projects in a professional format. It is designed for use when applying for software development internships.

## Tech Stack

- **React** — Component-based UI
- **Vite** — Fast build tool and dev server
- **CSS** — Custom design system with CSS variables

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
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

## Deployment

The `dist/` folder contains the production-ready static files. Deploy to any static hosting service:

- **GitHub Pages** — Push the `dist/` folder or use GitHub Actions
- **Netlify** — Connect the repository and set build command to `npm run build`, publish directory to `dist`
- **Vercel** — Import the repository; Vite is auto-detected

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx / About.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Education.jsx / Education.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Skills.jsx / Skills.css
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Configuration Required

None. The project runs out of the box with no API keys or external service configuration.

## License

© 2026 Mohammed Shafiullah N. All rights reserved.
