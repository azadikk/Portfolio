import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FiGithub } from "react-icons/fi";
import { MdPhishing } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaCodepen } from "react-icons/fa";

const Projects = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [bigPicture, setBigPicture] = useState(false);
  const handleIconEnter = (project) => {
    setShowIcon(project);
  };
  const handleIconLeave = () => {
    setShowIcon(false);
  };

  const toggleShowImage = (project) => {
    setBigPicture(project);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setBigPicture(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const projectsRef = useRef(null);
  const [isClose, setClose] = useState(false);
  const handleCloseProject = () => {
    setClose(!isClose)
    if (projectsRef.current) {
      projectsRef.current.style.visibility = isClose ? 'hidden' : 'visible';
      setClose(true);
    } else if (projectsRef.current){
      projectsRef.current.style.visibility = isClose ? 'hidden' : 'visible';
      setClose(false);
    }
  }

  return (
    <div className="projectsmain">
      {isClose ? (
        <div className="uiverse2"onClick={handleCloseProject} id="projects">
        <span className="tooltip">GÖSTƏR</span>
          <span >
            Proyektlərim
          </span>
        </div>
      ): (
    <div className="projects" ref={projectsRef}>
       <div className="uiverse"onClick={handleCloseProject} id="projects">
        <span className="tooltip">YIĞIŞDIR</span>
          <span >
            Proyektlərim
          </span>
        </div>

      <div className="box ebay-project">
        <section className="photo">
          <Carousel interval={2000} infiniteLoop className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ebay")}
              onMouseLeave={handleIconLeave}
            >
              <img src="ebay1.png" />
              {showIcon === "ebay" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ebay")}
                />
              )}
            </div>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ebay")}
              onMouseLeave={handleIconLeave}
            >
              <img src="ebay2.png" />
              {showIcon === "ebay" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ebay")}
                />
              )}
            </div>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ebay")}
              onMouseLeave={handleIconLeave}
            >
              <img src="ebay3.png" />
              {showIcon === "ebay" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ebay")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />

            <h3>Praktika üçün Ebay proyekti</h3>
          </div>
          <div className="icons">
            <FiGithub />
            <Link
              className="span"
              to="https://github.com/azadikk/EbayWebsiteClone"
              target="_BLANK"
            >
              GitHub'da bax
            </Link>
          </div>
        </article>

        {bigPicture === "ebay" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="ebay1.png" />
              </div>
              <div className="image">
                <img src="ebay2.png" />
              </div>
              <div className="image">
                <img src="ebay3.png" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

      <div className="box instagram-project">
        <section className="photo">
          <Carousel className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("instagram")}
              onMouseLeave={handleIconLeave}
            >
              <img src="instagram.jpeg" />
              {showIcon === "instagram" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("instagram")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />
            <h3>Praktika üçün Instagram/Login proyekti</h3>
          </div>
          <div className="icons">
            <FaCodepen />
            <Link
              className="span"
              to="https://codepen.io/azadikk/pen/MWPzPJp"
              target="_BLANK"
            >
              Codepen'də bax
            </Link>
          </div>
        </article>

        {bigPicture === "instagram" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="instagram.jpeg" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

      <div className="box math-project">
        <section className="photo">
          <Carousel interval={2000} infiniteLoop className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math1.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math2.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math3.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math4.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math5.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math6.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math7.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math8.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math9.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math10.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math11.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("math")}
              onMouseLeave={handleIconLeave}
            >
              <img src="math12.png" />
              {showIcon === "math" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("math")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />
            <h3>Praktika üçün Exam proyekti</h3>
          </div>
          <div className="icons">
            <FiGithub />
            <Link
              className="span"
              to="https://github.com/azadikk/MathematicWebsite/tree/main/Math-website"
              target="_BLANK"
            >
              GitHub'da bax
            </Link>
          </div>
        </article>

        {bigPicture === "math" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="math1.png" />
              </div>

              <div className="image">
                <img src="math2.png" />
              </div>

              <div className="image">
                <img src="math3.png" />
              </div>

              <div className="image">
                <img src="math4.png" />
              </div>

              <div className="image">
                <img src="math5.png" />
              </div>

              <div className="image">
                <img src="math6.png" />
              </div>

              <div className="image">
                <img src="math7.png" />
              </div>

              <div className="image">
                <img src="math8.png" />
              </div>

              <div className="image">
                <img src="math9.png" />
              </div>

              <div className="image">
                <img src="math10.png" />
              </div>

              <div className="image">
                <img src="math11.png" />
              </div>

              <div className="image">
                <img src="math12.png" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

      <div className="box goko-project">
        <section className="photo">
          <Carousel interval={2000} infiniteLoop className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("goko")}
              onMouseLeave={handleIconLeave}
            >
              <img src="goko1.png" />
              {showIcon === "goko" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("goko")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("goko")}
              onMouseLeave={handleIconLeave}
            >
              <img src="goko2.png" />
              {showIcon === "goko" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("goko")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("goko")}
              onMouseLeave={handleIconLeave}
            >
              <img src="goko3.png" />
              {showIcon === "goko" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("goko")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("goko")}
              onMouseLeave={handleIconLeave}
            >
              <img src="goko4.png" />
              {showIcon === "goko" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("goko")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("goko")}
              onMouseLeave={handleIconLeave}
            >
              <img src="goko5.png" />
              {showIcon === "goko" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("goko")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />
            <h3>Praktika üçün Goko Website proyekti</h3>
          </div>
          <div className="icons">
            <FiGithub />
            <Link
              className="span"
              to="https://github.com/azadikk/Goko-Website/tree/main/Goko"
              target="_BLANK"
            >
              GitHub'da bax
            </Link>
          </div>
        </article>

        {bigPicture === "goko" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="goko1.png" />
              </div>

              <div className="image">
                <img src="goko2.png" />
              </div>

              <div className="image">
                <img src="goko3.png" />
              </div>

              <div className="image">
                <img src="goko4.png" />
              </div>

              <div className="image">
                <img src="goko5.png" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

      <div className="box ecommerce-project">
        <section className="photo">
          <Carousel interval={2000} infiniteLoop className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim1.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim2.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim3.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim4.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim6.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim7.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim8.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim9.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim10.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("ecommerce")}
              onMouseLeave={handleIconLeave}
            >
              <img src="aldim11.png" />
              {showIcon === "ecommerce" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("ecommerce")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />
            <h3>Praktika üçün E-Commerce proyekti</h3>
          </div>
          <div className="icons">
            <FiGithub />
            <Link
              className="span"
              to="https://github.com/azadikk/E-commerce/tree/main/Aldim-az"
              target="_BLANK"
            >
              GitHub'da bax
            </Link>
          </div>
        </article>

        {bigPicture === "ecommerce" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="aldim1.png" />
              </div>

              <div className="image">
                <img src="aldim2.png" />
              </div>

              <div className="image">
                <img src="aldim3.png" />
              </div>

              <div className="image">
                <img src="aldim4.png" />
              </div>

              <div className="image">
                <img src="aldim6.png" />
              </div>

              <div className="image">
                <img src="aldim7.png" />
              </div>

              <div className="image">
                <img src="aldim8.png" />
              </div>

              <div className="image">
                <img src="aldim9.png" />
              </div>

              <div className="image">
                <img src="aldim10.png" />
              </div>

              <div className="image">
                <img src="aldim11.png" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

      <div className="box sakitlik-project">
        <section className="photo">
          <Carousel interval={2000} infiniteLoop className="carousel" autoPlay>
            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit1.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit2.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit3.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit4.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit5.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit6.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit7.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit8.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit9.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>

            <div
              className="image"
              onMouseEnter={() => handleIconEnter("sakitlik")}
              onMouseLeave={handleIconLeave}
            >
              <img src="sakit10.png" />
              {showIcon === "sakitlik" && (
                <BiSearchAlt
                  id="biggericon"
                  onClick={() => toggleShowImage("sakitlik")}
                />
              )}
            </div>
          </Carousel>
        </section>
        <article className="about">
          <div className="text">
            <MdPhishing
              style={{
                fontSize: "2.5rem",
                color: "wheat",
              }}
            />
            <h3>Praktika üçün sadə Landing Page proyekti</h3>
          </div>
          <div className="icons">
            <FiGithub />
            <Link
              className="span"
              to="https://github.com/azadikk/sakitliksayti"
              target="_BLANK"
            >
              GitHub'da bax
            </Link>
          </div>
        </article>

        {bigPicture === "sakitlik" ? (
          <div className="modal">
            <h2>Çıxmaq üçün ESC basın</h2>
            <Carousel className="carouselModal">
              <div className="image">
                <img src="sakit1.png" />
              </div>

              <div className="image">
                <img src="sakit2.png" />
              </div>

              <div className="image">
                <img src="sakit3.png" />
              </div>

              <div className="image">
                <img src="sakit4.png" />
              </div>

              <div className="image">
                <img src="sakit5.png" />
              </div>

              <div className="image">
                <img src="sakit6.png" />
              </div>

              <div className="image">
                <img src="sakit7.png" />
              </div>

              <div className="image">
                <img src="sakit8.png" />
              </div>

              <div className="image">
                <img src="sakit9.png" />
              </div>

              <div className="image">
                <img src="sakit10.png" />
              </div>
            </Carousel>
          </div>
        ) : (
          () => {}
        )}
      </div>

    </div>)}
    </div>
  );
};

export default Projects;
