import { env } from "env";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  await transporter.sendMail({
    from: env.EMAIL_FROM,
    to,
    subject,
    html: `
    <p>You requested a password reset.</p>
    <p>${text}</p>
    
    <p>If you did not request this, please ignore this email.</p>
  `,
  });
}