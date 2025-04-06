// app/agb/page.tsx
import React from "react";

export default function AGBPage() {
    return (
        <main className="max-w-4xl mx-auto p-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Geltungsbereich</h2>
                <p>
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Nutzer der Plattform Social-Insan. Mit der Nutzung der Website
                    akzeptierst du diese Bedingungen in ihrer jeweils gültigen Fassung.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Vertragsschluss</h2>
                <p>
                    Durch deine Registrierung auf Social-Insan kommt ein Nutzungsvertrag zustande. Dieser ist für beide Parteien verbindlich,
                    sobald die Anmeldung abgeschlossen ist.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Leistungen von Social-Insan</h2>
                <p>
                    Social-Insan bietet eine Plattform zur sozialen Interaktion, zum Teilen von Inhalten und zum Austausch innerhalb einer
                    Community. Die genauen Funktionen können sich im Laufe der Zeit ändern oder erweitert werden.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Pflichten der Nutzer</h2>
                <p>
                    Nutzer verpflichten sich, keine rechtswidrigen, beleidigenden oder jugendgefährdenden Inhalte zu veröffentlichen und
                    die Rechte Dritter zu respektieren.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Haftung</h2>
                <p>
                    Social-Insan übernimmt keine Haftung für die Inhalte der Nutzer. Für Schäden, die durch die Nutzung der Plattform entstehen,
                    haften wir nur bei Vorsatz oder grober Fahrlässigkeit.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Kündigung</h2>
                <p>
                    Nutzer können ihren Account jederzeit löschen. Social-Insan behält sich das Recht vor, Accounts bei Verstoß gegen die AGB
                    oder gesetzliche Vorschriften zu sperren oder zu löschen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Änderungen der AGB</h2>
                <p>
                    Wir behalten uns vor, diese AGB jederzeit anzupassen. Über Änderungen wirst du rechtzeitig informiert. Setzt du die Nutzung
                    fort, gelten die neuen Bedingungen als angenommen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Schlussbestimmungen</h2>
                <p>
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
                    Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
            </section>

            <p className="mt-10 text-sm text-gray-500">
                Stand: April 2025
            </p>
        </main>
    );
}
