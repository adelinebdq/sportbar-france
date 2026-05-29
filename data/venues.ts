export type Sport = 'football' | 'rugby' | 'tennis' | 'basketball' | 'cyclisme' | 'formule1' | 'mma';

export interface Match {
  id: string;
  sport: Sport;
  title: string;
  teams?: string;
  date: string;
  time: string;
  competition: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  lat: number;
  lng: number;
  sports: Sport[];
  matches: Match[];
  openingHours: string;
  phone: string;
  description: string;
  imageUrl: string;
  screens: number;
  rating: number;
}

export const SPORTS_LABELS: Record<Sport, string> = {
  football: 'Football',
  rugby: 'Rugby',
  tennis: 'Tennis',
  basketball: 'Basketball',
  cyclisme: 'Cyclisme',
  formule1: 'Formule 1',
  mma: 'MMA / UFC',
};

export const SPORTS_ICONS: Record<Sport, string> = {
  football: '⚽',
  rugby: '🏉',
  tennis: '🎾',
  basketball: '🏀',
  cyclisme: '🚴',
  formule1: '🏎️',
  mma: '🥊',
};

export const venues: Venue[] = [
  // Paris
  {
    id: '1',
    name: 'Le Penalty',
    address: '12 Rue de la Paix',
    city: 'Paris',
    postalCode: '75001',
    lat: 48.8698,
    lng: 2.3316,
    sports: ['football', 'rugby', 'basketball'],
    openingHours: 'Lun-Ven 11h-2h | Sam-Dim 10h-3h',
    phone: '01 42 36 78 90',
    description: 'Le bar sportif incontournable du centre de Paris. 8 écrans géants, ambiance électrique pour tous les grands matchs.',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80',
    screens: 8,
    rating: 4.5,
    matches: [
      { id: 'm1', sport: 'football', title: 'Paris SG vs Marseille', teams: 'PSG - OM', date: '2026-06-01', time: '21:00', competition: 'Ligue 1' },
      { id: 'm2', sport: 'rugby', title: 'France vs Angleterre', teams: 'FRA - ENG', date: '2026-06-03', time: '16:00', competition: 'Tournoi des 6 Nations' },
      { id: 'm3', sport: 'basketball', title: 'Finale NBA', teams: 'Celtics - Lakers', date: '2026-06-05', time: '02:00', competition: 'NBA Finals' },
    ],
  },
  {
    id: '2',
    name: "O'Sullivan's Pub",
    address: '1 Boulevard Montmartre',
    city: 'Paris',
    postalCode: '75002',
    lat: 48.8717,
    lng: 2.3456,
    sports: ['football', 'rugby', 'tennis', 'formule1'],
    openingHours: 'Tous les jours 12h-3h',
    phone: '01 55 26 88 88',
    description: "Pub irlandais authentique avec retransmission de tous les sports. L'adresse préférée des expats pour les matchs de Premier League.",
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80',
    screens: 6,
    rating: 4.3,
    matches: [
      { id: 'm4', sport: 'football', title: 'Manchester City vs Arsenal', teams: 'MCI - ARS', date: '2026-06-02', time: '17:30', competition: 'Premier League' },
      { id: 'm5', sport: 'formule1', title: 'Grand Prix de Monaco', date: '2026-06-07', time: '15:00', competition: 'Formule 1' },
      { id: 'm6', sport: 'tennis', title: 'Roland Garros - Finale', date: '2026-06-08', time: '15:00', competition: 'Roland Garros' },
    ],
  },
  {
    id: '3',
    name: 'Le Ballon Rond',
    address: '45 Avenue des Ternes',
    city: 'Paris',
    postalCode: '75017',
    lat: 48.8789,
    lng: 2.2987,
    sports: ['football', 'cyclisme'],
    openingHours: 'Lun-Dim 10h-1h',
    phone: '01 44 09 55 20',
    description: 'Spécialiste football et Tour de France. Terrasse chauffée, bières artisanales et tapas maison.',
    imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&q=80',
    screens: 4,
    rating: 4.1,
    matches: [
      { id: 'm7', sport: 'football', title: 'Real Madrid vs FC Barcelone', teams: 'RMA - BAR', date: '2026-06-04', time: '21:00', competition: 'Liga' },
      { id: 'm8', sport: 'cyclisme', title: 'Tour de France - Étape 12', date: '2026-06-06', time: '14:00', competition: 'Tour de France' },
    ],
  },
  {
    id: '4',
    name: 'Sport & Bière',
    address: '8 Rue Oberkampf',
    city: 'Paris',
    postalCode: '75011',
    lat: 48.8643,
    lng: 2.3694,
    sports: ['football', 'basketball', 'mma'],
    openingHours: 'Mar-Dim 16h-3h',
    phone: '01 48 07 22 14',
    description: 'Le repaire des fans de sport urbain. Spécialiste NBA, foot américain et soirées UFC en direct.',
    imageUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80',
    screens: 5,
    rating: 4.4,
    matches: [
      { id: 'm9', sport: 'mma', title: 'UFC 302 - Jonnes vs Aspinall', date: '2026-06-03', time: '03:00', competition: 'UFC' },
      { id: 'm10', sport: 'basketball', title: 'EuroLeague - Final Four', date: '2026-06-05', time: '20:30', competition: 'EuroLeague' },
    ],
  },
  // Lyon
  {
    id: '5',
    name: 'Le Bouchon des Sports',
    address: '23 Rue Mercière',
    city: 'Lyon',
    postalCode: '69002',
    lat: 45.7583,
    lng: 4.8325,
    sports: ['football', 'rugby', 'cyclisme'],
    openingHours: 'Lun-Dim 11h-2h',
    phone: '04 78 37 45 62',
    description: "Bouchon lyonnais revisité en bar sportif. Cuisine du terroir et grand écran 180 pouces pour l'OL et le Top 14.",
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
    screens: 3,
    rating: 4.6,
    matches: [
      { id: 'm11', sport: 'football', title: 'Lyon vs Monaco', teams: 'OL - ASM', date: '2026-06-01', time: '20:00', competition: 'Ligue 1' },
      { id: 'm12', sport: 'rugby', title: 'Lyon OU vs Toulouse', teams: 'LOU - ST', date: '2026-06-07', time: '17:00', competition: 'Top 14' },
    ],
  },
  {
    id: '6',
    name: 'Stadium Bar Lyon',
    address: '5 Place Bellecour',
    city: 'Lyon',
    postalCode: '69002',
    lat: 45.7576,
    lng: 4.8323,
    sports: ['football', 'tennis', 'basketball', 'formule1'],
    openingHours: 'Mer-Dim 15h-2h',
    phone: '04 72 41 96 30',
    description: 'Au cœur de la place Bellecour, le Stadium Bar diffuse tous les grands événements sportifs sur 10 écrans HD.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    screens: 10,
    rating: 4.2,
    matches: [
      { id: 'm13', sport: 'formule1', title: 'Grand Prix de France', date: '2026-06-06', time: '14:00', competition: 'Formule 1' },
      { id: 'm14', sport: 'tennis', title: 'Roland Garros - Demi-finale', date: '2026-06-06', time: '11:00', competition: 'Roland Garros' },
    ],
  },
  // Marseille
  {
    id: '7',
    name: 'L\'Olympique Bar',
    address: '15 La Canebière',
    city: 'Marseille',
    postalCode: '13001',
    lat: 43.2965,
    lng: 5.3741,
    sports: ['football', 'rugby', 'mma'],
    openingHours: 'Lun-Dim 10h-3h',
    phone: '04 91 54 22 11',
    description: 'Le temple de l\'OM. Ambiance légendaire pour chaque match de Marseille, décoré aux couleurs bleu et blanc.',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    screens: 7,
    rating: 4.7,
    matches: [
      { id: 'm15', sport: 'football', title: 'Marseille vs Paris SG', teams: 'OM - PSG', date: '2026-06-01', time: '21:00', competition: 'Ligue 1' },
      { id: 'm16', sport: 'football', title: 'OM vs Dortmund', teams: 'OM - BVB', date: '2026-06-04', time: '21:00', competition: 'Ligue des Champions' },
    ],
  },
  {
    id: '8',
    name: 'Le Vieux Port Sports',
    address: '3 Quai du Port',
    city: 'Marseille',
    postalCode: '13002',
    lat: 43.2974,
    lng: 5.3690,
    sports: ['football', 'tennis', 'cyclisme', 'formule1'],
    openingHours: 'Mar-Dim 12h-2h',
    phone: '04 91 90 63 44',
    description: 'Vue imprenable sur le Vieux Port et retransmission des grands événements sportifs. Spécialité poissons et fruits de mer.',
    imageUrl: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400&q=80',
    screens: 4,
    rating: 4.0,
    matches: [
      { id: 'm17', sport: 'cyclisme', title: 'Tour de France - Arrivée à Paris', date: '2026-06-08', time: '16:00', competition: 'Tour de France' },
      { id: 'm18', sport: 'tennis', title: 'Roland Garros - Finale Femmes', date: '2026-06-07', time: '15:00', competition: 'Roland Garros' },
    ],
  },
  // Bordeaux
  {
    id: '9',
    name: 'Le Rugby Club',
    address: '22 Cours de l\'Intendance',
    city: 'Bordeaux',
    postalCode: '33000',
    lat: 44.8404,
    lng: -0.5742,
    sports: ['rugby', 'football'],
    openingHours: 'Lun-Sam 16h-2h | Dim 14h-1h',
    phone: '05 56 44 87 23',
    description: 'LE bar rugby de Bordeaux. Supporters de l\'UBB bienvenus, ambiance de kop garantie pour chaque match.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80',
    screens: 5,
    rating: 4.5,
    matches: [
      { id: 'm19', sport: 'rugby', title: 'Bordeaux-Bègles vs Racing 92', teams: 'UBB - R92', date: '2026-06-02', time: '21:05', competition: 'Top 14' },
      { id: 'm20', sport: 'rugby', title: 'France vs Nouvelle-Zélande', teams: 'FRA - NZL', date: '2026-06-06', time: '20:00', competition: 'Test Match' },
    ],
  },
  {
    id: '10',
    name: 'Bordeaux Game Bar',
    address: '8 Rue Sainte-Catherine',
    city: 'Bordeaux',
    postalCode: '33000',
    lat: 44.8378,
    lng: -0.5754,
    sports: ['football', 'basketball', 'formule1', 'mma'],
    openingHours: 'Mer-Dim 17h-2h',
    phone: '05 56 51 13 67',
    description: 'Bar gaming et sportif nouvelle génération. Retransmissions HD, bar à cocktails et burgers artisanaux.',
    imageUrl: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=400&q=80',
    screens: 6,
    rating: 4.3,
    matches: [
      { id: 'm21', sport: 'formule1', title: 'Grand Prix du Canada', date: '2026-06-07', time: '19:00', competition: 'Formule 1' },
      { id: 'm22', sport: 'mma', title: 'Bellator 305', date: '2026-06-03', time: '22:00', competition: 'Bellator' },
    ],
  },
  // Toulouse
  {
    id: '11',
    name: 'La Mêlée Toulousaine',
    address: '6 Place du Capitole',
    city: 'Toulouse',
    postalCode: '31000',
    lat: 43.6047,
    lng: 1.4442,
    sports: ['rugby', 'football'],
    openingHours: 'Lun-Dim 11h-2h',
    phone: '05 61 23 09 45',
    description: 'Le bar des supporters du Stade Toulousain. Ambiance rouge et noir pour chaque victoire du ST en Top 14 et Champions Cup.',
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80',
    screens: 6,
    rating: 4.8,
    matches: [
      { id: 'm23', sport: 'rugby', title: 'Toulouse vs Leinster', teams: 'ST - LEI', date: '2026-06-05', time: '20:00', competition: 'Champions Cup' },
      { id: 'm24', sport: 'football', title: 'Toulouse FC vs Lens', teams: 'TFC - RCL', date: '2026-06-01', time: '15:00', competition: 'Ligue 1' },
    ],
  },
  {
    id: '12',
    name: 'Sports Café Capitole',
    address: '3 Rue du Taur',
    city: 'Toulouse',
    postalCode: '31000',
    lat: 43.6063,
    lng: 1.4431,
    sports: ['football', 'basketball', 'tennis', 'cyclisme'],
    openingHours: 'Mar-Sam 14h-2h | Dim 12h-1h',
    phone: '05 61 21 78 34',
    description: 'Café sportif multi-sports au cœur de Toulouse. Bonne sélection de bières pression et tapas espagnoles.',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
    screens: 4,
    rating: 4.1,
    matches: [
      { id: 'm25', sport: 'cyclisme', title: 'Critérium du Dauphiné', date: '2026-06-04', time: '16:00', competition: 'Cyclisme' },
      { id: 'm26', sport: 'basketball', title: 'Pro A - Finale', date: '2026-06-06', time: '20:00', competition: 'Betclic Élite' },
    ],
  },
];

export const CITIES = ['Toutes les villes', 'Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse'];
