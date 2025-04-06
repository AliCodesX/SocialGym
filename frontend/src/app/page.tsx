'use client'

import Hero from "@/app/Components/Hero";
import { Button } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    }
};

export default function Home() {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex justify-center bg-cover bg-center w-full h-full min-h-[90vh]"
                style={{ backgroundImage: 'url("/people.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col justify-center items-start p-10 max-w-[1200px] w-full text-white gap-6">
                    <h1 className="text-3xl md:text-5xl font-bold ">Wir sind Social-Insan!</h1>
                    <p className="text-lg md:text-2xl font-medium">
                        Sport. Integration. Menschlichkeit. <br />
                        Wir fördern junge Menschen durch Ringen, Bildung & interkulturellen Dialog.
                    </p>
                    <div className="flex gap-4 flex-col md:flex-row ">
                        <motion.div whileHover={{ y: -5 }}>
                            <Link href="#mitglied">
                                <Button endContent={<FaArrowRightLong />} className="py-8 px-10 bg-lakers text-black rounded-3xl uppercase">
                                    Mitglied werden
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="hidden md:block"
                            whileHover={{ y: -5 }}>
                            <Link href="#mehr">
                                <Button variant="ghost" className="py-8 px-10 text-white border-white border rounded-3xl uppercase">
                                    Mehr erfahren
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* ÜBER UNS / VEREINSZIELE */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                id="mehr"
                className="bg-white text-black mt-5 py-20 px-6 md:px-12 flex justify-center"
            >
                <div className="max-w-[1100px] flex flex-col gap-8 text-center md:text-left">
                    <h2 className="text-4xl font-bold">Unsere Mission</h2>
                    <p className="text-lg leading-relaxed">
                        Social Insan e.V. wurde 2023 gegründet, um jungen Menschen einen sicheren Raum zu bieten, in dem sie durch
                        Sport, Bildung und interkulturellen Austausch wachsen können.
                        Ob auf der Matte oder im Alltag – bei uns zählt Teamgeist, Disziplin und gegenseitiger Respekt.
                    </p>
                </div>
            </motion.div>

            {/* BILDER & TEXT */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 bg-gray-50"
            >

                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">Social Insan in Hamburg </h3>
                    <p className="text-lg">
                        Unser Verein zählt bereits über 10 aktive Ringerteams und ein wachsendes Netzwerk an engagierten
                        Trainern, Sozialpädagogen und ehrenamtlichen Helfern. Gemeinsam machen wir den Unterschied.
                    </p>
                </div>
                <Image
                    src="/team.jpg"
                    alt="Teamfoto"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg"
                />
            </motion.div>

            {/* PHILOSOPHIE */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-navgray text-white py-20 px-6 flex justify-center"
            >
                <div className="max-w-[1100px] flex flex-col gap-6 text-center md:text-left">
                    <h2 className="text-4xl font-bold">Unsere Philosophie</h2>
                    <p className="text-lg">
                        Wir glauben an die Kraft des Sports als Brücke zwischen Kulturen und als Werkzeug zur
                        Persönlichkeitsentwicklung. <br />
                        Durch gezielte Förderung, klare Werte und echte Gemeinschaft schaffen wir Perspektiven.
                    </p>
                </div>
            </motion.div>

            {/* SOCIAL GYM */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 bg-white"
            >
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">SOCIAL GYM</h3>
                    <p className="text-lg">
                        Mit SOCIAL GYM stärken wir junge Menschen durch Ringkampfsport – körperlich und charakterlich.
                        Wer gute schulische Leistungen zeigt und sich sozial verhält, darf an Wettkämpfen teilnehmen.
                        Der sportpädagogische Ansatz wird von unseren Trainern mit sozialarbeiterischem Hintergrund
                        professionell begleitet.
                    </p>
                </div>
                <Image
                    src="/socialgym.jpg"
                    alt="Social Gym"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg"
                />
            </motion.div>

            {/* SOCIAL BRIDGE */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center justify-center py-16 px-6 gap-12 bg-gray-50"
            >
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">SOCIAL BRIDGE</h3>
                    <p className="text-lg">
                        Mit SOCIAL BRIDGE engagieren wir uns für Geflüchtete sowie für Menschen, die aus politischen,
                        religiösen oder rassistischen Gründen verfolgt werden. <br />
                        Im Zentrum steht der interkulturelle Dialog – getragen von Respekt, Offenheit und dem Wunsch
                        nach echter Verständigung.
                    </p>
                </div>
                <Image
                    src="/social-bridge.jpg" // ← optionales Bild, passe den Pfad an
                    alt="Social Bridge"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg"
                />
            </motion.div>


        </div>
    );
}
