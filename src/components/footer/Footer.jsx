import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="footer-title">Wishmom</h2>
          <p className="footer-tagline">
            Your trusted guide for Vocational and Professional Courses
          </p>

        <div className="social-links">
            <a href="https://www.youtube.com/@wishmom"><AiFillYoutube/></a>
          <a href="https://www.facebook.com/share/1GU8h9Uarn/">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/wishm.om?igsh=enFyb3U2cnQyNHFp">
            <AiFillInstagram />
          </a>
          {/* <a href=""><FontAwesomeIcon icon={byPrefixAndName.fat['phone']} /></a> */}
        </div>
        <p>
          &copy; 2025 Wishmom. All rights reserved. <br /><a href=""></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
