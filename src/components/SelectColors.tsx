import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green"];
const SelectColors = () => {
  return (
    <div>
      <ColorConsumer>
        {({ actions }) => (
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
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
