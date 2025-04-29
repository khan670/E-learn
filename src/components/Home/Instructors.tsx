import React from "react";
import { FaRegFile } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";

const Instructors = () => {
  return (
    <section className="px-22 py-6 my-10">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Team Member
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Our Expert <span className="text-[#2ECA7F] underline">Instructors</span>
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {[1, 2, 3, 5].map((value) => (
          <div key={value} className="relative ">
            <img
              src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/team1.jpg"
              alt=""
              className="rounded-lg "
            />
            <div className="bg-[#2ECA7F] text-white relative bottom-10 mx-auto p-4 rounded-lg flex flex-col items-center justify-center gap-1 w-4/5">
              <h1 className="font-semibold text-xl">Marina Mojo</h1>
              <p className="font-semibold text-base">Developer</p>
              <p className="flex gap-1 items-center">
                <FaRegFile size={17} />{" "}
                <span className="underline"> 5 Course</span>
              </p>
              <p className="flex items-center">
                <PiStudentDuotone size={17} />
                <span className="underline gap-1"> 12 Student</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
