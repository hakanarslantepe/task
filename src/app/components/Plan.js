import Image from "next/image";
import React from "react";
import dots from "../../../public/dots.svg";
import Card from "./Card";

const Plan = ({ plan }) => {
  return (
    <div className="w-[251px] h-[437px] bg-lightOrange rounded-[20px] flex-shrink-0">
      <div className="flex flex-row justify-between items-center text-black px-2 pt-2">
        <p className="text-[10px]">16 DEC 23</p>
        <Image src={dots} alt="dots" className="cursor-pointer" />
      </div>
      <div className="text-black uppercase text-center font-bold pt-4">
        {plan?.day}
      </div>
      <div className="text-[12px] text-black flex justify-between px-4 pt-4 font-[600]">
        <p>TOPIC</p>
        <p>DURATION</p>
      </div>
      <div>
        {plan.functions.map((card, id) => (
          <div key={id} className="px-4 pt-4">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
