import "../css/ContactMe.css";
import { Divider } from "@mui/joy";

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
          <div className="form-details">
            <div className="form-top">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Your email" />
            </div>
            <input type="text" placeholder="You message" />
          </div>
          <button>send</button>
        </div>
      </div>
    </div>
  );
};
