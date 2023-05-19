import React from "react";
import LampOn from "../../assets/lampOn.png";
import LightLogo from "../../assets/lightLogo.png";
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
} from "lucide-react";

import "./LightMode.scss";

const LightMode = () => {
  return (
    <div className="dark content">
      <header>
        <img src={LightLogo} alt="logo para o modo claro" />
        <div className="menu">
          <div className="search">
            <div className="search-icon">
              <Search size={20} />
            </div>
            <input type="text" placeholder="search lamp..." />
          </div>
          <ShoppingCart />
          <UserCircle />
          <ChevronDown />
        </div>
      </header>
      <section>
        <div className="image-container">
          <div className="elipse-container">
            <img src={DarkElipse} alt="elipse do modo claro" />
          </div>
          <img src={LampOn} alt="lamp" />
          <img src={Flash} alt="lamp" className="flash" />
          <button>ON</button>
          <div className="main-content">
            <h1>change environments</h1>
            <span>
              All our lamps are carefully selected to ensure exceptional
              quality, durability, and design.
            </span>
          </div>
          <div className="footer">
            <p>follow us to get the news</p>
            <div className="social-medias">
              <div className="media-icon">
                <Youtube />
              </div>
              <div className="media-icon">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightMode;
