'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface Session {
    status: string;
    customer_email: string;
}

interface SessionResponse {
    session?: Session;
    error?: string;
}

const SuccessPageContent = () => {
    const [status, setStatus] = useState<string>('loading');
    const [customerEmail, setCustomerEmail] = useState<string>('');
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (sessionId) {
            fetchSessionStatus();
        }
    }, [sessionId]);

    async function fetchSessionStatus() {
        const response = await fetch('/api/check-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId }),
        });

        const { session, error }: SessionResponse = await response.json();

        if (error) {
            setStatus('failed');
            console.error(error);
            return;
        }

        setStatus(session?.status || 'failed');
        setCustomerEmail(session?.customer_email || '');
    }

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to process subscription. Please try again.</div>;
    }

    return (
        <div>
            <h1>Subscription Successful!</h1>
            <p>Thank you for your subscription. A confirmation email has been sent to {customerEmail}.</p>
        </div>
    );
};

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessPageContent />
        </Suspense>
    );
}
