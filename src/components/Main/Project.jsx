import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-app-18.png`)} alt="proyectos" />
            <div className="content">
              <h3>Tecos</h3>
              <p>Tecos Mexican restaurant page</p>
              <p className="tecnologias">
                React
                <span> -</span> Redux
                <span> -</span> Next
                <span> -</span> Tailwind
                <span> -</span> Javascript
                <span> -</span> NodeJS
                <span> -</span> Mysql
              </p>
              <a
                href="https://tecos.vercel.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/julian98789/Tecos"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-pizarras.png`)} alt="proyectos" />
            <div className="content">
              <h3>Pizarras</h3>
              <p>ticket sales page</p>
              <p className="tecnologias">
                React
                <span> -</span> Redux
                <span> -</span> Next
                <span> -</span> Tailwind
                <span> -</span> Javascript
                <span> -</span> NodeJS
                <span> -</span> Mysql
              </p>
              <a
                href="https://www.sorteotrebol.com/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/KeniBeck/Pizarras"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
