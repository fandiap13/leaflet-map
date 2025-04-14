"use client"

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// Make sure we're in the browser environment
const isBrowser = typeof window !== 'undefined';
const L = isBrowser ? require('leaflet') : null;

// Only import the plugin in browser environment
if (isBrowser) {
    require('leaflet-minimap');
}

interface MiniMapControlProps {
    position?: 'bottomright' | 'bottomleft' | 'topleft' | 'topright';
    width?: number;
    height?: number;
    zoomLevelOffset?: number;
    zoomLevelFixed?: number | null;
    centerFixed?: boolean;
    toggleDisplay?: boolean;
    minimized?: boolean;
}

const MiniMapControl = ({
    position = 'bottomright',
    width = 150,
    height = 150,
    zoomLevelOffset = -5,
    zoomLevelFixed = null,
    centerFixed = false,
    toggleDisplay = true,
    minimized = false,
}: MiniMapControlProps) => {
    const map = useMap();

    useEffect(() => {
        if (!map || !L) return;

        // Create a new tile layer for the mini map
        const miniMapTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            minZoom: 0,
            maxZoom: 19,
        });

        // Create the mini map
        const miniMap = new L.Control.MiniMap(miniMapTileLayer, {
            position,
            width,
            height,
            zoomLevelOffset,
            zoomLevelFixed,
            centerFixed,
            toggleDisplay,
            minimized,
            aimingRectOptions: { color: '#ff7800', weight: 1, fillOpacity: 0.3 },
            shadowRectOptions: { color: '#000000', weight: 1, fillOpacity: 0, fillColor: '#000000', opacity: 0.2 },
        });

        // Add the mini map to the main map
        miniMap.addTo(map);

        // Cleanup when component unmounts
        return () => {
            if (map && miniMap) {
                map.removeControl(miniMap);
            }
        };
    }, [
        map,
        position,
        width,
        height,
        zoomLevelOffset,
        zoomLevelFixed,
        centerFixed,
        toggleDisplay,
        minimized,
    ]);

    // This component doesn't render anything directly
    return null;
};

export default MiniMapControl;