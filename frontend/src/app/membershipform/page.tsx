'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Checkbox, DatePicker } from '@heroui/react';
import { parseDate } from '@internationalized/date';

const memberSchema = z.object({
    vorname: z.string().min(1, 'Vorname erforderlich'),
    nachname: z.string().min(1, 'Nachname erforderlich'),
    geburtsdatum: z.string().min(1, 'Geburtsdatum erforderlich'),
    strasse: z.string().min(1, 'Straße erforderlich'),
    hausnummer: z.string().min(1, 'Hausnummer erforderlich'),
    plz: z.string().min(1, 'PLZ erforderlich'),
    ort: z.string().min(1, 'Ort erforderlich'),
    email: z.string().email('Ungültige E-Mail'),
    iban: z.string().min(1, 'IBAN erforderlich'),
    consent: z.literal(true, {
        errorMap: () => ({ message: 'Einverständniserklärung erforderlich' }),
    }),
    directDebitConsent: z.literal(true, {
        errorMap: () => ({ message: 'Einverständnis für das Lastschriftverfahren erforderlich' }),
    }),
});
type MemberFormData = z.infer<typeof memberSchema>;

const MitgliedWerden = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MitgliedForm />
        </Suspense>
    )
}

const MitgliedForm = () => {
    const searchParams = useSearchParams();
    const tarif = searchParams.get('tarif');

    const { control, register, handleSubmit, formState: { errors } } = useForm<MemberFormData>({
        resolver: zodResolver(memberSchema),
    });

    const onSubmit: SubmitHandler<MemberFormData> = (data) => {
        console.log('Mitgliedsdaten:', { ...data, tarif });
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Mitgliedschaft: {tarif}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input {...register('vorname')} placeholder="Vorname" />
                {errors.vorname && <p className="text-red-500">{errors.vorname.message}</p>}
                <Input {...register('nachname')} placeholder="Nachname" />
                {errors.nachname && <p className="text-red-500">{errors.nachname.message}</p>}
                <Controller
                    name="geburtsdatum"
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            showMonthAndYearPickers={true}
                            label="Geburtsdatum"
                            isRequired={true}
                            value={field.value ? parseDate(field.value) : undefined}
                            onChange={(date) => {
                                if (date) {
                                    field.onChange(date.toString());
                                } else {
                                    field.onChange('');
                                }
                            }}
                        />
                    )}
                />
                {errors.geburtsdatum && (
                    <p className="text-red-500">{errors.geburtsdatum.message}</p>
                )}
                <Input {...register('strasse')} placeholder="Straße" />
                {errors.strasse && <p className="text-red-500">{errors.strasse.message}</p>}

                <Input {...register('hausnummer')} placeholder="Hausnummer" />
                {errors.hausnummer && <p className="text-red-500">{errors.hausnummer.message}</p>}

                <Input {...register('plz')} placeholder="PLZ" />
                {errors.plz && <p className="text-red-500">{errors.plz.message}</p>}

                <Input {...register('ort')} placeholder="Ort" />
                {errors.ort && <p className="text-red-500">{errors.ort.message}</p>}

                <Input type="email" {...register('email')} placeholder="E-Mail" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <Input {...register('iban')} placeholder="IBAN" />
                {errors.iban && <p className="text-red-500">{errors.iban.message}</p>}

                <Checkbox {...register('consent')}>
                    Einverständniserklärung zur Nutzung der personenbezogenen Daten
                </Checkbox>
                {errors.consent && (
                    <p className="text-red-500">{errors.consent.message}</p>
                )}

                <Checkbox {...register('directDebitConsent')}>
                    Einverständnis für IBAN-Lastschriftverfahren
                </Checkbox>
                {errors.directDebitConsent && (
                    <p className="text-red-500">{errors.directDebitConsent.message}</p>
                )}

                <Button className="bg-lakers" type="submit" fullWidth>
                    Kostenpflichtig anmelden
                </Button>
            </form>
        </div>
    );
};

export default MitgliedWerden;
