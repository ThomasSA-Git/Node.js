//import dotenv from '../dotenv.env';
//dotenv.config();

import nodemailer from "nodemailer";

const { EMAIL, EMAIL_PASSWORD } = process.env;

export async function sendEmail(userEmail) {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "thomaskeatest@gmail.dk", // Replace with your Gmail address
            pass: "Dae8w@5JUxTXZ8" // Replace with your Gmail password
        }
    });

    // Email options
    const mailOptions = {
        from: "thomaskeatest@gmail.dk",  // Replace with your Gmail address
        to: userEmail,
        subject: 'Test Email',
        text: 'This is a test email.'
    };

    // Send email
    return transporter.sendMail(mailOptions);
}