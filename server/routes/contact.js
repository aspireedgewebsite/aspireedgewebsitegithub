import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";
import { sendMail } from "../utils/sendEmail.js";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body || {};

    if (!firstName || !email || !message) {
      return res
        .status(400)
        .json({ message: "Please provide your name, email, and a message." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    const doc = await ContactMessage.create({
      firstName,
      lastName,
      email: email.toLowerCase().trim(),
      phone,
      subject,
      message,
    });

    const { sent } = await sendMail({
      to: process.env.NOTIFY_EMAIL,
      subject: `New contact form message: ${subject || "No subject"}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    });

    if (sent) {
      doc.emailSent = true;
      await doc.save();
    }

    res.status(201).json({ message: "Message received. We'll get back to you shortly." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong while sending your message." });
  }
});

export default router;
