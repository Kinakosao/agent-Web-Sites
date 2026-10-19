#!/usr/bin/env node
// Capture toutes les pages .html d'un site en desktop et mobile pour la
// revue esthétique/QA, avec un sous-dossier par page.
// Usage : node scripts/capture-screenshots.js <dossier-site | page.html> <dossier-sortie>
//   ex. node scripts/capture-screenshots.js sites/x sites/x/workspace/reviews/screenshots
//   -> <sortie>/index/desktop.png, <sortie>/mentions-legales/mobile.png, ...
// Nécessite Playwright (npm install -D playwright && npx playwright install chromium).
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const [, , target, outDir] = process.argv;
if (!target || !outDir) {
  console.error("Usage: node capture-screenshots.js <dossier-site|page.html> <dossier-sortie>");
  process.exit(1);
}

const SKIP = new Set(["workspace", "node_modules", "dist"]);
function findPages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return SKIP.has(e.name) ? [] : findPages(full);
    return e.name.endsWith(".html") ? [full] : [];
  });
}

const root = path.resolve(target);
const isDir = fs.statSync(root).isDirectory();
const pages = isDir ? findPages(root) : [root];
if (pages.length === 0) {
  console.error(`Aucune page .html dans ${target}`);
  process.exit(1);
}

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

(async () => {
  const browser = await chromium.launch();
  for (const file of pages) {
    const rel = isDir ? path.relative(root, file) : path.basename(file);
    const pageDir = path.join(outDir, rel.replace(/\.html$/, "").replace(/[\\/]/g, "-"));
    fs.mkdirSync(pageDir, { recursive: true });
    for (const [name, viewport] of Object.entries(viewports)) {
      const page = await browser.newPage({ viewport });
      await page.goto("file://" + file, { waitUntil: "networkidle" });
      const out = path.join(pageDir, `${name}.png`);
      await page.screenshot({ path: out, fullPage: true });
      console.log(`capture : ${out}`);
      await page.close();
    }
  }
  await browser.close();
})();
