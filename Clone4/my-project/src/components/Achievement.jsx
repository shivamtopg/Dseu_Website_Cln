import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Achievement = (props) => {
  const [visibleTab, setVisibleTab] = useState(0);

  return (
    <div className="py-10 sm:px-16 md:px-24 lg:px-24 xl:px-24 gap-4 bg-[#FFB7334D] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
      <div>
        <div className="text-black font-bold sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-10">
          <span className="font-extrabold text-[#005CB9]">|</span>RECENT
          ACHIEVEMENTS
        </div>
        <div className="bg-[#D9D9D9] sm:h-80 md:h-80 lg:h-80 xl:h-72 sm:w-[1vw] md:w-[75vw] lg:w-[25vw] xl:w-[33vw] 2xl:w-[43rem] border-black rounded-md border-2"></div>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="text-black font-bold sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            <span className="font-extrabold text-[#005CB9]">|</span>STUDY @ DSEU
          </div>
          <button className="bg-[#005CB9] p-2 text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            VIEW ALL PROGRAMMES
          </button>
        </div>
        <div className="flex flex-row justify-around font-semibold mt-7 mb-16 sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {props.data.map((tab, index) => (
            <button key={index} onClick={() => setVisibleTab(index)}>
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {props.data.map(
            (tab, index) =>
              index === visibleTab && (
                <div className="grid grid-cols-3 md:gap-8 lg:gap-3 xl:gap-3 md:h-48 lg:h-48 xl:h-48 sm:w-[35rem] md:w-[36rem] lg:w-[36rem] xl:w-[33rem]">
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                  <div className="bg-[#D9D9D9] rounded-md">{tab.content}</div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
