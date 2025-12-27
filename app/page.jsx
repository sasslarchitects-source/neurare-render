export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #000, #222)",
        color: "white"
      }}>
        <h1 style={{ fontSize: "48px" }}>Neurare Render</h1>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          AI-Powered 3D Rendering for Architects & Designers
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "16px",
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Start Rendering
        </button>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2>Why Neurare Render?</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>
          <Feature title="⚡ Fast" text="AI accelerated 3D renders" />
          <Feature title="🎨 Realistic" text="Photorealistic output" />
          <Feature title="☁️ Cloud" text="No heavy system needed" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "30px",
        textAlign: "center",
        background: "#f2f2f2",
        color: "#555"
      }}>
        © {new Date().getFullYear()} Neurare Render. All rights reserved.
      </footer>

    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div style={{
      width: "220px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p style={{ marginTop: "10px" }}>{text}</p>
    </div>
  );
}
