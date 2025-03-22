'use client'
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroAbout from "@/app/Components/AboutHero";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero-Bereich */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <HeroAbout title="Unterstütze unseren Ringerverein!" />
            </motion.div>

            {/* Header */}
            <motion.header
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    Werde Teil unserer Erfolgsgeschichte!
                </h1>
            </motion.header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto p-6 space-y-10 flex-1">
                {/* Warum spenden? */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-10"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Warum unterstützen?
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Deine Spende hilft, talentierte Ringer zu fördern, Trainingsbedingungen zu verbessern und unsere Athleten auf Wettkämpfe vorzubereiten.
                        Jeder Beitrag trägt dazu bei, unseren Sport lebendig zu halten und neue Champions hervorzubringen!
                    </p>
                </motion.section>

                {/* Wofür wird gespendet? */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Wofür wird deine Spende genutzt?
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Mit den Spenden finanzieren wir Trainingsausrüstung, Fahrten zu Wettkämpfen, Nachwuchsprogramme und Trainerkosten.
                        So schaffen wir die besten Voraussetzungen für unsere Sportlerinnen und Sportler!
                    </p>
                </motion.section>

                {/* Bild als visuelles Highlight */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full h-80 md:h-96 rounded-lg shadow-xl overflow-hidden"
                >
                    <Image
                        src="/dontation.png"
                        alt="Spenden"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                    />
                </motion.section>

                {/* Spenden-Button */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <Link href="https://buy.stripe.com/test_4gw17j23c7yW9C85kk" passHref>
                        <Button
                            size="lg"
                            aria-label="Jetzt spenden"
                            className="bg-lakers text-black hover:bg-yellow-300 transition-all duration-300 px-8 py-3 shadow-lg"
                        >
                            Jetzt unterstützen
                        </Button>
                    </Link>
                </motion.section>

                {/* Erfolge & Vertrauen */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="bg-lakers p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                        Unsere Erfolge
                    </h3>
                    <p className="text-gray-600 text-base">
                        Dank eurer Unterstützung konnten wir in den letzten Jahren große Meilensteine erreichen:
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-600">
                        <li>Über 200 geförderte Nachwuchs-Ringer</li>
                        <li>30+ Medaillen bei nationalen Wettkämpfen</li>
                        <li>Neue Trainingsausrüstung für unser Team</li>
                    </ul>
                </motion.section>
            </main>
        </div>
    );
};

export default Page;