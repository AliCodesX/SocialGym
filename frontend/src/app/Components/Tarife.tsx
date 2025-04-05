'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardBody, CardHeader, CardFooter, Button } from '@heroui/react';

type Tarif = {
    name: string;
    price: number;
    interval: string;
    fee: number;
};

export const Tarife = () => {
    const router = useRouter();
    const tarife: Tarif[] = [
        { name: 'Erwachsene', price: 10, interval: 'Monatlich', fee: 20 },
        { name: 'Kinder/Jugendliche', price: 8, interval: 'Monatlich', fee: 20 },
        { name: 'Passive Mitglieder', price: 5, interval: 'Monatlich', fee: 20 },
    ];

    const handleMitgliedWerden = (tarif: Tarif) => {
        router.push(`/membershipform?tarif=${tarif.name}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {tarife.map((tarif) => (
                <Card key={tarif.name} className="border border-default-200">
                    <CardHeader className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">{tarif.name}</h2>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">€{tarif.price.toFixed(2)}</span>
                            <span className="text-default-500">/{tarif.interval}</span>
                        </div>
                        <p className="text-sm text-default-500">
                            Aufnahmegebühr: €{tarif.fee.toFixed(2)}
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p className="text-sm text-default-500">Mitgliedsbeitrag für {tarif.name}</p>
                    </CardBody>
                    <CardFooter>
                        <Button
                            onPress={() => handleMitgliedWerden(tarif)}
                            className="bg-lakers"
                            fullWidth
                            size="lg"
                        >
                            Mitglied werden
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Tarife;
