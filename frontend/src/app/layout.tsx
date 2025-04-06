'use client'
import { Oswald, Poppins } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { motion, useScroll } from "framer-motion";

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

// ScrollProgress-Komponente, die den Fortschritt des Scrollens anzeigt
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-navgray origin-left z-50"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${oswald.variable} ${poppins.variable} antialiased`}>
        <HeroUIProvider>
            <ToastProvider placement="top-right" />
            {/* ScrollProgress-Komponente einfügen */}
            <ScrollProgress />
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
