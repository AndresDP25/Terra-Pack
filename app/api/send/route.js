import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_Jws1be2u_34N5qvXQYXzzGdg7tYY7Ykbn');

export async function POST(req) {

    try {
        const result = await req.json();
        const info = JSON.stringify(result)
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['andresdallapozza@gmail.com'],
            subject: 'Nuevo mail',
            react: info, 
            text: "",  
        });
        return NextResponse.json({ message: "Email Sent", data: data }, {
          status: 200
        });
    } catch (error) {
      return NextResponse.json({ message: "Error sending email"},{
        status: 500
      } );
    }
}
