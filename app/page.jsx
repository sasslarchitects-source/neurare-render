import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Neurare Render 🚀</h1>
      <p>
        AI-powered 3D rendering platform for architects, designers, and creators.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/dashboard">
          <button style={{ marginRight: "10px" }}>Get Started</button>
        </Link>

        <button>Learn More</button>
      </div>
    </main>
  );
}
