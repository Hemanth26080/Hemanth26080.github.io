# Hemanth Ponugothi — Cloud & DevSecOps Portfolio

A responsive static portfolio for GitHub Pages, built with plain HTML, CSS and JavaScript. No framework, package manager, build step, backend or API keys are required.

## What's included

- Recruiter fast lane in the first viewport: target role, Paris/France location, French work-authorisation details, immediate availability, and exactly two clear hero actions: Open CV and Explore.
- Midnight Cloud visual system with a consistent navy base and cyan, violet, pink and mint accents across the hero, highlights and project artwork; includes a light/dark toggle.
- English and French language options only; the language selector does not advertise incomplete German, Dutch or Spanish translations.
- Expertise tabs mapped to real tools and project evidence, without invented proficiency percentages.
- Three dedicated case-study pages with technical diagrams, step-through walkthroughs, source links and cost notes:
  - `case-studies/securecloud-flask.html`
  - `case-studies/aws-infrastructure-security-platform.html`
  - `case-studies/three-tier-eks.html`
- Each project page includes an animated technical walkthrough and a source-linked diagram. The SecureCloud animation is illustrative; use the linked screenshot folder for available real project captures.
- Direct links to the committed Jenkinsfile, Trivy scan report, repository screenshot folder, and verified individual Ansible project repositories.
- Responsive desktop/tablet/mobile layouts, keyboard focus styles and reduced-motion support.
- CV PDF, project repository links, LinkedIn and email.

## Update your existing GitHub Pages site

The portfolio is intended to replace the files in your existing `Hemanth26080.github.io` repository.

1. Keep a backup branch of the current website before replacing files.
2. Extract the ZIP and copy the *contents* of `hemanth-portfolio/` into the root of your local clone of `Hemanth26080.github.io`. Do not copy over or remove the hidden `.git` folder.
3. Preserve any `CNAME` file if you use a custom domain, and preserve any deployment workflow you still use.
4. Inspect the changes with `git status` and `git diff`.
5. Commit and push from the local clone:

   ```bash
   git add -A
   git commit -m "Fix portfolio actions, alignment and theme"
   git push origin main
   ```

6. Wait for GitHub Pages to publish and check `https://hemanth26080.github.io` on desktop and mobile.

If the repository uses GitHub Actions instead of “Deploy from a branch”, keep its existing publishing setup and inspect the workflow before changing Pages settings.

## Evidence and metric notes

- The 90% infrastructure-setup figure is labelled as a project-reported estimate against manual console setup; refresh the figure if you have a measured time comparison.
- The 30%+ MTTR claim is attributed to Capgemini production support and contextualised as structured root-cause analysis and runbooks compared with the prior incident process.
- The current `image_scan.txt` report contains HIGH-severity findings in OS and Python packages. The Jenkinsfile configures Trivy to fail on HIGH/CRITICAL results; update the published scan report after remediation and a new run.
- The project README summarizes nine pipeline stages, while the committed Jenkinsfile contains eleven named stage blocks. Staging and production commands currently use `echo` placeholders, and the integration-test stage allows the suite to be absent.
- The committed Jenkinsfile does not currently invoke OWASP ZAP. It remains listed in the security toolkit as a tool, but should only be described as wired into this pipeline after integration.
- Walkthrough GIFs explain the project designs; the SecureCloud case study links directly to the public screenshot folder for actual captures.

## Maintain the site

- **CV:** Replace `assets/Hemanth-Ponugothi-CV.pdf` with the latest PDF while keeping the filename, or update `index.html`.
- **Career facts and availability:** Update the recruiter fast lane in `index.html` and its English/French strings in `script.js` when your status changes.
- **Translations:** The main page uses the `translations` object in `script.js`; case pages use `data-en` and `data-fr` attributes and `case-studies/case-studies.js`.
- **Theme/design:** `refined.css` contains the overriding visual system; `case-studies/case-studies.css` styles the project detail pages.
- **Case-study interactions:** `case-studies/case-studies.js` manages theme, language and walkthrough step state.
- **Projects:** Keep project links matched to their public repositories and update supporting evidence whenever implementation changes.

## Technical notes

- No form data or analytics are collected.
- Google Fonts are optional; system fallbacks keep the site usable if the font service is unavailable.
- Visitors' language and theme preferences are stored locally in their browser.
