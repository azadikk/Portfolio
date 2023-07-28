import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { Link } from "react-scroll";
import Responsiveheader from "./Responsiveheader";
import './Responsiveheader.scss';

const Header = () => {

  const Navbar = [
    { id: 3, title: "Skills" },
    { id: 1, title: "Proyektlər" },
    { id: 2, title: "Haqqımda" },
    { id: 4, title: "Əlaqə" },
  ];

  const headerRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);
  const handleActive = (active) => {
    setActiveLink(active);
  };

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const lower = 500;
      const upper = 5000;
      if (scrollPosition >= lower && scrollPosition <= upper) {
        header.style.backgroundColor = "#9ad0ff";
      } else {
        header.style.backgroundColor = "white";
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileHeader, setMobileHeader] = useState(false);
  useEffect (() => {
      const handleResize = () => {
        if (window.innerWidth <= 576) {
          setMobileHeader(true);
        } else {
          setMobileHeader(false);
        }
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {window.removeEventListener('resize', handleResize)}
  }, [])

 

  return (
    <div className="header" ref={headerRef} id="head">
      
      {mobileHeader ? (
        <div>
        <Responsiveheader headerRef={headerRef}/>
        </div>
    ) : (
      <div>
      <div className="header-navbar">
        {Navbar.map((items) => (
          <div className="nav" key={items.id}>
            {items.id === 1 && (
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-180}
                duration={600}
                onClick={() => handleActive("project")}
                className={`li ${
                  activeLink === "project" ? "activeProject" : ""
                }`}
                >
                {items.title}
              </Link>
            )}

            {items.id === 2 && (
              <Link
              to="aboutTitle"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                onClick={() => handleActive("about")}
                className={`li ${activeLink === "about" ? "activeAbout" : ""}`}
              >
                {items.title}
              </Link>
            )}

            {items.id === 3 && (
              <Link
              to="skills"
              spy={true}
                smooth={true}
                offset={-230}
                duration={600}
                onClick={() => handleActive("skills")}
                className={`li ${
                  activeLink === "skills" ? "activeSkills" : ""
                }`}
              >
                {items.title}
              </Link>
            )}

            {items.id === 4 && (
              <Link
              to="my-contact"
                spy={true}
                smooth={true}
                offset={-180}
                duration={600}
                onClick={() => handleActive("contact")}
                className={`li ${
                  activeLink === "contact" ? "activeContact" : ""
                }`}
              >
                {items.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      </div>
    )}


</div>
  );
};

export default Header;
