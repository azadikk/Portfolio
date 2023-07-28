import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FiCodepen } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {

     const handleCopy = () => {
          const textToCopy = 'azad.miri6@gmail.com'; 
          if (navigator.clipboard) {
               navigator.clipboard.writeText(textToCopy)
                 .then(() => {
                   alert('Elektron Poçt Ünvanı Kopyalandı.')
               })
                 .catch((error) => {
                    console.log(error + 'serverda xeta oldu :(')
               });
             }
           };


  return (
    <div className="contact-me">
      <div className="icons-contact">
        <div className="icons" id="my-contact">
          <Link to="https://www.instagram.com/azaad.dd/" target="_BLANK" id="instagram">
            <BsInstagram />
          </Link>
          <Link to="https://www.facebook.com/AzadRapGoood/" target="_BLANK" id="facebook">
            <FaSquareFacebook />
          </Link>
          <Link to="https://github.com/azadikk" target="_BLANK" id="github">
            <AiFillGithub />
          </Link>
          <Link to="https://codepen.io/azadikk" target="_BLANK" id="codepen">
            <FiCodepen />
          </Link>
          <Link to="https://wa.me/994513641920?text=Salam.%20Sizin%20n%C3%B6mr%C9%99nizi%20portfolio%20s%C9%99hif%C9%99nizd%C9%99n%20ald%C4%B1m.%20Siz%C9%99%20t%C9%99klifim%20/%20sual%C4%B1m%20var." target="_BLANK" id="whatsapp">
            <BsWhatsapp />
          </Link>
          <span to="" id="gmail" onClick={handleCopy}>
            <BiLogoGmail />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
