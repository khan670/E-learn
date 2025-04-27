import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const NewsLetter = () => {
  return (
    <section className="px-22 py-6 mt-10 flex flex-col gap-5">
      <h1 className="text-4xl text-center capitalize leading-[1.2] text-[#1A2D62] font-bold">
        Subscripbe to our newsletter,
        <br /> We don&apos;t make any spam.
      </h1>
      <p className="text-base font-medium text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
        tempor enim minim
      </p>
      <div className=" rounded-xl flex items-center justify-center w-5/12 mx-auto">
        <input
          type="text"
          className="border border-gray-300 rounded-3xl flex-1 p-3 text-base focus:outline-[#2ECA7F]"
          placeholder="Enter Your Email here.."
        />
        <button className="bg-[#2ECA7F] p-3 rounded-full relative right-10">
          <RiSendPlaneFill size={25} color="white" />
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
