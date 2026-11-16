# SETUP.md — Beginner-Friendly Setup Guide

This guide covers everything: running the site on your computer, putting it
online for free, connecting the contact form, and submitting your work as a
ZIP. No prior deployment experience needed.

---

## 1. Run the site locally

### Option A — just open it
1. Unzip (if needed) so you have the `portfolio` folder on your computer.
2. Double-click `portfolio/index.html`.
3. It opens in your browser and works immediately.

### Option B — VS Code Live Server (auto-refresh while you edit)
1. Install VS Code: https://code.visualstudio.com
2. Open the `portfolio` folder in VS Code (**File > Open Folder**).
3. Install the "Live Server" extension (click the Extensions icon in the left
   bar, search "Live Server", click Install).
4. Right-click `index.html` and choose **Open with Live Server**.
5. Your browser opens `http://127.0.0.1:5500`. Every time you save a file,
   the page reloads automatically.

> Tip: edit `js/data.js` for most content changes. Live Server refreshes the
> page after you save; if you opened `index.html` directly, refresh the browser
> yourself. Keep the static fallback in `index.html` aligned when changing
> core content or page structure.

---

## 2. Deploy to GitHub Pages (free)

1. Create a GitHub account (you already have one) and log in.
2. Click the **+** at the top right > **New repository**.
   - Repository name: `portfolio` (or anything you like).
   - Visibility: **Public** (required for free GitHub Pages).
   - Do NOT tick "Add a README" — we already have one.
   - Click **Create repository**.
3. Upload the files:
   - Easy way: on the new empty repo page click **uploading an existing
     file**, then drag the CONTENTS of the portfolio root (`index.html`,
     `css/`, `js/`, `assets/`, `README.md`, `SETUP.md`,
     `DEVELOPMENT_REPORT.md`, and `CHANGELOG.md`) into the browser window.
     Important: upload the files themselves, not the portfolio folder —
     `index.html` must sit at the root of the repository.
   - Commit with message "Initial portfolio" and click **Commit changes**.
4. Enable Pages:
   - In the repo, go to **Settings > Pages** (left sidebar).
   - Under "Build and deployment" > **Source**, choose **Deploy from a
     branch**.
   - Branch: `main`, folder: `/ (root)`, click **Save**.
   - Wait 1–3 minutes, refresh the page.
5. Your site is live at:

   ```
   https://<your-github-username>.github.io/portfolio/
   ```

   For you that is: `https://abdullah-al-noman001.github.io/portfolio/`
   (if you named the repo `portfolio`).

---

## 3. Deploy to Netlify (free)

### Option A — drag & drop (fastest, no Git)
1. Zip the CONTENTS of the `portfolio` folder (so the ZIP contains
   `index.html` at its root — see step 7 for how to make a ZIP).
   Actually for Netlify you can drag a folder too: go to
   https://app.netlify.com/drop and drag your `portfolio` folder onto the
   page.
2. Netlify uploads it and gives you a live URL like
   `https://random-name-123.netlify.app` within seconds.
3. Rename it: **Site settings > Change site name** (e.g.
   `abdullah-al-noman.netlify.app`).

### Option B — connect Git (auto-deploys on every push)
1. Push your code to GitHub first (step 2 above).
2. Go to https://app.netlify.com , log in, click **Add new site > Import an
   existing project**.
3. Pick GitHub, authorize, and select your `portfolio` repo.
4. Build settings: leave everything empty.
   - Build command: (leave blank)
   - Publish directory: `.` (just a dot)
5. Click **Deploy**. Every future `git push` updates the site automatically.

---

## 4. Deploy to Vercel (free)

1. Push your code to GitHub (step 2 above).
2. Go to https://vercel.com , log in with GitHub.
3. Click **Add New > Project**, then **Import** your `portfolio` repo.
4. Configure:
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: leave empty (defaults to the project root)
5. Click **Deploy**. Done — you get a `*.vercel.app` URL.

---

## 5. Formspree — make the contact form actually send emails

The contact form needs a free Formspree account (no server of your own):

1. Go to https://formspree.io and sign up (free tier: 50 submissions/month).
2. Click **New Form** (or the **+** button).
3. Name it e.g. "Portfolio contact" and confirm the email address where you
   want to receive messages.
4. Formspree shows you an endpoint URL like:

   ```
   https://formspree.io/f/abcdwxyz
   ```

   The part after `/f/` — `abcdwxyz` — is your **form ID**.
5. Open `js/data.js`, find the `contact` section and paste the ID:

   ```js
   contact: {
     email: "your.real.email@example.com",
     location: "Bangladesh",
     university: "Daffodil International University",
     formspreeId: "abcdwxyz",     // <-- your form ID here
     intro: "...",
   },
   ```

6. Also set `contact.email` to your real email (used by the mailto fallback
   link if Formspree ever fails).
7. Test it: open your site, fill the form, send. Check your inbox. The first
   submission may ask you to confirm your email address at Formspree.

