import React from "react";
import "./all_program.css"
import { FaBullseye, FaInfoCircle, FaRocket, FaGraduationCap, FaLaptopCode, FaCogs } from 'react-icons/fa';

const Management = () => {
  return (
    <div className="eng-page">
      <div className="eng-container">

        {/* --- Hero Section --- */}
        <header className="eng-hero">
          <div className="hero-text">
            <h1 className="hero-title">
              Management
            </h1>
            <p className="hero-quote">
              Guiding you to the right career path with updated courses and expert mentorship.
            </p>
          </div>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="Image/management1.jpg"
              alt="Engineering Concepts"
            />
          </div>
        </header>

        {/* --- Feature Section for "About Us" --- */}
        {/* You can add more text or change the image freely */}
        <section className="feature-section">
          <div className="feature-content">
            <h3><FaInfoCircle className="feature-icon" />About Our Platform</h3>
            <p>
              WISH-MOM is a visionary platform created to bridge the gap between aspiring learners and meaningful educational or spiritual journeys. We are committed to continuously highlighting updated professional and vocational courses.
            </p>
            <p>
              Our goal is to help students, parents, and seekers make informed decisions for a better, more fulfilling future. We believe in making learning and spiritual growth accessible through strategic collaborations with reputed institutions.
            </p>
          </div>
          <div className="feature-image-wrapper">
            {/* Replace this with your own image */}
            <img src="Image/management2.jpg" alt="Team collaborating" />
          </div>
        </section>

        {/* --- Feature Section for "Our Vision" (Layout reversed) --- */}
        <section className="feature-section layout-reversed">
          <div className="feature-content">
            <h3><FaBullseye className="feature-icon" />Our Core Vision</h3>
            <p>
              To become a trusted and evolving platform that connects individuals with meaningful educational and spiritual opportunities. We empower them to grow personally, professionally, and spiritually through dedicated mentorship and guidance.
            </p>
            <p>
              We envision a world where every learner has a clear pathway to success, supported by a community that values wisdom and opportunity.
            </p>
          </div>
          <div className="feature-image-wrapper">
            {/* Replace this with your own image */}
            <img src="Image/management3.jpg" alt="Vision and planning" />
          </div>
        </section>


        {/* --- Programmes Section --- */}
        <section className="programmes-section">
         <a href="/contact_us"> <h2>Explore Our Programmes</h2>
          <div className="programme-cards">

            <div className="programme-card">
              <div className="card-header">
                <FaGraduationCap className="card-icon" />
                <h4>BBA</h4>
              </div>
              <ul>
                <li>Digital Marketing</li>
                <li>Logistics and Supply Chain Management</li>
                <li>Marketing</li>
                <li>Finance</li>
                <li>HR</li>
                <li>Data Science</li>
                {/* <li>Agri Business & Rural Management</li> */}
              </ul>
            </div>
            <div className="programme-card">
              <div className="card-header">
                <FaLaptopCode className="card-icon" />
                <h4>MBA</h4>
              </div>
              <ul>
                <li>Digital Marketing</li>
                <li>Logistics and Supply Chain Management</li>
                <li>Marketing</li>
                <li>Finance</li>
                <li>HR</li>
                <li>Data Science</li>
                <li>Agri Business & Rural Management</li>
              </ul>
            </div>


            <div className="programme-card">
              <div className="card-header">
                <FaLaptopCode className="card-icon" />
                <h4>Hotel & Hospitality Management</h4>
              </div>
              <ul>
                <li>Hotel Management & Hospitality Administration</li>
                {/* <li>Hospitality Management</li> */}
                <li>Event Management</li>
                <li>Travel & Tourism Administration</li>
              </ul>
            </div>

            
            
          </div></a>
        </section>

      </div>
    </div>
  );
};

export default Management;