# Plan du site — JägerBar Lille

Domaine provisoire : `https://jagerbar-lille.example` (`[DOMAINE À FOURNIR]`,
à remplacer dans canonical, Open Graph, sitemap.xml, robots.txt).
Design : voir `workspace/design-system.md` (composants cités entre backticks).

Règles de contenu transverses :
- Rien d'inventé : toute donnée absente = `<span class="placeholder">[… À FOURNIR]</span>`.
- Textes « à rédiger » : uniquement à partir des faits du brief (3 niveaux,
  mezzanine, bar central avec écrans, cave voûtée avec DJ sets et éclairages,
  136 rue Solférino, quartier Solférino) ; à lister comme « à valider client ».
- Ambiance (lieu, DJ, privatisation) et boissons alcoolisées sont **séparées** :
  aucune boisson citée dans le hero, les espaces, les événements.
- Aucune référence visuelle ou textuelle à la marque Jägermeister ; aucune
  mention de partenariat (`[À CONFIRMER : accord avec la marque ?]`).
- Pas de section avis.

---

## 1. Pages et SEO

| fichier | `<title>` (car.) | `<meta name="description">` (car.) |
|---|---|---|
| `index.html` | JägerBar Lille – Bar 3 niveaux et privatisation, Solférino (58) | Bar sur 3 niveaux au 136 rue Solférino à Lille : mezzanine, bar central et cave voûtée avec DJ sets. Privatisation pour anniversaires, BDE et afterworks. (153) |
| `mentions-legales.html` | Mentions légales – JägerBar Lille, 136 rue Solférino (52) | Mentions légales du site du JägerBar Lille : éditeur TCHATCHATEUR, SIREN 499 524 742, 136 rue Solférino à Lille, hébergeur et propriété intellectuelle. (151) |
| `confidentialite.html` | Politique de confidentialité et cookies – JägerBar Lille (56) | Comment le JägerBar Lille traite les données de son formulaire de réservation : finalité, durée de conservation, vos droits RGPD et cookies. (140) |

Toutes les pages :
- `<html lang="fr">`, viewport, `<link rel="canonical" href="https://jagerbar-lille.example/<fichier>">`
  (index : `https://jagerbar-lille.example/`).
- Open Graph : `og:type` = `website`, `og:locale` = `fr_FR`, `og:site_name` = `JägerBar Lille`,
  `og:title` = title, `og:description` = description, `og:url` = canonical,
  `og:image` = `https://jagerbar-lille.example/assets/images/og/accueil-og.jpg`
  (1200×630) + `og:image:alt`. `twitter:card` = `summary_large_image`.
- Favicon : `assets/icons/favicon.svg` + `assets/icons/apple-touch-icon.png`.
- `<meta name="theme-color" content="#0B130E">`.
- `index.html` uniquement : JSON-LD `BarOrPub` limité aux données connues
  (name « JägerBar Lille », address 136 rue Solférino 59000 Lille FR, url) ;
  `openingHours`, `telephone`, `priceRange` **omis** tant que non fournis.
- Fichiers globaux : `sitemap.xml` (3 URL absolues), `robots.txt`
  (`User-agent: *`, `Allow: /`, `Sitemap: https://jagerbar-lille.example/sitemap.xml`).

URLs : `/`, `/mentions-legales.html`, `/confidentialite.html`.

---

## 2. index.html — structure

```
<body id="top">
  a.skip-link[href=#main]
  header.site-header            (sticky ; .is-compact au scroll)
    a.brand[href=#top]
    nav.site-nav[aria-label="Navigation principale"]
      button.nav-toggle[aria-controls=site-menu]
      ul#site-menu : #concept #espaces #carte #evenements #privatisation #acces
                     + CTA « Réserver / Privatiser » (dans le panneau mobile)
    a.btn--primary.btn--sm[href=#reservation]  « Réserver / Privatiser » (≥ sm)
  main#main
    section.hero#accueil            (h1)
    section#concept                 (h2 Le Concept)
    section#espaces                 (h2 Les Espaces)       .section--alt
    section#carte                   (h2 La Carte)
    section#evenements              (h2 Événements)        .section--alt
    section#privatisation           (h2 Privatisation)     contient form#reservation
    section#acces                   (h2 Infos pratiques & accès) .section--alt
  div.mobile-cta                    (< sm)
  footer.site-footer
  <script src="js/main.js" defer> + <script src="js/form.js" defer>
```
`<head>` : une ligne `<script>document.documentElement.classList.add('js')</script>`
(pas de style inline), preload des 2 polices, `css/main.css`.

### A. Header / navigation
- Libellés : Le Concept, Les Espaces, La Carte, Événements, Privatisation, Accès.
- CTA « Réserver / Privatiser » → `#reservation`.
- Comportements : `.site-header`, `.nav-toggle`, `.site-nav` (design system 5.2-5.4).
- Lien actif mis à jour au scroll (`aria-current`).

