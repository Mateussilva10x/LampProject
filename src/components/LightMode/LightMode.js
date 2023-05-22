import React, { useState } from "react";
import LampOn from "../../assets/lampOn.png";
import LightLogo from "../../assets/lightLogo.png";
import DarkLogo from "../../assets/darkLogo.png";
import LightElipse from "../../assets/lightElipse.png";
import DarkElipse from "../../assets/darkElipse.png";
import Flash from "../../assets/flash.png";
import {
  Search,
  UserCircle,
  ChevronDown,
  ShoppingCart,
  Youtube,
  Twitter,
  Mouse,
} from "lucide-react";

import "./LightMode.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const LightMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={!isChecked ? "light content" : "dark content"}>
      <header>
        <img
          src={!isChecked ? LightLogo : DarkLogo}
          alt="logo para o modo claro"
          className="logo"
        />
        <div className={!isChecked ? "menu" : "dark-mode menu"}>
          <div className="search">
            <div
              className={!isChecked ? "search-icon" : "search-icon dark-mode"}
            >
              <Search size={20} />
            </div>
            <input
              className={!isChecked ? "" : "dark-mode"}
              type="text"
              placeholder="search lamp..."
            />
          </div>
          <ShoppingCart />
          <UserCircle />
          <ChevronDown />
        </div>
      </header>
      <section>
        <div className="image-container">
          <div className="elipse-container">
            <img
              src={!isChecked ? LightElipse : DarkElipse}
              alt="elipse do modo claro"
            />
          </div>
          <img src={LampOn} alt="lamp" />
          <img src={Flash} alt="lamp" className="flash" />
          <ToggleSwitch onClick={handleChecked} checked={isChecked} />
          <div className="main-content">
            <h1 className={!isChecked ? "" : "dark-mode"}>
              {!isChecked ? "light your way" : "change environments"}
            </h1>
            <span className={!isChecked ? "" : "dark-mode"}>
              {!isChecked
                ? "We offer a wide range of fixtures to help you light your space efficiently and elegantly. From modern pendants to classic floor lamps, we have options for every style and need."
                : "All our lamps are carefully selected to ensure exceptional quality, durability, and design."}
            </span>
          </div>
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
                !isChecked
                  ? "footer-icon-center"
                  : "footer-icon-center dark-mode"
              }
            >
              <Mouse />
              <ChevronDown />
            </div>
            <div className="social-medias">
              <p>follow us to get the news</p>
              <div className="social-medias-icons">
                <div
                  className={!isChecked ? "media-icon" : "dark-mode media-icon"}
                >
                  <Youtube />
                </div>
                <div
                  className={!isChecked ? "media-icon" : "dark-mode media-icon"}
                >
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightMode;
