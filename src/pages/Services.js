import { FaTools, FaBath, FaThLarge, FaWrench, FaBuilding } from "react-icons/fa";

function Services() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero small">
        <h1>Our Services</h1>
        <p>Quality tile installation & finishing you can trust</p>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>What We Offer</h2>

        <div className="grid">

          <div className="card service-card">
            <FaThLarge className="icon" />
            <h3>Floor Tiling</h3>
            <p>Professional installation of ceramic, porcelain & marble tiles.</p>
          </div>

          <div className="card service-card">
            <FaTools className="icon" />
            <h3>Wall Tiling</h3>
            <p>Clean, aligned wall tiles for kitchens & bathrooms.</p>
          </div>

          <div className="card service-card">
            <FaBath className="icon" />
            <h3>Bathroom Renovation</h3>
            <p>Modern bathroom upgrades with waterproof finishing.</p>
          </div>

          <div className="card service-card">
            <FaThLarge className="icon" />
            <h3>Kitchen Backsplash</h3>
            <p>Stylish backsplash designs that enhance your kitchen.</p>
          </div>

          <div className="card service-card">
            <FaWrench className="icon" />
            <h3>Tile Repair</h3>
            <p>Fix cracked, broken, or loose tiles professionally.</p>
          </div>

          <div className="card service-card">
            <FaBuilding className="icon" />
            <h3>Commercial Projects</h3>
            <p>Large-scale tiling for offices, malls & buildings.</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="section dark">
        <h2>Recent Projects</h2>

        <div className="grid">

          <div className="project-card">
            <div className="project-overlay">Luxury Bathroom</div>
          </div>

          <div className="project-card">
            <div className="project-overlay">Modern Kitchen</div>
          </div>

          <div className="project-card">
            <div className="project-overlay">Office Flooring</div>
          </div>

          <div className="project-card">
            <div className="project-overlay">Hotel Tiles</div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>What Our Clients Say</h2>

        <div className="grid">

          <div className="testimonial">
            <p>"Amazing work quality and attention to detail."</p>
            <span>- Client</span>
          </div>

          <div className="testimonial">
            <p>"Very professional team, delivered on time."</p>
            <span>- Customer</span>
          </div>

          <div className="testimonial">
            <p>"Highly recommend for any tiling project."</p>
            <span>- Home Owner</span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Professional Tile Services?</h2>
        <p>We are ready to bring your vision to life.</p>
        <a href="/contact" className="btn">Get a Quote</a>
      </section>

    </div>
  );
}

export default Services;