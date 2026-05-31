// ─── CONFIGURATION GLOBALE ─────────────────────────────────────────────────
// Changer baseUrl ici quand vous obtenez votre vrai domaine.
// Mettre à jour également les balises <meta og:url> et <link rel="canonical">
// dans chaque fichier HTML de villes/, matchs/ et bars/.

const CONFIG = {
  baseUrl:  'https://adelinebdq.github.io/sportbar-france',
  ogImage:  'https://adelinebdq.github.io/sportbar-france/og-default.svg',
  siteName: 'SportBar France',
  tagline:  'Trouvez où regarder vos matchs',
};

// Slugs → identifiants internes (pour le routage par paramètre URL)
CONFIG.matchSlugs = {
  'france-senegal':             'wc1',
  'france-irak':                'wc2',
  'france-norvege':             'wc3',
  'france-32e-de-finale':       'wc4',
  'france-quart-de-finale':     'wc5',
  'france-demi-finale':         'wc6',
  'finale-coupe-du-monde-2026': 'wc7',
};

CONFIG.citySlugs = {
  'lille':                   'Lille',
  'marquette-lez-lille':     'Marquette-lez-Lille',
  'courseulles-sur-mer':     'Courseulles-sur-Mer',
  'saint-aubin-sur-mer':     'Saint-Aubin-sur-Mer',
  'langrune-sur-mer':        'Langrune-sur-Mer',
  'luc-sur-mer':             'Luc-sur-Mer',
  'douvres-la-delivrande':   'Douvres-la-Délivrande',
  'caen':                    'Caen',
};
