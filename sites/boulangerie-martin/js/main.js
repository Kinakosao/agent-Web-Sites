/*
 * Boulangerie Martin - scripts du site
 * Aucune dependance externe. Amelioration progressive : sans JS, le tableau
 * d'horaires reste complet et lisible ; le script ne fait qu'ajouter la mise
 * en evidence du jour courant.
 */
(function () {
  'use strict';

  var JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

  function normaliser(texte) {
    return String(texte || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim();
  }

  // Jour courant a l'heure de Lyon (Europe/Paris), repli sur l'heure locale.
  function jourCourant() {
    try {
      var nom = new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        timeZone: 'Europe/Paris'
      }).format(new Date());
      nom = normaliser(nom);
      if (JOURS.indexOf(nom) !== -1) {
        return nom;
      }
    } catch (e) {
      // Intl ou fuseau non supporte : repli ci-dessous.
    }
    return JOURS[new Date().getDay()];
  }

  function surlignerJour() {
    var table = document.querySelector('.hours-table');
    if (!table) {
      return;
    }
    var aujourdhui = jourCourant();
    var lignes = table.querySelectorAll('tbody tr');

    for (var i = 0; i < lignes.length; i++) {
      var th = lignes[i].querySelector('th');
      if (!th || normaliser(th.textContent) !== aujourdhui) {
        continue;
      }
      lignes[i].classList.add('is-today');
      lignes[i].setAttribute('aria-current', 'date');
      if (!th.querySelector('.today-label')) {
        var mention = document.createElement('span');
        mention.className = 'today-label';
        mention.textContent = ' (aujourd’hui)';
        th.appendChild(mention);
      }
      break;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', surlignerJour);
  } else {
    surlignerJour();
  }
})();
