import AboutSection from "@/components/AboutSection";
import Facts from "@/components/Facts";
import Hero from "@/components/Hero";
import HomeInfo from "@/components/HomeInfo";
import TrustCompany from "@/components/TrustCompany";
import WhyChose from "@/components/WhyChose";
import Courses from "@/components/Courses";
import React from "react";
import Learning from "@/components/Learning";
import NewsLetter from "@/components/NewsLetter";
import LearnTopic from "@/components/LearnTopic";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeInfo />
      <AboutSection />
      <Facts />
      <TrustCompany />
      <WhyChose />
      <Courses />
      <Learning />
      <NewsLetter />
      {/* learn Topics */}
      <LearnTopic />
      {/* Testimonial */}
      <section
        className="px-22 py-15 mt-10"
        style={{ backgroundImage: "url('/bgTestimonial.png')" }}>
        <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
          Testimonial
          <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
        </h3>
        <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
          What Says{" "}
          <span className="text-[#2ECA7F] underline">Our Students</span>
        </h1>
        <div className="flex items-center justify-end gap-5 text-[#1A2D62]">
          <button className="bg-white px-3 py-2 rounded border hover:bg-gray-50 transition-all duration-300 cursor-pointer shadow border-gray-300">
            <IoIosArrowBack size={25} />
          </button>
          <button className="bg-white px-3 py-2 rounded border transition-all duration-300 cursor-pointer border-gray-300 shadow">
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
