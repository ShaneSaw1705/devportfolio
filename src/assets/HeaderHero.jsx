import "../css/HeaderHero.css";
import { IoMail } from "react-icons/io5";

export const HeroHeader = () => {
  return (
    <div className="header-container">
      <div className="content">
        <div className="header">
          <div className="intro">
            <h1>Hey</h1>
            <h1>
              I'm <span>Shane</span>,
            </h1>
            <h1>Full-stack Developer</h1>
            <p>
              I help business grow by crafting amazing web experiences. If
              you’re looking for a developer that likes to get stuff done,
            </p>
            <h3 className="lets-talk">Lets talk</h3>
          </div>
          <ul>
            <li>
              <h3>6</h3> Programming languages
            </li>
            <li>
              <h3>5</h3> Dev tools
            </li>
            <li>
              <h3>10</h3> Years of experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
