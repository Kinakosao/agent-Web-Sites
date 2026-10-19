---
name: seo-basics
description: Règles SEO de base (balises meta, Open Graph, sitemap, robots.txt, hiérarchie de titres). À utiliser pour toute tâche de structuration ou de mise en page de page web.
---
# Balises par page
- `<title>` unique et descriptif (50-60 caractères), `<meta name="description">`
  (120-155 caractères), différents sur chaque page.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  (déjà dans le template).
- `<html lang="fr">` sur toutes les pages.

# Open Graph / partage social
- `og:title`, `og:description`, `og:image` (URL absolue, ex.
  https://domaine.fr/assets/images/hero.webp — jamais un chemin relatif,
  voir le domaine dans SITE/workspace/brief.md), `og:type`.

# Structure
- Un seul `<h1>` par page, hiérarchie de titres sans saut de niveau (voir
  skill html-css-standards).
- URLs de pages en kebab-case, cohérentes avec les noms de fichiers.
- Liens internes avec un texte explicite (pas de « cliquez ici »).

# Fichiers globaux (une fois par site)
- `sitemap.xml` à la racine du site : liste toutes les pages en URL
  absolues (domaine depuis SITE/workspace/brief.md).
- `robots.txt` à la racine : autorise l'indexation sauf dossiers techniques.
