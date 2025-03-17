'use client'
import React from "react";
import { FloatingDock } from "@/app/Components/ui/FloatingDock";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import {InfiniteMovingCards} from "@/app/Components/ui/infiniteCards";
import ContactForm  from "@/app/Components/ContactForm";

const Page = () => {


    const links = [
        {
            title: "Instagram",
            icon: <XIcon />,
            href: "#",
        },
        {
            title: "Twitter",
            icon: <InstagramIcon />,
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
    ]

    


    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-20">Kontakt</h1>
            <div className="flex justify-center flex-col items-center w-full mt-5">
                <ContactForm />
                <div>
                    <FloatingDock items={links} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center mt-20">Unsere Partner</h1>
                    <InfiniteMovingCards items={items}></InfiniteMovingCards>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center mt-20">So findest du uns</h1>
                </div>
            </div>
        </div>
    );
};

export default Page;
