"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/Schemas/schema";
import {addToast, Button, Checkbox, Form, Input} from "@heroui/react";
import { Textarea } from "@heroui/input";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    email: string;
    message: string;
    consent: boolean;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        const emailParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            addToast({
                title: "Erfolgreich!",
                description: "Deine Nachricht wurde gesendet.",
                color: "success",
                variant: "flat",
                classNames: {
                    title: "text-black",
                    description: "text-black",
                },
                timeout: 3000,
                shouldShowTimeoutProgress: true,

            });
            reset();
        } catch (error) {
            addToast({
                title: "Fehler!",
                description: "Die Nachricht konnte nicht gesendet werden.",
                color: "danger",
                variant: "bordered",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
            console.error("EmailJS Fehler:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            <Input placeholder="E-Mail" {...register("email")} />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <Textarea placeholder="Deine Nachricht an uns" {...register("message")} />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}

            <Checkbox {...register("consent")}>
                Hiermit bin ich mit der Nutzungsvereinbarung einverstanden
            </Checkbox>
            {errors.consent && <span className="text-red-500">{errors.consent.message}</span>}

            <Button type="submit" disabled={loading}>
                {loading ? "Senden..." : "Absenden"}
            </Button>
        </Form>
    );
};

export default ContactForm;

