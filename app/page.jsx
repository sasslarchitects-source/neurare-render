export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Neurare Studio</h1>
        <p>
          We create modern 3D renders, architectural visuals,  
          and digital experiences that stand out.
        </p>
        <div className="buttons">
          <a href="#work">View Work</a>
          <a href="#contact" className="outline">Contact Us</a>
        </div>
      </section>

      <section id="work" className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">3D Architecture Rendering</div>
          <div className="card">Interior Visualization</div>
          <div className="card">Product Visualization</div>
        </div>
      </section>

      <section id="contact" className="section dark">
        <h2>Let’s Work Together</h2>
        <p>Email: sasslarchitects@gmail.com</p>
        <p>WhatsApp: +91-8685061130</p>
      </section>

      <footer>
        © {new Date().getFullYear()} Neurare Studio. All rights reserved.
      </footer>
    </main>
  );
}
