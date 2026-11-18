# Development Report

## Project overview

This project is a static, single-page portfolio for Abdullah Al Noman. It presents selected projects, education, skills, activities, certificates, and contact information. The site is built with HTML, CSS, and browser JavaScript, and does not require a framework or build process.

## Structure and implementation

| File or folder | Purpose |
| --- | --- |
| `index.html` | Page structure, metadata, and static fallback content. |
| `css/style.css` | Visual design, layout, responsive rules, and animation styles. |
| `js/data.js` | Portfolio content, links, settings, and reusable entry templates. |
| `js/main.js` | Renders the content and manages navigation, animation, and form behavior. |
| `assets/` | Profile image, certificates, CV, and other media. |
| `README.md` | Project overview and quick-start information. |
| `SETUP.md` | Preview, deployment, and submission instructions. |
| `CHANGELOG.md` | Summary of notable project updates. |

The page first loads the content in `index.html`, then JavaScript renders the current data from `js/data.js`. The static markup remains available when JavaScript is disabled. For that reason, significant changes to sections or content should be reflected in both files.

## Current features

- Responsive navigation and layouts for desktop and mobile
- Profile, education, skills, featured projects, activities, achievements, certificates, and interests
- Downloadable CV and links to project repositories and available live demos
- Contact form validation, a hidden spam honeypot, and optional Formspree submission
- Animated visual details, scroll controls, and reduced-motion support

## Current configuration and considerations

The contact form ID in `js/data.js` is still a placeholder. Until a Formspree ID is configured, submitting the form opens a prefilled email draft; the visitor must send it from their email application. GitHub Pages hosts the static files and does not process form submissions.

The current portfolio includes four selected projects. Some other profile content and metadata still contain `[FILL ME]` placeholders. Before publishing or submitting, review those placeholders in `js/data.js` and `index.html` and replace only those for which accurate information is available. The CV is included at `assets/cv/Abdullah_Al_Noman_CV.pdf`.

The site can be previewed by opening `index.html` or serving the project folder locally. GitHub Pages, Netlify, and Vercel can host it without a build command. See `SETUP.md` for instructions.

## Development record

The portfolio has been developed in stages. Earlier updates established the page identity and profile details, added project and skills sections, and introduced a static fallback for users without JavaScript. Later updates added certificates, project activities, the Space Relics 3D achievement and roles, a profile image, and a downloadable CV. The contact form was updated to use Formspree when configured and a prefilled email draft otherwise. The dated entries in `CHANGELOG.md` provide a fuller account of these changes.

### 2026-11-18 — Documentation revision

Revised the README, setup guide, development report, and changelog for clarity and consistency. Corrected the contact-form and CV descriptions and simplified setup and submission guidance. Reviewed the documentation against the current project files; no browser or automated tests were run because this update changes documentation only.
