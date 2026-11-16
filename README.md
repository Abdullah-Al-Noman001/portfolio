# A.Noman — Personal Portfolio

A responsive portfolio for Abdullah Al Noman, a Software Engineering student and game development enthusiast. It brings together selected projects, skills, education, recent certificates, achievements, current activities, and ways to get in touch.

- **Portfolio:** [abdullah-al-noman001.github.io/portfolio](https://abdullah-al-noman001.github.io/portfolio/)
- **GitHub:** [github.com/Abdullah-Al-Noman001](https://github.com/Abdullah-Al-Noman001)

## Featured Projects

- **[BS Card Game Bluff Tracker](https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker)** — A browser companion for the BS card game, with player hand tracking, claim history, bluff estimates, and saved game state. [Live demo](https://abdullah-al-noman001.github.io/bs-card-game-bluff-tracker/)
- **[Daily Habit Tracker](https://github.com/Abdullah-Al-Noman001/activity-tracker)** — Track daily habits, review activity heatmaps, and back up or restore data. [Live demo](https://abdullah-al-noman001.github.io/activity-tracker/)
- **[Space Relics 3D](https://github.com/Abdullah-Al-Noman001/space-relics-3d_V2)** — An interactive Solar System explorer built with a team for NASA Space Apps Challenge 2026, combining 3D models, mission data, and a historical timeline.
- **[Bangladesh Monopoly](https://github.com/Abdullah-Al-Noman001/Bangla_monopoly)** — A Bangladesh-themed, real-time multiplayer Monopoly-style game developed in collaboration with a friend.

## Portfolio Features

- Responsive single-page layout with a mobile navigation menu
- Animated hero section, project cards, skills, and education timeline
- Recent certificates with links to the certificate files
- Recent Achievements, plus research and competitive programming activities
- Interests and hobbies
- Contact form with input validation and spam honeypot
- Reduced-motion support and static fallback content when JavaScript is unavailable

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Inline SVG icons

No framework, package installation, or build step is required.

## Run Locally

Open `index.html` in a browser, or serve the folder locally:

```sh
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy

The portfolio is a static site and is hosted with GitHub Pages. To publish updates, push changes to the configured branch and Pages will serve the repository's site files. See [SETUP.md](SETUP.md) for GitHub Pages, Netlify, and Vercel instructions.

## Contact Form

GitHub Pages does not process form submissions itself. The form needs a Formspree form ID in `js/data.js` for direct website submissions. Until that is configured, submitting the form opens a prefilled message in the visitor's default email app; the visitor must send it from there. See [SETUP.md](SETUP.md) for setup instructions.

## Project Structure

```text
index.html                      Page structure and static fallback
css/style.css                   Layout, responsive styles, and visual theme
js/data.js                      Portfolio content and configuration
js/main.js                      Rendering, interactions, and form behavior
assets/images/                  Profile photo and site images
assets/certificates/             PDF certificates
assets/images/certificates/     Image certificates
README.md                       Project overview
SETUP.md                        Local setup, deployment, and contact form guide
DEVELOPMENT_REPORT.md            Architecture notes and dated development log
CHANGELOG.md                    Concise change history
```

## Updating Content

Most portfolio content is in `js/data.js`. Update the matching data entry and keep the corresponding static fallback in `index.html` synchronized. Change visual styles in `css/style.css`. See the templates in `js/data.js` and the deployment and editing guide in [SETUP.md](SETUP.md).
