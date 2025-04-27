import React from "react";
import { IconType } from "react-icons";
import { AiOutlineCode } from "react-icons/ai";
import { FaDatabase, FaMoneyBill } from "react-icons/fa";
import { GiAtom, GiHeadphones } from "react-icons/gi";
import { SiFigma } from "react-icons/si";

const LearnTopic = () => {
  return (
    <section
      className="px-22 py-15 mt-10"
      style={{ backgroundImage: "url('/learnTopics.png')" }}>
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Start Learning
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Popular{" "}
        <span className="text-[#2ECA7F] underline">Topics To Learn</span> From
        Today.
      </h1>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {/* cards of courses */}
        {[
          SiFigma,
          AiOutlineCode,
          FaMoneyBill,
          GiAtom,
          GiHeadphones,
          FaDatabase,
        ].map((Value: IconType, index) => (
          <div
            key={index}
            className="flex items-center  bg-white shadow rounded-xl p-5 gap-3">
            <Value size={50} color="#4A90E2" />
            <div className=" flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-[#1A2D62]">
                UI/UX Design
              </h1>
              <p className="text-[#2ECA7F] font-medium text-sm">71 courses</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnTopic;
