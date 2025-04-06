// app/datenschutz/page.tsx
import React from "react";

export default function DatenschutzPage() {
    return (
        <main className="max-w-4xl mx-auto p-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
                <p>
                    Der Schutz deiner persönlichen Daten ist uns ein besonderes Anliegen.
                    Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Verantwortliche Stelle</h2>
                <p>
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mt-2">
                    Social-Insan <br />
                    Max Mustermann<br />
                    Musterstraße 1<br />
                    12345 Musterstadt<br />
                    E-Mail: kontakt@social-insan.de
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
                <p>
                    Beim Besuch dieser Website werden automatisch Informationen technischer Natur erfasst (z.B. IP-Adresse, Browsertyp,
                    Betriebssystem). Diese Daten sind notwendig, um dir die Website korrekt anzuzeigen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Kontaktaufnahme</h2>
                <p>
                    Wenn du uns per E-Mail oder über ein Kontaktformular kontaktierst, werden deine Angaben inklusive der von dir dort
                    angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Deine Rechte</h2>
                <p>
                    Du hast jederzeit das Recht auf Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Externe Dienste und Tools</h2>
                <p>
                    Wir verwenden ggf. Drittanbieter wie Google Fonts, Stripe oder Hosting-Anbieter, die personenbezogene Daten verarbeiten können.
                    Es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                    Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen
                    Anforderungen entspricht.
                </p>
            </section>

            <p className="mt-10 text-sm text-gray-500">
                Stand: April 2025
            </p>
        </main>
    );
}
