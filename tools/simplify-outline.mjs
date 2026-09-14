#!/usr/bin/env node
/*
  One-off: turns a GeoJSON country boundary into the small committed outline
  the hero scene extrudes. Run once; the build never needs network access.

    node tools/simplify-outline.mjs <input.geo.json> [targetPoints=200]

  Output: src/data/ethiopia-outline.json with points normalised so the longer
  axis spans -1..1, north up, centred on the bounding box.
*/

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const [, , input, targetArg] = process.argv;
if (!input) {
  console.error('usage: node tools/simplify-outline.mjs <input.geo.json> [targetPoints]');
  process.exit(2);
}
const target = Number(targetArg ?? 200);

const geo = JSON.parse(await readFile(input, 'utf8'));
const geom = geo.type === 'FeatureCollection' ? geo.features[0].geometry : geo.geometry ?? geo;

// Largest outer ring, in case the source is a MultiPolygon.
const rings = geom.type === 'MultiPolygon' ? geom.coordinates.map((p) => p[0]) : [geom.coordinates[0]];
const ring = rings.reduce((a, b) => (b.length > a.length ? b : a));

// Equirectangular projection corrected for Ethiopia's mean latitude.
const meanLat = ring.reduce((s, [, lat]) => s + lat, 0) / ring.length;
const k = Math.cos((meanLat * Math.PI) / 180);
let pts = ring.map(([lon, lat]) => [lon * k, lat]);
if (pts.length > 1 && pts[0][0] === pts.at(-1)[0] && pts[0][1] === pts.at(-1)[1]) pts = pts.slice(0, -1);

function perpDist([px, py], [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy);
  if (len === 0) return Math.hypot(px - ax, py - ay);
  return Math.abs(dy * px - dx * py + bx * ay - by * ax) / len;
}

function dp(points, eps) {
  const keep = new Uint8Array(points.length);
  keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    let max = 0;
    let idx = -1;
    for (let i = s + 1; i < e; i++) {
      const d = perpDist(points[i], points[s], points[e]);
      if (d > max) { max = d; idx = i; }
    }
    if (max > eps && idx > 0) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

// Split the closed ring at its farthest point so both halves simplify well.
const far = pts.reduce((best, p, i) => (Math.hypot(p[0] - pts[0][0], p[1] - pts[0][1]) > Math.hypot(pts[best][0] - pts[0][0], pts[best][1] - pts[0][1]) ? i : best), 0);
const simplifyRing = (eps) => [...dp(pts.slice(0, far + 1), eps).slice(0, -1), ...dp([...pts.slice(far), pts[0]], eps).slice(0, -1)];

let lo = 0;
let hi = 1;
let best = pts;
for (let i = 0; i < 40; i++) {
  const mid = (lo + hi) / 2;
  const s = simplifyRing(mid);
  if (s.length > target) lo = mid;
  else { hi = mid; best = s; }
}

const xs = best.map((p) => p[0]);
const ys = best.map((p) => p[1]);
const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
const half = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) / 2;
const round = (n) => Math.round(n * 10000) / 10000;
const points = best.map(([x, y]) => [round((x - cx) / half), round((y - cy) / half)]);

const out = {
  source: 'mledoze/countries, data/eth.geo.json (https://github.com/mledoze/countries)',
  license: 'ODbL 1.0. Attribution kept in README.md.',
  note: `Simplified from ${ring.length} to ${points.length} points with Douglas-Peucker. Equirectangular, latitude corrected. North is +y.`,
  points,
};

const dest = fileURLToPath(new URL('../src/data/ethiopia-outline.json', import.meta.url));
await writeFile(dest, JSON.stringify(out) + '\n');
console.log(`${ring.length} -> ${points.length} points, written to ${dest}`);
