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

The portfolio is a static site hosted with GitHub Pages. Updates are published from the repository's configured Pages branch.

## Contact Form

The form validates the visitor's name, email, and message, then sends the submission to Formspree when a form ID is configured in `js/data.js`. GitHub Pages is static and cannot process form submissions by itself. While the Formspree ID is unset, submitting the form opens a prefilled email draft; the visitor must send it from their email app.

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
DEVELOPMENT_REPORT.md            Architecture notes and dated development log
CHANGELOG.md                    Concise change history
```

## Updating Content

Most portfolio content is in `js/data.js`. Update the matching data entry and keep the corresponding static fallback in `index.html` synchronized. Change visual styles in `css/style.css`. See the templates at the bottom of `js/data.js`.
