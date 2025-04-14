
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { useMap } from "react-leaflet";

// Ensure Leaflet is only loaded in the browser
const isBrowser = typeof window !== "undefined";
const L = isBrowser ? require("leaflet") : null;

// const FullscreenControlComponent: React.FC = () => {
//     const map = useMap();

//     useEffect(() => {
//         if (!map) return;

//         // @ts-ignore
//         const fullscreenControl = L.control.fullscreen({
//             position: 'topleft',
//             // title: 'Fullscreen',
//             // titleCancel: 'Exit Fullscreen',
//             // content: null
//         });

//         map.addControl(fullscreenControl);

//         return () => {
//             map.removeControl(fullscreenControl);
//         };
//     }, [map]);

//     return null;
// };

// const FullscreenControlComponent = () => {
//     const map = useMap();
//     const fullscreenControlRef = useRef(null);

//     useEffect(() => {
//         if (!map || !L) return;

//         // Create fullscreen control with custom error handling
//         const fullscreenControl = L.control.fullscreen({
//             position: 'topleft',
//             title: 'Show full screen',
//             titleCancel: 'Exit full screen',
//             forceSeparateButton: true,
//             fullscreenElement: undefined
//         });

//         // Store reference to the control
//         fullscreenControlRef.current = fullscreenControl;

//         map.addControl(fullscreenControl);

//         // Custom event listeners to handle fullscreen state
//         const handleFullscreenChange = () => {
//             try {
//                 if (document.fullscreenElement) {
//                     map.invalidateSize();
//                 } else {
//                     map.invalidateSize();
//                 }
//             } catch (error) {
//                 console.error('Fullscreen state change error:', error);
//             }
//         };

//         document.addEventListener('fullscreenchange', handleFullscreenChange);

//         return () => {
//             if (fullscreenControlRef.current) {
//                 map.removeControl(fullscreenControlRef.current);
//             }
//             document.removeEventListener('fullscreenchange', handleFullscreenChange);
//         };
//     }, [map]);

//     return null;
// };

const FullscreenControlComponent = () => {
    const map = useMap();
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        const mapContainer = map.getContainer();

        if (!document.fullscreenElement) {
            if (mapContainer.requestFullscreen) {
                mapContainer.requestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        if (!map) return;

        const handleFullscreenChange = () => {
            // Ensure map resizes correctly when entering/exiting fullscreen
            map.invalidateSize();
            setIsFullscreen(!!document.fullscreenElement);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            // Optional: Add custom fullscreen toggle with Esc key
            if (event.key === 'Escape' && document.fullscreenElement) {
                toggleFullscreen();
            }
        };

        // Create fullscreen button
        const fullscreenButton = document.createElement('div');
        fullscreenButton.className = 'leaflet-bar leaflet-control leaflet-control-fullscreen cursor-pointer bg-white';
        fullscreenButton.style.display = 'flex';
        fullscreenButton.style.alignItems = 'center';
        fullscreenButton.style.justifyContent = 'center';
        fullscreenButton.style.width = '30px';
        fullscreenButton.style.height = '30px';

        // Create a container for the icon
        const iconContainer = document.createElement('div');
        iconContainer.id = 'fullscreen-icon-container';
        fullscreenButton.appendChild(iconContainer);
        fullscreenButton.onclick = toggleFullscreen;

        // Position the fullscreen control just below the zoom controls
        const zoomControls = map.getContainer().querySelector('.leaflet-control-zoom');
        if (zoomControls && zoomControls.parentNode) {
            const zoomControlsContainer = zoomControls.parentNode;
            zoomControlsContainer.insertBefore(fullscreenButton, null);
        }

        // Render the icon using React
        const renderIcon = () => {
            const container = document.getElementById('fullscreen-icon-container');
            if (container) {
                const iconProps = {
                    size: 20,
                    color: 'black',
                    // style: { strokeWidth: 2 }
                };

                const iconElement = isFullscreen
                    ? React.createElement(MdOutlineZoomOutMap, iconProps)
                    : React.createElement(MdOutlineZoomInMap, iconProps);

                // @ts-ignore
                import('react-dom').then((ReactDOM) => {
                    ReactDOM.render(iconElement, container);
                });
            }
        };

        // Initial render
        renderIcon();

        // Add event listeners
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('keydown', handleKeyDown);

        // Re-render icon when fullscreen state changes
        const observer = new MutationObserver(renderIcon);
        observer.observe(fullscreenButton, { attributes: true });

        return () => {
            // Cleanup
            observer.disconnect();
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('keydown', handleKeyDown);

            // Remove custom fullscreen button
            if (fullscreenButton.parentElement) {
                fullscreenButton.parentElement.removeChild(fullscreenButton);
            }
        };
    }, [map, isFullscreen]);

    return null;
};


export default FullscreenControlComponent;