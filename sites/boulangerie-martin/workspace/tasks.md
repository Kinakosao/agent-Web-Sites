# Tâches

Statut du site : livré

| id | tâche | agent | dépend de | statut |
|----|-------|-------|-----------|--------|
| T1 | Plan du site + design-system.md | architect | - | fait |
| T2 | Images (hero, atelier), icônes SVG, favicon, police Lora, registre des licences | asset-maker | T1 | fait |
| T3 | index.html, mentions-legales.html, css/main.css | frontend-dev | T1, T2 | fait |
| T3b | js/main.js (jour courant), sitemap.xml, robots.txt | systems-dev | T3 | fait |
| T4 | Revues légale, esthétique, QA | legal-reviewer, aesthetic-reviewer, qa-reviewer | T3b | fait |
| T5a | Correction À AMÉLIORER : illustration atelier, registre (LICENSE), police Lora (nom réservé) | asset-maker | T4 | fait |
| T5b | Correction À AMÉLIORER : CSS/HTML/mentions légales | frontend-dev | T5a | fait |
| T5c | Revérification par les reviewers concernés | legal/aesthetic/qa | T5b | fait |
