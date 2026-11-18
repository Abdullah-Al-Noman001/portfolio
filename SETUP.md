# Setup and Submission Guide

This guide explains how to preview the portfolio, publish it as a static site, configure the contact form, and prepare a project copy for submission.

## Preview the site

The simplest option is to open `index.html` in a browser. For a local web server, open a terminal in the project folder and run:

```sh
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). Alternatively, open the folder in Visual Studio Code and use the Live Server extension to refresh the page automatically when files change.

Most text and portfolio entries are in `js/data.js`. Keep the corresponding static content in `index.html` in sync when changing major sections or page structure.

## Publish with GitHub Pages

1. Push the project files to a GitHub repository. The `index.html` file should be at the repository root, alongside the `css`, `js`, and `assets` folders.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch containing the site (commonly `main`) and the `/ (root)` folder, then save.
5. After GitHub Pages finishes publishing, use the site link shown on the Pages settings screen.

This project is static and has no build command. Netlify and Vercel can also publish it from the repository; select the project root as the published directory and leave the build command empty.

## Configure the contact form

The form uses Formspree for direct submissions. To enable it:

1. Create a form with [Formspree](https://formspree.io/) and confirm the receiving email address.
2. Copy the form ID from its endpoint URL, which has the form `https://formspree.io/f/FORM_ID`.
3. In `js/data.js`, replace the placeholder value of `contact.formspreeId` with that ID.
4. Confirm `contact.email` is the address you want to publish as the fallback contact link, then publish the updated files.
5. Submit a test message from the live site and confirm it arrives.

Without a configured form ID, the form opens a prefilled email draft in the visitor's email application. The visitor must send the draft. GitHub Pages does not handle form submissions on its own.

## Prepare a submission copy

Include the project files and folders, especially `index.html`, `css/`, `js/`, and `assets/`. Keep the documentation files with the project when requested. Ensure `index.html` remains at the project root so that asset paths work after extraction.

Before submitting, check the assignment instructions for the required archive name and required student details. Search `js/data.js` and `index.html` for `[FILL ME]` and resolve any placeholders relevant to the submitted version. The current contact form ID is a placeholder until Formspree is configured; the existing CV file is `assets/cv/Abdullah_Al_Noman_CV.pdf`.

## Troubleshooting

**The page has no styling or images.** Keep the folder structure intact and make sure `index.html` is beside the `css`, `js`, and `assets` folders. On a hosted site, ensure you published the contents of the project root rather than nesting them under an extra folder.

**The contact form opens an email draft.** This is the expected fallback while `contact.formspreeId` is not configured. Follow the steps above to enable direct submissions through Formspree.

**An image does not appear.** Compare its path in `js/data.js` with the file name under `assets/`. File names are case-sensitive on many web hosts.

**The page does not appear after enabling GitHub Pages.** Check the branch and folder selected in Pages settings, then allow a few minutes for the first deployment to finish.
