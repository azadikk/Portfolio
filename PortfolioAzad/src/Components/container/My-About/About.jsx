import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Azad-Mirheydarzada-CV-Forması.pdf";
    link.download = "azad-mirheydarzada-cv-formasi-pdf.pdf";
    link.click();
  };

  return (
    <div className="my-about">
      <h1 id="aboutTitle">Haqqımda</h1>
      <div className="about">
        <section className="my-photos">
          <Carousel className="about-carousel">
            <div>
              <img src="men1.jpg" alt="me" />
            </div>
            <div>
              <img src="men2.jpg" alt="me" />
            </div>
            <div>
              <img src="men3.jpg" alt="me" />
            </div>
            <div>
              <img src="men4.jpg" alt="me" />
            </div>
          </Carousel>
        </section>
        <div className="header-about">
          <section className="top-about">
            <div className="left">
              <article className="my-name">
                <BsFillPersonLinesFill
                  style={{
                    fontSize: "2.5rem",
                    paddingRight: "0.5rem",
                    color: "white",
                  }}
                />
                <h1>Mirheydərzadə Azad</h1>
              </article>
              <article className="my-date-birth">
                <FaBirthdayCake
                  style={{
                    fontSize: "2.1rem",
                    paddingRight: "0.5rem",
                    color: "white",
                  }}
                />
                <strong>09.06.2001</strong>
              </article>
            </div>

            <div className="right">
              <h3>
                JOB:<strong>Full Stack Development</strong>
              </h3>
              <article className="email">
                <MdOutgoingMail
                  style={{ color: "#cecece", fontSize: "1.8rem" }}
                />
                <span id="email">azad.miri6@gmail.com</span>
              </article>
              <article className="telephone">
                <BsWhatsapp
                  style={{ color: "mediumaquamarine", fontSize: "1.4rem" }}
                />
                <Link
                  id="wp"
                  to="https://wa.me/994513641920?text=Salam.%20Sizin%20n%C3%B6mr%C9%99nizi%20portfolio%20s%C9%99hif%C9%99nizd%C9%99n%20ald%C4%B1m.%20Siz%C9%99%20t%C9%99klifim%20/%20sual%C4%B1m%20var."
                  target="_BLANK"
                >
                  +994513641920
                </Link>
              </article>
            </div>
          </section>

          <article className="me-about-paragraph">
            <p>
              Salam! Mən Azad. Karyerama 2022-ci il Oktyabr ayında başlamağıma
              baxmayaraq, 10 yaşlarımdan kompyuterdə müxtəlif işlər
              sərgiləmişəm. Design, montaj, kiçik kodlaşdırmalar və s. Karyerama
              başlayandan sonra isə məsulliyyətli bir işçi kimi davamlı inkişaf
              üçün çalışmışam və çalışıram. 2019-2022ci illərdə Kəlbəcər
              zonasında 2-ci Qarabağ döyüşlərində iştirak etmişəm. Həyatda ən
              böyük arzum gələcəkdə ailəmə və sevdiklərimə dəstək olub onları
              geridə qoymadan onlarla birgə çətin, asan yolları keçmək,
              xəyallarıma doğru hər nə olursa olsun irəliləməkdir.
            </p>
              <p style={{ padding: "1.5rem 0rem" }}>
                Uşaqlıqdan kompyuter texnologiyalarına aşinayam. Texnologiyanı
                yaxından izləyən biri kimi{" "}
                <strong>Komputer Texnologiyaları</strong> sahəsindəki
                irəliləyişləri diqqətlə izləyirəm və bu sahələrdəki ən son
                tendensiyaları işimə əks etdirirəm. Səmərəliliyi artırmaq üçün
                daim yeni proseslər və alətləri araşdırır, tətbiq edirəm.
                Həmçinin, analitik düşüncə və məlumatlara əsaslanan yanaşmam
                sayəsində müxtəlif problemlərə əsəbləşmək və işimdən soyumaq
                deyil, problemə fokuslanıb işimi necə daha da
                təkmilləşdirəcəyimi düşünür, xətaları aradan necə qaldıracağım
                barədə lazımi prosesləri həyata keçirirəm. Karyera məqsədlərimə
                uyğun olaraq, dinamik bir şirkətdə dəyər yaradan layihələrdə
                iştirak etmək və istedadlarımı işəgötürənlərimin böyüməsinə
                töhfə vermək üçün yeni imkanlar axtarıram.
              </p>
              <p style={{ padding: "2rem 0rem" }}>
                Təşəkkürlərim və ən xoş arzularımla, Azad Mirheydərzadə.
              </p>
          </article>
          <div className="cv-form">
            <FaRegFilePdf
              style={{
                color: "red",
                fontSize: "2.7rem",
                paddingRight: "0.7rem",
              }}
            />
            <h1 style={{ color: "white"}}>
               CV
            </h1>
              <button className="button" type="button" onClick={handleDownloadCV}>
                <span className="button__text">Yüklə</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    className="svg"
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
