export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      <section style={{
        minHeight: "100vh",
        padding: "80px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #000, #1a1a1a)",
        color: "white"
      }}>
        <h1 style={{ fontSize: "52px" }}>Neurare Render 🚀</h1>

        <p style={{ fontSize: "22px", marginTop: "20px" }}>
          AI Powered 3D Rendering Platform
        </p>

        <p style={{ marginTop: "10px", color: "#ccc" }}>
          High-quality renders for architects & designers
        </p>

        <button style={{
          marginTop: "40px",
          padding: "16px 32px",
          fontSize: "16px",
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>

    </main>
  );
}
