import React from "react";
import "./all_program.css";
import {
  FaBuilding,
  FaUniversity,
  FaMoneyBillWave,
  FaHome,
  FaBriefcase,
  FaBolt
} from "react-icons/fa";

const Loan = () => {
  return (
    <div className="eng-page">
      <div className="eng-container">

        {/* --- Hero Section --- */}
        <header className="eng-hero">
          <div className="hero-text">
            <h1 className="hero-title">Loans</h1>
            <p className="hero-subtitle">
              We provide all types of loans to support your  needs.
            </p>
          </div>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="Image/Loans.jpg"
              alt="Loans"
            />
          </div>
        </header>

        {/* --- Loan Types Section --- */}
        <section className="loan-types-section">
          <h2>Loan Types Available</h2>
          <ul className="loan-list">
            <li><FaMoneyBillWave /> Personal Loan</li>
            <li><FaHome /> Mortgage Loan</li>
            <li><FaBuilding /> Home Loan</li>
            <li><FaBriefcase /> Business Loan</li>
            <li><FaBolt /> Instant Loan</li>
          </ul>
        </section>

        {/* --- Loan Providers Section --- */}
        <section className="loan-providers-section">
          <h2>Loan Providers</h2>
          <p>We partner with trusted financial institutions to offer you the best loan options:</p>
          <ul className="provider-list">
            <li><FaUniversity /> National Banks</li>
            <li><FaUniversity /> Private Banks</li>
            <li><FaUniversity /> NBFCs (Non-Banking Financial Companies)</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Loan;
