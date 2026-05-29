'use client';

import { Sport, SPORTS_LABELS, SPORTS_ICONS, CITIES } from '@/data/venues';

interface Filters {
  city: string;
  sports: Sport[];
  searchQuery: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onGeolocate: () => void;
  geolocating: boolean;
  totalResults: number;
}

const ALL_SPORTS: Sport[] = ['football', 'rugby', 'tennis', 'basketball', 'cyclisme', 'formule1', 'mma'];

export default function FilterSidebar({ filters, onChange, onGeolocate, geolocating, totalResults }: FilterSidebarProps) {
  const toggleSport = (sport: Sport) => {
    const next = filters.sports.includes(sport)
      ? filters.sports.filter((s) => s !== sport)
      : [...filters.sports, sport];
    onChange({ ...filters, sports: next });
  };

  return (
    <aside className="w-full md:w-80 flex-shrink-0 bg-slate-800 border-r border-slate-700 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🍺</span>
          <h1 className="text-xl font-bold text-white">SportBar France</h1>
        </div>
        <p className="text-slate-400 text-sm">Trouvez où regarder vos matchs</p>
      </div>

      <div className="p-4 flex flex-col gap-5">
        {/* Search */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Recherche
          </label>
          <input
            type="text"
            placeholder="Nom du bar, match..."
            value={filters.searchQuery}
            onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
            className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-3 py-2 text-sm border border-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Ville
          </label>
          <select
            value={filters.city}
            onChange={(e) => onChange({ ...filters, city: e.target.value })}
            className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 text-sm border border-slate-600 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Geolocation */}
        <button
          onClick={onGeolocate}
          disabled={geolocating}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-60 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors"
        >
          {geolocating ? (
            <>
              <span className="animate-spin">⏳</span> Localisation...
            </>
          ) : (
            <>
              <span>📍</span> Me géolocaliser
            </>
          )}
        </button>

        {/* Sports filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Sports
          </label>
          <div className="flex flex-wrap gap-2">
            {ALL_SPORTS.map((sport) => {
              const active = filters.sports.includes(sport);
              return (
                <button
                  key={sport}
                  onClick={() => toggleSport(sport)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    active
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-slate-400'
                  }`}
                >
                  <span>{SPORTS_ICONS[sport]}</span>
                  {SPORTS_LABELS[sport]}
                </button>
              );
            })}
          </div>
          {filters.sports.length > 0 && (
            <button
              onClick={() => onChange({ ...filters, sports: [] })}
              className="mt-2 text-xs text-slate-400 hover:text-slate-200 underline"
            >
              Effacer les filtres sports
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-auto p-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          <span className="text-white font-semibold">{totalResults}</span>{' '}
          établissement{totalResults !== 1 ? 's' : ''} trouvé{totalResults !== 1 ? 's' : ''}
        </p>
      </div>
    </aside>
  );
}
