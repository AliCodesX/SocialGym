'use client'
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/app/Components/Hero";
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
                viewport={{ once: true, amount: 0.2 }}
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
                    <h2 className="text-4xl font-bold mb-4">Das sind Wir!</h2>
                    <p className="text-lg">
                        Der SocialGym Ringerverein wurde im Sommer 2023 gegründet und hat bereits zehn aktive
                        Ringerteams sowie eine wachsende Fitness- und Athletikabteilung. Unser Fokus liegt auf
                        zukünftigem Wachstum, der Förderung neuer Talente und der Begeisterung der Jugend für den Ringsport.
                        Unser Ziel ist es, die Community durch Sport, Disziplin und Gemeinschaftssinn zu stärken und zu verbinden.
                        Du hast Fragen oder möchtest uns kennenlernen? Melde dich jederzeit gerne bei uns!
                        <br/><br/>
                        <span className="font-bold">E-Mail</span>:
                        <a className="text-lakers font-bold" href="mailto:info@socialgym.com"> info@socialgym.com</a>
                        <br/>
                        <span className="font-bold">Telefon</span>:
                        <span className="font-bold text-lakers"> 040/  80040433</span>
                    </p>
                </div>
            </motion.div>



            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center bg-navgray mt-20 py-16"
            >
                <div className="flex flex-col md:flex-row gap-10 text-white justify-center items-center md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Club's Philosophy</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis.
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center bg-gradient-to-r from-yellow-500 to-yellow-400 py-16"
            >
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center text-black md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Athletic Integration</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis.
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center py-16"
            >
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start max-w-[1200px] w-full p-10 rounded-lg">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">Personal Development</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis.
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht. Facilisis
                            fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Page
