"use client";
import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#F4F4F4] text-black py-10 mt-[200px]">
            <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                    <ul className="text-sm space-y-2">
                        <li className="font-medium">SocialGym</li>
                        <li> Am Schilfpark 26</li>
                        <li>21029 Hamburg</li>
                        <li>Telefon: <a href="tel:04032044777" className="text-hoverColor">040/ 320 44 777</a></li>
                        <li>Email: <a href="mailto:fahimafshar@gmail.com" className="text-hoverColor">fahimafshar@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <Link href="/" className="hover:underline">
                                Impressum
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Datenschutzerklärung
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Allgemeine Geschäftsbedingungen
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4"> SocialMedia </h3>
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://www.tiktok.com/@momo.zozo.barber?_t=8sTxmGtdyxa&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="text-2xl  hover:text-hoverColor"
                        >
                            <FaTiktok />
                        </a>
                        <a
                            href="https://www.instagram.com/momo.zozo.barber?igsh=aDQ2emNuaGVxbnBk"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-2xl  hover:text-hoverColor"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
                <p>&copy; {new Date().getFullYear()}  SocialGym. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
};

export default Footer;