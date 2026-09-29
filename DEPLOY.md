# Deployment Guide — Portfolio Frontend

## Infrastructure

| Item | Value |
|------|-------|
| VPS | `160.191.50.220` (root) |
| Domain | `https://nhhminh.dev` (+ `www`) |
| Web server | Caddy (auto-HTTPS) |
| Static root | `/var/www/nhhminh.dev` |
| SSH key | `~/.ssh/id_ed25519` |

The site is **fully static** — there is no application server and no database.
All content lives in `src/data/`.

The VPS is shared with unrelated services (`ielts.nhhminh.dev`,
`survey.nhhminh.dev`), each configured in `/etc/caddy/conf.d/`. The portfolio
vhost lives in the main `/etc/caddy/Caddyfile`. Do not restart unrelated units.

---

## Deploy (one command)

```bash
./scripts/deploy.sh
```

1. `npm run build` — CRA production build into `build/`
2. `rsync build/ → root@160.191.50.220:/var/www/nhhminh.dev/` with `--delete`
3. `curl -sI https://nhhminh.dev` — smoke-check for HTTP 200

Caddy serves the filesystem directly, so a deploy needs **no reload**. Only
changes to the Caddyfile itself require `systemctl reload caddy`.

---

## Caching model

Caddy sets `Cache-Control` per asset class. This matters when editing the
Caddyfile — getting it wrong either serves stale bundles or kills caching:

| Path | Header | Why |
|------|--------|-----|
| `/static/*` | `max-age=31536000, immutable` | CRA content-hashes these filenames, so a new build is always a new URL |
| Images, fonts, PDF | `max-age=86400` | Not content-hashed — a short TTL means replacing a file actually reaches visitors |
| Everything else | `no-cache` | The SPA shell must revalidate, or a cached `index.html` keeps referencing bundles that no longer exist |

`header` runs **before** `try_files` in Caddy's directive order, so the shell
matcher is written as a negation (`not path /static/* *.webp …`). That way SPA
deep links — which are rewritten to `index.html` later — still get `no-cache`.

---

## Images

Full-resolution sources live in `assets/originals/` and are **not** served.
`public/` holds only the width variants the components reference.

```bash
python3 scripts/optimize-images.py   # regenerate all derivatives
```

Requires Pillow and ImageMagick. To add a new optimized image, drop the
original into `assets/originals/`, add it to the script, and reference the
variants via `LazyImage`'s `webpSrcSet` / `srcSet` props.

`LazyImage` accepts `priority` for above-the-fold images — it skips the
IntersectionObserver and loads eagerly at high fetch priority. The hero avatar
uses it, and is additionally preloaded from `public/index.html`. **Do not**
lazy-load the hero image; it is the LCP element.

---

## Updating portfolio content

All content lives in `src/data/`. Edit the relevant file, then redeploy.

| File | Controls |
|------|---------|
| `src/data/projects.js` | Project cards; `featured: true` shows on homepage |
| `src/data/experience.js` | Work history timeline |
| `src/data/skills.js` | Skills grouped by category |
| `src/data/awards.js` | Achievements and awards |
| `src/data/publications.js` | Papers and research |

Adding a project image: put the original in `assets/originals/`, generate
variants, then reference `image` (and optionally `imageWebpSrcSet`) in
`projects.js`.

---

## Removed: blog + Strapi backend

The blog and its Strapi CMS were decommissioned. Removed on the VPS:

- pm2 process `strapi-blog`, `/opt/strapi-blog`, Postgres DB `strapi_blog`
- the `admin.nhhminh.dev` vhost

Caddy 301-redirects `/blog` and `/blog/*` to `/` so previously indexed URLs do
not land on a blank SPA shell. **The `admin.nhhminh.dev` DNS record still
points at this VPS and should be deleted** — it currently resolves to a host
that no longer serves it.

Backups (DB dump, app archive, uploads) are on the VPS under
`/root/backups/portfolio-<date>/`.

---

## Manual steps (if the script isn't available)

```bash
npm run build
rsync -avz --delete build/ root@160.191.50.220:/var/www/nhhminh.dev/
curl -sI https://nhhminh.dev | head -3
```

---

## Troubleshooting

**Site returns 502 / connection refused**
```bash
ssh root@160.191.50.220 'systemctl status caddy'
ssh root@160.191.50.220 'journalctl -u caddy -n 50'
```

**Caddyfile changes not taking effect**
```bash
ssh root@160.191.50.220 'caddy validate --config /etc/caddy/Caddyfile'
ssh root@160.191.50.220 'systemctl reload caddy'
```

**Old files still showing after deploy**
`--delete` removes files no longer in `build/`. If stale assets persist,
confirm rsync completed and hard-refresh (`Ctrl+Shift+R`). Note that
`/static/*` is cached as `immutable` — but its filenames are content-hashed,
so a real rebuild always produces new URLs.

**Build fails**
```bash
node -v                          # 18+
rm -rf node_modules/.cache && npm run build
```
