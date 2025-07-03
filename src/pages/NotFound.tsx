
import React from "react";

const NotFound = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
    <h1 style={{ fontSize: 72, fontWeight: 800, color: "#6366f1", marginBottom: 16 }}>404</h1>
    <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>Page Not Found</h2>
    <p style={{ color: "#64748b", fontSize: 18, marginBottom: 24 }}>Sorry, the page you are looking for does not exist.</p>
    <a href="/" style={{ color: "#fff", background: "linear-gradient(90deg,#6366f1,#a21caf)", padding: "12px 32px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: 18 }}>Go Home</a>
  </div>
);

export default NotFound;
