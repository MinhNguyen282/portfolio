# Schema Markup Audit — https://www.nhhminh.dev
**Audit date:** 2026-03-14
**Auditor:** Schema.org Markup Specialist (Claude Sonnet 4.6)
**Site type:** Personal developer portfolio + blog (React SPA / Strapi CMS)
**Canonical origin:** `https://www.nhhminh.dev`

---

## 1. Detection Results

The site is a client-side React SPA. The static HTML shell (`index.html`) contains **no schema markup at all**. All JSON-LD is injected at runtime by `react-helmet-async` after JavaScript executes. Two schema blocks were found inside the compiled JS bundles:

| Location | File | @type |
|---|---|---|
| SEO component (`src/components/SEO.js`) | `main.b2313b71.js` | `Person` |
| BlogPost component (`src/components/blog/BlogPost.js`) | `950.2ba342e0.chunk.js` | `BlogPosting` |

No schema exists on: the blog listing page (`/blog`), any inner page (`/projects`, `/skills`, `/experience`, `/awards`, `/contact`), or at the `<html>`-shell level (meaning crawlers that do not execute JavaScript will see **zero** structured data).

---

## 2. Validation Results

### Block 1 — Person (SEO.js, rendered on every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nguyễn Hữu Hoàng Minh",
  "jobTitle": "Software Engineer",
  "description": "<page description prop>",
  "url": "<window.location.href resolved to absolute>",
  "image": "https://nhhminh.dev/avatar.jpg",
  "email": "nhhminh.2004.work@gmail.com",
  "sameAs": [
    "https://github.com/MinhNguyen282",
    "https://linkedin.com/in/minhnguyenapcs22"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Ho Chi Minh City University of Science (VNU-HCM)"
  },
  "knowsAbout": ["Spring Boot", "Node.js", "ReactJS", "Java", ...]
}
```

| Check | Status | Detail |
|---|---|---|
| `@context` is `https://schema.org` | PASS | Correct |
| `@type` is valid | PASS | `Person` is a supported type |
| `name` present | PASS | Full Vietnamese name |
| `url` is absolute | PASS | Runtime resolution guard is in place (`url.startsWith('http')`) |
| `image` is absolute | PASS | Same guard applied |
| `sameAs` URLs | WARN | LinkedIn URL uses `https://linkedin.com` (missing `www.`). Google's validator prefers `https://www.linkedin.com` |
| `alumniOf` @type | WARN | Source code uses `CollegeOrUniversity` (correct subtype), but the compiled bundle emits plain `Organization`. The minifier appears to have dropped the subtype. Verify the build output. |
| `email` exposed in schema | NOTE | Valid, but search engines may surface this publicly |
| `Person` on every route | WARN | Rendering a `Person` block on `/blog/some-post` creates duplicate/conflicting structured data alongside the `BlogPosting` block on that page |
| `@id` missing | WARN | Without an `@id` the Person entity cannot be referenced by other blocks (e.g., `BlogPosting.author`) |

**Overall: MOSTLY VALID with three actionable warnings.**

---

### Block 2 — BlogPosting (BlogPost.js, rendered on `/blog/:slug`)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "<article.title>",
  "description": "<article.excerpt>",
  "image": "<coverUrl | null>",
  "datePublished": "<article.publishedAt>",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Hữu Hoàng Minh"
  },
  "publisher": {
    "@type": "Person",
    "name": "Nguyễn Hữu Hoàng Minh"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nhhminh.dev/blog/<slug>"
  }
}
```

| Check | Status | Detail |
|---|---|---|
| `@context` is `https://schema.org` | PASS | Correct |
| `@type` is valid and not deprecated | PASS | `BlogPosting` is fully supported |
| `headline` present | PASS | Maps to `article.title` |
| `description` present | PASS | Maps to `article.excerpt` |
| `datePublished` present | PASS | Maps to Strapi `publishedAt` field |
| `image` may be null | FAIL | When no cover image is uploaded, `coverUrl` is `null`. Google requires `image` for Article rich results. Fallback is applied in the `<SEO>` OG tag but not in the JSON-LD |
| `author` has `@id` | FAIL | Author `Person` node has no `@id`, so it cannot be resolved to the globally-declared `Person` entity |
| `publisher` is `Person` type | FAIL | Google's Article schema spec requires `publisher` to be an `Organization`. Using `Person` here will cause a validation error in Google Search Console |
| `mainEntityOfPage` URL domain | FAIL | Uses `https://nhhminh.dev` (no `www`). The canonical domain is `https://www.nhhminh.dev`. These must match |
| `dateModified` missing | WARN | Strongly recommended for Article/BlogPosting. Strapi provides an `updatedAt` field that can be used |
| `url` (absolute, canonical) missing | WARN | The `url` property on `BlogPosting` itself is absent |
| `keywords` missing | WARN | Available from `article.tags` but not included in schema |
| `wordCount` missing | INFO | Strapi content length can be used; improves rich result eligibility |
| `timeRequired` (reading time) missing | INFO | `readingTime` is already calculated in the component but not added to schema |

