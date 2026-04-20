function About() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero small">
        <h1>About Devine Tile Fixers</h1>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <h2>Who We Are</h2>
        <p>
          Devine Tile Fixers Limited is a professional tiling company based in Uganda.
          We specialize in high-quality tile installation for residential and commercial spaces.
        </p>
      </section>

      {/* MISSION & VISION BOXES */}
      <section className="section dark">
        <h2>Our Purpose</h2>

        <div className="grid">

          {/* MISSION */}
          <div className="info-box">
            <h3>Our Mission</h3>
            <p>
              To deliver durable, elegant, and affordable tiling solutions 
              that exceed customer expectations through quality workmanship 
              and professional service.
            </p>
          </div>

          {/* VISION */}
          <div className="info-box">
            <h3>Our Vision</h3>
            <p>
              To become Uganda’s leading tile installation company known 
              for innovation, reliability, and excellence in finishing.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <h2>Our Core Values</h2>
        <div className="grid">
          <div className="card">Integrity</div>
          <div className="card">Quality Work</div>
          <div className="card">Customer Satisfaction</div>
          <div className="card">Innovation</div>
        </div>
      </section>

    </div>
  );
}

export default About;