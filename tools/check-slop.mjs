#!/usr/bin/env node
/*
  Enforces the twenty design exclusions from the brief against the built site
  (dist/) and the source (src/). Exits non-zero on any hit, so it can gate a
  deploy. Run after `npm run build`:  node tools/check-slop.mjs

  Items that cannot be decided by pattern matching (7 contrast, 8 layout,
  9 badge above headline) are covered by partial checks here and by the
  manual review listed in README.md.
*/

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const src = join(root, 'src');

async function walk(dir, exts) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, exts)));
    else if (exts.includes(extname(e.name))) out.push(p);
  }
  return out;
}

const read = async (files) => Promise.all(files.map(async (f) => ({ file: f, text: await readFile(f, 'utf8') })));

/* Font files and third-party CSS shipped under _astro are excluded where a
   rule is about authored CSS, since Fontsource declares unicode ranges and
   font names that are not design choices. */
const isFontCss = (text) => /@font-face/.test(text) && !/\{[^}]*(color|margin|padding|display)\s*:/.test(text.replace(/@font-face\s*\{[^}]*\}/g, ''));

const failures = [];
const passes = [];

function report(item, name, hits) {
  if (hits.length === 0) {
    passes.push(`  ok   ${String(item).padStart(2)}  ${name}`);
  } else {
    failures.push(`  FAIL ${String(item).padStart(2)}  ${name}`);
    for (const h of hits.slice(0, 12)) failures.push(`          ${h}`);
    if (hits.length > 12) failures.push(`          ... and ${hits.length - 12} more`);
  }
}

function grep(files, pattern, { skip } = {}) {
  const hits = [];
  for (const { file, text } of files) {
    if (skip && skip(file, text)) continue;
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        hits.push(`${relative(root, file)}:${i + 1}  ${line.trim().slice(0, 110)}`);
      }
    });
  }
  return hits;
}

