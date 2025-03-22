'use client'
import React from "react";
import { FloatingDock } from "@/app/Components/ui/FloatingDock";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { InfiniteMovingCards } from "@/app/Components/ui/infiniteCards";
import ContactForm  from "@/app/Components/ContactForm";
import Maps from "@/app/Components/Maps";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Page = () => {

    const links = [
        {
            title: "Instagram",
            icon: <InstagramIcon />,
            href: "#",
        },
        {
            title: "Twitter",
            icon: <XIcon />,
            href: "#",
        },
        {
            title: "GitHub",
            icon: <GitHubIcon />,
            href: "#",
        },
    ];

    const items = [
        {
            altText : "DRB",
            imageUrl: "DRB-Logo.png",
        },
        {
            altText : "DRB",
            imageUrl: "DRB-Logo.png",
        },
        {
            altText : "DRB",
            imageUrl: "DRB-Logo.png",
        },
    ];

    return (
        <div >
            <motion.h1
                className="text-4xl font-bold text-center mt-20"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                Kontakt
            </motion.h1>

            <div className="flex justify-center flex-col items-center w-full mt-5">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <ContactForm/>
                </motion.div>

                {/*    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}

                >
                    <FloatingDock items={links} />
                </motion.div>*/}


                <motion.h1
                    className="text-4xl font-bold text-center mt-20 mb-5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    So findest du uns
                </motion.h1>
                <Maps></Maps>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <Maps/>
                </motion.div>


                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}

                >
                    <InfiniteMovingCards items={items}/>
                </motion.div>
            </div>
        </div>
    );
};

export default Page;
