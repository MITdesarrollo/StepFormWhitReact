import { Resend } from 'resend';
import {template} from "./template/template.js";

const API_KEY = 'ENTER_YOUR_APY_KEY';
const resend = new Resend(API_KEY);

const FROM_EMAIL = 'onboarding@resend.dev';
const TO_EMAIL = 'anthony@customerscoops.com';


async function sendEmail() {
    try {
        const response = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: 'Customer Scoops',
            html: template,
        });

        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

(async() => {
    await sendEmail();
})();
