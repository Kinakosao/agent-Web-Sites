# Design System — JägerBar Lille

Source de vérité unique pour couleurs, typo, espacements, grille, breakpoints,
composants et animations. Tous les tokens des §1, 2, 3, 4 et 6 (tableaux et
blocs de code) sont déclarés une seule fois dans `:root` en tête de
`css/main.css` ; aucune valeur brute (couleur, taille, espacement, durée) ne
doit apparaître ailleurs dans le CSS.

Ambiance : dark mode, underground mais soigné. Mobile-first (390px prioritaire).
Interdits visuels (marque) : pas de cerf, pas de croix, pas d'étiquette ou de
bouteille, pas de typo gothique/blackletter, pas de reprise de la charte
Jägermeister. L'enseigne est un simple mot-symbole texte.

---

## 1. Couleurs

### Tokens

| token | valeur | usage |
|---|---|---|
| `--color-bg` | `#0B130E` | fond principal (vert forêt très sombre) |
| `--color-bg-alt` | `#0D0D0D` | fond des sections alternées, footer |
| `--color-surface` | `#142019` | champs de formulaire, onglets inactifs, tableau |
| `--color-surface-raised` | `#1A2A21` | cartes (espaces, carte, événements) |
| `--color-border` | `#2A3B31` | séparateurs et bordures **décoratives** uniquement |
| `--color-border-strong` | `#8E9297` | bordure des champs de formulaire (composant UI) |
| `--color-text` | `#F4F4F9` | texte principal, titres |
| `--color-text-muted` | `#8E9297` | texte secondaire (jamais sur la lueur du hero) |
| `--color-accent` | `#FF5500` | CTA principal (fond), mots-clés en titre |
| `--color-on-accent` | `#0D0D0D` | texte sur fond orange |
| `--color-accent-2` | `#D4A373` | ambré : prix, eyebrows, bordures CTA secondaire, focus |
| `--color-on-accent-2` | `#0D0D0D` | texte sur fond ambré |
| `--color-focus` | `#D4A373` | anneau de focus |
| `--color-error` | `#FF6B6B` | messages d'erreur formulaire |
| `--color-success` | `#6FCF97` | message de confirmation formulaire |
| `--color-header-bg` | `rgba(11, 19, 14, 0.88)` | header compact et barre CTA mobile (avec blur) |
| `--color-badge-bg` | `rgba(212, 163, 115, 0.12)` | fond des badges |
| `--color-glow` | `rgba(212, 163, 115, 0.45)` | halo ambré (CTA, focus) |
| `--color-glow-soft` | `rgba(212, 163, 115, 0.18)` | lueur radiale du hero (opacité max) |
| `--gradient-border` | `linear-gradient(135deg, #D4A373 0%, #FF5500 100%)` | bordure dégradée des cartes |
| `--gradient-placeholder` | `linear-gradient(160deg, #1A2A21 0%, #0B130E 60%, #0D0D0D 100%)` | visuels de remplacement |

### Contrastes vérifiés (WCAG 2.x, luminance relative calculée)

