import "../css/Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="content">
        <div className="skills-header">
          <div className="skill-title">
            <h1>Skills</h1>
            <h3>I strive to never stop learning and improving.</h3>
            <div className="divider"></div>
          </div>
          <div className="platforms"></div>
          <div className="languages">
            <h3>
              <FaHtml5 />
              Html
            </h3>
            <h3>
              <FaCss3Alt />
              Css
            </h3>
            <h3>
              <IoLogoJavascript />
              JS
            </h3>
            <h3>
              <FaReact />
              React.js
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
