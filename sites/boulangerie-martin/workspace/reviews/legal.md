# Revue légale — 2026-10-19
Verdict : VALIDÉ

Revérification ciblée après correction. Les trois points À AMÉLIORER de la revue précédente sont traités ou documentés, aucun BLOQUANT. Les données légales du brief sont fictives (maquette) : non bloquant, à remplacer avant mise en ligne.

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| À AMÉLIORER | index.html, mentions-legales.html, workspace/brief.md | Données légales fictives (raison sociale, SIREN/SIRET, TVA, RCS, hébergeur, téléphones, domaine .example, directeur). | Remplacer par les vraies données avant mise en ligne (pages, pied de page, canonical/og, sitemap). |
| À AMÉLIORER | workspace/assets-registry.md (Lora), assets/fonts/lora-400.woff2, assets/fonts/lora-700.woff2 | Lora est un Reserved Font Name (OFL cl. 3) ; les woff2 modifiés conservent le nom « Lora ». L'exception est documentée dans le registre, mais non levée. | Renommer la famille (ex. « Lora Boulangerie ») ou obtenir l'accord de l'auteur avant mise en ligne. |
| À AMÉLIORER | workspace/assets-registry.md (atelier.webp, atelier-mobile.webp) | Auteur d'origine de l'illustration « à confirmer par le responsable du projet » ; outil de génération non documenté. Source vérifiée : workspace/originaux/atelier-illustration-v2.svg présent. | Confirmer l'auteur et l'outil, et compléter la ligne du registre. |

## Vérifications effectuées
- RCS : « RCS Lyon B 123 456 789 » présent dans mentions-legales.html (bloc éditeur), cohérent avec brief.md. Corrigé.
- Données personnelles : mentions-legales.html couvre désormais les journaux techniques de l'hébergeur (adresse IP) et la transmission de l'IP vers OpenStreetMap au clic sur le lien. Corrigé.
- Registre : LICENSE-Lora-OFL.txt listé (ligne dédiée, licence SIL OFL 1.1). Corrigé.
- Source atelier : workspace/originaux/atelier-illustration-source.svg et workspace/originaux/atelier-illustration-v2.svg existent (Glob). Corrigé.
- Correspondance registre / assets/ : les 14 fichiers de assets/ (2 WebP hero, 2 WebP atelier, 7 SVG icônes, 2 woff2, 1 LICENSE) figurent dans le registre. Aucun fichier absent ou non déclaré.
- Licences : Unsplash (Patrick Tomasso) crédité dans mentions-legales.html ; illustrations et icônes en création originale ; aucune image CC-BY.
- Polices : @font-face locaux dans css/main.css (assets/fonts/), précharge locale dans index.html, aucune requête vers fonts.googleapis.com ni autre CDN.
- Tiers : aucune iframe ni script externe ; OpenStreetMap en simple lien sortant ; js/main.js sans dépendance externe.
- Cookies : aucun cookie ni traceur, aucun formulaire : pas de bandeau CNIL requis.
- Mentions LCEN : raison sociale, forme, capital, SIREN/SIRET, TVA, siège, contact, directeur de publication et hébergeur présents.
- Non vérifié : métadonnées internes des woff2 et des WebP ; originaux de workspace/ non lus (contrôle par Glob uniquement).
