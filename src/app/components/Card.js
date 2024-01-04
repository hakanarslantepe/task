import React from "react";
import classNames from "classnames";

const Card = ({ card }) => {
  const containerClasses = classNames("p-2 rounded-[5px] flex justify-between" , {
    "bg-gradient-to-r from-success to-17%": card.done,
    "bg-gradient-to-r from-error to-17%": card.error,
    "bg-gradient-to-r from-progress to-17%": card.progress,
  });
  const nameClasses = classNames("text-[12px] underline", {
    "text-[#6E8B1C]": card.done,
    "text-[#E6411C]": card.error,
    "text-[#2996B9]": card.progress,
  });
  const durationClasses = classNames("text-[12px] text-black rounded-md px-2 py-1", {
    "bg-success": card.done,
    "bg-error": card.error,
    "bg-progress": card.progress,
  });
  return (
    <div className={containerClasses}>
      <div className="flex flex-col">
        <p className="text-black text-[12px]">Functions</p>
        <p className={nameClasses}>{card.name}</p>
      </div>
      <div className="flex flex-col">
        <p className={durationClasses}>{card.duration} min</p>
        <p className="text-[8px] text-black">Question:{card.question}</p>
      </div>
    </div>
  );
};

export default Card;

