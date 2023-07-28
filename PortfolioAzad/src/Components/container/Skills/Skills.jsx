import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
     <div className="swipper-for-skills" id='skills'>
     <Carousel autoPlay={true} className="swipper" showThumbs={false} interval={1000} infiniteLoop>
       <div>
         <AiOutlineHtml5 style={{ fontSize: "15rem", color: "#e34c26" }} />
         <h1 style={{ color: "white" }}>HTML</h1>
       </div>
       <div>
         <FaCss3Alt style={{ fontSize: "15rem", color: "#264de4" }} />
         <h1 style={{ color: "white" }}>CSS</h1>
       </div>
       <div>
         <SiJavascript style={{ fontSize: "15rem", color: "yellow" }} />
         <h1 style={{ color: "white" }}>JavaScript</h1>
       </div>

       <div>
         <BiLogoReact
           style={{ fontSize: "15rem", color: "lightskyblue" }}
           />
         <h1 style={{ color: "white" }}>React.JS</h1>
       </div>

       <div>
         <SiRedux
           style={{ fontSize: "15rem", color: "mediumslateblue" }}
         />
         <h1 style={{ color: "white" }}>Redux</h1>
       </div>

       <div>
         <BiLogoNodejs style={{ fontSize: "15rem", color: "#372" }} />
         <h1 style={{ color: "white" }}>Node.JS</h1>
       </div>

       <div>
         <SiMysql
           style={{ fontSize: "15rem", color: "mediumslateblue" }}
         />
         <h1 style={{ color: "white" }}>MySQL</h1>
       </div>

       <div>
         <BiLogoMongodb style={{ fontSize: "15rem", color: "green" }} />
         <h1 style={{ color: "white" }}>MongoDB</h1>
       </div>

       <div>
         <BsFillBootstrapFill
           style={{ fontSize: "15rem", color: "darkslateblue" }}
         />
         <h1 style={{ color: "white" }}>BOOTSTRAP</h1>
       </div>

       <div>
         <PiFigmaLogoDuotone
           style={{ fontSize: "15rem", color: "orangered" }}
         />
         <h1 style={{ color: "white" }}>FIGMA</h1>
       </div>
     </Carousel>
   </div>
  )
}

export default Skills