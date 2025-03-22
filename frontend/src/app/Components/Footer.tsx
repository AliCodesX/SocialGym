"use client";
import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const hoverAnimation = {
        whileHover: { y: -5 },
        transition: { type: "spring", stiffness: 300 }
    };

    return (
        <footer className="bg-navgray text-white py-10 mt-10 px-4">
            <div className="text-center">
                {/* Social Media Überschrift */}
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center space-x-6">
                    <motion.a href="" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                        <FaTiktok />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/socialgym.hamburg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                        <FaInstagram />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/fahim-afshar-8412b51b3/?originalSubdomain=de" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-[#FDB927]" {...hoverAnimation}>
                        <FaLinkedin />
                    </motion.a>
                </div>

                {/* Trennlinie & Copyright */}
                <div className="mt-10 pt-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} SocialGym. Alle Rechte vorbehalten.</p>
                </div>
            </div>

            {/* Footer Links (Responsiv) */}
            <div className="mt-6 text-center">
                <div className="flex flex-row flex-wrap text-sm justify-center items-center space-x-6 sm:space-x-8 text-white">
                    <motion.a href="/impressum" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Impresum</motion.a>
                    <motion.a href="/datenschutz" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Datenschutz</motion.a>
                    <motion.a href="/agb" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>AGB</motion.a>
                    <motion.a href="/vereinssatzung" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Vereinssatzung</motion.a>
                    <motion.a href="/mitgliedschaft-kuendigen" className="hover:text-[#FDB927] p-1" {...hoverAnimation}>Mitgliedschaft kündigen</motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
