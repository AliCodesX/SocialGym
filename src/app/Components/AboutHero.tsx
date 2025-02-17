'use client'
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroAbout = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center opacity-92">
            <Image
                src="/youthkids-kickboxing.jpg"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 -z-10"
            />

            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            <div className="relative  flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-7xl font-bold text-white">
                    Goals <span className="text-lakers">&</span> Visions
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-white">
                    <span className="text-lakers">„</span>
                    <Typewriter
                        words={["Focus on supporting children and youth through sports"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    <span className="text-lakers">“</span>
                </h2>
            </div>
        </div>
    );
};

export default HeroAbout;