### B. Hero `#accueil`
- `h1` : « L'Expérience Givrée au Cœur de Solfé » **sous réserve legal-reviewer
  (loi Evin : « givrée » peut évoquer une boisson servie glacée)** ;
  alternative prête : « Trois niveaux d'ambiance au cœur de Solfé ».
- Sous-titre (`--fs-lg`, `--color-text`) centré lieu, ex. : « Mezzanine, bar
  central et cave voûtée : trois niveaux au cœur du quartier Solférino, à Lille. »
- CTA : `.btn--secondary` « Découvrir la carte » → `#carte` ;
  `.btn--primary` « Réserver un espace » → `#reservation`.
- `ul.badge-list` : « 3 niveaux », « Cave voûtée & DJ sets »,
  « Happy hour 7j/7 » + précision obligatoire si des alcools sont à prix réduit :
  « boissons sans alcool également à prix réduit `[À CONFIRMER]` » et
  horaires `[HORAIRES HAPPY HOUR À FOURNIR]` (à valider par legal-reviewer ;
  à défaut, retirer le badge).
- Fond : CSS seul (`.hero::before` lueur radiale ambrée animée), aucune image
  → le h1 est l'élément LCP.

### C1. Le Concept `#concept`
- `.section-head` (eyebrow « Le lieu », h2 « Le Concept »).
- Texte : `[TEXTE DE PRÉSENTATION À FOURNIR]` ou brouillon rédigé à partir des
  seuls faits du brief, marqué à valider.
- 3 `.card` « faits clés » (h3) : 3 niveaux ; Cave voûtée ; Au cœur de Solférino.

### C2. Les Espaces `#espaces`
- `.tabs` (aria-label « Les trois espaces ») : onglets Mezzanine / Bar central /
  Cave voûtée → 3 panneaux `.space` (ids `espace-mezzanine`, `espace-bar-central`,
  `espace-cave-voutee`).
  1. La Mezzanine : chaleureuse et intime.
  2. Le Bar central : comptoir convivial, écrans (aucun lien avec les boissons).
  3. La Cave voûtée : piste de danse sous voûtes, DJ sets, éclairages.
- Image par espace : photo client ; à défaut `.media-placeholder`
  « [PHOTO CLIENT À FOURNIR] ».
- Capacités par espace : non fournies → `[CAPACITÉ À FOURNIR]` ou absentes.

### D. La Carte `#carte`
- `.section-head` (h2 « La Carte »), lead informatif neutre.
- `.tabs` (aria-label « Catégories de la carte »), 5 onglets/panneaux, chacun
  avec un `h3` :
  `carte-signatures` Signatures · `carte-bieres` Bières pression & bouteilles ·
  `carte-shots` Shots · `carte-softs` Softs & sans alcool · `carte-snacking`
  Snacking & planches.
- Chaque panneau : `ul.menu-list` de `.menu-item` (h4 nom, composition/origine,
  prix). **Aucun produit fourni** → 3 cartes placeholder par catégorie :
  `[NOM À FOURNIR]` / `[COMPOSITION À FOURNIR]` / `[PRIX À FOURNIR]`.
  Ne pas inventer de noms de boissons.
- `.health-notice` en bas de section : « L'abus d'alcool est dangereux pour la
  santé, à consommer avec modération. Vente interdite aux mineurs de moins de
  18 ans. »

### E1. Événements `#evenements`
- h2 « Événements », lead centré lieu.
- `.card` x3 (h3) : Anniversaires, BDE & associations étudiantes, Afterworks
  d'entreprise — une phrase factuelle chacune, sans chiffre ni promesse inventés,
  sans boisson.
- `.stat` capacité : « jusqu'à 250 personnes » + `[À CONFIRMER par le client]`.
- `h3` « Équipements » + `.feature-list` : sono indépendante en cave, jeux de
  lumières, écrans géants.
- Lien `.btn--primary` « Demander un devis » → `#reservation`.

### E2. Privatisation `#privatisation`
- h2 « Privatisation & réservation de groupe », lead.
- `form#reservation.form` (`novalidate` ajouté par JS seulement ; sans JS
  validation native + `action="mailto:[EMAIL À FOURNIR]" method="post" enctype="text/plain"`) :

| champ | name / type | attributs |
|---|---|---|
| Nom | `nom` / text | required, autocomplete=name, maxlength 100 |
| Email | `email` / email | required, autocomplete=email |
| Téléphone | `telephone` / tel | required, autocomplete=tel, pattern FR souple (chiffres, espaces, +, .) |
| Date souhaitée | `date` / date | required, `min` = aujourd'hui (JS) |
| Nombre de convives | `convives` / number | required, min 1, inputmode numeric (pas de max tant que capacité non confirmée) |
| Espace souhaité | `espace` / select | required : Mezzanine, Bar central, Cave voûtée, Plusieurs espaces, Tout le bar |
| Message | `message` / textarea | optionnel, maxlength 2000 |

