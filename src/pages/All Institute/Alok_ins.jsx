import React from "react";
import "./all_ins.css";
import { AiFillFacebook } from "react-icons/ai";

const AlokIns = () => {
  return (
    <section className="featured-section1">
    <div className="institute-card1">
            <img src="/Image/alok-ins1.png" alt="Alokbharati" className="Alokbharati-logo" />
            <div className="card-content1">
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
              <a href="https://www.facebook.com/share/1785BW8tko/">
                <AiFillFacebook />
              </a>
            </div>
          </div>
          </section>
  );
};

export default AlokIns;
