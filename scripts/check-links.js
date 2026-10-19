#!/usr/bin/env node
// Vérifie les liens internes (fichiers manquants) et externes (HTTP) d'un site.
// Usage : node scripts/check-links.js <dossier-site>
const fs = require("fs");
const path = require("path");

const [, , siteDir] = process.argv;
if (!siteDir) {
  console.error("Usage: node check-links.js <dossier-site>");
  process.exit(1);
}

function listHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "workspace" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listHtmlFiles(full));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function extractLinks(html) {
  const links = [];
  const re = /(?:href|src)=["']([^"'#][^"']*)["']/g;
  let m;
  while ((m = re.exec(html))) links.push(m[1]);
  return links;
}

async function checkExternal(url) {
  try {
    let res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(8000) });
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    }
    return res.ok;
  } catch {
    return false;
  }
}

(async () => {
  const files = listHtmlFiles(siteDir);
  let brokenCount = 0;

  for (const file of files) {
    const html = fs.readFileSync(file, "utf8");
    const links = extractLinks(html);
    for (const link of links) {
      if (/^https?:\/\//.test(link)) {
        const ok = await checkExternal(link);
        if (!ok) {
          brokenCount++;
          console.log(`CASSÉ (externe) : ${link}  [dans ${file}]`);
        }
      } else if (!link.startsWith("mailto:") && !link.startsWith("tel:")) {
        const target = path.resolve(path.dirname(file), link.split("?")[0].split("#")[0]);
        if (!fs.existsSync(target)) {
          brokenCount++;
          console.log(`CASSÉ (interne) : ${link}  [dans ${file}]`);
        }
      }
    }
  }

  console.log(`\n${files.length} page(s) analysée(s), ${brokenCount} lien(s) cassé(s).`);
  process.exit(brokenCount > 0 ? 1 : 0);
})();
