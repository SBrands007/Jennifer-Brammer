# JenniferBrammer.com

The official website of Jennifer Brammer. It's a static site built with [Astro](https://astro.build) and hosted on Netlify.

## Project structure

```
src/
  data/site.ts          ← ALL editable content: nav, socials, credits, press, reps, image paths
  styles/global.css     ← design tokens (colors, fonts, spacing) + shared styles
  layouts/BaseLayout    ← <head> SEO tags, JSON-LD, header/footer, scroll-reveal script
  components/           ← Header, Footer, Button, Media (photo or placeholder), PageHero,
                          SectionHeading, SocialLinks
  pages/                ← one file per page (index, about, film-television, gallery, press,
                          contact, the-brammer-society, thank-you, 404)
public/                 ← favicon, robots.txt, og-image.png, /images (approved photos go here)
scripts/check-placeholders.mjs ← pre-launch check
netlify.toml            ← build settings, www→apex redirect, cache & security headers
```

## Run and preview locally

You need **Node.js 22+** (from https://nodejs.org).

```bash
cd jennifer-brammer-site
npm install          # once
npm run dev          # live-reloading dev server → http://localhost:4321
```

To test the real production build:

```bash
npm run build        # outputs static site to dist/
npm run preview      # serves dist/ → http://localhost:4321
```

To check the site on your phone, run `npm run dev -- --host` and open the "Network" URL it prints. Your phone and computer need to be on the same Wi-Fi.

## Adding approved content

All content lives in `src/data/site.ts`:

- **Photos:** export images as WebP, around 2400px on the long edge for the hero and 1600px for the others. Put them in `public/images/`, then set `src: '/images/hero.webp'` and write a descriptive `alt`. The placeholder is replaced automatically.
- **Credits / Press:** add entries to the `credits` / `press` arrays. Use only verified items. The placeholder rows disappear once the arrays have entries.
- **Socials:** fill in `url`. Icons appear only for accounts that have a URL, and those URLs are also added to the `sameAs` structured data for Google.
- **Representation:** fill in name, company, and email.
- **Biography / Society copy:** replace the bracketed text in `src/pages/about.astro` and `src/pages/the-brammer-society.astro`.

Before launch, run:

```bash
npm run build && npm run check:placeholders
```

This lists every page that still shows placeholder content. It exits with an error until all placeholders are gone.

## Publish and connect JenniferBrammer.com (Netlify)

1. **Put the code on GitHub.** Create an empty private repository at github.com/new, then run:
   ```bash
   git remote add origin https://github.com/<your-account>/jennifer-brammer-site.git
   git push -u origin main
   ```
2. **Create the Netlify site.** Sign in at app.netlify.com, choose **Add new project → Import an existing project → GitHub**, and pick the repository. The build settings are read from `netlify.toml` (command `npm run build`, publish folder `dist`). Click **Deploy**. You'll get a URL like `something.netlify.app`. Review the site there.
3. **Turn on form notifications.** Go to **Project configuration → Forms → Form notifications** and add an email notification so contact-form submissions reach your inbox. Submissions are also listed under the **Forms** tab.
4. **Add the domain.** Go to **Domain management → Add a domain**, enter `jenniferbrammer.com`, and confirm. Netlify also adds `www.jenniferbrammer.com`.
5. **Point DNS at Netlify.** Use the exact values Netlify shows you. There are two options:
   - **Option A (simplest):** at your domain registrar (GoDaddy, Namecheap, etc.), replace the nameservers with the four `dns1–dns4.p0X.nsone.net` nameservers Netlify lists.
   - **Option B (keep DNS at your registrar):** add an `A` record for host `@` pointing to Netlify's load-balancer IP (currently `75.2.60.5`), and a `CNAME` record for host `www` pointing to `<your-site>.netlify.app`. Delete any older `A`, `AAAA`, or `CNAME` records for `@` and `www` that conflict.
6. **HTTPS.** Once DNS has propagated (minutes to 48 hours), Netlify issues a free Let's Encrypt certificate automatically. You can check it under **Domain management → HTTPS**.
7. **Set the primary domain.** Make `jenniferbrammer.com` (without www) the primary domain. This matches the canonical URLs and the www→apex redirect in `netlify.toml`.
8. **Tell Google.** In Google Search Console (search.google.com/search-console), add the domain property `jenniferbrammer.com`, verify it with the DNS TXT record it gives you, and submit `https://jenniferbrammer.com/sitemap.xml`. Use URL Inspection to inspect the homepage and request indexing. Check the Pages report for indexing issues; absence from search alone does not establish whether the site has been submitted.

After that, every `git push` to `main` redeploys the site automatically.
