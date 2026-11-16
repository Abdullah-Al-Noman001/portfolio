# Development Report — Root Portfolio Workspace

This report documents the portfolio served from the workspace root (the folder
containing `index.html`, `css/`, `js/`, and `assets/`). It is separate from the
other portfolio copy in `portfolio_new/`; that subfolder is not part of the
root site's page or deployment files.

## 1. Project overview

The project is a single-page personal portfolio for Abdullah Al Noman. It is
implemented with plain HTML, CSS, and browser JavaScript. There is no package
manager, build step, or framework. The intended workflow is to edit the content
object in `js/data.js`, keep the static fallback in `index.html` consistent,
and preview the page directly in a browser or with VS Code Live Server.

The current visual direction is dark glassmorphism with indigo, cyan, and
purple accents. The page includes a responsive navigation bar, animated hero,
portfolio and education sections, and a contact section. Several sections
remain visibly marked for future personal content.

## 2. Architecture and file responsibilities

| File or folder | Responsibility |
| --- | --- |
| `index.html` | Page landmarks, metadata, section containers, and readable static fallback content for when JavaScript is disabled. It loads `js/data.js` before `js/main.js`. |
| `js/data.js` | `PORTFOLIO_DATA` content and inline SVG icon definitions. Contains copy-paste templates for common entries. |
| `js/main.js` | Reads the data object, renders the navigation and page sections, then initializes animations, navigation behavior, contact form, and other interactions. Wrapped in an IIFE; no framework dependency. |
| `css/style.css` | Design tokens and all component, section, animation, and responsive styles. |
| `assets/images/` | Favicon variants, social preview image, current profile illustration, and a generic project placeholder. |
| `assets/cv/` | Intended location for the PDF linked by `about.cvUrl`; the current folder contains usage notes, not a configured resume. |
| `README.md` | Feature summary, file map, and quick customization examples. |
| `SETUP.md` | Local preview, deployment, Formspree setup, submission checklist, and troubleshooting. |
| `CHANGELOG.md` | Concise historical list of content and presentation changes. |
| `DEVELOPMENT_REPORT.md` | This architecture record and ongoing development log. |

The rendering flow is:

1. The browser parses `index.html` and displays its static section content.
2. `js/data.js` defines the content and icons.
3. `js/main.js` renders the current data into the section containers and turns
   on the interactive behavior.

Because the static markup is a fallback, edits that change the page's primary
content or structure may need corresponding changes in both `js/data.js` and
`index.html`.

## 3. Implemented features

- Responsive single-page layout with anchor navigation, sticky navigation,
  active-section highlighting, and a mobile menu.
- Hero with canvas particles, mouse response, CSS wireframe decorations, and a
  rotating typing line.
- About section, profile image, editable fact rows, and animated statistic
  cards.
- Skills grouped into editable cards and an education timeline.
- Project cards, technology tags, and hover tilt.
- Placeholder-ready certifications, achievements, roles, activities, and
  interests sections.
- Contact form validation, hidden honeypot field, configurable Formspree
  request, and mailto fallback.
- Scroll reveal, toast messages, back-to-top control, scroll progress,
  reduced-motion handling, and a custom cursor for suitable pointer devices.
- Inline SVG icons and relative local assets; the page has a static fallback
  when JavaScript is unavailable.

Form submissions are only sent to Formspree after `contact.formspreeId` is
configured. Until then, the form displays an unconfigured message. The
mailto fallback opens the visitor's email application; it does not send a
message by itself.

## 4. Visual design and implementation choices

`css/style.css` centralizes colors and other design values in CSS custom
properties near the top of the file. The stylesheet uses reusable glass cards,
gradient accents, and responsive rules rather than a component library.
JavaScript uses DOM APIs and inline SVG icon markup from `js/data.js`. The
heading font is requested from Google Fonts; system fonts provide a fallback.

The page honors `prefers-reduced-motion` and includes no-JavaScript CSS
fallbacks. These are implementation details read from the current source; this
documentation update did not perform a new accessibility or browser audit.

## 5. Content source and current placeholders

Most editable content is in `js/data.js`: site title, navigation, hero copy,
social links, biography and facts, statistics, skills, education, projects,
other profile sections, contact settings, and footer text. Templates for
adding entries are included at the bottom of that file.

The current project includes `[FILL ME]` content in both `js/data.js` and the
static fallback in `index.html`. The public GitHub profile currently exposes
one repository, the BS Card Game Bluff Tracker; its details have been added to
the projects section. Areas still awaiting real content include:

