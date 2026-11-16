# Abdullah Al Noman — Personal Portfolio

A dark, modern, glassmorphism portfolio website built with **plain HTML, CSS and vanilla JavaScript only** — no frameworks, no build step, no npm. Open `index.html` and it runs. Portfolio content is maintained in `js/data.js`; `index.html` includes static fallback content for visitors without JavaScript.

- Live site: (add your deployed URL here after following SETUP.md)
- GitHub: https://github.com/Abdullah-Al-Noman001

## Features

- Single-page portfolio with anchor navigation, sticky glass navbar and scrollspy
- Hero with an animated particle canvas (dots + connecting lines + mouse parallax), floating CSS wireframe shapes and a typing effect
- About section with 4 floating stat cards and animated counters
- Six skills cards separating programming, web projects, problem solving, software engineering foundations, tools, and current learning
- Education timeline with gradient center line, alternating items and a pulsing "current" dot
- Projects grid with 3D tilt-on-hover cards, colored tech tags and demo/code links
- Recent Certificates, plus placeholder-ready Achievements, Roles & Responsibilities, Experience/Activities, and Interests sections
- Contact form with client-side validation, honeypot spam protection, configurable Formspree submission, and a mailto fallback (configure the form ID in `js/data.js`)
- Custom cursor (dot + trailing ring), noise overlay, scroll progress bar, scroll reveal, toasts, back-to-top
- Mobile-first responsive design (tested at 360px, 768px, 1280px), reduced-motion support, no-JS fallback
- **Every piece of content lives in one file: `js/data.js`**

## Tech Stack

HTML, CSS, vanilla JavaScript only. The heading font loads from Google Fonts with a system fallback; icons are inline SVG. There is no build or package-install step.

## Folder Structure

```
portfolio/
├── index.html            # page structure + no-JS fallback content
├── css/
│   └── style.css         # all styles, theme colors in :root variables
├── js/
│   ├── data.js           # ALL your content — edit this file
│   └── main.js           # renders sections from data.js + all effects
├── assets/
│   ├── images/           # profile photo, favicon, og-image, project images
│   └── cv/               # put your CV PDF here
├── README.md             # this file
├── SETUP.md              # local run, deployment, Formspree, submission ZIP
├── DEVELOPMENT_REPORT.md # architecture, history, known gaps, dated edit log
└── CHANGELOG.md          # concise dated record of prior content edits
```

## How To Update My Content

Most page content is rendered from `js/data.js`. Open it, find the section, edit the text between quotes, save, and refresh the browser (Live Server can refresh automatically). Copy-paste templates for item types are at the bottom of that file. `index.html` contains a static no-JavaScript fallback, so keep that fallback aligned when changing the page's core content or structure.

### Add a project

In `js/data.js`, inside `projects: [ ... ]`, paste:

```js
{
  title: "My Awesome Project",
  category: "Web Development",
  icon: "globe",                       // code | globe | gamepad | cpu | folder …
  description: "What it does, what I built, what I learned.",
  tech: ["HTML", "CSS", "JavaScript"],
  demoUrl: "https://mydemo.vercel.app",
  codeUrl: "https://github.com/Abdullah-Al-Noman001/my-project",
},
```

Optional: add `image: "assets/images/my-project.png"` to show a picture banner instead of the gradient banner.

### Add a skill

Inside `skills: [ ... ]`, paste:

```js
{
  icon: "terminal",
  title: "Databases",
  description: "Storing and querying data for my apps.",
  items: ["MySQL", "SQLite"],
},
```

### Add an education / timeline item

Inside `education: [ ... ]`, paste (set `isCurrent: true` only on the newest item — its dot pulses):

```js
{
  title: "M.Sc. in Software Engineering",
  institution: "Daffodil International University",
  period: "2030",
  result: "CGPA 3.90",
  description: "Short note about this milestone.",
  isCurrent: false,
},
```

The same pattern works for `certifications`, `achievements`, `roles`, `experience` and `interests` — see the templates at the bottom of `js/data.js`.

### Change the colors (re-theme in one place)

Open `css/style.css` and edit the variables at the very top of `:root`:

```css
:root {
  --bg: #06070b;        /* page background        */
  --accent: #6366f1;    /* indigo  (primary)      */
  --accent-2: #06b6d4;  /* cyan    (secondary)    */
  --accent-3: #8b5cf6;  /* purple  (tertiary)     */
  --text: #e7e9f0;      /* main text              */
  --text-muted: #9aa1b5;/* secondary text         */
}
```

Every gradient, glow, chip and button follows these variables automatically.

### Replace your photo

1. Copy your photo into `assets/images/` (e.g. `profile.jpg`). Square images look best.
2. In `js/data.js` set `about.photo: "assets/images/profile.jpg"`.
3. The bundled `assets/images/profile.svg` is only a placeholder — you can delete it.

### Replace the CV

1. Copy your CV into `assets/cv/` (e.g. `Abdullah_Al_Noman_CV.pdf`).
2. In `js/data.js` set `about.cvUrl: "assets/cv/Abdullah_Al_Noman_CV.pdf"`.
3. The "Download CV" button starts working (it looks dashed/disabled until you do this).

### Set up the contact form (Formspree)

1. Create a free account at https://formspree.io and create a new form.
2. Copy the form ID — the part after `https://formspree.io/f/` in the endpoint URL.
3. In `js/data.js` set `contact.formspreeId: "yourFormId"` (and fill in `contact.email`).

Full walkthrough with screenshots-level detail: see `SETUP.md`, step 5.

## Replace the [FILL ME] placeholders

Search `js/data.js` for `[FILL ME]` and replace each one. Currently waiting for:

- student ID and section, profile photo, CV file, Formspree ID, and the
  deployment URL used in the social-preview metadata
- any further certificates to add when available, plus entries for Achievements, Roles & Responsibilities, Work Experience/Activities, and Hobbies

The summary cards currently show **10+ repositories, 6+ personal projects, 2+ collaborative projects, and 4+ years of learning**. These totals were supplied by Abdullah; keep them accurate as they grow. The Projects section features the [BS Card Game Bluff Tracker](https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker) ([live demo](https://abdullah-al-noman001.github.io/bs-card-game-bluff-tracker/)), [Daily Habit Tracker](https://github.com/Abdullah-Al-Noman001/activity-tracker) ([live demo](https://abdullah-al-noman001.github.io/activity-tracker/)), [Space Relics 3D](https://github.com/Abdullah-Al-Noman001/space-relics-3d_V2), and [Bangladesh Monopoly](https://github.com/Abdullah-Al-Noman001/Bangla_monopoly). Space Relics is described as a team project for NASA Space Apps Challenge 2026, and Bangladesh Monopoly as a collaboration with a friend, based on Abdullah's information.

## Deployment

The site is 100% static. See `SETUP.md` for step-by-step guides: GitHub Pages, Netlify (drag & drop or Git), and Vercel.

## Development history and documentation

See [DEVELOPMENT_REPORT.md](DEVELOPMENT_REPORT.md) for this workspace's
architecture, known placeholders, prior history, and ongoing dated log. Use
`CHANGELOG.md` for a short summary of content edits. For each meaningful
future change, add a report entry with the date, goal, files changed, and
checks actually run. Update this README and `SETUP.md` whenever features,
paths, editing steps, or deployment behavior change. The separate
`portfolio_new/` folder is another portfolio version; it is not part of this
workspace's root site.
