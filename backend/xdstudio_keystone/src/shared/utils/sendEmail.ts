// lib/sendEmail.ts
import nodemailer from 'nodemailer';
import { Context } from '.keystone/types';

export async function sendEmail(
  setting: Context['db']['Setting']['findOne']['arguments'],
  {
    to,
    subject,
    text,
    html,
  }: {
    to: string;
    subject: string;
    text: string;
    html?: string;
  },
) {
  if (!setting) throw new Error('SMTP setting not found');
  const transporter = nodemailer.createTransport({
    host: setting.smtpHost,
    port: Number(setting.smtpPort),
    secure: Number(setting.smtpPort) === 465,
    auth: {
      user: setting.smtpUser,
      pass: setting.smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"XD Shop Support" <${setting.smtpUser}>`,
    to,
    subject,
    text,
    html: html ?? text,
  });
}
