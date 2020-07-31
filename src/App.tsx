import Management from "./components/Management";
import React from "react";
import { Container } from "react-bootstrap";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Management />
        </Container>
      </header>
    </div>
  );
};

export default App;
