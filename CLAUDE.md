# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Lancer le projet en local

Aucune dépendance à installer. Deux options :

```bash
# Ouvrir directement (peut avoir des restrictions CORS)
open index.html

# Serveur local recommandé
npx serve .
# ou
python3 -m http.server 8080
```

Le site est ensuite accessible sur `http://localhost:8080`.

## Déploiement

Push sur `main` → GitHub Actions déploie automatiquement sur GitHub Pages (`https://adelinebdq.github.io/sportbar-france/`). Voir `.github/workflows/deploy.yml`.

## Architecture

Site statique vanilla (zéro framework, zéro build). Toutes les pages partagent la même base HTML + CSS inline + JS inline.

### Fichiers principaux

| Fichier | Rôle |
|---|---|
| `index.html` | Application principale : carte Leaflet/OSM, liste des bars, filtres, thème clair/sombre |
| `compositions.html` | Hub des compositions d'équipes (liste des équipes) |
| `compositions.js` | **Source de vérité des données** : effectifs, compositions tactiques (x/y en % SVG), résultats |
| `config.js` | `baseUrl`, mapping `matchSlugs` → ID interne, `citySlugs` |

### Pages générées manuellement

- `matchs/<slug>.html` — une page par match (ex: `france-etats-unis.html`)
- `villes/<slug>.html` — une page par ville (ex: `lille.html`)
- `bars/<slug>.html` — une page par bar (ex: `aux-enfants-terribles.html`)

### Données

- **Bars** : tableau `BARS` dans `index.html` (script inline)
- **Équipes/compositions** : objet `COMPOSITIONS` dans `compositions.js`
  - `effectif[]` : 26 joueurs avec numéro, poste, club, âge, sélections
  - `derniereCompo.titulaires[]` : positions en `x/y` (% du terrain SVG, gardien en bas à y≈88)
- **Routing par URL params** : `?ville=lille`, `?match=france-etats-unis`, `?bar=aux-enfants-terribles`

### Mettre à jour les compositions

Après chaque match ou convocation officielle, éditer `compositions.js` :

```js
// Changer la composition titulaire
derniereCompo.titulaires  // modifier x/y pour repositionner sur le terrain
derniereCompo.score       // remplir après le match, ex: "2-1"

// Changer l'effectif
effectif[]  // ajouter/retirer des joueurs
```

Les données sont indicatives (coupure connaissance août 2025) — toujours vérifier sur `fff.fr` avant publication.

### Ajouter un bar

Dans le tableau `BARS` de `index.html` :

```js
{
  id: <prochain_id>,
  nom: "Nom du bar",
  ville: "Ville",
  adresse: "Adresse complète",
  sports: ["Football", "Rugby"],  // Football · Rugby · Tennis · Basket · Cyclisme · Formule 1
  note: 4.5,      // sur 5
  avis: 120,
  ecrans: 8,
  horaires: "Lun–Dim 12h–2h",
  lat: 48.8566,
  lng: 2.3522
}
```

Créer aussi une page `bars/<slug>.html` correspondante.

### Changer de domaine

1. Mettre à jour `CONFIG.baseUrl` dans `config.js`
2. Mettre à jour `<link rel="canonical">` et `<meta og:url>` dans chaque fichier HTML (`index.html`, `compositions.html`, `matchs/*.html`, `villes/*.html`, `bars/*.html`)
