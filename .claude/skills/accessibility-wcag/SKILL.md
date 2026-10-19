---
name: accessibility-wcag
description: Checklist d'accessibilité WCAG AA (textes alternatifs, contrastes, navigation clavier). À utiliser pour toute revue QA ou avant de livrer une page.
---
# Checklist WCAG AA
- Texte alternatif pertinent sur chaque image porteuse de sens ; alt="" sur
  les images décoratives.
- Contraste texte/fond ≥ 4,5:1 (texte courant), ≥ 3:1 (grand texte, icônes
  actives).
- Navigation complète au clavier (tab, entrée) : pas de piège de focus, un
  indicateur de focus visible.
- Formulaires : chaque champ a un label associé.
- Structure de titres logique (h1 unique, pas de saut de niveau).
- Lien d'évitement (« Aller au contenu ») en premier élément du `<body>`,
  ciblant `#main`.
- Respecte `prefers-reduced-motion` : désactive ou réduit les animations
  CSS pour les utilisateurs qui le demandent.
- Zones cliquables (boutons, liens, champs) d'au moins 44×44px.
