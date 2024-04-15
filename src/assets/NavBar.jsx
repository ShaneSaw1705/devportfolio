import "../css/NavBar.css";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* Logo section */}
        <div className="logo">
          <h2 className="name-tag">{"<Name />"}</h2>
          <h2>ShaneCurtis</h2>
        </div>
        <ul className="socials">
          <li>
            <a href="#">
              <AiFillInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/ShaneSaw1705">
              <FaGithub /> Github
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
