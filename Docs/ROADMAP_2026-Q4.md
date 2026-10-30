# Portfolio Roadmap: Q4 2026

Started 2026-10-30. Each phase ends with a checkpoint: Efe reviews, then we commit on a feature branch. Nothing is pushed to `main` (which publishes to efeobus.github.io) without sign-off.

Status key: `[ ]` not started · `[~]` in progress · `[x]` done · `[?]` waiting on a decision

**Phase S status (2026-10-30):** site-wide controls done on branch `security-hardening`. Vault-specific controls (S-1 vault CSP, S-2 Trusted Types, S-4, S-5, S-6) are built in Phase 1.

Phase order: 0 → **S (security baseline)** → 1 Vault → 2 Research → 3 Projects → 4 Resumes → 5 QA. Security comes before the vault so the first sensitive files land on a hardened site.

---

## Deploy blocker (found 2026-10-30) `[x]`

GitHub Pages and every Actions workflow fail with `startup_failure`; the last successful deploy was 2026-07-31. The account appears to be on GitHub Free (the branch-protection API answers "Upgrade to GitHub Pro"), and **Pages for a private repo requires Pro**. Options for Efe:
1. Renew GitHub Pro.
2. Make the repo public. Pages already serves every file publicly; git history was checked and holds nothing sensitive.
3. Move hosting to Cloudflare Pages (free, private repo OK, adds real security headers, but the URL changes).

**Resolved 2026-10-30:** Efe made the repo public (paying for Pro is in progress); Pages started building again the same day. Because the repo is public, `Docs/` is readable on github.com even though `_config.yml` keeps it off the website. It contains no secrets. Public repos also get branch protection for free (see S-9).

## Phase 0: Decisions `[x]` (2026-10-30)

- [x] **D1 Vault model:** encrypt files in the browser format (AES-256-GCM, key derived from the password). Only encrypted files are committed.
- [x] **D2 Vault contents:** include `23110452 IMM.pdf` (ICAS credential evaluation). Include `CA09225502972-…-ETRF.pdf` (IELTS General Training TRF, 2025-09-13) under a "Language Proficiency" group. Remove duplicate transcripts at build time after Efe confirms which copy to keep.
- [x] **D3 Password:** asked for privately at build time and never written to disk or the repo. See S-6 for strength guidance.
- [x] **D4 "Issues"** means journal issues Efe contributed to.
- [x] **D5 Blog → Research migration:** approved as proposed in Phase 2.
- [x] **D6 Nav:** Claude's call, aiming for a clean, readable site (see Phase 1 step 6).
- [x] **D7 Mobile app:** update Efe Portfolio App alongside the site. The vault is excluded from the app bundle, and the app links to the web vault.
- [x] **D8 Resumes:** update the existing Developer / Data Analyst / Teacher resumes in place (site pages + `documents/` DOCX/PDF), keeping the same download behaviour. Also refresh the same-named files in OneDrive `resume/`, keeping the old versions in `resume/Archive-2026-10/` first.

---

## Phase S: Security hardening `[ ]`

### Threat model: what is realistic for this site

The site is static HTML on GitHub Pages: no server, no logins, no database, no cookies. That narrows the attack surface a lot. Honest mapping of the usual threats:

| Threat | Applies? | Why / where |
| --- | --- | --- |
| **Vault brute force** | **Yes, the main risk** | Encrypted files are public by URL. An attacker can download them and guess passwords offline at full speed. Server-side rate limiting can't stop that. Only key-derivation cost and password strength can. |
| **XSS** | Yes, moderate | Pages render data with `innerHTML` (script.js, resume pages, projects, skills). The Research section will render links Efe adds. An XSS on the vault page could read the decrypted documents. |
| **Third-party script compromise** | Yes | Google Analytics (35 pages), Font Awesome from cdnjs, Google Fonts. A compromised script runs with full page access. |
| **Clickjacking** | Low–moderate | GitHub Pages can't send `X-Frame-Options` / `frame-ancestors`. A framed vault page could trick someone into typing the password. |
| **Repo / supply chain** | Yes | GitHub account takeover, a malicious npm dependency in the generators, an unpinned Action, or accidentally committing a plaintext credential (git history is permanent). |
| **Contact form spam/abuse** | Yes | Formspree endpoint is public. |
| **CSRF** | **Not really** | CSRF needs a logged-in session (cookies) that a forged request can ride on. The site has none, and the vault uses no cookies. The only cross-site POST is the Formspree form, which Formspree protects. We'll confirm Formspree's protections and keep it that way. |
| **Server-side rate limiting / DDoS** | Handled upstream | GitHub's CDN absorbs traffic. We can't configure rate limits on Pages (see S-9 for the optional upgrade). |
| **Dormant backend** | Yes, latent | `server.js` has `express.static(__dirname)`. If it were ever deployed, it would serve `.env` and `.git/` to anyone. The contact form uses Formspree, so this server isn't in use. |

