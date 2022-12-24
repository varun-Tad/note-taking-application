import React from "react";

type Buttonprops = {
  handleClick?: () => void;
  text: string;
  classname: string;
};

export const Button = ({ handleClick, text, classname }: Buttonprops) => {
  return (
    <>
      <button onClick={handleClick} className={classname}>
        {text}
      </button>
    </>
  );
};
