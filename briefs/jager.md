# Brief — JägerBar Lille

> Client réel. **Aucune donnée ne doit être inventée.** Toute information absente
> (prix, horaires, capacités, infos légales…) s'affiche sous forme de placeholder
> visible `[À FOURNIR]` et est listée dans le résumé final.

## Objectif

Site vitrine one-page, immersif et moderne, pour le JägerBar, bar sur 3 niveaux
au 136 rue Solférino, Lille.
Objectif principal : générer des **demandes de réservation de groupe et de
privatisation**. Objectif secondaire : présenter les 3 espaces, la carte et les
infos pratiques.

## Public cible

Étudiants (BDE), groupes d'amis, entreprises (afterworks), personnes organisant
un anniversaire. Majorité de consultations **sur smartphone, en soirée** :
le mobile est prioritaire.

## Pages

- `index.html` : one-page avec les sections ci-dessous.
- `mentions-legales.html`
- `confidentialite.html` (politique de confidentialité RGPD + gestion des cookies)

### Sections de index.html (dans l'ordre)

**A. Navigation (header sticky)**
- Enseigne « JägerBar Lille » en texte stylisé (pas de logo de marque, voir Contraintes).
- Ancres : Le Concept, Les Espaces, La Carte, Événements, Privatisation, Accès.
- Bouton principal : « Réserver / Privatiser » → ancre vers le formulaire.
- Au scroll : fond flouté (backdrop blur) et hauteur réduite.
- Mobile : menu burger accessible au clavier.

**B. Hero (plein écran)**
- Accroche : « L'Expérience Givrée au Cœur de Solfé » — **à faire valider par
  legal-reviewer (loi Evin)** ; si jugée risquée, proposer une alternative centrée
  sur le lieu (ex. « Trois niveaux d'ambiance au cœur de Solfé »).
- Sous-titre centré sur le **lieu** : 3 niveaux, cave voûtée, cœur du quartier
  Solférino.
- Deux CTA : « Découvrir la carte » (ancre) et « Réserver un espace » (ancre
  vers le formulaire).
- Badges : « 3 niveaux », « Cave voûtée & DJ sets », « Happy hour 7j/7 »
  (voir règle happy hour dans Contraintes).

**C. Le Concept & Les Espaces**
- Court texte de présentation du lieu `[TEXTE À FOURNIR ou à rédiger, centré sur le lieu]`.
- 3 espaces présentés en onglets animés ou carrousel accessible :
  1. **La Mezzanine** : chaleureuse et intime.
  2. **Le Bar central** : comptoir convivial, écrans.
  3. **La Cave voûtée** : piste de danse sous voûtes, DJ sets, éclairages.
- Une photo par espace : **photos fournies par le client** (voir Assets).

**D. La Carte**
- Onglets : Signatures, Bières pression & bouteilles, Shots, Softs & sans alcool,
  Snacking & planches.
- Chaque carte : nom, composition, prix. Prix inconnus → `[PRIX À FOURNIR]`.
- Contenu **strictement informatif** (loi Evin) : nom, composition, prix, origine.
  Aucun texte associant l'alcool à la fête, la séduction, la performance ou le sport.
- Une catégorie « Softs & sans alcool » visible est obligatoire.
- Mention sanitaire affichée en bas de cette section (en plus du footer).

**E. Événements & Privatisation**
- Types d'événements : anniversaires, BDE, afterworks.
- Capacité : « jusqu'à 250 personnes » `[À CONFIRMER par le client]`.
- Équipements : sono indépendante en cave, jeux de lumières, écrans géants.
- Formulaire de demande de devis :
  Nom, Email, Téléphone, Date souhaitée, Nombre de convives, Espace souhaité
  (liste : Mezzanine / Bar central / Cave voûtée / Plusieurs / Tout le bar), Message.
  - Chaque champ a un `<label>` ; validation côté navigateur + messages d'erreur clairs.
  - Envoi : **lien `mailto:` vers `[EMAIL À FOURNIR]` par défaut** (aucun service
    externe tant que le client n'a pas choisi). systems-dev prépare le code pour
    pouvoir brancher plus tard un service type Formspree.
  - Mention RGPD sous le bouton : finalité (répondre à la demande), destinataire
    (le bar), lien vers la politique de confidentialité.

**F. Infos pratiques & Accès**
- Horaires hebdomadaires : `[HORAIRES À FOURNIR]` (tableau lisible sur mobile,
  aucune plage coupée sur deux lignes).
- Adresse : 136 rue Solférino, 59000 Lille.
- Accès : métro République – Beaux-Arts ; Cormontaigne `[À VÉRIFIER : ligne et sortie]`.
- Carte : **pas d'embed Google Maps**. Image statique de la carte (OpenStreetMap,
  attribution affichée) + bouton « Itinéraire » ouvrant un lien externe.
  Option : carte OpenStreetMap interactive chargée **uniquement au clic**.

**G. Footer**
- Mention sanitaire : « L'abus d'alcool est dangereux pour la santé, à consommer
  avec modération. Vente interdite aux mineurs de moins de 18 ans. »
- Infos légales résumées (dénomination, SIREN, adresse).
- Liens : Mentions légales, Politique de confidentialité, Gestion des cookies.
- Crédits photos si des images sous licence CC-BY sont utilisées.

## Style souhaité

- **Ambiance** : dark mode moderne, underground mais soigné (club / bar à cocktails).
- **Couleurs** (à reporter dans design-system.md, contrastes AA vérifiés) :
  - Fond : vert forêt très sombre `#0B130E`, noir mat `#0D0D0D`
  - Accent / CTA : orange `#FF5500` (ou `#E85D04` si meilleur contraste)
  - Accent secondaire : ambré cuivré `#D4A373`
  - Texte : blanc cassé `#F4F4F9` ; texte secondaire : gris `#8E9297`
    (vérifier ≥ 4,5:1 sur le fond, sinon éclaircir)
- **Typographie** (licence OFL, hébergées localement dans `assets/fonts/`) :
  - Titres : **Bebas Neue**
  - Texte : **Inter** (2 graisses maximum)

### Animations

- Hero : apparition en cascade (fade-up décalé) des textes et CTA ; lueur radiale
  ambrée animée en fond (CSS uniquement, pas de vidéo).
- CTA : survol avec halo ambré, légère translation, `scale(1.03)`.
- Cartes : léger soulèvement au survol + bordure en dégradé (tilt 3D seulement sur
  desktop, désactivé au tactile).
- Scroll : révélation progressive des sections (fade-in + translation Y) via
  IntersectionObserver ; défilement fluide des ancres (`scroll-behavior: smooth`).
- Header : transition blur + réduction de hauteur.
- Espaces : transition douce entre les onglets.
- **Technique** : CSS pur + JavaScript vanilla. GSAP seulement si indispensable,
  hébergé localement. Pas de Tailwind, pas de framework.
- **Toutes les animations respectent `prefers-reduced-motion`** (désactivées ou
  réduites à un simple fondu).

## Contraintes

### Données
- **Rien n'est inventé** : prix, horaires, capacités, textes de présentation,
  coordonnées → placeholder `[À FOURNIR]`.
- **Aucun avis client inventé.** Pas de section avis tant que le client ne fournit
  pas de vrais avis avec autorisation de les publier.

### Marque Jägermeister
- Aucun logo, visuel, bouteille ou charte officielle Jägermeister téléchargé.
- Aucune mention de partenariat ou de « concept officiel » sauf confirmation écrite
  du client `[À CONFIRMER : accord avec la marque ?]`.
- Visuels de marque uniquement s'ils sont fournis par le client avec autorisation.

### Loi Evin (alcool) — à vérifier par legal-reviewer
- Contenu lié à l'alcool : informatif et objectif uniquement.
- L'ambiance (DJ, cave, privatisations) peut être valorisée, mais séparée de la
  présentation des boissons alcoolisées.
- Pas d'association alcool / sport (retransmissions sportives présentées sans
  lien avec les boissons).
