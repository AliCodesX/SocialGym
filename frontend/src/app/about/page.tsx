'use client'
import React from 'react'
import HeroAbout from "@/app/Components/AboutHero";
import Image from "next/image";
import CardGridItemCoach from "@/app/Components/CardGridItemCoach";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell,getKeyValue} from "@heroui/table";

const Page = () => {


    const rows = [
        {
            key: "1",
            wochentag: "Montag",
            trainer: "Fahim",
            ort: "Horn",
        },
        {
            key: "2",
            wochentag: "Mittwoch",
            trainer: "Fawad",
            ort: "Horn",
        },
        {
            key: "3",
            wochentag: "Freitag",
            trainer: "Fahim",
            ort: "Horn",
        },

    ];

    const columns = [
        {
            key: "wochentag",
            label: "WOCHENTAG",
        },
        {
            key: "trainer",
            label: "TRAINER",
        },
        {
            key: "ort",
            label: "ORT",
        }
    ];
    const CardItemData = [ {
        image: "/coach1.jpg",
        title: "Trainer 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
    },
        {
            image: "/coach2.jpeg",
            title: "Trainer 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/coach3.jpg",
            title: "Trainer 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        },
        {
            image: "/coach4.jpg",
            title: "Trainer 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum"
        }
    ]

    return (
        <div>
            <HeroAbout/>
            <div className="flex justify-center">
                <div
                    className=" flex flex-col md:flex-row gap-10 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex-shrink-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                        <Image src="/CEO.png" alt="wrestle" width={300} height={300}/>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <h1 className="text-4xl font-bold">CEO</h1>
                        <h2 className="text-2xl font-semibold">Fahim Afshar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            <br/>
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br/>
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen flex items-center justify-center opacity-92">
                <Image
                    src="/gymbackground.jpeg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute inset-0 -z-10"
                />

                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <div className="relative  flex flex-col items-center text-center">
                    <CardGridItemCoach items={CardItemData}/>

                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className=" flex flex-col md:flex-row gap-10 justify-center  items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold "> Club's Philosophy</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            <br/>
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br/>
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-blue-700">
                <div
                    className="flex flex-col md:flex-row gap-10 justify-center items-center bg-blue-700 text-white md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold "> Athletic integration</h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            <br/>
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br/>
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className=" flex flex-col md:flex-row gap-10 justify-center items-center md:items-start my-4 p-10 rounded-md max-w-[1200px] w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl text-center font-bold ">Personal Development </h1>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[800px] w-full text-center md:text-left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio doloribus
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, dolore dolorem earum
                            <br/>
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br/>
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                            <br/>
                            facilis fugiat id ipsa ipsum magni nostrum numquam odit optio porro recusandae reiciendis
                            <br/>
                            Mehr Text hier, um zu testen, ob der Container sich weiter ausdehnt oder nicht.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-4xl font-bold">Trainigsplan</h1>

            <div className="flex justify-center">
                <div className=" mt-5 w-[80%]" id="training">
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )
}
export default Page
