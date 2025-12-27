import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "48px" }}>
        Neurare Render 🚀
      </h1>

      <p style={{ fontSize: "18px", marginTop: "10px", maxWidth: "600px" }}>
        AI-powered 3D rendering platform for architects, designers, and creators.
        Convert concepts into stunning visuals in minutes.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/dashboard">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              border: "none",
              background: "#000",
              color: "#fff",
              marginRight: "12px"
            }}
          >
            Get Started
          </button>
        </Link>

        <Link href="/about">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              border: "1px solid #000",
              background: "#fff"
            }}
          >
            Learn More
          </button>
        </Link>
      </div>
    </main>
  );
}
