import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Professional Tile Installation</h1>
        <p>We deliver quality finishing for homes & businesses</p>
        <Link to="/contact" className="btn">Get Quote</Link>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">Floor Tiling</div>
          <div className="card">Wall Tiling</div>
          <div className="card">Bathroom Design</div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section dark">
        <h2>Why Choose Us</h2>
        <p>Experienced team, modern designs, and affordable pricing.</p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Professional Tile Fixers?</h2>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>

    </div>
  );
}

export default Home;