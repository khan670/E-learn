import Faq from "@/components/Faqs";
import { faqs } from "@/data/FaqData";
import React from "react";

const Faqs = () => {
  return (
    <section className="px-22 py-15 ">
      <h1 className="text-4xl capitalize text-center leading-[1.2] text-[#1A2D62] font-bold">
        Frequently Asked Questions
      </h1>
      <div className="mt-5 flex flex-col gap-3">
        {faqs.map((data) => (
          <Faq data={data} key={data.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
