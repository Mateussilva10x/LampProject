import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Elipse } from "../../assets/elipse.svg";
import { ReactComponent as DarkElipse } from "../../assets/darkElipse.svg";
import { Search, UserCircle, ChevronDown, ShoppingCart } from "lucide-react";

import "./LightMode.scss";

const LightMode = () => {
  return (
    <div className="dark content">
      <header>
        <Logo />
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
          <Elipse />
        </div>
        <div className="footer">
          <h1>FOOTER</h1>
          <button>ON</button>
        </div>
      </section>
    </div>
  );
};

export default LightMode;
