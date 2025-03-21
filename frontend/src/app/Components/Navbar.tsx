"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";

export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

const NavigationMenuItems = [
    { label: "Home", href: "/" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
    { label: "Spenden", href: "/donate" },
];

export default function NavbarComponent() {
    const pathname = usePathname(); // Holt die aktuelle URL aus Next.js

    return (
        <Navbar className="bg-black py-5">
            <NavbarContent>
                <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden" />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-white">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Navigation */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {NavigationMenuItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <NavbarItem key={item.href} className="relative">
                            <Link
                                href={item.href}
                                className={`relative px-2 py-1 font-medium ${
                                    isActive ? "text-lakers" : "text-white"
                                }`}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 h-[2px] w-full bg-lakers"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        exit={{ width: 100 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-lakers font-bold drop-shadow-md" href="/subscriptions" variant="flat">
                     Mitgliedschaft
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className="bg-white">
                {NavigationMenuItems.map((item) => (
                    <NavbarMenuItem className="border-b border-gray-300 last:border-b-0 font-bold p-2" key={item.href}>
                        <Link color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
