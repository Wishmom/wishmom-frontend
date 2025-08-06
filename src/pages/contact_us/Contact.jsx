import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import { UserData } from "../../context/UserContext";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const { isAuth } = UserData();
  useEffect(() => {
    if (isAuth) {
      const savedData = localStorage.getItem('pendingContactForm');
      if (savedData) {
        setFormData(JSON.parse(savedData));
        localStorage.removeItem('pendingContactForm');
      }
    }
  }, [isAuth]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuth) {
      localStorage.setItem('pendingContactForm', JSON.stringify(formData));
      navigate('/login'); 
      return;
    }
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setIsError(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send message: ${errorData.message || "Server error"}`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("An error occurred. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Get in Touch with Wish Mom</h2>
            <p className="contact-description">
              We'd love to hear from you! Whether you have a question about
              course information, feedback, or just want to say hello, feel free
              to reach out.
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 className="form-heading">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Inquiry about courses"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {message && (
                  <p
                    className={`message-status ${
                      isError ? "error" : "success"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>

            <div className="contact-info-container">
              <h3 className="contact-info-heading">Contact Information</h3>
              <div className="space-y-6 text-gray-700">
                <div className="contact-info-item">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                    ></path>
                  </svg>
                  <div>
                    <p>Email Us:</p>
                    {/* <a href="mailto:wishmom432@gmail.com">
                      wishmom432@gmail.com
                    </a> */}
                    <br />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wishmom432@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >wishmom432@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    ></path>
                  </svg>
                  <div>
                    <p>Call Us:</p>
                    <a href="tel:+919088479021">+91 9088 479021</a>
                  </div>
                </div>
                <div
                  className="contact-info-item"
                  style={{ alignItems: "flex-start" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p>Our Location:</p>
                    <p>
                      Adhikary jewellers, Santoshpur, Bauria, Burikhali, Howrah,
                      West Bengal 711310
                    </p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p>General Inquiries:</p>
                    <a href="tel:+919088479021">+91 9088 479021</a>
                  </div>
                </div>
                 <div className="contact-info-item">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p>Follow us on Facebook:</p>
                <a
                  href="https://www.facebook.com/share/1GU8h9Uarn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wishmom
                </a>
              </div>
            </div>
            {/* YouTube */}
            <div className="contact-info-item">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418ZM15.197 12 10 9.14v5.72L15.197 12z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p>Subscribe on YouTube:</p>
                <a
                  href="https://www.youtube.com/@wishmom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wishmom
                </a>
              </div>
            </div>
            {/* Instagram */}
            <div className="contact-info-item">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 6.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.25-8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p>Follow us on Instagram:</p>
                <a
                  href="https://www.instagram.com/wishm.om?igsh=enFyb3U2cnQyNHFp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wishmom
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

