# Design System — Boulangerie Martin

Style : chaleureux, artisanal. Palette crème et brun. Mobile-first.
Source de vérité unique : toutes les valeurs ci-dessous sont déclarées une
seule fois en custom properties dans `:root` de `css/main.css` (bloc prêt à
copier en fin de document). Aucune valeur en dur ailleurs dans le CSS.

---

## Plan du site

| Fichier | URL | Rôle |
|---|---|---|
| `index.html` | https://boulangerie-martin.example/ | Page unique : accueil, présentation, horaires, contact |
| `mentions-legales.html` | https://boulangerie-martin.example/mentions-legales.html | Mentions légales, données personnelles, cookies, crédits |
| `sitemap.xml` | racine | Les 2 URL ci-dessus, en absolu |
| `robots.txt` | racine | `Allow: /`, `Disallow: /workspace/`, lien vers le sitemap |

### SEO par page

| Page | `<title>` (50-60 car.) | `<meta name="description">` (120-155 car.) |
|---|---|---|
| index.html | `Boulangerie Martin, pain artisanal et viennoiseries à Lyon` (58) | `Boulangerie artisanale au 12 rue des Lilas, Lyon 1er : pains, viennoiseries et pâtisseries. Horaires d'ouverture, adresse et téléphone.` (135) |
| mentions-legales.html | `Mentions légales et confidentialité – Boulangerie Martin` (56) | `Mentions légales de la Boulangerie Martin SARL : éditeur, directeur de la publication, hébergeur, crédits photos et politique de données personnelles.` (150) |

Open Graph (les deux pages) : `og:type` = `website`, `og:title` et
`og:description` = valeurs ci-dessus, `og:url` = URL absolue de la page,
`og:image` = `https://boulangerie-martin.example/assets/images/hero.webp`,
`og:locale` = `fr_FR`. Ajouter `<link rel="canonical">` (URL absolue).

### Structure HTML — index.html

```
body
├─ a.skip-link[href="#main"]            « Aller au contenu »
├─ header.site-header
│   ├─ a.site-logo[href="./"]           « Boulangerie Martin » (texte, police titres)
│   └─ nav.site-nav[aria-label="Navigation principale"]
│       └─ ul > li > a  #presentation « La boulangerie » · #horaires « Horaires » · #contact « Contact »
├─ main#main
│   ├─ section.hero[aria-labelledby="hero-title"]
│   │   ├─ picture (hero-mobile.webp ≤640px / hero.webp)  — image LCP, pas de lazy, fetchpriority="high"
│   │   └─ div.hero-content
│   │       ├─ h1#hero-title           « Boulangerie Martin »
│   │       ├─ p.hero-tagline          « Pains, viennoiseries et pâtisseries au cœur de Lyon 1er »
│   │       └─ div.button-group        a.button.button--primary « Voir les horaires » (#horaires)
│   │                                  a.button.button--secondary « Appeler le 01 99 00 12 34 » (tel:+33199001234)
│   ├─ section#presentation.section[aria-labelledby]
│   │   ├─ h2 « Notre boulangerie »
│   │   ├─ div.split  → p (texte) + picture (atelier.webp, lazy)
│   │   └─ ul.card-grid → 3 × li.card : icône SVG + h3 + p
│   │        (h3 : « Les pains » · « Les viennoiseries » · « Les pâtisseries »)
│   ├─ section#horaires.section.section--alt[aria-labelledby]
│   │   ├─ h2 « Horaires d'ouverture »
│   │   └─ table.hours-table  (caption visuellement masquée, th[scope="row"] = jour)
│   │        Lundi : Fermé · Mardi à Vendredi (4 lignes) : 6h30 – 19h30
│   │        Samedi : 6h30 – 19h · Dimanche : 7h – 13h
│   └─ section#contact.section[aria-labelledby]
│       ├─ h2 « Nous trouver »
│       └─ ul.contact-list
│           ├─ li : icône + address « 12 rue des Lilas, 69001 Lyon » + lien OpenStreetMap (texte explicite, pas d'iframe)
│           ├─ li : icône + a[href="tel:+33199001234"] « 01 99 00 12 34 »
│           └─ li : icône + a[href="mailto:contact@boulangerie-martin.example"]
└─ footer.site-footer
    ├─ p « Boulangerie Martin SARL — 12 rue des Lilas, 69001 Lyon »
    ├─ a[href="mentions-legales.html"] « Mentions légales »
    └─ p.footer-note « © 2026 Boulangerie Martin »
```

