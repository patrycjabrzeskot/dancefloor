import CanvasContainer from "components/CanvasContainer";
import Management from "./components/Management";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Management />
          <CanvasContainer />
        </Container>
      </header>
    </div>
  );
};

export default App;
