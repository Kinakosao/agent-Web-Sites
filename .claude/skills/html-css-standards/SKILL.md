---
name: html-css-standards
description: Conventions HTML/CSS du système (HTML sémantique, mobile-first, pas de styles inline). À utiliser pour toute tâche de mise en page ou de style.
---
# HTML
- Sémantique : header, nav, main, section, article, footer plutôt que des
  div génériques.
- Un texte alternatif (alt) sur chaque image.
- Un seul h1 par page ; hiérarchie de titres sans saut de niveau.
- `width` et `height` sur chaque `<img>` (évite les sauts de mise en page
  au chargement).
- `loading="lazy"` sur chaque image, sauf l'image principale de la page
  (hero / LCP), qui charge au contraire en priorité.
- `<picture>` pour servir la variante mobile générée par
  scripts/optimize-images.sh (`<source media="(max-width: 640px)"
  srcset="...-mobile.webp">` + `<img>` en repli).

# CSS
- Mobile-first : les règles de base ciblent le petit écran, les
  media queries élargissent.
- Pas de styles inline (attribut style) ; tout passe par SITE/css/.
- Variables CSS du design system uniquement (voir skill design-system).
- Classes en kebab-case, nommage par composant plutôt que par position.
