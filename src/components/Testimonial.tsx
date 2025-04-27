import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <section
      className="px-22 py-15 mt-10"
      style={{ backgroundImage: "url('/bgTestimonial.png')" }}>
      <h3 className="text-base uppercase tracking-wide flex items-center gap-2 font-semibold text-[#2ECA7F]">
        Testimonial
        <span className="inline-block w-20  h-[2px] bg-[#2ECA7F]"></span>
      </h3>
      <h1 className="text-4xl capitalize leading-[1.2] text-[#1A2D62] font-bold">
        What Says <span className="text-[#2ECA7F] underline">Our Students</span>
      </h1>
      <div className="flex items-center justify-end gap-5 text-[#1A2D62]">
        <button className="bg-white px-3 py-2 rounded border hover:bg-gray-50 transition-all duration-300 cursor-pointer shadow border-gray-300">
          <IoIosArrowBack size={25} />
        </button>
        <button className="bg-white px-3 py-2 rounded border transition-all duration-300 cursor-pointer border-gray-300 shadow">
          <IoIosArrowForward size={25} />
        </button>
      </div>
      {/* testimonial cards of the students */}
      <div className="grid grid-cols-3 gap-10 mt-10">
        {[1, 2, 3].map((value) => (
          <div key={value} className="rounded-md shadow overflow-hidden">
            <div className="bg-white p-7 flex flex-col gap-2">
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <FaStar size={20} key={value} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-base leading-[1.5] tracking-wide font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam
                nonumy eirmod tempor.
              </p>
            </div>
            <div className="p-7 bg-green-100 flex items-center gap-3">
              <img
                src="https://rxdtheme.com/html/tf/penn/assets/images/all-img/t1.png"
                alt=""
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="text-[#1A2D62]  flex flex-col gap-3 ">
                <h4 className="text-xl font-bold">James Clayton</h4>
                <p className="text-base font-medium">- Design Expert</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
