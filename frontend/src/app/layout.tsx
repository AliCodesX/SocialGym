// app/layout.tsx
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

// Montserrat für Überschriften
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-headings",
});

// Roboto für Fließtext
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
    variable: "--font-body",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="de"
            className={`${montserrat.variable} ${roboto.variable}`}
        >
        <body className="antialiased font-body">
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
