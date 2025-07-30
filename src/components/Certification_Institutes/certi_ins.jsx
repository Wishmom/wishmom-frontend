import React from "react";
import "./certi_ins.css";

const Certi_ins = () => {
  return (
    <>
      {/* Featured Institutes */}
      <section className="featured-section">
        <h2>Featured Institutes</h2>
        <div className="institute-grid">
          <div className="institute-card">
            <img
              src="https://cms.savarnacloudtech.com/uploads/data/24c44152f88b9756cf6f7681fe6edf9a.jpg"
              alt="Alokbharati"
            />
            <div className="card-content">
              <h3>Alokbharati Institute</h3>
              <p>
                Programs in counseling, parenting, and mentorship—designed to nurture holistic development and career readiness.
              </p>
            </div>
          </div>

          <div className="institute-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8f8x7rW71opEDwK8KeUheQ5JTPAWwTscoA&s"
              alt="Debdaan"
            />
            <div className="card-content">
              <h3>Debdaan Prana Ghriha</h3>
              <p>
                A creative space for modern education, focused on life-skills, academic growth, and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certification Section */}
      <section className="iso-section">
        <div className="iso-container">
          <h2 className="iso-heading">Our Certifications</h2>

          <div className="iso-box">
            <img
              src="/Image/ISO.jpg"
              alt="ISO Certified"
              className="iso-badge"
            />
            <div className="certificate-details">
              <h3>ISO 9001:2015 Certified</h3>
              <p>
                Wishmom is proud to be ISO 9001:2015 certified, ensuring quality standards in information,
                guidance, and student support services.
              </p>
            </div>
          </div>

          <div className="certificate-box">
            <img
              src="/Image/ISO.jpg"
              alt="Wishmom Trust Certificate"
              className="certificate-image"
            />
            <div className="certificate-details">
              <h3>Registered Trust Details</h3>
              <ul>
                <li><strong>Trust Name:</strong> WISH MOM</li>
                <li><strong>Registration Number:</strong> IV–190301714 / 2023</li>
                <li><strong>Registration Year:</strong> 2023</li>
                <li><strong>Location:</strong> Kolkata, West Bengal, India</li>
                <li><strong>President:</strong> Amrita Ghorui</li>
                <li><strong>Registered Under:</strong> The Indian Trusts Act, 1882</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certi_ins;