### Controls

#### S-1 Content Security Policy on every page (XSS and third-party scripts)

- [x] Move all inline `<script>` blocks into files, then drop `'unsafe-inline'` from `script-src`.
- [x] One shared CSP (`<meta http-equiv>`): `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self' https://formspree.io`, `upgrade-insecure-requests`, and only the third-party hosts actually used.
- [x] **Vault page gets the strictest CSP**: `script-src 'self'` only, no analytics, no external fonts or CDNs, `connect-src 'self'`, `img-src 'self' blob:`, `frame-src blob:`.
- [x] Add a `<meta name="referrer" content="strict-origin-when-cross-origin">` on all pages and `no-referrer` on the vault.

#### S-2 Safe rendering (XSS)

- [x] Replace data-driven `innerHTML` with `textContent` / `createElement`, or a single audited `escapeHTML()` helper where markup is needed.
- [x] URL allowlist for every link from data (Research, projects): `https:` only, never `javascript:` / `data:`. External links get `rel="noopener noreferrer"`.
- [x] Turn on Trusted Types on the vault page (`require-trusted-types-for 'script'`) so any accidental `innerHTML` write fails there instead of running.

#### S-3 Subresource Integrity and third-party trimming

- [x] Add `integrity` + `crossorigin` to the cdnjs Font Awesome stylesheet, or self-host it (preferred: fewer third parties).
- [x] Self-host fonts if they're used on key pages.
- [x] Remove the leftover `GA_MEASUREMENT_ID` placeholder snippet. Keep GA off the vault page.

#### S-4 Clickjacking

- [x] Vault page: frame-busting script that hides the page unless `window.top === window.self`.

#### S-5 Vault cryptography and handling

- [x] AES-256-GCM through Web Crypto. Each file gets a random 96-bit IV. Key from PBKDF2-SHA256 with **≥1,000,000 iterations** and a random 16-byte salt (OWASP floor is 600k; we go higher because attacks are offline). Benchmark so unlocking takes about 1 s on a phone.
- [x] Encrypted file names are random IDs, so names like `Efe BSC RESULT` don't show in URLs. Real names and labels live only inside the encrypted manifest.
- [x] A wrong password only shows "Incorrect password" (GCM tag failure). No hints, no partial info.
- [x] Key kept **in memory only**, not `sessionStorage`. That way no script or storage can read it, and a reload re-locks. Auto-lock after 10 min idle and on the Lock button. Revoke blob URLs on lock.
- [x] Previews open in an iframe from `blob:` URLs (not `sandbox`ed: Chrome won't render PDFs in sandboxed frames; the blob inherits the vault's CSP instead). Downloads use `download=` with the real file name.
- [ ] `noindex, nofollow, noarchive` on the vault and out of `sitemap.xml`. (`robots.txt` has no effect here: this is a project site under `/Efe-Obukohwo/`, and crawlers only read `/robots.txt` at the domain root.)

#### S-6 Password strength (the real defence against brute force)

- [ ] The current password combines a name-based word, a digit, and symbols. Targeted guessing lists built from a person's name hit this pattern early. Recommendation: a passphrase of **4–5 random words** (e.g. 25+ characters), which no offline attack can realistically guess. Efe decides at build time.
- [x] Rotation: every `build-vault.js` run uses a fresh salt, IVs and file IDs, so re-running it with a new password rotates everything.

