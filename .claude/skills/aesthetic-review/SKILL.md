---
name: aesthetic-review
description: Grille de lecture pour juger la cohérence visuelle d'un site à partir de captures d'écran (hiérarchie, contraste, alignement, cohérence, densité). À utiliser pour toute revue esthétique.
---
# Grille de lecture
1. Hiérarchie : l'œil est-il guidé vers l'information la plus importante en
   premier ?
2. Lisibilité : le texte et les éléments interactifs sont-ils lisibles à
   l'œil ? Tu juges une capture d'écran, tu ne peux pas mesurer un
   contraste précis — laisse la mesure exacte (ratio chiffré) au QA via
   Lighthouse ; signale seulement ce qui te semble clairement illisible.
3. Alignement : les éléments suivent-ils une grille cohérente, sans
   décalages non voulus ?
4. Cohérence : mêmes styles de boutons, titres, espacements d'une page à
   l'autre.
5. Densité : ni trop vide (manque de structure), ni trop chargé (manque de
   respiration).

# Points mobiles (capture mobile)
- Menu utilisable (visible ou accessible via un bouton clair, pas coupé).
- Texte principal d'au moins 16px à l'œil (pas de texte minuscule).
- Rien ne déborde horizontalement (pas de scroll latéral involontaire).

# Verdict
- Un problème de lisibilité clairement bloquant, ou un point mobile cassé
  → BLOQUANT.
- Un déséquilibre mineur (espacement, alignement léger) → À AMÉLIORER.
