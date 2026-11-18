# Abdullah Al Noman — Portfolio

This repository contains my personal portfolio website. It introduces my background as a Software Engineering student, highlights selected projects and activities, and provides ways to contact me.

- **Live portfolio:** [abdullah-al-noman001.github.io/portfolio](https://abdullah-al-noman001.github.io/portfolio/)
- **GitHub profile:** [github.com/Abdullah-Al-Noman001](https://github.com/Abdullah-Al-Noman001)

## Selected projects

- **[BS Card Game Bluff Tracker](https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker)** — A browser-based companion for tracking players, claims, and possible bluffs during a game. It can save game data in the browser. [View the demo](https://abdullah-al-noman001.github.io/bs-card-game-bluff-tracker/).
- **[Daily Habit Tracker](https://github.com/Abdullah-Al-Noman001/activity-tracker)** — A small web app for recording habits, reviewing activity heatmaps, and backing up or restoring data. [View the demo](https://abdullah-al-noman001.github.io/activity-tracker/).
- **[Space Relics 3D](https://github.com/Abdullah-Al-Noman001/space-relics-3d_V2)** — A team-built Solar System explorer created for NASA Space Apps Challenge 2026, combining 3D models, mission information, and a historical timeline. [View the demo](https://space-relics-3d-two.vercel.app/).
- **[Bangladesh Monopoly](https://github.com/Abdullah-Al-Noman001/Bangla_monopoly)** — A Bangladesh-themed, real-time multiplayer Monopoly-style game developed in collaboration with a friend. [View the demo](https://arghor-monopoly.vercel.app/).

## What the site includes

- Responsive, single-page layout with mobile navigation
- Profile, education, skills, project, activity, achievement, and certificate sections
- Downloadable CV and links to project repositories and available demos
- Contact form with field validation and a spam honeypot
- Keyboard-accessible navigation, visible focus styles, and reduced-motion support
- Static page content when JavaScript is unavailable

## Technology

The site uses HTML, CSS, and browser-based JavaScript, with inline SVG icons. It does not require a framework, package installation, or build step.

To preview it locally, open `index.html` in a browser, or run a local server from the project folder:

```sh
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment and contact form

The portfolio is hosted on GitHub Pages as a static site. It can also be served by another static hosting provider without a build command.

The contact form sends submissions through Formspree when a form ID is configured in `js/data.js`. Until then, submitting the form opens a prefilled email draft; the visitor must send it from their email application. GitHub Pages does not process form submissions itself.

## Project files

```text
index.html                   Page structure and static fallback
css/style.css                Layout, responsive styles, and visual theme
js/data.js                   Portfolio content and configuration
js/main.js                   Page rendering and interactive behavior
assets/                      Images, certificates, and CV
README.md                    Project overview
SETUP.md                     Local setup, deployment, and submission guide
DEVELOPMENT_REPORT.md        Project architecture and development record
CHANGELOG.md                 Summary of notable changes
```

Most portfolio content is maintained in `js/data.js`. When changing major page content or structure, keep the static fallback in `index.html` aligned as well.
