import { navigationData } from "@/data/NavigationData";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import Button from "./Button";

const Header = () => {
  return (
    <header className="px-22 py-6 ">
      <nav className="flex gap-10 items-center">
        <h1 className="font-bold text-3xl tracking-wider flex items-center gap-2 text-[#1A2D62]">
          <RiGraduationCapFill size={50} className="text-[#2ECA7F]" />
          Elrn
        </h1>
        <ul className="ml-auto flex gap-5">
          {navigationData.map((value, index) => (
            <li key={index} className="font-semibold text-base text-[#1A2D62]">
              {value.text}
            </li>
          ))}
        </ul>
        <div className="relative w-fit">
          <IoCartOutline className="" size={20} />
          <span className="text-xs -top-0.5 font-semibold -right-1 w-3 text-white flex items-center justify-center h-3  absolute bg-green-500 rounded-full">
            1
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <Button text="Login" />
          <button className="px-6 py-3 border hover:shadow cursor-pointer  transition-all duration-300 border-gray-300 text-[#1A2D62] rounded-3xl text-base font-semibold ">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
