import AboutSection from "@/components/Home/AboutSection";
import Facts from "@/components/Home/Facts";
import Hero from "@/components/Home/Hero";
import HomeInfo from "@/components/Home/HomeInfo";
import TrustCompany from "@/components/Home/TrustCompany";
import WhyChose from "@/components/Home/WhyChose";
import Courses from "@/components/Home/Courses";
import React from "react";
import Learning from "@/components/Home/Learning";
import NewsLetter from "@/components/Home/NewsLetter";
import LearnTopic from "@/components/Home/LearnTopic";
import Testimonial from "@/components/Home/Testimonial";
import Instructors from "@/components/Home/Instructors";

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
