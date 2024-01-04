import React from "react";
import Image from "next/image";
import Ellipse14 from "../../../public/Ellipse 14.png";
import Ellipse15 from "../../../public/Ellipse 15.png";
import Ellipse16 from "../../../public/Ellipse 16.png";

const Level = () => {
  return (
    <div className="h-full bg-gradient-to-b from-lightBlue to-white p-4 rounded-[20px] flex-col flex gap-y-4">
      <div className="h-[70px] bg-white rounded-[15px] pt-2 text-center">
        <div className="flex justify-evenly">
          <p className="text-black border-b-[3px] border-lightOrange pb-2 inline-block">
            {"Logarithm Level  >"}
          </p>
          <p className="text-black flex items-end">%24</p>
        </div>
      </div>
      <div className="h-[183px] bg-white rounded-[15px] flex items-center text-center text-black justify-between">
        <div className="flex flex-col gap-y-2 items-center">
          <div className="rounded-full border-4 border-orange p-2">
            <Image src={Ellipse15} width={26} height={26} />
          </div>
          <p className="font-bold">%14</p>
          <p className="text-[12px]">Overall Progress</p>
        </div>

        <div className="flex flex-col gap-y-2 items-center text-center">
          <div className="rounded-full border-4 border-[#DAA5FD] p-2">
            <Image src={Ellipse14} width={26} height={26} />
          </div>
          <p className="font-bold">%74</p>
          <p className="text-[12px]">Overall Success</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center">
          <div className="rounded-full border-4 border-[#89DCC8] p-2">
            <Image src={Ellipse16} width={26} height={26} />
          </div>
          <p className="font-bold">3.4</p>
          <p className="text-[12px]">General Level</p>
        </div>
      </div>
    </div>
  );
};

export default Level;
