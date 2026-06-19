import { Resend } from "resend";

export async function sendNotificationEmail(subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const to = process.env.NOTIFY_EMAIL?.trim() || "hugo.loyalconsulting@gmail.com";
  const from = process.env.EMAIL_FROM?.trim() || "Loyal Consulting <noreply@loyalconsulting.com.br>";

  resend.emails.send({ from, to, subject, html }).catch((err: unknown) => console.error("[email]", err));
}
