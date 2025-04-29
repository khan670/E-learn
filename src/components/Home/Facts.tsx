import { achievementData } from "@/data/HomeData";
import React from "react";

const Facts = () => {
  return (
    <section className="px-22 py-6 mt-10">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Some Fun Fact
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Our Great <span className="text-[#2ECA7F] underline">Achievement</span>
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-15">
        {achievementData.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.heading}
              className="flex items-center bg-white p-5 gap-3 rounded border border-gray-200 shadow">
              <Icon size={50} style={{ color: value.color }} />
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-semibold text-[#1A2D62]">8232</h1>
                <p className="text-gray-500 font-medium text-sm">
                  {value.heading}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Facts;
