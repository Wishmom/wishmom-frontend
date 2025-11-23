import React from "react";
import "./all_program.css";
import {
  FaBuilding,
  FaBriefcase,
  FaBolt,
  FaMoneyBillWave,
  FaHome,
  FaUserTie,
} from "react-icons/fa";

const Startup = () => {
  return (
    <div className="eng-page">
      <div className="eng-container">

        {/* --- Hero Section --- */}
        <header className="eng-hero">
          <div className="hero-text">
            <h1 className="hero-title">STARTUPINDIA</h1>
            <p className="hero-subtitle">
              {/* We provide job opportunities for both males and females. <br />
              Freshers and experienced candidates are welcome to apply. */}
            </p>
          </div>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="Image/Job.jpg"
              alt="Job Opportunities"
            />
          </div>
        </header>

        {/* --- Job Highlights Section --- */}
        <section className="loan-types-section">
          <h2></h2>
          <ul className="loan-list">
            <li><FaMoneyBillWave /> Basic Computer Courses</li>
            <li><FaMoneyBillWave /> Accounting & Taxation Courses</li>
            {/* <li><FaUserTie /> Professional Duties</li> */}
            <li><FaBuilding /> Digital Marketing Courses</li>
            <li><FaBriefcase /> Cyber Security Courses</li>
            <li><FaBolt /> Artificial Intelligence Courses</li>
            {/* <li><FaHome /> Accommodation Facilities</li> */}
          </ul>
          <p><a href="/contact_us">
          For more information Cuntact us</a></p>
        </section>

      </div>
    </div>
  );
};

export default Startup;