'use client'
import React from 'react';
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Page = () => {
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <motion.header
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold text-center">
                    Unterstütze unseren Verein!
                </h1>
            </motion.header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto p-6 space-y-10">
                {/* Warum spenden? */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-20"
                >
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                        Warum spenden?
                    </h2>
                    <p className="text-gray-800 text-lg">
                        Deine Spende ermöglicht es uns, wichtige Projekte in der Gemeinschaft umzusetzen.
                        Jeder Beitrag macht einen Unterschied und unterstützt unsere Initiativen in Bildung,
                        sozialer Unterstützung und Umweltschutz.
                    </p>
                </motion.section>

                {/* Wofür wird gespendet? */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                        Wofür wird gespendet?
                    </h2>
                    <p className="text-gray-800 text-lg">
                        Mit den Spenden finanzieren wir Bildungsprogramme, soziale Projekte und Umweltinitiativen,
                        die direkt Menschen in Not helfen und langfristig nachhaltige Veränderungen bewirken.
                    </p>
                </motion.section>

                {/* Bild als visuelles Highlight */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
                        <Image
                            src={"/dontation.png"}
                            alt="Spenden - Gemeinsam Gutes tun"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
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
                            className="bg-lakers text-black  px-8 py-3 shadow-lg"
                        >
                            Jetzt spenden
                        </Button>
                    </Link>
                </motion.section>
            </main>
        </div>
    );
};

export default Page;
