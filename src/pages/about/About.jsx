import React from "react";
import "./about.css";
import chairmanImg from "/Image/chairman.jpg"; // Adjust the path based on your project

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-flex">
          <div className="about-text">
            <p>
            Wish-Mom is a dedicated educational trust committed to empowering students through a wide range of academic, professional, and vocational courses. Our mission is to guide and support learners in achieving their career goals by providing access to quality education and expert mentorship.

              <br />
              <p></p>
              We proudly assist students in pursuing prestigious programs such as MBBS, B.Pharma, M.Pharma, Law, Lab Technician, and many more. In addition, we offer a variety of vocational and professional training courses tailored to today’s competitive job market.
              <br />
              <br />
             At Wish-Mom, we believe in nurturing talent and building confident, skilled individuals who are ready to succeed in their chosen fields.
              <br />
              
              <br />
              <br />
              
             
            </p>
          </div>

          <div className="chairman-photo">
            <img src={chairmanImg} alt="Chairman Amrita Ghorui" />
            
          </div>
          
           <span className="designation"> <strong>Amrita Ghorui</strong></span><br />
           <span className="designation">Chairman of Wish-Mom</span>
        </div>

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
              Up-to-date details about top colleges in Agriculture, Engineering, Law, and Management and so on...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;