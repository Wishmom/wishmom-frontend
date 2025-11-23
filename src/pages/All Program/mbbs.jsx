import React from "react";
import "./all_program.css";
import {
  FaBuilding,
  FaUniversity,
  FaMoneyBillWave,
  FaHome,
  FaBriefcase,
  FaBolt,
} from "react-icons/fa";


const MBBS = () => {
  return (
    <div className="eng-page">
      <div className="eng-container">
        {/* --- Hero Section --- */}
        <header className="eng-hero">
          <div className="hero-text">
            <h1 className="hero-title">MBBS/MD</h1>
            <p className="hero-subtitle">
                    <ul>
                        {/* <li>Phd in Critical Care Technology</li>
                        <li>Phd in Operation Theatre Technology</li>
                        <li>Phd in Medical Radiology & Imaging Technology</li> */}
                        <li>In India & Abroad</li>
                        <li>In Premium Medical Colleges</li>
                        <li>At an Astonishing Low Fees</li>
                      </ul>
                          
            </p>
          </div>
          <div className="hero-image-container">
            <img className="hero-image" src="Image/Loans.jpg" alt="Loans" />
          </div>

        </header>

        {/* --- Loan Types Section --- */}
        

        {/* --- Loan Providers Section --- */}
      </div>
    </div>
  );
};

export default MBBS;
