# AllInOne Technology

An Astro website with an ivory and forest-green design, a lazy-loaded Three.js Ethiopia scene, English and Amharic routes, and responsive layouts.

## Install and run

Use Node.js 24 (also specified in `.nvmrc`).

```sh
npm ci
npm run dev
```

Open http://localhost:4321. No database or API keys are needed to preview the site.

```sh
npm run check
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Vercel

Import this repository into Vercel. The included `vercel.json` selects Astro, runs `npm ci` and `npm run build`, and publishes `dist`. Select Node.js 24.x in the project settings. No server adapter is needed for this static site.

Set `PUBLIC_SITE_URL` to your final public URL to generate canonical links and the sitemap for that domain. It defaults to https://allinonetec.com.

Optional: set `PUBLIC_FORM_ENDPOINT` to your Formspree endpoint before building to enable contact submissions. Without it, the contact page provides the existing telephone contact instead.

## Content

- `src/data/showcase.ts`: fictional Ethiopian team profiles, masked sample phone numbers, concept projects and sample testimonials.
- `src/components/pages/HomePage.astro`: landing page and illustrative partner wordmarks.
- `src/styles/refresh.css`: updated responsive visual design.
- `src/scenes/ethiopia.ts`: animated Three.js map, with a static SVG fallback.
- `/projects/`, `/team/`, `/testimonials/`: new pages, also available under `/am/`.

Sample companies, testimonials and profiles are explicitly labelled and should be replaced with approved real content before public launch. New showcase copy is currently English on both locale routes; existing Amharic content is retained. Team telephone examples are deliberately masked and are not clickable contacts. The existing main business number is retained.

The partner slider has a pause control; the control also pauses the map and floating details. Reduced-motion users receive a static presentation. The Three.js scene is lazy-loaded on suitable desktop devices, with an SVG fallback on other devices.

`npm run check:slop` is a legacy audit for the previous visual brief. Its prohibitions on cards, rounded corners, gradients and other requested design changes are superseded by this redesign; it is not a deployment gate. Use the template check and production build above for validation.

## Attribution

Country outline derived from [mledoze/countries](https://github.com/mledoze/countries), under the [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/).