How it works: `js/main.js` validates the fields, blocks spam bots with a
hidden honeypot field, and `fetch()`-POSTs the message as JSON to
`https://formspree.io/f/<your-id>`. Success shows a green toast; failure
shows a red toast plus a direct "email me" link.

---

## 6. Updating your site after deployment

- **GitHub Pages (web upload):** open your repo, click the pencil icon on
  `js/data.js`, edit, **Commit changes**. The site updates in ~1 minute.
- **Netlify / Vercel with Git:** edit files (or push from VS Code) — every
  push to `main` redeploys automatically.
- **Netlify drag & drop:** just drag the updated folder onto
  https://app.netlify.com/drop again — it replaces the old site (same URL,
  if you kept the same site).

---

## 7. Making the submission ZIP: `StudentID_Section_StudentName.zip`

1. Finish all your `[FILL ME]` edits in `js/data.js` first (see checklist
   below) — the ZIP must contain the finished site.
2. Name the ZIP exactly as required, using YOUR details, e.g.:

   ```
   221-15-XXXX_A_Abdullah_Al_Noman.zip
   ```

   (replace with your real student ID and section; keep the underscore
   pattern your instructor asked for).
3. How to zip:
   - **Windows:** right-click the `portfolio` folder > **Send to >
     Compressed (zipped) folder**, then rename the `.zip` file.
   - **macOS:** right-click the `portfolio` folder > **Compress "portfolio"**,
     then rename `portfolio.zip`.
4. The ZIP should contain the folder like this:

   ```
   portfolio/
   ├── index.html
   ├── css/style.css
   ├── js/data.js
   ├── js/main.js
   ├── assets/...
   ├── README.md
   ├── SETUP.md
   ├── DEVELOPMENT_REPORT.md
   └── CHANGELOG.md
   ```

---

## 8. Pre-submission checklist

Run through this before zipping or submitting:

- [ ] Search `js/data.js` for `[FILL ME]` — zero matches left
- [ ] Real profile photo added to `assets/images/` and set in `about.photo`
- [ ] CV PDF added to `assets/cv/` and set in `about.cvUrl` (Download CV
      button works)
- [ ] Formspree ID set in `contact.formspreeId` and a test message received
- [ ] `contact.email` is your real email
- [ ] Summary-card counts (repositories, personal projects, collaborations,
      years learning) reflect your current totals; the page currently shows
      10+, 6+, 2+, and 4+
- [ ] Each listed project has a working Code link; add a Live Demo link only
      when a published demo URL has been confirmed
- [ ] All social links open correctly (Facebook, LinkedIn, GitHub)
- [ ] Open the site on a phone (or 360px wide in DevTools) — no horizontal
      scrolling, mobile menu works
- [ ] Press F12 > Console — no red errors
- [ ] Footer year and copyright look right
- [ ] `README.md`, `SETUP.md`, and `DEVELOPMENT_REPORT.md` match the current
      project; add a dated report entry for the latest meaningful changes
- [ ] If zipping from the workspace root, exclude the separate
      `portfolio_new/` folder; it is a different portfolio version

## 9. Troubleshooting

**The page opens with no styling (plain white/black text).**
You opened the file from the wrong place or moved `index.html` out of the
folder. Keep the structure intact: `index.html` next to the `css/` and `js/`
folders. If you see this after deploying, you uploaded the files nested
inside an extra folder — `index.html` must be at the root.

**The contact form says "not configured yet".**
`contact.formspreeId` in `js/data.js` still contains `[FILL ME]` — do step 5
above.

**Images do not show.**
Check the file name in `js/data.js` matches exactly, including capital
letters (`Profile.jpg` is NOT the same as `profile.jpg` on the web). Paths
are relative to `index.html`, e.g. `assets/images/profile.jpg`.

**Horizontal scrollbar on mobile.**
Something you added is wider than the screen — usually a very long word/URL
in `js/data.js`. Break it up or shorten it. The shipped site is tested at
360px with no horizontal scroll.

**Typing effect / particles not moving.**
The site respects the visitor's "reduced motion" operating-system setting —
on such devices animations are intentionally paused. Also check the browser
console (F12) for errors.

**Fonts look different offline.**
The heading font (Space Grotesk) loads from Google Fonts; with no internet
it falls back to your system font. That is expected and fine.

**GitHub Pages shows 404.**
Wait 1–3 minutes after enabling Pages, make sure the repo is Public, the
branch is `main`, and the folder is `/ (root)`.

## 10. Keep the documentation current

For every meaningful edit to this root workspace:

1. Append a dated entry to `DEVELOPMENT_REPORT.md` with the goal, files
   changed, and checks actually run. Keep historical entries intact.
2. Add a concise user-facing summary to `CHANGELOG.md` for content or feature
   changes.
3. Update this guide if the run, editing, contact-form, deployment, or
   submission steps changed.
4. Update `README.md` if features, project structure, dependencies, or known
   placeholders changed.

Do not record a test, browser check, or deployment as successful unless it was
actually performed. Search `js/data.js` and `index.html` for `[FILL ME]` before
publishing; the HTML contains the no-JavaScript fallback and some additional
metadata placeholders.
