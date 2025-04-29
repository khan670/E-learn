import React from "react";
import { GoClock } from "react-icons/go";
import { MdCalendarViewMonth, MdOutlineCalendarMonth } from "react-icons/md";

const CourseDetail = () => {
  return (
    <section className="px-22 py-15 grid grid-cols-[60%_40%]">
      <div className="flex gap-2 flex-col">
        <img
          src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/c5.png"
          alt=""
          className="w-full"
        />
        <h1 className="text-4xl capitalize mt-2 leading-[1.2] text-[#1A2D62] font-bold">
          Professional Ceramic Moulding for Beginners
        </h1>
        <div className="flex items-center gap-3 text-gray-500">
          <p className="flex items-center text-base gap-1">
            {" "}
            <MdOutlineCalendarMonth className="text-[#2ECA7F]" />
            10 Oct 2023{" "}
          </p>{" "}
          <p className="flex items-center text-base gap-1">
            <GoClock className="text-[#2ECA7F]" />7 days{" "}
          </p>{" "}
          <p className="flex items-center text-base gap-1">
            <MdCalendarViewMonth className="text-[#2ECA7F]" />
            30 Seats Available
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default CourseDetail;
