'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import {Button, Input} from "@heroui/react";

const Maps = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

    const destination = { lat: 53.549753, lng: 10.092986 };

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
            version: 'weekly',
            libraries: ['places'],
        });

        loader.load().then((google) => {
            const mapInstance = new google.maps.Map(mapRef.current as HTMLDivElement, {
                center: destination,
                zoom: 13,
                mapId: 'MY_NEXTJS_MAPID',
            });
            setMap(mapInstance);

            new google.maps.Marker({
                position: destination,
                map: mapInstance,
                title: 'Ziel: Stengelstraße 38, Hamburg',
            });

            const renderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
            renderer.setMap(mapInstance);
            setDirectionsRenderer(renderer);

            if (inputRef.current) {
                new google.maps.places.Autocomplete(inputRef.current);
            }
        }).catch((err) => {
            console.error('Fehler beim Laden der Google Maps API:', err);
        });
    }, []);

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
                    new google.maps.Marker({
                        position: result.routes[0].legs[0].start_location,
                        map,
                        title: 'Start',
                    });
                } else {
                    alert('Route konnte nicht berechnet werden: ' + status);
                }
            }
        );
    };
    return (
        <div className="w-full px-4 py-8 flex flex-col items-center gap-6  ">
            <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Startadresse eingeben"
                    className="flex-1 w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                    onPress={handleRoute}
                    className="px-5 py-3 bg-lakers text-white rounded-3xl shadow transition"
                >
                    Route anzeigen
                </Button>
            </div>
            <div
                ref={mapRef}
                className="w-full max-w-6xl h-[70vh] rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Maps;
