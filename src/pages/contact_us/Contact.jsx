import React, { useState } from "react";
import "./contact.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setIsError(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(
          `Failed to send message: ${errorData.message || "Server error"}`
        );
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import "./contact.css"; // Make sure you have this CSS file

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState('');
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMsg('');
//     setIsError(false);

//     try {
//       // The backend server must be running on http://localhost:5000
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setResponseMsg(result.message);
//         setIsError(false);
//         setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form
//       } else {
//         // Use the error message from the server
//         setResponseMsg(result.message || 'Failed to send message.');
//         setIsError(true);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setResponseMsg('An error occurred. Is the server running?');
//       setIsError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // Your JSX for the form goes here. This is just the logic.
//     // Make sure your form has an onSubmit={handleSubmit} and your
//     // inputs have the correct name and value attributes.
//     <div className="app-container">
//       <section className="contact-section">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Name Input */}
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Your Name</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
//           </div>
//           {/* Email Input */}
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Your Email</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
//           </div>
//           {/* Phone Input */}
//           <div className="form-group">
//             <label htmlFor="phone" className="form-label">Your Phone Number</label>
//             <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
//           </div>
//           {/* Subject Input */}
//           <div className="form-group">
//             <label htmlFor="subject" className="form-label">Subject</label>
//             <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input" required />
//           </div>
//           {/* Message Textarea */}
//           <div className="form-group">
//             <label htmlFor="message" className="form-label">Your Message</label>
//             <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="form-textarea" required></textarea>
//           </div>
//           {/* Submit Button */}
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Sending...' : 'Send Message'}
//           </button>
//           {/* Response Message */}
//           {responseMsg && (
//             <p className={`message-status ${isError ? 'error' : 'success'}`}>
//               {responseMsg}
//             </p>
//           )}
//         </form>
//       </section>
//     </div>
//   );
// };

// export default App;