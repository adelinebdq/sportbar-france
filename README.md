# OùMater 🍺⚽

> Trouvez facilement les bars et restaurants qui diffusent des matchs sportifs en France.

## Fonctionnalités

- **Carte interactive** — marqueurs géolocalisés pour chaque bar, colorés selon le sport principal
- **Liste filtrée** — recherche par nom/ville, filtre par sport, tri par note
- **Synchronisation carte ↔ liste** — cliquer un bar centre la carte et ouvre le popup, et vice versa
- **Zéro dépendance back-end** — HTML, CSS et JavaScript vanilla + [Leaflet.js](https://leafletjs.com/) + OpenStreetMap

## Aperçu

| Fonctionnalité | Détail |
|---|---|
| Bars référencés | 12 (données de démo) |
| Villes couvertes | Paris, Marseille, Lyon, Toulouse, Bordeaux, Nice, Nantes, Lille, Strasbourg, Montpellier, Rennes, Rennes |
| Sports disponibles | Football, Rugby, Tennis, Basket, Cyclisme, Formule 1 |

## Lancer le projet en local

Aucune installation requise. Il suffit d'ouvrir le fichier dans un navigateur :

```bash
# Option 1 — ouvrir directement
open index.html

# Option 2 — serveur local (recommandé pour éviter les restrictions CORS)
npx serve .
# ou
python3 -m http.server 8080
```

Puis rendez-vous sur `http://localhost:8080`.

## Structure

```
sportbar-france/
└── index.html   # Application complète (HTML + CSS + JS dans un seul fichier)
```

## Déploiement GitHub Pages

Le site est déployé automatiquement via GitHub Actions à chaque push sur `main`.

URL publique : `https://<votre-username>.github.io/sportbar-france/`

## Ajouter un bar

Les données sont dans le tableau `BARS` au début du bloc `<script>` dans `index.html`. Chaque entrée suit ce format :

```js
{
  id: 13,
  nom: "Nom du bar",
  ville: "Ville",
  adresse: "Adresse complète",
  sports: ["Football", "Rugby"],   // parmi : Football, Rugby, Tennis, Basket, Cyclisme, Formule 1
  note: 4.5,                       // sur 5
  avis: 120,                       // nombre d'avis
  ecrans: 8,                       // nombre d'écrans
  horaires: "Lun–Dim 12h–2h",
  lat: 48.8566,                    // latitude (Google Maps → clic droit → coordonnées)
  lng: 2.3522                      // longitude
}
```

## Technologies

- [Leaflet.js](https://leafletjs.com/) v1.9.4 — carte interactive
- [OpenStreetMap](https://www.openstreetmap.org/) — tuiles cartographiques libres
- HTML5 / CSS3 / JavaScript ES6+ — aucun framework

## Licence

MIT
