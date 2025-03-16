import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(): Promise<NextResponse> {
    try {
        const prices = await stripe.prices.list({
            expand: ['data.product'],
            active: true,
            type: 'recurring',
        });

        const plans = prices.data
            .filter(price => {
                const product = price.product as Stripe.Product;
                return product.active;
            })
            .map((price: Stripe.Price) => {
                const product = price.product as Stripe.Product;
                return {
                    id: price.id,
                    name: product.name,
                    description: product.description,
                    price: price.unit_amount,
                    interval: price.recurring?.interval,
                    price_id: price.id,
                };
            });

        return NextResponse.json(plans);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Error fetching subscription plans' },
            { status: 500 }
        );
    }
}
