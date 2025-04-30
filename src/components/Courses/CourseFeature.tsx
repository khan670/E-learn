import React from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Button from "../Button";

const CourseFeature = () => {
  return (
    <div className=" overflow-hidden">
      <h1 className="py-4 text-2xl text-white  bg-[#2ECA7F] text-center font-semibold">
        Course features
      </h1>
      <ul className="py-4  flex flex-col gap-4">
        <li className="flex items-center gap-2 text-lg text-[#1A2D62] font-medium">
          <FaCalendar className="text-[#2ECA7F]" /> Course duration
          <span className="ml-auto bg-[#2ECA7F] inline-block px-2 py-1 text-white rounded-md text-base font-semibold">
            10 day&lsquo;s
          </span>
        </li>
        <li className="flex items-center gap-2 text-lg text-[#1A2D62] font-medium">
          <FaUser className="text-[#2ECA7F]" /> Total Lectures
          <span className="ml-auto bg-[#2ECA7F] inline-block px-2 py-1 text-white rounded-md text-base font-semibold">
            30
          </span>
        </li>
        <li className="flex items-center gap-2 text-lg text-[#1A2D62] font-medium">
          <FaUser className="text-[#2ECA7F]" /> Total Students
          <span className="ml-auto bg-[#2ECA7F] inline-block px-2 py-1 text-white rounded-md text-base font-semibold">
            1000
          </span>
        </li>
        <li className="flex items-center gap-2 text-lg text-[#1A2D62] font-medium">
          <GrCertificate className="text-[#2ECA7F]" /> Certification
          <span className="ml-auto bg-[#2ECA7F] inline-block px-2 py-1 text-white rounded-md text-base font-semibold">
            Yes
          </span>
        </li>
      </ul>
      <span className="inline-block w-full py-2 bg-[#2ECA7F] mt-3 text-xl font-semibold text-white text-center">
        Price 60$
      </span>
      <Button text="Register Today" className="w-full mt-3" />
    </div>
  );
};

export default CourseFeature;
