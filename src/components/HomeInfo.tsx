import React from "react";
import ActionButton from "./ActionButton";

const HomeInfo = () => {
  return (
    <section className="grid grid-cols-3">
      {[1, 2, 3].map((value) => (
        <div
          className="p-10 shadow bg-white flex flex-col items-start gap-3"
          key={value}>
          <h1 className="text-2xl font-semibold text-[#1A2D62] ">
            Quality Education
          </h1>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
            do eiusmod tempor incididunt ut labore.
          </p>
          <ActionButton text="Explore" />
        </div>
      ))}
    </section>
  );
};

export default HomeInfo;
