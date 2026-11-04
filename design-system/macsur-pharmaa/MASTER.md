# Macsur Pharmaa — Design System

**Project:** Macsur Pharmaa (India) Private Limited — public-facing pharmaceutical manufacturing company website  
**Platform:** Static HTML, CSS and vanilla JavaScript; GitHub Pages  
**Audience:** Pharmaceutical business partners, distributors, procurement teams and prospective customers  
**Primary goal:** Establish credibility and make company enquiries easy.

## Design-system basis

Use the open-source UI/UX Pro Max design-intelligence approach: product-type matching, style selection, typography and color decisions, responsive implementation, accessibility and pre-delivery checks.

For this company, combine the repository's **B2B Service** and **Biotech / Life Sciences** product profiles, with **Accessible & Ethical** and **Minimalism & Swiss Style** as the dominant design direction. Use restrained **Organic / Biophilic** cues only as supporting detail.

Do not use a pharmacy-store/e-commerce pattern. This is a pharmaceutical manufacturer corporate site, not a consumer medicine shop.

## Visual direction

- Calm, precise, clinical and established.
- Premium corporate presentation inspired by leading pharmaceutical companies, without copying their logos, layouts or brand assets.
- White and very light cool-neutral surfaces; deep scientific blue/navy for authority; restrained teal/health-green accents.
- Generous whitespace, strong typographic hierarchy, crisp grid, restrained borders and subtle depth.
- Realistic pharmaceutical manufacturing, laboratory and quality-control photography; avoid generic doctor/patient stock imagery as the dominant visual.
- Motion is supportive, not decorative: short transitions and a small number of scroll reveals only.

## Color tokens

| Token | Value | Use |
|---|---|---|
| Deep navy | #092B3A | Hero, footer, high-authority surfaces |
| Scientific blue | #145B78 | Links, secondary headings, information accents |
| Teal | #078B86 | Primary CTA and interactive accent |
| Health mint | #DFF4EE | Soft supporting surfaces |
| Paper | #F7FAF8 | Main page background |
| White | #FFFFFF | Content surfaces |
| Ink | #102D38 | Primary text |
| Muted | #637780 | Secondary text |
| Border | #DCE8E5 | Dividers and card edges |
| Gold | #D7B76B | Rare, non-certification highlight only |

Do not use color alone to convey meaning. Verify text contrast for every foreground/background pair.

## Typography

- Headings: Manrope, weight 600–800.
- Body and UI: DM Sans, weight 400–700.
- Body text should remain comfortably readable on mobile; avoid tiny captions for important content.
- Use fluid heading sizes and a consistent line-height system.

## Layout and components

- Mobile-first responsive layout; content container approximately 1120–1200px on desktop.
- Sticky navigation must not obscure anchor targets.
- Hero: concise company positioning, manufacturing context, one primary enquiry CTA and one secondary discovery CTA.
- Company section: factual company profile and address.
- Capabilities: dosage-form categories only where public records support them; label historical records and avoid claiming current production availability without confirmation.
- Quality/regulatory: evidence-led explanation with dates and direct source links; never imply historical listings prove current certification.
- Contact: visible address/email and a clearly labelled enquiry path.
- Footer: company details, navigation and demo/legal disclaimer.
- Cards should be used sparingly; prioritize editorial sections and a clear information hierarchy.

## UX and accessibility requirements

- Semantic HTML landmarks and a logical heading order.
- Keyboard-accessible navigation, visible focus styles and labelled form controls.
- Touch targets sized for comfortable mobile use (aim for at least 44–48 CSS px where practical).
- Minimum WCAG AA text contrast; aim higher for small text where possible.
- Meaningful alt text for informative images; decorative images must not create redundant screen-reader output.
- Respect reduced-motion preferences.
- Do not rely on hover for any essential interaction.
- Forms must explain what happens to submitted data. The current demo uses mailto and must not imply server-side storage or submission.
- Reserve media aspect ratios to prevent layout shift; ensure no horizontal overflow at narrow viewport widths.

## Content integrity and regulated-industry guardrails

- Distinguish official public records from third-party company directories.
- Attach dates and source links to historical regulatory evidence.
- Do not claim current WHO-GMP/GMP status, licences, approvals, product permissions, quality certifications, manufacturing capacity, export markets or client relationships unless current primary evidence is verified and the company approves the wording.
- Treat product listings as references, not a complete or current catalogue.
- Do not publish medical advice, efficacy claims, patient testimonials or therapeutic promises.
- Mark the current website clearly as a demonstration concept pending company approval.

## Pre-delivery checklist

- [ ] Check mobile layout at 360px, 390px and 430px widths.
- [ ] Check tablet and desktop layouts.
- [ ] Verify all navigation links, CTA links, email links and map link.
- [ ] Test keyboard navigation and visible focus.
- [ ] Check reduced-motion behavior.
- [ ] Check image loading, aspect ratios and alt text.
- [ ] Check color contrast and readable text sizes.
- [ ] Check form behavior and confirm no false backend claims.
- [ ] Verify all factual claims and source links.
- [ ] Confirm historical regulatory references are not described as current certification.
- [ ] Confirm GitHub Pages build and published page after each deployment.

## Page-specific override policy

Create pages/<page-name>.md only when a page needs a deliberate exception to this master system. The master file remains the source of truth for shared brand, typography, color, spacing, accessibility and content-integrity rules.