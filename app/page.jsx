export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Neurare Architects</h1>
        <p>
          We design modern, functional and timeless architectural spaces.
        </p>

        <div className="buttons">
          <a href="#">View Projects</a>
          <a href="#" className="outline">Contact Us</a>
        </div>
      </section>

      <section className="section">
        <h2>Our Expertise</h2>

        <div className="grid">
          <div className="card">Architecture Design</div>
          <div className="card">Interior Design</div>
          <div className="card">Urban Planning</div>
          <div className="card">3D Visualization</div>
        </div>
      </section>

      <section className="section dark">
        <h2>Why Choose Us</h2>
        <p>Creative ideas, modern execution, reliable delivery.</p>
      </section>

      <footer>
        © 2025 Neurare Architects. All rights reserved.
      </footer>
    </main>
  );
}
