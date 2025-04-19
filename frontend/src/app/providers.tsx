'use client'  // ← ganz wichtig

import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { motion, useScroll } from "framer-motion";
import NavbarComponent from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

export default function Providers({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    // Scroll‑Progress als eigene Komponente hier
    function ScrollProgress() {
        const { scrollYProgress } = useScroll();
        return (
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-navgray origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />
        );
    }

    return (
        <HeroUIProvider>
            <ToastProvider placement="top-right" />
            <ScrollProgress />
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </HeroUIProvider>
    );
}
