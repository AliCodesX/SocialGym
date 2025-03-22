'use client'
import React from "react";
import { InfiniteMovingCards } from "@/app/Components/ui/infiniteCards";
import ContactForm from "@/app/Components/ContactForm";
import Maps from "@/app/Components/Maps";
import { motion } from "framer-motion";
import HeroAbout from "@/app/Components/AboutHero";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Page() {
    const items = [
        { altText: "DRB", imageUrl: "DRB-Logo.png" },
        { altText: "DRB", imageUrl: "DRB-Logo.png" },
        { altText: "DRB", imageUrl: "DRB-Logo.png" },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero-Bereich bleibt unverändert */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
            >
                <HeroAbout title="Kontakt"/>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-20 items-center justify-center mt-20 max-w-5xl mx-auto px-4">
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                    <motion.h1
                        className="text-4xl font-bold flex flex-wrap"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        Gerne stehen wir mit Rat und Tat zur Verfügung!
                    </motion.h1>
                    <p className="mt-4">
                        Wir sind jederzeit zu erreichen und werden Dir in Kürze weiterhelfen. Schreib uns eine Nachricht
                        oder kontaktiere uns direkt – wir haben für jedes Thema ein offenes Ohr.
                    </p>
                    {/* Kontaktinfos mit Icons */}
                    <div className="mt-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-2xl text-lakers"/>
                            <span className="font-medium text-lg">info@example.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl text-lakers"/>
                            <span className="font-medium text-lg">+49 40 80040433</span>
                        </div>
                    </div>
                </div>

                {/* Rechte Spalte: ContactForm */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    className="w-full max-w-md"
                >
                    <ContactForm/>
                </motion.div>
            </div>

            {/* Abschnitt "Hier findest du uns!" */}
            <motion.h1
                className="text-4xl font-bold text-center mt-32 mb-10"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
            >
                Hier findest du uns!
            </motion.h1>

            {/* Maps */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
                className="w-full max-w-[1200px] mx-auto px-4 mb-16 flex justify-center"
            >
                <Maps/>
            </motion.div>

            {/* Infinite Moving Cards */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
                className="w-full max-w-[1200px] mx-auto px-4"
            >
                <InfiniteMovingCards items={items}/>
            </motion.div>
        </div>
    );
}
