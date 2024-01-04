"use client";
import React, { useRef, useEffect } from "react";
import Plan from "./Plan";
import { plans } from "../utils/data";

const Plans = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Calculate and set initial scroll position to center
    if (containerRef.current) {
      const container = containerRef.current;
      const initialScroll = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = initialScroll;
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="relative">
      <div
        className="flex max-w-[1440px] overflow-x-hidden gap-x-4 my-4"
        ref={containerRef}
      >
        {plans.map((plan) => (
          <Plan key={plan.id} plan={plan} />
        ))}
      </div>
      <button
        className="text-3xl text-black absolute left-1 top-1/2 transform -translate-y-1/2 rounded-full bg-lightBlue border-[1px] border-black w-10 h-10"
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      <button
        className=" text-3xl text-black absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-lightBlue border-[1px] border-black w-10 h-10"
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default Plans;
