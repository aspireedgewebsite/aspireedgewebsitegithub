import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

export default function Login() {
  const [mode, setMode] = useState("register"); // "register" | "login"
  const { login, register, user, logout } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    domainName: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Register / Login | AspireEdge";
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onLoginChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const submitRegister = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await register(form);
      setStatus("sent");
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await login(loginForm.email, loginForm.password);
      setStatus("sent");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url('/login-banner.jpg') no-repeat center center / cover",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(10px)",
          padding: "40px 30px",
          borderRadius: 15,
          border: "1px solid rgba(255,255,255,0.3)",
          width: "100%",
          maxWidth: 400,
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {user ? (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: 20 }}>Welcome, {user.firstName}!</h2>
            <p style={{ marginBottom: 20 }}>You're logged in as {user.email}</p>
            <button style={btnStyle} onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", marginBottom: 25, gap: 8 }}>
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setStatus("idle");
                }}
                style={tabStyle(mode === "register")}
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setStatus("idle");
                }}
                style={tabStyle(mode === "login")}
              >
                Login
              </button>
            </div>

            {mode === "register" ? (
              <form onSubmit={submitRegister}>
                <input
                  style={inputStyle}
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange}
                  required
                />
                <input
                  style={inputStyle}
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange}
                  required
                />
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
                <input
                  style={inputStyle}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Phone number must be exactly 10 digits"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
                <input
                  style={inputStyle}
                  name="domainName"
                  placeholder="Interested Domain Name"
                  value={form.domainName}
                  onChange={onChange}
                  required
                />
                <input
                  style={inputStyle}
                  type="password"
                  name="password"
                  placeholder="Create a Password"
                  minLength={6}
                  value={form.password}
                  onChange={onChange}
                  required
                />
                <button style={btnStyle} type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Submitting…" : "Submit"}
                </button>
              </form>
            ) : (
              <form onSubmit={submitLogin}>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={onLoginChange}
                  required
                />
                <input
                  style={inputStyle}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={onLoginChange}
                  required
                />
                <button style={btnStyle} type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Logging in…" : "Login"}
                </button>
              </form>
            )}

            {status === "sent" && (
              <p style={{ textAlign: "center", marginTop: 16, color: "#b6f5c0" }}>
                Success! Redirecting…
              </p>
            )}
            {status === "error" && (
              <p style={{ textAlign: "center", marginTop: 16, color: "#ffb3b3" }}>{errorMsg}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 15px",
  margin: "8px 0",
  border: "1px solid #ccc",
  borderRadius: 8,
  background: "transparent",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

const btnStyle = {
  width: "100%",
  padding: 12,
  marginTop: 16,
  background: "white",
  color: "#333",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: "bold",
};

const tabStyle = (active) => ({
  flex: 1,
  padding: "10px 0",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  background: active ? "white" : "rgba(255,255,255,0.15)",
  color: active ? "#333" : "white",
});
