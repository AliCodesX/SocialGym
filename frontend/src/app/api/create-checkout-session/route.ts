import { NextResponse } from 'next/server';
import Stripe from 'stripe';

interface RequestBody {
    priceId: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
});

export async function POST(request: Request): Promise<NextResponse> {
    const { priceId }: RequestBody = await request.json();

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card','sepa_debit'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            billing_address_collection: 'required',
            phone_number_collection: { enabled: true },
            metadata: {
                full_name: 'Max Mustermann',
                birthdate: '1990-01-01'
            },
            success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.headers.get('origin')}/subscriptions`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
    }
}
