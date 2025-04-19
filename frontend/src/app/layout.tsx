import { Roboto, Russo_One } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const russo = Russo_One({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-headings",
    display: "swap",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-body",
    display: "swap",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${russo.variable} ${roboto.variable}`}>
        <body className="antialiased">
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
