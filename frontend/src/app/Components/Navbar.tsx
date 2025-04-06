"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
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

export const InsanLogo = () => (
    <Image src="/insan.png" alt="Insan Logo" width={50} height={50} />
);

const NavigationMenuItems = [
    { label: "Home", href: "/" },
    { label: "Kontakt", href: "/contact" },
    { label: "Spenden", href: "/donate" },
    {label: "Projekte", href: "/projects"},
    { label: "SocialGym", href: "/about" },
];

export default function NavbarComponent() {
    const pathname = usePathname(); // Holt die aktuelle URL aus Next.js

    return (
        <Navbar className="bg-[#a0c8e3] p-3.5 text-black">
            <NavbarContent>
                <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden" />
                <NavbarBrand>
                    <InsanLogo />
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
                                    isActive ? "text-navgray" : "text-black"
                                }`}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 h-[2px] w-full bg-navgray"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        exit={{ width: 100 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                )}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-navgray font-bold text-white drop-shadow-md" href="/subscriptions" variant="flat">
                     Mitgliedschaft
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className=" bg-[#a0c8e3] mt-3 text-navgray ">
                {NavigationMenuItems.map((item) => (
                    <NavbarMenuItem className="border-b border-navgray last:border-b-0 font-bold p-2" key={item.href}>
                        <Link color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
