---
name: review-report-format
description: Format commun des rapports de revue (verdict, tableau par gravité). À utiliser par tous les agents reviewers pour rendre leur rapport.
---
# Format commun des rapports de revue

Écris ce format avec Write dans SITE/workspace/reviews/<legal|aesthetic|qa>.md.
Ta réponse finale ne contient que : Verdict + nombre de points par gravité.

```
# Revue <légal | esthétique | QA> — <date>
Verdict : VALIDÉ | À CORRIGER

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| BLOQUANT | index.html | Image sans licence | Remplacer ou documenter |
| À AMÉLIORER | css/main.css | Contraste du bouton 3,1:1 | Foncer à 4,5:1 |
```

# Règles
- Chemins relatifs au dossier du site (SITE/), jamais préfixés par le nom
  du dossier site (ex. index.html, pas sites/<nom>/index.html).
- Échelle de gravité :
  - BLOQUANT si :
    - une information essentielle (horaires, contact, adresse) est
      illisible, coupée ou cachée ;
    - le registre et les fichiers de assets/ ne correspondent pas (fichier
      absent ou non déclaré) ;
    - un lien est cassé, ou un score Lighthouse est sous le seuil
      (perf/a11y).
  - À AMÉLIORER : tout le reste (finitions visuelles, suggestions).
- Un BLOQUANT empêche la livraison ; l'orchestrateur renvoie la tâche au
  producteur.
- Un À AMÉLIORER n'empêche pas la livraison mais doit être noté (l'orchestrateur
  lance une passe de correction groupée).
- Verdict VALIDÉ seulement si aucun BLOQUANT.
