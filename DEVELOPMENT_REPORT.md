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
| `assets/cv/` | Approved one-page CV PDF linked by `about.cvUrl` for the About section's Download CV button. |
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
- Skills grouped into six editable cards that distinguish project experience,
  coursework foundations, tools, and current learning; plus an education
  timeline.
- Project cards, technology tags, and hover tilt.
- Downloadable one-page CV PDF linked from the About section.
- Recent Certificates, a recent achievement, Space Relics 3D project roles, a
  research paper and competitive programming under Experience & Activities,
  and populated interests for Machine Learning, Artificial Intelligence,
  walking, video games, and photography.
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
static fallback in `index.html`. The authenticated GitHub repository listing
contains 10 repositories, including personal project apps, portfolio copies,
a profile README, and forks. The current Featured Projects section lists the
BS Card Game Bluff Tracker, Daily Habit Tracker, Space Relics 3D, and Dhoni
Bangladesh Monopoly.
Areas still awaiting real content include:

- Any additional project details the owner wants to feature beyond the four
  selected cards.
- Verification that the Space Relics 3D and Dhoni Game demo URLs are currently
  reachable; their URLs came from GitHub repository metadata.
- Additional certificates beyond the current recent selection, activities,
  and some interests.
- **Current challenge — Contact form delivery:** The site is hosted on static
  GitHub Pages and has no configured Formspree form ID. Form validation works,
  but the site cannot deliver submissions directly until an endpoint is set.
  Without that endpoint, submit opens a prefilled email draft for the visitor
  to send manually. This preserves a usable fallback without implying that
  GitHub Pages can process form posts on its own.
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

### 2026-11-16 — Skills section grounded in profile and projects

- **Goal:** Make the Skills section reflect the profile README and skills
  demonstrated in the account's original project repositories.
- **Files changed:** `js/data.js`, `index.html`, `README.md`, `CHANGELOG.md`,
  and this report.
- **Changes:** Reorganized the cards as Programming, Web Development,
  Problem Solving & Game Logic, Software Engineering Foundations, Tools &
  Workflow, and Currently Learning. Added descriptions and project-relevant
  badges for DOM/events, local storage, JSON/File APIs, probability, game
  state, and settlement calculations. Moved JavaScript into Programming to
  reflect its project use, moved C# and Unity to the learning card, and removed
  unsupported Python and AI/ML skill claims.
- **Checks performed:** Compared the data-driven skill cards with the static
  HTML fallback. No browser or automated tests were run.
- **Follow-up:** Removed the Markdown Docs badge from Tools & Workflow at the
  user's request; the card now lists Git, GitHub, and VS Code.

### 2026-11-16 — Featured projects expanded

- **Goal:** Add the Daily Habit Tracker and two requested collaborative
  projects beside the existing Bluff Tracker.
- **Files changed:** `js/data.js`, `js/main.js`, `css/style.css`, `index.html`,
  `README.md`, `CHANGELOG.md`, and this report.
- **Changes:** Added the Daily Habit Tracker, Space Relics 3D, and Dhoni Game
  cards with descriptions, technology tags, repository links, and available
  demo URLs. Synchronized the static HTML fallback.
- **Evidence limits:** Descriptions and stacks follow the repository READMEs.
  Demo URLs come from GitHub repository metadata and were not independently
  verified as reachable. No specific personal contribution details were
  invented for either collaborative fork.
- **Checks performed:** Compared the project data and static fallback entries.
  No browser or automated tests were run.

### 2026-11-16 — Project collaboration details and live demos

- **Goal:** Add the requested deployed links and make collaboration visible in
  the Space Relics and Bangla Monopoly project cards.
- **Files changed:** `js/data.js`, `index.html`, `README.md`, `CHANGELOG.md`,
  and this report.
- **Changes:** Added the user-provided GitHub Pages URLs to the Bluff Tracker
  and Daily Habit Tracker cards. Described Space Relics as built with the user's
  team for NASA Space Apps Challenge 2026 and Bangla Monopoly as a collaboration
  with a friend. Renamed the latter badge to “Collaborative Game” and removed
  “Fork” from both category badges. Kept the separate source-repository credits
  for both projects.
- **Evidence limits:** Collaboration wording comes from the user. The new demo
  URLs were supplied by the user and were added as given; their reachability was
  not independently checked.
- **Checks performed:** Compared the project data with the static HTML fallback
  and documentation. No browser or automated tests were run.

### 2026-11-16 — Remove fork labels and add Featured Projects reminder

- **Changes:** Removed the “Forked from” credits from the Space Relics and
  Dhoni Game cards and data. Updated the README and changelog, and added a
  changelog reminder to keep Featured Projects current as project details
  change.
- **Checks performed:** Confirmed no “Forked from” text remains in the portfolio
  files and checked the working diff for whitespace issues.

### 2026-11-16 — Recent certificates expanded

