import React, { useState } from "react";
import LampOn from "../../assets/lampOn.png";
import LightElipse from "../../assets/lightElipse.png";
import DarkElipse from "../../assets/darkElipse.png";
import Flash from "../../assets/flash.png";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Main.scss";

const Main = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={!isChecked ? "light content" : "dark content"}>
      <Header isChecked={isChecked} />
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
          <Footer isChecked={isChecked} />
        </div>
      </section>
    </div>
  );
};

export default Main;
