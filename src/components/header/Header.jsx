
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};


const Header = ({ isAuth}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProgramsOpen, setProgramsOpen] = useState(false);
  const [isInstituteOpen, setInstituteOpen] = useState(false);


  const isDesktop = useMediaQuery('(min-width: 951px)');
  
 
  const programsRef = useRef(null);
  const instituteRef = useRef(null);


  useEffect(() => {

    if (!isProgramsOpen && !isInstituteOpen || !isDesktop) return;

    const handleClickOutside = (event) => {
      if (
        (programsRef.current && !programsRef.current.contains(event.target)) &&
        (instituteRef.current && !instituteRef.current.contains(event.target))
      ) {
        setProgramsOpen(false);
        setInstituteOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProgramsOpen,isInstituteOpen,isDesktop]);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [menuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setProgramsOpen(false);
    setInstituteOpen(false);
  };
  
  useEffect(() => {
    if (!menuOpen) {
      setProgramsOpen(false);
      setInstituteOpen(false);
    }
  }, [menuOpen]);

  return (
    
    <header className="header">
      <Link to="/" className="logo-link" onClick={closeMenus}>
        <div className="logo"><img src="/Image/logo1.jpg" alt="LOGO" /></div>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div className={`hamburger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to={"/"} onClick={closeMenus}>Home</Link>
        
        <div className="dropdown" ref={programsRef}>
          <button 
            className={`dropdown-toggle ${isProgramsOpen ? "active" : ""}`}
            onClick={() => {
              setProgramsOpen(!isProgramsOpen);
              setInstituteOpen(false);
            }}
            aria-haspopup="true"
            aria-expanded={isProgramsOpen}
          >
            All Programs
            <svg className="caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          
          <div className={`dropdown-menu megamenu ${isProgramsOpen ? "open" : ""}`}>
            <div className="mega-sub">
              <ul>
                <li><Link to="/engineering" onClick={closeMenus}>Engineering</Link></li>
                <li><Link to="/medical" onClick={closeMenus}>Medical Sciences</Link></li>
                <li><Link to="/management" onClick={closeMenus}>Management</Link></li>
                <li><Link to="/bio_Technology" onClick={closeMenus}>Bio Technology</Link></li>
                <li><Link to="/law" onClick={closeMenus}>Law</Link></li>
                <li><Link to="/agriculture" onClick={closeMenus}>Agriculture</Link></li>
                <li><Link to="/communication" onClick={closeMenus}>Communication & Multimedia</Link></li>
                <li><Link to="/humanities" onClick={closeMenus}>Humanities & Social Science</Link></li>
                <li><Link to="/computational" onClick={closeMenus}>Computational & Applied Science</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dropdown" ref={instituteRef}>
          <button 
            className={`dropdown-toggle ${isInstituteOpen ? "active" : ""}`}
            onClick={() => {
              setInstituteOpen(!isInstituteOpen);
              setProgramsOpen(false);
            }}
            aria-haspopup="true"
            aria-expanded={isInstituteOpen}
          >
            All Institute
            <svg className="caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          
          <div className={`dropdown-menu megamenu ${isInstituteOpen ? "open" : ""}`}>
            <div className="mega-sub">
              <ul>
                <li><Link to="/alokbharati" onClick={closeMenus}>Alokbharati Institute</Link></li>
                <li><Link to="/Debdaan" onClick={closeMenus}>Debdaan Parna Griha Institute</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <Link to={"/about"} onClick={closeMenus}>About Us</Link>
        <Link to={"/contact_us"} onClick={closeMenus}>Contact Us</Link>
        
        <div className="nav-separator"></div>
        
        {isAuth ? (
          <Link to={"/account"} onClick={() => setMenuOpen(false)} className="nav-button-auth">Account</Link>
        ) : (
          <Link to={"/login"} onClick={() => setMenuOpen(false)} className="nav-button-auth">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;