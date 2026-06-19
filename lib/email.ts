// Brevo (ex-Sendinblue) — REST API via fetch nativo, zero dependência extra
// Vars Railway: BREVO_API_KEY, NOTIFY_EMAIL, EMAIL_FROM (opcional)
export async function sendNotificationEmail(subject: string, html: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) return;

  const to = process.env.NOTIFY_EMAIL?.trim() || "hugo.loyalconsulting@gmail.com";
  const fromEmail = process.env.EMAIL_FROM?.trim() || "noreply@loyalconsulting.com.br";
  const fromName = "Loyal Consulting";

  fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    }),
  }).catch((err: unknown) => console.error("[email/brevo]", err));
}
