# Macsur Pharmaa — Website Demo

A responsive, single-page corporate website concept for **Macsur Pharmaa (India) Private Limited**, built with plain HTML, CSS and JavaScript.

## Preview

After GitHub Pages is enabled, the demo will be available at:

https://viviberi.github.io/macsur-pharmaa/

## Built with

- Static HTML, CSS and vanilla JavaScript
- Responsive, mobile-first layout
- No paid website builder or runtime dependency
- GitHub Actions deployment to GitHub Pages

## Publish the demo

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy-pages.yml` deploys the site on every push to `main`.
4. Open the **Actions** tab to check the deployment. The Pages URL will appear in the workflow run and repository Pages settings.

## Important content notes

This is a **demonstration concept**, not an approved company website. It uses publicly available company and regulatory references. Historical CDSCO entries are dated and are not represented as proof of current certificates, licences, product availability or approvals. The product and dosage-form details, contact information, address, and all claims should be reviewed and approved by Macsur Pharmaa before any commercial launch.

The enquiry form opens the visitor's email application using `mailto:`; it does not store or submit data to a server.

## Customisation

Edit `index.html` directly in GitHub's web editor. Save changes to `main` and GitHub Actions will redeploy the site automatically once Pages is configured.


## 21st.dev CLI

This project is prepared to use the 21st.dev component catalog and CLI.

### Local sign-in (one time)

Install Node.js/npm if they are not already available, then run:

```bash
npm i -g @21st-dev/cli
21st login
21st whoami
```

The login opens a browser and stores the session on your local machine. Do not commit the local authentication file or paste an API key into repository files.

Useful project commands:

```bash
21st search "pharma manufacturing website hero"
21st search "healthcare quality assurance section"
21st review index.html
```

### GitHub Actions (headless)

The manual workflow at `.github/workflows/21st-catalog.yml` runs a catalog search without interactive login.

1. Open **Settings → Secrets and variables → Actions**.
2. Select **New repository secret**.
3. Name it `API_KEY_21ST` and paste your 21st.dev API key as the value.
4. Open **Actions → 21st.dev catalog search → Run workflow** and enter a component/pattern query.

The workflow passes the secret through the `API_KEY_21ST` environment variable and never writes it into the repository. Generate/manage the key at https://21st.dev/settings/api-keys.

**Usage note:** 21st.dev search is free; retrieving/installing component code has a free daily quota (currently 2 per day on the free account). Hosted AI generation is separate and consumes AI credits.
