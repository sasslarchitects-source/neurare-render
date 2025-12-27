export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      background: "#0f172a",
      color: "#e5e7eb",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Neurare Render 🚀
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        AI-powered 3D Rendering & Visualization Platform.  
        Fast. Clean. Scalable.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a
          href="https://github.com/sasslarchitects-source/neurare-render"
          target="_blank"
          style={{
            padding: "12px 24px",
            background: "#22c55e",
            color: "#022c22",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          View on GitHub
        </a>
      </div>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Deployment successful ✅ Powered by Vercel
      </p>
    </main>
  );
}
