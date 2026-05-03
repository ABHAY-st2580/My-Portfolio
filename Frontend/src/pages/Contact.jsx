import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Contact Me</h2>

      <div className="row align-items-start">
        
        <div className="col-md-5 text-white">
          <h4 className="mb-4">Get in Touch</h4>

          <p><b>Phone Number:</b> +91 8707631469</p>
          <p><b>Whatsapp Number:</b> +91 8707631469</p>
          <p><b>Email:</b> abhaysinghtomar835@gmail.com</p>
          <p>
            <b>LinkedIn:</b>{" "}
            <a href="https://www.linkedin.com/in/tomarabhay835/" target="_blank" className="text-info">
              View Profile
            </a>
          </p>
        </div>

        <div className="col-md-7">
          <div
            className="card p-4 shadow"
            style={{
              backgroundColor: "#2f4573",
              borderRadius: "10px"
            }}
          >
            <form>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
                placeholder="Your Message"
                className="form-control mb-3"
                rows="4"
              />

              <button className="btn btn-success w-100">
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;