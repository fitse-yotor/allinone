# AllInOne Technology website

Static corporate site. Astro 7, hand-written scoped CSS over one token file, one Three.js hero
scene. English at `/`, Amharic at `/am/`.

## Commands

Node 24 (see `.nvmrc`).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local server at `http://localhost:4321` |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run check` | Type and template check (also catches missing Amharic strings) |
| `npm run check:slop` | Enforce the twenty design exclusions against `dist/`. Run after a build |

Set `PUBLIC_FORM_ENDPOINT` at build time to enable the contact form:

```sh
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx npm run build
```

## Deploy

`dist/` is plain static files. Any static host works (Netlify, Cloudflare Pages, S3 behind a CDN,
or nginx). Serve `dist/404.html` for missing paths. Before the first deploy, work through
`PLACEHOLDERS.md`.

## Editing copy

All visible text lives in two files with the same shape:

- `src/i18n/en.ts`, English
- `src/i18n/am.ts`, Amharic (machine drafted, needs native review before launch)

Change a string in both. If a key exists in one file and not the other, `npm run check` fails, so
the Amharic site never silently falls back to English.

Copy rules, enforced by `npm run check:slop`:

- No em dashes. Use periods, commas, colons or parentheses.
- No buzzwords. The banned list is in `tools/check-slop.mjs`.
- No claim that cannot be verified: no counts, founding year, client names, certifications or awards.

## Design system

`src/styles/tokens.css` holds every colour, type size and spacing value. Components use only those
variables. A raw pixel value anywhere else fails `check:slop`. Spacing steps are 4, 8, 12, 16, 24,
32, 48, 64, 96, 128 and 192.

## Where things are

| Path | Purpose |
|---|---|
| `src/pages/`, `src/pages/am/` | Thin route files. Each picks a locale and renders a page component |
| `src/components/pages/` | Page bodies, shared by both locales |
| `src/components/` | Header, footer, language switcher, practice section, lists, table, contact band, hero figure |
| `src/scenes/ethiopia.ts` | The Three.js hero scene, loaded lazily |
| `src/data/ethiopia-outline.json` | Simplified country outline used by the scene and its static fallback |
| `tools/simplify-outline.mjs` | Regenerates the outline from a GeoJSON source |
| `tools/check-slop.mjs` | The design exclusion check |

## Hero scene behaviour

The static drawing is always in the HTML. Three.js is fetched only after page load, and only on
screens at least 62rem wide, with WebGL, without `prefers-reduced-motion`, without Save-Data, and
with at least 4 GB device memory where the browser reports it. In every other case the drawing
stays. The scene rotates once every 40 seconds and does not respond to the pointer or to scrolling.

## Attribution

Country outline derived from [mledoze/countries](https://github.com/mledoze/countries), made
available under the [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/).
