'use client';

import { Venue, SPORTS_ICONS, SPORTS_LABELS } from '@/data/venues';

interface VenueCardProps {
  venue: Venue;
  selected: boolean;
  onClick: () => void;
}

export default function VenueCard({ venue, selected, onClick }: VenueCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl overflow-hidden border transition-all ${
        selected
          ? 'border-blue-500 bg-slate-700 shadow-lg shadow-blue-900/30'
          : 'border-slate-700 bg-slate-800 hover:border-slate-500 hover:bg-slate-750'
      }`}
    >
      <div className="relative h-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={venue.imageUrl}
          alt={venue.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <span className="text-white font-bold text-sm drop-shadow">{venue.name}</span>
          <div className="flex items-center gap-1 bg-black/50 rounded px-1.5 py-0.5">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-xs">{venue.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-3">
        <p className="text-slate-400 text-xs flex items-center gap-1 mb-2">
          <span>📍</span>
          {venue.address}, {venue.city}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {venue.sports.map((sport) => (
            <span
              key={sport}
              className="inline-flex items-center gap-1 bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded-full"
            >
              {SPORTS_ICONS[sport]} {SPORTS_LABELS[sport]}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>🖥 {venue.screens} écran{venue.screens > 1 ? 's' : ''}</span>
          <span>🕐 {venue.openingHours.split('|')[0].trim()}</span>
        </div>
      </div>
    </div>
  );
}
