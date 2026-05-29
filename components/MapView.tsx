'use client';

import { useEffect, useRef } from 'react';
import { Venue, SPORTS_ICONS } from '@/data/venues';

interface MapViewProps {
  venues: Venue[];
  selectedVenue: Venue | null;
  onVenueSelect: (venue: Venue) => void;
  userLocation: [number, number] | null;
}

export default function MapView({ venues, selectedVenue, onVenueSelect, userLocation }: MapViewProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userMarkerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      const L = (await import('leaflet')).default;

      if (mapInstanceRef.current) return;

      const map = L.map(mapRef.current!, {
        center: [46.8, 2.3],
        zoom: 5,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when venues change
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === 'undefined') return;

    const updateMarkers = async () => {
      const L = (await import('leaflet')).default;

      // Remove old markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      venues.forEach((venue) => {
        const isSelected = selectedVenue?.id === venue.id;
        const sportIcon = SPORTS_ICONS[venue.sports[0]] || '🍺';

        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            background: ${isSelected ? '#3b82f6' : '#1e293b'};
            border: 2px solid ${isSelected ? '#93c5fd' : '#475569'};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
            cursor: pointer;
          ">
            <span style="transform: rotate(45deg); font-size: 16px;">${sportIcon}</span>
          </div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -36],
        });

        const marker = L.marker([venue.lat, venue.lng], { icon })
          .addTo(mapInstanceRef.current)
          .on('click', () => onVenueSelect(venue));

        marker.bindTooltip(
          `<strong>${venue.name}</strong><br/>${venue.city}<br/>${venue.sports.map((s) => SPORTS_ICONS[s]).join(' ')}`,
          { direction: 'top', offset: [0, -36] }
        );

        markersRef.current.push(marker);
      });
    };

    updateMarkers();
  }, [venues, selectedVenue, onVenueSelect]);

  // Pan to selected venue
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedVenue) return;
    mapInstanceRef.current.flyTo([selectedVenue.lat, selectedVenue.lng], 14, { duration: 0.8 });
  }, [selectedVenue]);

  // Show user location
  useEffect(() => {
    if (!mapInstanceRef.current || !userLocation || typeof window === 'undefined') return;

    const addUserMarker = async () => {
      const L = (await import('leaflet')).default;

      if (userMarkerRef.current) userMarkerRef.current.remove();

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          background: #22c55e;
          border: 3px solid white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.3);
        "></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      userMarkerRef.current = L.marker(userLocation, { icon })
        .addTo(mapInstanceRef.current)
        .bindTooltip('Vous êtes ici', { permanent: false });

      mapInstanceRef.current.flyTo(userLocation, 12, { duration: 1 });
    };

    addUserMarker();
  }, [userLocation]);

  return (
    <div ref={mapRef} className="w-full h-full min-h-[400px]" />
  );
}
