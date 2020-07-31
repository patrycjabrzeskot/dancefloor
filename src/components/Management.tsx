import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";
import InputsSection from "./InputsSection";

const Management: React.FC = () => {
  const [row, setRow] = useState("4");
  const [col, setCol] = useState("4");

  const setNewRow = (userInputNew: string) => {
    setRow(userInputNew);
  };

  const setNewCol = (userInputNew: string) => {
    setCol(userInputNew);
  };
  return (
    <>
      <InputsSection setNewRow={setNewRow} setNewCol={setNewCol} />
      <CanvasContainer rows={parseInt(row)} cols={parseInt(col)} />
    </>
  );
};

export default Management;
