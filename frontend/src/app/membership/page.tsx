'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Button} from "@heroui/react";

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
        <div className="flex justify-center items-center">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-center mb-8">Choose a Subscription Plan</h1>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map(plan => (
                        <div key={plan.id}
                             className=" bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                            <p className="text-gray-600 mb-4">{plan.description}</p>
                            <p className="text-lg font-medium mb-4">
                                Preis: €{(plan.price / 100).toFixed(2)} / {plan.interval}
                            </p>
                            <Button
                                onClick={() => handleSubscribe(plan.price_id)}
                                className="w-full bg-lakers text-black py-2 rounded hover:bg-blue-700 transition duration-300"
                            >
                                Abbonieren
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
