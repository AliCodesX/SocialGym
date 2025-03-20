'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Maps = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (!mapRef.current || mapLoaded) return;

        const initMap = async () => {
            try {
                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                    version: 'weekly',
                });

                const { Map } = await loader.importLibrary('maps');
                const { Marker } = await loader.importLibrary('marker');

                const startPosition = { lat: 53.55227, lng: 10.00691 }; // Hamburg Hbf
                const destination = { lat: 53.53422, lng: 10.03412 }; // Stengelstraße 38, 22111 Hamburg

                const mapOptions: google.maps.MapOptions = {
                    center: destination,
                    zoom: 13,
                    mapId: 'MY_NEXTJS_MAPID',
                };

                const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

                // Marker für Start
                new Marker({
                    position: startPosition,
                    map,
                    title: 'Start: Hamburg Hbf',
                });

                // Marker für Ziel
                new Marker({
                    position: destination,
                    map,
                    title: 'Ziel: Stengelstraße 38, 22111 Hamburg',
                });

                setMapLoaded(true);
            } catch (error) {
                console.error('Fehler beim Laden der Google Maps API:', error);
            }
        };

        initMap();
    }, [mapLoaded]);

    return (
        <div
            ref={mapRef}
            className="w-full max-w-[500px] aspect-square rounded-lg shadow-lg"
        />
    );
};

export default Maps;
