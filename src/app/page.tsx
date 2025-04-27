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
import Testimonial from "@/components/Testimonial";
import { CiFileOn } from "react-icons/ci";
import { FaRegFile } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import Instructors from "@/components/Instructors";

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
      <LearnTopic />
      <Testimonial />
      <Instructors />
    </>
  );
};

export default Home;