Pas de formulaire, pas d'iframe de carte, pas de police ni script tiers
(aucun cookie ni traceur). Textes de présentation : génériques, sans
affirmation invérifiable (pas de date de création, label, prix ou
récompense inventés).

### Structure HTML — mentions-legales.html

Même `skip-link`, `site-header` (liens de nav vers `index.html#…`) et
`site-footer`. Dans `main#main.legal` :
`h1` « Mentions légales » puis `h2` : Éditeur du site · Directeur de la
publication · Hébergeur · Propriété intellectuelle et crédits photos
(depuis `workspace/assets-registry.md`) · Données personnelles (aucune
collecte, pas de formulaire) · Cookies (aucun cookie ni traceur).
Données : celles du brief, telles quelles.

---

## Couleurs

Contrastes calculés (WCAG 2.x) sur `--color-bg`.

| Variable | Valeur | Usage | Contraste |
|---|---|---|---|
| `--color-bg` | `#FBF5EA` | Fond principal (crème) | — |
| `--color-bg-alt` | `#F3E6D0` | Fond de section alternée | — |
| `--color-surface` | `#FFFDF8` | Fond des cartes et du tableau d'horaires | — |
| `--color-text` | `#3B2A1E` | Texte courant, titres (brun très foncé) | 12,6:1 |
| `--color-text-muted` | `#6B5444` | Texte secondaire, légendes | 6,5:1 (5,7:1 sur bg-alt) |
| `--color-primary` | `#7A4B2A` | Boutons, liens, accents de titre (brun) | 6,8:1 (6,0:1 sur bg-alt) |
| `--color-primary-hover` | `#5E3820` | Survol / actif des boutons et liens | ~9:1 |
| `--color-on-primary` | `#FBF5EA` | Texte sur fond `--color-primary` | 6,8:1 |
| `--color-accent` | `#B07430` | Doré « croûte » : icônes, filets, focus. **Jamais pour du texte < 24px** | 3,6:1 |
| `--color-border` | `#E2CFB2` | Bordures fines, séparateurs (décoratif) | — |
| `--color-footer-bg` | `#3B2A1E` | Fond du pied de page | — |
| `--color-footer-text` | `#FBF5EA` | Texte et liens du pied de page | 12,6:1 |
| `--color-focus` | `#B07430` | Contour de focus (≥ 3:1 sur crème et sur brun foncé) | 3,6:1 / 3,5:1 |

## Typographie

- Une seule police web : **Lora** (licence SIL OFL 1.1), 2 graisses :
  400 et 700, fichiers `assets/fonts/lora-400.woff2` et
  `assets/fonts/lora-700.woff2`, hébergés localement, `font-display: swap`,
  sous-ensemble latin. Usage : titres, logo, accroche du hero.
- Texte courant : pile système (aucun téléchargement).

