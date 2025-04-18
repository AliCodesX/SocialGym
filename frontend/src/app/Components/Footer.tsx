"use client";
import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {InfiniteMovingCards} from "@/app/Components/ui/infiniteCards";
import Image from "next/image";

const Footer = () => {
    const hoverAnimation = {
        whileTap : { y: -5 },
        whileHover: { y: -5 },
        transition: { type: "spring", stiffness: 300 }
    };

    const Items = [
        {imageUrl: "DRB-Logo.png", altText: "DRB"},
        {imageUrl: "DRB-Logo.png", altText: "DRB"},
        {imageUrl: "DRB-Logo.png", altText: "DRB"},
        {imageUrl: "DRB-Logo.png", altText: "DRB"},
    ]


    return (
        <div>
            <div className="bg-[#a0c8e3] items-center w-full flex justify-center p-20">
                <InfiniteMovingCards items={Items}>
                </InfiniteMovingCards>
            </div>
            <div className="w-full flex justify-center mt-[-5rem] mb-[-4rem] relative z-5">
                <Image
                    src="/insan.png"
                    alt="Insan Logo"
                    width={100}
                    height={100}
                    className="rounded-full shadow-lg mb-2.5"
                />
            </div>
            <footer className="bg-navgray text-white py-20  px-4">
                <div className="text-center">
                    {/* Social Media Überschrift */}
                    <h3 className="text-lg font-semibold mb-4">Social Media</h3>

                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center space-x-6">
                        <motion.a href="" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                                  className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                            <FaTiktok/>
                        </motion.a>
                        <motion.a href="https://www.instagram.com/socialgym.hamburg/" target="_blank"
                                  rel="noopener noreferrer" aria-label="Instagram"
                                  className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                            <FaInstagram/>
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/fahim-afshar-8412b51b3/?originalSubdomain=de"
                                  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                  className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                            <FaLinkedin/>
                        </motion.a>
                    </div>

                    {/* Trennlinie & Copyright */}
                    <div className="mt-10 pt-4 text-sm">
                        <p>&copy; {new Date().getFullYear()} SocialGym. Alle Rechte vorbehalten.</p>
                    </div>
                </div>

                {/* Footer Links (Responsiv) */}
                <div className="mt-6 text-center">
                    <div
                        className="flex flex-row flex-wrap text-sm justify-center items-center space-x-6 sm:space-x-8 text-white">
                        <motion.a href="/impressum" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Impresum
                        </motion.a>
                        <motion.a href="/datenschutz"
                                  className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Datenschutz
                        </motion.a>
                        <motion.a href="/agb" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>AGB</motion.a>
                        <motion.a href="/vereinssatzung"
                                  className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Vereinssatzung
                        </motion.a>
                        <motion.a href="/cancel" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Mitgliedschaft
                            kündigen
                        </motion.a>
                        <motion.a href="/revocation"
                                  className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Widerrufsbelehrung
                        </motion.a>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;
