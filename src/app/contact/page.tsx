'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Checkbox, Button } from "@heroui/react";
import { Textarea } from "@heroui/input";
import { FloatingDock } from "@/app/Components/ui/FloatingDock";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import {schema} from "@/Schemas/schema";
import {InfiniteMovingCards} from "@/app/Components/ui/infiniteCards";

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

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
          altText : "sky",
          imageUrl: "skysport.png",
        },
        {
          altText : "DRB",
          imageUrl: "DRB-Logo.png",
        },
        {
          altText : "eurosport",
          imageUrl: "europsport.jpg",
        },
    ]
    const onSubmit = () => {
        console.log("Hello World");
    };

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-20">Kontakt</h1>
            <div className="flex justify-center flex-col items-center w-full mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Name" {...register("name")}  />
                    <Input placeholder="Email" {...register("email")} />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <Textarea placeholder="deine Nachricht" {...register("message")} />
                    <Checkbox {...register("consent")}>
                        Hiermit bin ich mit dem Nutzungsvereinbarung einverstanden
                    </Checkbox>
                    {errors.consent && <span className="text-red-500">{errors.consent.message}</span>}
                    <Button type="submit">Absenden</Button>
                </Form>
                <div>
                    <FloatingDock items={links} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center mt-20">Unsere Partner</h1>
                    <InfiniteMovingCards items={items}></InfiniteMovingCards>
                </div>
            </div>
        </div>
    );
};

export default Page;
