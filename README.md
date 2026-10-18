# Agence

Système multi-agents de création de sites web.

## Structure

- `.claude/` — agents et skills communs à tous les sites (`agents/`, `skills/`), configuration (`settings.json`).
- `scripts/` — scripts utilitaires partagés.
- `_template/` — modèle de départ copié pour chaque nouveau site dans `sites/<nom-du-site>/`.
- `sites/` — un dossier par site créé, chacun avec son propre `workspace/` (brief, tâches, design system, registre d'assets, reviews) et ses propres `assets/`, `css/`, `js/`, `index.html`.
