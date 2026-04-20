import { useState } from "react";

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

      <section className="hero small">
        <h1>Contact Us</h1>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />

          <select name="service" onChange={handleChange}>
            <option>Select Service</option>
            <option>Floor Tiling</option>
            <option>Bathroom Renovation</option>
            <option>Tile Repair</option>
          </select>

          <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>

          <button>Send Message</button>
        </form>
      </section>

      <section className="section dark">
        <h2>Contact Info</h2>
        <p>Kampala, Uganda</p>
        <p>+256 700 000000</p>
        <p>info@devinetile.com</p>
      </section>

    </div>
  );
}

export default Contact;