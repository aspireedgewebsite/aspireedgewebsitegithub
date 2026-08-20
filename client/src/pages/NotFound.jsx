import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | AspireEdge";
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "120px 20px" }}>
      <h1 style={{ fontSize: 72, marginBottom: 10 }}>404</h1>
      <p style={{ marginBottom: 20 }}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="theme-btn1">
        Back to Home
      </Link>
    </div>
  );
}
