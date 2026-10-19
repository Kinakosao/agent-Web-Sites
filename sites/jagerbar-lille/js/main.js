/* JägerBar Lille : interactions de la page d'accueil (vanilla, sans dépendance). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktopNav = window.matchMedia('(min-width: 1024px)');
  var body = document.body;

  /* 1. Header compact au scroll (sentinelle en haut de page) */
  var header = document.querySelector('[data-header]');
  var sentinel = document.querySelector('[data-sentinel]');
  if (header && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-compact', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* 2. Menu burger accessible */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  var nav = document.querySelector('.site-nav');
  var navLabel = document.querySelector('[data-nav-label]');

  function setMenu(open, returnFocus) {
    toggle.setAttribute('aria-expanded', String(open));
    navLabel.textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
    body.classList.toggle('menu-open', open);
    if (!open && returnFocus) { toggle.focus(); }
  }

  if (toggle && menu && nav && navLabel) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) { setMenu(false); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
    nav.addEventListener('focusout', function (event) {
      if (event.relatedTarget && !nav.contains(event.relatedTarget)) { setMenu(false); }
    });
    var onBreakpoint = function (event) { if (event.matches) { setMenu(false); } };
    if (desktopNav.addEventListener) { desktopNav.addEventListener('change', onBreakpoint); }
    else { desktopNav.addListener(onBreakpoint); }
  }

  /* 3. Onglets ARIA (Espaces et Carte) */
  function initTabs(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var list = root.querySelector('[role="tablist"]');
    var panels = tabs.map(function (tab) { return document.getElementById(tab.getAttribute('aria-controls')); });

    function select(index, focus) {
      tabs.forEach(function (tab, i) {
        var active = i === index;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        if (panels[i]) { panels[i].hidden = !active; }
      });
      var current = tabs[index];
      if (focus) { current.focus({ preventScroll: true }); }
      /* Ramène l'onglet actif dans la vue sans faire défiler la page */
      var left = current.offsetLeft - list.offsetLeft;
      if (left < list.scrollLeft || left + current.offsetWidth > list.scrollLeft + list.clientWidth) {
        list.scrollTo({
          left: left - (list.clientWidth - current.offsetWidth) / 2,
          behavior: reduceMotion.matches ? 'auto' : 'smooth'
        });
      }
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i, false); });
      tab.addEventListener('keydown', function (event) {
        var next = null;
        if (event.key === 'ArrowRight') { next = (i + 1) % tabs.length; }
        else if (event.key === 'ArrowLeft') { next = (i - 1 + tabs.length) % tabs.length; }
        else if (event.key === 'Home') { next = 0; }
        else if (event.key === 'End') { next = tabs.length - 1; }
        if (next !== null) { event.preventDefault(); select(next, true); }
      });
    });

    var initial = tabs.findIndex(function (tab) { return tab.getAttribute('aria-selected') === 'true'; });
    select(initial < 0 ? 0 : initial, false);
  }
  document.querySelectorAll('[data-tabs]').forEach(initTabs);

  /* 4. Révélation au scroll */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      reveals.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* 5. Tilt 3D des cartes événements (souris uniquement) */
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (finePointer.matches && !reduceMotion.matches) {
    var tiltMax = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tilt-max')) || 6;
    document.querySelectorAll('.card--tilt').forEach(function (card) {
      var frame = null;
      card.addEventListener('pointermove', function (event) {
        if (event.pointerType !== 'mouse') { return; }
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        if (frame) { cancelAnimationFrame(frame); }
        frame = requestAnimationFrame(function () {
          card.style.transform = 'perspective(60rem) rotateX(' + (-y * 2 * tiltMax).toFixed(2) +
            'deg) rotateY(' + (x * 2 * tiltMax).toFixed(2) + 'deg) translateY(-4px)';
        });
      });
      card.addEventListener('pointerleave', function () {
        if (frame) { cancelAnimationFrame(frame); }
        card.style.transform = '';
      });
    });
  }

  /* 6. Lien de navigation actif */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav__link'));
  if (links.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (link) {
          if (link.getAttribute('href') === '#' + entry.target.id) { link.setAttribute('aria-current', 'true'); }
          else { link.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    links.forEach(function (link) {
      var section = document.querySelector(link.getAttribute('href'));
      if (section) { sectionObserver.observe(section); }
    });
    var hero = document.querySelector('[data-hero]');
    if (hero) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { links.forEach(function (link) { link.removeAttribute('aria-current'); }); }
      }, { rootMargin: '-40% 0px -55% 0px' }).observe(hero);
    }
  }

  /* 7. Barre CTA mobile : après le hero, masquée sur le formulaire */
  var cta = document.querySelector('[data-mobile-cta]');
  var heroEl = document.querySelector('[data-hero]');
  var form = document.getElementById('reservation');
  if (cta && heroEl && form && 'IntersectionObserver' in window) {
    var state = { hero: true, form: false };
    var update = function () { cta.classList.toggle('is-visible', !state.hero && !state.form); };
    new IntersectionObserver(function (entries) { state.hero = entries[0].isIntersecting; update(); }).observe(heroEl);
    new IntersectionObserver(function (entries) { state.form = entries[0].isIntersecting; update(); }).observe(form);
  }

  /* 8. Jour courant dans le tableau des horaires */
  var today = document.querySelector('.hours-table tr[data-day="' + new Date().getDay() + '"]');
  if (today) { today.classList.add('is-today'); }
})();
