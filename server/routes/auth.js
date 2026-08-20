import { Router } from "express";
import User from "../models/User.js";
import requireAuth from "../middleware/auth.js";
import { signToken } from "../utils/jwt.js";
import { sendMail } from "../utils/sendEmail.js";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, domainName, password } = req.body || {};

    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "First name, last name, email, and password are required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }
    if (String(password).length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters." });
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const passwordHash = await User.hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase().trim(),
      phone,
      domainName,
      passwordHash,
    });

    const token = signToken(user);

    // Fire-and-forget notification email; never blocks the response.
    sendMail({
      to: process.env.NOTIFY_EMAIL,
      subject: `New registration: ${firstName} ${lastName}`,
      html: `
        <h2>New website registration</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Interested Domain:</strong> ${domainName || "-"}</p>
      `,
      replyTo: email,
    }).catch(() => {});

    res.status(201).json({ token, user: user.toSafeJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong while registering. Please try again." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email: String(email).toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const ok = await user.comparePassword(password);
    if (!ok) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = signToken(user);
    res.json({ token, user: user.toSafeJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong while logging in. Please try again." });
  }
});

router.get("/me", requireAuth, async (req, res) => {
  res.json({ user: req.user.toSafeJSON() });
});

export default router;
