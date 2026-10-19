/* JägerBar Lille : formulaire de réservation / devis (vanilla, sans dépendance).
 * - Validation côté navigateur (Constraint Validation API) avec messages en français.
 * - Envoi par défaut : lien mailto: (aucun service externe).
 * - Mode « endpoint » prêt pour un service type Formspree : renseigner endpoint
 *   et passer mode à 'endpoint' (penser à mettre à jour confidentialite.html#formulaire).
 */
(function () {
  'use strict';

  var FORM_CONFIG = {
    mode: 'mailto',            // 'mailto' (défaut) ou 'endpoint'
    to: '[EMAIL À FOURNIR]',   // adresse de réception (mode mailto)
    endpoint: ''               // ex. URL Formspree (mode endpoint), vide = inactif
  };

  var form = document.getElementById('reservation');
  if (!form) { return; }

  var status = form.querySelector('.form__status');
  var submitBtn = form.querySelector('[type="submit"]');

  var FIELDS = {
    nom: { id: 'champ-nom', label: 'Nom' },
    email: { id: 'champ-email', label: 'Email' },
    telephone: { id: 'champ-telephone', label: 'Téléphone' },
    date: { id: 'champ-date', label: 'Date souhaitée' },
    convives: { id: 'champ-convives', label: 'Nombre de convives' },
    espace: { id: 'champ-espace', label: 'Espace souhaité' },
    message: { id: 'champ-message', label: 'Message' }
  };

  form.setAttribute('novalidate', '');

  /* Date minimale = aujourd'hui (heure locale) */
  function isoToday() {
    var d = new Date();
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  var dateInput = document.getElementById(FIELDS.date.id);
  if (dateInput) { dateInput.min = isoToday(); }

  function isConfigured(value) {
    return Boolean(value) && value.indexOf('À FOURNIR') === -1;
  }

  /* Message d'erreur en français pour un champ, ou '' si valide */
  function errorFor(name, el) {
    var v = el.validity;
    var value = el.value.trim();

    if (el.required && (v.valueMissing || value === '')) {
      if (name === 'espace') { return 'Veuillez choisir un espace.'; }
      if (name === 'date') { return v.badInput ? 'Veuillez saisir une date valide (jj/mm/aaaa).' : 'Veuillez indiquer la date souhaitée.'; }
      return 'Veuillez renseigner le champ « ' + FIELDS[name].label + ' ».';
    }
    switch (name) {
      case 'nom':
        if (value.length < 2) { return 'Votre nom doit contenir au moins 2 caractères.'; }
        if (v.tooLong) { return 'Votre nom ne doit pas dépasser 100 caractères.'; }
        break;
      case 'email':
        if (v.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Veuillez saisir une adresse email valide, par exemple nom@domaine.fr.';
        }
        break;
      case 'telephone':
        var digits = value.replace(/\D/g, '');
        if (!/^[0-9 +.]+$/.test(value)) { return 'Le téléphone ne peut contenir que des chiffres, des espaces, + ou des points.'; }
        if (digits.length < 10 || digits.length > 15) { return 'Veuillez saisir un numéro de téléphone complet (10 chiffres, ou format international).'; }
        break;
      case 'date':
        if (v.badInput) { return 'Veuillez saisir une date valide (jj/mm/aaaa).'; }
        if (el.min && value < el.min) { return 'La date souhaitée ne peut pas être passée.'; }
        break;
      case 'convives':
        if (v.badInput || !/^\d+$/.test(value)) { return 'Veuillez indiquer un nombre entier de convives.'; }
        if (parseInt(value, 10) < 1) { return 'Le nombre de convives doit être au moins 1.'; }
        break;
      case 'message':
        if (value.length > 2000) { return 'Votre message ne doit pas dépasser 2000 caractères.'; }
        break;
    }
    return '';
  }

  function showError(name, el, message) {
    var box = document.getElementById('erreur-' + name);
    if (message) {
      el.setAttribute('aria-invalid', 'true');
      if (box) {
        box.textContent = message;
        box.hidden = false;
        var ids = (el.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
        if (ids.indexOf(box.id) === -1) { ids.push(box.id); el.setAttribute('aria-describedby', ids.join(' ')); }
      }
    } else {
      el.removeAttribute('aria-invalid');
      if (box) { box.textContent = ''; box.hidden = true; }
    }
  }

  function validateField(name) {
    var el = document.getElementById(FIELDS[name].id);
    if (!el) { return true; }
    var message = errorFor(name, el);
    showError(name, el, message);
    return !message;
  }

  function setStatus(message, isError) {
    if (!status) { return; }
    status.textContent = message;
    status.classList.toggle('is-error', Boolean(isError));
  }

  /* Revalidation en direct, seulement après un premier passage sur le champ */
  Object.keys(FIELDS).forEach(function (name) {
    var el = document.getElementById(FIELDS[name].id);
    if (!el) { return; }
    el.addEventListener('blur', function () {
      if (el.value.trim() !== '' || el.dataset.touched) { el.dataset.touched = '1'; validateField(name); }
    });
    el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', function () {
      if (el.getAttribute('aria-invalid') === 'true') { validateField(name); }
    });
  });

  function values() {
    var data = {};
    Object.keys(FIELDS).forEach(function (name) {
      var el = document.getElementById(FIELDS[name].id);
      data[name] = el ? el.value.trim() : '';
    });
    return data;
  }

  function frDate(iso) {
    var p = iso.split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : iso;
  }

  function sendMailto(data) {
    if (!isConfigured(FORM_CONFIG.to)) {
      setStatus('L\'adresse de réception n\'est pas encore configurée : la demande ne peut pas être envoyée pour le moment.', true);
      return;
    }
    var subject = 'Demande de réservation – ' + frDate(data.date);
    var body = Object.keys(FIELDS).map(function (name) {
      var value = name === 'date' ? frDate(data[name]) : data[name];
      return FIELDS[name].label + ' : ' + (value || '-');
    }).join('\r\n');
    window.location.href = 'mailto:' + FORM_CONFIG.to.trim() +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus('Votre messagerie va s\'ouvrir avec la demande préremplie : il vous reste à envoyer l\'email. Si rien ne s\'ouvre, vérifiez qu\'une application de messagerie est configurée.', false);
  }

  function sendEndpoint(data) {
    if (!isConfigured(FORM_CONFIG.endpoint) || !window.fetch) {
      setStatus('L\'envoi en ligne n\'est pas disponible pour le moment. Merci de réessayer plus tard.', true);
      return;
    }
    if (submitBtn) { submitBtn.disabled = true; }
    setStatus('Envoi en cours…', false);
    var payload = new FormData();
    Object.keys(data).forEach(function (k) { payload.append(k, data[k]); });
    payload.append('_subject', 'Demande de réservation – ' + frDate(data.date));
    fetch(FORM_CONFIG.endpoint, { method: 'POST', body: payload, headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) { throw new Error('HTTP ' + res.status); }
        form.reset();
        if (dateInput) { dateInput.min = isoToday(); }
        setStatus('Merci, votre demande a bien été envoyée. Nous vous répondrons dès que possible.', false);
      })
      .catch(function () {
        setStatus('Une erreur est survenue lors de l\'envoi. Vérifiez votre connexion puis réessayez.', true);
      })
      .then(function () { if (submitBtn) { submitBtn.disabled = false; } });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstInvalid = null;
    var count = 0;
    Object.keys(FIELDS).forEach(function (name) {
      if (!validateField(name)) {
        count++;
        if (!firstInvalid) { firstInvalid = document.getElementById(FIELDS[name].id); }
      }
    });
    if (firstInvalid) {
      setStatus(count === 1 ? 'Le formulaire contient 1 erreur. Merci de la corriger.'
        : 'Le formulaire contient ' + count + ' erreurs. Merci de les corriger.', true);
      firstInvalid.focus();
      return;
    }
    var data = values();
    if (FORM_CONFIG.mode === 'endpoint') { sendEndpoint(data); }
    else { sendMailto(data); }
  });
})();
