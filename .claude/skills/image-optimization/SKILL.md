---
name: image-optimization
description: Règles et script pour optimiser les images (conversion WebP, tailles responsive, compression). À utiliser après tout téléchargement ou création d'image, avant de l'enregistrer dans assets/images/.
---
# Formats
- Convertis en WebP sauf pour les SVG.
- Le script déplace automatiquement les originaux dans un dossier
  SITE/workspace/originaux/ (jamais publié, jamais supprimés, utile pour la trace légale) : n'y touche
  pas manuellement.

# Tailles
- Le script génère automatiquement, pour chaque image convertie, une
  variante mobile <nom>-mobile.webp (largeur ~640px) en plus du .webp
  pleine taille.

# Compression
- Utilise scripts/optimize-images.sh : il prend un dossier en argument et
  traite toutes les images dedans en une fois (conversion WebP + variante
  mobile + rangement des originaux).
- N'appelle jamais l'outil de compression (ImageMagick) image par image ou
  à la main : passe toujours par le script.

# Nommage
- kebab-case, cohérent avec la skill image-sourcing.
