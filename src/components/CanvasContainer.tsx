import React from "react";
import Tile from "./Tile";

interface CanvasContainerProps {
  rows: number;
  cols: number;
}
const CanvasContainer: React.FC<CanvasContainerProps> = (
  props: CanvasContainerProps
) => {
  return (
    <>
      {[...Array(props.rows)].map((e, j) => (
        <>
          {[...Array(props.cols)].map((e, i) => (
            <Tile key={i} tileSize="150" />
          ))}
          <br />
        </>
      ))}
    </>
  );
};

export default CanvasContainer;
