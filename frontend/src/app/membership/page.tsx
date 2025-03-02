'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

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
        <div>
            <h1>Choose a Subscription Plan</h1>
            {plans.map(plan => (
                <div key={plan.id}>
                    <h2>{plan.name}</h2>
                    <p>{plan.description}</p>
                    <p>Price: ${(plan.price / 100).toFixed(2)} / {plan.interval}</p>
                    <button onClick={() => handleSubscribe(plan.price_id)}>Subscribe</button>
                </div>
            ))}
        </div>
    );
}
