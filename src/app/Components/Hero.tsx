'use client'
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center opacity-92">
            <Image
                src="/wrestlehome.jpg"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 -z-10"
            />

            <h1 className="text-4xl md:text-6xl font-bold text-lakers text-center">
                <Typewriter
                    words={["Wilkommen im SocialGym", "Fühle die Aktion!", "Trete uns bei!"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
            </h1>
        </div>
    );
};

export default Hero;
