import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useRef } from "react";
import TypewriterComponent from "typewriter-effect";


const TextArea = () => {
  const paragraph = useRef(null);
  const textref = useRef(null);
  const typewriterparagraph = useRef(null);
  const [visible, setVisible] = useState(true);
  const [showType, setShowType] = useState(false);

  const handleAccordion = () => {
    if (paragraph.current) {
      const currentVisibility = paragraph.current.style.visibility;
      if (currentVisibility === "hidden") {
        paragraph.current.style.visibility = "visible";
        paragraph.current.classList.add("show");
        paragraph.current.classList.remove("hide");
        setVisible(true);
        setShowType(false);
        typewriterparagraph.current.style.display = 'none';
        typewriterparagraph.current.classList.remove('showType');
        typewriterparagraph.current.classList.add('hideType');
        textref.current.style.marginTop = '0rem'
      } else {
        paragraph.current.classList.remove("show");
        paragraph.current.classList.add("hide");
        paragraph.current.style.visibility = "hidden";
        setVisible(false);
        setShowType(true);
        typewriterparagraph.current.style.display = 'block';
        textref.current.style.marginTop = '5rem'
        typewriterparagraph.current.classList.add('showType');
        typewriterparagraph.current.classList.remove('hideType');
      }
    }
  };

  return (
    <div className="text-area">
      <div className="text" ref={textref}>
        <div className="hello">
        <h1>Salam🫡</h1>
        <h2>Adım Azad..</h2>
        </div>
        <div className="developer">
          <h4>Full Stack Developer</h4>
          {visible ? (
            <IoIosArrowDown id="iconDown" onClick={handleAccordion} />
          ) : (
            <IoIosArrowUp id="iconUp" onClick={handleAccordion} />
          )}
        </div>
        <p
          ref={paragraph}
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          Məqsədim gələcəkdə kodlaşdırma sahəsinə öz töhfələrini verən
          <br />
          <strong>Developer</strong>'lardan olmaqdır. Öz işimdə
          <strong> məsuliyyətli olmağı, </strong>
          <strong>problemlərlə <br /> başa çıxmağı </strong>həmişə sevmişəm və sevəcəm ✌️
        </p>
        
        <div 
        style={{display: showType ? 'block' : 'none'}}
        ref={typewriterparagraph}>
          <TypewriterComponent options={{ loop: true, delay: 55, deleteSpeed: 30 }} onInit={(typewriter) => {
            typewriter.typeString('Səni görmək xoşdur! Bura mənim şəxsi portfolio səhifəmdir.<br/>')
            typewriter.typeString('Əgər istəsən aşağılara enib məni daha yaxından tanıya bilərsən.').start();
          }} />
        </div>
      </div>
     
    </div>
  );
};

export default TextArea;
