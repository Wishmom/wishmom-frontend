import React from "react";
import "./all_ins.css";
import { AiFillFacebook } from "react-icons/ai";

const Debdaan = () => {
  return (
    <section className="featured-section1">
    <div className="institute-card1">
            <img src="/Image/Debdaan.png" alt="Debdaan" className="Debdaan-logo"/>
            <div className="card-content1">
              <h3>Alokbharati Institute</h3>
              <p>
                A creative space for modern education, focused on life-skills,
                academic growth, and emotional well-being.
              </p>
              <ul>
                <li>
                  <strong>Spiritual Course</strong>
                </li>
                <li>
                  <strong>Astrology</strong>
                </li>
                <li>
                  <strong>Numerology</strong>
                </li>
                <li>
                  <strong>Vedas</strong>
                </li>
              </ul>
              <a href="https://www.facebook.com/share/1DqVMNxJ5d/">
                <AiFillFacebook />
              </a>
            </div>
          </div>
          </section>
  );
};

export default Debdaan;
