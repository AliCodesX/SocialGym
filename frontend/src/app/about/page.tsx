'use client'
import React from 'react'
import HeroAbout from "@/app/Components/AboutHero";
import Image from "next/image";
import CardGridItemCoach from "@/app/Components/CardGridItem";
import { motion } from "framer-motion";

const Page = () => {




    const CardTrainerData = [
        {
            image: "/coach1.jpg",
            title: "Trainer 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum",
            email: "qZ9dA@example.com",
            telefone: "123456789"
        },
        {
            image: "/coach2.jpeg",
            title: "Trainer 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum",
            email: "qZ9dA@example.com",
            telefone: "123456789"


        },
        {
            image: "/coach3.jpg",
            title: "Trainer 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum",
            email : "qZ9dA@example.com",
            telefone: "123456789"
        },
        {
            image: "/coach4.jpg",
            title: "Trainer 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum",
            email: "qZ9dA@example.com",
            telefone: "123456789"

        }
    ]

    const CardPresidentData = [
        {
            image: "/president1.jpg",
            title: "President 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/president2.jpg",
            title: "President 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/president3.jpg",
            title: "President 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/president4.jpg",
            title: "President 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        }
    ]

    const motionProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 1 },
    };

    return (
        <div>
            {/*<motion.div {...motionProps}>*/}
            {/*    <HeroAbout/>*/}
            {/*</motion.div>*/}

            <motion.div
                {...motionProps}
                className="flex flex-col md:flex-row items-center justify-center mt-10 px-4"
            >
                <div className="mb-4 md:mb-0 md:mr-20">
                    <Image
                        src="/wir.jpeg"
                        alt="wrestle"
                        width={500}
                        height={1000}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-[800px] text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Das sind Wir!</h2>
                    <p>
                        Der SocialGym Ringerverein wurde im Sommer 2023 gegründet und hat bereits zehn aktive
                        Ringerteams sowie eine
                        wachsende Fitness- und Athletikabteilung. Unser Fokus liegt auf zukünftigem Wachstum, der
                        Förderung neuer Talente
                        und der Begeisterung der Jugend für den Ringsport. Unser Ziel ist es,
                        die Community durch Sport, Disziplin und Gemeinschaftssinn zu stärken und zu verbinden.
                        Du hast Fragen oder möchtest uns kennenlernen? Melde dich jederzeit gerne bei uns!
                        <br/>
                        <br/>
                            <span className="font-bold">E-Mail</span>:
                            <a className="text-lakers font-bold" href="mailto:info@socialgym.com">  info@socialgym.com</a>
                            <br/>
                            <span className="font-bold">Telefon</span>:
                            <span className="font-bold text-lakers "> 040/  80040433</span>
                    </p>
                </div>
            </motion.div>


            <motion.div  {...motionProps} className="relative flex flex-col items-center text-center mt-20">
                <h1 className="text-4xl font-bold">Unser Trainerteam</h1>
                <CardGridItemCoach items={CardTrainerData}/>
            </motion.div>
            <motion.div  {...motionProps} className="relative flex flex-col items-center text-center mt-20">
                <h1 className="text-4xl font-bold">Unser Vorstand </h1>
                <CardGridItemCoach items={CardPresidentData}/>
            </motion.div>

            <motion.div {...motionProps} className="flex justify-center bg-fuchsia-900 mt-20">
                <div
                    className="flex flex-col md:flex-row gap-10  text-white justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold">Club's Philosophy</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...motionProps} className="flex justify-center bg-lakers">
                <div
                    className="flex flex-col md:flex-row gap-10 justify-center items-center  text-black md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold">Athletic Integration</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...motionProps} className="flex justify-center">
                <div
                    className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold">Personal Development</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </motion.div>


        </div>
    )
}

export default Page
