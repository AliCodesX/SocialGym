"use client";
import React, { useState } from "react";
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
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
    Button,
} from "@heroui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const InsanLogo = () => (
    <Image className="rounded-full" src="/insan.png" alt="Insan Logo" width={60} height={50} />
);

const NavigationMenuItems = [
    { label: "Home", href: "/" },
    { label: "SocialGym", href: "/about" },
    {label: "SocialBridge", href: "/socialbridge" },
    { label: "Kontakt", href: "/contact" },




];const NavigationMenuItemsSM = [
    { label: "Home", href: "/" },
    { label: "SocialGym", href: "/about" },
    { label: "Kontakt", href: "/contact" },
    {label: "SocialBridge", href: "/socialbridge" },
    { label: "Mitgliedschaft", href: "/subscriptions" },
    { label: "Spenden", href: "/donate" },
    { label: "Traningsplan", href: "about/#trainingszeiten" },
];

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Navbar className="bg-[#a0c8e3] p-3.5 text-black">
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/">
                        <InsanLogo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {NavigationMenuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <NavbarItem key={item.href} className="relative">
                            <Link
                                href={item.href}
                                className={`relative px-2 py-1 text-base font-medium ${
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

                {/* Dropdown für Mehr */}
                <Dropdown   className="bg-[#a0c8e3]">
                    <DropdownTrigger>
                        <Button

                            disableRipple
                            radius="sm"
                            variant="light"
                            endContent={<RiArrowDropDownLine />}
                            className="px-2 py-1 text-base font-medium text-black"
                        >
                            Mehr
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Mehr Menü"
                        itemClasses={{
                            base: "gap-4 text-base font-medium text-black",
                        }}
                    >
                        <DropdownItem
                            className="!bg-[#a0c8e3] hover:!bg-[#a0c8e3]"
                            key="trainingsplan"
                            as={Link}
                            href="/about#trainingszeiten"
                        >
                            Trainingsplan
                        </DropdownItem>
                        <DropdownItem
                            key="Spenden"
                            className="!bg-[#a0c8e3] hover:!bg-[#a0c8e3]"
                            as={Link}
                            href="/donate"

                        >
                            Spenden
                        </DropdownItem>
                        <DropdownItem
                            className="!bg-[#a0c8e3] hover:!bg-[#a0c8e3]"
                            key="Mitlgliedschaft"
                            as={Link}
                            href="/subscriptions"

                        >
                            Mitgliedschaft
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="sm:hidden">
                    <NavbarMenuToggle
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="w-10 h-10 flex justify-center items-center"
                    />
                </NavbarItem>
            </NavbarContent>

            {isMenuOpen && (
                <NavbarMenu className="bg-[#a0c8e3] mt-3 text-navgray">
                    {NavigationMenuItemsSM.map((item) => (
                        <NavbarMenuItem
                            className="border-b border-navgray last:border-b-0 font-bold p-2 text-base text-black"
                            key={item.href}
                        >
                            <Link color="foreground" href={item.href}>
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            )}
        </Navbar>
    );
}
