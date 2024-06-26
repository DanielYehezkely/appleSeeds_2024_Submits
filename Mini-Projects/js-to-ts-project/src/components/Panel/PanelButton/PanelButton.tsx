import React from "react";

import ICONS from "../../../models/icons";

import './PanelButton.css'

interface Props {
  label: string;
  booleanState: boolean;
  handleClick: () => void;
}

const PanelButton:React.FC<Props> = ({ handleClick, label, booleanState }) => {
  return (
    <button className="panel-button" role="button" onClick={handleClick}>
      {booleanState ? `Close ${label} Table` : `Show ${label} Table`} {booleanState ? <ICONS.Minus /> : <ICONS.Plus />}
    </button>
  );
};

export default PanelButton;
