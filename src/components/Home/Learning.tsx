import React from "react";
import { ImCheckboxChecked } from "react-icons/im";

import Image from "next/image";
import ActionButton from "../ActionButton";

const Learning = () => {
  return (
    <section
      className="mt-10 p-22 h-[90vh] grid grid-cols-2 items-start gap-5"
      style={{ backgroundImage: "url('/promo-bg.png')" }}>
      <div className="flex gap-5 items-start flex-col">
        <h3 className="text-xl font-semibold text-[#2ECA7F]">
          Best Online Learning Platform
        </h3>
        <h1 className="text-5xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
          One Platfrom & Many{" "}
          <span className="text-[#2ECA7F] underline">Courses</span> For You
        </h1>
        <p className="text-base font-medium text-gray-500">
          From blogs to emails to ad copies, auto-generate catchy, original, and
          high-converting copies in popular tones languages.
        </p>
        <ul className="flex flex-col gap-3">
          {[1, 2, 3].map((value) => (
            <li
              key={value}
              className="text-lg font-semibold flex items-center gap-2 text-[#1A2D62]">
              <ImCheckboxChecked className="text-[#2ECA7F]" size={20} /> 9/10
              Average Satisfaction Rate
            </li>
          ))}
        </ul>
        <ActionButton text="EXPLORE OUR COURSES" />
      </div>
      <Image
        src={"/promo.png"}
        className="w-full h-full"
        width={600}
        height={600}
        alt="alt"
      />
    </section>
  );
};

export default Learning;