**Overall: 4 FAILURES, 3 WARNINGS — this block will not pass Google's Rich Results Test as-is.**

---

## 3. Missing Schema Opportunities

| Schema Type | Location | Priority | Impact |
|---|---|---|---|
| `WebSite` with `SearchAction` | `App.js` (global, inject once) | HIGH | Enables Sitelinks Search Box in Google SERP |
| `BreadcrumbList` | Blog post pages (`/blog/:slug`) | HIGH | Enables breadcrumb trail in search results |
| `Person` with `@id` (standalone, deduplicated) | `App.js` homepage only | HIGH | Powers Knowledge Panel; enables author linking |
| `ItemList` (blog listing) | `/blog` page | MEDIUM | Signals content inventory to crawlers |
| `WebPage` (per route) | Each route | MEDIUM | Helps Google understand page hierarchy |

**Not recommended (deprecated/restricted):**
- `HowTo` — rich results removed September 2023
- `FAQ` — restricted to government/healthcare sites since August 2023
- `SpecialAnnouncement` — deprecated July 31, 2025

---

## 4. Ready-to-Use JSON-LD Snippets

### Snippet A — WebSite with SearchAction
**Where to add:** `App.js`, injected once globally via `<Helmet>`, alongside or replacing the current global `<SEO />` call.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.nhhminh.dev/#website",
  "name": "Nguyen Huu Hoang Minh — Portfolio",
  "url": "https://www.nhhminh.dev",
  "description": "Personal portfolio and blog of Nguyễn Hữu Hoàng Minh, a Software Engineer specialising in Spring Boot, Node.js, and ReactJS.",
  "author": {
    "@id": "https://www.nhhminh.dev/#person"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.nhhminh.dev/blog?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### Snippet B — Person (deduplicated, with @id)
**Where to add:** Replace the existing `Person` block inside `src/components/SEO.js`. Render this block **only when `type === "website"`** (i.e., on the homepage) to avoid duplicating it on blog post pages.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.nhhminh.dev/#person",
  "name": "Nguyễn Hữu Hoàng Minh",
  "givenName": "Minh",
  "familyName": "Nguyễn Hữu Hoàng",
  "jobTitle": "Software Engineer",
  "description": "Back-end developer with a B.S. in Computer Science from Ho Chi Minh City University of Science. Specialises in Spring Boot, Node.js, and ReactJS.",
  "url": "https://www.nhhminh.dev",
  "image": {
    "@type": "ImageObject",
    "@id": "https://www.nhhminh.dev/#personimage",
    "url": "https://www.nhhminh.dev/avatar.jpg",
    "contentUrl": "https://www.nhhminh.dev/avatar.jpg",
    "caption": "Nguyễn Hữu Hoàng Minh"
  },
  "email": "nhhminh.2004.work@gmail.com",
  "sameAs": [
    "https://github.com/MinhNguyen282",
    "https://www.linkedin.com/in/minhnguyenapcs22"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Ho Chi Minh City University of Science",
    "alternateName": "VNU-HCM HCMUS",
    "url": "https://www.hcmus.edu.vn"
  },
  "knowsAbout": [
    "Spring Boot",
    "Node.js",
    "ReactJS",
    "Java",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "Web Development",
    "Backend Development"
  ]
}
```

---

### Snippet C — BlogPosting (corrected and enriched)
**Where to add:** Replace the existing `BlogPosting` block in `src/components/blog/BlogPost.js`.

Key fixes: `publisher` changed to `Organization`, `@id` added to author, domain corrected to `www.nhhminh.dev`, `image` fallback added, `dateModified` / `url` / `keywords` / `wordCount` added.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://www.nhhminh.dev/blog/{article.slug}#article",
  "headline": "{article.title}",
  "description": "{article.excerpt}",
  "image": {
    "@type": "ImageObject",
    "url": "{coverUrl || 'https://www.nhhminh.dev/avatar.jpg'}",
    "contentUrl": "{coverUrl || 'https://www.nhhminh.dev/avatar.jpg'}"
  },
  "url": "https://www.nhhminh.dev/blog/{article.slug}",
  "datePublished": "{article.publishedAt}",
  "dateModified": "{article.updatedAt || article.publishedAt}",
  "keywords": "{article.tags.map(t => t.name).join(', ')}",
  "wordCount": "{wordCount calculated from article.content}",
  "timeRequired": "PT{readingTime}M",
  "inLanguage": "en",
  "author": {
    "@type": "Person",
    "@id": "https://www.nhhminh.dev/#person",
    "name": "Nguyễn Hữu Hoàng Minh",
    "url": "https://www.nhhminh.dev"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.nhhminh.dev/#website",
    "name": "NHHMinh Portfolio",
    "url": "https://www.nhhminh.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nhhminh.dev/logo192.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.nhhminh.dev/blog/{article.slug}"
  },
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://www.nhhminh.dev/blog#blog",
    "name": "Minh's Blog",
    "url": "https://www.nhhminh.dev/blog"
  }
}
```

