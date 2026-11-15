# Hamage Software — GitHub Pages site

A static, dependency-free, responsive website for Hamage Software with a NOVA Capsule preview, Turkish/English toggle, contact and support links.

## Files

- `index.html`: Home, NOVA Capsule overview, support/contact.
- `privacy.html`: **PRELIMINARY DISCLOSURE, NOT a final privacy policy.** Do not submit it to Microsoft Store without checking the NOVA application source code and replacing the draft.
- `styles.css`, `main.js`: Design and language switching; no CDN or build needed.
- `assets/`: Hamage artwork and NOVA UI screenshots from the project owner's conversation.

## Publish to the existing site

The existing repository is `https://github.com/HMahmut/hamage-software`, with Pages configured to publish from the `main` branch root.

Option A — Git command line:

```sh
git clone https://github.com/HMahmut/hamage-software.git
cd hamage-software
# Copy the *contents* of this package into this directory, replacing index.html.
git add .
git commit -m "Build Hamage Software website"
git push origin main
```

Option B — GitHub web UI: upload `index.html`, `privacy.html`, `styles.css`, `main.js`, `.nojekyll` and the whole `assets/` directory to the root of the repository with **Add file → Upload files**. Confirm `Commit changes` on `main`. Verify that `assets/` kept its subfolder structure.

Published URLs, after deployment:
- https://hmahmut.github.io/hamage-software/
- https://hmahmut.github.io/hamage-software/privacy.html (**draft only**)

## Before store submission

Read `PRIVACY_REVIEW.md`, complete a real source-code audit, update `privacy.html`, remove its `noindex` tag if appropriate, update the link label, and validate all public statements. Store name, release date and a Store URL were deliberately not fabricated.

## Practical checks

Check responsive layout, keyboard nav, reduced-motion accessibility, language persistence, alt text and all links. Site pages use **relative paths** so they work under the `hamage-software/` project-path URL.
