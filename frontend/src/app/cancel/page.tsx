// app/kuendigung/page.tsx
import React from "react";

export default function KuendigungPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Kündigungsvorlage</h1>

            <section className="mb-6">
                <p>
                    Hier kannst du die Kündigungsvorlage für den Verein Social-Insan herunterladen. Die Vorlage hilft dir, deine
                    Mitgliedschaft ordnungsgemäß zu kündigen. Bitte fülle sie aus und sende sie an die Vereinsadresse.
                </p>
            </section>

            <section className="mb-6">
                <a
                    href="/kuendigungsvorlage.pdf"
                    download
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Kündigungsvorlage herunterladen
                </a>
            </section>

            <p className="text-sm text-gray-500">
                Stand: April 2025
            </p>
        </div>
    );
}
