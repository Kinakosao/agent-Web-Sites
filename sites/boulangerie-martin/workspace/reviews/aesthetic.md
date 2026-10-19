# Revue esthétique — 2026-10-19
Verdict : VALIDÉ

Revérification ciblée (index.html, mentions-legales.html ; 320, 360, 390, 1440 px ; script Playwright scratchpad/m.js). Le BLOQUANT précédent est levé : scrollWidth = clientWidth sur les 8 combinaisons (aucun défilement horizontal). Le tableau d'horaires est entier à 320 px (bord droit 308 px), y compris la ligne du jour courant « Lundi (aujourd'hui) — Fermé ». L'e-mail tient sur une ligne et le lien OpenStreetMap n'est pas tronqué. Captures desktop et mobile régénérées : pas de régression.

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| À AMÉLIORER | index.html / css/main.css | L'e-mail de la section Contact est en gras et plus petit que le texte voisin, sur mobile (~12-13 px à l'œil) : lisible mais moins confortable que le reste. | Porter la taille à 16 px si la largeur le permet (ou autoriser le retour à la ligne après « @ »). |
| À AMÉLIORER | mentions-legales.html | L'e-mail (Éditeur et paragraphe Données personnelles) est rendu en police nettement plus petite que le corps (~13 px) sur mobile. | Aligner sur la taille du corps (16 px) ; il tient à 320 px à vérifier après changement. |
