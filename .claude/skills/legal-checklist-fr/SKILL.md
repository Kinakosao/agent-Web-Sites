---
name: legal-checklist-fr
description: Règles légales françaises/UE pour un site web (LCEN, RGPD, cookies CNIL, licences, loi Evin, marques, avis). À utiliser avant toute revue légale d'un site.
---
# Mentions légales (LCEN)
Obligatoires dès qu'un site est public, même vitrine. Pour une société :
- Dénomination sociale, forme juridique, capital social
- Adresse du siège, email et téléphone
- SIREN/SIRET, RCS (ville + numéro), n° de TVA intracommunautaire si applicable
- Directeur de la publication
- Hébergeur : nom, adresse, téléphone
Donnée manquante → placeholder [À FOURNIR] visible = À AMÉLIORER.
Donnée inventée pour un client réel → BLOQUANT.

# RGPD / données personnelles
- Formulaire (contact, devis, newsletter) → mention sous le formulaire :
  finalité, destinataire, durée de conservation, lien vers la politique.
- Politique de confidentialité : données collectées, finalité, durée, droits
  (accès, rectification, suppression), contact, services tiers utilisés
  (ex. service d'envoi de formulaire), journaux de l'hébergeur.
- Formulaire sans mention ou sans politique → BLOQUANT.

# Cookies et services tiers (CNIL)
- Bandeau de consentement obligatoire si cookies/traceurs non essentiels
  (mesure d'audience non exemptée, publicité, pixels, réseaux sociaux).
- Polices : hébergées localement. Chargées depuis fonts.googleapis.com → BLOQUANT.
- Google Maps, YouTube, Instagram intégrés : seulement après consentement ou
  « clic pour charger ». Chargés d'office → BLOQUANT.
- Aucun cookie non essentiel : pas de bandeau, mais l'expliquer dans la
  politique de confidentialité (section « Cookies »).

# Licences (images, polices, icônes)
- Chaque fichier de SITE/assets/ figure dans assets-registry.md, et chaque
  ligne du registre correspond à un fichier existant. Écart → BLOQUANT.
- CC0, Unsplash, Pexels : usage commercial autorisé.
- CC-BY / CC-BY-SA : crédit obligatoire SUR LE SITE (auteur, licence, lien),
  page Crédits ou mentions légales. Crédit absent → BLOQUANT.
- « Fournie par le client » : accepté, noté comme tel dans le registre.
- Polices OFL : fichier de licence présent dans assets/fonts/. Une police
  modifiée ne garde pas son nom d'origine.
- Google Images, Pinterest, sites de presse, sans licence → BLOQUANT.

# Marques
- Aucun logo, visuel ou charte d'une marque tierce sans autorisation du client
  notée dans le brief → BLOQUANT.
- Aucune mention de « partenaire », « officiel », « concept officiel » d'une
  marque sans confirmation dans le brief → BLOQUANT.

# Avis et témoignages
- Avis ou témoignages inventés pour un client réel → BLOQUANT
  (pratique commerciale trompeuse).
- Avis réels uniquement si fournis par le client avec autorisation.

# Loi Evin (sites qui présentent de l'alcool)
- Mention sanitaire sur chaque page présentant de l'alcool :
  « L'abus d'alcool est dangereux pour la santé, à consommer avec modération. »
  + « Vente interdite aux mineurs de moins de 18 ans. » Absente → BLOQUANT.
- Contenu sur les boissons alcoolisées : informatif et objectif uniquement
  (nom, composition, degré, origine, prix, mode de consommation).
- Interdit d'associer l'alcool à : la fête, la séduction, la réussite sociale
  ou sexuelle, le sport, la performance, la jeunesse → BLOQUANT.
- L'ambiance du lieu (DJ, déco, privatisation) peut être valorisée, mais
  séparée de la présentation des boissons alcoolisées.
- Pas de visuel associant des personnes en train de boire à un contexte festif.
- Happy hour : si des boissons alcoolisées sont à prix réduit, les boissons
  sans alcool doivent aussi l'être, et cela doit être indiqué → À AMÉLIORER
  si non mentionné.
- Doute sur une accroche ou un slogan → À AMÉLIORER avec une alternative
  centrée sur le lieu, et recommander une validation par un juriste.

# Limite
Tu repères les problèmes évidents, tu n'es pas un avocat. Pour un client réel,
termine le rapport par : « Mentions légales et textes liés à l'alcool à faire
valider par un professionnel avant mise en ligne. »
