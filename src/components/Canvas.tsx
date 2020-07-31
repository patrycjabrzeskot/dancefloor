import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      console.log(context);
      if (context) {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, 150, 150);
      }
    }
  }, []);
  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
