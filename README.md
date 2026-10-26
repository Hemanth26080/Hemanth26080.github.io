# Hemanth Ponugothi — Cloud & DevSecOps Portfolio

A responsive, static career portfolio designed for GitHub Pages. It uses plain HTML, CSS, and JavaScript — no framework, package manager, build step, or backend required.

## Included

- Responsive layout for desktop, tablet, and mobile
- Dark/light theme switch, saved in the visitor's browser
- Five languages: English (default), French, German, Dutch, and Spanish
- Animated cloud architecture illustration, pipeline visualization, AWS network diagram, and Kubernetes stack diagram
- Interactive toolkit tabs and project category filters
- CV PDF linked from the hero
- LinkedIn, GitHub project, and email links
- Scroll progress, subtle reveal animation, keyboard focus styles, and reduced-motion support

## Publish using GitHub Pages

1. Download and extract this portfolio ZIP.
2. In GitHub, create a **public repository** named `Hemanth26080.github.io` for a user site.
3. Upload the *contents* of this folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder together.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose branch `main` and folder `/(root)`, then save.
6. After GitHub Pages finishes deployment, visit `https://hemanth26080.github.io`.

If you use a repository with a different name, GitHub Pages will generally publish it under `https://hemanth26080.github.io/REPOSITORY-NAME/` instead.

Official guide: https://docs.github.com/en/pages/quickstart

## Edit before publishing

- **CV:** replace `assets/Hemanth-Ponugothi-CV.pdf` with your latest PDF, keeping the same filename, or update the link in `index.html`.
- **Contact details:** edit the email and phone/contact details in `index.html` if you want a different public contact method. The current page uses the email from your CV and does not display your phone number in the main layout.
- **Career details and metrics:** review the wording and figures in `index.html` against your latest CV before publishing.
- **Languages:** all interface translations are in `script.js`, in the `translations` object.
- **Colors and layout:** edit CSS variables near the top of `styles.css`.
- **Projects:** update the three project cards in `index.html` and check their repository URLs.

## Notes

- This portfolio is static. It does not collect form submissions, use analytics, or require API keys.
- Google Fonts are requested from Google Fonts when a visitor has a network connection. The page has system font fallbacks if that request is unavailable.
- The APS / work-authorisation line reflects the CV provided for this draft. Confirm the wording and validity date before making the site public.
- Motion is reduced automatically when a visitor has enabled their operating system's reduced-motion setting.
