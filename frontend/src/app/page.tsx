'use client'

import Hero from "@/app/Components/Hero";
import { Button } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CardGridItemCoach from "@/app/Components/CardGridItem";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.5 }
    }
};


const CardPresidentData = [
    {
        image: "/profile.jpg",
        title: "Vorstandsvorsitzender",
        description: "Herr Fahim Afshar",
        email: "fahimfshar@example.com",
        telefone: " 0179-56435745"
    },
    {
        image: "/profile.jpg",
        title: "Pressesprecher",
        description: "Herr Omed Mirzei"
    },
    {
        image: "/profile.jpg",
        title: "Schatzmeister",
        description: "Herr Daud Mirzei"
    },
    {
        image: "/profile.jpg",
        title: "Schriftführer",
        description: "Frau Negissa Qhuriani"
    },
    {
        image: "/profile.jpg",
        title: "Organisator",
        description: "Frau Furosan Mirzei"
    },

];
export default function Home() {


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
                viewport={{once: true, amount: 0.3}}
                className="flex justify-center "
            >
                <div
                    className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex flex-col gap-6 max-w-[800px] w-full text-center md:text-left">
                        <h1 className="text-5xl font-bold">Wir sind Social-Insan!</h1>
                        <div>
                            <p className="font-semibold ">
                                Social Insan ist ein gemeinnütziger Verein, der Sport, Integration und Menschlichkeit
                                miteinander verbindet.
                                Mit SOCIAL GYM stärken wir junge Menschen durch Ringkampfsport – nicht nur körperlich,
                                sondern auch charakterlich. Wer gute schulische Leistungen zeigt und sich sozial
                                verhält, darf an Wettkämpfen teilnehmen. Der sportpädagogische Ansatz wird durch unseren
                                Trainer mit sozialarbeiterischem Hintergrund getragen.
                                Durch SOCIAL BRIDGE engagieren wir uns für Geflüchtete sowie für Menschen, die aus
                                politischen, religiösen oder rassistischen Gründen verfolgt werden. Dabei steht der
                                interkulturelle Dialog im Mittelpunkt.
                                Unser Vorstand bringt eigene Migrationsgeschichte mit. Als Brücke zwischen Orient und
                                Okzident verstehen wir uns als Botschafter eines humanistischen Miteinanders – für mehr
                                Verständnis, Zusammenhalt und gelebte Vielfalt.
                            </p>
                        </div>
                        <motion.div whileHover={{y: -5}}>
                            <Link href="/subscriptions">
                                <Button
                                    endContent={<FaArrowRightLong/>}
                                    className="py-8 px-10 bg-lakers text-black rounded-3xl"
                                >
                                    Mitglied werden
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex-shrink-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                        <Image src="/wrestle.png" alt="wrestle" width={300} height={300}/>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="relative flex flex-col items-center text-center mt-20"
            >
                <h1 className="text-4xl font-bold mb-4">Unser Vorstand</h1>
                <CardGridItemCoach items={CardPresidentData}/>
            </motion.div>
        </div>
    );
}
