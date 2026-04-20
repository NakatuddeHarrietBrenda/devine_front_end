import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="page">

      <section className="hero small">
        <h1>Contact Us</h1>
      </section>

      <section className="section">
        <form className="form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange}/>
          <input name="email" placeholder="Email" onChange={handleChange}/>
          <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
          <button>Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default Contact;