| texte / élément | fond | ratio | verdict |
|---|---|---|---|
| `#F4F4F9` texte | `#0B130E` | 17,2:1 | AA/AAA |
| `#F4F4F9` texte | `#0D0D0D` | 17,7:1 | AA/AAA |
| `#F4F4F9` texte | `#142019` | 15,3:1 | AA/AAA |
| `#F4F4F9` texte | `#1A2A21` | 13,7:1 | AA/AAA |
| `#8E9297` muted | `#0B130E` | 6,0:1 | AA |
| `#8E9297` muted | `#0D0D0D` | 6,2:1 | AA |
| `#8E9297` muted | `#142019` | 5,4:1 | AA |
| `#8E9297` muted | `#1A2A21` | 4,8:1 | AA (limite : ne pas utiliser sur fond plus clair) |
| `#FF5500` texte/titre | `#0B130E` | 5,9:1 | AA |
| `#FF5500` texte/titre | `#0D0D0D` | 6,1:1 | AA |
| `#FF5500` texte/titre | `#142019` | 5,2:1 | AA |
| `#FF5500` texte/titre | `#1A2A21` | 4,7:1 | AA (limite) |
| `#0D0D0D` sur bouton | `#FF5500` | 6,1:1 | AA → **texte sombre obligatoire sur orange** |
| `#F4F4F9` sur bouton | `#FF5500` | 2,9:1 | **ÉCHEC** (interdit) |
| `#0D0D0D` sur | `#E85D04` | 5,5:1 | AA (moins bon que #FF5500 → #FF5500 retenu) |
| `#F4F4F9` sur | `#E85D04` | 3,2:1 | ÉCHEC texte courant (écarté) |
| `#D4A373` ambré | `#0B130E` | 8,3:1 | AA/AAA |
| `#D4A373` ambré | `#1A2A21` | 6,6:1 | AA |
| `#0D0D0D` sur | `#D4A373` | 8,6:1 | AA/AAA |
| `#FF6B6B` erreur | `#0B130E` / `#142019` | 6,8:1 / 6,1:1 | AA |
| `#6FCF97` succès | `#0B130E` / `#1A2A21` | 9,9:1 / 7,9:1 | AA |
| `#8E9297` bordure champ | `#0B130E` / `#142019` | 6,0:1 / 5,4:1 | ≥ 3:1 (1.4.11) |
| `#D4A373` anneau focus | tous les fonds | ≥ 6,6:1 | ≥ 3:1 |
| `#F4F4F9` sur lueur hero (pire cas 25 % ambré) | `≈#3D3727` | 10,8:1 | AA |
| `#8E9297` sur lueur hero (pire cas) | `≈#3D3727` | 3,8:1 | **ÉCHEC** → dans le hero, texte en `--color-text` uniquement |

Décisions :
- Orange retenu : `#FF5500` (meilleur contraste que `#E85D04`), toujours avec
  texte `--color-on-accent` (#0D0D0D) quand il sert de fond.
- Gris `#8E9297` conservé (≥ 4,5:1 sur tous les fonds définis) ; interdit
  sur toute couleur plus claire que `#1A2A21` et sur la lueur du hero.
- Le header translucide a un repli opaque `--color-bg` si `backdrop-filter`
  n'est pas supporté (`@supports not (backdrop-filter: blur(1px))`).
- Sélection de texte : fond `--color-accent-2`, texte `--color-on-accent-2`.

---

## 2. Typographie

Polices OFL hébergées localement (`assets/fonts/`), WOFF2, sous-ensemble
latin + latin-ext (vérifier la présence de : é è ê ë à â ä ç î ï ô ö œ Œ ù û ü
É È À Ç ’ « » – € et l'espace insécable). `font-display: swap`.

| fichier | famille | graisse | usage |
|---|---|---|---|
| `assets/fonts/bebas-neue-400.woff2` | Bebas Neue | 400 | titres h1-h3, enseigne, prix |
| `assets/fonts/inter-400.woff2` | Inter | 400 | texte courant |
| `assets/fonts/inter-600.woff2` | Inter | 600 | boutons, labels, onglets, eyebrows, noms de produits |

- Inter : 2 graisses maximum (400, 600). `strong` et `b` sont mappés sur 600
  (aucun 700 chargé).
- `<link rel="preload" as="font" type="font/woff2" crossorigin>` pour
  `bebas-neue-400.woff2` (h1 = LCP) et `inter-400.woff2` uniquement.
- Bebas Neue n'a que des capitales : jamais pour du texte courant ni sous 1,5rem.
- Écart avec la skill performance-budget (« une seule police ») : imposé par
  le brief (2 familles) ; compensé par 3 fichiers seulement, budget polices
  ≤ 100 Ko au total.

### Tokens

```
--font-display: "Bebas Neue", "Arial Narrow", Impact, sans-serif;
--font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--fw-regular: 400;
--fw-semibold: 600;

--fs-xs: 0.875rem;    /* 14px : mentions légales, crédits, attributions */
--fs-sm: 0.9375rem;   /* 15px : labels, badges, onglets */
--fs-base: 1rem;      /* 16px : texte courant (min. sur mobile) */
--fs-md: 1.125rem;    /* 18px : chapô / lead */
--fs-lg: 1.25rem;     /* 20px : sous-titre hero, h2 des pages légales */
--fs-h3: clamp(1.75rem, 1.4rem + 1.5vw, 2.25rem);
--fs-h2: clamp(2.5rem, 1.9rem + 3vw, 4rem);
--fs-h1: clamp(3rem, 1.5rem + 8vw, 6.5rem);

--lh-tight: 0.95;     /* Bebas h1/h2 */
--lh-snug: 1.15;      /* Bebas h3 */
--lh-body: 1.6;
--ls-display: 0.02em;
--ls-caps: 0.08em;    /* Inter 600 en capitales (eyebrows, boutons, badges) */
--measure: 65ch;
```

Hiérarchie : h1 (hero) unique ; h2 par section ; h3 pour espaces, catégories
de carte, types d'événements, blocs infos ; h4 pour les noms de produits.

---

## 3. Espacements, rayons, ombres, z-index

```
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-9: 6rem;     /* 96px */
--section-pad-y: clamp(4rem, 2.8rem + 5vw, 7rem);

--radius-sm: 0.375rem;
--radius-md: 0.75rem;
--radius-lg: 1.25rem;
--radius-pill: 999px;

--shadow-card: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.35);
--shadow-card-hover: 0 1rem 2.5rem rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 1.5rem var(--color-glow);

--tap-min: 2.75rem;  /* 44px : taille minimale de toute zone cliquable */
--btn-h: 3rem;       /* 48px : boutons et champs */
--border-w: 1px;
--border-w-strong: 2px;
--focus-ring: 0 0 0 3px var(--color-focus);
--blur-header: blur(12px) saturate(140%);

--z-header: 100;
--z-mobile-cta: 90;
--z-menu: 200;
--z-skip: 300;
```

---

## 4. Grille et breakpoints

Breakpoints (seule source de vérité ; valeurs littérales dans les `@media`,
car les custom properties ne sont pas utilisables dans les media queries) :

| nom | requête | changements |
|---|---|---|
| base | < 640px (cible 390px) | 1 colonne, menu burger, barre CTA mobile en bas, CTA header masqué |
| `sm` | `@media (min-width: 640px)` | formulaire 2 colonnes pour champs courts, footer 2 col., CTA visible dans le header, barre CTA mobile masquée |
| `md` | `@media (min-width: 1024px)` | navigation complète (burger masqué), mises en page 2 colonnes (concept, espaces, accès), footer 3 col., `--header-h: 5rem`, `--header-h-compact: 4rem` |
| `lg` | `@media (min-width: 1280px)` | uniquement augmentation des marges, pas de nouvelle mise en page |

Préférences : `@media (hover: hover) and (pointer: fine)` pour tout effet de
survol/tilt ; `@media (prefers-reduced-motion: no-preference)` pour toute
animation (voir §6).

```
--container-max: 75rem;                 /* 1200px */
--container-narrow: 46rem;              /* formulaire, pages légales */
--gutter: clamp(1rem, 4vw, 2rem);       /* marge latérale du conteneur */
--grid-gap: var(--space-5);
--card-min: 18rem;                      /* grilles de cartes intrinsèques */
--header-h: 4rem;                       /* 64px ; 5rem à partir de md */
--header-h-compact: 3.5rem;             /* 56px ; 4rem à partir de md */
--mobile-cta-h: 4rem;                   /* barre + marges autour du bouton 48px */
```

- `.container` : `width: min(100% - 2 * var(--gutter), var(--container-max)); margin-inline: auto;`
- Grilles de cartes : `grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--card-min)), 1fr));`
- Mises en page 2 colonnes (≥ md) : grille 12 colonnes, `gap: var(--grid-gap)` ;
  espaces = image 7 col. / texte 5 col. ; concept = texte 7 / faits clés 5 ;
  accès = infos 5 / carte 7.
- `html { scroll-padding-top: calc(var(--header-h-compact) + var(--space-4)); }`
  pour que les ancres ne passent pas sous le header.
- Hero : `min-height: 100svh` (repli `100vh`).

---

## 5. Composants

Nommage BEM léger en kebab-case (`.bloc`, `.bloc__element`, `.bloc--variante`).

### 5.1 Lien d'évitement `.skip-link`
Premier élément du `<body>`, cible `#main`. Hors écran, visible au focus :
fond `--color-accent-2`, texte `--color-on-accent-2`, `z-index: var(--z-skip)`.

### 5.2 Header `.site-header`
- Sticky, `z-index: var(--z-header)`, hauteur `--header-h`, fond transparent
  au-dessus du hero.
- État `.site-header.is-compact` (ajouté par JS) : hauteur `--header-h-compact`,
  fond `--color-header-bg` + `backdrop-filter: var(--blur-header)`,
  bordure basse `--color-border`.
- Contenu : `.brand` | `.site-nav` | `.btn--primary.btn--sm` (CTA, masqué
  < sm) | `.nav-toggle` (masqué ≥ md).

### 5.3 Enseigne `.brand`
Texte seul dans `<a href="#top">` : « JägerBar » en `--font-display`,
`--fs-h3`, `--color-text` ; « Lille » en Inter 600, `--fs-xs`, `--ls-caps`,
`--color-accent-2`. Pas de pictogramme.

### 5.4 Navigation `.site-nav` / burger `.nav-toggle`
- `.nav-toggle` : `<button>` 48×48px, `aria-expanded`, `aria-controls="site-menu"`,
  libellé accessible « Ouvrir le menu » / « Fermer le menu », icônes menu/close.
- Mobile (< md) : `#site-menu` en panneau plein écran sous le header
  (`--color-bg`, `z-index: var(--z-menu)`), liens en Bebas `--fs-h3`, hauteur
  ≥ `--tap-min`, CTA « Réserver / Privatiser » en bas du panneau.
- Fermeture : Échap (focus rendu au bouton), clic sur un lien, sortie du focus
  hors du menu. Pas de piège de focus. Défilement du `body` bloqué si ouvert.
- Sans JS : `.nav-toggle` masqué, liens affichés en liste (amélioration
  progressive via la classe `js` sur `<html>`).
- Lien actif : `aria-current="true"` + soulignement `--color-accent-2` 2px.
- ≥ md : liens en ligne, Inter 600 `--fs-sm`, `--ls-caps`.

### 5.5 Boutons `.btn`
- Base : `display: inline-flex`, `min-height: var(--btn-h)`,
  `padding: var(--space-3) var(--space-5)`, `border-radius: var(--radius-pill)`,
  Inter 600 `--fs-sm`, capitales, `--ls-caps`, bordure `--border-w-strong`.
- `.btn--primary` : fond `--color-accent`, texte `--color-on-accent`, bordure `--color-accent`.
- `.btn--secondary` : fond transparent, bordure `--color-accent-2`, texte `--color-text`.
- `.btn--sm` : `min-height: var(--tap-min)`, `padding-inline: var(--space-4)`.
- `.btn--block` : pleine largeur (mobile, formulaire).
- Survol (hover:hover) : `translateY(-2px) scale(1.03)` + `box-shadow: var(--shadow-glow)`.
- Focus visible : `outline: 3px solid var(--color-focus); outline-offset: 3px;` + halo.
- Lien externe (Itinéraire) : icône `external-link` + texte masqué « (nouvel onglet) ».

### 5.6 Badge `.badge`
Pastille : bordure `--border-w` `--color-accent-2`, fond `--color-badge-bg`,
texte `--color-text`, Inter 600 `--fs-sm`, `--radius-pill`,
`padding: var(--space-2) var(--space-4)`. Non cliquable. Liste `<ul class="badge-list">`.

### 5.7 En-tête de section `.section-head`
`.section-head__eyebrow` (Inter 600, `--fs-xs`, capitales, `--ls-caps`,
`--color-accent-2`) + `<h2>` (Bebas `--fs-h2`, `--lh-tight`) +
`.section-head__lead` (`--fs-md`, `--color-text-muted`, `max-width: var(--measure)`).

### 5.8 Onglets `.tabs` (Espaces et Carte — composant unique)
- Pattern WAI-ARIA Tabs : `role="tablist"` (+ `aria-label`), `<button role="tab">`
  avec `aria-selected`, `aria-controls`, `tabindex` roving ; panneaux
  `role="tabpanel"`, `aria-labelledby`, `tabindex="0"`.
- Clavier : ← → (en boucle), Début/Fin ; activation automatique.
- `.tabs__list` : sur mobile, défilement horizontal (`overflow-x: auto`,
  `scroll-snap-type: x mandatory`), l'onglet actif est ramené dans la vue.
- `.tabs__tab` : `min-height: var(--tap-min)`, Inter 600 `--fs-sm`, fond
  `--color-surface`, texte `--color-text-muted` ; actif : fond `--color-accent-2`,
  texte `--color-on-accent-2`. `white-space: nowrap`.
- Sans JS : tous les panneaux visibles l'un sous l'autre, `.tabs__list` masquée.
- Transition entre panneaux : voir §6.

### 5.9 Panneau d'espace `.space`
`<figure class="space__media">` (ratio 4/3 mobile, 16/10 ≥ md,
`--radius-lg`, `object-fit: cover`) + `<h3>` + texte + `<ul class="space__features">`
(icône + libellé). Image via `<picture>` avec variante `-mobile.webp`.

### 5.10 Visuel de remplacement `.media-placeholder`
Tant que les photos client manquent : même ratio que l'image, SVG (dégradé
`--gradient-placeholder` + motif de voûtes/lignes ambrées très discret),
étiquette centrée « [PHOTO CLIENT À FOURNIR] » en Inter 600 `--fs-sm`
`--color-accent-2`. Fichier SVG via `<img alt="…">` descriptif.

### 5.11 Carte produit `.menu-item`
- `<li>` dans `<ul class="menu-list">` (grille de cartes intrinsèque), hérite de `.card`.
- `.menu-item__name` (`<h4>`, Inter 600 `--fs-base`, `--color-text`),
  `.menu-item__desc` (composition / origine, `--fs-sm`, `--color-text-muted`),
  `.menu-item__price` (Bebas `--fs-h3`, `--color-accent-2`,
  `font-variant-numeric: tabular-nums`, aligné à droite).
- Contenu strictement informatif ; aucune image de boisson ; pas de tilt.

### 5.12 Carte générique `.card`
Utilisée pour événements, faits clés, menu-item.
- Fond `--color-surface-raised`, `--radius-md`, `--shadow-card`,
  `padding: var(--space-5)`, bordure `--border-w` transparente avec dégradé :
  `background: linear-gradient(var(--color-surface-raised), var(--color-surface-raised)) padding-box, var(--gradient-border) border-box;`
  au repos le dégradé est atténué (couche `::before` à 35 % d'opacité),
  100 % au survol.
- Survol (hover:hover) : `translateY(-4px)` + `--shadow-card-hover`.
- `.card--tilt` (événements uniquement) : tilt 3D JS ≤ 6°, uniquement
  `(hover: hover) and (pointer: fine)` et sans réduction de mouvement.

### 5.13 Liste d'équipements `.feature-list` / chiffre clé `.stat`
Icône SVG 24px `--color-accent-2` + libellé, en `<ul>`. `.stat` : valeur
Bebas `--fs-h2` `--color-accent` + libellé Inter `--fs-sm`.

### 5.14 Formulaire `.form`
- `.form-field` : `<label>` au-dessus (Inter 600 `--fs-sm`), mention
  « (obligatoire) » en texte, pas seulement un astérisque.
- Champs : fond `--color-surface`, bordure `--border-w` `--color-border-strong`,
  `--radius-sm`, `min-height: var(--btn-h)`, texte `--fs-base` (évite le zoom iOS),
  `padding: var(--space-3) var(--space-4)`. `color-scheme: dark` (sélecteur de date).
- Focus : bordure `--color-focus` + `--focus-ring`.
- Erreur : `aria-invalid="true"`, bordure `--color-error`,
  `.form-field__error` (`--fs-sm`, `--color-error`, préfixe « Erreur : »)
  relié par `aria-describedby`. Aide `.form-field__hint` en `--color-text-muted`.
- `.form__row` : 2 colonnes ≥ sm (Email/Téléphone, Date/Convives).
- `.form__status` : `role="status"` / `aria-live="polite"`, succès en `--color-success`.
- `.form__notice` (RGPD) sous le bouton : `--fs-xs`, `--color-text-muted`,
  lien souligné vers `confidentialite.html#formulaire`.

### 5.15 Tableau horaires `.hours-table`
`<table>` avec `<caption>`, `<th scope="row">` jour, `<td>` plages.
Toujours 2 colonnes, plages en `white-space: nowrap`, `font-variant-numeric: tabular-nums`,
lignes séparées par `--color-border`, fond `--color-surface`. Jour courant
mis en évidence (optionnel, JS) par bordure gauche `--color-accent-2`.

### 5.16 Carte d'accès `.map-figure`
`<figure>` : image statique OSM (`<picture>`, ratio 4/3, `--radius-lg`) +
`<figcaption>` « © les contributeurs d'OpenStreetMap » (lien vers
openstreetmap.org/copyright, `--fs-xs`). `.btn--primary` « Itinéraire »
(lien externe) et, en option, `.btn--secondary` « Afficher la carte
interactive » (chargement au clic).

### 5.17 Mention sanitaire `.health-notice`
Bloc encadré : bordure `--border-w` `--color-border`, `--radius-sm`, `--fs-sm`,
`--color-text` (pas de muted : doit rester lisible), icône `alert` facultative.
Présent sous la Carte et dans le footer.

### 5.18 Placeholder de contenu `.placeholder`
`<span class="placeholder">[À FOURNIR]</span>` : `--color-accent-2`, Inter 600,
soulignement pointillé 1px. Visible sans ambiguïté, conservé tel quel jusqu'à
fourniture.

### 5.19 Barre CTA mobile `.mobile-cta`
< sm uniquement : barre fixe en bas (hauteur `--mobile-cta-h`, fond
`--color-header-bg` + `--blur-header`, `z-index: var(--z-mobile-cta)`,
`padding-bottom: env(safe-area-inset-bottom)`), bouton `.btn--primary.btn--block`
« Réserver / Privatiser » → `#reservation`. Apparaît après le hero, masquée
quand `#reservation` est visible ou quand le menu est ouvert. `body` reçoit
`padding-bottom: var(--mobile-cta-h)` pour ne rien masquer (footer inclus).

### 5.20 Footer `.site-footer`
Fond `--color-bg-alt`, `--fs-sm`. Colonnes (1 → 2 ≥ sm → 3 ≥ md) :
mention sanitaire ; infos légales résumées (`<address>`) ; liens (Mentions
légales, Politique de confidentialité, Gestion des cookies) + crédits.

### 5.21 Pages légales `.legal`
Conteneur `--container-narrow`, header simplifié (enseigne + lien « Retour à
l'accueil », pas de burger), sommaire d'ancres en tête, h1 Bebas `--fs-h2`,
h2 Inter 600 `--fs-lg`, texte `max-width: var(--measure)`. Même footer.

### 5.22 Icônes
Sprite SVG unique `assets/icons/sprite.svg` utilisé via
`<svg aria-hidden="true" focusable="false"><use href="assets/icons/sprite.svg#icon-…"></use></svg>`,
`currentColor`, tailles 20/24px. Icône porteuse de sens = texte visible ou
`.visually-hidden` associé.

### 5.23 Utilitaires
`.visually-hidden`, `.container`, `.container--narrow`, `.section`
(`padding-block: var(--section-pad-y)`), `.section--alt` (fond `--color-bg-alt`).

---

## 6. Animations

### Tokens
```
--dur-fast: 150ms;
--dur-base: 250ms;
--dur-slow: 600ms;
--dur-glow: 14s;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--stagger: 90ms;
--reveal-distance: 1.5rem;
--tilt-max: 6deg;
```

### Règle d'or
Les styles de base sont **statiques**. Toute animation/transition de
mouvement est déclarée dans `@media (prefers-reduced-motion: no-preference) { … }`.
Le JS vérifie aussi `matchMedia('(prefers-reduced-motion: reduce)')` avant tilt
et reveal. `scroll-behavior: smooth` uniquement dans ce bloc.
N'animer que `transform` et `opacity` (exception : hauteur/fond du header).

| effet | implémentation | si `reduce` |
|---|---|---|
| Hero cascade | `@keyframes fade-up` (opacity 0→1, translateY `--reveal-distance`→0), `--dur-slow`, `--ease-out`. Délai : classes `.stagger-1` à `.stagger-5` qui posent `--i: 1…5`, `animation-delay: calc(var(--i) * var(--stagger))` (pas d'attribut style). **Le h1 (LCP) ne part pas d'opacity 0** : translation seule, sans délai. | aucun mouvement, contenu visible |
| Lueur radiale hero | `.hero::before` : `radial-gradient` `--color-glow-soft` ; `@keyframes glow-drift` (translate ±6 % + scale 1→1.15 + opacity 0.7→1), `--dur-glow`, infinite alternate, `--ease-in-out` | lueur statique |
| CTA | transition `transform`, `box-shadow` `--dur-base` ; `translateY(-2px) scale(1.03)` + halo | halo seul, sans transform |
| Cartes | `translateY(-4px)` + ombre + dégradé bordure à 100 %, `--dur-base` ; tilt JS ≤ `--tilt-max` (pointer fine) | pas de lift ni tilt |
| Reveal au scroll | `.js .reveal { opacity: 0; transform: translateY(var(--reveal-distance)); }` → `.reveal.is-visible` ; IntersectionObserver (seuil 0.15, `unobserve` après) ; `--dur-slow` | éléments visibles d'emblée (aucun masquage) |
| Header | transition `height`, `background-color`, `backdrop-filter` `--dur-base` | changement instantané |
| Onglets | panneau entrant : opacity 0→1 + translateX 0.75rem→0, `--dur-base` | changement instantané |
| Ancres | `scroll-behavior: smooth` | `auto` |
| Menu mobile | opacity + translateY(-0.5rem), `--dur-base` | instantané |

- Le masquage `.reveal` n'existe que si `<html>` porte la classe `js`
  (ajoutée par une ligne de script dans `<head>`) : sans JS, tout est visible.
- Aucun GSAP : CSS + JS vanilla suffisent.