async function main() {
  try {
    await stat(dist);
  } catch {
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(2);
  }

  const builtHtml = await read(await walk(dist, ['.html']));
  const builtCss = await read(await walk(dist, ['.css']));
  const builtJs = await read(await walk(dist, ['.js']));
  const srcAll = await read(await walk(src, ['.astro', '.ts', '.css', '.mjs', '.js']));
  const srcStyles = srcAll.filter((f) => /\.(astro|css)$/.test(f.file));
  const copyFiles = srcAll.filter((f) => /i18n\/(en|am)\.ts$/.test(f.file));
  const authoredCss = [...builtCss.filter((f) => !isFontCss(f.text)), ...builtHtml];
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
  const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });

  report(1, 'No gradients', grep([...authoredCss, ...srcStyles], /(linear|radial|conic)-gradient|bg-gradient/i));
  report(2, 'No gradient text', grep([...authoredCss, ...srcStyles], /background-clip\s*:\s*text|text-fill-color\s*:\s*transparent/i));
  report(
    3,
    'No emoji anywhere',
    grep([...builtHtml, ...srcAll], /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F2FF}\u{FE0F}]/u),
  );
  report(4, 'No Inter font', grep([...authoredCss, ...srcAll, ...builtHtml], /["'\s,:]Inter["'\s,;]|fontsource\/inter/));
  report(
    5,
    'No accent-coloured borders',
    grep([...authoredCss, ...srcStyles], /border(-(top|right|bottom|left|inline|block)(-start|-end)?)?(-color)?\s*:[^;]*(--c-accent|--c-link\b|#c8761b|#7a4208|#e2a355)/i),
  );
  report(6, 'No glassmorphism', grep([...authoredCss, ...srcStyles], /backdrop-filter|-webkit-backdrop-filter/i));
  report(
    7,
    'Dark bands use the audited navy tokens only',
    grep(srcStyles, /background(-color)?\s*:\s*(#(0|1|2)[0-9a-f]{5}\b|rgb\(\s*[0-4]?\d\s*,)/i, {
      skip: (f) => f.endsWith('tokens.css'),
    }),
  );
  report(8, 'No three-up icon grid', grep([...builtHtml], /class="[^"]*(icon-box|feature-card|icon-grid)/i));
  report(9, 'No badge or eyebrow pill', grep([...builtHtml, ...srcStyles], /class="[^"]*\b(badge|eyebrow|pill|chip)\b/i));
  report(
    10,
    'No icon library',
    [
      ...deps.filter((d) => /lucide|heroicons|feather|fontawesome|phosphor|tabler|iconify|react-icons/i.test(d)).map((d) => `package.json  ${d}`),
      ...grep([...builtHtml, ...builtJs, ...srcAll], /lucide|data-feather|fa-solid|iconify/i),
    ],
  );
  report(
    11,
    'No UI kit',
    deps.filter((d) => /shadcn|radix|@headlessui|daisyui|flowbite|bootstrap|tailwind|@mui|chakra/i.test(d)).map((d) => `package.json  ${d}`),
  );
  report(
    12,
    'No scroll-triggered reveals',
    grep([...builtJs, ...srcAll, ...builtHtml], /IntersectionObserver|data-aos|\baos\b|animate-|@keyframes\s+fade|scroll-timeline|animation-timeline/i),
  );
  report(13, 'No cursor-following effects', grep([...builtJs, ...srcAll, ...builtHtml], /mousemove|pointermove|clientX|clientY/));
  report(
    14,
    'No opacity transitions on controls',
    grep([...authoredCss, ...srcStyles], /transition[^;]*\b(opacity|all)\b|:hover[^{]*\{[^}]*opacity/i),
  );
  report(
    15,
    'No raw pixel values outside tokens.css',
    grep(srcStyles, /(?<![\w-])-?\d*\.?\d+px\b/, { skip: (f) => f.endsWith('tokens.css') })
      // Print styles are for paper, not screen rhythm.
      .filter((h) => !/print|1px solid #999/.test(h)),
  );
  report(16, 'No em dashes in content', grep([...copyFiles, ...builtHtml], /—/));

  const banned = [
    'leverage', 'synergy', 'synergies', 'cutting edge', 'cutting-edge', 'seamless', 'seamlessly', 'robust',
    'holistic', 'empower', 'empowering', 'revolutionize', 'revolutionise', 'revolutionary',
    'next generation', 'next-generation', 'transform your business', 'unlock', 'journey', 'ecosystem',
    'best in class', 'best-in-class', 'world class', 'world-class', 'state of the art', 'state-of-the-art',
    'innovative solutions', 'game changing', 'game-changing', 'disruptive', 'bleeding edge', 'bleeding-edge',
    'turnkey', 'paradigm', 'elevate', 'supercharge', 'digital transformation',
  ];
  const bannedRe = new RegExp(`\\b(${banned.map((w) => w.replace(/[-\s]/g, '[-\\s]')).join('|')})\\b`, 'i');
  report(17, 'No buzzword copy', grep([...copyFiles, ...builtHtml], bannedRe));

  report(
    18,
    'No serif or decorative italics',
    grep([...authoredCss, ...srcStyles], /font-style\s*:\s*italic|font-family\s*:[^;]*\bserif\b(?![-\w])(?<!sans-serif)/i),
  );
  report(19, 'No Space Grotesk or Instrument Serif', grep([...authoredCss, ...srcAll, ...builtHtml], /space[\s-]?grotesk|instrument[\s-]?serif/i));
  report(20, 'No grain or noise texture', grep([...authoredCss, ...srcAll, ...builtHtml], /feTurbulence|\bnoise\b|\bgrain\b|film-grain/i));

  const extra = [];
  const todoInVisibleText = grep(builtHtml, />[^<]*\bTODO\b[^<]*</);
  if (todoInVisibleText.length) extra.push(...todoInVisibleText);
  report('+', 'No placeholder text visible to visitors', extra);

  console.log(`check-slop: ${builtHtml.length} HTML, ${builtCss.length} CSS, ${builtJs.length} JS built files; ${srcAll.length} source files\n`);
  console.log(passes.join('\n'));
  if (failures.length) {
    console.log('\n' + failures.join('\n'));
    console.log(`\n${failures.filter((l) => l.startsWith('  FAIL')).length} check(s) failed.`);
    process.exit(1);
  }
  console.log('\nAll checks passed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
