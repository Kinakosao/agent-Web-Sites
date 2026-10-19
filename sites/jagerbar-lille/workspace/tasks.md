# Tâches

Statut du site : livré (placeholders client restants ; T9 en attente des photos)

| id | tâche | agent | dépend de | statut |
|----|-------|-------|-----------|--------|
| T1 | Plan + design system | architect | - | fait |
| T2 | Polices + OFL, sprite icônes, favicon, 4 SVG placeholder, carte OSM statique, image OG (assets/images/og/), registre | asset-maker | T1 | fait (tailles carte/OG à vérifier par QA) |
| T3 | index.html, CSS, js/main.js | frontend-dev | T1, T2 | fait |
| T4 | mentions-legales.html, confidentialite.html | frontend-dev | T3 | fait |
| T5 | js/form.js (mailto, FORM_CONFIG Formspree), sitemap.xml, robots.txt, optimisation images | systems-dev | T3, T4 | fait |
| T6 | Revue légale (Evin, marque, RGPD) | legal-reviewer | T5 | À CORRIGER (1 bloquant à confirmer : faux positif probable, accès assets/images refusé au reviewer) |
| T7 | Revue esthétique | aesthetic-reviewer | T5 | VALIDÉ (7 à améliorer) |
| T8 | Revue QA | qa-reviewer | T5 | À CORRIGER (domaine .example provisoire = voulu par le brief) |
| T10 | Corrections aller-retour 1 : tabpanel, esthétique, wording légal | frontend-dev | T6-T8 | fait |
| T11 | Re-revue (aller-retour 1) légal, esthétique, QA | reviewers | T10 | fait : légal, esthétique, QA = VALIDÉ |
| T9 | Intégration des photos client | asset-maker | réception photos | en attente client |
