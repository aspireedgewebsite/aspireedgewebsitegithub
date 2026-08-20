import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      "[mail] SMTP is not fully configured (SMTP_HOST/SMTP_USER/SMTP_PASS). Emails will be skipped."
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

export async function sendMail({ to, subject, html, replyTo }) {
  const t = getTransporter();
  if (!t) return { sent: false, reason: "smtp_not_configured" };

  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  try {
    await t.sendMail({ from, to, subject, html, replyTo });
    return { sent: true };
  } catch (err) {
    console.error("[mail] failed to send:", err.message);
    return { sent: false, reason: err.message };
  }
}
