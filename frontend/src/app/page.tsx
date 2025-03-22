'use client'

import Hero from "@/app/Components/Hero";
import { Button } from "@heroui/react";
import React from "react";
import Image from "next/image";
import CardGridItem from "@/app/Components/CardGridItem";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
    const CardItemData = [
        {
            image: "/ringen1.png",
            title: "SocialGym",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/ringen2.png",
            title: "SocialGym",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/ringen3.png",
            title: "SocialGym",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/ringen4.png",
            title: "SocialGym",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        }
    ];

    const motionProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 1.5 },
    };

    return (
        <div>
            <motion.div {...motionProps}>
                <Hero />
            </motion.div>

            <motion.div {...motionProps} className="flex justify-center"   >
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <h1 className="text-5xl font-bold">Wir sind SocialGym!</h1>
                        <div>
                            <p>Dein Ringerverein in  Hamburg, informieren Dich jetzt über unsere Angebote und werde noch heute über unsere Onlineformulare Mitglied!</p>
                        </div>
                        <motion.div
                            whileHover={{ y:  -5 }}
                        >
                            <Link  href="/subscriptions">
                                <Button  endContent={<FaArrowRightLong />} className=" py-8 px-10 bg-lakers text-black rounded-3xl " >
                                    Mitglied werden
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex-shrink-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                        <Image src="/wrestle.png" alt="wrestle" width={300} height={300} />
                    </div>
                </div>
            </motion.div>


        </div>
    );
}