- Bouton `.btn--primary.btn--block` « Envoyer ma demande ».
- `.form__status` (aria-live) ; message d'erreur par champ en français.
- `.form__notice` RGPD : finalité (répondre à votre demande de réservation /
  devis), destinataire (le JägerBar, TCHATCHATEUR), lien
  « Politique de confidentialité » → `confidentialite.html#formulaire`.

### F. Infos pratiques & accès `#acces`
- h2 « Infos pratiques & accès ».
- h3 « Horaires » : `.hours-table` 7 lignes (lundi → dimanche),
  `[HORAIRES À FOURNIR]` ; ligne « Happy hour » `[À FOURNIR]`.
- h3 « Adresse » : `<address>` 136 rue Solférino, 59000 Lille.
- h3 « Venir en métro » : République – Beaux-Arts ; Cormontaigne
  `[À VÉRIFIER : ligne et sortie]`.
- Photo façade (client) ou `.media-placeholder` « [PHOTO CLIENT À FOURNIR] ».
- `.map-figure` : image statique OSM + attribution ; `.btn--primary`
  « Itinéraire » → `https://www.google.com/maps/dir/?api=1&destination=136+rue+Solf%C3%A9rino+59000+Lille`
  (`target="_blank" rel="noopener"`, mention « nouvel onglet ») — simple lien,
  aucun script tiers ; à citer dans la politique de confidentialité (liens externes).
- Optionnel : `.btn--secondary` « Afficher la carte interactive » → iframe
  `openstreetmap.org/export/embed.html` injectée **au clic uniquement**.

### G. Footer
- `.health-notice` (texte exact du brief).
- `<address>` : TCHATCHATEUR (enseigne JAGERBAR), SIREN 499 524 742,
  136 rue Solférino, 59000 Lille.
- Liens : Mentions légales, Politique de confidentialité,
  Gestion des cookies (`confidentialite.html#cookies`).
- Crédits : © contributeurs OpenStreetMap ; crédits photos CC-BY si utilisées.

---

## 3. mentions-legales.html — sections (ancres)

h1 « Mentions légales ». Sommaire puis :
`#editeur` (TCHATCHATEUR, forme `[SARL ou EURL — À CONFIRMER]`, capital
`[À FOURNIR]`, enseigne JAGERBAR, SIREN/SIRET, RCS `[À FOURNIR]`, NAF 56.30Z,
TVA `[À FOURNIR]`, adresse, contact `[À FOURNIR]`) · `#publication`
(directeur `[À FOURNIR]`) · `#hebergeur` (`[À FOURNIR]`) · `#propriete`
(propriété intellectuelle, absence de lien avec la marque Jägermeister sauf
accord `[À CONFIRMER]`) · `#credits` (polices OFL, icônes, OSM, photos) ·
`#sante` (mention sanitaire).

## 4. confidentialite.html — sections (ancres)

