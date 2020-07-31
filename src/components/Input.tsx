import React from "react";

interface InputProps {
  title: string;
  handleOnChange: (userInputNew: string) => void;
}
const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <>
      <input
        placeholder={props.title}
        onChange={(event) => {
          props.handleOnChange(event.target.value);
        }}
      />
    </>
  );
};

export default Input;
