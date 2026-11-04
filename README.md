# Macsur Pharmaa — Corporate Website Demo

A premium, mobile-first corporate website concept for **Macsur Pharmaa (India) Private Limited**, built with semantic HTML, CSS and vanilla JavaScript.

## Preview

Expected GitHub Pages address:

https://viviberi.github.io/macsur-pharmaa/

The repository's Pages site has to be enabled once before the deployment workflow can publish the website. See **Enable GitHub Pages** below.

## Design direction

The site uses a restrained pharmaceutical/biotech corporate visual system:

- Clinical white, soft mineral green, deep blue and teal
- Editorial split hero rather than a large empty dark banner
- Clear company, capabilities, quality, evidence and contact sections
- Responsive layouts designed for mobile first
- Keyboard skip link, descriptive image alternatives and reduced-motion awareness
- No fabricated certifications, capacity figures, export claims or current regulatory approvals

## Technology

- Static HTML, CSS and vanilla JavaScript — no framework or build dependency
- GitHub Actions quality checks on pushes and pull requests
- GitHub Pages deployment workflow
- SVG favicon, robots.txt and XML sitemap
- No third-party form service or server-side storage

## Enable GitHub Pages (one-time repository setting)

The deployment workflow currently cannot publish because the repository does not yet have a Pages site configured. This is a one-time GitHub repository setting that requires an owner/admin action:

1. Open [Settings → Pages](https://github.com/ViviBeri/macsur-pharmaa/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Save if GitHub displays a Save button.
4. Open the [Actions tab](https://github.com/ViviBeri/macsur-pharmaa/actions). The next push or manual workflow run will deploy the site.

The standard workflow token can deploy after Pages is enabled; it cannot create the Pages site itself.

## Automated checks and deployment

Workflow: `.github/workflows/deploy-pages.yml`

- `quality-check` runs on pushes and pull requests.
- `scripts/validate-site.mjs` checks core document metadata, the single H1, unique IDs, internal anchor targets, image alt attributes, safe external links and required support files.
- Deployment runs after quality checks on pushes to `main` and manual workflow dispatch.
- Only the production website files are uploaded to Pages; repository documentation and design notes are not published.

## Before presenting to Macsur Pharmaa

This is a demonstration concept, not a company-approved production website. Please review [CLIENT-APPROVAL-CHECKLIST.md](CLIENT-APPROVAL-CHECKLIST.md) with the company. In particular, obtain approved facility photographs and verify every company, product, manufacturing, quality and regulatory statement.

### Important content safeguards

- Historical public-record references are not proof of current licences, certifications, active manufacturing, approved products or present-day availability.
- The tablets, capsules and powders sections are explicitly qualified as historical dosage-form references and must be confirmed by the company.
- Address, email, CIN and legal company details must be checked against current company records before launch.
- The enquiry form opens the visitor's email application using `mailto:`; it does not transmit to a server or store submissions. A production lead form needs an approved, privacy-compliant submission service.

## 21st.dev CLI

21st.dev is optional. This website is intentionally framework-free, so components should only be introduced where they provide a measurable design or usability benefit. Local browser-based sign-in and the headless CI workflow are documented in the repository's earlier setup notes; a 21st.dev API key must be stored as a GitHub Actions secret named `API_KEY_21ST`, never committed to source.
