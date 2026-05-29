'use client';

import { Venue } from '@/data/venues';
import VenueCard from './VenueCard';

interface VenueListProps {
  venues: Venue[];
  selectedVenue: Venue | null;
  onVenueSelect: (venue: Venue) => void;
}

export default function VenueList({ venues, selectedVenue, onVenueSelect }: VenueListProps) {
  if (venues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-500 gap-2 p-4">
        <span className="text-4xl">🔍</span>
        <p className="text-center">Aucun établissement trouvé avec ces critères.</p>
        <p className="text-sm text-center">Essayez de modifier vos filtres.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-3 overflow-y-auto">
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          selected={selectedVenue?.id === venue.id}
          onClick={() => onVenueSelect(venue)}
        />
      ))}
    </div>
  );
}
