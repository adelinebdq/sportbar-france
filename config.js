// ─── CONFIGURATION GLOBALE ─────────────────────────────────────────────────
// Changer baseUrl ici quand vous obtenez votre vrai domaine.
// Mettre à jour également les balises <meta og:url> et <link rel="canonical">
// dans chaque fichier HTML de villes/, matchs/ et bars/.

const CONFIG = {
  baseUrl:  'https://oumater.fr',
  ogImage:  'https://oumater.fr/og-default.svg',
  siteName: 'OùMater',
  tagline:  'Où regarder un match près de chez moi ?',
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
  'brest':                   'Brest',
  'rouen':                   'Rouen',
  'bayeux':                  'Bayeux',
  'la-rochelle':             'La Rochelle',
  'arras':                   'Arras',
  'boulogne-sur-mer':        'Boulogne-sur-Mer',
  'dunkerque':               'Dunkerque',
  'valenciennes':            'Valenciennes',
  'arcachon':                'Arcachon',
  'biarritz':                'Biarritz',
  'saint-jean-de-luz':       'Saint-Jean-de-Luz',
  'soorts-hossegor':         'Soorts-Hossegor',
  'pau':                     'Pau',
  'bayonne':                 'Bayonne',
  'le-mans':                 'Le Mans',
  'sable-sur-sarthe':        'Sablé-sur-Sarthe',
  'angers':                  'Angers',
  'tours':                   'Tours',
  'orleans':                 'Orléans',
  'mulhouse':                'Mulhouse',
  'colmar':                  'Colmar',
  'belfort':                 'Belfort',
  'marseille':               'Marseille',
  'nice':                    'Nice',
  'toulon':                  'Toulon',
  'avignon':                 'Avignon',
  'asnelles':                'Asnelles',
  'montreal':                'Montréal',
};