- **Changes:** Added the supplied SQL Server Foundations and CS301 Computer
  Architecture PDFs alongside the 2026 NASA Space Apps Challenge Galactic
  Problem Solver certificate. Renamed the section and navigation link to
  “Recent Certificates,” marked the NASA certificate as the latest, centered
  the certificate cards, and replaced the prior note with a short statement
  that this is a selection with more to come. Updated the README and changelog.
- **Files changed:** `assets/certificates/lab-certificate.pdf`,
  `assets/certificates/computer-architecture-certificate.pdf`,
  `assets/images/certificates/nasa-space-apps-2026.jpg`, `js/data.js`,
  `index.html`, `css/style.css`, `README.md`, `CHANGELOG.md`, and this report.
- **Checks performed:** Visually inspected the two PDF certificates, confirmed
  all three local certificate links and assets, and checked the diff for
  whitespace errors. No browser or automated tests were run.

### 2026-11-16 — Simplify certificate dates

- **Changes:** Changed the Computer Architecture and SQL Server certificate
  date labels to month and year only in the data and static fallback. Logged the
  update in the changelog.
- **Checks performed:** Confirmed the old day-specific labels are gone and ran
  `git diff --check`.

### 2026-11-16 — Restore side-by-side certificate cards

- **Changes:** Removed the “Latest” prefix from the Galactic Problem Solver
  date. Restored two certificate columns on wider screens and centered the
  third card beneath them; the cards remain stacked on narrow screens.
- **Checks performed:** Reviewed the certificate data and responsive CSS and
  ran `git diff --check`.

### 2026-11-16 — Three certificates in one row

- **Changes:** Set the Recent Certificates grid to three columns on wide
  screens, keeping the cards responsive at narrower widths. Updated the
  changelog.
- **Checks performed:** Reviewed the breakpoint rules and ran `git diff --check`.

### 2026-11-16 — Simplify Computer Architecture certificate title

- **Changes:** Removed “CS301:” from the visible Computer Architecture
  certificate title while retaining the certificate card and PDF link.
- **Checks performed:** Confirmed the public-facing title contains no course
  code, the PDF link remains, and `git diff --check` passes.

### 2026-11-16 — NASA Space Apps Challenge achievement

- **Changes:** Replaced achievement placeholders with the user's participation
  in NASA Space Apps Challenge 2026, describing their research and data
  collection for Space Relics 3D and their contribution to building and
  deploying the project with their team. Centered the single achievement card.
  Updated the README and changelog.
- **Checks performed:** Compared the data-driven entry with the static HTML
  fallback and ran `git diff --check`.

### 2026-11-16 — Rename Recent Achievements section

- **Changes:** Renamed the achievement section heading to “Recent Achievements”
  in the static page and data-driven section settings; noted this in the changelog.
- **Checks performed:** Compared both headings and ran `git diff --check`.

### 2026-11-16 — Space Relics 3D project roles

- **Changes:** Added Research & Development and Software Developer entries
  under Roles & Responsibilities for the NASA Space Apps Challenge 2026 team
  project, reflecting the user's research, data collection, development, and
  deployment contributions. Updated the static fallback, README, changelog,
  and current-state report.
- **Checks performed:** Compared both role cards with the data entries and ran
  `git diff --check`.

### 2026-11-16 — Competitive programming and research in progress

- **Changes:** Replaced the Space Relics Software Developer role card with a Research Paper
  Contributor entry and added the unpublished paper to Experience & Activities
  with an “In Progress” status. Removed the unused activity placeholder and
  synchronized the static fallback and
  updated the README and changelog.
- **Checks performed:** Compared the skills, role, and activity content in
  `js/data.js` with `index.html`; ran `git diff --check`.

### 2026-11-16 — List competitive programming as an activity

- **Changes:** Removed Competitive Programming from the skills badges and
  added it as ongoing practice in Experience & Activities beside the research
  paper. Returned the two activity cards to the responsive two-column layout.
  Updated the README and changelog.
- **Checks performed:** Compared the activity data with the static fallback
  and ran `git diff --check`.

### 2026-11-16 — Update interests and hobbies

- **Changes:** Kept Machine Learning and Artificial Intelligence, replaced
  Deep Learning and the hobby placeholders with Walking and Video Games, and
  synchronized the static page and README.
- **Checks performed:** Compared interest cards in `js/data.js` and `index.html`
  and ran `git diff --check`.

### 2026-11-16 — Add Photography interest

- **Changes:** Added Photography to Interests & Hobbies with a camera icon and
  description. Updated the README and changelog.
- **Checks performed:** Confirmed the data-driven and static cards match and ran
  `git diff --check`.

### 2026-11-16 — Reorder portfolio sections

- **Changes:** Moved the sections following Featured Projects into the requested
  order: Roles & Responsibilities, Experience & Activities, Recent
  Achievements, Recent Certificates, and Interests & Hobbies. Updated the
  changelog.
- **Checks performed:** Verified section order in the static page and ran
  `git diff --check`.

### 2026-11-16 — Add profile portrait

- **Changes:** Copied the supplied portrait to `assets/images/profile.png` and
  set it as the About section photo in both the data and static HTML. Updated
  the README, setup checklist, and changelog.
