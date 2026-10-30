# Adding Research Work

The Research page ([research.html](../research.html)) and the app's Research Work screen both read the `research` list in [portfolio-data.js](../portfolio-data.js). To add something, add one entry to that list. You don't need to edit any HTML for the listing.

## 1. Pick the type

| `type` | Tab | Use it for |
|---|---|---|
| `"article"` | Articles | Essays, analyses and technical write-ups, whether on this site or published elsewhere |
| `"issue"` | Journal Issues | A journal issue you contributed to as author, co-author, reviewer or editor |
| `"thesis"` | Thesis | Theses and dissertations, including ones in progress |

The page sorts newest first by `date`. Write dates as `"Mon YYYY"` (e.g. `"Mar 2027"`) or just `"YYYY"`.

## 2. Copy a template

**Article published somewhere else (a link only):**

```js
{
    type: "article",
    title: "Title of the Article",
    date: "Mar 2027",
    venue: "Medium",                       // optional: where it was published
    authors: ["Efe Obukohwo"],
    abstract: "One or two sentences on what it shows.",
    tags: ["Data Quality", "SQL"],
    icon: "fa-pen-nib",                    // any Font Awesome 6 solid icon name
    links: { url: "https://..." }
},
```

**Journal issue:**

```js
{
    type: "issue",
    title: "Title of Your Paper in the Issue",
    date: "Jun 2027",
    role: "Co-author",                     // Author / Co-author / Reviewer / Editor
    authors: ["A. Researcher", "Efe Obukohwo"],
    journal: { name: "Journal of Humanitarian Data", volume: "12", issue: "3", pages: "45-67" },
    abstract: "...",
    tags: ["Humanitarian Data"],
    icon: "fa-book-open",
    links: { doi: "10.1234/jhd.2027.0123", pdf: "documents/research/my-paper.pdf" }
},
```

The card shows a citation line built from `journal`, e.g. *Journal of Humanitarian Data, 12(3), 45-67*. A bare DOI like `10.1234/...` is linked through doi.org automatically.

**Thesis:**

```js
{
    type: "thesis",
    title: "Thesis Title",
    date: "2027",
    status: "In progress",                 // or "Submitted", "Defended", "Published"
    venue: "University Name, MSc Data Science",
    abstract: "...",
    tags: ["Machine Learning"],
    icon: "fa-graduation-cap",
    links: { pdf: "documents/research/thesis.pdf" }
},
```

### All link options

`links` can hold any of the fields below. Each one shows as a button on the card.

| Key | Button |
|---|---|
| `url` | Read Online |
| `doi` | DOI |
| `pdf` | PDF |
| `code` | Code |
| `data` | Data |

Use `page: "research-something.html"` instead when the piece lives on this site. The card then shows a **Read Article** button. Only `https://`, `mailto:` and site-relative links are allowed; anything else becomes a dead link.

## 3. Hosting a full piece on the site (optional)

1. Copy [research-forensic-audit.html](../research-forensic-audit.html) to `research-your-slug.html`.
2. Replace the `<title>`, the description and keywords `<meta>` tags, the canonical URL, the hero heading/meta/tags, and everything inside `<article class="blog-post-content">`. The reusable blocks are `highlight-box`, `code-block`, `table` and `cta-section`.
3. Set `page: "research-your-slug.html"` on the entry.
4. Run `node scripts/sync-nav.js` so the navbar is current and the page highlights **Research**.
5. Add the URL to [sitemap.xml](../sitemap.xml).

PDFs go in `documents/research/`. Put only public files there, because everything in the repo is published. Private documents belong in the Document Vault.

## 4. Publish

```bash
node generate-data-json.js    # refreshes portfolio-data.json, which the app loads
git add -A && git commit -m "Add research: <title>" && git push
```

The pre-commit hook checks that nothing private is being committed. The app picks up the new entry the next time it fetches data.