- Happy hour : si des boissons alcoolisées sont à prix réduit, indiquer que des
  boissons sans alcool le sont aussi.
- Mention sanitaire présente partout où l'alcool est présenté.

### RGPD / cookies
- Aucun cookie ni traceur non essentiel (pas de Google Analytics, pas de pixel,
  pas de Google Fonts distant, pas d'embed Google Maps / YouTube).
- Si aucun cookie non essentiel : pas de bandeau, mais une section « Cookies »
  dans la politique de confidentialité qui l'explique.

### Assets
- **Photos des 3 espaces et de la façade : fournies par le client**, à déposer
  dans `assets/images/` et à noter « fournie par le client » dans le registre.
  Tant qu'elles manquent : visuels de remplacement neutres (dégradés / illustrations
  SVG aux couleurs du design system) clairement marqués `[PHOTO CLIENT À FOURNIR]`
  dans le résumé final.
- Images d'ambiance complémentaires : uniquement depuis les sources autorisées
  (skill image-sourcing), sans logo de marque visible.

### Qualité
- Mobile-first (390px prioritaire), HTML sémantique, WCAG AA.
- Budget de la skill performance-budget **prioritaire sur les effets visuels**.
- Langue : français.

## Domaine

`[DOMAINE À FOURNIR]` — en attendant : `https://jagerbar-lille.example`
(à remplacer dans canonical, Open Graph et sitemap.xml).

## Infos légales

(nécessaires aux mentions légales — LCEN)
- Dénomination sociale : TCHATCHATEUR
- Forme juridique : `[SARL ou EURL — À CONFIRMER]`
- Capital social : `[À FOURNIR]`
- Nom commercial / enseigne : JAGERBAR
- SIREN : 499 524 742 — SIRET : 499 524 742 00016
- RCS : `[RCS Lille Métropole + numéro — À FOURNIR]`
- Code NAF : 56.30Z (débits de boissons)
- N° de TVA intracommunautaire : `[À FOURNIR]`
- Adresse : 136 rue Solférino, 59000 Lille
- Email / téléphone de contact : `[À FOURNIR]`
- Directeur de la publication : `[À FOURNIR]`
- Hébergeur (nom, adresse, téléphone) : `[À FOURNIR]`

## Horaires

`[HORAIRES À FOURNIR]` (jours, heures d'ouverture, horaires de la happy hour,
jours de fermeture).

## Livraison attendue

Dans le résumé final, lister séparément :
1. Tous les placeholders `[À FOURNIR]` / `[À CONFIRMER]` restants.
2. Les points loi Evin et marque signalés par legal-reviewer.
3. Les photos client manquantes.
