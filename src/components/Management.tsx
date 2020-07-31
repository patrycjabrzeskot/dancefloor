import React, { useState } from "react";
import Input from "./Input";
import CanvasContainer from "./CanvasContainer";

interface ManagementProps {}
const Management: React.FC<ManagementProps> = (props: ManagementProps) => {
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
      <h1> Dancefloor</h1>
      <Input title="Set column quantity" handleOnChange={setNewCol} />
      <Input title="Set row quantity" handleOnChange={setNewRow} />
      <input type="submit" value="Generate" />
      <br />
      <br />
    </>
  );
};

export default Management;
