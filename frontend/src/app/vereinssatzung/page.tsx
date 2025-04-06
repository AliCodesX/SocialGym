// app/vereinsatzung/page.tsx
import React from "react";

export default function VereinsatzungPage() {
    return (
        <div  className="max-w-4xl mx-auto p-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Vereinssatzung</h1>

            <section className="mb-6">
                <p>
                    Hier kannst du die Vereinssatzung des Vereins Social-Insan herunterladen. Die Satzung regelt alle wichtigen
                    Bestimmungen und Abläufe des Vereins. Bitte lies sie dir durch, um die grundlegenden Regeln und Prinzipien unseres
                    Vereins zu verstehen.
                </p>
            </section>

            <section className="mb-6">
                <a
                    href="/"
                    download
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Vereinssatzung herunterladen
                </a>
            </section>

            <p className="text-sm text-gray-500">
                Stand: April 2025
            </p>
        </div>
    );
}
