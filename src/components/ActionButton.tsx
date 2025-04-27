import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
interface PropType {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton = ({ text, onClick, className }: PropType) => {
  return (
    <button
      className={`${className} flex group p-3 gap-2 items-center text-[#1A2D62] cursor-pointer transition-all relative duration-300  rounded-3xl text-base font-semibold hover:text-white`}
      onClick={onClick}>
      <span className="w-12 h-full rounded-full bg-green-100 group-hover:bg-[#2ECA7F] group-hover:w-full transition-all duration-400 inline-block absolute top-0 left-0"></span>
      <span className="relative z-10 h">{text} </span>
      <IoIosArrowRoundForward
        size={25}
        className="group-hover:text-[#1A2D62] relative z-10"
      />
    </button>
  );
};

export default ActionButton;
