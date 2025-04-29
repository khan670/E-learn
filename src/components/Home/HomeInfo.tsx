import React from "react";
import ActionButton from "../ActionButton";
import { HomeInfoData } from "@/data/HomeData";

const HomeInfo = () => {
  return (
    <section className="grid grid-cols-3 ">
      {HomeInfoData.map((value) => (
        <div
          className="p-10 shadow bg-white flex flex-col items-start gap-3"
          key={value.heading}>
          <h1 className="text-2xl font-semibold text-[#1A2D62] ">
            {value.heading}
          </h1>
          <p className="text-base text-gray-400">{value.text}</p>
          <ActionButton text="Explore" />
        </div>
      ))}
    </section>
  );
};

export default HomeInfo;
