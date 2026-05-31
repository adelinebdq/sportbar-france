// ─── COMPOSITIONS — COUPE DU MONDE 2026 ──────────────────────────────────────
//
// ⚠️  À VÉRIFIER ET METTRE À JOUR avant publication — données indicatives
//     Cutoff connaissance : août 2025. Effectif France = joueurs plausibles,
//     non officiels. Toujours vérifier sur fff.fr avant mise en ligne.
//
// ─── COMMENT METTRE À JOUR ───────────────────────────────────────────────────
//   • Effectif  → modifier le tableau effectif[] après chaque convocation
//   • Après un match → remplir derniereCompo avec titulaires (x/y en %)
//                      et mettre à jour score, date, adversaire
//
// ─── PRÉVU POUR L'AVENIR ─────────────────────────────────────────────────────
//   API : remplacer les données statiques par API-Football v3
//     GET https://v3.football.api-sports.io/players/squads?team=2&season=2026
//     Headers : { "x-apisports-key": "VOTRE_CLE" }
//
//   Autres compétitions : étendre la structure racine avec :
//     const COMPETITIONS = { wc2026: COMPOSITIONS, ligue1: {...}, ... }
//     Chaque entrée contient le même schéma d'équipe
//
// ─────────────────────────────────────────────────────────────────────────────

