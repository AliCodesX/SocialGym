'use client'
import React from "react";
import { InfiniteMovingCards } from "@/app/Components/ui/infiniteCards";
import ContactForm from "@/app/Components/ContactForm";
import Maps from "@/app/Components/Maps";
import { motion } from "framer-motion";
import HeroAbout from "@/app/Components/AboutHero";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import CardGridItemCoach from "@/app/Components/CardGridItem";

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

            <div className="flex flex-col md:flex-row gap-[150px] items-center justify-center mt-20 max-w-5xl mx-auto px-4">
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                    <div
                        className="text-4xl font-bold flex flex-wrap"
                    >
                        Gerne stehen wir mit Rat und Tat zur Verfügung!
                    </div>
                    <p className="mt-4">
                        Sie können uns jederzeit kontaktieren – wir stehen Ihnen gerne zur Verfügung und bemühen uns um eine zeitnahe Rückmeldung.
                        Senden Sie uns eine Nachricht oder treten Sie direkt mit uns in Kontakt – wir nehmen uns jedem Anliegen aufmerksam an.
                        Bitte beachten Sie, dass <span className="font-semibold">Terminvereinbarungen</span> mittwochs in der Zeit von <span className="font-semibold">15:30 bis 18:30 Uhr</span>   möglich sind.
                    </p>
                    {/* Kontaktinfos mit Icons */}
                    <div className="mt-6 flex gap-10 shadow-small p-10 rounded-md">
                        <div className="flex items-center flex-col gap-3">
                            <FaEnvelope className="text-3xl text-lakers"/>
                            <p className="uppercase font-bold">e-mail</p>
                            <span   className="font-light text-lg">info@example.com</span>
                        </div>
                        <div className="flex items-center flex-col gap-3">
                            <FaPhone className="text-3xl text-lakers"/>
                            <p className="uppercase font-bold">Telefon</p>

                            <span className="font-light text-lg">+49 40 80040433</span>
                        </div>
                    </div>
                </motion.div>

                {/* Rechte Spalte: ContactForm */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    className="w-full "
                >
                    <ContactForm/>
                </motion.div>
            </div>

            <motion.div
                id="mehr"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="relative flex flex-col items-center text-center mt-20"
            >
                <h1 className="text-4xl font-bold mb-4">Unser Vorstand</h1>
                <CardGridItemCoach items={CardPresidentData}/>
            </motion.div>

            {/* Abschnitt "Hier findest du uns!" */}
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

            {/* Infinite Moving Cards */}
            {/*<motion.div*/}
            {/*    variants={fadeUpVariant}*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    viewport={{once: true, amount: 0.3}}*/}
            {/*    className="w-full max-w-[1200px] mx-auto px-4"*/}
            {/*>*/}
            {/*    <InfiniteMovingCards items={items}/>*/}
            {/*</motion.div>*/}
        </div>
    );
}
