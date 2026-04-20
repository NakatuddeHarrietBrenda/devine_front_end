import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero small">
        <h1>Contact Us</h1>
        <p>We respond quickly to all inquiries</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-layout">

        {/* FORM */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <form className="form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} />

            <select name="service" onChange={handleChange}>
              <option>Select Service</option>
              <option>Floor Tiling</option>
              <option>Wall Tiling</option>
              <option>Bathroom Renovation</option>
              <option>Tile Repair</option>
            </select>

            <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>

            <button className="btn">Send Message</button>
          </form>
        </div>

        {/* INFO BOXES */}
        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Kampala, Uganda</p>
          </div>

          <div className="info-card">
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <p>+256 700 000000</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>info@devinetile.com</p>
          </div>

          <div className="info-card">
            <FaClock className="icon" />
            <h3>Working Hours</h3>
            <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
          </div>

        </div>

      </section>

      {/* MAP SECTION (VISUAL PLACEHOLDER) */}
      <section className="section dark">
        <h2>Find Us</h2>
        <div className="map-box">
          <p>📍 Google Map Placeholder (Add embed later)</p>
        </div>
      </section>

    </div>
  );
}

export default Contact;