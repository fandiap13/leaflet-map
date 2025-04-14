'use client';

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const ShowMapBounds = () => {
    const map = useMap();

    useEffect(() => {
        const updateBounds = () => {
            const bounds = map.getBounds();

            // Draw a visual rectangle of the current bounds
            L.rectangle(bounds, { color: 'blue', weight: 1 }).addTo(map);

            // Optional: update info somewhere in the DOM
            const info = document.getElementById('bounds-info');
            if (info) {
                info.innerText = `
          SW: ${bounds.getSouthWest().lat.toFixed(4)}, ${bounds.getSouthWest().lng.toFixed(4)}\n
          NE: ${bounds.getNorthEast().lat.toFixed(4)}, ${bounds.getNorthEast().lng.toFixed(4)}
        `;
            }
        };

        updateBounds(); // Show on first load
        map.on('moveend', updateBounds); // Update on move

        return () => {
            map.off('moveend', updateBounds);
        };
    }, [map]);

    return null;
};

export default ShowMapBounds;
