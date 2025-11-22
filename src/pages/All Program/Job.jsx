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

const Job = () => {
  return (
    <div className="eng-page">
      <div className="eng-container">

        {/* --- Hero Section --- */}
        <header className="eng-hero">
          <div className="hero-text">
            <h1 className="hero-title">Job Consultancy</h1>
            <p className="hero-subtitle">
              We provide job opportunities for both males and females. <br />
              Freshers and experienced candidates are welcome to apply.
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
          <h2>Job Highlights</h2>
          <ul className="loan-list">
            <li><FaMoneyBillWave /> Attractive Salary Packages</li>
            <li><FaUserTie /> Professional Duties</li>
            <li><FaBuilding /> Rotational Shifts</li>
            <li><FaBriefcase /> Night Shift Allowance</li>
            <li><FaBolt /> ESIC & Provident Fund (PF)</li>
            <li><FaHome /> Accommodation Facilities</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Job;