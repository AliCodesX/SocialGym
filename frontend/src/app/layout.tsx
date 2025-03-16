'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

import "./globals.css";
import NavbarComponent from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeroUIProvider>
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
