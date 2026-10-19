# Revue QA — 2026-10-19 (seconde revue)
Verdict : VALIDÉ

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| À AMÉLIORER | index.html, mentions-legales.html, confidentialite.html | Domaine provisoire `https://jagerbar-lille.example/` (canonical, og:url, schema, sitemap, robots) : check-links signale 3 liens « cassés ». Placeholder voulu par le brief, décision orchestrateur : À AMÉLIORER. | Fournir le domaine définitif [DOMAINE À FOURNIR], remplacer le préfixe, relancer check-links. |
| À AMÉLIORER | index.html, mentions-legales.html, confidentialite.html | Liens en prose de hauteur 17 à 26 px (ex. index.html « A:232x17 » ; mentions-legales 20 px). Exemptés en ligne (WCAG 2.5.8), mais à 24 px min. si possible. | Ajouter padding vertical ou line-height sur les liens de texte. |
| À AMÉLIORER | css/main.css, assets/fonts/ | Deux familles de polices (Bebas Neue + Inter, 3 fichiers) alors que performance-budget prévoit une seule police. Poids total faible (≈ 84 Kio), décision de brief à confirmer. | Confirmer avec le brief ou ne garder qu'une famille. |

## Détail des contrôles

### 1. Liens
- `node scripts/check-links.js sites/jagerbar-lille` : 3 pages, 3 liens cassés, tous vers le domaine `.example` provisoire (rangés en À AMÉLIORER par décision de l'orchestrateur). Liens internes et ancres : OK.
- `mailto:` non résolu volontairement (email [EMAIL À FOURNIR]) : voulu.

### 2. Affichage desktop 1440 px et mobile 390 px
- Captures Playwright avec défilement complet via serveur HTTP (`workspace/reviews/screenshots/` absent : captures faites dans le scratchpad, non conservées dans le site).
- Pas de débordement horizontal : scrollWidth = clientWidth sur les 3 pages, en desktop et mobile.
- Aucun bloc `.reveal` resté à opacité 0 après défilement.
- Visuel mobile index : en-tête, hero, sections, formulaire, horaires, carte et footer s'affichent correctement.

### 3. WCAG AA
- Lien d'évitement `.skip-link` en premier élément, cible `#main` : OK.
- h1 unique (« Trois niveaux d'ambiance au cœur de Solfé ») : OK.
- Onglets : `role="tabpanel"` désormais porté par des `<div>` (lignes 145, 158, 172, 207 à 243) : OK, plus de rôle incompatible.
- Noscript du formulaire présent (index.html l. 357) : OK.
- Toutes les images ont un attribut alt (0 image sans alt sur les 3 pages) : OK.
- Cibles tactiles : boutons et champs ≥ 44 px ; seuls des liens inline sont plus bas (voir À AMÉLIORER).
- Contrastes et focus : conformes au contrôle précédent, non remesurés.

### 4. Performance (Lighthouse mobile, `scripts/lighthouse-check.sh sites/jagerbar-lille`)

| catégorie | score | seuil | statut |
|-----------|-------|-------|--------|
| Performance | 99 | ≥ 85 | OK |
| Accessibilité | 100 | ≥ 90 | OK |
| Bonnes pratiques | 100 | ≥ 90 | OK |
| SEO | 100 | ≥ 90 | OK |

Aucun audit en échec (le « Uses ARIA roles on incompatible elements » précédent est résolu).

Tailles d'assets :
- Polices : bebas-neue-400.woff2 14 384 o, inter-400.woff2 34 192 o, inter-600.woff2 35 672 o (≈ 84 Kio) : OK.
- Carte accueil-acces-carte.webp 114 564 o (sous 120 Kio), variante mobile 43 172 o : OK.
- Image OG accueil-og.jpg 56 919 o : OK.
- css/main.css 26 029 o, js/main.js 7 800 o, js/form.js 8 368 o : OK, scripts en `defer`.
- Poids total de la page d'accueil estimé bien sous 1,5 Mo (HTML 30 Kio).

Verdict : VALIDÉ — 0 BLOQUANT, 3 À AMÉLIORER.
