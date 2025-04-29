import React from "react";
import { FaRegFile } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

const Instructors = () => {
  return (
    <section className="px-22 py-15 ">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Our Instructor
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Our Expert <span className="text-[#2ECA7F] underline">Instructors</span>
      </h1>
      <div className="grid grid-cols-4 justify-center items-center gap-5 mt-10">
        {[1, 2, 3, 4, "Asdf", 23, 323, 332, 33].map((value) => (
          <div key={value} className="shadow rounded-xl overflow-hidden">
            <img
              src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/team5.png"
              alt=""
              className="w-full"
            />
            <div className="bg-white p-5 flex flex-col gap-2">
              <h1 className="text-center text-lg text-[#2ECA7F] font-semibold">
                Stephen Cronin
              </h1>
              <p className="text-center text-sm text-gray-500"> Designer </p>
              <ul className="flex items-center justify-between">
                <li className="font-medium text-base flex gap-1 items-center">
                  <FaRegFile color="#2ECA7F" size={18} />{" "}
                  <span className="underline text-[#1A2D62] ">5 Course </span>
                </li>
                <li className="font-medium text-base flex gap-1 items-center">
                  <LuUser color="#2ECA7F" size={18} />
                  <span className="underline text-[#1A2D62]">12 Student</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
