import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1A2D62] px-22 py-15  ">
      <div className="grid grid-cols-4 gap-3 mb-10">
        <div>
          <h1 className="font-bold text-3xl tracking-wider flex items-center gap-2 text-[#2ECA7F]">
            <RiGraduationCapFill size={50} className="text-[#2ECA7F]" />
            Elrn
          </h1>
          <p className="text-white text-base font-normal mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            risus nec dui venenatis dignissim.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold ">Courses</h1>
          <ul className="text-base font-medium mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Creative Writing
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Digital Marketing
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              SEO Business
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Social Marketing
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Graphic Design
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Website Development
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold ">Company</h1>
          <ul className="text-base font-medium mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              About us
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Knowledge Base
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Affiliate Program
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Community
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Market API
            </li>
            <li className="flex items-center gap-1">
              <HiMiniMinusSmall />
              Support team
            </li>
          </ul>
        </div>
        {/* contact Info */}
        <div className="text-white">
          <h1 className="text-xl font-semibold ">Contact Info</h1>
          <ul className="text-base font-medium mt-4 flex flex-col gap-5">
            <li className="flex items-center gap-2">
              <AiOutlineMobile size={35} color="#2ECA7F" />
              <div className="flex gap-0.5 flex-col">
                <h1 className="text-xl font-semibold ">Phone number</h1>
                <p className="text-sm font-medium"> +88 457 845 695</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline size={35} color="#2ECA7F" />
              <div className="flex gap-0.5 flex-col">
                <h1 className="text-xl font-semibold ">Email Address</h1>
                <p className="text-sm font-medium"> example#yourmail.com</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <CiMap size={35} color="#2ECA7F" />
              <div className="flex gap-0.5 flex-col">
                <h1 className="text-xl font-semibold ">Office Address</h1>
                <p className="text-sm font-medium"> California, USA</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" text-gray-500" />
      <div className="text-base text-white flex items-center justify-between mt-5">
        <p>&copy; 2025. All rights reserved.</p>
        <ul className="flex items-center gap-2 ">
          <li className="hover:underline">Terms of use</li>
          <li className="hover:underline">Privacy policy</li>
          <li className="hover:underline">Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
