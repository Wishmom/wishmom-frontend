import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { FaInfoCircle, FaUserTie, FaChalkboard, FaUserFriends } from 'react-icons/fa';
// import Testimonials from '../../components/testimonials/Testimonials';

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
        <h1 className="brand-name">Wishmom</h1>
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
            <span>Timely Admission Updates</span>
          </div>
          <div className="info-item">
            <FaChalkboard className="info-icon" />
            <span>Vocational Course Listings</span>
          </div>
          <div className="info-item">
            <FaUserTie className="info-icon" />
            <span>Personalized Guidance</span>
          </div>
          <div className="info-item">
            <FaUserFriends className="info-icon" />
            <span>Community Support</span>
          </div>
        </div>
      </section>

      {/* Featured Institutes */}
      <section className="featured-section">
        <h2>Featured Institutes</h2>
        <div className="institute-grid">
          <div className="institute-card">
            <img src="https://cms.savarnacloudtech.com/uploads/data/24c44152f88b9756cf6f7681fe6edf9a.jpg" alt="Alokbharati" />
            <div className="card-content">
              <h3>Alokbharati Institute</h3>
              <p>
                Programs in counseling, parenting, and mentorship—designed to nurture holistic development and career readiness.
              </p>
            </div>
          </div>

          <div className="institute-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8f8x7rW71opEDwK8KeUheQ5JTPAWwTscoA&s" alt="Debdaan" />
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
{/* ISO Certification Section */}
<section className="iso-section">
  <div className="iso-container">
    <h2 className="iso-heading">Our Certifications</h2>
    <div className="iso-content">
      <img
        src="/Image/ISO.jpg" // Replace with your actual badge path
        alt="ISO Certified"
        className="iso-badge"
      />
      <div>
      
        <h3>ISO 9001:2015 Certified</h3>
        <p>
          Wishmom is proud to be ISO 9001:2015 certified, ensuring quality standards in information,
          guidance, and student support services.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Testimonials (optional) */}
      {/* <Testimonials /> */}
    </div>
  );
};


export default Home;