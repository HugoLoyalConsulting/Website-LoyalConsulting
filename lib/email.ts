import nodemailer from "nodemailer";

function createTransport() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendNotificationEmail(subject: string, html: string): Promise<void> {
  const transport = createTransport();
  if (!transport) return;

  const to = process.env.NOTIFY_EMAIL?.trim() || process.env.GMAIL_USER?.trim();
  if (!to) return;

  transport.sendMail({
    from: `"Loyal Consulting Site" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  }).catch((err: unknown) => console.error("[email]", err));
}
