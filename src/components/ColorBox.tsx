import React from "react";
import { ColorConsumer } from "../contexts/color";
const ColorBox = () => {
  return (
    <div>
      <ColorConsumer>
        {(value) => (
          <div>
            <div
              style={{
                width: "64px",
                height: "64px",
                background: value.state.color,
              }}
            ></div>

            <div
              style={{
                width: "32px",
                height: "32px",
                background: value.state.subColor,
              }}
            ></div>
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default ColorBox;
