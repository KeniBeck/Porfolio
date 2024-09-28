import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Deyler Mena and I am a full stack developer."
          />
        </h4>
        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I have been working in web development and desktop applications for 3 years. Constantly updating the technologies that I already master, but also seeking to learn new technologies to enrich my skills and improve my good."
          />
        </p>
        <ul>
          <li>
            <p>
              <span>Hobbies: </span>
              Listen to music and Programming
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> deyler456@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              Apartado, Colombia
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img
              alt="HTML"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <h5>HTML</h5>
          </div>
          <div>
            <img
              alt="CSS"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <h5>CSS</h5>
          </div>
          <div>
            <img
              alt="nextjs"
              className="icons-skils"
              src="https://cdn.icon-icons.com/icons2/3392/PNG/512/nextjs_icon_213852.png"
            />
            <h5>NextJS</h5>
          </div>
          <div>
            <img
              alt="Js"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="Bootstrap"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <img
              alt="tailwind"
              className="icons-skils"
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
            />
            <h5>Tailwind</h5>
          </div>
          <div>
            <img
              alt="React"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h5>React</h5>
          </div>
          <div>
            <img
              alt="Typescript"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <h5>Typescript</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img
              alt="Nodejs"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h5>NodeJs</h5>
          </div>
          <div>
            <img
              alt="express"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <h5>Express</h5>
          </div>
          <div>
            <img
              alt="nestjs"
              className="icons-skils"
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png"
            />
            <h5>NestJS</h5>
          </div>
          <div>
            <img
              alt="java"
              className="icons-skils"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
            />
            <h5>Java</h5>
          </div>
          <div>
            <img
              alt="mysql"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            />
            <h5>MySQL</h5>
          </div>
          <div>
            <img
              alt="postgresql"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            />
            <h5>PostgreSQL</h5>
          </div>
          <div>
            <img
              alt="mongodb"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <h5>MongodDB</h5>
          </div>
          <div>
            <img
              alt="cassandra"
              className="icons-skils"
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cassandra_logo_icon_170572.png"
            />
            <h5>Cassandra</h5>
          </div>
        </div>

        <h4>
          <FormattedMessage id="tools" defaultMessage="Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="figma"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              title="figma"
            />
            <h5>Figma</h5>
          </div>
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
              title="Visual Studio Code"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="git"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="git"
            />
            <h5>Git</h5>
          </div>
          <div>
            <img
              src="https://cdn.icon-icons.com/icons2/1381/PNG/512/jetbrainstoolbox_93803.png"
              alt="jetbrains"
              title="jetbrains"
              className="icons-skils"
            />
            <h5>Jetbrains</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
