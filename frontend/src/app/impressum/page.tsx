const Page = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-6 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Impressum</h1>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                <p>
                    Social-Insan 2023 e. V.<br />
                    Musterstraße 12<br />
                    D-12345 Musterstadt
                </p>
                <p className="mt-4">
                    Vereinsregister: VR 12345<br />
                    Registergericht: Amtsgericht Musterstadt
                </p>
                <p className="mt-4">
                    Vertreten durch:<br />
                    Maxim Louis Plucinski<br />
                    Ole Grot
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
                <p>
                    Telefon: +49 (0) 123 456789<br />
                    E-Mail: info@social-insan2025.de<br />
                    Website: www.social-insan2025.de
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Maxim Louis Plucinski<br />
                    Musterstraße 12<br />
                    D-12345 Musterstadt
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Webdesign & Programmierung</h2>
                <p>
                    Ole Grot / grotstudios<br />
                    <a href="https://grotstudios.de" className="text-blue-600 hover:underline">https://grotstudios.de</a>
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">EU-Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </div>
    )
}

export default Page
