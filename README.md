# Abdullah Al Noman — Personal Portfolio

A dark, modern, glassmorphism portfolio website built with **plain HTML, CSS and vanilla JavaScript only** — no frameworks, no build step, no npm. Open `index.html` and it runs.

- Live site: (add your deployed URL here after following SETUP.md)
- GitHub: https://github.com/Abdullah-Al-Noman001

## Features

- Single-page portfolio with anchor navigation, sticky glass navbar and scrollspy
- Hero with an animated particle canvas (dots + connecting lines + mouse parallax), floating CSS wireframe shapes and a typing effect
- About section with 4 floating stat cards and animated counters
- Skills as glass cards with hover-lifting badges
- Education timeline with gradient center line, alternating items and a pulsing "current" dot
- Projects grid with 3D tilt-on-hover cards, colored tech tags and demo/code links
- Certifications, Achievements, Roles & Responsibilities, Experience/Activities, Interests sections — all placeholder-ready
- Contact form with client-side validation, honeypot spam protection and Formspree integration
- Custom cursor (dot + trailing ring), noise overlay, scroll progress bar, scroll reveal, toasts, back-to-top
- Mobile-first responsive design (tested at 360px, 768px, 1280px), reduced-motion support, no-JS fallback
- **Every piece of content lives in one file: `js/data.js`**

## Tech Stack

HTML, CSS, vanilla JavaScript only. (One optional Google Font with a system fallback; all icons are inline SVG.)

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
└── SETUP.md              # local run, deployment, Formspree, submission ZIP
```

## How To Update My Content

Everything you see on the page is rendered from `js/data.js`. Open it, find the section, edit the text between quotes, save, refresh. Copy-paste templates for every item type are at the bottom of that file.

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

- email, student ID, section, profile photo, CV file, Formspree ID
- the numbers for Projects / Certifications / Years of Learning stat cards
- entries for Projects, Certifications, Achievements, Roles & Responsibilities, Work Experience/Activities, Hobbies

## Deployment

The site is 100% static. See `SETUP.md` for step-by-step guides: GitHub Pages, Netlify (drag & drop or Git), and Vercel.
