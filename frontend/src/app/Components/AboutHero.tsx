'use client'
import React from "react";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageSrc?: string;
}

const HeroAbout: React.FC<HeroProps> = ({title, imageSrc = "/HeroAll.jpg",}) => {
    return (
        <div className="relative w-full h-[30vh] flex items-center justify-center">
            <Image
                src={imageSrc}
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            <div className="relative flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-lakers opacity-75">{title}</h1>
            </div>
        </div>
    );
};

export default HeroAbout;
