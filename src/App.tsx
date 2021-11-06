import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";

import { ColorProvider } from "./contexts/color";
function App() {
  return (
    <div className="App">
      <ColorProvider>
        <div>
          <SelectColors></SelectColors>
          <ColorBox></ColorBox>
        </div>
      </ColorProvider>
    </div>
  );
}

export default App;