| Variable | Valeur |
|---|---|
| `--font-heading` | `"Lora", Georgia, "Times New Roman", serif` |
| `--font-body` | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--fw-regular` | `400` |
| `--fw-bold` | `700` |
| `--fs-sm` | `0.875rem` (légendes, pied de page) |
| `--fs-base` | `1.0625rem` (17px, lisibilité tous âges) |
| `--fs-lg` | `1.25rem` (h3, accroche) |
| `--fs-xl` | `clamp(1.625rem, 1.3rem + 1.5vw, 2.25rem)` (h2) |
| `--fs-2xl` | `clamp(2.25rem, 1.6rem + 3vw, 3.5rem)` (h1) |
| `--lh-tight` | `1.2` (titres) |
| `--lh-base` | `1.6` (texte) |
| `--measure` | `65ch` (largeur max des paragraphes) |

Titres h1-h3 : `--font-heading`, `--fw-bold`, `--color-text`,
`--lh-tight`. Corps : `--font-body`, `--fs-base`, `--lh-base`,
`--color-text` sur `--color-bg`. Liens : `--color-primary`, soulignés,
`--color-primary-hover` au survol.

## Espacements

Échelle sur base 4px / 8px.

| Variable | Valeur |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-5` | `1.5rem` (24px) |
| `--space-6` | `2rem` (32px) |
| `--space-7` | `3rem` (48px) |
| `--space-8` | `4rem` (64px) |
| `--space-9` | `6rem` (96px) |
| `--section-padding` | `var(--space-7)` mobile → `var(--space-9)` dès 960px |

### Formes, ombres, mouvement

| Variable | Valeur |
|---|---|
| `--radius-sm` | `4px` |
| `--radius-md` | `10px` |
| `--radius-lg` | `20px` |
| `--radius-pill` | `999px` |
| `--shadow-sm` | `0 1px 3px rgb(59 42 30 / 0.12)` |
| `--shadow-md` | `0 6px 20px rgb(59 42 30 / 0.12)` |
| `--focus-ring` | `3px solid var(--color-focus)` (avec `outline-offset: 3px`) |
| `--transition` | `150ms ease-out` (annulée si `prefers-reduced-motion: reduce`) |
| `--tap-min` | `44px` (hauteur/largeur min des zones cliquables) |

## Grille et points de rupture

Les custom properties ne fonctionnant pas dans les media queries, les
valeurs ci-dessous sont à écrire littéralement dans les `@media`, et
**uniquement** celles-ci (mobile-first, `min-width`).

| Nom | Valeur | Effet |
|---|---|---|
| base | < 640px | 1 colonne, nav en ligne compacte sous le logo |
| md | `min-width: 640px` | `card-grid` 2 col., header logo + nav sur une ligne |
| lg | `min-width: 960px` | `card-grid` 3 col., `split` 2 col. (texte / image), `contact-list` 3 col., hero texte sur image |

| Variable | Valeur |
|---|---|
| `--container-max` | `68rem` (1088px) |
| `--container-pad` | `var(--space-4)` mobile → `var(--space-6)` dès 640px |
| `--grid-gap` | `var(--space-5)` mobile → `var(--space-6)` dès 960px |

`.container` : `width: 100%; max-width: var(--container-max);
margin-inline: auto; padding-inline: var(--container-pad);`
Grilles en CSS Grid (`gap: var(--grid-gap)`), pas de framework.

---

## Composants

### skip-link
Masqué hors écran, visible au focus en haut à gauche ; fond
`--color-primary`, texte `--color-on-primary`, `padding: var(--space-2)
var(--space-4)`, `--radius-sm`. Premier élément du `body`, cible `#main`.

### site-header
Fond `--color-bg`, bordure basse 1px `--color-border`, `padding-block:
var(--space-4)`. Logo texte : `--font-heading`, `--fw-bold`, `--fs-lg`,
`--color-text`, non souligné. Pas de menu burger (3 liens tiennent sur
mobile, pas de JS). Header non sticky.

### site-nav
`ul` en flex, wrap, `gap: var(--space-2)` (mobile) / `var(--space-5)`
(≥ 640px). Liens : `--color-text`, non soulignés, `min-height:
var(--tap-min)`, `display: inline-flex; align-items: center`, padding
horizontal `--space-2`. Survol / focus : soulignement 2px
`--color-accent` (`text-decoration-thickness`, `text-underline-offset:
var(--space-1)`).

### button
- Base : `display: inline-flex; align-items: center; gap: var(--space-2);
  min-height: var(--tap-min); padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill); font-family: var(--font-body);
  font-weight: var(--fw-bold); font-size: var(--fs-base);
  text-decoration: none; transition: background-color var(--transition),
  color var(--transition)`.
