import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-col">
          <h2>Devine Tile Fixers Ltd</h2>
          <p>
            Professional tile installation and finishing services 
            for homes and commercial projects.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Kampala, Uganda</p>
          <p><FaPhoneAlt /> +256 700 000000</p>
          <p><FaEnvelope /> info@devinetile.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Devine Tile Fixers Limited. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;