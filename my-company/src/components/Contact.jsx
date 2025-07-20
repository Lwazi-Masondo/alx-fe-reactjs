import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "blue" }}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            width: "700px",
            height: "30px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            width: "700px",
            height: "30px",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            width: "700px",
            height: "100px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "15px",
            border: "none",
            backgroundColor: "lightblue",
            borderRadius: "50px",
            color: "blue",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
