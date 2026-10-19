# Agence

Système multi-agents de création de sites web.

## Structure

- `.claude/` — agents et skills communs à tous les sites (`agents/`, `skills/`), configuration (`settings.json`).
- `scripts/` — scripts utilitaires partagés.
- `_template/` — modèle de départ copié pour chaque nouveau site dans `sites/<nom-du-site>/`.
- `sites/` — un dossier par site créé, chacun avec son propre `workspace/` (brief, tâches, design system, registre d'assets, reviews) et ses propres `assets/`, `css/`, `js/`, `index.html`.

## Automatisations

- `scripts/optimize-images.sh <dossier>` — convertit les `.jpg/.jpeg/.png`
  d'un dossier en `.webp` et déplace les originaux dans `SITE/workspace/originaux/`
  (non commité, voir `.gitignore`). Appelé par `asset-maker` lui-même,
  pas par un hook (les images arrivent par `Bash`/`curl`, pas par `Write`).
- `.claude/hooks/check-blocking-review.sh` — quand un reviewer écrit un
  rapport dont une ligne de tableau commence par `| BLOQUANT |`, signale la
  revue bloquante dans le contexte. C'est un filet de sécurité : le
  `CLAUDE.md` impose aussi à l'orchestrateur de lire lui-même le Verdict de
  chaque rapport.
- `scripts/check-links.js <dossier-site>` — vérifie les liens internes et
  externes d'un site (avec repli en GET si un serveur refuse HEAD).
- `scripts/lighthouse-check.sh <dossier-site> [page.html]` — sert le site en
  HTTP localement (Lighthouse ne lit pas `file://`) et affiche les scores
  Lighthouse (perf, a11y, bonnes pratiques, SEO).
