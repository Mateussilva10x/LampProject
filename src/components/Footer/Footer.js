import React from "react";
import { ChevronDown, Youtube, Twitter, Mouse } from "lucide-react";

import "./Footer.scss";

const Footer = ({ isChecked }) => {
  return (
    <div className="footer">
      <div className={!isChecked ? "list-menu" : "dark-mode list-menu"}>
        <ul>
          <li>home</li>
          <li>products</li>
          <li>projects</li>
          <li>sale</li>
          <li>help</li>
        </ul>
      </div>

      <div
        className={
          !isChecked ? "footer-icon-center" : "footer-icon-center dark-mode"
        }
      >
        <Mouse />
        <ChevronDown />
      </div>
      <div className="social-medias">
        <p>follow us to get the news</p>
        <div className="social-medias-icons">
          <div className={!isChecked ? "media-icon" : "dark-mode media-icon"}>
            <Youtube />
          </div>
          <div className={!isChecked ? "media-icon" : "dark-mode media-icon"}>
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
