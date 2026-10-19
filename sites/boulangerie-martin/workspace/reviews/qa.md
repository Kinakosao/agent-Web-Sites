# Revue QA — 2026-10-19

Verdict : VALIDÉ

Périmètre de la revérification ciblée : points À AMÉLIORER de la revue précédente (horaires mobile, `width`/`height` sur `<source>`, `og:image:alt` et `twitter:card`, `_originaux`), plus relance de check-links.js et lighthouse-check.sh pour détecter une régression.

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| À AMÉLIORER | workspace/ | Dossier workspace/ présent dans SITE/ ; il ne doit pas être déployé (non corrigé, point de déploiement uniquement). | Ne déployer que les livrables hors workspace/. |

## Corrections vérifiées
- Horaires mobile : `white-space: nowrap` présent sur `.hours-table td` (css/main.css l.336). Non re-mesuré visuellement à 390px ; Lighthouse ne signale aucun débordement.
- `width`/`height` retirés des `<source>` : index.html l.40 et l.61 ne portent plus que `media` et `srcset`. Corrigé.
- `og:image:alt` et `twitter:card` (`summary_large_image`) présents sur index.html (l.15-16) et mentions-legales.html (l.15-16). Corrigé.
- `assets/images/_originaux/` absent. Corrigé. Le dossier `assets/images/` ne contient plus que hero.webp, hero-mobile.webp, atelier.webp, atelier-mobile.webp et .gitkeep.

## Résultats
- Liens : check-links.js, 2 pages analysées. 2 signalements, tous deux sur `https://boulangerie-martin.example/` (index.html et mentions-legales.html). Ce sont des URL absolues fictives, exclues comme convenu. Aucun lien interne, tel: ou mailto: cassé. Code de sortie 1 à cause de ces deux URL exclues. Aucune régression.
- Lighthouse mobile (lighthouse-check.sh) : Performance 99, Accessibilité 100, Bonnes pratiques 100, SEO 100. Tous au-dessus des seuils (85 / 90 / 90 / 90). Aucun audit en échec. Aucune régression par rapport à la revue précédente.
- Captures desktop/mobile et navigation clavier : non relancées (hors périmètre de cette revérification).
