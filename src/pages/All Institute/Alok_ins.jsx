import React from "react";
import "./alok_ins.css";
import { AiFillFacebook } from "react-icons/ai";

const AlokIns = () => {
  return (
    <section className="featured-section">
    <div className="institute-card">
            <img src="/Image/alok.jpg" alt="Alokbharati" />
            <div className="card-content">
              <h3>Alokbharati Institute</h3>
              <p>
                Programs in counseling, parenting, and mentorship—designed to
                nurture holistic development and career readiness.
              </p>
              <ul>
                <li>
                  <strong> All Academic Degrees</strong> (Madhyamik, H.S.,
                  Graduation, Post Graduation)
                </li>
                <li>
                  <strong> Psychological Courses</strong> (Online/Offline)
                </li>
                <li>
                  <strong>
                    {" "}
                    Abacus & Vedic Math Teacher & Student Training Program
                  </strong>
                </li>
                <li>
                  <strong> Counseling Courses</strong>
                </li>
                <li>
                  <strong> Yoga & Meditation</strong>
                </li>
                <li>
                  <strong> Various School Programming Courses</strong> (e.g.,
                  Anatomy, Yoga, Meditation, Counseling, Parenting, etc.)
                </li>
              </ul>
              <a href="https://www.facebook.com/share/1GU8h9Uarn/">
                <AiFillFacebook />
              </a>
            </div>
          </div>
          </section>
  );
};

export default AlokIns;
