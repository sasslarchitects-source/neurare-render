export default function Home() {
  return (
    <main style={{
      padding: "60px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px" }}>Neurare Render 🚀</h1>

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        AI Powered 3D Rendering Platform
      </p>

      <p style={{ marginTop: "10px", color: "#555" }}>
        Your deployment is live on Vercel 🎉
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          fontSize: "16px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </main>
  );
}
