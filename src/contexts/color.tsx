import React, { createContext, useState } from "react";

interface IColorContext {
  state: {
    [property: string]: string;
  };
  actions: {
    [property: string]: Function;
  };
}
const colorContextInit: IColorContext = {
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    subColor: () => {},
  },
};
const ColorContext = createContext(colorContextInit);

const ColorProvider = ({ children }: { children: JSX.Element }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };
export default ColorContext;
