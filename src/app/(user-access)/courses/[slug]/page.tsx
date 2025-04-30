"use client";
import Button from "@/components/Button";
import CourseFeature from "@/components/Courses/CourseFeature";
import React, { useState } from "react";
import { GoClock } from "react-icons/go";
import { MdCalendarViewMonth, MdOutlineCalendarMonth } from "react-icons/md";

const courseDetailHeadings = ["Overview", "Curriculum", "instructor"];

const CourseDetail = () => {
  const [CourseDetail, setCourseDetail] = useState("Overview");
  return (
    <section className="px-22 py-15 grid grid-cols-[70%_30%] gap-5">
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
        <p className="text-gray-400 text-base font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br /> <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-gray-200 mt-5">
          <ul className="text-center items-center w-full grid grid-cols-3 border-b border-b-gray-400 uppercase">
            <li
              className={`py-3 border-r border-r-gray-400 cursor-pointer   text-base  font-semibold ${
                CourseDetail === courseDetailHeadings[0]
                  ? "bg-[#2ECA7F] text-white"
                  : "text-[#1A2D62]"
              }`}
              onClick={() => setCourseDetail(courseDetailHeadings[0])}>
              {courseDetailHeadings[0]}
            </li>
            <li
              className={`py-3 border-r  border-r-gray-400 text-[#1A2D62] cursor-pointer text-base  font-semibold ${
                CourseDetail === courseDetailHeadings[1]
                  ? "bg-[#2ECA7F] text-white"
                  : "text-[#1A2D62]"
              }`}
              onClick={() => setCourseDetail(courseDetailHeadings[1])}>
              {courseDetailHeadings[1]}
            </li>
            <li
              className={`${
                CourseDetail === courseDetailHeadings[2]
                  ? "bg-[#2ECA7F] text-white"
                  : "text-[#1A2D62]"
              } py-3 border-r border-r-gray-400  text-base  font-semibold cursor-pointer`}
              onClick={() => setCourseDetail(courseDetailHeadings[2])}>
              {courseDetailHeadings[2]}
            </li>
            {/* <li className=" py-3  text-[#1A2D62] text-base  font-semibold">
              reviews
            </li> */}
          </ul>
          <div className="p-4">
            {/* Overfiew */}
            {CourseDetail === courseDetailHeadings[0] && (
              <>
                <p className="text-base font-medium text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <img
                  src="https://elements-resized.envatousercontent.com/elements-cover-images/137c335d-4d4e-4358-bc86-21492e57e5ae?w=433&cf_fit=scale-down&q=85&format=auto&s=c2bd385859bda1e609b3b78c02ca484fa4871678228e9d37c8491ef30bc6d7ce"
                  alt=""
                  className="w-full mt-5 rounded-lg
              "
                />
                <p className="text-base font-medium text-gray-500 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </>
            )}
            {/* for circulam */}
            {CourseDetail === courseDetailHeadings[1] && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br /> <br />
                roin et eros varius, ornare turpis ac, dapibus nisi. Morbi
                luctus arcu non massa consequat, et tristique velit semper.
                Curabitur interdum vulputate sagittis. Donec erat massa,
                tincidunt sed feugiat id, suscipit in est. Proin laoreet orci
                quis augue eleifend varius. Donec hendrerit ex ut lacus blandit
                euismod.
              </p>
            )}
            {/* Instructors */}
            {CourseDetail === courseDetailHeadings[2] && (
              <div className="flex items-center flex-col gap-2">
                <img
                  src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/ins-details.png"
                  alt=""
                  className="mx-auto rounded-full shadow"
                />
                <div className="py-3 px-4 relative -top-6 rounded-md bg-white shadow text-center mx-auto text-[#1A2D62] inline-block">
                  <h1 className="text-xl font-semibold">Manuel Nuer</h1>{" "}
                  <p className="text-base font-medium">TEACHER</p>
                </div>
                <p className="text-center">
                  {" "}
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur..
                </p>
              </div>
            )}
            <Button text="Enrol Now" className="uppercase mt-5 w-full" />
          </div>
        </div>
      </div>
      <div>
        <CourseFeature />
      </div>
    </section>
  );
};

export default CourseDetail;
