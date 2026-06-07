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

- `matchs/<slug>.html` — une page par match (ex: `france-senegal.html`)
- `villes/<slug>.html` — une page par ville (ex: `brest.html`)
- `bars/<slug>.html` — une page par bar (ex: `klub-house-brest.html`)

### Données

- **Bars** : tableau `BARS` dans `index.html` (script inline)
- **Équipes/compositions** : objet `COMPOSITIONS` dans `compositions.js`
  - `effectif[]` : 26 joueurs avec numéro, poste, club, âge, sélections
  - `derniereCompo.titulaires[]` : positions en `x/y` (% du terrain SVG, gardien en bas à y≈88)
- **Routing par URL params** : `?ville=brest`, `?match=france-senegal`, `?bar=klub-house-brest`

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

Prochain ID disponible : **88**

Dans le tableau `BARS` de `index.html` :

```js
{
  id: 58,  // incrémenter à chaque ajout
  nom: "Nom du bar",
  ville: "Ville",
  adresse: "Adresse complète",
  sports: ["Football", "Rugby"],  // Football · Rugby · Tennis · Basket · Cyclisme · Formule 1
  note: null, avis: null, ecrans: null,
  horaires: "Voir établissement",
  tel: "02 XX XX XX XX",          // optionnel
  website: "https://...",         // optionnel
  websiteLabel: "🌐 Site web",    // optionnel
  source: "Source : site-officiel.fr (source officielle)",  // OBLIGATOIRE
  lat: 48.8566,
  lng: 2.3522,
  events: ['wc1','wc2','wc3']
}
```

Créer aussi une page `bars/<slug>.html` et ajouter le slug dans `config.js` (`citySlugs`) si nouvelle ville.

**Règles de qualité des données :**
- Champ `source:` obligatoire sur tous les bars — permet de distinguer les données vérifiées
- Géocoder avec Nominatim OSM (rate limit 1 req/sec, User-Agent requis)
- Pas de notes/avis inventés — mettre `null` si inconnu

### Changer de domaine

1. Mettre à jour `CONFIG.baseUrl` dans `config.js`
2. Mettre à jour `<link rel="canonical">` et `<meta og:url>` dans chaque fichier HTML

---

## État du projet — 4 juin 2026

### Dernier commit : Ajout 6 bars Pau + Bayonne (CDM 2026) — Ouverture Sud-Ouest rugby

### Inventaire actuel : 76 bars · 25 villes couvertes

| Ville | Bars | Page `/villes/` |
|-------|------|-----------------|
| Lille | 7 | ✅ `lille.html` |
| La Rochelle | 6 | ✅ `la-rochelle.html` |
| Reims | 6 | ✅ `reims.html` |
| Courseulles-sur-Mer | 6 | ✅ `courseulles-sur-mer.html` |
| Brest | 5 | ✅ `brest.html` |
| Rouen | 5 | ✅ `rouen.html` |
| Luc-sur-Mer | 4 | ✅ `luc-sur-mer.html` |
| Le Havre | 4 | ✅ `le-havre.html` |
| Cherbourg-en-Cotentin | 4 | ✅ `cherbourg-en-cotentin.html` |
| Arras | 3 | ✅ `arras.html` |
| Bayeux | 3 | ✅ `bayeux.html` |
| Boulogne-sur-Mer | 3 | ✅ `boulogne-sur-mer.html` |
| Pau | 3 | ✅ `pau.html` |
| Bayonne | 3 | ✅ `bayonne.html` |
| Biarritz | 2 | ✅ `biarritz.html` |
| Valenciennes | 2 | ✅ `valenciennes.html` |
| Arcachon | 2 | ✅ `arcachon.html` |
| Caen | 1 | ✅ `caen.html` |
| Douvres-la-Délivrande | 1 | ✅ `douvres-la-delivrande.html` |
| Dunkerque | 1 | ✅ `dunkerque.html` |
| Langrune-sur-Mer | 1 | ✅ `langrune-sur-mer.html` |
| Marquette-lez-Lille | 1 | ✅ `marquette-lez-lille.html` |
| Saint-Aubin-sur-Mer | 1 | ✅ `saint-aubin-sur-mer.html` |
| Saint-Jean-de-Luz | 1 | ✅ `saint-jean-de-luz.html` |
| Soorts-Hossegor | 1 | ✅ `soorts-hossegor.html` |

**Hauts-de-France : 6 villes** — Lille · Marquette-lez-Lille · Arras · Boulogne-sur-Mer · Dunkerque · Valenciennes
**Nouvelle-Aquitaine : 6 villes** — Arcachon · Biarritz · Saint-Jean-de-Luz · Soorts-Hossegor · Pau · Bayonne

**IDs utilisés** : 8, 13–87 (gaps 1–7 et 9–12 = anciens bars fictifs supprimés)

### Matchs France CDM 2026 configurés
- `wc1` France — Sénégal · 16 juin 21h
- `wc2` France — Irak · 22 juin 23h
- `wc3` France — Norvège · 26 juin 21h
- `wc4` France — 32e de finale · 2 juillet
- `wc5` France — Quart · 7 juillet
- `wc6` France — Demi · 14 juillet
- `wc7` Finale · 19 juillet

### Prochaines étapes prévues
1. **Google Search Console** — soumettre le sitemap après les ajouts Normandie/Atlantique
