# Abdullah Al Noman — Personal Portfolio

I built this portfolio to introduce myself, share the projects I’m working on, and document what I’m learning as a Software Engineering student and game development enthusiast. It includes my skills, education, recent certificates, activities, and ways to get in touch.

- **Portfolio:** [abdullah-al-noman001.github.io/portfolio](https://abdullah-al-noman001.github.io/portfolio/)
- **GitHub:** [github.com/Abdullah-Al-Noman001](https://github.com/Abdullah-Al-Noman001)

## Featured Projects

- **[BS Card Game Bluff Tracker](https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker)** — I made this browser companion to help track players’ hands and claims during a BS card game, estimate bluffs, and save the game in the browser. [Live demo](https://abdullah-al-noman001.github.io/bs-card-game-bluff-tracker/)
- **[Daily Habit Tracker](https://github.com/Abdullah-Al-Noman001/activity-tracker)** — A small app I built to log daily habits, review activity heatmaps, and back up or restore data. [Live demo](https://abdullah-al-noman001.github.io/activity-tracker/)
- **[Space Relics 3D](https://github.com/Abdullah-Al-Noman001/space-relics-3d_V2)** — I worked with my team on this interactive Solar System explorer for NASA Space Apps Challenge 2026. It brings together 3D models, mission data, and a historical timeline.
- **[Bangladesh Monopoly](https://github.com/Abdullah-Al-Noman001/Bangla_monopoly)** — I collaborated with a friend on this Bangladesh-themed, real-time multiplayer Monopoly-style game.

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

I host this static site with GitHub Pages. Updates are published from the repository’s configured Pages branch.

## Contact Form

The form checks the visitor’s name, email, and message, then sends the submission to Formspree when I configure a form ID in `js/data.js`. GitHub Pages is static and can’t process submissions by itself. Until I set up Formspree, submitting the form opens a prefilled email draft that the visitor can send from their email app.

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