- `.button--primary` : fond `--color-primary`, texte
  `--color-on-primary` ; survol `--color-primary-hover`.
- `.button--secondary` : fond transparent, bordure 2px `--color-primary`,
  texte `--color-primary` ; survol fond `--color-primary`, texte
  `--color-on-primary`.
- `.button-group` : flex, wrap, `gap: var(--space-3)`,
  `margin-top: var(--space-5)`.

### hero
Mobile : image pleine largeur, conservée au ratio 21/9 (décision : pas de
recadrage 4/3, `hero-mobile.webp` est en 21/9) puis
`hero-content` sur fond `--color-bg-alt`, `padding: var(--space-6)
var(--container-pad)`. Dès 960px : image en fond de section (ratio 21/9,
hauteur max 560px), `hero-content` en encart `--color-bg`
(`--radius-lg`, `--shadow-md`, `max-width: 32rem`,
`padding: var(--space-7)`) aligné à gauche dans le container.
h1 `--fs-2xl` ; `.hero-tagline` `--font-heading` 400, `--fs-lg`,
`--color-text-muted`.

### section
`padding-block: var(--section-padding)`. `.section--alt` : fond
`--color-bg-alt`. h2 `--fs-xl`, suivi d'un filet décoratif (`::after`,
48px × 3px, `--color-accent`, `margin-top: var(--space-3)`), marge basse
`--space-6`.

### split
Grid 1 col., `gap: var(--grid-gap)` ; dès 960px
`grid-template-columns: 1fr 1fr`, `align-items: center`. Image
`--radius-lg`, `--shadow-sm`. Texte limité à `--measure`.

### card / card-grid
`ul.card-grid` sans puces, grid 1 → 2 → 3 colonnes (voir breakpoints),
`gap: var(--grid-gap)`, `margin-top: var(--space-7)`. `.card` : fond
`--color-surface`, bordure 1px `--color-border`, `--radius-md`,
`--shadow-sm`, `padding: var(--space-5)`. Icône `<img>` SVG 48×48
(`alt=""`, décorative, `width`/`height` renseignés), h3 `--fs-lg`
(`margin-block: var(--space-3) var(--space-2)`), texte
`--color-text-muted`.

