import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { FaInfoCircle, FaUserTie, FaChalkboard, FaUserFriends } from 'react-icons/fa';
// import Testimonials from '../../components/testimonials/Testimonials';
import Certi_ins from '../../components/Certification_Institutes/certi_ins';

const bannerImages = [
  '/Image/location1.jpg',
  '/Image/location2.jpg',
  '/Image/location3.jpg',
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      
      {/* Top Banner */}
      <section className="top-banner">
        <h1 className="brand-name">Wish-Mom</h1>
        <p className="typing-text">Your trusted guide for Vocational and Professional Courses</p>
      </section>

      {/* Intro Section: Logo | Slideshow | Welcome Text */}
      <div className="intro-section three-column-layout">
        
        {/* Left: Logo */}
        <div className="intro-left">
          <img src="/Image/logo1.jpg" alt="Wish MoM Logo" />
        </div>

        {/* Middle: Vertical Slideshow */}
        <div className="intro-middle slideshow-portrait">
          {bannerImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`portrait-slide ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Right: Welcome Text */}
        <div className="intro-right">
          <h2>Welcome to Wishmom</h2>
          <p>
            We offer centralized information about ongoing vocational and professional course admissions.
            Stay updated with trusted sources, personalized guidance, and admission alerts.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <section className="info-section">
        <h2>What We Offer</h2>
        <div className="info-grid">
          <div className="info-item">
            <FaInfoCircle className="info-icon" />
            <span>All Regular Courses</span>
          </div>
          <div className="info-item">
            <FaChalkboard className="info-icon" />
            <span>Career Councelling</span>
          </div>
          <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Parenting</span>
          </div>
          <div className="info-item">
            <FaUserFriends className="info-icon" />
            <span>No Consultancy Charge</span>
          </div>
             <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Guidence of all Boards Students</span>
          </div>
             <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Any course with an Affordable Fees</span>
          </div>
             <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Direct Admission in Genuine Colleges</span>
          </div>
             <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Assistance for Education Loan</span>
          </div>
             <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Govt. Scholarship Guidance</span>
          </div>
        </div>
      </section>

      <Certi_ins />


      {/* Testimonials (optional) */}
      {/* <Testimonials /> */}
    </div>
  );
};


export default Home;