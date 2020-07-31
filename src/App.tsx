import Canvas from "components/Canvas";
import React, { useRef } from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
      </header>
    </div>
  );
};

export default App;
