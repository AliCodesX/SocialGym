'use client'

import Hero from "@/app/Components/Hero";
import { Button, Link } from "@heroui/react";
import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero />

            <div className="flex justify-center ">
                <div className=" flex flex-col md:flex-row gap-4 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <h1 className="text-4xl font-bold">Unser Motto</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            <br />
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br />
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                        <div>
                            <Button className="bg-lakers font-bold drop-shadow-md" href="#">
                                Mitglied werden
                            </Button>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                        <Image src="/wrestle.png" alt="wrestle" width={300} height={300} />
                    </div>

                </div>
            </div>
        </div>
    );
}
