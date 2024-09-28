import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img
                src={proyectsImg(`./proyecto-app-18.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img
                src={proyectsImg(`./proyecto-pizarras.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
      </main>

      <Modal estado={estadoModal17} cambiarEstado={cambiarEstadoModal17}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-17-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-17-p1"
                  defaultMessage="Tecos, Mexican restaurant page"
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-17-p2"
                  defaultMessage="Attractive restaurant page with shift management, billing management and sales management"
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://tecos.vercel.app/" target="_blank">
                  tecos.vercel.app/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal14} cambiarEstado={cambiarEstadoModal14}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-pizarras-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage id="projects-info-14-p1" defaultMessage="" />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-14-p2"
                  defaultMessage="Lottery ticket sales page with sales management and ticket generation in PDF, the logic is handled in the sales draw in range in weeks."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://pizarras.vercel.app/" target="_blank">
                  pizarras.vercel.app/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
