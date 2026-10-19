---
name: design-system
description: Comment lire et appliquer SITE/workspace/design-system.md (variables CSS, grille, espacements). À utiliser avant d'écrire ou de juger toute mise en page ou tout style.
---
# Lecture
- Le design system vit dans SITE/workspace/design-system.md : couleurs,
  typographie, espacements, composants.
- Ne redéfinis jamais une variable ailleurs ; si une valeur manque, utilise
  la valeur existante la plus proche et signale-le dans ta réponse finale
  (un sous-agent ne peut pas poser de question en cours de tâche).

# Application
- Toute couleur, taille de police ou espacement utilisé dans le CSS doit
  venir d'une variable du design system (custom properties CSS).
- La grille et les points de rupture (breakpoints) définis dans le design
  system sont la seule source de vérité pour le responsive.
- Un composant répété (carte, bouton, bandeau) suit la définition de
  SITE/workspace/design-system.md, pas une réinvention locale.
