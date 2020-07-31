import React, { useState } from "react";
import Input from "./Input";
import CanvasContainer from "./CanvasContainer";

interface InputsSectionProps {
  setNewCol: (userInputNew: string) => void;
  setNewRow: (userInputNew: string) => void;
}
const InputsSection: React.FC<InputsSectionProps> = (
  props: InputsSectionProps
) => {
  return (
    <>
      <h1> Dancefloor</h1>
      <Input title="Set column quantity" handleOnChange={props.setNewCol} />
      <Input title="Set row quantity" handleOnChange={props.setNewRow} />
      <input type="submit" value="Generate" />
      <br />
      <br />
    </>
  );
};

export default InputsSection;
