'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Card, CardBody, CardHeader, CardFooter, Button } from "@heroui/react";

interface SubscriptionPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    interval: string;
    price_id: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Subscriptions() {
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);

    useEffect(() => {
        fetch('/api/subscription-plans')
            .then(res => res.json())
            .then((data: SubscriptionPlan[]) => setPlans(data));
    }, []);

    const handleSubscribe = async (priceId: string) => {
        const stripe = await stripePromise;
        const { sessionId } = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId }),
        }).then(res => res.json());

        // @ts-ignore
        const result = await stripe.redirectToCheckout({ sessionId });

        if (result.error) {
            console.error(result.error);
        }
    };

    return (
        <div className=" bg-background-100 p-8 flex flex-col items-center  " >
            <div className="max-w-6xl w-full max-h-2xl space-y-8 flex-grow">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">Wähle dein Abonnement</h1>
                    <p className="text-default-500 text-lg">
                        Wähle den perfekten Plan für deine Bedürfnisse
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
                    {plans.map(plan => (
                        <Card key={plan.id} className="border border-default-200">
                            <CardHeader className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">{plan.name}</h2>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">€{(plan.price / 100).toFixed(2)}</span>
                                    <span className="text-default-500">/{plan.interval}</span>
                                </div>
                            </CardHeader>
                            <CardBody className="gap-6">
                                <p className="text-sm text-default-500">{plan.description}</p>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    onPress={() => handleSubscribe(plan.price_id)}
                                    className="bg-lakers"
                                    fullWidth
                                    size="lg"
                                >
                                    Abonnieren
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
