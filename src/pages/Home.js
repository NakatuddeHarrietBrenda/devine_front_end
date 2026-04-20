import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Expert Tile Installation in Uganda</h1>
        <p>Precision. Durability. Elegant Finishes.</p>
        <Link to="/contact" className="btn">Request a Quote</Link>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Our Core Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Floor Tiling</h3>
            <p>Durable and stylish floor installations for all spaces.</p>
          </div>
          <div className="card">
            <h3>Wall Tiling</h3>
            <p>Perfect alignment and premium finishing for walls.</p>
          </div>
          <div className="card">
            <h3>Bathroom Renovation</h3>
            <p>Modern designs with waterproof finishing.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section dark">
        <h2>Why Choose Us</h2>
        <div className="grid">
          <div className="card">✔ 5+ Years Experience</div>
          <div className="card">✔ Skilled Professionals</div>
          <div className="card">✔ Affordable Pricing</div>
          <div className="card">✔ On-Time Delivery</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Work Process</h2>
        <div className="grid">
          <div className="card">1. Consultation</div>
          <div className="card">2. Design & Planning</div>
          <div className="card">3. Installation</div>
          <div className="card">4. Final Inspection</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Transform Your Space?</h2>
        <Link to="/contact" className="btn">Get Started</Link>
      </section>

    </div>
  );
}

export default Home;