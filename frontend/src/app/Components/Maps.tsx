'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Maps = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

    // Festes Ziel: Stengelstraße 38, Hamburg
    const destination = { lat: 53.53422, lng: 10.03412 };

    useEffect(() => {
        if (!mapRef.current) return;

        // Google Maps Loader konfigurieren
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
            version: 'weekly',
            libraries: ['places'],
        });

        loader.load().then((google) => {
            // Karte initialisieren
            const mapInstance = new google.maps.Map(mapRef.current as HTMLDivElement, {
                center: destination,
                zoom: 13,
                mapId: 'MY_NEXTJS_MAPID', // Optional: falls du ein benutzerdefiniertes Styling nutzt
            });
            setMap(mapInstance);

            // Marker für das Ziel platzieren
            new google.maps.Marker({
                position: destination,
                map: mapInstance,
                title: 'Ziel: Stengelstraße 38, Hamburg',
            });

            // DirectionsRenderer für die Anzeige der Route initialisieren
            const renderer = new google.maps.DirectionsRenderer();
            renderer.setMap(mapInstance);
            setDirectionsRenderer(renderer);

            // Autocomplete für das Eingabefeld einrichten
            if (inputRef.current) {
                new google.maps.places.Autocomplete(inputRef.current);
            }
        }).catch((err) => {
            console.error('Fehler beim Laden der Google Maps API:', err);
        });
    }, []);

    // Route berechnen und anzeigen
    const handleRoute = () => {
        if (!inputRef.current || !directionsRenderer || !map) return;

        const startAddress = inputRef.current.value;
        if (!startAddress) {
            alert('Bitte gib deine Startadresse ein.');
            return;
        }

        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
            {
                origin: startAddress,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === 'OK' && result) {
                    directionsRenderer.setDirections(result);

                    // Optional: Start-Marker anhand der Route hinzufügen
                    if (result.routes[0].legs[0].start_location) {
                        new google.maps.Marker({
                            position: result.routes[0].legs[0].start_location,
                            map,
                            title: 'Start',
                        });
                    }
                } else {
                    alert('Route konnte nicht berechnet werden: ' + status);
                }
            }
        );
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <input
                ref={inputRef}
                type="text"
                placeholder="Deine Startadresse"
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleRoute}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Route anzeigen
            </button>
            <div
                ref={mapRef}
                className="w-full max-w-[600px] aspect-square rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Maps;
