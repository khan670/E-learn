import Image from "next/image";
import React from "react";

import { GoFileCode } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('/bg-hero.png')" }}
      className="grid grid-cols-2 items-center gap-5 px-22 py-6 h-auto bg-cover bg-[center_center]">
      <div className="flex flex-col gap-7 items-start">
        <h1 className="text-7xl font-semibold leading-[1.2] text-[#1A2D62]">
          Better <span className="text-[#2ECA7F]"> Learning Future</span> Starts
          With Elrn
        </h1>
        <p className="text-gray-400 text-lg">
          It is a long established fact that reader will be distracted readable
          content of a page when.
        </p>{" "}
        <ActionButton text="Explore Courses" />
      </div>
      <div className="relative">
        <Image
          src={"/hero-women.png"}
          width={800}
          height={800}
          className="max-w-full h-auto"
          alt="women image"
        />
        <div className="bg-white absolute bottom-50 animate-bounce  -left-3 shadow px-5 py-5 gap-2 rounded-2xl flex items-start">
          <MdPeopleOutline size={40} color="#2ECA7F" />
          <div>
            <h2 className="text-3xl font-bold text-[#1A2D62]">7500+</h2>
            <p className="text-xs text-gray-500 font-semibold">
              Active student
            </p>
          </div>
        </div>
        <div className="bg-white absolute top-20 -right-2 animate-bounce delay-200 shadow px-5 py-5 gap-2 rounded-2xl flex items-start">
          <GoFileCode size={40} color="#2ECA7F" />
          <div>
            <h2 className="text-3xl font-bold text-[#1A2D62]">7500+</h2>
            <p className="text-xs text-gray-500 font-semibold">Online Course</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
