import React from "react";

import "./ToggleSwitch.scss";

const ToggleSwitch = ({ onClick, checked }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onClick={onClick} />
      <span>
        <p>{checked ? "On" : "Off"}</p>
      </span>
    </label>
  );
};

export default ToggleSwitch;
