import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "Name ist erforderlich"),
    email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
    message: z.string().min(1, "Nachricht darf nicht leer sein"),
    consent: z.boolean().refine(val => val, { message: "Bitte bestätigen Sie die Nutzungsvereinbarung" })
});