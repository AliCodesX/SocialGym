'use client'

import React from "react";
import {useForm} from "react-hook-form";
import {Form, Input,  Checkbox, Button} from "@heroui/react";
import {Textarea} from "@heroui/input";
import {FloatingDock} from "@/app/Components/ui/FloatingDock";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
const Page = () => {
    const {register, handleSubmit} = useForm();


    const links = [
        {
            title: "Instagram",
            icon: (
              <XIcon></XIcon>
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
              <InstagramIcon></InstagramIcon>
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <GitHubIcon></GitHubIcon>
            ),
            href: "#",
        },
    ];
    return (

        <div className="">
            <h1 className="text-4xl font-bold text-center mt-20">Kontakt</h1>
            <div className=" flex justify-center flex-col  items-center w-full mt-5">
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Email"/>
                <Textarea placeholder="deine Nachricht"></Textarea>
                    <Checkbox>Hiermit bin ich mit dem Nutzungsvereinbarung einverstanden</Checkbox>
                    <Button type="submit">Send</Button>
                </Form>
                <div>
                    <FloatingDock items={links}></FloatingDock>
                </div>

            </div>


        </div>

    )
}
export default Page
