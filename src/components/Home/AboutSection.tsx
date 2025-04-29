import Image from "next/image";
import React from "react";
import { AboutData } from "@/data/HomeData";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="grid grid-cols-2 gap-10 px-21 py-10 my-20">
      <div>
        <Image
          src={"/about_1.png"}
          alt="about-1"
          className="backdrop-blur-2xl"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-5 items-start">
        <h1 className="text-5xl capitalize leading-[1.2] text-[#1A2D62] font-semibold">
          Learn new skills to go{" "}
          <span className="text-[#2ECA7F] underline">ahead for your</span>{" "}
          career.
        </h1>
        <p className="text-gray-400  text-base ">
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
          eiusmod tempor incididunt ut labore et simply.
        </p>
        {AboutData.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.heading}
              className="p-6 rounded-2xl shadow flex items-center gap-4 hover:border-l-4 hover:border-l-green-400 transition-all duration-100 cursor-pointer">
              <span className="bg-green-100 p-5 inline-block text-green-400 rounded-full">
                <Icon size={25} />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-[#1A2D62] font-semibold text-2xl">
                  {value.heading}
                </h1>
                <p className="text-gray-400 text-base leading-[1.3]">
                  {value.text}
                </p>
              </div>
            </div>
          );
        })}
        <Button text="Discover Me" className="mt-auto" />
      </div>
    </section>
  );
};

export default AboutSection;
