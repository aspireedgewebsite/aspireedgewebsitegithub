import React, { useEffect, useRef, useState } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Contact.html?raw";
import { apiFetch } from "../utils/api";

export default function Contact() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Contact Us | AspireEdge";
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const form = root.querySelector(".contact-form-details form");
    if (!form) return;

    async function handleSubmit(e) {
      e.preventDefault();
      const inputs = form.querySelectorAll("input, textarea");
      const [firstName, lastName, email, phone, subject] = Array.from(inputs)
        .filter((el) => el.tagName === "INPUT")
        .map((el) => el.value);
      const message = form.querySelector("textarea")?.value || "";
      const submitBtn = form.querySelector("button");

      const payload = { firstName, lastName, email, phone, subject, message };

      if (!firstName || !email || !message) {
        setStatus("error");
        setErrorMsg("Please fill in your name, email, and message.");
        return;
      }

      setStatus("sending");
      setErrorMsg("");
      if (submitBtn) submitBtn.disabled = true;

      try {
        const res = await apiFetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Something went wrong");
        setStatus("sent");
        form.reset();
      } catch (err) {
        setStatus("error");
        setErrorMsg(err.message);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PageHTML html={html} />
      {status !== "idle" && (
        <div
          style={{
            position: "fixed",
            top: 90,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
            maxWidth: 500,
            width: "90%",
            textAlign: "center",
            padding: "12px 20px",
            borderRadius: 8,
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            color: status === "error" ? "#a12626" : "#155724",
            background: status === "error" ? "#f8d7da" : status === "sent" ? "#d4edda" : "#fff3cd",
          }}
        >
          {status === "sending" && "Sending your message…"}
          {status === "sent" && "Thanks! Your message has been sent — we'll be in touch soon."}
          {status === "error" && (errorMsg || "Something went wrong. Please try again.")}
        </div>
      )}
    </div>
  );
}