- Resume PDF and its configured path; the profile image is currently an SVG
  placeholder.
- Any additional projects not represented in the public GitHub profile, plus
  a confirmed live demo URL if one is published.
- Certifications, achievements, roles, activities, and some interests.
- Formspree form ID and any remaining profile/contact facts that the owner
  wants to publish.
- Deployment-specific social preview URL in the HTML metadata.

Search both `js/data.js` and `index.html` for `[FILL ME]` before publishing.
Use only verified details for public profile claims and statistics.

## 6. Running and publishing

For local preview, open the root `index.html` directly or serve this folder
with VS Code Live Server. A local web server is also suitable. Most content
edits require a browser refresh unless Live Server is refreshing the page.

The site is static and can be deployed from this root to GitHub Pages, Netlify,
or Vercel without a build command. See `SETUP.md` for the deployment steps,
Formspree configuration, and submission checklist. When making a submission
ZIP from the overall workspace, exclude `portfolio_new/`, which is a separate
portfolio version.

## 7. Prior development history

The existing `CHANGELOG.md` records prior edits dated 2026-11-15, including
title and tagline changes, contact email configuration, removal and
restoration of profile fact rows, About copy changes, and keeping the static
fallback aligned with the data. This is a summary drawn from the existing
changelog; no earlier commits or tests are reconstructed here.

The README and setup guide contain historical statements about responsive
testing. Those checks were not rerun for this report and documentation update.
No test runner or build configuration is present in the root project files.

## 8. Ongoing development log

For each meaningful future edit to this root portfolio, append an entry here
with the date, goal, files changed, and checks actually performed. Preserve
older entries. Also update `CHANGELOG.md` for notable user-facing changes, and
update `README.md` or `SETUP.md` when their descriptions or instructions no
longer match the code. Do not claim a test, browser check, or deployment unless
it was performed.

### 2026-11-16 — Workspace documentation

- **Goal:** Document the root workspace version, independently of
  `portfolio_new/`.
- **Files changed:** `README.md`, `SETUP.md`; added `DEVELOPMENT_REPORT.md`.
- **Changes:** Added the root report, described this workspace's data-driven
  renderer and static fallback, clarified the contact form setup, and added
  ongoing documentation and changelog maintenance steps.
- **Checks performed:** Read the root project files and compared the written
  setup and feature descriptions with their source references. No browser or
  automated tests were run for this documentation-only change.

### 2026-11-16 — Public GitHub project details

- **Goal:** Replace incomplete project information with details verifiable
  from the supplied GitHub profile.
- **Sources reviewed:** [GitHub profile](https://github.com/Abdullah-Al-Noman001),
  [public project repository](https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker),
  and its README.
- **Files changed:** `js/data.js`, `js/main.js`, `index.html`, `README.md`,
  `SETUP.md`, `CHANGELOG.md`, and this report.
- **Changes:** Added the BS Card Game Bluff Tracker description, features,
  stack, and repository link; set the listed-project count to one; added
  `localStorage` to the demonstrated web skills; synchronized the static
  no-JavaScript project card; and made the renderer omit a Live Demo link when
  no published URL is configured. Updated the docs to reflect remaining
  unknowns.
- **Evidence limits:** The profile page exposed one public repository and no
  additional biography, certificates, roles, achievements, or confirmed demo
  URL. Those fields remain incomplete rather than being inferred.
- **Checks performed:** Compared the updated copy with the public repository
  README and GitHub repository metadata. No browser or automated tests were
  run.

### 2026-11-16 — Portfolio milestone cards

- **Goal:** Make the About section communicate the scale of the user's work and
  that the portfolio continues to grow.
- **Files changed:** `js/data.js`, `index.html`, `css/style.css`, `README.md`,
  `SETUP.md`, `CHANGELOG.md`, and this report.
- **Changes:** Replaced the four stat cards with 10+ GitHub repositories, 6+
  personal projects, 2+ collaborative projects, and 4+ years of learning.
  Added a short growth statement below the cards and kept the no-JavaScript
  fallback and documentation aligned.
- **Evidence limits:** The requested totals were supplied by the user. They
  were not independently verified against the public GitHub profile, which
  exposes only one public repository. The Projects section continues to list
  that one repository until more project details are provided.
- **Checks performed:** Reviewed data and static fallback values for
  consistency. No browser or automated tests were run.