#### S-7 Leak prevention (repo hygiene)

- [x] Pre-commit hook + CI check: fail if anything under `vault/` isn't `*.enc` / `manifest.enc`, and fail if any new PDF/image is added outside the allowed folders (`documents/`, `images/`).
- [x] Add [gitleaks](https://github.com/gitleaks/gitleaks) to the pre-commit hook and CI for API keys/tokens.
- [x] `.gitignore` additions: `vault-source/`, `*.plain.*`.
- [x] One-time scan of current git history for secrets/sensitive files before adding the vault.

#### S-8 Supply chain and account

- [x] Pin GitHub Actions to full commit SHAs. Keep workflow `permissions:` to the minimum.
- [x] Turn on Dependabot (npm + Actions) and add `npm audit --omit=dev` to CI.
- [-] Branch protection on `main`: **not available**. GitHub requires Pro for this on private repos. Covered instead by 2FA + pre-commit hook + CI checks.
- [x] 2FA confirmed on GitHub, Formspree, and Google (2026-10-30).
- [x] Deleted `server.js`, `.env.example` and the server-only dependencies. Upgraded puppeteer 24 → 25.16, so `npm audit --omit=dev` reports 0 vulnerabilities.

#### S-9 Contact form and rate limiting

- [x] Honeypot field (`_gotcha`) + `maxlength` on all inputs.
- [ ] **Efe (Formspree dashboard):** restrict the form to `efeobus.github.io` and turn on reCAPTCHA / spam filtering.
- [x] Client-side: validation, length caps, and a submit cooldown (cosmetic; the real limit is on Formspree's side).
- [ ] *Optional upgrade:* a custom domain behind Cloudflare (free tier) would add real HTTP security headers (`frame-ancestors`, HSTS), a WAF, bot protection, and rate limiting on the vault path. Not required. Revisit if a custom domain is wanted anyway.

#### S-10 Verification

- [ ] Check headers/CSP with Mozilla Observatory + Google CSP Evaluator.
- [x] Headless-browser run of all 35 pages under the new CSP: no blocked resources, and fonts, icons and data sections all render.
- [x] Attack tests: data-borne `<img onerror>`, injected inline `<script>`, injected inline handler, and `javascript:`/`data:`/`vbscript:` URLs are all blocked or neutralised.
- [x] Vault tests (throwaway password): wrong password rejected, unlock ~0.2 s on desktop, image + PDF decrypt and render under the vault CSP, Lock wipes the DOM, raw `.enc` unreadable, page stays blank when framed by another origin, no CSP/Trusted Types violations, no overflow at 375px. Idle auto-lock uses the same `lock()` path (not timed in tests).
- [ ] Re-run the checklist at Phase 5.

---

## Phase 1: Document Vault `[x]`

1. [x] `scripts/build-vault.js`: hidden password prompt (typed twice), AES-256-GCM, PBKDF2 1,000,000 iterations, ids bound as AAD, staging folder then swap. File list and labels in `vault-source/vault.config.json` (git-ignored).
2. [x] `vault.html` + `js/vault.js`: lock screen, cards grouped as Certificates & Degrees / Transcripts / Credential Evaluation / Language Proficiency, preview modal, download with clean file names, Lock button, 10-minute idle lock.
3. [x] S-1/S-2/S-4/S-5 applied on this page (see Phase S).
4. [x] Contents: all 10 files. No true duplicates: `Educational Transcripts.pdf` is a combined Humber + DELSU package, and `Transcript 2.pdf` is the standalone Humber transcript (same first 3 pages).
5. [ ] **Efe runs `node scripts/build-vault.js` in a terminal and types the real password.**
6. [x] Nav redesign: `scripts/sync-nav.js` writes one canonical navbar into every page (`Home · About · Experience · Skills · Projects · [Research] · Blog · Credentials ▾ · Contact`). Active state is baked in per page. Behaviour lives in `js/nav.js` (keyboard + Escape + mobile). Case-study pages had lost their Blog link; fixed.
7. [x] Fixes found along the way (all present on the live site before this work):
   - Page titles hidden under the fixed navbar on desktop (padding 120px vs ~157px nav). Fixed.
   - 8 pages scrolled sideways on phones (blog tables, a three-column diagram, the "Recommendations" title, the contact column). Fixed; 0 pages overflow at 375px.
   - Home-page banner wrapped to two lines after the last commit and covered the logo (nav offset hard-coded at 38px/65px). It's now measured live.
8. [ ] Checkpoint, then commit.

## Phase 2: Research Work `[~]` (built and tested 2026-10-30; not yet committed)

1. [x] Add a `research: []` array to `portfolio-data.js` with the schema `{ type: 'article'|'issue'|'thesis', title, date, status, venue, journal: { name, volume, issue, pages } /* issues */, authors, role /* for issues: author / co-author / reviewer / editor */, abstract, tags, links: { pdf, doi, url, code, data }, page }`.
2. [x] `research.html` has **Articles / Journal Issues / Thesis** tabs, a tag filter, and empty states. Each Journal Issues entry shows a citation line (Journal, Vol(Issue), pages, DOI).
3. [x] (Done as a documented copy-from page instead of a separate template: `research-forensic-audit.html` is the reference layout. See Docs/ADDING_RESEARCH.md.) `research-template.html` is a long-form layout for pieces hosted on the site.
4. [x] Migration (approved). The 6 articles moved to `research-*.html` with canonical links, and the old `blog-*.html` URLs are now meta-refresh stubs (noindex). `sitemap.xml` updated, and the GDHO article is written from the 2 Aug 2025 report:
   - **To Research › Articles:** Nigeria Tax Reform, Humanitarian Data, ML Accuracy, Adaptive Learning, Forensic Audit, API Security.
   - **New article:** *GDHO Data Provenance and the Reliability of Headline Sector Figures*, written up from the Desktop report.
   - **Stay in Blog:** TEKVWA Money, VwaTek Apply, TekVwarho Analysis, Nashville Housing, Online Retail SQL.
   - Old `blog-*.html` URLs become redirect stubs (meta refresh + canonical). Update `sitemap.xml`.
5. [x] `generate-data-json.js` exports `research`, and the app's `portfolio-data.seed.json` + a new Research screen pick it up (D7). Done: the app has a new **Research Work** screen under More (tabs: Articles / Journal Issues / Thesis), the seed is synced, and `npm run build` and `lint` are clean. The app change is uncommitted in its own repo.
6. [x] Write `Docs/ADDING_RESEARCH.md`: how to add an article, journal issue, or thesis yourself.
7. [ ] Checkpoint. Tests: all 44 pages pass CSP/console (favicon 404 only); 0 pages overflow at 375px; tabs, arrow keys, `#thesis` deep links, topic filter (shown only for topics shared by 2+ pieces) and the stub redirect all work. **GDHO article on hold (Efe, 2026-10-30): kept in git-ignored `drafts/` (page + data entry) until approved; not in the sitemap, data or app.**

## Phase 3: Project audit and update `[ ]`

| Project | Location | Last commit | On site? |
| --- | --- | --- | --- |
| TEKVWA Money | Desktop/TEKVWA Money | 2026-09-17 | yes, update |
| TekVwarho Analysis | Desktop/TekVwarho Analysis | 2026-09-15 (v5.109.4) | yes, update |
| TekVwarho ProAudit | Developer/TekVwarho-ProAudit | 2026-09-29 | yes, update |
| TekVwa Properties | Developer/TekVwa Properties | 2026-08-31 | yes, update |
| TekVwa Life | Desktop/Tekvwa Life | 2026-02-09 | yes, verify |
| VwaTek Apply | Desktop/VwaTek | 2026-03-12 | yes, verify |
| WonderWorld Learning Adventure | Developer/ | 2026-01-02 | yes, verify |
| Tekvwa Mortgage AI | Desktop/ | 2026-03-07 | candidate |
| NigeriaConnect | Desktop/ | 2026-01-03 | candidate |
| NaijaVote | Desktop/Nigeria Electronic Voting | 2026-07-21 | candidate (design stage) |
| VOP / VOT Trading | Desktop/ | 2026-08 | candidate |
| Lotto Analyzer | Developer/ | 2025-12-23 | candidate |
| Tekvwarho IT Solutions site | Desktop/ | 2026-08-14 | candidate |
| Efe Portfolio App | Desktop/ | 2026-07-31 | candidate |
| Juriciti | Developer/ (no git) | n/a | check: same as LegalEagleAI? |
| GigTax | Desktop/ (plans only) | n/a | likely skip |

1. [ ] Per project: read the README/CHANGELOG/docs and `git log` since ~2026-07-30. Write a fact sheet in `Docs/project-audits/<project>.md`.
2. [ ] Update `portfolio-data.js` + case-study pages. Propose new additions (4–5 at most) for Efe's approval.
3. [ ] Rules: no secrets, no non-public client names, no links to private repos, no unsupported metrics.
4. [ ] Sync the app seed data.
5. [ ] Checkpoint.

## Phase 4: Three strongest resumes `[ ]`

Facts from the credentials (Phase 1) to carry into resumes and Education: the ITS certificate was awarded **with Honours**; the DELSU B.Sc. result notification shows **Second Class Upper Division**. Neither is on the site yet.


1. [ ] Extract all ~147 resume/cover-letter files. Skip `~$` lock files, remove duplicates, and use cover letters for tone only.
2. [ ] Bullet bank: tag each bullet by role and skill, and score it on metrics, specificity, verb, and relevance.
3. [ ] Consistency report: where versions disagree (dates, titles, numbers), Efe confirms. Nothing is invented.
4. [ ] Assemble the Developer / Data Analyst / Teacher resumes (confirm OCT status for Teacher). ATS-safe, 1–2 pages, Canadian conventions.
5. [ ] Write through the existing generators so `resume-*.html`, `documents/*.docx|pdf`, and the download buttons all update together. Archive the old OneDrive copies, then refresh them.
6. [ ] Checkpoint: side-by-side review with the reason each bullet was chosen.

## Phase 5: QA and ship `[ ]`

- [ ] Favicon: every page links `/favicon.ico`, which resolves to the domain root and 404s. Add a real favicon under the project path.
- [ ] Link check, mobile nav at 375px, keyboard nav through the dropdown, Lighthouse.
- [ ] Re-run the S-10 security checklist.
- [ ] `sitemap.xml` (Research yes, Vault no).
- [ ] Final diff scan: no plaintext vault files, no password, no secrets.
- [ ] One commit per phase. Push after sign-off. Watch the CI resume regeneration.

---

## Progress log

- 2026-10-30: Roadmap written.
- 2026-10-30: Phase 0 decisions recorded. Phase S (security) added before the vault. Open item: ETRF PDF inclusion; delete `server.js` (recommended).
- 2026-10-30: server.js deletion approved; 2FA confirmed on all accounts. ETRF identified as an IELTS TRF, waiting on an include decision.
- 2026-10-30: IELTS TRF confirmed for the vault. Phase S started on branch `security-hardening`.
- 2026-10-30: Phase S site-wide work done. Bugs found and fixed along the way: (1) a duplicate contact-form handler in script.js threw on every non-contact page and showed a fake "sent" message on the contact page; (2) the old CSP's `connect-src` blocked the Formspree request, so the contact form likely couldn't send at all.
- 2026-10-30: Phase S pushed (36237f5) but not deployed (see Deploy blocker). Phase 1 built and tested with a throwaway password; waiting on Efe to build with the real password.
- 2026-10-30: Repo made public, so Pages deploys again. Phase 2 built and tested (Research page, 6 articles migrated, new GDHO article, app screen, ADDING_RESEARCH.md). Phase 1 and Phase 2 commits wait on the vault build.
- 2026-10-30: Efe built the vault with the real password (hidden prompt; never shared). Verified: 11 .enc files, EFV1 header, 1,000,000 PBKDF2 iterations, no plaintext markers, sizes match sources, wrong password rejected. Vault link enabled in the nav.
