import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
    try {
        const { sessionId }: { sessionId: string } = await request.json();
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        console.log(session);

        if (session.payment_status === 'paid') {
            // Update your database to mark the user as subscribed
            // await updateUserSubscriptionStatus(session.client_reference_id as string, 'active');
        }

        return NextResponse.json({ session });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 400 });
    }
}