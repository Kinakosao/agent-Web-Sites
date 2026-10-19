# Revue légal — 2026-10-19 (seconde revue, après corrections)
Verdict : VALIDÉ

Périmètre relu : index.html, mentions-legales.html, confidentialite.html, workspace/assets-registry.md, workspace/brief.md, présence des fichiers de assets/ (Glob).
Limite : le dossier assets/images/ est refusé à ce reviewer par les permissions (Glob et Read). Non vérifiable ici ; confirmé par QA (workspace/reviews/qa.md : carte 114 564 o, mobile 43 172 o, OG 56 919 o) et par systems-dev. Ce point n'est pas classé BLOQUANT et n'est pas compté ci-dessous.

| gravité | fichier | problème | correction proposée |
|---------|---------|----------|----------------------|
| À AMÉLIORER | index.html l.83, l.84, l.107 ; mentions-legales.html ; confidentialite.html ; brief | « Solfé » dans le h1 (l.83) alors que l'adresse et le quartier sont « Solférino » ailleurs (title l.6, meta, JSON-LD, adresse). Décision de l'orchestrateur : « Solfé » vient du brief, signalé au client. | Confirmer l'orthographe avec le client, puis harmoniser sur tout le site. |
| À AMÉLIORER | index.html l.92 (badge), l.94 (hero__note), l.386 (ligne Happy hour) | Badge « Happy hour 7j/7 » : promotion de prix sur l'alcool, horaires non confirmés. La mention « boissons sans alcool également à prix réduit » reste en [À CONFIRMER]. Décision de l'orchestrateur : signalé au client. | Retirer « 7j/7 » tant que les horaires ne sont pas confirmés. Une fois confirmé, écrire dans la même phrase que la happy hour que les boissons sans alcool sont aussi à prix réduit. Faire valider par un juriste. |
| À AMÉLIORER | index.html l.310 (action mailto) ; l.357 (noscript) | Destination du formulaire : action mailto:[EMAIL À FOURNIR]. Le noscript ajouté (l.357) règle le message sans JavaScript, mais l'adresse reste un placeholder. | Renseigner l'adresse de réception à la livraison (le formulaire n'a pas de destination tant que le placeholder est là). |
| À AMÉLIORER | mentions-legales.html l.70, 71, 75, 77, 79, 80, 86, 92-94 | Placeholders LCEN : forme juridique (SARL ou EURL), capital social, RCS, n° TVA, email et téléphone de contact, directeur de la publication, hébergeur (nom, adresse, téléphone). Dénomination, SIREN et SIRET renseignés (clés de Luhn valides). | Compléter avant mise en ligne réelle. |
| À AMÉLIORER | confidentialite.html l.72, l.85, l.95 ; mentions-legales.html l.79 | Email de contact et d'exercice des droits non renseigné (placeholders). | Renseigner l'adresse, la même que celle des mentions légales et du formulaire. |
| À AMÉLIORER | confidentialite.html l.81 | Base légale : [BASE LÉGALE À VALIDER]. Piste cohérente avec le texte : mesures précontractuelles (RGPD art. 6.1.b). | Valider la base légale et retirer le placeholder. |
| À AMÉLIORER | confidentialite.html l.90 | Durée de conservation : [DURÉE À CONFIRMER]. | Renseigner la durée (ex. « 12 mois après le dernier échange », à valider par le client). |
| À AMÉLIORER | confidentialite.html l.66-74 (Responsable du traitement) et section Cookies | Hébergeur non identifié et journaux de connexion de l'hébergeur non mentionnés (exigés par la skill). | Ajouter la phrase sur les journaux de l'hébergeur et son identité dès qu'elle est fournie. |
| À AMÉLIORER | index.html l.442 ; mentions-legales.html l.113 | Crédits photos : [CRÉDITS PHOTOS À FOURNIR] (photos client attendues). | Compléter à réception, avec la mention « fournie par le client » dans le registre. |
| À AMÉLIORER | assets/fonts/bebas-neue-400.woff2, inter-400.woff2, inter-600.woff2 | Polices modifiées (sous-ensemble, instance Inter wght 400 / opsz 14) gardant leur nom d'origine. La skill indique qu'une police modifiée ne garde pas son nom. Fichiers OFL présents (vérifié par Glob). Reserved Font Name non vérifié. | Lire OFL-bebas-neue.txt et OFL-inter.txt ; renommer les polices modifiées (ex. « Bebas Neue Site », « Inter Site ») et retirer les noms d'origine. |
| À AMÉLIORER | index.html l.108, 196, 153, 167, 182, 210-250, 287, 379-386, 398 | Placeholders de contenu : texte de concept, carte complète (noms, compositions, origines, prix), capacités des 3 espaces, « Jusqu'à 250 personnes » à confirmer, horaires, ligne et sortie Cormontaigne. | Remplir à réception. Faire relire la carte par un juriste : informatif uniquement, aucun lien alcool / fête, séduction, sport. |
| À AMÉLIORER | index.html (nom « JägerBar », palette, typo) ; mentions-legales.html l.101 | Risque de confusion avec la marque Jägermeister : nom proche, palette vert très sombre et orange proche. Aucun logo ni mention de partenariat trouvé (conforme). Mention « [À CONFIRMER : accord avec la marque ?] » toujours présente. | Obtenir du client une confirmation écrite de l'absence de lien avec la marque ; vérifier la disponibilité du nom (INPI) ; ne pas reprendre les couleurs ou la typographie de la marque à l'identique. |

Corrections vérifiées (sans rang de gravité) :
- h1 index.html l.83 : « L'Expérience Givrée » remplacé par « Trois niveaux d'ambiance au cœur de Solfé ». Plus aucune occurrence de « givrée » dans les trois pages. Résolu. Validation juridique finale de l'accroche recommandée.
- « enseigne indépendante » : absente de index.html, mentions-legales.html et confidentialite.html. Résolu.
- Noscript du formulaire (index.html l.357) : ajouté, avec la mention « Écrivez-nous directement à ». Résolu côté message ; la destination reste un placeholder (voir ligne formulaire).

Contrôles conformes (sans rang de gravité) :
- Polices : hébergées dans assets/fonts/ ; aucune requête vers fonts.googleapis.com ni autre CDN dans les trois pages ni dans les CSS/JS lus.
- Fichiers présents (Glob) : assets/fonts/ (3 woff2, OFL-bebas-neue.txt, OFL-inter.txt), assets/icons/ (sprite.svg, favicon.svg, apple-touch-icon.png, LICENSE-lucide.txt). Tous déclarés dans le registre. Fichiers assets/images/ : non vérifiables ici (voir note), déclarés dans le registre avec source, licence et auteur.
- Licences : Lucide (ISC) crédité dans mentions-legales.html l.111 ; OSM (ODbL ; rendu CC BY-SA 2.0) crédité sur index.html l.411 et l.442, mentions-legales.html l.107 et l.144, avec lien. Usage commercial autorisé pour toutes les lignes du registre.
- Carte : pas d'embed Google Maps ; l'« Itinéraire » est un lien sortant (index.html l.412), décrit dans confidentialite.html (Liens externes). Aucun script tiers chargé.
- Cookies : aucun traceur ni script tiers détecté ; pas de bandeau requis ; section Cookies présente dans confidentialite.html l.99-103.
- RGPD formulaire : mention sous le bouton (index.html l.360) avec finalité, destinataire et lien vers la politique. Durée de conservation dans la politique.
- Mention sanitaire exacte : footer des trois pages et section Carte (index.html l.252-255).
- Aucun texte associant l'alcool au sport, à la fête ou à la séduction dans les pages lues. Ambiance (DJ sets, cave) séparée des boissons.
- Mentions légales : éditeur, SIREN, SIRET, NAF, adresse, CNIL citée dans la politique.

Mentions légales et textes liés à l'alcool à faire valider par un professionnel avant mise en ligne.
