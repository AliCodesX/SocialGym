'use client'
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/app/Components/Hero";
import Link from "next/link";
import { Button } from "@heroui/react";
import Maps from "@/app/Components/Maps";
import {FaArrowRightLong} from "react-icons/fa6";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const trainingszeiten = [
    { tag: "Montag", zeit: "18:00 - 20:00", ort: "Halle A" },
    { tag: "Dienstag", zeit: "16:00 - 18:00", ort: "Halle B" },
    { tag: "Mittwoch", zeit: "18:00 - 20:00", ort: "Halle A" },
    { tag: "Donnerstag", zeit: "16:00 - 18:00", ort: "Halle B" },
    { tag: "Freitag", zeit: "18:00 - 20:00", ort: "Halle A" },
    { tag: "Samstag", zeit: "10:00 - 12:00", ort: "Halle C" }
];
const Page = () => {
    return (
        <div>
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
            >
                <Hero/>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="flex flex-col md:flex-row items-center justify-center mt-10 px-4"
            >
                <div className="mb-4 md:mb-0 md:mr-20">
                    <Image
                        src="/wir.jpeg"
                        alt="Wrestling Action"
                        width={500}
                        height={1000}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-[800px] text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">Trete uns jetzt bei!</h2>
                    <p className="text-lg">
                        Der SocialGym Ringerverein wurde im Sommer 2023 gegründet und bietet dir nicht nur erstklassiges
                        Wrestling,
                        sondern auch eine umfassende Fitness- und Athletikabteilung. Unser Ziel ist es, Talente zu
                        fördern und die Jugend
                        für den Ringsport zu begeistern. Erlebe Gemeinschaft, Disziplin und sportlichen Ehrgeiz bei uns.
                        <br/><br/>
                        Hast du Fragen oder möchtest mehr erfahren? Wir freuen uns, von dir zu hören.
                    </p>
                        <motion.div whileHover={{y: -5}}>
                            <Link href= "/subscriptions">
                                <Button endContent={<FaArrowRightLong/>}
                                        className="py-8 px-8 bg-lakers text-white rounded-3xl uppercase">
                                    Mitglied werden
                                </Button>
                            </Link>
                        </motion.div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="flex justify-center bg-navgray mt-20 py-16"
            >
                <div
                    id="trainingszeiten"
                    className="flex flex-col md:flex-row gap-10 text-white justify-center items-center md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Unsere Philosophie</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p className="text-lg">
                            Bei uns steht der Mensch im Mittelpunkt. Wir fördern nicht nur sportliche Leistungen,
                            sondern legen auch großen Wert auf
                            Persönlichkeitsentwicklung, Teamgeist und gegenseitigen Respekt. Unser Verein bietet dir die
                            ideale Umgebung, um
                            deine Ziele zu erreichen und über dich hinauszuwachsen.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="flex justify-center bg-[#a0c8e3] py-16"
            >
                <div
                    className="flex flex-col md:flex-row gap-10 justify-center items-center text-black md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Athletische Integration</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p className="text-lg">
                            Unsere Trainingsprogramme verbinden Technik, Kraft und Ausdauer. Ob Anfänger oder Profi –
                            wir bieten maßgeschneiderte
                            Trainingspläne, die deine individuellen Fähigkeiten fördern und dir dabei helfen, auf dem
                            Mattenfeld und im Leben stets
                            dein Bestes zu geben.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div

                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="flex justify-center py-16"
            >
                <div
                    className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Persönliche Entwicklung</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p className="text-lg">
                            Wir glauben daran, dass sportliche Erfolge eng mit der persönlichen Weiterentwicklung
                            verbunden sind. Neben
                            intensivem Training unterstützen wir dich dabei, mentale Stärke aufzubauen, Verantwortung zu
                            übernehmen und
                            deine sozialen Kompetenzen zu erweitern – für ein erfolgreiches Miteinander auf und neben
                            der Matte.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Trainingszeiten-Tabelle */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="flex justify-center bg-white py-16"
            >
                <div

                    className="max-w-[1200px] w-full p-10 rounded-lg">
                    <h1 className="text-4xl font-bold text-center mb-8">Trainingszeiten</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-fixed border-collapse">
                            <thead>
                            <tr className="bg-navgray text-white">
                                <th className="w-1/3 px-4 py-2 border">Tag</th>
                                <th className="w-1/3 px-4 py-2 border">Zeit</th>
                                <th className="w-1/3 px-4 py-2 border">Ort</th>
                            </tr>
                            </thead>
                            <tbody>
                            {trainingszeiten.map((session, index) => (
                                <tr key={index}>
                                    <td className="w-1/3 px-4 py-2 border">{session.tag}</td>
                                    <td className="w-1/3 px-4 py-2 border">{session.zeit}</td>
                                    <td className="w-1/3 px-4 py-2 border">{session.ort}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            <motion.h1
                className="text-4xl font-bold text-center mt-32 mb-10"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
            >
                So findest du uns!
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

        </div>
    )
}

export default Page
