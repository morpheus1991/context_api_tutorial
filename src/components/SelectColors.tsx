import React, { useContext } from "react";
import ColorContext from "../contexts/color";
const colors = ["red", "orange", "yellow", "green"];
const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => {
          return (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => actions.setColor(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectColors;
