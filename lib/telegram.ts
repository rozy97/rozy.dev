import { NextResponse } from 'next/server';

export interface param {
    firstname: string
    lastname: string
    email: string
    phone: string
    service: string
    message: string
}

export async function sendMessage(props: param) {
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || ''
    console.log("chat id: ", chatId)

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || ''
    console.log("bot token: ", botToken)
    const text = `New Form Submission:\n\nName: ${props.firstname} ${props.lastname}\nEmail: ${props.email}\nPhone: ${props.phone}\nService: ${props.service}\nMessage: ${props.message}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return NextResponse.json({ message: 'Message sent to Telegram' });
    } catch (error) {
        // Narrow down the error type
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
        }
    }
}