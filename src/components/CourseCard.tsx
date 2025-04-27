import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegClock, FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";

const CourseCard = () => {
  return (
    <div className="bg-white shadow-md relative rounded-lg text-[#1A2D62]">
      <Image src={"/c1.png"} height={300} width={500} alt="Card-1" />
      <span className="p-4 absolute top-3 left-3 inline-block rounded-full text-lg font-bold bg-[#2ECA7F] text-white">
        $49
      </span>
      <div className="py-10 px-7 flex flex-col gap-4 items-start justify-start">
        <span className="inline-block px-4 py-2 rounded-md text-base font-semibold bg-[#2ECA7F] text-white">
          Art & Design
        </span>
        <h1 className="text-xl leading-[1.2]  font-bold">
          Basic Fundamentals of Interior & Graphics Design
        </h1>
        <ul className="flex flex-wrap gap-y-1 gap-x-3 items-center ">
          <li className="font-medium text-base flex gap-1 items-center">
            <MdOutlineCalendarMonth color="#2ECA7F" size={18} /> 3 lessons
          </li>
          <li className="font-medium text-base flex gap-1 items-center">
            <FaRegClock color="#2ECA7F" size={18} /> 3h 45m
          </li>
          <li className="font-medium text-base flex gap-1 items-center">
            <FaStar color="#2ECA7F" size={18} />
            4.9
          </li>
          <li className="font-medium text-base flex gap-1 items-center">
            <FaRegCalendarAlt color="#2ECA7F" size={18} />
            30 Seats Available
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
