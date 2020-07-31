import React, { useEffect, useRef, useState } from "react";

interface CanvasProps {
  tileSize: string;
}

const Tile: React.FC<CanvasProps> = (props: CanvasProps) => {
  const colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "black",
    "pink",
    "purple",
  ];

  let random = Math.floor(Math.random() * colors.length);
  const [color, setColor] = useState(random);

  const handleClick = () => {
    console.log("COLORs");
    console.log(random);
    random = Math.floor(Math.random() * colors.length);
    setColor(random);
    console.log(random);
  };
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = colors[random];

        context.fillRect(0, 0, 150, 150);
      }
    }
  }, [random, color, colors]);

  return (
    <canvas
      id="tile"
      ref={canvasRef}
      width="150"
      height="150"
      onClick={handleClick}
    ></canvas>
  );
};

export default Tile;
