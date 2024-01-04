import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-orange text-white rounded-xl w-[60px] h-[35px] text-center">
      {text}
    </button>
  );
};

export default Button;
