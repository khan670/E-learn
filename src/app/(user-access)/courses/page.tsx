import CourseCard from "@/components/CourseCard";
import React from "react";

const Courses = () => {
  return (
    <section className="px-22 py-15 ">
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Popular Courses
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Choose Our <span className="text-[#2ECA7F] underline">Top Courses</span>
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 44, 8, 84, 4].map((value) => (
          <CourseCard key={value} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
