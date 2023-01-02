import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="section_header">Follow me</h1>
      <div className="footer__contacts">
        <a href="#" className="footer__contacts-icons">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" className="footer__contacts-icons">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="footer__contacts-icons">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="footer__cr">copyright &#169; 2022 karimBahri, inc.</p>
    </footer>
  );
}
