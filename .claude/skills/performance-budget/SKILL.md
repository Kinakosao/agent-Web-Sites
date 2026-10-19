---
name: performance-budget
description: Budget de performance et seuils Lighthouse (Core Web Vitals, poids de page). À utiliser pour toute revue de performance d'une page livrée.
---
# Budget
- Poids total de page (HTML+CSS+JS+images) : < 1,5 Mo sur la page d'accueil,
  < 1 Mo sur les pages secondaires.
- Une seule police web, 2 graisses maximum, chargée en `font-display: swap`,
  hébergée localement dans SITE/assets/fonts/ (jamais fonts.googleapis.com,
  voir skill legal-checklist-fr).
- Pas de JavaScript bloquant le rendu (scripts en `defer`).

# Seuils Lighthouse (mobile)
- Performance : ≥ 85
- Accessibilité : ≥ 90
- Bonnes pratiques : ≥ 90
- SEO : ≥ 90

# Méthode
- Utilise scripts/lighthouse-check.sh SITE pour obtenir les 4 scores et la
  liste des audits en échec.
- Un score sous le seuil → BLOQUANT si performance/accessibilité, À
  AMÉLIORER sinon (voir skill review-report-format).