- **Checks performed:** Confirmed the image file and both photo paths, and ran
  `git diff --check`.

### 2026-11-16 — Update portfolio identity and footer copy

- **Changes:** Replaced the hero and footer tagline with the requested three-part
  descriptor, changed the navbar and footer logo to “A.Noman,” removed the
  university badge below the portrait, and simplified the built-with line.
  Updated page title and social preview metadata to match the new descriptor.
- **Files changed:** `js/data.js`, `js/main.js`, `index.html`, `CHANGELOG.md`,
  and this report.
- **Checks performed:** Searched for the old tagline, logo, and footer copy and
  ran `git diff --check`.

### 2026-11-16 — Restore tagline typography and split logo accent

- **Changes:** Kept the existing tagline font styling and used the existing
  logo accent gradient on “Noman,” leaving “A.” in the base logo color. Updated
  the data, static page, and changelog.
- **Checks performed:** Confirmed both logo instances use the same split styling
  and ran `git diff --check`.

### 2026-11-16 — Remove Problem Solver tagline phrase

- **Changes:** Removed “Problem Solver” from the hero and footer tagline and
  aligned the page and social titles with the two remaining descriptors.
- **Checks performed:** Confirmed the tagline and metadata no longer include the
  phrase and ran `git diff --check`.

### 2026-11-16 — Refine tagline and profile portrait

- **Changes:** Switched the hero and footer tagline separator to a vertical
  bar, reduced tagline font sizes slightly, and changed the profile portrait to
  a smaller circular crop.
- **Checks performed:** Reviewed the updated copy and responsive photo styles;
  ran `git diff --check`.

### 2026-11-16 — Update hero typing loop

- **Changes:** Set the rotating “I'm exploring” phrases to Web Development,
  Game Development, Software Development, AI & Machine Learning, Competitive
  Programming, and Research & Development. Updated the changelog.
- **Checks performed:** Compared the configured phrase list with the requested
  topics and ran `git diff --check`.

### 2026-11-16 — Simplify location labels

- **Changes:** Removed the “DSC” prefix from the location in the mobile menu,
  hero, About facts, and contact section. The location now reads “Savar, Dhaka,
  Bangladesh.” Updated the changelog.
- **Checks performed:** Searched the workspace for remaining “DSC” location
  references and ran `git diff --check`.

### 2026-11-16 — Move footer tagline to the navigation row

- **Changes:** Removed the tagline from the A.Noman brand stack and placed it
  as a separate flex item alongside the footer navigation and social links.
  Added wrapping behavior for narrower screens and reduced the footer tagline
  size for the single-row layout. Updated the changelog.
- **Checks performed:** Reviewed the footer markup and responsive styles and ran
  `git diff --check`.

### 2026-11-16 — Remove footer tagline

- **Changes:** Removed the tagline beside A.Noman from the footer while keeping
  the hero tagline. Updated the changelog.
- **Checks performed:** Confirmed the footer no longer has a tagline element and
  ran `git diff --check`.

### 2026-11-16 — Improve contact form fallback for GitHub Pages

- **Changes:** Kept the tagline in the hero and removed the remaining footer
  tagline in the static source. When no Formspree ID is configured, the contact
  form now opens a prefilled email draft with the visitor's name, email, and
  message. Updated the README and setup guide to explain that GitHub Pages is
  static and needs a form backend for direct submissions.
- **Checks performed:** Reviewed the no-ID and send-failure fallback paths,
  confirmed the footer has no tagline element, and ran `git diff --check`.

### 2026-11-16 — Rewrite project README

- **Changes:** Replaced the maintenance checklist-style README with a
  project-focused overview covering the portfolio, featured projects,
  technologies, local run instructions, deployment, contact form behavior, and
  project structure.
- **Checks performed:** Reviewed README links and documented commands and ran
  `git diff --check`.

### 2026-11-16 — Clarify contact form challenge and README behavior

- **Changes:** Removed README references to `SETUP.md`. Explained the Formspree
  direct-submission path and the prefilled email-draft fallback. Recorded the
  unconfigured Formspree endpoint as a current contact-form delivery challenge.
- **Checks performed:** Searched the README to confirm it no longer mentions
  `SETUP.md`, reviewed the contact behavior wording, and ran `git diff --check`.

### 2026-11-16 — Add approved CV download

- **Goal:** Make the approved, no-photo CV available from the portfolio's
  Download CV button.
- **Files changed:** `assets/cv/Abdullah_Al_Noman_CV.pdf`, `js/data.js`,
  `CHANGELOG.md`, and this report.
- **Changes:** Added a one-page A4 CV featuring the verified profile, education,
  skills, selected projects, certificates, and activities. Set `about.cvUrl` to
  the relative PDF path used by the About section's download link. Updated the
  biography to emphasize curiosity, learning by building, and the goal of
  becoming a well-rounded software engineer.
- **Checks performed:** Confirmed the PDF is one A4 page and visually reviewed
  its rendered layout. Confirmed the configured CV path points to the added
  asset. Pushed the CV and link in commit `61fbe87`; this entry records the
  follow-up documentation update.
