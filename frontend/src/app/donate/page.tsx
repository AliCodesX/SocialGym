'use client'
import React from 'react';
import { Button } from "@heroui/react"
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="bg-lakers text-white p-6">
                <h1 className="text-3xl text-black font-bold text-center">
                    Unterstütze unseren Verein!
                </h1>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto p-6 space-y-8">
                {/* Warum spenden? */}
                <section>
                    <h2 className="text-2xl font-semibold text-lakers mb-4 mt-20">
                        Warum spenden?
                    </h2>
                    <p className="text-gray-700">
                        Deine Spende ermöglicht es uns, wichtige Projekte in der Gemeinschaft umzusetzen.
                        Jeder Beitrag macht einen Unterschied und unterstützt unsere Initiativen in Bildung,
                        sozialer Unterstützung und Umweltschutz.
                    </p>
                </section>

                {/* Wofür wird gespendet? */}
                <section>
                    <h2 className="text-2xl font-semibold text-lakers mb-4 ">
                        Wofür wird gespendet?
                    </h2>
                    <p className="text-gray-700">
                        Mit den Spenden finanzieren wir Bildungsprogramme, soziale Projekte und Umweltinitiativen,
                        die direkt Menschen in Not helfen und langfristig nachhaltige Veränderungen bewirken.
                    </p>
                </section>

                {/* Bild als visuelles Highlight */}
                <section>
                    <img
                        src="https://source.unsplash.com/featured/?donation"
                        alt="Spenden - Gemeinsam Gutes tun"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </section>

                {/* Spenden-Button */}
                <section className="text-center">
                    <Link
                        href="https://buy.stripe.com/test_4gw17j23c7yW9C85kk"> <Button
                        size="lg"
                        className="bg-lakers text-black hover:bg-lakers focus:bg-lakers"

                    >
                        Jetzt spenden
                    </Button></Link>

                </section>
            </main>

        </div>
    );
};

export default Page;
