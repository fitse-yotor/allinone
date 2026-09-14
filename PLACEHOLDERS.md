# Placeholders to fill before launch

Nothing below is shown to visitors as a stub. Each item is either omitted from the page or held in an
HTML comment until the real value is supplied. Find every marker with:

```sh
grep -rn "TODO:" src/ public/ astro.config.mjs
```

| Item | Where it lives | Format to supply | What it unlocks |
|---|---|---|---|
| Production domain | `astro.config.mjs` (`site`), `public/robots.txt`, `src/layouts/Base.astro` fallback | `https://example.com` | Correct canonical URLs, `hreflang`, sitemap |
| Email address | `src/components/Footer.astro`, `ContactBand.astro`, `pages/ContactPage.astro`, JSON-LD in `Base.astro` | A mailbox that is actually monitored. The old site's `mail@allinone.com` is not one | Email line in footer, contact band and contact page |
| Office address | `Footer.astro`, `ContactPage.astro`, JSON-LD `address` | Street, sub-city, city, and optionally a map link | Address block, one verified location marker on the hero scene |
| Calling hours | `phoneNote` in `src/i18n/en.ts` and `am.ts` | For example "Monday to Friday, 8:30 to 17:30" | A line under the phone number on the contact page |
| Social profiles | JSON-LD `sameAs` in `Base.astro` | Full URLs. The old site's `facebook.com/AllInOne` is not the company's page | Footer links, `sameAs` |
| Logo | `public/favicon.svg` (current mark is a neutral stand-in), `og:image` and JSON-LD `logo` in `Base.astro` | SVG preferred, plus a 1200 by 630 PNG for link previews | Real favicon, header mark, link preview image |
| Contact form endpoint | `PUBLIC_FORM_ENDPOINT` environment variable, read in `pages/ContactPage.astro` | Formspree form URL, `https://formspree.io/f/xxxxxxxx` | The enquiry form. Until it is set, production builds show the phone number only |
| Amharic review | `src/i18n/am.ts` (every section) | Native speaker with technical vocabulary edits the file in place | Removing the draft status. Do not launch `/am/` unreviewed |
| Client-names statement | `industries.note` in `en.ts` and `am.ts` | Confirm the company does hold this policy, or remove the sentence | Keeps the Industries page accurate |
| Supply and agency claim | `home.supply.body` in `en.ts` and `am.ts` | Confirm the company still imports and acts as manufacturer's agent (taken from the current site) | Keeps the Supply section accurate |

## Omitted entirely, by design

Founding year, employee count, project counts, client names or logos, team names or bios,
certifications, vendor partnership badges, office photographs, testimonials, awards. Sections that
would need them (Our Clients, Our Team, Partners) do not exist. Supply verified material and they
can be added.
