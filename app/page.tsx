'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { venues, Venue, Sport } from '@/data/venues';
import FilterSidebar from '@/components/FilterSidebar';
import VenueList from '@/components/VenueList';
import VenueDetail from '@/components/VenueDetail';

// Leaflet requires browser environment — disable SSR
const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

interface Filters {
  city: string;
  sports: Sport[];
  searchQuery: string;
}

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    city: 'Toutes les villes',
    sports: [],
    searchQuery: '',
  });
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [geolocating, setGeolocating] = useState(false);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredVenues = useMemo(() => {
    return venues.filter((venue) => {
      if (filters.city !== 'Toutes les villes' && venue.city !== filters.city) return false;

      if (filters.sports.length > 0 && !filters.sports.some((s) => venue.sports.includes(s))) return false;

      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = venue.name.toLowerCase().includes(q);
        const matchesAddress = venue.address.toLowerCase().includes(q);
        const matchesMatch = venue.matches.some(
          (m) => m.title.toLowerCase().includes(q) || m.competition.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesAddress && !matchesMatch) return false;
      }

      return true;
    });
  }, [filters]);

  const handleGeolocate = useCallback(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) return;

    setGeolocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        setGeolocating(false);
        const dists = [
          { city: 'Paris', lat: 48.8566, lng: 2.3522 },
          { city: 'Lyon', lat: 45.7640, lng: 4.8357 },
          { city: 'Marseille', lat: 43.2965, lng: 5.3698 },
          { city: 'Bordeaux', lat: 44.8378, lng: -0.5792 },
          { city: 'Toulouse', lat: 43.6047, lng: 1.4442 },
        ];
        let nearest = 'Toutes les villes';
        let minDist = Infinity;
        dists.forEach(({ city, lat, lng }) => {
          const d = Math.hypot(pos.coords.latitude - lat, pos.coords.longitude - lng);
          if (d < minDist && d < 2) {
            minDist = d;
            nearest = city;
          }
        });
        setFilters((f) => ({ ...f, city: nearest }));
      },
      () => setGeolocating(false)
    );
  }, []);

  const handleVenueSelect = useCallback((venue: Venue) => {
    setSelectedVenue((prev) => (prev?.id === venue.id ? null : venue));
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setView('map');
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-50 md:z-auto h-full transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          onGeolocate={handleGeolocate}
          geolocating={geolocating}
          totalResults={filteredVenues.length}
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between p-3 bg-slate-800 border-b border-slate-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
          >
            <span>☰</span> Filtres
            {(filters.sports.length > 0 || filters.city !== 'Toutes les villes' || filters.searchQuery) && (
              <span className="bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                !
              </span>
            )}
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => setView('map')}
              className={`px-3 py-1 rounded text-sm ${view === 'map' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
            >
              🗺 Carte
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-1 rounded text-sm ${view === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
            >
              ☰ Liste
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* List panel */}
          <div className={`${view === 'list' ? 'flex' : 'hidden'} md:flex w-full md:w-80 flex-col flex-shrink-0 bg-slate-800/50 border-r border-slate-700 overflow-y-auto`}>
            <VenueList
              venues={filteredVenues}
              selectedVenue={selectedVenue}
              onVenueSelect={handleVenueSelect}
            />
          </div>

          {/* Map */}
          <div className={`${view === 'map' ? 'flex' : 'hidden'} md:flex flex-1 relative`}>
            <Suspense fallback={
              <div className="flex-1 bg-slate-800 flex items-center justify-center text-slate-400">
                Chargement de la carte...
              </div>
            }>
              <MapView
                venues={filteredVenues}
                selectedVenue={selectedVenue}
                onVenueSelect={handleVenueSelect}
                userLocation={userLocation}
              />
            </Suspense>
          </div>

          {/* Venue detail panel (desktop) */}
          {selectedVenue && (
            <div className="hidden md:flex relative">
              <VenueDetail venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile: venue detail overlay */}
      {selectedVenue && (
        <div className="md:hidden fixed inset-0 z-50 overflow-y-auto">
          <VenueDetail venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
        </div>
      )}
    </div>
  );
}
