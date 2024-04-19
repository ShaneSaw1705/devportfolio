import "../css/ContactMe.css";
import { Divider } from "@mui/joy";
import Textarea from "@mui/joy";

export const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="content">
        <div className="form">
          <div className="form-header">
            <h1>Contact</h1>
            <Divider />
            <h4>I am currently taking freelance work</h4>
          </div>
          <div className="form-details"></div>
        </div>
      </div>
    </div>
  );
};
