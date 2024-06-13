import React from "react";

import './ToggleButton.css';

const ToggleButton = ({ handleToggleClick, showData }) => {
  return (
    <button onClick={handleToggleClick}>
      {showData ? "Hide Data" : "Show Data"}
    </button>
  );
};

export default ToggleButton;