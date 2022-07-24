import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Facebook = <FontAwesomeIcon icon={faFacebookF} size="2x" />;
const Insta = <FontAwesomeIcon icon={faInstagram} size="2x" />;
const Twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />;
const YouTube = <FontAwesomeIcon icon={faYoutube} size="2x" />;

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <div>{Facebook}</div>
        <div>{Insta}</div>
        <div>{Twitter}</div>
        <div>{YouTube}</div>
      </div>
      <div className="lists">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li className="txt">Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button>Service Code</button>
      </div>
      <div>
        <div>1997-2022 Netflic, inc. </div>
      </div>
    </div>
  );
}

export default Footer;
