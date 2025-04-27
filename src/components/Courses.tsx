import React from "react";
import CourseCard from "./CourseCard";
import ActionButton from "./ActionButton";

const Courses = () => {
  return (
    <section className="px-22 py-6 mt-10">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Popular Courses
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Choose Our <span className="text-[#2ECA7F] underline">Top Courses</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <CourseCard key={value} />
        ))}
      </div>
      <ActionButton text="View Courses" className="mt-10 mx-auto" />
    </section>
  );
};

export default Courses;
