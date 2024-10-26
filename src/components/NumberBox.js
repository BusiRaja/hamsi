import React from "react";

export const NumberBox = ({ num, unit, flip }) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2 bg-white">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-28 h-28 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-neutral-600 w-full h-full"></div>

        <div
          className={
            "text-5xl absolute  z-10 font-bold font-sans md:text-7xl font-mono text-white"
          }
        >
          {num}
        </div>

        <div className="rounded-b-lg rounded-t-lg bg-[#1c1c1c] w-full h-full"></div>

        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-neutral-400" : "bg-[#1c1c1c]"
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[55px] rounded-full w-[12px] h-[12px] bg-white"></div>
        <div className="absolute -left-1 top-[55px] rounded-full w-[12px] h-[12px] bg-white"></div>
      </div>
      <p className="text-lg mt-3 font-semibold font-serif text-[#d42d2d] md:text-xl ">
        {unit}
      </p>
    </div>
  );
};
