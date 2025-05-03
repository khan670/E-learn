import CourseCard from "@/components/CourseCard";
import React from "react";
import { FaPhone, FaSkype } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const InstructorDetailPage = () => {
  return (
    <section className="px-22 py-15 ">
      <div className="p-10 shadow rounded-xl grid grid-cols-[20%_80%]  bg-white  gap-5">
        <img
          src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/team-details.png"
          alt=""
          className="w-full"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-[#1A2D62]">
            Bondo Kader Khan
          </h1>
          <h2 className="text-[#2ECA7F] font-medium text-lg">
            Digital Marketer
          </h2>
          <hr className="text-gray-500" />
          <p className="text-gray-500 font-medium text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever type book.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 font-medium text-lg text-[#1A2D62]">
              <MdEmail color="#2ECA7F" />
              yourmail@gmail.com
            </li>
            <li className="flex items-center gap-2 font-medium text-lg text-[#1A2D62]">
              <FaPhone color="#2ECA7F" />
              (+123) 123 123 123
            </li>
            <li className="flex items-center gap-2 font-medium text-lg text-[#1A2D62]">
              <IoMdJet color="#2ECA7F" />
              www.yourdomainname.com
            </li>
            <li className="flex items-center gap-2 font-medium text-lg text-[#1A2D62]">
              <FaSkype color="#2ECA7F" />
              skype.address
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl capitalize leading-[1.2] text-center mt-10 text-[#1A2D62] font-bold">
        Courses
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default InstructorDetailPage;
