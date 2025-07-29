import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We guide students in finding the right path for their future by offering expert
          assistance in admissions across Engineering, Law, Management, Agriculture,
          and more. Our goal is to simplify your educational journey with proper
          mentorship, updated information, and personalized support.
        </p>

        <div className="about-icons">
          <div className="icon-box">
            <i className="fas fa-graduation-cap"></i>
            <h3>Academic Guidance</h3>
            <p>
              Helping students choose the right path for Engineering, Law, Management, and more.
            </p>
          </div>
          <div className="icon-box">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Expert Mentorship</h3>
            <p>
              Learn directly from professionals and mentors who know the admission landscape.
            </p>
          </div>
          <div className="icon-box">
            <i className="fas fa-university"></i>
            <h3>Institution Info</h3>
            <p>
              Up-to-date details about top colleges in Agriculture, Engineering, Law, and Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