---

### Snippet D — BreadcrumbList for Blog Posts
**Where to add:** Add to `src/components/blog/BlogPost.js` alongside the `BlogPosting` block (both inside the same `<Helmet>` tag as separate `<script>` elements).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.nhhminh.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.nhhminh.dev/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{article.title}",
      "item": "https://www.nhhminh.dev/blog/{article.slug}"
    }
  ]
}
```

---

### Snippet E — ItemList for the Blog Index Page
**Where to add:** `src/components/blog/BlogList.js`, injected inside a `<Helmet>` block after articles are loaded (i.e., inside `!loading && !error && articles.length > 0` guard).

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Minh's Blog Posts",
  "url": "https://www.nhhminh.dev/blog",
  "numberOfItems": "{articles.length}",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://www.nhhminh.dev/blog/{articles[0].slug}",
      "name": "{articles[0].title}"
    }
  ]
}
```

The `itemListElement` array should be generated dynamically by mapping over the `articles` array:

```javascript
itemListElement: articles.map((article, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  url: `https://www.nhhminh.dev/blog/${article.slug}`,
  name: article.title,
}))
```

---

## 5. Implementation Priority Order

1. **Fix `BlogPosting` publisher type** — this is a hard validation failure that will show up as an error in Google Search Console. Change `@type` from `Person` to `Organization`.

2. **Fix `mainEntityOfPage` domain** — change `https://nhhminh.dev` to `https://www.nhhminh.dev` in `BlogPost.js` line 109. The `siteUrl` variable already uses `window.location.origin` at runtime, so replace `siteUrl` with the hardcoded canonical: `const canonicalBase = 'https://www.nhhminh.dev'`.

3. **Add image fallback to `BlogPosting`** — change `image: coverUrl` to `image: coverUrl || 'https://www.nhhminh.dev/avatar.jpg'`. Without a non-null image, the Article rich result is ineligible.

4. **Add `WebSite` + `SearchAction`** — one-time addition to `App.js`. Highest SERP-visibility uplift for a single block.

5. **Add `@id` to Person** — enables entity disambiguation and powers the author link in BlogPosting.

6. **Add `BreadcrumbList` to blog posts** — enables breadcrumb trail display in Google results.

7. **Add `dateModified` to BlogPosting** — use Strapi `updatedAt` field; helps Google understand content freshness.

8. **Conditionalise the `Person` block** — only render it on the homepage route, not on every page including blog posts.

9. **Add `ItemList` to blog listing page** — medium priority, improves indexing signal for the blog section.

---

## 6. robots.txt Issue (Bonus Finding)

The `robots.txt` at `https://www.nhhminh.dev/robots.txt` declares the sitemap location as:

```
Sitemap: https://nguyenhuuhoangminh.me/sitemap.xml
```

This points to a **different domain** (`nguyenhuuhoangminh.me`) rather than `https://www.nhhminh.dev/sitemap.xml`. The actual sitemap is correctly served at `https://www.nhhminh.dev/sitemap.xml`. Google Search Console may not associate the correct sitemap with this domain. Update `robots.txt` line 4 to:

```
Sitemap: https://www.nhhminh.dev/sitemap.xml
```

The sitemap itself also has no `<lastmod>` entries for blog post URLs (blog posts are not listed individually), which means new Strapi articles will only be discovered via crawl, not sitemap pings.

---

*Report generated by schema markup audit agent on 2026-03-14.*
