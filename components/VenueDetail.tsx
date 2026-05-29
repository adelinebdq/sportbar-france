'use client';

import { Venue, SPORTS_ICONS, SPORTS_LABELS } from '@/data/venues';

interface VenueDetailProps {
  venue: Venue;
  onClose: () => void;
}

export default function VenueDetail({ venue, onClose }: VenueDetailProps) {
  return (
    <div className="absolute inset-0 z-50 bg-slate-900/95 backdrop-blur-sm overflow-y-auto md:relative md:inset-auto md:bg-slate-800 md:border-l md:border-slate-700 md:w-96 md:flex-shrink-0">
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={venue.imageUrl}
          alt={venue.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ✕
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <h2 className="text-white font-bold text-xl drop-shadow">{venue.name}</h2>
          <div className="flex items-center gap-1 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(venue.rating) ? 'text-yellow-400' : 'text-slate-600'}>
                ★
              </span>
            ))}
            <span className="text-slate-300 text-sm ml-1">{venue.rating}/5</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Info */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0">📍</span>
            <span className="text-slate-300">{venue.address}, {venue.postalCode} {venue.city}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0">🕐</span>
            <span className="text-slate-300">{venue.openingHours}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0">📞</span>
            <a href={`tel:${venue.phone.replace(/\s/g, '')}`} className="text-blue-400 hover:text-blue-300">
              {venue.phone}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0">🖥</span>
            <span className="text-slate-300">{venue.screens} écran{venue.screens > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">{venue.description}</p>

        {/* Sports */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Sports diffusés</h3>
          <div className="flex flex-wrap gap-2">
            {venue.sports.map((sport) => (
              <span
                key={sport}
                className="inline-flex items-center gap-1.5 bg-blue-900/50 text-blue-300 border border-blue-800 text-xs px-2.5 py-1 rounded-full"
              >
                {SPORTS_ICONS[sport]} {SPORTS_LABELS[sport]}
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming matches */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Prochains matchs ({venue.matches.length})
          </h3>
          <div className="flex flex-col gap-2">
            {venue.matches.map((match) => (
              <div key={match.id} className="bg-slate-700/50 rounded-lg p-3 border border-slate-700">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-sm font-medium text-white">{match.title}</span>
                  <span className="flex-shrink-0 text-lg">{SPORTS_ICONS[match.sport]}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="text-blue-400">{match.competition}</span>
                  <span>
                    {new Date(match.date).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                  </span>
                  <span className="font-mono text-green-400">{match.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + venue.address + ' ' + venue.city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2.5 text-sm font-medium transition-colors"
        >
          <span>🗺</span> Voir sur Google Maps
        </a>
      </div>
    </div>
  );
}