h1 « Politique de confidentialité ». Sommaire puis :
`#responsable` · `#formulaire` (données collectées, finalité, base légale,
destinataire, envoi par messagerie de l'utilisateur via mailto) ·
`#conservation` (`[DURÉE À CONFIRMER]`) · `#droits` (accès, rectification,
effacement, opposition, contact `[À FOURNIR]`, CNIL) · `#cookies` (aucun
cookie ni traceur non essentiel, pas de bandeau ; polices locales) ·
`#liens-externes` (Google Maps / OpenStreetMap ouverts au clic seulement).

---

## 5. Assets nécessaires

| fichier | origine | statut |
|---|---|---|
| `assets/fonts/bebas-neue-400.woff2` | Bebas Neue, OFL (dépôt officiel / Google Fonts GitHub), sous-ensemble latin+latin-ext | à produire |
| `assets/fonts/inter-400.woff2`, `inter-600.woff2` | Inter, OFL (github.com/rsms/inter) | à produire |
| `assets/fonts/OFL-bebas-neue.txt`, `OFL-inter.txt` | licences | à produire |
| `assets/images/accueil-mezzanine.webp` (+ `-mobile.webp`) | **client** | `[PHOTO CLIENT À FOURNIR]` |
| `assets/images/accueil-bar-central.webp` (+ `-mobile`) | **client** | `[PHOTO CLIENT À FOURNIR]` |
| `assets/images/accueil-cave-voutee.webp` (+ `-mobile`) | **client** | `[PHOTO CLIENT À FOURNIR]` |
| `assets/images/accueil-facade.webp` (+ `-mobile`) | **client** | `[PHOTO CLIENT À FOURNIR]` |
| `assets/images/accueil-mezzanine-placeholder.svg`, `…-bar-central-…`, `…-cave-voutee-…`, `…-facade-…` | SVG maison (couleurs DS, libellé « [PHOTO CLIENT À FOURNIR] »), ≤ 5 Ko chacun | à produire |
| `assets/images/accueil-acces-carte.webp` (+ `-mobile`) | rendu statique OpenStreetMap (ODbL, « © les contributeurs d'OpenStreetMap »), 1 seule capture, marqueur au 136 rue Solférino | à produire |
| `assets/images/og/accueil-og.jpg` | composition maison 1200×630 (enseigne texte + lueur ambrée) ; sous-dossier `og/` pour ne pas être converti par optimize-images.sh | à produire |
| `assets/icons/favicon.svg`, `apple-touch-icon.png` (180×180) | monogramme « JB » maison, sans cerf ni croix | à produire |
| `assets/icons/sprite.svg` | icônes : menu, close, layers (niveaux), music, sparkles/lumières, monitor, speaker, users, calendar, map-pin, train/métro, clock, external-link, arrow-right, check, alert — Lucide (ISC) ou Tabler (MIT) | à produire |

Tout dans `workspace/assets-registry.md` (photos client : « fournie par le
client »). Pas d'image d'ambiance stock en v1 (budget + risque de logo visible).

Budget (page d'accueil < 1,5 Mo) : polices ≤ 100 Ko ; CSS ≤ 40 Ko ;
JS total ≤ 20 Ko ; chaque photo ≤ 150 Ko (desktop) / ≤ 80 Ko (mobile) ;
carte ≤ 120 Ko. Le hero n'a pas d'image : **toutes** les images de la page
sont en `loading="lazy"` avec `width`/`height`.

---

## 6. JavaScript nécessaire (vanilla, `defer`, pas de GSAP)

`js/main.js` (frontend-dev) :
1. Header compact : IntersectionObserver sur une sentinelle en haut de page → `.is-compact`.
2. Menu burger : aria-expanded, Échap, fermeture au clic lien / focusout, blocage scroll.
3. Onglets génériques `[data-tabs]` (Espaces + Carte) : ARIA, flèches/Début/Fin,
   transition, défilement de l'onglet actif dans la vue ; sans JS tout visible.
4. Reveal au scroll : IntersectionObserver sur `.reveal` (désactivé si reduce).
5. Tilt 3D `.card--tilt` : seulement `(hover: hover) and (pointer: fine)` et
   sans reduce, rAF, ≤ 6°.
6. Lien de nav actif (`aria-current`) au scroll.
7. Barre `.mobile-cta` : visible après le hero, masquée si `#reservation` visible.
8. (Optionnel) jour courant dans `.hours-table`.

`js/form.js` (systems-dev) :
1. Validation (Constraint Validation API) avec messages FR, `aria-invalid`,
   `aria-describedby`, focus sur le premier champ en erreur.
2. `min` du champ date = aujourd'hui.
3. Envoi : objet de configuration unique en tête de fichier
   `FORM_CONFIG = { mode: 'mailto', to: '[EMAIL À FOURNIR]', endpoint: '' }` ;
   mode `mailto` construit `mailto:` (sujet « Demande de réservation – <date> »,
   corps avec tous les champs, encodeURIComponent) ; mode `endpoint` prêt pour
   Formspree (fetch POST, gestion succès/erreur dans `.form__status`).
4. (Optionnel) carte OSM interactive injectée au clic.

---

## 7. Découpage des tâches suggéré (tasks.md)

| id | tâche | agent | dépend de |
|---|---|---|---|
| T1 | Plan + design system | architect | — (fait) |
| T2 | Polices (3 woff2 + OFL), sprite icônes, favicon, placeholders SVG x4, carte OSM statique, image OG, registre | asset-maker | T1 |
| T3 | index.html + css/main.css (tokens DS) + js/main.js (header, burger, onglets, reveal, tilt, mobile-cta) | frontend-dev | T1, T2 |
| T4 | mentions-legales.html + confidentialite.html (contenu du brief, placeholders) | frontend-dev | T3 |
| T5 | js/form.js (validation, mailto, config Formspree), sitemap.xml, robots.txt, optimisation images, (option) carte OSM au clic | systems-dev | T3 |
| T6 | Revue légale (Evin : hero, badge happy hour, carte, écrans/sport ; marque ; RGPD ; LCEN) | legal-reviewer | T4, T5 |
| T7 | Revue esthétique | aesthetic-reviewer | T4, T5 |
| T8 | Revue QA (WCAG, Lighthouse mobile, liens, budget) | qa-reviewer | T4, T5 |
| T9 | Intégration photos client (à la réception) | asset-maker → frontend-dev | photos client |
