import React from "react";
import { IoBookOutline } from "react-icons/io5";

const WhyChose = () => {
  return (
    <section className="px-22 py-6 mt-10">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Why Choose Elrn
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Find the <span className="text-[#2ECA7F] underline">best features</span>{" "}
        of Elrn.
      </h1>
      {/* cards */}
      <div className=" grid grid-cols-3 gap-5 mt-10">
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <div
            key={value}
            className="p-10 rounded-xl hover:shadow transition-all duration-300 border border-gray-200 ">
            <div className="flex gap-3 ">
              <span className="bg-green-100 text-green-500 inline-block p-4 rounded-full">
                <IoBookOutline size={30} />
              </span>
              <p className="text-xl font-bold mt-1 text-[#1A2D62] tracking-normal">
                Learn More Anywhere
              </p>
            </div>
            <p className="text-base text-gray-400 font-semibold mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              iusto fugiat laborum maiores ipsa laboriosam porro ut, esse
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChose;
