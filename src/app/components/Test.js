import React from "react";
import Button from "./Button";

const Test = () => {
  return (
    <div className="flex bg-lightOrange p-4 relative rounded-[20px]">
      <div className=" bg-lightOrange flex flex-col">
        <p className="text-[26px] text-black">LOGARITHM</p>
        <p className="text-[18px] font-light text-black">Test 1</p>
        <div className="flex flex-col gap-2 pt-6">
          <div className="flex flex-row gap-x-2">
            <div className="flex gap-x-2">
              <Button text="10" />
              <p className="pt-1.5 text-[12px] text-black">SUBTOPICS</p>
            </div>
            <div className="flex gap-x-2">
              <Button text="55" />
              <p className="pt-1.5 text-[12px] text-black">QUESTION</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="flex gap-x-2">
              <Button text="2 hr" />
              <p className="pt-1.5 text-[12px] text-black">
                {"TIMES"}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div className="flex gap-x-2">
              <Button text="4" />
              <p className="pt-1.5 text-[12px] text-black">DIFFICULTY</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-[19px] gap-2">
          <button className="py-4 px-9 text-blue bg-lightBlue border-[2px] rounded-[30px]">
            {"< "}Go Back to Notes
          </button>
          <button className="py-4 px-9 text-white bg-orange border-[2px] rounded-[30px]">
            Start Practice
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 absolute right-4">
        <button className="bg-orange text-white py-2 px-4 rounded-[30px] text-bold">
          {"+ New Plan"}
        </button>
        <button className="bg-lightBlue text-blue py-2 px-4 rounded-[30px] text-bold border-[2px]">
          Reset Plan
        </button>
      </div>
    </div>
  );
};

export default Test;
