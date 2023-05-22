import React from "react";
import LightLogo from "../../assets/lightLogo.png";
import DarkLogo from "../../assets/darkLogo.png";
import { Search, UserCircle, ShoppingCart, ChevronDown } from "lucide-react";

import "./Header.scss";

const Header = ({ isChecked }) => {
  return (
    <header>
      <img
        src={!isChecked ? LightLogo : DarkLogo}
        alt="logo para o modo claro"
        className="logo"
      />
      <div className={!isChecked ? "menu" : "dark-mode menu"}>
        <div className="search">
          <div className={!isChecked ? "search-icon" : "search-icon dark-mode"}>
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
  );
};

export default Header;
