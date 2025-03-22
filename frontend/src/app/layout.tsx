'use client'
import { Oswald, Poppins } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

import "./globals.css";
import NavbarComponent from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
    weight: ["400", "700"], // Für normale & fette Titel
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "600"], // Für verschiedene Textgrößen
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${oswald.variable} ${poppins.variable} antialiased`}>
        <HeroUIProvider>
            <ToastProvider placement="top-right" />
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </HeroUIProvider>
        </body>
        </html>
    );
}