const COMPOSITIONS = {

  // ── FRANCE ──────────────────────────────────────────────────────────────────
  france: {
    nom: "France",
    drapeau: "🇫🇷",
    selectionneur: "Didier Deschamps",
    capitaine: "Kylian Mbappé",
    formation: "4-3-3",
    slug: "france",
    couleurs: { principale: "#002395", secondaire: "#ED2939" },

    // 26 joueurs (données indicatives — à valider avant publication)
    effectif: [
      // ── Gardiens ───────────────────────────────────────────────────────────
      { numero: 1,  nom: "Mike Maignan",         poste: "Gardien",   club: "AC Milan",                age: 30, selections: 18 },
      { numero: 16, nom: "Brice Samba",           poste: "Gardien",   club: "RC Lens",                 age: 30, selections: 11 },
      { numero: 23, nom: "Alphonse Areola",       poste: "Gardien",   club: "West Ham United",         age: 33, selections: 4  },

      // ── Défenseurs ─────────────────────────────────────────────────────────
      { numero: 2,  nom: "Benjamin Pavard",       poste: "Défenseur", club: "Inter Milan",             age: 29, selections: 62 },
      { numero: 3,  nom: "Dayot Upamecano",       poste: "Défenseur", club: "Bayern Munich",           age: 27, selections: 38 },
      { numero: 4,  nom: "Ibrahima Konaté",       poste: "Défenseur", club: "Liverpool FC",            age: 25, selections: 29 },
      { numero: 5,  nom: "Jules Koundé",          poste: "Défenseur", club: "FC Barcelone",            age: 28, selections: 55 },
      { numero: 6,  nom: "William Saliba",        poste: "Défenseur", club: "Arsenal FC",              age: 25, selections: 24 },
      { numero: 13, nom: "Théo Hernandez",        poste: "Défenseur", club: "AC Milan",                age: 28, selections: 42 },
      { numero: 22, nom: "Ferland Mendy",         poste: "Défenseur", club: "Real Madrid CF",          age: 30, selections: 28 },
      { numero: 26, nom: "Axel Disasi",           poste: "Défenseur", club: "Chelsea FC",              age: 27, selections: 12 },

      // ── Milieux ────────────────────────────────────────────────────────────
      { numero: 8,  nom: "Aurélien Tchouaméni",  poste: "Milieu",    club: "Real Madrid CF",          age: 26, selections: 42 },
      { numero: 14, nom: "Adrien Rabiot",         poste: "Milieu",    club: "Olympique de Marseille",  age: 31, selections: 52 },
      { numero: 15, nom: "Eduardo Camavinga",     poste: "Milieu",    club: "Real Madrid CF",          age: 23, selections: 26 },
      { numero: 18, nom: "Youssouf Fofana",       poste: "Milieu",    club: "AC Milan",                age: 27, selections: 28 },
      { numero: 20, nom: "Khéphren Thuram",       poste: "Milieu",    club: "Juventus FC",             age: 24, selections: 16 },
      { numero: 21, nom: "Warren Zaïre-Emery",    poste: "Milieu",    club: "Paris Saint-Germain",     age: 20, selections: 15 },
      { numero: 24, nom: "N'Golo Kanté",          poste: "Milieu",    club: "Al-Ittihad",              age: 35, selections: 53 },

      // ── Attaquants ─────────────────────────────────────────────────────────
      { numero: 7,  nom: "Ousmane Dembélé",       poste: "Attaquant", club: "Paris Saint-Germain",     age: 29, selections: 68 },
      { numero: 9,  nom: "Randal Kolo Muani",     poste: "Attaquant", club: "Juventus FC",             age: 27, selections: 34 },
      { numero: 10, nom: "Kylian Mbappé",         poste: "Attaquant", club: "Real Madrid CF",          age: 27, selections: 89 },
      { numero: 11, nom: "Marcus Thuram",         poste: "Attaquant", club: "Inter Milan",             age: 28, selections: 32 },
      { numero: 12, nom: "Kingsley Coman",        poste: "Attaquant", club: "Bayern Munich",           age: 30, selections: 58 },
      { numero: 17, nom: "Bradley Barcola",       poste: "Attaquant", club: "Paris Saint-Germain",     age: 23, selections: 20 },
      { numero: 19, nom: "Christopher Nkunku",    poste: "Attaquant", club: "Chelsea FC",              age: 28, selections: 28 },
      { numero: 25, nom: "Michael Olise",         poste: "Attaquant", club: "Bayern Munich",           age: 24, selections: 16 },
    ],

    // Composition projetée — France vs États-Unis (15/06/2026)
    // x et y = % sur le terrain SVG (vertical, gardien en bas y=88)
    // À mettre à jour avec la compo officielle 1h avant le match
    derniereCompo: {
      date: "2026-06-16",
      adversaire: "Sénégal",
      score: null,        // ex: "2-1" après le match
      note: "Composition indicative — à confirmer officiellement",
      titulaires: [
        { numero: 1,  nom: "Mike Maignan",        position: "GB",  x: 50, y: 88 },
        { numero: 5,  nom: "Jules Koundé",         position: "DD",  x: 84, y: 72 },
        { numero: 6,  nom: "William Saliba",       position: "DC",  x: 64, y: 70 },
        { numero: 3,  nom: "Dayot Upamecano",      position: "DC",  x: 36, y: 70 },
        { numero: 13, nom: "Théo Hernandez",       position: "DG",  x: 16, y: 72 },
        { numero: 14, nom: "Adrien Rabiot",        position: "MDD", x: 78, y: 52 },
        { numero: 8,  nom: "Aurélien Tchouaméni",  position: "MDC", x: 50, y: 48 },
        { numero: 15, nom: "Eduardo Camavinga",    position: "MDG", x: 22, y: 52 },
        { numero: 7,  nom: "Ousmane Dembélé",      position: "ATD", x: 80, y: 24 },
        { numero: 11, nom: "Marcus Thuram",        position: "ATT", x: 50, y: 17 },
        { numero: 10, nom: "Kylian Mbappé",        position: "ATG", x: 20, y: 24 },
      ],
      remplacants: [
        { numero: 16, nom: "Brice Samba" },
        { numero: 23, nom: "Alphonse Areola" },
        { numero: 2,  nom: "Benjamin Pavard" },
        { numero: 4,  nom: "Ibrahima Konaté" },
        { numero: 22, nom: "Ferland Mendy" },
        { numero: 18, nom: "Youssouf Fofana" },
        { numero: 20, nom: "Khéphren Thuram" },
        { numero: 21, nom: "Warren Zaïre-Emery" },
        { numero: 24, nom: "N'Golo Kanté" },
        { numero: 9,  nom: "Randal Kolo Muani" },
        { numero: 17, nom: "Bradley Barcola" },
        { numero: 19, nom: "Christopher Nkunku" },
        { numero: 12, nom: "Kingsley Coman" },
        { numero: 25, nom: "Michael Olise" },
        { numero: 26, nom: "Axel Disasi" },
      ]
    }
  },

  // ── SÉNÉGAL ──────────────────────────────────────────────────────────────────
  senegal: {
    nom: "Sénégal",
    drapeau: "🇸🇳",
    selectionneur: "À venir",
    capitaine: "À venir",
    formation: "À venir",
    slug: "senegal",
    couleurs: { principale: "#00853F", secondaire: "#FDEF42" },
    effectif: [],
    derniereCompo: null,
  },

  // ── IRAK ─────────────────────────────────────────────────────────────────────
  irak: {
    nom: "Irak",
    drapeau: "🇮🇶",
    selectionneur: "À venir",
    capitaine: "À venir",
    formation: "À venir",
    slug: "irak",
    couleurs: { principale: "#CE1126", secondaire: "#007A3D" },
    effectif: [],
    derniereCompo: null,
  },

  // ── NORVÈGE ──────────────────────────────────────────────────────────────────
  norvege: {
    nom: "Norvège",
    drapeau: "🇳🇴",
    selectionneur: "À venir",
    capitaine: "À venir",
    formation: "À venir",
    slug: "norvege",
    couleurs: { principale: "#EF2B2D", secondaire: "#FFFFFF" },
    effectif: [],
    derniereCompo: null,
  },

};