### hours-table
`width: 100%; max-width: 32rem; border-collapse: collapse`, fond
`--color-surface`, `--radius-md` (via `overflow: hidden`), `--shadow-sm`.
Cellules `padding: var(--space-3) var(--space-4)`, séparateur bas 1px
`--color-border`. `th` : `--fw-bold`, aligné à gauche ; horaires alignés à
droite, `font-variant-numeric: tabular-nums`. Ligne « Fermé » : texte
`--color-text-muted` en italique. Ligne du jour courant (classe
`.is-today`, ajoutée par `js/main.js`, amélioration progressive) : fond
`--color-bg-alt`, bordure gauche 4px `--color-accent`, mention
« (aujourd'hui) » insérée en texte réel, pas seulement en couleur.
`caption` : classe `.visually-hidden` (« Horaires d'ouverture de la
boulangerie »).

### contact-list
`ul` sans puces, `display: grid; gap: var(--space-5)` ; dès 960px 3
colonnes. Chaque `li` : flex, `gap: var(--space-3)`, icône `<img>` SVG
24×24 (`alt=""`) + contenu. `address` en style normal (non italique).
Liens `tel:` / `mailto:` en `--color-primary`, `--fw-bold`, zone cliquable
≥ `--tap-min` (inline-flex + min-height).

### site-footer
Fond `--color-footer-bg`, texte `--color-footer-text`, `--fs-sm`,
`padding-block: var(--space-7)`, contenu centré, éléments espacés de
`--space-3`. Liens `--color-footer-text` soulignés, zone cliquable ≥
`--tap-min` ; focus `--focus-ring`.

### legal (mentions-legales.html)
`main.legal` dans `.container`, contenu limité à `--measure`,
`padding-block: var(--section-padding)`. h1 `--fs-2xl`, h2 `--fs-xl`
(sans filet décoratif), `margin-top: var(--space-7)`. Coordonnées en
listes `dl` ou `address`.

### Utilitaires
- `.visually-hidden` : masquage accessible standard (clip, 1px).
- `:focus-visible` global : `outline: var(--focus-ring)`,
  `outline-offset: 3px`.
- `img { max-width: 100%; height: auto; display: block; }`.
- `@media (prefers-reduced-motion: reduce)` : transitions désactivées.
  `scroll-behavior: smooth` uniquement dans
  `@media (prefers-reduced-motion: no-preference)`.

---

## Bloc à reprendre dans css/main.css

```css
@font-face {
  font-family: "Lora";
  src: url("../assets/fonts/lora-400.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Lora";
  src: url("../assets/fonts/lora-700.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  /* Couleurs */
  --color-bg: #FBF5EA;
  --color-bg-alt: #F3E6D0;
  --color-surface: #FFFDF8;
  --color-text: #3B2A1E;
  --color-text-muted: #6B5444;
  --color-primary: #7A4B2A;
  --color-primary-hover: #5E3820;
  --color-on-primary: #FBF5EA;
  --color-accent: #B07430;
  --color-border: #E2CFB2;
  --color-footer-bg: #3B2A1E;
  --color-footer-text: #FBF5EA;
  --color-focus: #B07430;

  /* Typographie */
  --font-heading: "Lora", Georgia, "Times New Roman", serif;
  --font-body: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --fw-regular: 400;
  --fw-bold: 700;
  --fs-sm: 0.875rem;
  --fs-base: 1.0625rem;
  --fs-lg: 1.25rem;
  --fs-xl: clamp(1.625rem, 1.3rem + 1.5vw, 2.25rem);
  --fs-2xl: clamp(2.25rem, 1.6rem + 3vw, 3.5rem);
  --lh-tight: 1.2;
  --lh-base: 1.6;
  --measure: 65ch;

  /* Espacements */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --section-padding: var(--space-7);

  /* Grille */
  --container-max: 68rem;
  --container-pad: var(--space-4);
  --grid-gap: var(--space-5);

  /* Formes, ombres, mouvement */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --shadow-sm: 0 1px 3px rgb(59 42 30 / 0.12);
  --shadow-md: 0 6px 20px rgb(59 42 30 / 0.12);
  --focus-ring: 3px solid var(--color-focus);
  --transition: 150ms ease-out;
  --tap-min: 44px;
}

@media (min-width: 640px) {
  :root { --container-pad: var(--space-6); }
}
@media (min-width: 960px) {
  :root {
    --section-padding: var(--space-9);
    --grid-gap: var(--space-6);
  }
}
```

---

## Assets attendus (pour asset-maker)

| Fichier | Dimensions | Usage |
|---|---|---|
| `assets/images/hero.webp` + `hero-mobile.webp` | 1920×823 (21/9) / 800×600 (4/3) | Étal ou vitrine de pains, lumière chaude ; sert aussi d'`og:image` |
| `assets/images/atelier.webp` + `atelier-mobile.webp` | 1200×900 / 640×480 | Mains de boulanger / pâte ou viennoiseries |
| `assets/icons/pain.svg`, `croissant.svg`, `gateau.svg` | 48×48, style trait | Cartes de présentation |
| `assets/icons/adresse.svg`, `telephone.svg`, `email.svg` | 24×24, style trait | Liste de contact |
| `assets/icons/favicon.svg` | 32×32 | Favicon (épi ou pain stylisé) |
| `assets/fonts/lora-400.woff2`, `lora-700.woff2` | — | Police titres (OFL), sous-ensemble latin |

Images libres de droits, chaque fichier (images, icônes, police) inscrit
dans `workspace/assets-registry.md` (source, auteur, licence).
Les icônes étant insérées en `<img alt="">`, `currentColor` n'y est pas
hérité : couleur de trait codée dans le SVG = `#B07430` (valeur de
`--color-accent`), sans `width`/`height` figés autres que le `viewBox`.
