import React from "react";
import Tile from "./Tile";

const CanvasContainer: React.FC = () => {
  const rows = 2;
  const cols = 5;

  return (
    <>
      {[...Array(rows)].map((e, j) => (
        <>
          {[...Array(cols)].map((e, i) => (
            <Tile key={i} tileSize="150" />
          ))}
          <br />
        </>
      ))}
    </>
  );
};

export default CanvasContainer;
