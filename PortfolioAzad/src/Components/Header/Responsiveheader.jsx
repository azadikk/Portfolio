import React, { useRef,useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-scroll';
import {LuBrainCircuit} from 'react-icons/lu'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {TiSupport} from 'react-icons/ti'

export default function Responsiveheader({headerRef}) {

  const [menu, setMenu] = useState(false);
  const mobilenavbaref = useRef(null);
  const handleMenuOpen = () => {
    setMenu(true);
    const openicon = document.getElementById('open');
    openicon.style.display = 'none';
  }
  const handleMenuClose = () => {
    setMenu(false);
    const openicon = document.getElementById('open');
    openicon.style.display = 'block';
  }
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobilenavbaref.current && !mobilenavbaref.current.contains(e.target)) {
        setMenu(false);
        const openicon = document.getElementById('open');
        openicon.style.display = 'block';
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  const Navbar = [
    { id: 3, title: "Skills" },
    { id: 1, title: "Proyektlər" },
    { id: 2, title: "Haqqımda" },
    { id: 4, title: "Əlaqə" },
  ];

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

  


  return (
    <div className='mobile-header'>
      
    {menu && (
      <>
      <VscChromeClose id='close'
      onClick={handleMenuClose}/>
      <div className='mobile-navbar' ref={mobilenavbaref}>
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
                <AiOutlineFundProjectionScreen style={{paddingRight: '0.5rem'}} />{items.title}
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
                <BsInfoCircle style={{paddingRight: '0.5rem'}} />{items.title}
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
                <LuBrainCircuit style={{paddingRight: '0.5rem'}} />{items.title}
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
                <TiSupport style={{paddingRight: '0.5rem'}} />{items.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      </>
    )}
        <GiHamburgerMenu 
        onClick={handleMenuOpen}
        id='open'/>
    </div>
  )
}
